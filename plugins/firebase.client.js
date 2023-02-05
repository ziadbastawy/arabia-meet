import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyB_QyTHtxfiBVcn6JgMa-PhwFWsUfxAM6M",
        authDomain: "arabia-meet-8365f.firebaseapp.com",
        projectId: "arabia-meet-8365f",
        storageBucket: "arabia-meet-8365f.appspot.com",
        messagingSenderId: "694549432530",
        appId: "1:694549432530:web:21b566bd575d54bfa9050b",
        measurementId: "G-9MXLBRFTP1"
    };

    const app = initializeApp(firebaseConfig)

    // const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})