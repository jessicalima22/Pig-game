# Pig Game 🎲🐷

A fun, interactive, two-player game built using HTML, CSS, and JavaScript. Players take turns rolling a dice and accumulating points in a race to win. The first player to reach a target score wins!

---

## Features ✨
- **Two-player mode**: Play with a friend and compete for the highest score.
- **Interactive dice rolling**: Randomly roll a dice to earn points.
- **Hold your score**: Decide when to secure your points and pass the turn.
- **New game option**: Restart the game anytime with a fresh score.

---

## Project Structure 📂

- **HTML**: Defines the structure of the game interface.
- **CSS**: Styles the game layout and enhances the visual appeal.
- **JavaScript**: Implements the game logic, including dice rolls, score calculations, and player turns.

### File Overview
- `index.html`: Main HTML file for the game interface.
- `style.css`: Stylesheet for customizing the look and feel.
- `script.js`: JavaScript file that powers the game logic and interactivity.
- `dice-5.png`: Dice image used for the game.

---

## How to Play 🕹️
1. Open the game in a web browser.
2. Player 1 starts the game.
3. On your turn:
   - Click **Roll Dice** to roll the dice.
   - If the dice roll is `1`, your turn ends, and you lose any points accumulated in that turn.
   - If it's not `1`, the rolled number is added to your current turn score.
   - Click **Hold** to add your current score to your total score and pass the turn to the other player.
4. The first player to reach the target score (default: 100) wins.
5. Click **New Game** to reset scores and start a new game.

---

## Requirements 🖥️
- A modern web browser (Chrome, Firefox, Edge, etc.)
- JavaScript enabled.

---

## How to Run Locally 🚀
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/pig-game.git
