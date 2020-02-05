This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Set up instructions

Wherever you wish to install, from your terminal of choice run:

### `git clone https://github.com/wilks654/semantic-table.git`

Downloads the repository.

### `npm install`

Installs node_module dependencies (run from project root dir).

### `npm start`

To run the project from CRA's generated scripts.

## About

A semantic table implemented in React using hooks to handle basic state logic.

Flair : table cells are conditionally highlighted if they are either a) currently hovered over, b) they are the first cell of a row where a cell is being hovered (excluding the header) or, c) they are the header name of a data cell currently being hovered.
