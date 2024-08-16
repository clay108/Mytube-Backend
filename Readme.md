# MyTube Backend 

This project is a backend clone of YouTube, providing APIs for video uploads, user authentication, and more. It leverages Express.js, MongoDB, and other modern tools to create a scalable backend service.

## Features

- User Authentication (JWT)
- Video Upload and Management
- Secure File Storage (Cloudinary)
- API Pagination
- Cross-Origin Resource Sharing (CORS)

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **Cloudinary** for media storage
- **JWT** for authentication

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/youtube-backend-clone.git
   cd youtube-backend-clone
2. ** Install Dependecies**
     ```bash
     npm install
3. ** Environment setup: Create a .env file and add the following:***
     ```bash
     PORT=3000
     MONGO_URI=your_mongo_uri
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_URL=your_cloudinary_url

4. **Run the server: **
    ``` bash
    npm run dev


