var index=0
function colorChange(){
    var colors=["red","orange","pink","black","blue"]
    document.getElementsByTagName("body")[0].style.background=colors[index++]
    if(index===colors.length-1){
        index=0
    }
}