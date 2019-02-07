# SKELERUN by Starspawn

#### Arcade-like JavaScript game with audio, 2.7.19

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


* _**Spec**: Player cannot move off screen_
  * _**Input**: Player moves to edges of playing field_
  * _**Output**: Player cannot continue moving in that direction_


* _**Spec**: Multiple arrow keys can be pressed at once_
  * _**Input**: W + A Key_
  * _**Output**: Player moves one pixel per millisecond in EACH direction, resulting in diagonal movement_


* _**Spec**: Trees spawn randomly on the page_
  * _**Input**: N/A_
  * _**Output**: Trees choose random spots on the page and appear at the beginning of the game, or 8 seconds after a tree is chopped down while the number of trees is less than 13_


* _**Spec**: Shift collects/uses wood_
  * _**Input**: Shift Key_
  * _**Output**: If the player is over a tree, tree will be cut down, and player will gain 1 wood_
  * _**Output**: If the player is over the fire, and has 10 wood, 7 seconds will be added to the timer and 10 wood will be subtracted_
  * _**Any other conditions will result in no output**_


* _**Spec**: Skull follows the player_
  * _**Input**: N/A_
  * _**Output**: Skull determines difference in position between itself and player, and moves in the player's direction_


* _**Spec**: Skull gets huge at 10 seconds remaining_
  * _**Input**: Idling for 20 seconds_
  * _**Output**: Skull flashes red and gets big_


* _**Spec**: Buttons bring user from main/end screen to beginning of game_
  * _**Input**: Click on 'play' or 'continue' button_
  * _**Output**: Initializes the game_


* _**Spec**: Title links to main page_
  * _**Input**: Click on 'Skelerun'_
  * _**Output**: Refreshes the page_




## Setup/Installation Requirements
* _Clone from https://github.com/travisty12/starspawn to your machine_
* _Open in browser_
* _Read on screen instructions to play_

* _View (glitchy) live site at https://travisty12.github.io/starspawn/ and play_

## Known Bugs
* _Extra trees may spawn if the player restarts too quickly after the game ends_
* _GitHub Pages version plays the music unreliably, or layers multiple audio tracks over each other_
* _Please contact the authors if additional bugs are found!_

## Support and contact details
* _The authors' GitHubs are linked at the bottom of the main page_



## Technologies Used
* _HTML, CSS, JavaScript, jQuery, and Bootstrap were used._
* _The player appears to turn and move with changing gifs based on direction_
* _Different audio tracks play based on the current situation_


### License

*This software is licensed under the GPL License*

Copyright (c) 2019 **_Starspawn [Jared Farkas, Ryan McLean, Drew Yoxsimer, Travis Toal, Randee Layosa]_**
