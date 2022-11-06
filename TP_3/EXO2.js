/*
EXO 2
All boundaries glow red on hover
*/


function changecolor(){
   
        
        var x= document.getElementsByClassName("boundary");
        var i;
        for(i=0;i<x.length;i++){
            x[i].style.backgroundColor="red";
        }
        
        sChecked = true ;
    
}

const boundaries = document.querySelectorAll(".boundary");
boundaries.forEach(boundary => {
    boundary.addEventListener("mouseover", changecolor);
});