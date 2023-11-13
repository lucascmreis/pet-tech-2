import {
  QueryDocumentSnapshot,
  QuerySnapshot,
  addDoc,
  collection,
  endBefore,
  getCountFromServer,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { db } from "./firebase";

// todo adicionar timestamp
export interface IVolunteer {
  name: string;
  address: string;
  email: string;
  date?: Date;
}

export class VolunteerRepository {
  last: QueryDocumentSnapshot | null;
  perPage: number;

  constructor(perPage: number) {
    this.last = null;
    this.perPage = perPage;
  }

  getVolunteerAgendaRef = () => {
    return collection(db, "volunteer");
  };

  // getFirstPage = async (): Promise<IVolunteer[]> => {
  //   this.last = null;

  //   return this.getNextPage();
  // };

  getTotal = async (): Promise<number> => {
    const volunteerRef = this.getVolunteerAgendaRef();
    const snapshot = await getCountFromServer(volunteerRef);
    return snapshot.data().count;
  };

  // getNextPage = async (): Promise<IVolunteer[]> => {
  //   const hospitalsRef = this.getVolunteerAgendaRef();
  //   const hospitalQuery = query(
  //     hospitalsRef,
  //     orderBy("verified"),
  //     limit(this.perPage),
  //     startAfter(this.last)
  //   );
  //   const a = await getDocs(hospitalQuery);
  //   const hospitals = this.parseToHospitals(a);

  //   this.last = a.docs[a.docs.length - 1];
  //   return hospitals;
  // };

  // getPreviousPage = async (): Promise<IVolunteer[]> => {
  //   const hospitalsRef = this.getVolunteerAgendaRef();
  //   const hospitalQuery = query(
  //     hospitalsRef,
  //     orderBy("verified"),
  //     limit(this.perPage),
  //     endBefore(this.last)
  //   );
  //   const a = await getDocs(hospitalQuery);
  //   const hospitals = this.parseToHospitals(a);

  //   this.last = a.docs[a.docs.length - 1];
  //   return hospitals;
  // };

  // parseToHospitals = (a: QuerySnapshot) => {
  //   const hospitals: IVolunteer[] = [];
  //   a.forEach((x) => {
  //     const { name, address, phone, verified } = x.data();
  //     console.log(x.data());
  //     hospitals.push({ name, address, phone, verified });
  //   });
  //   return hospitals;
  // };

  addVolunteerAgenda = async (newVolunteerAgenda: IVolunteer) => {
    try {
      const docRef = await addDoc(
        this.getVolunteerAgendaRef(),
        newVolunteerAgenda
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
}
