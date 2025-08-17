import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

var firebaseConfig = {
  apiKey: process.env.API_KEY || '',
  authDomain: process.env.AUTH_DOMAIN || '',
  databaseURL: process.env.DATABASE_URL || '',
  projectId: process.env.PROJECT_ID || '',
  storageBucket: process.env.STORAGE_BUCKET || '',
  messagingSenderId: process.env.MESSAGING_SENDER_ID || '',
  appId: process.env.APP_ID || '',
}

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export default database
