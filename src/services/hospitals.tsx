import { QueryDocumentSnapshot, QuerySnapshot, addDoc, collection, endBefore, getCountFromServer, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { db } from "./firebase";

// todo adicionar timestamp
export interface IHospital {
  name: string,
  address: string
  phone: string,
  verified?: boolean
}

export class HospitalRepository {
  last: QueryDocumentSnapshot | null;
  perPage: number;

  constructor(perPage: number) {
    this.last = null
    this.perPage = perPage;
  }

  getHospitalRef = () => {
    return collection(db, "hospitals");
  }

  getFirstPage = async (): Promise<IHospital[]> => {
    this.last = null

    return this.getNextPage()
  }

  getTotal = async (): Promise<number> => {
    const hospitalsRef = this.getHospitalRef()
    const snapshot = await getCountFromServer(hospitalsRef)
    return snapshot.data().count
  }

  getNextPage = async (): Promise<IHospital[]> => {
    const hospitalsRef = this.getHospitalRef()
    const hospitalQuery = query(hospitalsRef, orderBy('verified'), limit(this.perPage), startAfter(this.last))
    const a = await getDocs(hospitalQuery)
    const hospitals = this.parseToHospitals(a)

    this.last = a.docs[a.docs.length - 1]
    return hospitals
  }

  getPreviousPage = async (): Promise<IHospital[]> => {
    const hospitalsRef = this.getHospitalRef()
    const hospitalQuery = query(hospitalsRef, orderBy('verified'), limit(this.perPage), endBefore(this.last))
    const a = await getDocs(hospitalQuery)
    const hospitals = this.parseToHospitals(a)

    this.last = a.docs[a.docs.length - 1]
    return hospitals
  }

  parseToHospitals = (a: QuerySnapshot) => {
    const hospitals: IHospital[] = []
    a.forEach(x => {
      const { name, address, phone, verified } = x.data()
      console.log(x.data())
      hospitals.push({ name, address, phone, verified })
    })
    return hospitals
  }


  addHospital = async (newHospital: IHospital) => {
    try {


      const docRef = await addDoc(this.getHospitalRef(), {
        ...newHospital, verified: false
      }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
}



