import firebase from './firebase.utils';

export const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = (provider) => {
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
        return res.user;
    }).catch(error => {
        return error;
    })
}

export default signInWithGoogle