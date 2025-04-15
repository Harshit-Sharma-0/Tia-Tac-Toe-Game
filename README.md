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

## 📁 Project Structure


├── index.html            # Main game screen
├── register.html         # Player registration form
│
├── style.css             # CSS for the game board UI
├── style2.css            # CSS for the registration form
│
├── my.js                 # JavaScript: game logic, winning conditions
├── my2.js                # JavaScript: player setup, localStorage handling
│
├── first.mp4             # Background video for game screen
├── second.mp4            # Background video for registration screen
│



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
