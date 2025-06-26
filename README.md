# TickTackToe

**TickTackToe** is a simple implementation of the classic Tic-Tac-Toe game, developed to practice programming concepts and game logic. This repository contains the source code and the necessary files to run the game locally.

## Description

The goal of this project is to provide a basic version of Tic-Tac-Toe that can be used as a foundation for learning about game logic, state management, and simple interface development. The game allows two players to take turns marking the squares of a 3x3 board until one manages to align three of their symbols or the game ends in a draw.

## Installation

Follow these steps to install and run the project on your local machine:

1. **Clone the repository**

git clone https://github.com/martinmorente-dev/TickTackToe.git
cd TickTackToe


2. **Install dependencies**

If the project uses Node.js and a `package.json` file, install the dependencies with:

npm install

text
or, if you use `yarn`:
yarn install

text

3. **Run the game**

Depending on the configuration, you can start the game with:

npm start or yarn start

Check the `README.md` file or the internal documentation of the repository for specific instructions if they exist.

## Project Structure

The repository contains typical files and folders of a simple application, such as:

- `src/`: Main source code of the game.
- `README.md`: Project documentation.
- `package.json`: Dependency configuration file (if it is a Node.js app).
- Other configuration files and resources.

## Usage

- Run the start command and follow the on-screen instructions to play.
- The game is played in turns between two players.
- The first player to align three symbols (horizontally, vertically, or diagonally) wins the game.
- If all squares are filled without a winner, the game ends in a draw.
