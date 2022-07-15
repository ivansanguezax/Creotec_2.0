//#region imports
import { initializeApp } from 'firebase/app'

import {
    getFirestore, collection,
    addDoc,
    serverTimestamp
} from 'firebase/firestore'

//#endregion imports

//#region variables
const firebaseConfig = {
    apiKey: "AIzaSyAsjMEpP5dS1eNZMRGfu1pRYZiMYisAHhc",
    authDomain: "creotec-bb78f.firebaseapp.com",
    projectId: "creotec-bb78f",
    storageBucket: "creotec-bb78f.appspot.com",
    messagingSenderId: "625893599624",
    appId: "1:625893599624:web:d779c04c398261b3d4323d"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collections
const colOrders = collection(db, "orders");
const colMakerOrders = collection(db, "maker_orders");

//#endregion variables

//#region CRUD

//! Create
const addOrder = async (data) => {
    data['time'] = serverTimestamp();
    addDoc(colOrders, data)
}

const addMakerOrder = async (data) => {
    data['time'] = serverTimestamp();
    addDoc(colMakerOrders, data)
}

export default {
    addOrder,
    addMakerOrder
}



//#endregion CRUD