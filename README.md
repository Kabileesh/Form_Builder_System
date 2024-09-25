# 📑 Form Builder Application

A powerful and intuitive Form Builder application built using the MERN (MongoDB, Express, React, Node.js) stack. This project allows users to dynamically create, edit, and manage custom forms, store form data, and handle responses easily.

👉 [Click here](https://hilarious-paletas-b33147.netlify.app/) to use the live application.

## 🚀 Features
* Supports various form field types (text, checkbox, radio button, etc.)
* Real-time preview of forms
* API Integration for saving and retrieving forms and their responses
* Responsive design for seamless usage across devices

## 📦 Prerequisites
Before setting up the project, make sure you have the following installed:

* [Node.js](https://nodejs.org/en) (v14.x or higher)
* [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running on your local machine) or [MongoAtlas](https://www.mongodb.com/products/platform/atlas-database) (use cloud MongoDB Atlas)

## 🚀 Getting Started
### 1. Clone the Repository
```
git clone https://github.com/Kabileesh/Form_Builder_System.git
```

### 2. Install Dependencies
For both backend and frontend, you need to install the dependencies:

For backend:
```
cd .\Backend
npm i
```
For Frontend:
```
cd .\frontend
npm i
```

### 3. Setup Environment Variables
Create a `.env` file in the **backend** and **frontend** directory and set up the following variables:

For Backend:
```
SECRET = "YOUR SECRET"
MONGO_URI = "YOUR MONGO LOCAL OR ATLAS URI "
PORT = 5000
NODE_ENV = "development" or "production"
```
For Frontend:
```
REACT_APP_BASE_URL = "BACKEND URL"
```

### 4. Start the Application
Once all dependencies are installed and environment variables are set, you can start the server and client.
* **Start the Server:**
  ```
  cd .\Backend
  npm start
  ```
The server should now be running on http://localhost:5000.
* **Start the client:**
  ```
  cd .\frontend
  npm start
  ```
The client should now be running on http://localhost:3000


## ⚙️ Available Scripts
In both the `frontend` and `backend` directories, you can run the following scripts:

* `npm start`: Starts the application in development mode
* `npm run build`: Builds the React app for production
