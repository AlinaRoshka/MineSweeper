
const FLAG_IMG = '<img src="img/flag.png" />';
const HEART_IMG = '<img src="img/heart.png" />';
const TIMER_IMG = '<img src="img/timer.png" />';
const VICTORY_IMG = '<img src="img/victory.png" />';
const MINE_IMG = '<img src="img/mine.png" />';

////smileys icons 
const NORMAL = ''
const LOSE = ''
const WIN = ''

//modal
var gBoard
var gcurrCell = {
    minesAroundCount: 0,
    isShown: true,
    isMine: false,
    isMarked: true

}

var gLevel = {
    SIZE: 4,
    MINES: 2
};



var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

const MINE = '💣';

function initGame() {
    gBoard = createBoard(4)
    // console.table(gBoard);
    renderBoard(gBoard);
    // console.table(renderBoard);

}
// TODO:CREATE BOARD 4*4 (MAT) containing Objects. Place 2 mines
// manually when each cell’s isShown set to true.


function createBoard(size) {
    var board = [];

    for (var i = 0; i < size; i++) {
        board[i] = [];
        for (var j = 0; j < size; j++) {
            var cell = {

                minesAroundCount: 0,
                isShown: true,
                isMine: false,
                isMarked: true
            }

            board[i][j] = cell
        }
    }

    board[2][3] = MINE;
    board[3][2] = MINE;

    return board;
}

// TODO:Present the mines using renderBoard() function.

function renderBoard(board) {
    var strHTML = '';


    for (var i = 0; i < board.length; i++) {
        strHTML += `<tr> \n`
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            var className = (cell.isShown) ? ' true' : ' false';
            className += (cell === MINE) ? MINE : false;
            className += (cell.isMarked) ? ' true' : ' false';
            // console.log('cell',cell)
            strHTML += `\t<td class="cell ${className}" 
             onclick="cellClicked(this, ${i}, ${j})" >
         </td>\n`
        }
        strHTML += `</tr>\n`
    }
    // console.log(strHTML)

    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    // console.log(elBoard)

}
// TODO:counting neighbors:
// 1.Make sure your renderBoard() function adds the cell ID to 
// each cell and onclick on each cell calls cellClicked()v
// function.v
// 2. Make the default “isShown” to be “false”
// 3. Implement that clicking a cell with “number” reveals the 
// number of this cell


function cellClicked(elCell, i, j) {
    var cell = gBoard[i][j]
    if (cell !== MINE) {
        isShown = false;
        console.log('cell', cell);
        elCell.style.backgroundColor = 'rgb(72, 90, 90)';
        minesCount(i, j, gBoard);

    }


}


function minesCount(cellI, cellJ, mat) {
    var minesCount = 0;

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i > mat.length - 1) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j > mat[i].length - 1) continue;
            if (i === cellI && j === cellJ) continue;

            if (mat[i][j] === MINE) minesCount++
            console.log('minesCount', minesCount)
            renderCell(cellI,cellJ,minesCount)
        }
    }
    return minesCount;
}



// location such as: {i: 2, j: 7}
function renderCell(locationi,locationj, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell${locationi}-${locationj}`);
    console.log('elCell', elCell)

    elCell.innerHTML = value;
    console.log('elCell', elCell)

}



// TODO:randomize mines' location:
// 1. Randomly locate the 2 mines on the board
// 2. Present the mines using renderBoard() function.

// Next Steps: Head back to Functionality and Features and then 
// on to Further Tasks, and if time permits check out the Bonus 
// Tasks section
