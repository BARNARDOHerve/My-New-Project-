        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyDJp5pwKuLG4rgxlxNaiLrDLzRtSMBi8CY",
            authDomain: "demoproject-41275.firebaseapp.com",
            databaseURL: "https://demoproject-41275.firebaseio.com",
            projectId: "demoproject-41275",
            storageBucket: "demoproject-41275.appspot.com",
            messagingSenderId: "805951828018",
            appId: "1:805951828018:web:8c5e199c2bd165810d4c2b"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        let auth = firebase.auth();
        let storage = firebase.storage();