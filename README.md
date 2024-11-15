# Todo Application

## 📋 About the Application

The **Todo Application** is a feature-rich task management tool that helps users organize and prioritize their tasks effectively. The application supports the following functionalities:

- Add and delete tasks.
- Filter tasks based on their completion status (e.g., Completed, Incomplete).
- Sort tasks by time or priority.
- Search for specific tasks using keywords.
- Save tasks persistently using **localStorage**.
- Responsive design for desktop and mobile devices.

---

## 🚀 Setup and Launch Process

Follow the steps below to set up and run the application locally:

### Prerequisites
- **Node.js** and **npm** installed on your system.
- A modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, Brave).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/saam-rgb/todo-flarelink.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-flarelink
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

For a production build:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to your hosting service.

---

## 💡 Assumptions Made During Development

1. **Task Persistence**:
   - Tasks are stored in the browser's `localStorage` to maintain them even after refreshing the page.

2. **Task Prioritization**:
   - Priority levels are predefined (e.g., High, Medium, Low) and can be assigned to tasks during creation.

3. **Filters**:
   - "Completed" and "Incomplete" filters display tasks based on their `completed` status.
  
4. **Default Behavior**:
   - By default, tasks are displayed in the order they were added (chronological).

5. **Error Handling**:
   - Basic input validation ensures tasks cannot be added without a title.

---

## 🖼️ Screenshots

### Home Page (Default View)
![Home Page](https://github.com/user-attachments/assets/f0ee34fd-61ba-4fee-a50b-984f3dcb97b5)

### Adding a New Task
![New Task](https://github.com/user-attachments/assets/e2d283f8-4d98-4cac-848d-5d09098e6770)

### Task Filters (Completed and Incomplete)
#### Completed
![Completed](https://github.com/user-attachments/assets/7543ca1a-d560-4f9f-b40b-525cb8bbc77a)
#### Incomplete
![Incomplete](https://github.com/user-attachments/assets/7a715d47-8a11-4fd4-8154-ec8008681d5e)

### Task Sort (Time and Priority)
#### Time
![Time](https://github.com/user-attachments/assets/9ab2b73b-55ed-44b7-b456-31b2b7de921c)
#### Priority
![Priority](https://github.com/user-attachments/assets/022d5a29-7bb0-4e8b-8749-5379c189a5b7)


### Search Functionality
![Search](https://github.com/user-attachments/assets/ea4658dd-a317-46e5-91c9-d5732237025c)


### Responsive Design
![Mobile](https://github.com/user-attachments/assets/18f5f932-52a3-47a0-a5f4-22c203083257)

### Validation
![Validation](https://github.com/user-attachments/assets/6205ff14-97b4-47ab-b644-384f1988a499)

### Toast message (Animated)
#### Add Todo Task
![Add Task](https://github.com/user-attachments/assets/1c0b77e0-d10d-454b-8dbc-30c13e330d33)

#### Task Completed
![Task Completed](https://github.com/user-attachments/assets/2dc7b3a9-b4ee-4d2b-957e-b7ff4ce04175)

#### Task Moved from Complete to Incomplete
![image](https://github.com/user-attachments/assets/4b34a6c4-cc27-48f8-9693-46e387c73049)

#### Delete Task
![Delete Task](https://github.com/user-attachments/assets/69c76b9a-4fa4-412b-99ef-124791a378cd)

### Local Storage
https://github.com/user-attachments/assets/06283450-cdf4-486a-b3e8-eaf55255adc7

## 📺 Full Demo
https://github.com/user-attachments/assets/4985ed9c-f827-4ac0-a3e7-4d19234f8bff





