import { bodyPage } from "."

export let aboutContainer = document.createElement('div')

let aboutTitle = document.createElement('div')
let aboutDescription = document.createElement('div')

aboutContainer.classList.add('about-container')
aboutTitle.classList.add('about-title')
aboutDescription.classList.add('about-description')

aboutTitle.textContent = 'NOSOTROS'
aboutDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod' 

export default function renderAbout(){

    aboutContainer.appendChild(aboutTitle)
    aboutContainer.appendChild(aboutDescription)
    
    bodyPage.appendChild(aboutContainer)
}

