function insertValue(num){
    if(num == 'ac'){ //apagar o display
        document.getElementById('display').value = ''
    }else{ //concatenar os numeros 
        document.getElementById('display').value += num
    }
}
function calcular(){
    const input = document.getElementById('display').value
    if(input.includes(' X ')){
        let newInput = input.replace(' X ', '*')
        document.getElementById('display').value = eval(newInput)
    }else{
        document.getElementById('display').value = eval(input)
    }
}

function invetValue(){
    calcular()
    const input = document.getElementById('display').value
    document.getElementById('display').value = input * -1
    
}



/* Disparador de evento click */ // Não serve para nada, mas achei interessante 
var items = document.getElementsByClassName('item')
for(i = 0; i < items.length; i++){
    items[i].addEventListener('click', function(){
        console.log('click')
    })
}


