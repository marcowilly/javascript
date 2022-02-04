var height, width, time = 10, lifes = 1

var timer = setInterval(function(){
    var element = getElement('remaining')
    try{
        if(time < 0){
            navigate('victory.html')
            clearInterval(createMosca)
            clearInterval(timer)
        }else{
            element.innerHTML = time--
        }
    }catch(error){
        clearInterval(timer)
    }
}, 1000)

function getTimeRefresh(){
    var level = window.location.search.replace('?','')
    switch (parseInt(level)){
        case 1:
            return 1500
        case 2:
            return 1000
        case 3:
            return 750   
    }
}

function initializeGame(){
    var level = getElement('level').value
    if(level === ''){
        alert('Selecione um nível para iniciar o jogo')
        return
    }
    navigate('game.html?'+level)
}

function adjustSizeWindow(){
    height = window.innerHeight
    width = window.innerWidth
}

function randomClass(){
    switch(getRandomNumber(3)){
        case 0:
            return 'mosca-sm'
        case 1:
            return 'mosca-md'
        case 2:
            return 'mosca-lg'     
    }
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit)
}

function randomSide(){
    switch(getRandomNumber(2)){
        case 0:
            return 'left-side'
        case 1:
            return 'right-side'    
    }
}

function getElement(arg){
    return document.getElementById(arg)
}

function navigate(arg) {
    window.location.href = arg
}

function getValueEqualOrBiggerZero(arg){
    return (arg < 0) ? 0 : arg
}

function randomPosition(){

    var element = getElement('mosca')
    if(element != undefined){
        element.remove()
        getElement('v'+lifes).src =" images/coracao_vazio.png"
        if(lifes === 3){
            navigate('end_game.html')
        }else{
            lifes++
        }
    }

    var x = getValueEqualOrBiggerZero(Math.floor(Math.random() * width)  - 90)
    var y = getValueEqualOrBiggerZero(Math.floor(Math.random() * height) - 90)

    var mosca = document.createElement('img')
    mosca.src = "images/mosca.png"
    mosca.className = randomClass() +' '+ randomSide()
    mosca.style.left = x+'px'
    mosca.style.top = y+'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function () {
        this.remove()
    }
    document.body.appendChild(mosca)
}
