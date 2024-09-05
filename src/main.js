import "../css//pwa.css"
import { initOclock } from "./oclock.js"
import { initPWA } from "./pwa.js"

const app = document.querySelector("#app")

initOclock()

initPWA(app)
