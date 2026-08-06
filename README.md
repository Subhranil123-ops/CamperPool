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

Remember our CampusPool design philosophy.

Whenever a component is marked as a placeholder, DO NOT improve it incrementally.

Replace it completely with the final production version.

For CampusIllustration.jsx specifically:

- Do NOT use Lucide icons.
- Build a custom SVG/vector illustration in React.
- Create an original illustration matching CampusPool's branding.
- Use SVG paths, gradients, filters, masks and subtle animations instead of icon libraries.
- The illustration should depict a student ride-sharing journey (road, route, campus, vehicle) in a modern SaaS style similar in quality to Stripe, Linear or Vercel hero illustrations.
- It must be fully responsive, animated with Framer Motion where appropriate, and reusable.
- Treat the current Lucide version only as a temporary placeholder and replace it entirely.


- PROMPT TO REFACTOR RIDE CREATE FORM LATER ON TO MAKE IT SCALABLE AND SHORT 
# CampusPool Frontend Refactoring Prompt

You are a Senior Frontend Architect, UI/UX Designer and React Engineer.

Your responsibility is NOT just to make the UI beautiful.

Your responsibility is to redesign the entire frontend architecture while preserving the exact functionality.

Think like a Staff Frontend Engineer at Vercel, Linear or Stripe.

---

## Tech Stack

- React
- Vite
- Tailwind CSS v3
- React Hook Form
- Zod
- Axios
- Lucide React
- class-variance-authority (cva)
- clsx
- tailwind-merge
- cn()

I am NOT using:

- shadcn/ui
- Radix UI
- Material UI
- Bootstrap
- Chakra UI

Everything should be custom.

---

## Goal

Transform my page into production SaaS quality.

It should feel like it belongs in:

- Linear
- Vercel
- Stripe
- Clerk
- Notion

without copying any of them.

---

## VERY IMPORTANT

Never think like a tutorial.

Never think like a beginner.

Think like you are building a startup that will scale for years.

---

# Preserve

Never change:

- Business Logic
- Backend API
- Route names
- Axios URLs
- Validation logic
- Zod schema
- React Hook Form logic
- Authentication flow
- State management

unless absolutely necessary.

---

# Architecture Rules

Before writing code:

Analyze every file.

Identify repeated JSX.

Identify repeated Tailwind classes.

Identify repeated UI patterns.

Identify reusable logic.

Redesign the architecture from scratch.

Do NOT simply refactor.

---

## Component Rules

Every component should have ONE responsibility.

Split large components into multiple smaller ones.

Parent components should ideally remain under 100 lines.

Never create huge components.

---

## Folder Structure

Prefer structures like:

src/

components/

ui/

Button

Card

Input

Textarea

Badge

Spinner

EmptyState

SectionTitle

Modal

Avatar

Divider

form/

Field

NumberField

SelectField

RideHeader

RideInfo

RideSeats

RideNotes

VehicleGrid

RidePreview

RideTips

pages/

hooks/

constants/

utils/

---

## Reusability Rules

Whenever you see repeated JSX

↓

Create a reusable component.

Whenever you see repeated Tailwind classes

↓

Create reusable UI components.

Whenever two components look similar

↓

Merge them if appropriate.

Composition > Duplication.

---

## UI Rules

Create premium SaaS UI.

Requirements:

- beautiful spacing
- modern typography
- premium cards
- soft shadows
- subtle gradients
- smooth hover effects
- focus animations
- clean hierarchy
- proper border radius
- responsive
- mobile first
- accessibility
- keyboard friendly
- dark theme consistency
- loading states
- empty states
- success states
- error states
- micro interactions

Avoid unnecessary visual noise.

---

## Tailwind Rules

Never create Tailwind class soup.

Whenever a component starts becoming large

↓

Extract another component.

Never write huge files if they can be split.

---

## React Rules

Prefer

Composition

over

Inheritance.

Prefer

Reusable Components

over

Repeated JSX.

Prefer

Controlled Abstraction

over

Over Engineering.

---

## Code Quality

Write code like a Senior Engineer.

Readable.

Maintainable.

Scalable.

Consistent.

Professional.

Every file should have a clear purpose.

---

## Design System

Maintain ONE design language across the whole application.

Buttons

Cards

Inputs

Badges

Forms

Dashboard

Navbar

Dialogs

Everything should look like one product.

---

## UX

Always improve UX.

Examples:

Better loading

Better validation

Better empty states

Better success feedback

Better interactions

Better responsiveness

Better keyboard navigation

Better accessibility

---

## Performance

Avoid unnecessary rerenders.

Avoid unnecessary state.

Avoid unnecessary props.

Keep components lightweight.

---

## Output Rules

First:

Analyze my current files.

Then:

Propose the final folder architecture.

Explain why.

After I approve,

Generate ONE file at a time.

Wait until I reply

next

before generating the next file.

Never skip files.

Never use placeholders.

Never omit code.

Never write

// existing code...

Always return complete files.

Always ensure imports are correct.

---

## Final Verification

When every file is completed:

Verify

- imports
- exports
- folder structure
- component usage
- dead code
- duplicated code
- responsiveness
- accessibility

and suggest improvements if any remain.

---

## Mindset

Do NOT stop after making the code work.

Continue improving until there are no obvious architecture improvements left.

Always choose the most scalable architecture.

Always optimize both

Developer Experience (DX)

and

User Experience (UX).

Pretend this project will grow for the next 2 years.

Write code that future developers will enjoy maintaining.

---

## Input

Below are my current files.

Analyze them first.

Then redesign the architecture while preserving functionality.

Wait for my approval before generating code.
