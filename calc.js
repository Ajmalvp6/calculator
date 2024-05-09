function displayData(n){
    display.value+=n
}

function allClear(){
    display.value=""
}

function del(){
    display.value=display.value.slice(0,-1)
}

function findOut(){
    display.value=eval(display.value)
}