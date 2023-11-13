import { collection, getDocs } from "firebase/firestore";

import { db } from "./firebase";
import { IVolunteerFormInput } from "../pages/volunteer/register";

// const parseAgendaAdapter = (agenda: Array<any> = []): CalendarItemsProps[] => {
//   const parsedAgenda = agenda.map((item) => {
//     const agendaItems: CalendarItemsProps = {
//       name: item?.name,
//       id: `${item.name - item.date.toDate()}`,
//       startDateTime: item.date.toDate(),
//       endDateTime: item.date.toDate(),
//     };
//     return agendaItems;
//   });

//   return parsedAgenda;
// };
export async function getVolunteerAgenda() {
  const volunteer = collection(db, "volunteer");
  const snapshot = await getDocs(volunteer);
  const agenda = snapshot.docs.map((doc) => doc.data());
  console.log(
    "🚀 ~ file: volunteerAgenda.ts:23 ~ getVolunteerAgenda ~ agenda:",
    agenda
  );

  return agenda; // parseAgendaAdapter(agenda);
}
