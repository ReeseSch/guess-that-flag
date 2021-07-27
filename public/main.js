// const { default: axios } = require("axios")

// const { response } = require("express")

// const baseURL = `http://localho/api/flags`
// const baseURL = `./api/flags`
const getBtn = document.querySelector('#getBtn')
const flagZone = document.querySelector('#flag-zone')
const submitBtn = document.querySelector('#submitBtn')
const answerZone = document.querySelector('#answer-input')
const fImage = document.querySelector('#fImage')
const resZone = document.querySelector('#answer-res-zone')

let flagAnswer = ''


const errCallback = err => console.log(err)
// let randomFlag = null

const flagsCallback = () => ({ data: flags }) => getRando(flags)


getBtn.addEventListener('click', () => {
    axios.get("/api/flags").then(flagsCallback(), console.log(`button clicked`)).catch(errCallback)
})

function getRando(flags) {
    let randomID = Math.floor(Math.random() * 31); 
    flagZone.innerHTML = ``;
    console.log(`getRando is running!`)
    createFlagDisplay(flags[randomID])
    flagAnswer = flags[randomID].countryName
    // console.log(`this is the flag of ${flags[randomID].countryName}`)
}

function clearBox(element) {
    element.innerHTML = ''
}

function createFlagDisplay(flag) {
    clearBox(resZone)
    answerZone.value = ""
    const flagDisp = document.createElement('div')
    flagDisp.classList.add('flag-disp')

    flagDisp.innerHTML = `<img alt='The Flag Should Be here...' id="fImage" title="${flag.countryName}" src=${flag.flagURL}>`

    flagZone.appendChild(flagDisp)

}


submitBtn.addEventListener('click', submitHandler)
answerZone.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        submitBtn.click()
    }
})

function submitHandler(e) {
    if (answerZone.value.toLowerCase() === flagAnswer.toLowerCase()) {
        clearBox(resZone)
        let respuesta = document.createElement('div')
        respuesta.classList.add('respuesta')
        respuesta.innerHTML = `<h3>Great job! Thats the flag of ${flagAnswer}!</h3>`
        resZone.appendChild(respuesta)
    } else {
        clearBox(resZone)
        console.log(`Spoiler alert: its ${flagAnswer}`)
        let respuesta = document.createElement('h3')
        respuesta.classList.add('respuesta')
        respuesta.innerHTML = `<h3>Whoops that wasn't right... But try again!</h3>`
        resZone.appendChild(respuesta)
    }

}