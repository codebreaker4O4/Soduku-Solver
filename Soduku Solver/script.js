var arr = [[], [], [], [], [], [], [], [], []]

for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
		arr[i][j] = document.getElementById(i * 9 + j);

	}
}


var board = [[], [], [], [], [], [], [], [], []]

function FillBoard(board) {
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {
			if (board[i][j] != 0) {
				arr[i][j].innerText = board[i][j]
			}

			else
				arr[i][j].innerText = ''
		}
	}
}

let GetPuzzle = document.getElementById('GetPuzzle')
let SolvePuzzle = document.getElementById('SolvePuzzle')

GetPuzzle.onclick = function () {
	var xhrRequest = new XMLHttpRequest()
	xhrRequest.onload = function () {
		var response = JSON.parse(xhrRequest.response)
		console.log(response)
		board = response.board
		FillBoard(board)
	}
	xhrRequest.open('get', 'https://sugoku.onrender.com/board?difficulty=easy')
	//we can change the difficulty of the puzzle the allowed values of difficulty are easy, medium, hard and random
	xhrRequest.send()
}

SolvePuzzle.onclick = () => {
	SodukuSolver();
	FillBoard(board);
};


function SodukuSolver(){
	let row; 
	let col;
	for(row=0;row<9;row++){
		for(col=0;col<9;col++){
			if(board[row][col]==0) {
				break;
			}
		}
		if(board[row][col]==0) break;
	}
	if(row==9) return true;

    for(let test=1;test<=9;test++){
        if(isValid(row,col,test)){
            board[row][col]=test;
            if(SodukuSolver()) {
                return true;
            }
            board[row][col]=0;
        }
    }
    return false;
};


function isValid(i,j,test){
    for(let ind=0;ind<9;ind++){
        if(board[i][ind]==test || board[ind][j]==test) return false;
    }
    let si= i -(i%3);
    let sj= j -(j%3);

    for(let x=0; x<3;x++){
        for(let y=0;y<3;y++){
            if(board[si+x][sj+y]==test) return false;
        }
    }
    return true;
};

