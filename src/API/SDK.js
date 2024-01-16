const admin = require('firebase-admin');
const serviceAccount = require('./muvrai-firebase-adminsdk-npmz2-1ea3ed24f5.json');

const fireInit = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://muvrai.firebaseio.com',
})

export default fireInit
