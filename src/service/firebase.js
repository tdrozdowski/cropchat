import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCEwsiY4_93-OHmMSizem2FiRSUSMvo3zU',
  authDomain: 'cropchat-97852.firebaseapp.com',
  databaseURL: 'https://cropchat-97852.firebaseio.com',
  projectId: 'cropchat-97852',
  storageBucket: 'cropchat-97852.appspot.com',
  messagingSenderId: '698186626598'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
