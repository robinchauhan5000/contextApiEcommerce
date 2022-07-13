import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyDy5N-Qfy4oSe5VwmpeEYrfz9Y1u9ZtTWA",
//   authDomain: "lisa-showroom.firebaseapp.com",
//   projectId: "lisa-showroom",
//   storageBucket: "lisa-showroom.appspot.com",
//   messagingSenderId: "277055848697",
//   appId: "1:277055848697:web:70097ed242f301c3862228"
// }

const firebaseConfig = {
  apiKey: "AIzaSyCHI-zEOZ387xHAgZi_uDlaSMLX5vs_-pw",
  authDomain: "glass-ecommerce-bfc9b.firebaseapp.com",
  projectId: "glass-ecommerce-bfc9b",
  storageBucket: "glass-ecommerce-bfc9b.appspot.com",
  messagingSenderId: "476451826749",
  appId: "1:476451826749:web:5f62e89aed9d51d9330e54",
  measurementId: "G-SDS083DJV9",
};

const app = initializeApp(firebaseConfig)
export const db =  getFirestore(app)