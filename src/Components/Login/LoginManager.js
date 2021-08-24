import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const firebaseLoginFrameWork = () => {

    if (firebase.apps.length === 0) {

        firebase.initializeApp(firebaseConfig);
    }

}


export const createNewUser = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            updateUserName(name);
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).catch((error) => {
        console.log(error.message);
    });
}






export const userSignIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {

            const { displayName } = res.user;
            const signedInUser = {
                
                name: displayName,
                error: '',
                success: true,
            };
            signedInUser.error = '';
            signedInUser.success = true;
            return signedInUser;
        })
        .catch((error) => {
            const signedInUser = {};
            signedInUser.error = error.message;
            signedInUser.success = false;
            return signedInUser;
        });
}



export const signInWithSocial = (provider) => {

    return firebase.auth().signInWithPopup(provider).then((res) => {

        const { displayName } = res.user;

        const signedInUser = {
            isSignedIn: true,
            name: displayName,
            error: '',
            success: true,
        };
        return signedInUser;
    }).catch((err) => {
        const signedInUser = {};
        signedInUser.error = err.message;
        signedInUser.success = false;

        return signedInUser;
    });
}

