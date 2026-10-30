# Zombie Attack | 2D Web Arcade Game

An interactive, web-based 2D arcade game built from scratch using native web technologies. The project demonstrates asynchronous state management, keyboard event handling, and real-time coordination updates inside a browser environment.

## 🚀 Features

- **Asynchronous Game Loops:** Implemented multiple independent execution tracks using JavaScript `setInterval()` to manage character state lifecycles (`idle()`, `run()`, `attack()`).
- **Keyboard Event Tracking:** Integrated localized dynamic controls using standard key code checks (`Enter` to start/timer initialization, `Space` for weapon actions).
- **Sprite Animation Management:** Configured smooth state transitions by systematically iterating image source counters linked with precise interval triggers.
- **Dynamic Physics & Conditions:** Structured mathematical bound monitoring (`runMarginLeft == 930`) to evaluate exact player coordinate thresholds and trigger event resolutions (Win/Game Over).

## 🛠️ Tech Stack

- **Markup & Layout:** HTML5 (Semantic elements)
- **Styling & Positioning:** CSS3 (Absolute coordinate systems, transform flips)
- **Game Logic:** Vanilla JavaScript (ES6+, Functional Execution, DOM Manipulation)

## 📂 Project Directory Structure

```text
├── index.html       # Game viewport container and event binders
├── style.css        # Background graphics configuration and spatial frames
└── script.js        # Core game loop engine, workers, and state metrics
```

## 💡 Engineering Insights (Interview Context)

The architecture splits execution into isolated, parallel worker intervals. Rather than packing all operations into a heavy singular thread, the logic isolates the game clock (`timer()`), idle sprites, and active translation sequences into specialized callbacks. This structural breakdown prevents interface locking during quick consecutive weapon strikes and preserves execution modularity.

## ⚙️ How to Play

1. Clone this project repository.
2. Open `index.html` inside any standard modern web browser.
3. Press **Enter** to trigger the countdown timer and begin navigation.
4. Press **Space** once you cross the target operational threshold to resolve the zombie state.
5.
