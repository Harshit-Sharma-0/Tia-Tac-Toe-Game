# 🎮 Tic Tac Toe with Player Registration

A classic Tic Tac Toe game built with **HTML, CSS, and JavaScript (Modules)** featuring a **player registration form**, **custom symbols**, and **background video effects**. 

This project demonstrates localStorage usage, DOM manipulation, and modular JS practices.

---

## 🚀 Features

- 🔐 **Player Registration**: Enter names and choose symbols before starting the game.
- 💾 **LocalStorage Integration**: Player info is stored and passed to the game screen.
- ♻️ **Reset Functionality**: Reset the game board and start over anytime.
- 🧠 **Winner Detection Logic**: Smart logic to detect wins and draws.
- 🎥 **Background Videos**: Enhances user experience with looped video backgrounds.
- ✅ **Responsive Design**: Optimized for different screen sizes.

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES Modules)**
- **LocalStorage API**

---

## Project Structure

The project is organized as follows:

- **`tic-tac-toe/`**  
  This is the root directory containing all project files.

  - **`index.html`**  
    Main interface for the Tic Tac Toe game.

  - **`register.html`**  
    Player registration form where players can input their names and choose their symbols.

  - **`my.js`**  
    Handles the main game logic, including the detection of a winner and managing turns.

  - **`my2.js`**  
    Responsible for player registration logic, storing player data in `localStorage`.

  - **`style.css`**  
    Styling for the game board interface and visual design.

  - **`style2.css`**  
    Styles specifically for the registration form layout.

  - **`first.mp4`**  
    Background video for the game screen.

  - **`second.mp4`**  
    Background video for the registration screen.

  - **`README.md`**  
    Project documentation, including instructions and details on how to use the application.





---

## 🧩 How It Works

### 1️⃣ Player Registration (`register.html`)
- Player 1 enters their name and chooses a symbol (X or O).
- Player 2 form becomes visible once Player 1 clicks "Next".
- Player 2 enters their name.
- All player info (names and symbols) is saved in `localStorage`.

### 2️⃣ Game Screen (`index.html`)
- Game grid (3x3 buttons) appears.
- The players take turns placing their symbols.
- The game checks for a winner after each move using pre-defined win patterns.
- An alert is shown when a player wins.
- The "Reset" button clears the board for a new game.
 
---
