function main() {

  // VARIABLES AND ARRAYS 

  const côté = 32
  const gridCellCount = côté * côté
  const grid = document.querySelector('.grid')
  const cells = []
  let applesEaten = 0
  const applesEatenDisplay = document.querySelector('.apples-eaten')
  let applesRemaining = 412
  const applesRemainingDisplay = document.querySelector('.apples-remaining')
  let lives = 3
  const livesDisplay = document.querySelector('.lives-remaining')
  let pacmanPosition = 33
  const wallPosition = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 45, 46, 47, 48, 49, 50, 63, 64, 66, 67, 68, 69, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 90, 91, 92, 93, 95, 96, 98, 99, 100, 101, 103, 104, 105, 106, 107, 116, 117, 118, 119, 120, 122, 123, 124, 125, 127, 128, 130, 131, 132, 133, 135, 136, 137, 138, 139, 141, 143, 144, 146, 148, 149, 150, 151, 152, 154, 155, 156, 157, 159, 160, 173, 175, 176, 178, 191, 192, 194, 195, 196, 197, 199, 200, 201, 202, 203, 205, 207, 208, 210, 212, 213, 214, 215, 216, 218, 219, 220, 221, 223, 224, 226, 227, 228, 229, 231, 232, 233, 234, 235, 237, 239, 240, 242, 244, 245, 246, 247, 248, 250, 251, 252, 253, 255, 256, 258, 259, 260, 261, 263, 264, 265, 266, 267, 269, 274, 276, 277, 278, 279, 280, 282, 283, 284, 285, 287, 288, 290, 291, 292, 293, 301, 302, 303, 304, 305, 306, 314, 315, 316, 317, 319, 320, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 351, 352, 353, 354, 355, 356, 357, 378, 379, 380, 381, 382, 383, 384, 391, 392, 394, 395, 396, 398, 399, 400, 401, 403, 404, 405, 407, 408, 415, 416, 418, 419, 420, 421, 423, 424, 426, 427, 428, 435, 436, 437, 439, 440, 442, 443, 444, 445, 447, 448, 458, 459, 460, 462, 463, 464, 465, 467, 468, 469, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 490, 494, 495, 496, 497, 501, 503, 504, 505, 506, 507, 508, 509, 510, 511, 513, 514, 515, 516, 517, 518, 519, 520, 512, 524, 526, 527, 528, 529, 531, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 554, 555, 556, 558, 559, 560, 561, 563, 564, 565, 575, 576, 578, 579, 580, 581, 583, 584, 586, 587, 588, 595, 596, 597, 599, 600, 602, 603, 604, 605, 607, 608, 615, 616, 618, 619, 620, 622, 623, 624, 625, 627, 628, 629, 631, 632, 639, 640, 641, 642, 643, 644, 645, 666, 667, 668, 669, 670, 671, 672, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 703, 704, 706, 707, 708, 709, 717, 718, 719, 720, 721, 722, 730, 731, 732, 733, 735, 736, 738, 739, 740, 741, 743, 744, 745, 746, 747, 749, 754, 756, 757, 758, 759, 760, 762, 763, 764, 765, 767, 768, 770, 771, 772, 773, 775, 776, 777, 778, 779, 781, 783, 784, 786, 788, 789, 790, 791, 792, 794, 795, 796, 797, 799, 800, 802, 803, 804, 805, 807, 808, 809, 810, 811, 813, 815, 816, 818, 820, 821, 822, 823, 824, 826, 827, 828, 829, 831, 832, 845, 847, 848, 850, 863, 864, 866, 867, 868, 869, 871, 872, 873, 874, 875, 877, 879, 880, 882, 884, 885, 886, 887, 888, 890, 891, 892, 893, 895, 896, 898, 899, 900, 901, 903, 904, 905, 906, 907, 916, 917, 918, 919, 920, 922, 923, 924, 925, 927, 928, 930, 931, 932, 933, 935, 936, 937, 938, 939, 941, 942, 943, 944, 945, 946, 948, 949, 950, 951, 952, 954, 955, 956, 957, 959, 960, 973, 974, 975, 976, 977, 978, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023]
  let vegetable1Position = 166
  let vegetable2Position = 111
  let vegetable3Position = 185
  let vegetable4Position = 489
  let vegetable5Position = 363
  let vegetable6Position = 473
  let vegetable7Position = 838
  let vegetable8Position = 912
  let vegetable9Position = 857
  const vegetable1Territory = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 65, 70, 97, 102, 129, 134, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 193, 198, 225, 230, 257, 257, 262, 289, 294, 295, 296, 297, 298, 321, 322, 323, 324, 325, 326]
  const vegetable2Territory = [43, 44, 51, 52, 76, 83, 108, 109, 110, 111, 112, 113, 114, 115, 140, 142, 145, 147, 171, 172, 174, 177, 179, 180, 204, 206, 209, 211, 236, 238, 241, 243, 268, 270, 271, 272, 273, 275, 299, 300, 307, 308]
  const vegetable3Territory = [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 89, 94, 121, 126, 153, 158, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 217, 222, 249, 254, 281, 286, 309, 310, 311, 312, 313, 318, 345, 346, 347, 348, 349, 350]
  const vegetable4Territory = [358, 359, 360, 361, 362, 385, 386, 387, 388, 389, 390, 393, 417, 422, 425, 449, 450, 451, 452, 453, 454, 455, 456, 457, 489, 521, 522, 545, 546, 547, 548, 549, 550, 551, 552, 553, 577, 582, 585, 609, 610, 611, 612, 613, 614, 617, 646, 647, 648, 649, 650]
  const vegetable5Territory = [363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 397, 402, 429, 430, 431, 432, 433, 434, 461, 466, 491, 492, 493, 498, 499, 500, 523, 525, 530, 532, 557, 562, 589, 590, 591, 592, 593, 594, 621, 626, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660]
  const vegetable6Territory = [373, 374, 375, 376, 377, 406, 409, 410, 411, 412, 413, 414, 438, 441, 446, 470, 471, 472, 473, 474, 475, 476, 477, 478, 502, 533, 534, 566, 567, 568, 569, 570, 571, 572, 573, 574, 598, 601, 606, 630, 633, 634, 635, 636, 637, 638, 661, 662, 663, 664, 665]
  const vegetable7Territory = [673, 674, 675, 676, 677, 678, 705, 710, 711, 712, 713, 714, 737, 742, 769, 774, 801, 806, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 865, 870, 897, 902, 929, 934, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970]
  const vegetable8Territory = [715, 716, 723, 724, 748, 750, 751, 752, 753, 755, 780, 782, 785, 787, 812, 814, 817, 819, 843, 844, 846, 849, 851, 852, 876, 878, 881, 883, 908, 909, 910, 911, 912, 913, 914, 915, 940, 947, 971, 972, 979, 980]
  const vegetable9Territory = [697, 698, 699, 700, 701, 702, 725, 726, 727, 728, 729, 734, 761, 766, 793, 798, 825, 830, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 889, 894, 921, 926, 953, 958, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990]
  const arrayOfDirections = ['right', 'left', 'up', 'down']
  const startButton = document.querySelector('.start-button')
  const storyButton = document.querySelector('.story')
  const main = document.querySelector('main')
  const starWarsIntro = document.querySelector('.star-wars-intro')

  storyButton.addEventListener('click', () => {
    main.style.display = 'none'
    starWarsIntro.style.display = 'block'
    setTimeout(() => {
      starWarsIntro.style.display = 'none'
      main.style.display = 'flex'
    }, 32000)
  })

  startButton.addEventListener('click', () => {

    // INITIAL SET UP LOOP

    for (let i = 0; i < gridCellCount; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      // cell.innerHTML = i
      if (i === pacmanPosition) {
        cell.classList.add('pacman-looking-right')
      }
      if (i === vegetable1Position || i === vegetable2Position || i === vegetable3Position || i === vegetable4Position || i === vegetable5Position || i === vegetable6Position || i === vegetable7Position || i === vegetable8Position || i === vegetable9Position) {
        cell.classList.add('vegetable')
      }
      if (!cell.classList.contains('wall')) {
        cell.classList.add('apple')
      }
      grid.appendChild(cell)
      cells.push(cell)
    }

    // WALL CLASS LOOP

    for (let i = 0; i < wallPosition.length; i++) {
      cells[wallPosition[i]].classList.add('wall')
    }

    // TERRITORY CLASSES LOOPS
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

    // PAC-MAN MOVES 

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        console.log(pacmanPosition)
        console.log(cells[pacmanPosition + 1])
        if (pacmanPosition === cells.length - 1 || cells[pacmanPosition + 1].classList.contains('wall')) {
          console.log('hello')
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
        console.log(pacmanPosition)
        console.log(cells[pacmanPosition - 1])
        if (pacmanPosition === 0 || cells[pacmanPosition - 1].classList.contains('wall')) {
          console.log('hello')
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
        console.log(pacmanPosition)
        console.log(cells[pacmanPosition - côté])
        if (cells[pacmanPosition - côté].classList.contains('wall')) {
          console.log('hello')
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
        console.log(pacmanPosition)
        console.log(cells[pacmanPosition + côté])
        if (cells[pacmanPosition + côté].classList.contains('wall')) {
          console.log('hello')
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
      if (cells[pacmanPosition].classList.contains('apple')) {
        cells[pacmanPosition].classList.remove('apple')
        applesEaten++
        applesEatenDisplay.innerHTML = applesEaten
        applesRemaining--
        applesRemainingDisplay.innerHTML = applesRemaining
        if (applesRemaining === 0) {
          cells[pacmanPosition].classList.remove('apple')
          applesEaten = 412
          applesEatenDisplay.innerHTML = applesEaten
          applesRemaining = 0
          applesRemainingDisplay.innerHTML = applesRemaining
          alert('You win!')
        }
      }
    })

    // CELLS IN TERRITORY LOOPS

    const cellsInTerritory1 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege1terri')) {
        cellsInTerritory1.push(cells[i])
      }
    }

    const cellsInTerritory2 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege2terri')) {
        cellsInTerritory2.push(cells[i])
      }
    }

    const cellsInTerritory3 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege3terri')) {
        cellsInTerritory3.push(cells[i])
      }
    }

    const cellsInTerritory4 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege4terri')) {
        cellsInTerritory4.push(cells[i])
      }
    }

    const cellsInTerritory5 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege5terri')) {
        cellsInTerritory5.push(cells[i])
      }
    }

    const cellsInTerritory6 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege6terri')) {
        cellsInTerritory6.push(cells[i])
      }
    }

    const cellsInTerritory7 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege7terri')) {
        cellsInTerritory7.push(cells[i])
      }
    }

    const cellsInTerritory8 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege8terri')) {
        cellsInTerritory8.push(cells[i])
      }
    }

    const cellsInTerritory9 = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('vege9terri')) {
        cellsInTerritory9.push(cells[i])
      }
    }

    // FUNCTIONS FOR VEGGIE 1

    function veggie1GoesRandom() {
      const randomInterval1 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege1terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval1)
            veggie1Chase()
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

    veggie1GoesRandom()

    function veggie1Chase() {
      const chaseInterval1 = setInterval(() => {
        if (vegetable1Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable1Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable1Position)].classList.remove('vegetable')
            vegetable1Position = 166
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable1Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable1Position) {
            cells[parseInt(vegetable1Position)].classList.remove('vegetable')
            if (vegetable1Territory.includes(vegetable1Position + 1) && (vegetable1Position + 1 === pacmanPosition || vegetable1Position + 2 === pacmanPosition || vegetable1Position + 3 === pacmanPosition || vegetable1Position + 4 === pacmanPosition || vegetable1Position + 5 === pacmanPosition)) {
              vegetable1Position++
            } else if (vegetable1Territory.includes(vegetable1Position + 1) && vegetable1Territory.includes(vegetable1Position + 2) && vegetable1Territory.includes(vegetable1Position + 3) && vegetable1Territory.includes(vegetable1Position + 4) && vegetable1Territory.includes(vegetable1Position + 5)) {
              vegetable1Position++
            } else if (vegetable1Territory.includes(vegetable1Position + 32)) {
              vegetable1Position = vegetable1Position + 32
            } else {
              vegetable1Position--
            }
            cells[parseInt(vegetable1Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable1Position) {
            cells[parseInt(vegetable1Position)].classList.remove('vegetable')
            if (vegetable1Territory.includes(vegetable1Position - 1) && (vegetable1Position - 1 === pacmanPosition || vegetable1Position - 2 === pacmanPosition || vegetable1Position - 3 === pacmanPosition || vegetable1Position - 4 === pacmanPosition || vegetable1Position - 5 === pacmanPosition)) {
              vegetable1Position--
            } else if (vegetable1Territory.includes(vegetable1Position - 1) && vegetable1Territory.includes(vegetable1Position - 2) && vegetable1Territory.includes(vegetable1Position - 3) && vegetable1Territory.includes(vegetable1Position - 4) && vegetable1Territory.includes(vegetable1Position - 5) && vegetable1Territory.includes(vegetable1Position - 6)) {
              vegetable1Position--
            } else if (vegetable1Territory.includes(vegetable1Position - 32)) {
              vegetable1Position = vegetable1Position - 32
            } else {
              vegetable1Position++
            }
            cells[parseInt(vegetable1Position)].classList.add('vegetable')
          }
        } else if (!vegetable1Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval1)
          veggie1GoesRandom()
        }
      }, 300)
    }

    // FUNCTIONS FOR VEGGIE 2

    function veggie2GoesRandom() {
      const randomInterval2 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege2terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval2)
            veggie2Chase()
          }
        }
        const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
        if (randomDirection === 0) {
          if (!cells[vegetable2Position + 1].classList.contains('vege2terri')) {
            return
          }
          cells[parseInt(vegetable2Position)].classList.remove('vegetable')
          vegetable2Position += 1
          cells[parseInt(vegetable2Position)].classList.add('vegetable')
        } else if (randomDirection === 1) {
          if (!cells[vegetable2Position - 1].classList.contains('vege2terri')) {
            return
          }
          cells[parseInt(vegetable2Position)].classList.remove('vegetable')
          vegetable2Position -= 1
          cells[parseInt(vegetable2Position)].classList.add('vegetable')
        } else if (randomDirection === 2) {
          if (!cells[vegetable2Position - côté].classList.contains('vege2terri')) {
            return
          }
          cells[parseInt(vegetable2Position)].classList.remove('vegetable')
          vegetable2Position -= côté
          cells[parseInt(vegetable2Position)].classList.add('vegetable')
        } else if (randomDirection === 3) {
          if (!cells[vegetable2Position + côté].classList.contains('vege2terri')) {
            return
          }
          cells[parseInt(vegetable2Position)].classList.remove('vegetable')
          vegetable2Position += côté
          cells[parseInt(vegetable2Position)].classList.add('vegetable')
        }
      }, 300)
    }

    veggie2GoesRandom()

    function veggie2Chase() {
      const chaseInterval2 = setInterval(() => {
        if (vegetable2Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable2Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable2Position)].classList.remove('vegetable')
            vegetable2Position = 111
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable2Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable2Position) {
            cells[parseInt(vegetable2Position)].classList.remove('vegetable')
            if (vegetable2Territory.includes(vegetable2Position + 1) && (vegetable2Position + 1 === pacmanPosition || vegetable2Position + 2 === pacmanPosition || vegetable2Position + 3 === pacmanPosition || vegetable2Position + 4 === pacmanPosition || vegetable2Position + 5 === pacmanPosition)) {
              vegetable2Position++
            } else if (vegetable2Territory.includes(vegetable2Position + 1) && vegetable2Territory.includes(vegetable2Position + 2) && vegetable2Territory.includes(vegetable2Position + 3) && vegetable2Territory.includes(vegetable2Position + 4) && vegetable2Territory.includes(vegetable2Position + 5)) {
              vegetable2Position++
            } else if (vegetable2Territory.includes(vegetable2Position + 32)) {
              vegetable2Position = vegetable2Position + 32
            } else {
              vegetable2Position--
            }
            cells[parseInt(vegetable2Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable2Position) {
            cells[parseInt(vegetable2Position)].classList.remove('vegetable')
            if (vegetable2Territory.includes(vegetable2Position - 1) && (vegetable2Position - 1 === pacmanPosition || vegetable2Position - 2 === pacmanPosition || vegetable2Position - 3 === pacmanPosition || vegetable2Position - 4 === pacmanPosition || vegetable2Position - 5 === pacmanPosition)) {
              vegetable2Position--
            } else if (vegetable2Territory.includes(vegetable2Position - 1) && vegetable2Territory.includes(vegetable2Position - 2) && vegetable2Territory.includes(vegetable2Position - 3) && vegetable2Territory.includes(vegetable2Position - 4) && vegetable2Territory.includes(vegetable2Position - 5) && vegetable2Territory.includes(vegetable2Position - 6)) {
              vegetable2Position--
            } else if (vegetable2Territory.includes(vegetable2Position - 32)) {
              vegetable2Position = vegetable2Position - 32
            } else {
              vegetable2Position++
            }
            cells[parseInt(vegetable2Position)].classList.add('vegetable')
          }
        } else if (!vegetable2Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval2)
          veggie2GoesRandom()
        }
      }, 300)
    }

    // FUNCTIONS FOR VEGGIE 3

    function veggie3GoesRandom() {
      const randomInterval3 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege3terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval3)
            veggie3Chase()
          }
        }
        const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
        if (randomDirection === 0) {
          if (!cells[vegetable3Position + 1].classList.contains('vege3terri')) {
            return
          }
          cells[parseInt(vegetable3Position)].classList.remove('vegetable')
          vegetable3Position += 1
          cells[parseInt(vegetable3Position)].classList.add('vegetable')
        } else if (randomDirection === 1) {
          if (!cells[vegetable3Position - 1].classList.contains('vege3terri')) {
            return
          }
          cells[parseInt(vegetable3Position)].classList.remove('vegetable')
          vegetable3Position -= 1
          cells[parseInt(vegetable3Position)].classList.add('vegetable')
        } else if (randomDirection === 2) {
          if (!cells[vegetable3Position - côté].classList.contains('vege3terri')) {
            return
          }
          cells[parseInt(vegetable3Position)].classList.remove('vegetable')
          vegetable3Position -= côté
          cells[parseInt(vegetable3Position)].classList.add('vegetable')
        } else if (randomDirection === 3) {
          if (!cells[vegetable3Position + côté].classList.contains('vege3terri')) {
            return
          }
          cells[parseInt(vegetable3Position)].classList.remove('vegetable')
          vegetable3Position += côté
          cells[parseInt(vegetable3Position)].classList.add('vegetable')
        }
      }, 300)
    }

    veggie3GoesRandom()

    function veggie3Chase() {
      const chaseInterval3 = setInterval(() => {
        if (vegetable3Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable3Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable3Position)].classList.remove('vegetable')
            vegetable3Position = 185
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable3Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable3Position) {
            cells[parseInt(vegetable3Position)].classList.remove('vegetable')
            if (vegetable3Territory.includes(vegetable3Position + 1) && (vegetable3Position + 1 === pacmanPosition || vegetable3Position + 2 === pacmanPosition || vegetable3Position + 3 === pacmanPosition || vegetable3Position + 4 === pacmanPosition || vegetable3Position + 5 === pacmanPosition)) {
              vegetable3Position++
            } else if (vegetable3Territory.includes(vegetable3Position + 1) && vegetable3Territory.includes(vegetable3Position + 2) && vegetable3Territory.includes(vegetable3Position + 3) && vegetable3Territory.includes(vegetable3Position + 4) && vegetable3Territory.includes(vegetable3Position + 5)) {
              vegetable3Position++
            } else if (vegetable3Territory.includes(vegetable3Position + 32)) {
              vegetable3Position = vegetable3Position + 32
            } else {
              vegetable3Position--
            }
            cells[parseInt(vegetable3Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable3Position) {
            cells[parseInt(vegetable3Position)].classList.remove('vegetable')
            if (vegetable3Territory.includes(vegetable3Position - 1) && (vegetable3Position - 1 === pacmanPosition || vegetable3Position - 2 === pacmanPosition || vegetable3Position - 3 === pacmanPosition || vegetable3Position - 4 === pacmanPosition || vegetable3Position - 5 === pacmanPosition)) {
              vegetable3Position--
            } else if (vegetable3Territory.includes(vegetable3Position - 1) && vegetable3Territory.includes(vegetable3Position - 2) && vegetable3Territory.includes(vegetable3Position - 3) && vegetable3Territory.includes(vegetable3Position - 4) && vegetable3Territory.includes(vegetable3Position - 5) && vegetable3Territory.includes(vegetable3Position - 6)) {
              vegetable3Position--
            } else if (vegetable3Territory.includes(vegetable3Position - 32)) {
              vegetable3Position = vegetable3Position - 32
            } else {
              vegetable3Position++
            }
            cells[parseInt(vegetable3Position)].classList.add('vegetable')
          }
        } else if (!vegetable3Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval3)
          veggie3GoesRandom()
        }
      }, 300)
    }

    // FUNCTIONS FOR VEGGIE 4

    function veggie4GoesRandom() {
      const randomInterval4 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege4terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval4)
            veggie4Chase()
          }
        }
        const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
        if (randomDirection === 0) {
          if (!cells[vegetable4Position + 1].classList.contains('vege4terri')) {
            return
          }
          cells[parseInt(vegetable4Position)].classList.remove('vegetable')
          vegetable4Position += 1
          cells[parseInt(vegetable4Position)].classList.add('vegetable')
        } else if (randomDirection === 1) {
          if (!cells[vegetable4Position - 1].classList.contains('vege4terri')) {
            return
          }
          cells[parseInt(vegetable4Position)].classList.remove('vegetable')
          vegetable4Position -= 1
          cells[parseInt(vegetable4Position)].classList.add('vegetable')
        } else if (randomDirection === 2) {
          if (!cells[vegetable4Position - côté].classList.contains('vege4terri')) {
            return
          }
          cells[parseInt(vegetable4Position)].classList.remove('vegetable')
          vegetable4Position -= côté
          cells[parseInt(vegetable4Position)].classList.add('vegetable')
        } else if (randomDirection === 3) {
          if (!cells[vegetable4Position + côté].classList.contains('vege4terri')) {
            return
          }
          cells[parseInt(vegetable4Position)].classList.remove('vegetable')
          vegetable4Position += côté
          cells[parseInt(vegetable4Position)].classList.add('vegetable')
        }
      }, 300)
    }

    veggie4GoesRandom()

    function veggie4Chase() {
      const chaseInterval4 = setInterval(() => {
        if (vegetable4Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable4Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable4Position)].classList.remove('vegetable')
            vegetable4Position = 489
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable4Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable4Position) {
            cells[parseInt(vegetable4Position)].classList.remove('vegetable')
            if (vegetable4Territory.includes(vegetable4Position + 1) && (vegetable4Position + 1 === pacmanPosition || vegetable4Position + 2 === pacmanPosition || vegetable4Position + 3 === pacmanPosition || vegetable4Position + 4 === pacmanPosition || vegetable4Position + 5 === pacmanPosition)) {
              vegetable3Position++
            } else if (vegetable4Territory.includes(vegetable4Position + 1) && vegetable4Territory.includes(vegetable4Position + 2) && vegetable4Territory.includes(vegetable4Position + 3) && vegetable4Territory.includes(vegetable4Position + 4) && vegetable4Territory.includes(vegetable4Position + 5)) {
              vegetable4Position++
            } else if (vegetable4Territory.includes(vegetable4Position + 32)) {
              vegetable4Position = vegetable4Position + 32
            } else {
              vegetable4Position--
            }
            cells[parseInt(vegetable4Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable4Position) {
            cells[parseInt(vegetable4Position)].classList.remove('vegetable')
            if (vegetable4Territory.includes(vegetable4Position - 1) && (vegetable4Position - 1 === pacmanPosition || vegetable4Position - 2 === pacmanPosition || vegetable4Position - 3 === pacmanPosition || vegetable4Position - 4 === pacmanPosition || vegetable4Position - 5 === pacmanPosition)) {
              vegetable4Position--
            } else if (vegetable4Territory.includes(vegetable4Position - 1) && vegetable4Territory.includes(vegetable4Position - 2) && vegetable4Territory.includes(vegetable4Position - 3) && vegetable4Territory.includes(vegetable4Position - 4) && vegetable4Territory.includes(vegetable4Position - 5) && vegetable4Territory.includes(vegetable4Position - 6)) {
              vegetable4Position--
            } else if (vegetable4Territory.includes(vegetable4Position - 32)) {
              vegetable4Position = vegetable4Position - 32
            } else {
              vegetable4Position++
            }
            cells[parseInt(vegetable4Position)].classList.add('vegetable')
          }
        } else if (!vegetable4Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval4)
          veggie4GoesRandom()
        }
      }, 300)
    }

    // FUNCTIONS FOR VEGGIE 5

    function veggie5GoesRandom() {
      const randomInterval5 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege5terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval5)
            veggie5Chase()
          }
        }
        const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
        if (randomDirection === 0) {
          if (!cells[vegetable5Position + 1].classList.contains('vege5terri')) {
            return
          }
          cells[parseInt(vegetable5Position)].classList.remove('vegetable')
          vegetable5Position += 1
          cells[parseInt(vegetable5Position)].classList.add('vegetable')
        } else if (randomDirection === 1) {
          if (!cells[vegetable5Position - 1].classList.contains('vege5terri')) {
            return
          }
          cells[parseInt(vegetable5Position)].classList.remove('vegetable')
          vegetable5Position -= 1
          cells[parseInt(vegetable5Position)].classList.add('vegetable')
        } else if (randomDirection === 2) {
          if (!cells[vegetable5Position - côté].classList.contains('vege5terri')) {
            return
          }
          cells[parseInt(vegetable5Position)].classList.remove('vegetable')
          vegetable5Position -= côté
          cells[parseInt(vegetable5Position)].classList.add('vegetable')
        } else if (randomDirection === 3) {
          if (!cells[vegetable5Position + côté].classList.contains('vege5terri')) {
            return
          }
          cells[parseInt(vegetable5Position)].classList.remove('vegetable')
          vegetable5Position += côté
          cells[parseInt(vegetable5Position)].classList.add('vegetable')
        }
      }, 300)
    }

    veggie5GoesRandom()

    function veggie5Chase() {
      const chaseInterval5 = setInterval(() => {
        if (vegetable5Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable5Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable5Position)].classList.remove('vegetable')
            vegetable5Position = 185
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable5Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable5Position) {
            cells[parseInt(vegetable5Position)].classList.remove('vegetable')
            if (vegetable5Territory.includes(vegetable5Position + 1) && (vegetable5Position + 1 === pacmanPosition || vegetable5Position + 2 === pacmanPosition || vegetable5Position + 3 === pacmanPosition || vegetable5Position + 4 === pacmanPosition || vegetable5Position + 5 === pacmanPosition)) {
              vegetable5Position++
            } else if (vegetable5Territory.includes(vegetable5Position + 1) && vegetable5Territory.includes(vegetable5Position + 2) && vegetable5Territory.includes(vegetable5Position + 3) && vegetable5Territory.includes(vegetable5Position + 4) && vegetable5Territory.includes(vegetable5Position + 5)) {
              vegetable5Position++
            } else if (vegetable5Territory.includes(vegetable5Position + 32)) {
              vegetable5Position = vegetable5Position + 32
            } else {
              vegetable5Position--
            }
            cells[parseInt(vegetable5Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable5Position) {
            cells[parseInt(vegetable5Position)].classList.remove('vegetable')
            if (vegetable5Territory.includes(vegetable5Position - 1) && (vegetable5Position - 1 === pacmanPosition || vegetable5Position - 2 === pacmanPosition || vegetable5Position - 3 === pacmanPosition || vegetable5Position - 4 === pacmanPosition || vegetable5Position - 5 === pacmanPosition)) {
              vegetable5Position--
            } else if (vegetable5Territory.includes(vegetable5Position - 1) && vegetable5Territory.includes(vegetable5Position - 2) && vegetable5Territory.includes(vegetable5Position - 3) && vegetable5Territory.includes(vegetable5Position - 4) && vegetable5Territory.includes(vegetable5Position - 5) && vegetable5Territory.includes(vegetable5Position - 6)) {
              vegetable5Position--
            } else if (vegetable5Territory.includes(vegetable5Position - 32)) {
              vegetable5Position = vegetable5Position - 32
            } else {
              vegetable5Position++
            }
            cells[parseInt(vegetable5Position)].classList.add('vegetable')
          }
        } else if (!vegetable5Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval5)
          veggie5GoesRandom()
        }
      }, 300)
    }

    // FUNCTIONS FOR VEGGIE 6

    function veggie6GoesRandom() {
      const randomInterval6 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege6terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval6)
            veggie6Chase()
          }
        }
        const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
        if (randomDirection === 0) {
          if (!cells[vegetable6Position + 1].classList.contains('vege6terri')) {
            return
          }
          cells[parseInt(vegetable6Position)].classList.remove('vegetable')
          vegetable6Position += 1
          cells[parseInt(vegetable6Position)].classList.add('vegetable')
        } else if (randomDirection === 1) {
          if (!cells[vegetable6Position - 1].classList.contains('vege6terri')) {
            return
          }
          cells[parseInt(vegetable6Position)].classList.remove('vegetable')
          vegetable6Position -= 1
          cells[parseInt(vegetable6Position)].classList.add('vegetable')
        } else if (randomDirection === 2) {
          if (!cells[vegetable6Position - côté].classList.contains('vege6terri')) {
            return
          }
          cells[parseInt(vegetable6Position)].classList.remove('vegetable')
          vegetable6Position -= côté
          cells[parseInt(vegetable6Position)].classList.add('vegetable')
        } else if (randomDirection === 3) {
          if (!cells[vegetable6Position + côté].classList.contains('vege6terri')) {
            return
          }
          cells[parseInt(vegetable6Position)].classList.remove('vegetable')
          vegetable6Position += côté
          cells[parseInt(vegetable6Position)].classList.add('vegetable')
        }
      }, 300)
    }

    veggie6GoesRandom()

    function veggie6Chase() {
      const chaseInterval6 = setInterval(() => {
        if (vegetable6Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable6Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable6Position)].classList.remove('vegetable')
            vegetable6Position = 473
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable6Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable6Position) {
            cells[parseInt(vegetable6Position)].classList.remove('vegetable')
            if (vegetable6Territory.includes(vegetable6Position + 1) && (vegetable6Position + 1 === pacmanPosition || vegetable6Position + 2 === pacmanPosition || vegetable6Position + 3 === pacmanPosition || vegetable6Position + 4 === pacmanPosition || vegetable6Position + 5 === pacmanPosition)) {
              vegetable6Position++
            } else if (vegetable6Territory.includes(vegetable6Position + 1) && vegetable6Territory.includes(vegetable6Position + 2) && vegetable6Territory.includes(vegetable6Position + 3) && vegetable6Territory.includes(vegetable6Position + 4) && vegetable6Territory.includes(vegetable6Position + 5)) {
              vegetable6Position++
            } else if (vegetable6Territory.includes(vegetable6Position + 32)) {
              vegetable6Position = vegetable6Position + 32
            } else {
              vegetable6Position--
            }
            cells[parseInt(vegetable6Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable6Position) {
            cells[parseInt(vegetable6Position)].classList.remove('vegetable')
            if (vegetable6Territory.includes(vegetable6Position - 1) && (vegetable6Position - 1 === pacmanPosition || vegetable6Position - 2 === pacmanPosition || vegetable6Position - 3 === pacmanPosition || vegetable6Position - 4 === pacmanPosition || vegetable6Position - 5 === pacmanPosition)) {
              vegetable6Position--
            } else if (vegetable6Territory.includes(vegetable6Position - 1) && vegetable6Territory.includes(vegetable6Position - 2) && vegetable6Territory.includes(vegetable6Position - 3) && vegetable6Territory.includes(vegetable6Position - 4) && vegetable6Territory.includes(vegetable6Position - 5) && vegetable6Territory.includes(vegetable6Position - 6)) {
              vegetable6Position--
            } else if (vegetable6Territory.includes(vegetable6Position - 32)) {
              vegetable6Position = vegetable6Position - 32
            } else {
              vegetable6Position++
            }
            cells[parseInt(vegetable6Position)].classList.add('vegetable')
          }
        } else if (!vegetable6Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval6)
          veggie6GoesRandom()
        }
      }, 300)
    }

    // FUNCTIONS FOR VEGGIE 7

    function veggie7GoesRandom() {
      const randomInterval7 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege7terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval7)
            veggie7Chase()
          }
        }
        const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
        if (randomDirection === 0) {
          if (!cells[vegetable7Position + 1].classList.contains('vege7terri')) {
            return
          }
          cells[parseInt(vegetable7Position)].classList.remove('vegetable')
          vegetable7Position += 1
          cells[parseInt(vegetable7Position)].classList.add('vegetable')
        } else if (randomDirection === 1) {
          if (!cells[vegetable7Position - 1].classList.contains('vege7terri')) {
            return
          }
          cells[parseInt(vegetable7Position)].classList.remove('vegetable')
          vegetable7Position -= 1
          cells[parseInt(vegetable7Position)].classList.add('vegetable')
        } else if (randomDirection === 2) {
          if (!cells[vegetable7Position - côté].classList.contains('vege7terri')) {
            return
          }
          cells[parseInt(vegetable7Position)].classList.remove('vegetable')
          vegetable7Position -= côté
          cells[parseInt(vegetable7Position)].classList.add('vegetable')
        } else if (randomDirection === 3) {
          if (!cells[vegetable7Position + côté].classList.contains('vege7terri')) {
            return
          }
          cells[parseInt(vegetable7Position)].classList.remove('vegetable')
          vegetable7Position += côté
          cells[parseInt(vegetable7Position)].classList.add('vegetable')
        }
      }, 300)
    }

    veggie7GoesRandom()

    function veggie7Chase() {
      const chaseInterval7 = setInterval(() => {
        if (vegetable7Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable7Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable7Position)].classList.remove('vegetable')
            vegetable7Position = 838
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable7Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable7Position) {
            cells[parseInt(vegetable7Position)].classList.remove('vegetable')
            if (vegetable7Territory.includes(vegetable7Position + 1) && (vegetable7Position + 1 === pacmanPosition || vegetable7Position + 2 === pacmanPosition || vegetable7Position + 3 === pacmanPosition || vegetable7Position + 4 === pacmanPosition || vegetable7Position + 5 === pacmanPosition)) {
              vegetable7Position++
            } else if (vegetable7Territory.includes(vegetable7Position + 1) && vegetable7Territory.includes(vegetable7Position + 2) && vegetable7Territory.includes(vegetable7Position + 3) && vegetable7Territory.includes(vegetable7Position + 4) && vegetable7Territory.includes(vegetable7Position + 5)) {
              vegetable7Position++
            } else if (vegetable7Territory.includes(vegetable7Position + 32)) {
              vegetable7Position = vegetable7Position + 32
            } else {
              vegetable7Position--
            }
            cells[parseInt(vegetable7Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable7Position) {
            cells[parseInt(vegetable7Position)].classList.remove('vegetable')
            if (vegetable7Territory.includes(vegetable7Position - 1) && (vegetable7Position - 1 === pacmanPosition || vegetable7Position - 2 === pacmanPosition || vegetable7Position - 3 === pacmanPosition || vegetable7Position - 4 === pacmanPosition || vegetable7Position - 5 === pacmanPosition)) {
              vegetable7Position--
            } else if (vegetable7Territory.includes(vegetable7Position - 1) && vegetable7Territory.includes(vegetable7Position - 2) && vegetable7Territory.includes(vegetable7Position - 3) && vegetable7Territory.includes(vegetable7Position - 4) && vegetable7Territory.includes(vegetable7Position - 5) && vegetable7Territory.includes(vegetable7Position - 6)) {
              vegetable7Position--
            } else if (vegetable7Territory.includes(vegetable7Position - 32)) {
              vegetable7Position = vegetable7Position - 32
            } else {
              vegetable7Position++
            }
            cells[parseInt(vegetable7Position)].classList.add('vegetable')
          }
        } else if (!vegetable7Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval7)
          veggie7GoesRandom()
        }
      }, 300)
    }

    // FUNCTIONS FOR VEGGIE 8

    function veggie8GoesRandom() {
      const randomInterval8 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege8terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval8)
            veggie8Chase()
          }
        }
        const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
        if (randomDirection === 0) {
          if (!cells[vegetable8Position + 1].classList.contains('vege8terri')) {
            return
          }
          cells[parseInt(vegetable8Position)].classList.remove('vegetable')
          vegetable8Position += 1
          cells[parseInt(vegetable8Position)].classList.add('vegetable')
        } else if (randomDirection === 1) {
          if (!cells[vegetable8Position - 1].classList.contains('vege8terri')) {
            return
          }
          cells[parseInt(vegetable8Position)].classList.remove('vegetable')
          vegetable8Position -= 1
          cells[parseInt(vegetable8Position)].classList.add('vegetable')
        } else if (randomDirection === 2) {
          if (!cells[vegetable8Position - côté].classList.contains('vege8terri')) {
            return
          }
          cells[parseInt(vegetable8Position)].classList.remove('vegetable')
          vegetable8Position -= côté
          cells[parseInt(vegetable8Position)].classList.add('vegetable')
        } else if (randomDirection === 3) {
          if (!cells[vegetable8Position + côté].classList.contains('vege8terri')) {
            return
          }
          cells[parseInt(vegetable8Position)].classList.remove('vegetable')
          vegetable8Position += côté
          cells[parseInt(vegetable8Position)].classList.add('vegetable')
        }
      }, 300)
    }

    veggie8GoesRandom()

    function veggie8Chase() {
      const chaseInterval8 = setInterval(() => {
        if (vegetable8Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable8Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable8Position)].classList.remove('vegetable')
            vegetable8Position = 912
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable8Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable8Position) {
            cells[parseInt(vegetable8Position)].classList.remove('vegetable')
            if (vegetable8Territory.includes(vegetable8Position + 1) && (vegetable8Position + 1 === pacmanPosition || vegetable8Position + 2 === pacmanPosition || vegetable8Position + 3 === pacmanPosition || vegetable8Position + 4 === pacmanPosition || vegetable8Position + 5 === pacmanPosition)) {
              vegetable8Position++
            } else if (vegetable8Territory.includes(vegetable8Position + 1) && vegetable8Territory.includes(vegetable8Position + 2) && vegetable8Territory.includes(vegetable8Position + 3) && vegetable8Territory.includes(vegetable8Position + 4) && vegetable8Territory.includes(vegetable8Position + 5)) {
              vegetable8Position++
            } else if (vegetable8Territory.includes(vegetable8Position + 32)) {
              vegetable8Position = vegetable8Position + 32
            } else {
              vegetable8Position--
            }
            cells[parseInt(vegetable8Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable8Position) {
            cells[parseInt(vegetable8Position)].classList.remove('vegetable')
            if (vegetable8Territory.includes(vegetable8Position - 1) && (vegetable8Position - 1 === pacmanPosition || vegetable8Position - 2 === pacmanPosition || vegetable8Position - 3 === pacmanPosition || vegetable8Position - 4 === pacmanPosition || vegetable8Position - 5 === pacmanPosition)) {
              vegetable8Position--
            } else if (vegetable8Territory.includes(vegetable8Position - 1) && vegetable8Territory.includes(vegetable8Position - 2) && vegetable8Territory.includes(vegetable8Position - 3) && vegetable8Territory.includes(vegetable8Position - 4) && vegetable8Territory.includes(vegetable8Position - 5) && vegetable8Territory.includes(vegetable8Position - 6)) {
              vegetable8Position--
            } else if (vegetable8Territory.includes(vegetable8Position - 32)) {
              vegetable8Position = vegetable8Position - 32
            } else {
              vegetable8Position++
            }
            cells[parseInt(vegetable8Position)].classList.add('vegetable')
          }
        } else if (!vegetable8Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval8)
          veggie8GoesRandom()
        }
      }, 300)
    }

    // FUNCTIONS FOR VEGGIE 9

    function veggie9GoesRandom() {
      const randomInterval9 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege9terri') && (cells[i].classList.contains('pacman-looking-up') || cells[i].classList.contains('pacman-looking-down') || cells[i].classList.contains('pacman-looking-left') || cells[i].classList.contains('pacman-looking-right'))) {
            clearInterval(randomInterval9)
            veggie9Chase()
          }
        }
        const randomDirection = Math.floor(Math.random() * arrayOfDirections.length)
        if (randomDirection === 0) {
          if (!cells[vegetable9Position + 1].classList.contains('vege9terri')) {
            return
          }
          cells[parseInt(vegetable9Position)].classList.remove('vegetable')
          vegetable9Position += 1
          cells[parseInt(vegetable9Position)].classList.add('vegetable')
        } else if (randomDirection === 1) {
          if (!cells[vegetable9Position - 1].classList.contains('vege9terri')) {
            return
          }
          cells[parseInt(vegetable9Position)].classList.remove('vegetable')
          vegetable9Position -= 1
          cells[parseInt(vegetable9Position)].classList.add('vegetable')
        } else if (randomDirection === 2) {
          if (!cells[vegetable9Position - côté].classList.contains('vege9terri')) {
            return
          }
          cells[parseInt(vegetable9Position)].classList.remove('vegetable')
          vegetable9Position -= côté
          cells[parseInt(vegetable9Position)].classList.add('vegetable')
        } else if (randomDirection === 3) {
          if (!cells[vegetable9Position + côté].classList.contains('vege9terri')) {
            return
          }
          cells[parseInt(vegetable9Position)].classList.remove('vegetable')
          vegetable9Position += côté
          cells[parseInt(vegetable9Position)].classList.add('vegetable')
        }
      }, 300)
    }

    veggie9GoesRandom()

    function veggie9Chase() {
      const chaseInterval9 = setInterval(() => {
        if (vegetable9Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable9Position) {
            alert('Oh no! You\'ve been caught!')
            lives--
            livesDisplay.innerHTML = lives
            if (lives === 0) {
              alert('GAME OVER')
            }
            cells[parseInt(vegetable9Position)].classList.remove('vegetable')
            vegetable9Position = 857
            if (cells[pacmanPosition].classList.contains('pacman-looking-right')) {
              cells[pacmanPosition].classList.remove('pacman-looking-right')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-left')) {
              cells[pacmanPosition].classList.remove('pacman-looking-left')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-up')) {
              cells[pacmanPosition].classList.remove('pacman-looking-up')
            } else if (cells[pacmanPosition].classList.contains('pacman-looking-down')) {
              cells[pacmanPosition].classList.remove('pacman-looking-down')
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add('pacman-looking-right')
            cells[parseInt(vegetable9Position)].classList.add('vegetable')
          } else if (pacmanPosition > vegetable9Position) {
            cells[parseInt(vegetable9Position)].classList.remove('vegetable')
            if (vegetable9Territory.includes(vegetable9Position + 1) && (vegetable9Position + 1 === pacmanPosition || vegetable9Position + 2 === pacmanPosition || vegetable9Position + 3 === pacmanPosition || vegetable9Position + 4 === pacmanPosition || vegetable9Position + 5 === pacmanPosition)) {
              vegetable9Position++
            } else if (vegetable9Territory.includes(vegetable9Position + 1) && vegetable9Territory.includes(vegetable9Position + 2) && vegetable9Territory.includes(vegetable9Position + 3) && vegetable9Territory.includes(vegetable9Position + 4) && vegetable9Territory.includes(vegetable9Position + 5)) {
              vegetable9Position++
            } else if (vegetable9Territory.includes(vegetable9Position + 32)) {
              vegetable9Position = vegetable9Position + 32
            } else {
              vegetable9Position--
            }
            cells[parseInt(vegetable9Position)].classList.add('vegetable')
          } else if (pacmanPosition < vegetable9Position) {
            cells[parseInt(vegetable9Position)].classList.remove('vegetable')
            if (vegetable9Territory.includes(vegetable9Position - 1) && (vegetable9Position - 1 === pacmanPosition || vegetable9Position - 2 === pacmanPosition || vegetable9Position - 3 === pacmanPosition || vegetable9Position - 4 === pacmanPosition || vegetable9Position - 5 === pacmanPosition)) {
              vegetable9Position--
            } else if (vegetable9Territory.includes(vegetable9Position - 1) && vegetable9Territory.includes(vegetable9Position - 2) && vegetable9Territory.includes(vegetable9Position - 3) && vegetable9Territory.includes(vegetable9Position - 4) && vegetable9Territory.includes(vegetable9Position - 5) && vegetable9Territory.includes(vegetable9Position - 6)) {
              vegetable9Position--
            } else if (vegetable9Territory.includes(vegetable9Position - 32)) {
              vegetable9Position = vegetable9Position - 32
            } else {
              vegetable9Position++
            }
            cells[parseInt(vegetable9Position)].classList.add('vegetable')
          }
        } else if (!vegetable9Territory.includes(pacmanPosition)) {
          clearInterval(chaseInterval9)
          veggie9GoesRandom()
        }
      }, 300)
    }
  })

}

window.addEventListener('DOMContentLoaded', main)