import { htmlContainer } from "."
import { bodyPage } from "."

export let messageContainer = document.createElement('div')

let welcomeMessage = document.createElement('div')
let restaurantName = document.createElement('div')
let slogan = document.createElement('div')
let bodyPageMenuButton = document.createElement('button')

messageContainer.classList.add('message-container')
welcomeMessage.classList.add('welcome-message')
restaurantName.classList.add('restaurant-name')
slogan.classList.add('slogan')
bodyPageMenuButton.classList.add('body-page-menu-button')

welcomeMessage.textContent = 'Bienvenido!'
restaurantName.textContent = 'EL RESTAURANTE'
slogan.textContent = 'El placer de comer rico'
bodyPageMenuButton.textContent = 'VER EL MENU'

export default function renderHomePage(){

    messageContainer.appendChild(welcomeMessage)
    messageContainer.appendChild(restaurantName)
    messageContainer.appendChild(slogan)
    messageContainer.appendChild(bodyPageMenuButton)
    
    bodyPage.appendChild(messageContainer)
}

