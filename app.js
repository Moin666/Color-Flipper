var color = []


var bg = document.querySelector(".size_div");
var btn = document.querySelector(".btn");
var contentColor  = document.querySelector(".content");
var hexBtn = document.querySelector(".hex_btn");

var hexClicked = false;


btn.addEventListener("click",function(iter){
 colorPicker(1);
 bg.style.background = color;
 contentColor.innerHTML = color;
 
 color.pop()
})

bg.style.background = "#44A051"
hexBtn.addEventListener("click",function(){
    hexClicked = !hexClicked;
})

function colorPicker(iteration){
    for(var i = 0; i < iteration; i ++){
        color.push(randomColor());
        console.log(color)

    }

}


function randomColor(){

    if (hexClicked){
        var i = Math.round(Math.random() * 8);
        var j = Math.round(Math.random() * 8);
        var k = "A";
        var l = Math.round(Math.random() * 8);
        var m = Math.round(Math.random() * 8);
        var n = "F  "
        return "#"+i+j+k+l+m+n
    }
    else{
        var r = Math.round(Math.random() * 256);
        var g = Math.round(Math.random() * 256);
        var b = Math.round(Math.random() * 256);
        return "rgb"+ "("+ r + " ," + g + " ," + b + ")"
    }


    
}



