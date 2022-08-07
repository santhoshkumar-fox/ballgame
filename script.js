var position = 1;
var points = 0;

var snack_place = snack_pointer();
var timer = 60

var hi_score_point1 = 0;

 
function task(i) {
 setTimeout(function() {
    var timer1 = document.getElementById("timerp");
    var c_time = timer - i;
    console.log("time");
    timer1.innerText = c_time+"s";

    if (c_time < 1){
        gameover();
        starts();
    }
 }, 1000 * i);
}

// runtime

document.addEventListener('keydown',keyDown);

starts();






// functions
function starts(){
    position = 1;
    var box = document.getElementById("qw1");
    box.style.backgroundColor = "blue";
    for (let i=0; i<61; i++) {
        task(i);
      }
    points = 0;
    timer = 60;
    score_counter();
    topscore()
}

function left(){
    var box = document.getElementById("qw"+position);

    box.style.backgroundColor = "transparent";


    
    position = position + 1;
    if( ((position%20)) == 1 ){
        gameover();
        
    }
    

    else{
        if(position <=200){

            var box = document.getElementById("qw"+position);
            
            box.style.backgroundColor = "blue";
            
            
            console.log("position :"+position)
            console.log("snack"+snack_place)

            if(position === snack_place){
                points = points + 10;
                console.log("PPPPPPPPPPP");
                console.log(points);
                snack_place = snack_pointer();
        
            }
        
        }
                
        else{
            gameover();
           
        }
        
    }
 
}

function right(){

    var box = document.getElementById("qw"+position);
    box.style.backgroundColor = "transparent";
    position = position - 1;
    if( ((position%20)) == 0 ){
        gameover();
        
    }
    else{

        if(position > 0){
            var box = document.getElementById("qw"+position);
    box.style.backgroundColor = "blue";
    if(position === snack_place){
        points = points + 10;
        console.log("PPPPPPPPPPP");
        console.log(points);
        snack_place = snack_pointer();

    }
        }else{
            gameover();
            
        }
    }

  
    

}

function up(){

    
    var box = document.getElementById("qw"+position);
    box.style.backgroundColor = "transparent";
    position = position - 20;
    if(position > 0){
        var box = document.getElementById("qw"+position);
    box.style.backgroundColor = "blue";
    if(position === snack_place){
        points = points + 10;
        console.log("PPPPPPPPPPP");
        console.log(points);
        snack_place = snack_pointer();

    }
    }else{
        gameover();
        
    }
    
    

}

function down(){
    var box = document.getElementById("qw"+position);
    box.style.backgroundColor = "transparent";
    position = position + 20;
    if(position <= 200){
        var box = document.getElementById("qw"+position);
        box.style.backgroundColor = "blue";
        
        
        if(position === snack_place){
            points = points + 10;
            console.log("PPPPPPPPPPP");
            console.log(points);
            snack_place = snack_pointer();
    
        }
    }else{

        gameover()
        
    }
    
  

}

function keyDown(event){
    //up
    if(event.keyCode==38){
        up();

    }
    //down
    if(event.keyCode==40){
        down();
    }

    //right
    if(event.keyCode==37){
        right()
    }
    //left
    if(event.keyCode==39){
        left()
    }

}

function gameover(){
    enterscore();
    // .popup
    // transform:scaleX(1);
    // transition: 1s;
    // clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    topscore();
    var pop = document.getElementById("popup");
    pop.style.transform = "scaleX(1)";
    pop.style.transition = "1s";
    pop.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
    
    

}

function snack_pointer(){

    var snack_place = Math.floor(Math.random() * 100);
    console.log(snack_place);
    var $snack = document.getElementById("qw"+snack_place);
    
    $snack.style.backgroundColor = 'red';
    score_counter();
    return snack_place;
    

}

function score_counter(){
    var score = document.getElementById("score");

    score.innerText = points;
    
}

function topscore(){

// assign
    var $hiscore = document.getElementById("topscore");
    var getscore = localStorage.getItem("h");
    if(getscore === 'null'){
        getscore = 0;
    }
    $hiscore.innerText = "HI :"+getscore;

}

function enterscore(){

    
    //localstorage

    
    hi_score_point1 = localStorage.getItem("h"); 
    console.log("PPPPPPPPPPPPPPPPPP");
    console.log(points);

    if(hi_score_point1 === 'null'){
        hi_score_point1 = 0;
        
    }
    if(points >= Number(hi_score_point1)){
        console.log("BIG");
        localStorage.setItem("h",points);
    }

    console.log("LLLLLLLLLLLLLLLLLLLLLL");
    console.log(hi_score_point1);
    

}

