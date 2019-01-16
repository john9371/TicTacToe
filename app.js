let cells = document.querySelectorAll(".cell");
var restartProg = document.querySelector(".restartBtn");
var won = false;
var whoGoesNext = 0;
var x = 0
var winnerName = "boo";
res.addEventListener("click", restartingBtn)
cells.forEach(function(cell){
    cell.addEventListener("click", cellClicked);
});
function cellClicked(e){
    if(won == false){
        if(e.target.textContent == 'X'||e.target.textContent == 'O'){
            alert("please choose an empty square")
        }else{
            x++;
            if(whoGoesNext==0){
                e.target.textContent = 'O';
                whoGoesNext++;
            }else{
                e.target.textContent = 'X';
                whoGoesNext--;
            }
        }
        for(var i = 0; i<3; i++){
            if(cells[i+3].textContent == cells[i].textContent && cells[i+6].textContent == cells[i].textContent){
                if(whoGoesNext == 1){
                    winnerName = 'O';
                }else{
                    winnerName = 'x';
                }
            }
            
        }
        for(var i = 0; i<6; i+=3){
            if(cells[i+1].textContent == cells[i].textContent && cells[i+2].textContent == cells[i].textContent){
                if(whoGoesNext == 1){
                    winnerName = 'O';
                }else{
                    winnerName = 'x';
                }
            }
        }
        if(cells[4].textContent == cells[0].textContent && cells[8].textContent == cells[0].textContent){
            if(whoGoesNext == 1){
                winnerName = 'O';
            }else{
                winnerName = 'x';
            }
        }
        if(cells[4].textContent == cells[2].textContent && cells[6].textContent == cells[2].textContent){
            if(whoGoesNext == 1){
                winnerName = 'O';
            }else{
                winnerName = 'x';
            }
        }
        
        if(winnerName == 'O'||winnerName=='X'){
            alert('Congrats to '+winnerName+'.')
            won = true;
        }
        if(won == true){
            document.getElementById("buttonAppear").innerHTML = '<button onclick="secondFunction()">New Game</button>';
        }
    }
    
}
function restartingBtn(f){
    for(var i = 0;i<9;i++){
        cells[i] = i+1;
    }
    win = false
}