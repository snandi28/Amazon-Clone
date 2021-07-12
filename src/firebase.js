import firebase from 'firebase';

    const firebaseConfig = {

        apiKey: "AIzaSyBKiMwQE8J6ytS0uZaHICv0ISK0UXbGBFY",
        authDomain: "clone-58828.firebaseapp.com",
        projectId: "clone-58828",
        storageBucket: "clone-58828.appspot.com",
        messagingSenderId: "337940873850",
        appId: "1:337940873850:web:dcb32b8a5333d6d6eeb1c3",
        measurementId: "G-SZVYDL32RD"

      };
 
      const firebaseApp = firebase.initializeApp(firebaseConfig);
      const db = firebaseApp.firestore();
      const auth = firebase.auth();

      export {db , auth };