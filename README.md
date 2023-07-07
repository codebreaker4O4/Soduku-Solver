# Sudoku Solver

This is a Sudoku Solver project implemented in C++ using backtracking algorithm. It provides an interactive command-line interface for generating and solving Sudoku puzzles.

## Features

- Generate Sudoku puzzles of varying difficulty levels.
- Solve generated Sudoku puzzles using the backtracking algorithm.
- Display the solved puzzle on the command line.
- Interactive user interface with buttons for generating and solving puzzles.

## Prerequisites

- C++ compiler (supporting C++11 or higher)
- Git (optional, for cloning the repository)

## Getting Started

## Algorithm

The Sudoku puzzle solver is implemented using the backtracking algorithm. It follows these steps:

1. Find an empty cell in the puzzle.
2. Try all numbers from 1 to 9 in that empty cell.
3. If a number is valid in the current position, move to the next empty cell and repeat steps 1-2.
4. If a number is not valid, backtrack to the previous cell and try a different number.
5. Repeat steps 1-4 until the puzzle is solved or all possibilities are exhausted.

## Acknowledgments

- The backtracking algorithm implementation was inspired by various Sudoku solving algorithms available online.
- Thanks to the open-source community for providing valuable resources and examples.
