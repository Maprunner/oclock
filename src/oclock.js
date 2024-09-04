import "../oclock.css"

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else if (document.exitFullscreen) {
    document.exitFullscreen()
  }
}

function toggleTimeDisplay() {
  const styles = window.getComputedStyle(timeDisplay1)
  const display1 = styles.getPropertyValue("display")
  if (display1 === "block") {
    timeDisplay1.style.display = "none"
    timeDisplay2.style.display = "block"
    toggleDisplay.innerText = "HH:MM"
  } else {
    timeDisplay1.style.display = "block"
    timeDisplay2.style.display = "none"
    toggleDisplay.innerText = "HH:MM:SS"
  }
}

// display types
const toggleDisplay = document.getElementById("toggleDisplay")
const timeDisplay1 = document.getElementById("timeDisplay1")
const timeDisplay2 = document.getElementById("timeDisplay2")

toggleDisplay.addEventListener("click", toggleTimeDisplay)

// button to toggle full screen display
const fullScreen = document.getElementById("toggleFullScreen")
fullScreen.addEventListener("click", toggleFullScreen)

// disable screen dimming
const requestWakeLock = async () => {
  try {
    const wakeLock = await navigator.wakeLock.request("screen")
  } catch (err) {
    console.log(err)
  }
}

// time display
const hhmmss = document.getElementById("hhmmss")
const hhmm = document.getElementById("hhmm")
const ss = document.getElementById("ss")

function getSS(dateObj) {
  const seconds = dateObj.getSeconds()
  if (seconds < 10) {
    return "0" + seconds
  }
  return seconds
}

function getHHMM(dateObj) {
  let time = {
    hours: dateObj.getHours(),
    minutes: dateObj.getMinutes(),
  }
  if (time.hours < 10) {
    time.hours = "0" + time.hours
  }
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes
  }
  return time.hours + ":" + time.minutes
}

function getHHMMSS(dateObj) {
  let time = {
    hours: dateObj.getHours(),
    minutes: dateObj.getMinutes(),
    seconds: dateObj.getSeconds(),
  }
  if (time.hours < 10) {
    time.hours = "0" + time.hours
  }
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes
  }
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds
  }

  return time.hours + ":" + time.minutes + ":" + time.seconds
}

function updateTime() {
  const dateObj = new Date()
  hhmmss.innerText = getHHMMSS(dateObj)
  hhmm.innerText = getHHMM(dateObj)
  ss.innerText = getSS(dateObj)
}

requestWakeLock()

// show time at start-up
updateTime()

// update time on 1 second timer
setInterval(function () {
  updateTime()
}, 1000)
