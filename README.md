
# 24DIT071-WEBDEV-LAB
# 📝 Task Manager - Full Stack Application

A modern, responsive, and feature-rich task management application built with **React + Vite** on the frontend and **Node.js + Express + MongoDB** on the backend.

![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=flat-square&logo=vite)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?style=flat-square&logo=mongodb)

---

## ✨ Features

✅ **Create Tasks** - Add new tasks with title, description, and priority level  
✅ **View All Tasks** - Display tasks in a beautiful responsive grid layout  
✅ **Edit Tasks** - Update task details easily with a dedicated form  
✅ **Delete Tasks** - Remove tasks with confirmation dialog  
✅ **Mark Complete** - Toggle task completion status with visual feedback  
✅ **Filter by Priority** - Filter tasks by Low, Medium, or High priority  
✅ **Statistics Dashboard** - View total, completed, and pending task counts  
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices  
✅ **Dark Modern Theme** - Eye-friendly dark UI with smooth animations  
✅ **Error Handling** - User-friendly error messages and validation  
✅ **Loading States** - Smooth loading animations and feedback  
✅ **Real-time Updates** - Instant UI updates on all operations  

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern UI library with hooks
- **Vite 5.0** - Lightning-fast build tool and dev server
- **Axios** - Promise-based HTTP client
- **CSS3** - Styled with CSS variables, Grid, and Flexbox

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18** - Minimal and flexible web framework
- **MongoDB 7.0** - NoSQL database
- **Mongoose 7.0+** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing for frontend communication

---

## 📁 Project Structure

```
practical4/
│
├── task-manager-api/                    (Backend)
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── task.controller.js
│   ├── middleware/
│   │   ├── logger.middleware.js
│   │   ├── validateJson.middleware.js
│   │   └── validateTaskId.middleware.js
│   ├── models/
│   │   └── task.model.js
│   ├── routes/
│   │   └── task.routes.js
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
└── task-manager-ui/                     (Frontend)
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.jsx
    │   │   ├── TaskList.jsx
    │   │   ├── TaskItem.jsx
    │   │   └── TaskFilter.jsx
    │   ├── services/
    │   │   └── taskService.js
    │   ├── App.jsx
    │   ├── App.css              (All styles in one file!)
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── node_modules/
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16 or higher
- **npm** or **yarn**
- **MongoDB** (local or Atlas)

### Step 1: Backend Setup (5 minutes)

```bash
# Navigate to backend folder
cd D:/Documents/AWDF/practical4/task-manager-api

# Install dependencies including CORS
npm install cors

# Update these files with provided versions:
# 1. server.js (with CORS configuration)
# 2. task.controller.js (fixed syntax error)
# 3. package.json (add cors dependency)

# Start the backend server
npm run dev
```

**Expected Output:**
```
Server running on http://localhost:5000
DB Connected!
```

---

### Step 2: Frontend Setup (5 minutes)

```bash
# Create a new Vite React project
cd D:/Documents/AWDF/practical4
npm create vite@latest task-manager-ui -- --template react
cd task-manager-ui

# Install dependencies
npm install
npm install axios

# Create component and service folders
mkdir src/components
mkdir src/services

# Copy all React component files (8 files total)
# See FILES_TO_COPY.md for exact file list

# Start the frontend development server
npm run dev
```

**Expected Output:**
```
  VITE v5.0.8  ready in 234 ms

  ➜  Local:   http://localhost:5173/
```

---

### Step 3: Access the Application

Open your browser and visit:
```
http://localhost:5173
```

🎉 **Done! Your Task Manager is running!**

---

## 🎯 API Endpoints

### Base URL
```
http://localhost:5000/tasks
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all tasks |
| `GET` | `/:id` | Get task by ID |
| `POST` | `/` | Create new task |
| `PUT` | `/:id` | Update task |
| `DELETE` | `/:id` | Delete task |

### Example Requests

**Create Task**
```bash
curl -X POST http://localhost:5000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn React",
    "description": "Study React hooks and state management",
    "priority": "high"
  }'
```

**Get All Tasks**
```bash
curl http://localhost:5000/tasks
```

**Update Task**
```bash
curl -X PUT http://localhost:5000/tasks/[TASK_ID] \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "completed": true,
    "priority": "medium"
  }'
```

**Delete Task**
```bash
curl -X DELETE http://localhost:5000/tasks/[TASK_ID]
```

---

## 💾 Data Model

### Task Schema

```javascript
{
  _id: ObjectId,              // MongoDB ID
  title: String,              // Required
  description: String,        // Optional
  completed: Boolean,         // Default: false
  priority: String,           // Enum: ["low", "medium", "high"]
  createdAt: Date            // Auto-generated
}
```

