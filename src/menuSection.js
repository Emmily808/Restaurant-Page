import { bodyPage } from "."
export let menuContainer = document.createElement('div')

let titleOfTheSection = document.createElement('div')
    
let firstMenuContainer = document.createElement('div')
let firstMenuTitle = document.createElement('div')
let firstMenuDescription = document.createElement('p')
let firstMenuPrice = document.createElement('div')

let secondMenuContainer = document.createElement('div')
let secondMenuTitle = document.createElement('div')
let secondMenuDescription = document.createElement('p')
let secondMenuPrice = document.createElement('div')

let thirdMenuContainer = document.createElement('div')
let thirdMenuDescription = document.createElement('p')
let thirdMenuTitle = document.createElement('div')
let thirdMenuPrice = document.createElement('div')

menuContainer.classList.add('menu-container')
titleOfTheSection.classList.add('menu-title-section')
firstMenuContainer.classList.add('first-menu-container')
firstMenuTitle.classList.add('first-menu-title')
firstMenuDescription.classList.add('first-menu-description')
firstMenuPrice.classList.add('menu-price')

secondMenuContainer.classList.add('second-menu-container')
secondMenuTitle.classList.add('second-menu-title')
secondMenuDescription.classList.add('second-menu-description')
secondMenuPrice.classList.add('menu-price')

thirdMenuContainer.classList.add('third-menu-container')
thirdMenuTitle.classList.add('third-menu-title')
thirdMenuDescription.classList.add('third-menu-description')
thirdMenuPrice.classList.add('menu-price')

titleOfTheSection.textContent = 'MENU'
firstMenuTitle.textContent = 'Comida1'
firstMenuDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
firstMenuPrice.textContent = '20$'

secondMenuTitle.textContent = 'Comida2'
secondMenuDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
secondMenuPrice.textContent = '20$'

thirdMenuTitle.textContent = 'Comida3'
thirdMenuDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
thirdMenuPrice.textContent = '20$'


export default function renderMenu(){
    menuContainer.appendChild(titleOfTheSection)
    menuContainer.appendChild(firstMenuContainer)
    firstMenuContainer.appendChild(firstMenuTitle)
    firstMenuContainer.appendChild(firstMenuDescription)
    firstMenuContainer.appendChild(firstMenuPrice)
    
    menuContainer.appendChild(secondMenuContainer)
    secondMenuContainer.appendChild(secondMenuTitle)
    secondMenuContainer.appendChild(secondMenuDescription)
    secondMenuContainer.appendChild(secondMenuPrice)

    menuContainer.appendChild(thirdMenuContainer)
    thirdMenuContainer.appendChild(thirdMenuTitle)
    thirdMenuContainer.appendChild(thirdMenuDescription)
    thirdMenuContainer.appendChild(thirdMenuPrice)
    
    bodyPage.appendChild(menuContainer)
}

