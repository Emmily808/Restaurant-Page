export let htmlContainer = document.getElementById('content')
export let headerContainer = document.createElement('footer')

export default function renderHeader(){
    let headerContainer = document.createElement('header')
    let navContainer = document.createElement('li')
    let navHome = document.createElement('ol')
    let navMenu = document.createElement('ol')
    let navAbout = document.createElement('ol')
        
    headerContainer.classList.add('header-container')
    navContainer.classList.add('nav-container')
    navHome.classList.add('nav-option')
    navMenu.classList.add('nav-option')
    navAbout.classList.add('nav-option')

    headerContainer.appendChild(navContainer)
    navContainer.appendChild(navHome)
    navContainer.appendChild(navMenu)
    navContainer.appendChild(navAbout)
        
    navHome.textContent = 'HOME'
    navMenu.textContent = 'MENU'
    navAbout.textContent = 'ABOUT'

    htmlContainer.appendChild(headerContainer)
}