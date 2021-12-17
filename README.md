# Feline Fever

![feline-fever](https://user-images.githubusercontent.com/78716708/146590673-43d2a656-aea9-4548-b13c-957e30c70eda.gif)

[Live Demo](https://subinc1633.github.io/feline-fever/)

## Background

Feline Fever is a rhythm game that involves pressing the respective arrows on the screen at the right time. Our main character, **Felix the Cat**, wants to be the best dancer there ever was. To obtain points, the player must match the scrolling arrows with the stationary arrows at the center of the screen. The scores range from *paw-full* to *purr-fect*, and more points are awarded for *purr-fect* accuracy. Help Felix win his dance battle and beat the competition!

## Functionality

In Feline Fever, users will be able to:

- Start and replay a game
- Press **arrow keys** or **WASD** to match the arrows on the screen
- Mute the music as needed

In addition, this project includes:

- "How to Play" instructions
- A production README

## Technologies

This project is implemented with:

- Vanilla Javascript
- HTML5 Canvas
- CSS

## Features

### Arrow Randomization

`Math.random()` allows for the arrows to appear as different directions. The positions are preset at specific locations on the x-axis, and correspond to the respective arrows.

```
constructor() {
    ...
    this.pos {
        left: 255,
        up: 365,
        down: 482,
        right: 588
    }
}

#addRandomArrows(deltaTime) {
    let randomIdx = Math.floor(Math.random() * 4);
    let randDir = Array.from(Object.keys(this.pos))[randomIdx];
    let randPos = this.pos[randDir];
    const arrow = new Arrow(randPos, -70, randDir, deltaTime);
    this.randomArrows.push(arrow);
}
```

### Moving Arrows

To make the arrows fall, an arrow timer and an arrow interval were added to determine when the arrows would meet the bottom bar. The timer increments by deltaTime, which increases compatibility among devices with lower frame rates. If the timer exceeds the interval between arrows, the next arrow will render and be added to an array. Afterwards, the arrow interval will be set to a predetermined duration and the timer will restart at 0.

```
update(deltaTime) {
    this.randomArrows = this.randomArrows.filter(arrow => !arrow.deletion);

    if (this.arrowTimer > this.arrowInterval) {
        this.#addRandomArrows(deltaTime);
        this.arrowInterval = this.beats.shift();
        this.arrowTimer = 0;
    } else {
        this.arrowTimer += deltaTime;
    }

    for (let arrow of this.randomArrows) { arrow.move(); };
}
```

## Implementation

**Fri-Sun | Days 1-3**
- Setup webpack and node modules
- Build entry files / skeletons and review Canvas/DOM material
- Draw character, background, arrows and add respective classes

**Mon | Day 4**
- Set up grades and establish zones where the arrow's positioning 
- Determine how many points to give for specific grades

**Tue | Day 5**
- Increment player's score
- Implement background

**Wed | Day 6**
- CSS implementation, finishing any styling or editing any details

## Future Features

- Add accuracy grade pop-up
- Add dancing character in the background
- Add an additional song to the game
