import * as firebase from 'firebase/app';
import 'firebase/auth';

let app = null;

if(!firebase.app.length) {
    app = firebase.initializeApp();
}
console.log(app);

export default firebase;
