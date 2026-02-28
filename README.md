# 🚗 CamperPool

A Full-Stack Smart Ride Sharing Platform designed for campus transportation.
CamperPool allows students to create, join, and manage rides efficiently within their campus.

![CamperPool](https://img.shields.io/badge/CamperPool-Ride%20Sharing-blue)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8BC34A?logo=ejs&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-000000?logo=railway&logoColor=white)
---

## 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=railway)](https://camperpool-production.up.railway.app)

---

## 🎥 Project Demonstration

[![Watch on YouTube](https://img.shields.io/badge/Watch%20on-YouTube-red?logo=youtube)](https://youtu.be/-zx49D9SlG4) 

---

## 📌 Problem Statement

- In many colleges, hostels are located far from the main academic buildings.
Students travel individually every day, which increases transportation cost and fuel usage.
There is no proper communication system for students to coordinate rides with each other.
As a result, money is wasted and opportunities to build community connections are lost.

- CamperPool solves this problem by providing a platform where students can communicate and coordinate rides when traveling between hostel and college.
Students can share rides, reduce travel costs, and save fuel.
At the same time, it helps build a stronger student community through shared travel experiences.

---

## ✨ Features

- 🔐 User Authentication (Signup / Login / Logout)
- ➕ Create Ride
- 👥 Join Ride
- 🚪 Leave Ride
- ❌ Cancel Ride
- 📊 Dashboard with Total & Active Ride Count
- 🪑 Automatic Seat Availability Tracking
- 📅 Date & Time Based Ride Filtering
- 🛡️ Protected Routes (Only Logged-in Users Can Access Certain Features)
- 🌐 Deployed on Railway

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Frontend
- EJS (Embedded JavaScript Templates)
- Bootstrap 5

### Deployment
- Railway (Cloud Hosting)
- MongoDB Atlas (Database Hosting)

---

## 🗂️ Folder Structure Explanation

The project follows a modular MVC-based architecture to maintain scalability and readability:

- **models/**  
  Contains all database schemas (User and Ride models).

- **Routes/**  
  Contains all application routes like authentication and ride management.

- **Controller/**  
  Contains the business logic for handling requests and responses.

- **views/**  
  Contains all EJS template files used to render pages.

- **public/**  
  Contains static files like CSS.

- **utils/**  
  Contains helper utilities such as custom error handling and async wrappers.

- **config/**  
  Contains database configuration files.

```code
CamperPool/
│
├── config/
│ └── db.js # MongoDB connection setup
│
├── Controller/
│ ├── auth.js # Authentication logic
│ └── dashboard.js # Ride & dashboard logic
│
├── models/
│ ├── rideSchema.js # Ride schema
│ └── userSchema.js # User schema
│
├── Routes/
│ ├── auth.js # Authentication routes
│ └── dashboard.js # Ride & dashboard routes
│
├── public/
│ ├── css/
│  └── common.css # Global styles
│
├── utils/
│ ├── ExpressError.js # Custom error handler
│ └── wrapAsync.js # Async error wrapper
│
├── views/
│ ├── auth/
│ │   ├── login.ejs # login page 
│ │   └── register.ejs # Register page
│ │  
│ ├── dashboard/
│ │ ├── dashboard.ejs
│ │ ├── editRide.ejs
│ │ ├── newRide.ejs
│ │ ├── rides.ejs
│ │ └── showRide.ejs
│ │
│ ├── includes/
│ │ ├── flash.ejs
│ │ ├── footer.ejs
│ │ └── header.ejs
│ │
│ │── layouts/
│ │  │── boilerplate.ejs
│ └── error.ejs
|
│── assets/
|     │── screenshots
|
├── middlewares.js # Custom middleware
├── index.js # Entry point
├── schema.js # Validation schemas
├── package.json
├── .gitignore
├── README.md
└── .env (not committed)
```

## ⚙️ Installation (Run Locally)

1. Clone the repository:

```bash
git clone https://github.com/your-username/CamperPool.git
```
2. Navigate to project folder:

```bash
cd CamperPool
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file and add:

```code
MONGO_URL=your_mongodb_connection_string
SECRET=your_session_secret
``` 

5. Start the server:

```bash
npm start
```

6. Open in browser:

```code
http://localhost:3000
``` 
---

## 📷 Screenshots

### Login Page

![login](assets/screenshots/image-5.png)

### Register Page

![Register](assets/screenshots/image-4.png)

### Available Rides

![availableRides](assets/screenshots/image-1.png)

### 🏠 Dashboard

![dashboard](assets/screenshots/image.png)

### 🚗 Ride Details Page

![newRide](assets/screenshots/image-2.png)

### ➕ Create Ride Form

![newRide](assets/screenshots/image-3.png)

### No Rides Found Page

![noRides](assets/screenshots/image-6.png)

---

## 🚀 Future Improvements

- Real-time notifications
- Google Maps integration
- In-app chat system
- Payment integration
- Ride rating system

---

## 👨‍💻 Author

- Subhranil Mandal
- First Year CSE Student
- JNU

---