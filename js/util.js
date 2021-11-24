// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }



// function countNegs(cellI, cellJ, mat) {
//     var negsCount = 0;
//     for (var i = cellI - 1; i <= cellI + 1; i++) {
//       if (i < 0 || i > mat.length - 1) continue;
//       for (var j = cellJ - 1; j <= cellJ + 1; j++) {
//         if (j < 0 || j > mat[i].length - 1) continue;
//         if (i === cellI && j === cellJ) continue;
  
//         if (mat[i][j]) negsCount++;// might need a change
//       }
//     }
//     return negsCount;
//   }

//   function drawImg() {
//     var idx = getRandomInt(0, gGhostImgs.length)
//     var img = gGhostImgs[idx]
//     gGhostImgs.splice(idx, 1)
//     return img
// }
// function getGhostHTML(ghost) {
//     var imgSrc = (gPacman.isSuper) ? 'ghost4.png' : ghost.ghostImg;
//     return `<img src="img/${imgSrc}">`;
// }

// /// להדיגר משתנה  עם הקישור לתמונה 
// var PACMAN = '<img  class="pacman" src="img/gPacman.png" >';
// // ליישם אותו באובייקט שמייצרים
// board[gPacman.location.i][gPacman.location.j] = PACMAN



// function cellClicked(elCell, clickedNum) {
//     if (clickedNum === gNextNum) {

//         if (clickedNum === 1) {
//             startTimeInterval()
//         }

//         elCell.style.backgroundColor = 'darkgreen'
//         gNextNum++
//     }
    
//     if (gNextNum === gLevel ** 2 + 1) {
//         clearInterval(gIntervalID)
//     }
// }


// function resetGame() {
//     clearInterval(gIntervalID)
//     var elTimer = document.querySelector('.timer')
//     elTimer.innerText = 'Time:' 
// }


// function setLevel(lvl) {
//     gLevel = lvl
//     // gNums = shuffle(fillNums())
//     // renderGame()
//     resetGame()
//     init()
// }


// //לעשות משהו ספציפי בתא מסוים
// function blowUpNegs(cellI, cellJ, mat) {

//     for (var i = cellI - 1; i <= cellI + 1; i++) {
//         if (i < 0 || i >= mat.length) continue;
//         for (var j = cellJ - 1; j <= cellJ + 1; j++) {
//             if (i === cellI && j === cellJ) continue;
//             if (j < 0 || j >= mat[i].length) continue;

//             if (mat[i][j] === LIFE) {
//                 //model
//                 mat[i][j] = ''
//                 //dom
//                 renderCell(i, j, '')



//             }
//         }
//     }
//     console.table(gBoard)


// }
// //לסמן תא מסויים
// function markCells(coords) {
//     for (var i = 0; i < coords.length; i++) {
//         var coord = coords[i];
//         var elCell = document.querySelector(`#cell-${coord.i}-${coord.j}`);
//         elCell.classList.add('mark')
//     }
// }


//   // location such as: {i: 2, j: 7}
//   function renderCell(location, value) {
//     // Select the elCell and set the value
//     var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
//     elCell.innerHTML = value;
//   }