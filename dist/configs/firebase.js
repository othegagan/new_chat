import logger from '../utils/logger.js';
import admin from 'firebase-admin';
import { env } from './env.js';
const serviceAccount = {
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    projectId: env.FIREBASE_PROJECT_ID
};
// logger.info("Initializing Firebase");
// logger.info(JSON.stringify(serviceAccount, null, 2));
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: `https://${env.FIREBASE_PROJECT_ID}.firebaseio.com`
    });
    // logger.info("Firebase initialized successfully");
}
catch (error) {
    logger.error('Error initializing Firebase:', error);
}
export default admin;
