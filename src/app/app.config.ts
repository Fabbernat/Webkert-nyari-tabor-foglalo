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
  apiKey: "AIzaSyD6E1XAIeCbnM9Tk1es_djKwNOKe2qCMcY",
  authDomain: "webkert-nyari-tabor-fogl-64317.firebaseapp.com",
  projectId: "webkert-nyari-tabor-fogl-64317",
  storageBucket: "webkert-nyari-tabor-fogl-64317.firebasestorage.app",
  messagingSenderId: "207380975799",
  appId: "1:207380975799:web:c50ff1c5e8824b90c7fd32",
  measurementId: "G-ETQNDYGNJE"
};