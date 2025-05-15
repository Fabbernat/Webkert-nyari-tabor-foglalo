import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'; // vagy import { initializeApp } from "firebase/app";
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideFirebaseApp(() =>
    initializeApp(firebaseConfig)),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
  ]
};

const firebaseConfig = {
  apiKey: "AIzaSyBSLrSsxpMDFq7_xADx57SK4B5zgkCpmoE",
  authDomain: "webkert-nyari-tabor-foglalo.firebaseapp.com",
  projectId: "webkert-nyari-tabor-foglalo",
  storageBucket: "webkert-nyari-tabor-foglalo.firebasestorage.app",
  messagingSenderId: "595746910150",
  appId: "1:595746910150:web:e8edc2ad6fd49d4b594cc7",
  measurementId: "G-2DV7GR8V8F"
};