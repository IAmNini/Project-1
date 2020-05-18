### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# sPACe MAN

## Overview

sPACe MAN is my first solo project at GA London, and my first ever project that I built fully from planning to deployment. Our assigment was to create a game in vanilla JavaScript. I decided to build a game of Pac-Man, similar to the original, but with a few personal changes. Similarly to the original game's ghosts and fruits, in my version, pacman is an astronaut who must navigate through the asteroids to collect all of the crystals without getting caught by the UFO's.

You can play the game [here](https://iamnini.github.io/project-1/).


## The Brief 

- **Render a game in the browser**
- **Design logic for winning & visually display which player won**
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **Javascript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)


## Technologies Used 

- HTML5
- CSS3
- JavaScript (ES6)
- Git and GitHub
- Google Fonts

## The Approach

My game was initially supposed to be about pacman escaping from vegetables and eating apples. I later changed the concept of the game to a space theme, where pacman is an astronaut and runs away from UFO's while collecting crystals. I only decided to change the theme of the game towards the end of developing it, so most of the variable and class names refer to the origianl setting. I hope this isn't too confusing.

### The Grid

The board where the game takes place is built using a grid. I created a 32 x 32 grid using JavaScript to create and append HTML elements to the grid. The grid cells are all either "path" or "wall" (the wall is asteroids in the final version of the game). All path cells contain a crystal (apple class) that disappears and is collected if pacman comes into contact with it.

 ```js
  for (let i = 0; i < gridCellCount; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      if (i === pacmanPosition) {
        cell.classList.add(pacmanRight)
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
 ```
 
### The Territories

I wanted to have 9 ghosts/vegetables/UFO's chasing pacman but I wanted them to be spaced out around the map. So I decided to give them each a territory that they could move around in. They just move randomly in their territory but when pacman enters their territory, they start chasing him. Once he leaves their territory they're back to moving randomly. So pacman is only chased by one UFO at a time, but he's always in someone's territory; there is no free zone. The territories are not visible in the playable game, so the player doesn't know when they are entering or exiting a UFO's territory, so they always have to be careful of all of them.

Sample code for `vegetable1`:

```js
for (let i = 0; i < vegetable1Territory.length; i++) {
      cells[vegetable1Territory[i]].classList.add('vege1terri')
    }

const cellsInTerritory1 = []
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].classList.contains('vege1terri')) {
        cellsInTerritory1.push(cells[i])
    }
  }
```
 
### Pacman Moves

To move pacman around the map according to the keys pressed by the player, I added a `keydown` event listener and associated it with a function that would add and remove the pacman class to the cells where pacman is allowed to go (i.e. not in the walls), following the player's moves.

Sample code for the key `ArrowRight`:

```js
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        if (pacmanPosition === cells.length - 1 || cells[pacmanPosition + 1].classList.contains('wall')) {
          return
        }
        if (cells[pacmanPosition].classList.contains(pacmanRight)) {
          cells[pacmanPosition].classList.remove(pacmanRight)
        } else if (cells[pacmanPosition].classList.contains(pacmanLeft)) {
          cells[pacmanPosition].classList.remove(pacmanLeft)
        } else if (cells[pacmanPosition].classList.contains(pacmanUp)) {
          cells[pacmanPosition].classList.remove(pacmanUp)
        } else if (cells[pacmanPosition].classList.contains(pacmanDown)) {
          cells[pacmanPosition].classList.remove(pacmanDown)
        }
        pacmanPosition += 1
        cells[pacmanPosition].classList.add(pacmanRight)
      }
```
The different pacman directions refer to the different directions pacman can face in the map (if pacman goes right he looks right). I had 4 different images and classes depending on where pacman was looking/going.

If pacman comes into contact with a crystal/apple, it disappears and is collected.

```js
if (cells[pacmanPosition].classList.contains('apple')) {
        cells[pacmanPosition].classList.remove('apple')
        applesEaten++
        applesEatenDisplay.innerHTML = applesEaten
        applesRemaining--
        applesRemainingDisplay.innerHTML = applesRemaining
```

### UFO Movements

As I mentioned in the Territories section, the UFO's usually move randomly around their territory and chase pacman if he's in their territory. I had 2 separate functions that would alternate depending on pacman's presence or absence in a territory. 

The `veggieGoesRandom()` function sets an interval and moves the UFO around in random directions, dictated by a `Math.random` operation and an `arrayofDirections`. If pacman comes into this UFO's territory, it will clear the interval and call the `veggieChase()` function.

Sample code for `vegetable1`:

```js
function veggie1GoesRandom() {
      const randomInterval1 = setInterval(() => {
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].classList.contains('vege1terri') && (cells[i].classList.contains(pacmanUp) || cells[i].classList.contains(pacmanDown) || cells[i].classList.contains(pacmanLeft) || cells[i].classList.contains(pacmanRight))) {
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
```
The `veggieChase()` function is called when pacman enters a territory and will instrcut the UFO to move towards pacman depending on pacman's position. The chasing pattern I designed is flawed and doesn't follow pacman everywhere. I plan to work on it more. However since the player doesn't know the limits of the UFO's chasing pattern they will still have to run away. The UFO's also see pacman through the walls and mirror his movements giving the illusion of predicting his actions. This is obviously a bug but it makes the game more challenging and people seem to enjoy it so I might leave that in. 