---

## 📖 How to Use

### Creating a Task
1. Fill in the **Task Title** (required)
2. Add optional **Description**
3. Select **Priority Level** (Low, Medium, High)
4. Click **"Create Task"**

### Viewing Tasks
- Tasks display in a **responsive grid**
- Sorted by completion status and priority
- Shows title, description, date, and priority

### Editing a Task
1. Click **✏️ Edit** button
2. Update details in the form
3. Click **"Update Task"**

### Marking Complete
1. Click the **checkbox** next to a task
2. Task gets strikethrough and fades
3. Statistics update automatically

### Deleting a Task
1. Click **🗑️ Delete** button
2. Confirm in dialog
3. Task is removed

### Filtering Tasks
1. Use **filter buttons** above the list
2. Choose: All Tasks, High, Medium, or Low priority
3. List updates instantly

---

## 📊 Dashboard Statistics

Three cards at the top show:
- 📋 **Total Tasks** - All tasks count
- ✅ **Completed** - Finished tasks
- ⏳ **Pending** - Remaining tasks

Updates in real-time! ✨

---

## 🎨 User Interface

### Theme Colors
- **Primary:** Indigo (#6366f1)
- **Success:** Green (#10b981)
- **Danger:** Red (#ef4444)
- **Warning:** Amber (#f59e0b)
- **Background:** Dark Blue (#0f172a)

### Responsive Breakpoints
- Desktop (1920px+)
- Laptop (1024-1920px)
- Tablet (768-1024px)
- Mobile (320-768px)

---

## 🐛 Troubleshooting

### "Cannot find module 'cors'"
```bash
cd task-manager-api
npm install cors
```

### "CORS policy error"
- Verify backend running on port 5000
- Check CORS configuration in `server.js`
- Verify frontend URL matches CORS origin

### "Port already in use"
```bash
# Find process on port
lsof -i :5000

# Kill process
kill -9 [PID]
```

### "MongoDB Connection Error"
- Ensure MongoDB is running
- Check connection string in `config/db.js`
- If using Atlas, verify IP whitelist

### "Blank page with no styling"
- Hard refresh (Ctrl+Shift+R)
- Check browser console for errors
- Verify `App.css` is properly copied

---

## 💻 Running Both Servers

### Terminal 1 - Backend
```bash
cd task-manager-api
npm run dev
```

### Terminal 2 - Frontend
```bash
cd task-manager-ui
npm run dev
```

### Terminal 3 - MongoDB (optional)
```bash
mongod
```

Then open: **http://localhost:5173**

---

## 📝 Files Guide

### Backend
- `server.js` - Main server, CORS setup
- `config/db.js` - MongoDB connection
- `models/task.model.js` - Database schema
- `routes/task.routes.js` - API routes
- `controllers/task.controller.js` - Request handlers
- `middleware/*` - Logging, validation

### Frontend
- `App.jsx` - Main component, state
- `App.css` - All styling (one file!)
- `components/*.jsx` - UI components
- `services/taskService.js` - API calls

---

## 🚀 Performance Tips

1. Use database indexing for frequently queried fields
2. Minimize CSS/JS in production builds
3. Implement pagination for large task lists
4. Add caching for API responses
5. Use CDN for static assets in production

---

## 🔐 Security Tips

1. Validate all user input (frontend + backend)
2. Restrict CORS to specific origins in production
3. Use environment variables for sensitive data
4. Implement MongoDB IP whitelist
5. Add authentication for multi-user support

---

## 🌟 Future Enhancements

- 🔐 User authentication
- 👥 Task sharing
- 📅 Due dates & reminders
- 🏷️ Tags & categories
- 🔍 Advanced search
- 📊 Analytics dashboard
- 🌙 Dark/Light mode toggle
- 📱 Mobile app
- 🔔 Notifications
- 💾 Cloud sync

---

## 🙏 Support

If you encounter issues:

1. Check the **Troubleshooting** section
2. Review browser console (F12)
3. Check backend logs
4. Verify files are copied correctly
5. Ensure both servers are running

---

## ✨ Quick Commands

| Task | Command |
|------|---------|
| Start Backend | `npm run dev` |
| Start Frontend | `npm run dev` |
| Build Frontend | `npm run build` |
| Install CORS | `npm install cors` |
| Kill Process | `lsof -i :[PORT]` |

---

## 📄 License

MIT License - Open source and free to use!

---

Built with ❤️ using React, Vite, Express, and MongoDB.

**Happy task managing!** 🚀
