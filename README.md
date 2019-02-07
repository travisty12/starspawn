# STARSPAWN

#### asdfasdf

#### By Travis Toal, Drew Yoxsimer, Ryan McLean, Randee Layosa, and Jared Farkas

## Description

* _Javascript based survival game where the player must collect wood to keep the fire going while dodging the skull of Elon Musk_

## Specs

* _**Spec**: Fire object contains a 'life' property which runs out and ends the program_
  * _**Input**: N/A_
  * _**Output**: Countdown from 30_


* _**Spec**: Player object has a position property which determines its starting position_
  * _**Input**: N/A_
  * _**Output**: Player starts next to fire_


* _**Spec**: W, A, S, and D keys determine movement_
  * _**Input**: W, A, S, D Key_
  * _**Output**: Player moves one pixel per millisecond in the direction represented by the letter_


* _**Spec**: Multiple arrow keys can be pressed at once_
  * _**Input**: W + A Key_
  * _**Output**: Player moves one pixel per millisecond in EACH direction, resulting in diagonal movement_

  * _**Spec**: Shift is pressed_
    * _**Input**: Shift Key_
    * _**Output**: If the player is over a tree, tree will be cut down, and player will gain 1 wood_
    * _**Output**: If the player is over the fire, and has 10 wood, 10 seconds will be added to the timer and 10 wood will be subtracted_
    * _**Any other conditions will result in no output**_



## Setup/Installation Requirements
* _Clone from https://github.com/travisty12/starspawn.git_
* _Open in browser
* _Read on screen instructions to play


## Known Bugs
* _Extra trees may spawn if the player restarts too quickly after the game ends

## Support and contact details




## Technologies Used
* _HTML, CSS, javascript, jquery, and bootstrap were used_


### License

*This software is licensed under the GPL License*

Copyright (c) 2019 **_Jared Farkas, Ryan McLean, Drew Yoxsimer, Travis Toal, Randee Layosa_**