This function also removes the classes from both pacman and vegetables in case of a collision, and adds them back to their original position cells. It also removes a life from the player's remaining lives.

If pacman leaves the territory, it clears the interval and calls back the `veggieGoesRandom()` function.

Sample code for `vegetable1`:

```js
function veggie1Chase() {
      const chaseInterval1 = setInterval(() => {
        if (vegetable1Territory.includes(pacmanPosition)) {
          if (pacmanPosition === vegetable1Position) {
            lives--
            livesDisplay.innerHTML = lives
            if (lives <= 0) {
              grid.style.display = 'none'
              gridContainer.classList.add('game-over-screen')
              clearInterval(chaseInterval1)
            }
            cells[parseInt(vegetable1Position)].classList.remove('vegetable')
            vegetable1Position = 166
            if (cells[pacmanPosition].classList.contains(pacmanRight)) {
              cells[pacmanPosition].classList.remove(pacmanRight)
            } else if (cells[pacmanPosition].classList.contains(pacmanLeft)) {
              cells[pacmanPosition].classList.remove(pacmanLeft)
            } else if (cells[pacmanPosition].classList.contains(pacmanUp)) {
              cells[pacmanPosition].classList.remove(pacmanUp)
            } else if (cells[pacmanPosition].classList.contains(pacmanDown)) {
              cells[pacmanPosition].classList.remove(pacmanDown)
            }
            pacmanPosition = 33
            cells[pacmanPosition].classList.add(pacmanRight)
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
```

The functions for chasing vary slightly from one vegetable to another, because the map is not the same in every territory so the pattern had to be different. When I get a chance to work more on this project, I would like to make each function more specific to each territory.


### Rocket Time

I wanted to include a special power, similar to the original pacman's special fruit that allows pacman to kill the ghosts. So I decided to include a rocket, that would be found at a random spot on the map, and that would allow pacman to kill the UFO's for 20 seconds and then would disappear. This feature needs improvement. At the moment, when pacman becomes a rocket, the UFO's stop chasing him, but if they meet the rocket/pacman still dies. I would like to fix this first as it is confusing for the players.

The `rocketTime()` function turns pacman into a rocket (and back after 20 seconds). It is called when pacman finds the rocket on the map.

```js
function rocketTime() {
      cells[rocketPosition].classList.remove('rocket-looking-up')
      if (cells[pacmanPosition].classList.contains(pacmanRight)) {
        cells[pacmanPosition].classList.remove(pacmanRight)
      } else if (cells[pacmanPosition].classList.contains(pacmanLeft)) {
        cells[pacmanPosition].classList.remove(pacmanLeft)
      } else if (cells[pacmanPosition].classList.contains(pacmanUp)) {
        cells[pacmanPosition].classList.remove(pacmanUp)
      } else if (cells[pacmanPosition].classList.contains(pacmanDown)) {
        cells[pacmanPosition].classList.remove(pacmanDown)
      }
      pacmanUp = 'rocket-looking-up'
      pacmanDown = 'rocket-looking-down'
      pacmanLeft = 'rocket-looking-left'
      pacmanRight = 'rocket-looking-right'

      rocketPosition = NaN

      setTimeout(() => {
        if (cells[pacmanPosition].classList.contains(pacmanRight)) {
          cells[pacmanPosition].classList.remove(pacmanRight)
        } else if (cells[pacmanPosition].classList.contains(pacmanLeft)) {
          cells[pacmanPosition].classList.remove(pacmanLeft)
        } else if (cells[pacmanPosition].classList.contains(pacmanUp)) {
          cells[pacmanPosition].classList.remove(pacmanUp)
        } else if (cells[pacmanPosition].classList.contains(pacmanDown)) {
          cells[pacmanPosition].classList.remove(pacmanDown)
        }
        pacmanUp = 'pacman-looking-up'
        pacmanDown = 'pacman-looking-down'
        pacmanLeft = 'pacman-looking-left'
        pacmanRight = 'pacman-looking-right'
        cells[pacmanPosition].classList.add(pacmanUp)
      }, 15000)
    }
```

## Challenges

- This was my first project working with vanilla JavaScript and the DOM. Getting familiar with the structure of the event listeners and DOM elements was challenging but turned out to be a lot of fun.

- As I described in the ReadMe, there are still quite a few features that need improving or fixing. I particularly struggled with the chasing functions and kept wondering if there was a cleaner and more organised way of doing it.

- In general I am certain my code could be refactored because I had the same (or very similar) functions 9 times and lots and lots of repetitions. This is an issue I struggle with as I am scared to refactor my code in fear that it will break. I would like to try to refactor my code more in all of my projects.


## Victories

- Overall I am very happy with the result. My game is fun to play and I am very pleased with the level of difficulty (challenging but winnable).

- I don't usually consider myself a very good designer but I like the look of my game and the animations.

- It was very fun to add the Star Wars themed 'story background' as a fun bonus.

- I had a lot of fun building this game and definitely would love to do more detailed logic in JavaScript or Python. I also really enjoy building games and would like to do more of that.


## Potential future features

- Definitely fixing all of the imperfect features and bugs.

- I would like to add a button to play again after a game over, as currently the only way to play again is to reload the page.

- I would like to add a media query to display a message if someone tries to open the game from mobile so they know to open it in a browser instead.
