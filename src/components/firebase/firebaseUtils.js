import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

export async function fetchToilets() {
  const toiletsCollection = collection(db, "toilets"); // Replace 'toilets' with your collection name
  const snapshot = await getDocs(toiletsCollection);
  const toiletsData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return toiletsData;
}
// import { db } from "./firebase"; // Adjust the path to your firebase config
// import { collection, getDocs } from "firebase/firestore";

// export const fetchToilets = async () => {
//   try {
//     const toiletsRef = collection(db, "toilets");
//     const snapshot = await getDocs(toiletsRef);

//     const toilets = snapshot.docs.map((doc) => {
//       const data = doc.data();

//       // Ensure all expected fields are present with default values if missing
//       return {
//         id: doc.id,
//         name: data.name || "Unknown Name",
//         location: data.location || "Unknown Location",
//         bidet: data.bidet ?? false, // Use `??` to handle undefined
//         disabled: data.disabled ?? false,
//         male: data.male ?? false,
//         female: data.female ?? false,
//         unisex: data.unisex ?? false,
//       };
//     });

//     return toilets;
//   } catch (error) {
//     console.error("Error fetching toilets:", error);
//     throw error; // Re-throw error to handle it in the calling function
//   }
// };
