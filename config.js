import firebase from 'firebase'

const config = {
  projectId: process.env.projectId,
  apiKey: process.env.apiKey,
  databaseURL: process.env.databaseURL
};

// Make sure there isnt already an existing firebaseApp
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
const database = firebaseApp.database()

export { database };