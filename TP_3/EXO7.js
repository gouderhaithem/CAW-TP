/*
EXO 7
Disallow cheating

*/



var begin = false ;
let sChecked = false;
let isLoser = false;
let isWinned = false;
let outside = false ;
 let playing = false ;


function changecolor(){
    if (sChecked && !isLoser && !isWinned) {
        isLoser = true;
        var x= document.getElementsByClassName("boundary");
        var i;
        for(i=0;i<x.length;i++){
            x[i].style.backgroundColor="red";
        }
        document.getElementById('status').textContent = "You lose :( "
        /*setTimeout(() => {
            alert("hhhh loser");
        }) */
        sChecked = true ;
    }
}

function restart(){
    isWinned = false;
    sChecked = true;
    begin = true ;
    playing = true ;
    
    document.getElementById('status').textContent = "Move your mouse over the S to begin. "
    document.body.style.cursor="grab";
    var x= document.getElementsByClassName("boundary");
    var i;
    for(i=0;i<x.length;i++){
        x[i].style.backgroundColor="#eeeeee";
    }
    isLoser = false;
    outside = true;
    
}

function win() {
    if (begin && !isLoser) {
        isWinned = true;
        document.getElementById('status').textContent = "You won :) "
        document.getElementById('status').style.color = "green"
        setTimeout(() => {
           // alert("congratulations you won");
        })
        begin = false ;
    } else {
        document.getElementById('status').textContent = "hhhhhh sharper "
        //alert("hhhh sharper");
    }
    
}


const boundaries = document.querySelectorAll(".boundary");
boundaries.forEach(boundary => {
    boundary.addEventListener("mouseover", changecolor);
});

document.getElementById("end").addEventListener("mouseover", win);
document.getElementById("start").addEventListener("click", restart);
/** Disallow cheating  by this */

document.getElementById('maze').addEventListener('mouseleave', function () {
    if (playing) {
        var boundary = document.getElementsByClassName('boundary');
        for (let index = 0; index < boundary.length; index++) {
            boundary[index].addEventListener('mouseover', function () {
                for (let index = 0; index < boundary.length; index++) {
                    boundary[index].style.backgroundColor = 'red';
                }
            })
        }
        document.getElementById('status').textContent = "don't cheat entre the zone  "
        document.getElementById('status').style.color = "red"
        playing = false;
        isLoser = true;
    }
})