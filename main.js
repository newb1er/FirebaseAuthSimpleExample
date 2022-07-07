import './style.css'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { config } from './config/config'

const app = initializeApp(config)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

await signInWithPopup(auth, provider)

const token = await auth.currentUser.getIdToken()

console.log(token)

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <h2>Firebase Login Success</h2>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
