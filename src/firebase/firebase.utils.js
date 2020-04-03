import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCt2rvxxE3ZmCKSXoFoE_cyziQwAyGAdUw",
    authDomain: "crwndb-348ee.firebaseapp.com",
    databaseURL: "https://crwndb-348ee.firebaseio.com",
    projectId: "crwndb-348ee",
    storageBucket: "crwndb-348ee.appspot.com",
    messagingSenderId: "1028239468092",
    appId: "1:1028239468092:web:f4c8e95ecb10c4df8b8539",
    measurementId: "G-CLRX01EY7V"
};


export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName , email} =userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                    displayName,
                    email,
                    createAt,
                    ...additionalData
            })
        } catch(error){
            console.log("error creating user",error.message);

        }
    }
    return userRef;



    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
