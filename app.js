function main() {
  const côté = 32
  const gridCellCount = côté * côté
  const grid = document.querySelector('.grid')
  const cells = []
  let pacmanPosition = 495
  const wallPosition = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,63,64,95,96,127,128,159,160,191,192,223,224,255,256,287,288,319,320,351,352,383,384,415,416,447,448,479,480,511,512,543,544,575,576,607,608,639,640,671,672,703,704,735,736,767,768,799,800,831,832,863,864,895,896,927,928,959,960,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023]
  let vegetable1Position = 100
  const vegetable1Territory = [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112]

  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    if (i === pacmanPosition) {
      cell.classList.add('pacman-looking-right')
    }
    if (i === vegetable1Position) {
      cell.classList.add('vegetable')
    }
    grid.appendChild(cell)
    cells.push(cell)
  }
  
  for (let i = 0; i < wallPosition.length; i++) {
    cells[wallPosition[i]].classList.add('wall')
  }
  
  // won't actually be colored, just need to see it right now
  for (let i = 0; i < vegetable1Territory.length; i++) {
    cells[vegetable1Territory[i]].classList.add('vege1terri')
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (pacmanPosition === cells.length - 1) {
        return
      }
      cells[pacmanPosition].setAttribute('class', '')
      pacmanPosition += 1
      cells[pacmanPosition].classList.add('pacman-looking-right')
    } else if (event.key === 'ArrowLeft') {
      if (pacmanPosition === 0) {
        return
      }
      cells[pacmanPosition].setAttribute('class', '')
      pacmanPosition -= 1
      cells[pacmanPosition].classList.add('pacman-looking-left')
    } else if (event.key === 'ArrowUp') {
      if (pacmanPosition < côté) {
        return
      }
      cells[pacmanPosition].setAttribute('class', '')
      pacmanPosition -= côté
      cells[pacmanPosition].classList.add('pacman-looking-up')
    } else if (event.key === 'ArrowDown') {
      if (pacmanPosition > cells.length - côté - 1) {
        return
      }
      cells[pacmanPosition].setAttribute('class', '')
      pacmanPosition += côté
      cells[pacmanPosition].classList.add('pacman-looking-down')
    }
  })

  const cellsInTerritory = []

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege1terri')) {
      cellsInTerritory.push(cells[i])
    }
  }

  const arrayOfDirections = ['right', 'left', 'up', 'down']

  setInterval(() => {
    const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
    if (randomDirection === 0) {
      if (vegetable1Position === cellsInTerritory.length - 1 || cells[vegetable1Position + 1].classList.contains('wall')) {
        return
      }
      cells[parseInt(vegetable1Position)].classList.remove('vegetable')
      vegetable1Position += 1
      cells[parseInt(vegetable1Position)].classList.add('vegetable')
    } else if (randomDirection === 1) {
      if (vegetable1Position === 0 || cells[vegetable1Position - 1].classList.contains('wall')) {
        return
      }
      cells[parseInt(vegetable1Position)].classList.remove('vegetable')
      vegetable1Position -= 1
      cells[parseInt(vegetable1Position)].classList.add('vegetable')
    } else if (randomDirection === 2) {
      if (vegetable1Position < côté || cells[vegetable1Position - côté].classList.contains('wall')) {
        return
      }
      cells[parseInt(vegetable1Position)].classList.remove('vegetable')
      vegetable1Position -= côté
      cells[parseInt(vegetable1Position)].classList.add('vegetable')
    } else if (randomDirection === 3) {
      if (vegetable1Position > cellsInTerritory.length - côté - 1 || cells[vegetable1Position + côté].classList.contains('wall')) {
        return
      }
      cells[parseInt(vegetable1Position)].classList.remove('vegetable')
      vegetable1Position += côté
      cells[parseInt(vegetable1Position)].classList.add('vegetable')
    }
  }, 500)


  // function addVegetable(cellsInTerritory) {
  //   cellsInTerritory[randomPosition].classList.add('vegetable')
  // }

  // function removeMovingVegetable(cellsInTerritory) {
  //   cellsInTerritory[randomPosition].classList.remove('vegetable')
  // }

  

  // let randomPosition = 0

  // setInterval(() => {
  //   if (cellsInTerritory[randomPosition].classList.contains('vegetable')) {
  //     removeMovingVegetable(cellsInTerritory)
  //   }
  //   randomPosition = Math.floor(Math.random() * vegetable1Territory.length)
  //   addVegetable(cellsInTerritory)
  // }, 100)





}

window.addEventListener('DOMContentLoaded', main)