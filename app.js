function main() {
  const côté = 32
  const gridCellCount = côté * côté
  const grid = document.querySelector('.grid')
  const cells = []
  let pacmanPosition = 495
  const wallPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 75, 95, 96, 98, 99, 100, 101, 103, 104, 105, 106, 107, 127, 128, 130, 131, 132, 133, 135, 136, 137, 138, 139, 159, 160, 191, 192, 194, 195, 196, 197, 199, 200, 201, 202, 203, 223, 224, 226, 227, 228, 229, 231, 232, 233, 234, 235, 255, 256, 258, 259, 260, 261, 263, 264, 265, 266, 267, 287, 288, 319, 320, 351, 352, 383, 384, 415, 416, 447, 448, 479, 480, 511, 512, 543, 544, 575, 576, 607, 608, 639, 640, 671, 672, 703, 704, 735, 736, 767, 768, 799, 800, 831, 832, 863, 864, 895, 896, 927, 928, 959, 960, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023]
  let vegetable1Position = 166
  let vegetable2Position = 43
  let vegetable3Position = 53
  let vegetable4Position = 353
  let vegetable5Position = 363
  let vegetable6Position = 373
  let vegetable7Position = 673
  let vegetable8Position = 683
  let vegetable9Position = 693
  const vegetable1Territory = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 65, 70, 97, 102, 129, 134, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 193, 198, 225, 230, 257, 257, 262, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330]
  const vegetable2Territory = [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 76, 77, 78, 79, 80, 81, 82, 83, 84, 108, 109, 110, 111, 112, 113, 114, 115, 116, 140, 141, 142, 143, 144, 145, 146, 147, 148, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 204, 205, 206, 207, 208, 209, 210, 211, 212, 236, 237, 238, 239, 240, 241, 242, 243, 244, 268, 269, 270, 271, 272, 273, 274, 275, 276, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340]
  const vegetable3Territory = [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350]
  const vegetable4Territory = []
  for (let i = 0; i < vegetable3Territory.length; i++) {
    vegetable4Territory.push(vegetable3Territory[i] + 300)
  }
  const vegetable5Territory = []
  for (let i = 0; i < vegetable4Territory.length; i++) {
    vegetable5Territory.push(vegetable4Territory[i] + 10)
  }
  const vegetable6Territory = []
  const vegetable7Territory = []
  const vegetable8Territory = []
  const vegetable9Territory = []

  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.innerHTML = i
    if (i === pacmanPosition) {
      cell.classList.add('pacman-looking-right')
    }
    if (i === vegetable1Position || i === vegetable2Position || i === vegetable3Position || i === vegetable4Position || i === vegetable5Position || i === vegetable6Position || i === vegetable7Position || i === vegetable8Position || i === vegetable9Position) {
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

  for (let i = 0; i < vegetable2Territory.length; i++) {
    cells[vegetable2Territory[i]].classList.add('vege2terri')
  }

  for (let i = 0; i < vegetable3Territory.length; i++) {
    cells[vegetable3Territory[i]].classList.add('vege3terri')
  }

  for (let i = 0; i < vegetable4Territory.length; i++) {
    cells[vegetable4Territory[i]].classList.add('vege4terri')
  }

  for (let i = 0; i < vegetable5Territory.length; i++) {
    cells[vegetable5Territory[i]].classList.add('vege5terri')
  }

  for (let i = 0; i < vegetable6Territory.length; i++) {
    cells[vegetable6Territory[i]].classList.add('vege6terri')
  }

  for (let i = 0; i < vegetable7Territory.length; i++) {
    cells[vegetable7Territory[i]].classList.add('vege7terri')
  }

  for (let i = 0; i < vegetable8Territory.length; i++) {
    cells[vegetable8Territory[i]].classList.add('vege8terri')
  }

  for (let i = 0; i < vegetable9Territory.length; i++) {
    cells[vegetable9Territory[i]].classList.add('vege9terri')
  }



  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (pacmanPosition === cells.length - 1) {
        return
      }
      if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
        cells[pacmanPosition].classList.remove('pacman-looking-right')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
        cells[pacmanPosition].classList.remove('pacman-looking-left')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
        cells[pacmanPosition].classList.remove('pacman-looking-up')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
        cells[pacmanPosition].classList.remove('pacman-looking-down')
      }
      pacmanPosition += 1
      cells[pacmanPosition].classList.add('pacman-looking-right')
    } else if (event.key === 'ArrowLeft') {
      if (pacmanPosition === 0) {
        return
      }
      if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
        cells[pacmanPosition].classList.remove('pacman-looking-right')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
        cells[pacmanPosition].classList.remove('pacman-looking-left')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
        cells[pacmanPosition].classList.remove('pacman-looking-up')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
        cells[pacmanPosition].classList.remove('pacman-looking-down')
      }
      pacmanPosition -= 1
      cells[pacmanPosition].classList.add('pacman-looking-left')
    } else if (event.key === 'ArrowUp') {
      if (pacmanPosition < côté) {
        return
      }
      if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
        cells[pacmanPosition].classList.remove('pacman-looking-right')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
        cells[pacmanPosition].classList.remove('pacman-looking-left')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
        cells[pacmanPosition].classList.remove('pacman-looking-up')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
        cells[pacmanPosition].classList.remove('pacman-looking-down')
      }
      pacmanPosition -= côté
      cells[pacmanPosition].classList.add('pacman-looking-up')
    } else if (event.key === 'ArrowDown') {
      if (pacmanPosition > cells.length - côté - 1) {
        return
      }
      if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
        cells[pacmanPosition].classList.remove('pacman-looking-right')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
        cells[pacmanPosition].classList.remove('pacman-looking-left')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
        cells[pacmanPosition].classList.remove('pacman-looking-up')
      } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
        cells[pacmanPosition].classList.remove('pacman-looking-down')
      }
      pacmanPosition += côté
      cells[pacmanPosition].classList.add('pacman-looking-down')
    }
  })

  const cellsInTerritory1 = []

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege1terri')) {
      cellsInTerritory1.push(cells[i])
    }
  }

  const cellsInTerritory2 = []
  const cellsInTerritory3 = []
  const cellsInTerritory4 = []
  const cellsInTerritory5 = []
  const cellsInTerritory6 = []

  const arrayOfDirections = ['right', 'left', 'up', 'down']

  function veggiesGoRandom() {
    const randomInterval = setInterval(() => {
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('vege1terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
          clearInterval(randomInterval)
          chase()
        }
      }
      const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
      if (randomDirection === 0) {
        if (!cells[vegetable1Position + 1].classList.contains('vege1terri')) {
          return
        }
        cells[parseInt(vegetable1Position)].classList.remove('vegetable')
        vegetable1Position += 1
        cells[parseInt(vegetable1Position)].classList.add('vegetable')
      } else if (randomDirection === 1) {
        if (!cells[vegetable1Position - 1].classList.contains('vege1terri')) {
          return
        }
        cells[parseInt(vegetable1Position)].classList.remove('vegetable')
        vegetable1Position -= 1
        cells[parseInt(vegetable1Position)].classList.add('vegetable')
      } else if (randomDirection === 2) {
        if (!cells[vegetable1Position - côté].classList.contains('vege1terri')) {
          return
        }
        cells[parseInt(vegetable1Position)].classList.remove('vegetable')
        vegetable1Position -= côté
        cells[parseInt(vegetable1Position)].classList.add('vegetable')
      } else if (randomDirection === 3) {
        if (!cells[vegetable1Position + côté].classList.contains('vege1terri')) {
          return
        }
        cells[parseInt(vegetable1Position)].classList.remove('vegetable')
        vegetable1Position += côté
        cells[parseInt(vegetable1Position)].classList.add('vegetable')
      }
    }, 300)
  }

  veggiesGoRandom()

  function chase() {
    const chaseInterval = setInterval(() => {
      if (vegetable1Territory.includes(pacmanPosition)) {
        if (pacmanPosition === vegetable1Position) {
          alert('Oh no! You\'ve been caught!')
          cells[parseInt(vegetable1Position)].classList.remove('vegetable')
          vegetable1Position = 166
          cells[parseInt(vegetable1Position)].classList.add('vegetable')
        } else if (pacmanPosition > vegetable1Position) {
          // console.log('Bitch I see you')
          cells[parseInt(vegetable1Position)].classList.remove('vegetable')
          if (vegetable1Territory.includes(vegetable1Position + 1) && (vegetable1Position + 1 === pacmanPosition || vegetable1Position + 2 === pacmanPosition || vegetable1Position + 3 === pacmanPosition || vegetable1Position + 4 === pacmanPosition || vegetable1Position + 5 === pacmanPosition)) {
            // console.log(vegetable1Position)
            // console.log('Coming to the right!')
            vegetable1Position++
          } else if (vegetable1Territory.includes(vegetable1Position + 1) && vegetable1Territory.includes(vegetable1Position + 2) && vegetable1Territory.includes(vegetable1Position + 3) && vegetable1Territory.includes(vegetable1Position + 4) && vegetable1Territory.includes(vegetable1Position + 5)) {
            // console.log(vegetable1Position)
            // console.log('Coming to the right!')
            vegetable1Position++
          } else if (vegetable1Territory.includes(vegetable1Position + 32)) {
            // console.log(vegetable1Position)
            // console.log('Coming down!')
            vegetable1Position = vegetable1Position + 32
          } else {
            // console.log(vegetable1Position)
            // console.log('Coming to the left!')
            vegetable1Position--
          }
          cells[parseInt(vegetable1Position)].classList.add('vegetable')
        } else if (pacmanPosition < vegetable1Position) {
          // console.log('Bitch I\'m coming for you')
          cells[parseInt(vegetable1Position)].classList.remove('vegetable')
          if (vegetable1Territory.includes(vegetable1Position - 1) && (vegetable1Position - 1 === pacmanPosition || vegetable1Position - 2 === pacmanPosition || vegetable1Position - 3 === pacmanPosition || vegetable1Position - 4 === pacmanPosition || vegetable1Position - 5 === pacmanPosition)) {
            // console.log(vegetable1Position)
            // console.log('Coming to the left!')
            vegetable1Position--
          } else if (vegetable1Territory.includes(vegetable1Position - 1) && vegetable1Territory.includes(vegetable1Position - 2) && vegetable1Territory.includes(vegetable1Position - 3) && vegetable1Territory.includes(vegetable1Position - 4) && vegetable1Territory.includes(vegetable1Position - 5) && vegetable1Territory.includes(vegetable1Position - 6)) {
            // console.log(vegetable1Position)
            // console.log('Coming to the left!')
            vegetable1Position--
          } else if (vegetable1Territory.includes(vegetable1Position - 32)) {
            // console.log(vegetable1Position)
            // console.log('Coming up!')
            vegetable1Position = vegetable1Position - 32
          } else {
            // console.log(vegetable1Position)
            // console.log('Coming to the right!')
            vegetable1Position++
          }
          cells[parseInt(vegetable1Position)].classList.add('vegetable')
        }
      } else if (!vegetable1Territory.includes(pacmanPosition)) {
        console.log('I\'m letting you go')
        clearInterval(chaseInterval)
        veggiesGoRandom()
      }
    }, 300)
  }

  if (pacmanPosition === vegetable1Position) {
    alert('Oh no! You\'ve been caught!')
  }


}

window.addEventListener('DOMContentLoaded', main)