function getTextSize(){
    return document.getElementById('text-size').value
}

function changeFontSize(){
    let font_size = getTextSize()
    let text_area = document.getElementById('text-area')
    text_area.style.fontSize = `${font_size}rem`
}


