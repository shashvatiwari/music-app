Music App
A music app built using React, Node.js, and MongoDB that allows users to add new songs and view a list of all songs with their details.

Steps to Set Up and Run the Application
Backend (Node.js + MongoDB)

Clone the repository:
git clone https://github.com/your-username/music-app.git
cd music-app

Navigate to the backend directory:
cd server

Install required dependencies:
npm install

Set up MongoDB:
If you haven't installed MongoDB, download and install MongoDB or use MongoDB Atlas.
Create a database named music-player (or change the database name in .env file).
Create a .env file in the backend directory and add the MongoDB URI:

MONGO_URI=mongodb+srv://shashwatiwari:shashwatiwari@cluster0.ytabkne.mongodb.net/music-player

Run the backend server:
node server.js
The backend should now be running on http://localhost:5000.

Frontend (React)
Navigate to the frontend directory:

cd client
Install required dependencies:

npm install
Start the React development server:

npm start
The frontend should now be running on http://localhost:3000.

Access the App
Add Song Page: Navigate to http://localhost:3000/add-song to add a new song.
List Songs Page: Navigate to http://localhost:3000/list-songs to view all added songs.


Technologies and Tools Used

Frontend:
React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making requests to the backend.
React Router: A routing library for navigating between pages in a React application.
CSS: Used for styling and making the app responsive.


Backend:
Node.js: JavaScript runtime for building the server.
Express.js: Web application framework for Node.js.
MongoDB: NoSQL database for storing song data.
Mongoose: MongoDB object modeling tool for Node.js.
CORS: Middleware for enabling cross-origin requests.
Body-Parser: Middleware for parsing request bodies.


Development Tools:
VS Code: Code editor used for writing the application.
Postman (optional): For testing API endpoints.


License
This project is licensed under the MIT License - see the LICENSE file for details.