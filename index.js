function tile(url, left, bottom, width, height){
    for(let h=0; h<height; h++){
        for(let w=0; w<width; w++){
            newImage(url, left + w*100, bottom + h*100)
        }
    }
}
function newImage(url, left, bottom){
    let stationary = document.createElement('img')
    stationary.src = url
    stationary.style.position = 'fixed'
    stationary.style.left = left + 'px'
    stationary.style.bottom = bottom + 'px'
    document.body.append(stationary)
    return stationary
}
function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

let horizon = window.innerHeight / 1.25
let heightOfSky = window.innerHeight - horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

