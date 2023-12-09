# Kanban Board App

This project is a simple Kanban board application built using React.js. It allows users to visualize and manage tasks or tickets in a Kanban-style board.

## Features

- **Display Options:**
  - Group tickets by status, user, or priority level.
  - Sort tickets by priority or title.

- **Columns:**
  - Columns represent different categories such as users, to-do, in-progress, done, and cancelled.
  - Tickets are organized and displayed based on the selected grouping and sorting options.

- **Responsive Design:**
  - The Kanban board is designed to be responsive and works across various screen sizes.

## Components

### Navbar
- Located in the top-left corner.
- Provides options to select grouping criteria (status, user, priority) and sorting options (priority, title).

### KanbanColumns
- Renders the columns for different categories based on the chosen grouping option.
- Displays tickets in each column.

### Card
- Represents a single ticket/task.
- Displays information such as title, user, status, and priority.

## How to Use
1. **Setup:**
   - Clone the repository.
   - Install dependencies using `npm install`.

2. **Run the App:**
   - Use `npm start` to run the application locally.
   - Open the app in your browser (`http://localhost:3000` by default).

3. **Interact with the Kanban Board:**
   - Use the Navbar to select grouping and sorting options.
   - View and manage tickets organized in columns based on your selections.

## Technologies Used
- React.js
- JavaScript (ES6+)
- HTML/CSS


## Notes
- Make sure to have an internet connection to fetch data from the API.


