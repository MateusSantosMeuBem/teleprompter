// ICONS

const PAUSE = `<svg viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_176)">
<path d="M8.57141 4H11.4286V28H8.57141V4ZM23.1428 4H20.8571C20.7 4 20.5714 4.12857 20.5714 4.28571V27.7143C20.5714 27.8714 20.7 28 20.8571 28H23.1428C23.3 28 23.4286 27.8714 23.4286 27.7143V4.28571C23.4286 4.12857 23.3 4 23.1428 4Z" fill="#9B9B9B"/>
</g>
<defs>
<filter id="filter0_d_1_176" x="-4" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_176"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_176" result="shape"/>
</filter>
</defs>
</svg>
`

const PLAY = `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3687 15.4219L10.4688 5.15937C10.025 4.77812 9.375 5.12187 9.375 5.7375V26.2625C9.375 26.8781 10.025 27.2219 10.4688 26.8406L22.3687 16.5781C22.7094 16.2844 22.7094 15.7156 22.3687 15.4219Z" fill="#9B9B9B"/>
</svg>
`

let isScrolling = false
let controller = 0

function stopLoop(text_area){
    return text_area.scrollHeight - (text_area.offsetHeight + text_area.scrollTop) < 5 ? true : false
}

function scrollTextArea(){
    let text_area = document.getElementById('text-area')
    requestAnimationFrame( () => {
        // Change icon
        let icon_container = document.getElementById('action')
        if(controller == 0){
            icon_container.innerHTML = PAUSE
        }
        controller += 1
        if(controller % 10 == 0){
            let speed =  document.getElementById('speed').value 
            text_area.scrollBy(0, speed)
        }
        if(isScrolling && !stopLoop(text_area)){
            scrollTextArea()
        }else{
            icon_container.innerHTML = PLAY
            controller = 0
        }
    })
}

function clickPlay(){
    isScrolling = !isScrolling
    if(isScrolling){
        scrollTextArea()
    }
}