/*
EXO 3
Alerts on successful completion of maze
*/

 /*The game end when you lose or win*/
 
let sChecked = false;
let isLoser = false;
let isWinned = false;

function changecolor(){
    if ( !isLoser && !isWinned) {
        isLoser = true;
        var x= document.getElementsByClassName("boundary");
        var i;
        for(i=0;i<x.length;i++){
            x[i].style.backgroundColor="red";
        }
        
        
    }
}

function win() {
    if (!isLoser) {
        isWinned = true;
        alert("congratulations you won");
    }
    
}
const boundaries = document.querySelectorAll(".boundary");
boundaries.forEach(boundary => {
    boundary.addEventListener("mouseover", changecolor);
});
document.getElementById("end").addEventListener("mouseover", win);