let scroll = false

// const task = async () => {
//     for (const item of list) {
//       await new Promise(r => setTimeout(r, 1000));
//       console.log('Yello, D\'oh');
//     }
//   }

const scrollTextArea = async () => {
    console.log('Rolling...')
    let text_area = document.getElementById('text-area')
    let action = document.getElementById('action')

    scroll = !scroll

    console.log(scroll)
    text_area.scrollTo(0, 0)

    // roof = 0
    let floor = text_area.scrollHeight - text_area.offsetHeight
    let point = 0
    if(scroll == true){
        text_area.scrollTo(0, 0)
        for(let roof = 0; roof < floor; roof++){
            // roof += 1
            // console.log('Waiting...')
            let speed =  document.getElementById('speed').value 
            await new Promise(r => setTimeout(r, 50))
            point = roof + speed
            console.log(point)
            text_area.scrollTo(0, point)
            // console.log('Celeani ng interval...')
            // clearInterval()
        }
    }
}