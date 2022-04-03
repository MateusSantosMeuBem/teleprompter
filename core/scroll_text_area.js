let scroll = false

function scrollTextArea(){
    console.log('Rolling...')
    let text_area = document.getElementById('text-area')
    let action = document.getElementById('action')

    scroll = !scroll

    console.log(scroll)
    text_area.scrollTo(0, 0)

    roof = 0
    floor = text_area.scrollHeight - text_area.offsetHeight
    if(scroll == true){
        text_area.scrollTo(0, 0)
        while (roof != floor){
            roof += 1
            console.log('Waiting...')
            setTimeout(function(){
                text_area.scrollTo(0, roof)
            }, 10000);
            console.log('Go, go, go, go!')
        }
    }
}