import './style.css';

import renderHeader from './header.js'

import renderHomePage from './homePageSection';

import renderMenu from './menuSection';

import renderAbout from './about';

import renderFooter from './footer';

export let htmlContainer = document.getElementById('content')
export let bodyPage = document.createElement('main')
bodyPage.classList.add('body-page')

function renderBodyPage(){
    bodyPage.classList.add('body-page')
    htmlContainer.appendChild(bodyPage)
}

renderHeader()
renderBodyPage()
renderHomePage()
renderFooter()

let homeItsActive = true
let menuItsActive = false 
let aboutItsAcitve = false

function deleteAll(){
    let nodeList = document.querySelectorAll('.body-page')
    nodeList.forEach(function(node){
        while(node.firstChild){
            node.removeChild(node.firstChild)
        }
    })
}

document.addEventListener( 'click', (e)=>{
    let homeItsClicked = e.target.innerHTML === 'HOME'
    let menuItsClicked = e.target.innerHTML === 'MENU' || e.target.innerHTML ===  'VER EL MENU'
    let aboutItsClicked = e.target.innerHTML === 'ABOUT'

    if(menuItsClicked && !menuItsActive ){
        deleteAll()
        homeItsActive = false 
        menuItsActive = true
        aboutItsAcitve = false
        renderMenu()
    }

    else if(aboutItsClicked && !aboutItsAcitve ){
        deleteAll()
        homeItsActive = false
        menuItsActive = false 
        aboutItsAcitve = true
        renderAbout()
    }

    else if(homeItsClicked && !homeItsActive){
        deleteAll()
        homeItsActive = true
        menuItsActive = false 
        aboutItsAcitve = false
        renderHomePage()
    }

})