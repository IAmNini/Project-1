function main() {
  const côté = 32
  const gridCellCount = côté * côté
  const grid = document.querySelector('.grid')
  const cells = []
  let pacmanPosition = 495
  const wallPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 75, 95, 96, 98, 99, 100, 101, 103, 104, 105, 106, 107, 127, 128, 130, 131, 132, 133, 135, 136, 137, 138, 139, 159, 160, 191, 192, 223, 224, 255, 256, 287, 288, 319, 320, 351, 352, 383, 384, 415, 416, 447, 448, 479, 480, 511, 512, 543, 544, 575, 576, 607, 608, 639, 640, 671, 672, 703, 704, 735, 736, 767, 768, 799, 800, 831, 832, 863, 864, 895, 896, 927, 928, 959, 960, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023]
  let vegetable1Position = 33
  let vegetable2Position = 210
  let vegetable3Position = 342
  let vegetable4Position = 400
  let vegetable5Position = 500
  let vegetable6Position = 600
  let vegetable7Position = 700
  let vegetable8Position = 800
  let vegetable9Position = 900
  const vegetable1Territory = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 65, 70, 97, 102, 129, 134, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 257, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330]
  const vegetable2Territory = [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 76, 77, 78, 79, 80, 81, 82, 83, 84, 108, 109, 110, 111, 112, 113, 114, 115, 116, 140, 141, 142, 143, 144, 145, 146, 147, 148, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340]
  const vegetable3Territory = [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350]
  const vegetable4Territory = [353, 354, 355, 356, 357, 358, 359, 360, 361, 362]
  const vegetable5Territory = []
  const vegetable6Territory = []
  const vegetable7Territory = []
  const vegetable8Territory = []
  const vegetable9Territory = []

  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
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
    console.log('I\'m chasing you!')
    const chaseInterval = setInterval(() => {
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('vege1terri') && !cells[i].classList.contains('pacman-looking-up') && !cells[i].classList.contains('pacman-looking-down') && !cells[i].classList.contains('pacman-looking-left') && !cells[i].classList.contains('pacman-looking-right')) {
          clearInterval(chaseInterval)
          console.log('I\'m letting you go')
          veggiesGoRandom()
        }
      }
      if (pacmanPosition > vegetable1Position) {
        for (let i = 0; i < vegetable1Territory.length; i++) {
          console.log('Bitch I see you')
          vegetable1Position = vegetable1Territory[i + 1]
        }
      } else if (pacmanPosition < vegetable1Position) {
        for (let i = 0; i < vegetable1Territory.length; i++) {
          console.log('Bitch I\'m coming for you')
          vegetable1Position = vegetable1Territory[i - 1]
        }
      }
    }, 300)
  }


}

window.addEventListener('DOMContentLoaded', main)