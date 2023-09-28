export let htmlContainer = document.getElementById('content')
export let footerContainer = document.createElement('footer')

export default function renderFooter(){
    let footerMessage = document.createElement('div')
    
    footerContainer.classList.add('footer-container')
    footerMessage.classList.add('footer-message')

    footerMessage.textContent = 'Developed by Emma'

    footerContainer.appendChild(footerMessage)
    htmlContainer.appendChild(footerContainer)
}