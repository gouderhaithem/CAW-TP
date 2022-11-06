/*
EXO 4
Restartable maze

*/
/*The game end when you lose or win
  you have to restart the game by click (S)
*/

let sChecked = false;
let isLoser = false;
let isWinned = false;
let begin = false ;

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
function restart(){
    isWinned = false;
    sChecked = true;
    begin = true ;
    document.body.style.cursor="grab";
    var x= document.getElementsByClassName("boundary");
    var i;
    for(i=0;i<x.length;i++){
        x[i].style.backgroundColor="#eeeeee";
    }
    isLoser = false;
    
}

const boundaries = document.querySelectorAll(".boundary");
boundaries.forEach(boundary => {
    boundary.addEventListener("mouseover", changecolor);
});
document.getElementById("end").addEventListener("mouseover", win);
document.getElementById("start").addEventListener("click", restart);