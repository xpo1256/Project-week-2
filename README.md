# 🍽️ Dishly - Restaurant Review Platform

![App Screenshot](public/asset/images/mainScreen.png)

A full-stack MERN application for discovering, reviewing, and managing restaurants with secure authentication and role-based access control.

---

## 📜 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [API Reference](#-api-reference)
- [Screenshots](#-screenshots)
- [Development](#-development)
- [License](#-license)

---

## 🌟 Features
### 🔒 Authentication
- JWT-based login/signup
- Password encryption with bcrypt
- Role-based access (Admin/User)

### 🏨 Restaurant Management
- Add restaurants with images, menus, and locations
- Edit/delete restaurant listings
- Responsive card-based UI

### 📝 Review System
- Create and manage reviews
- Associate reviews with users & restaurants
- Average rating calculations

---

## 🛠️ Tech Stack
| Layer        | Technologies Used                     |
|--------------|---------------------------------------|
| **Frontend** | React, JSX, Tailwind CSS              |
| **Backend**  | Node.js, Express, MongoDB (Mongoose)  |
| **Auth**     | JWT, bcryptjs                         |
| **DevOps**   | Docker, GitHub Actions                |

---

## 📂 Project Structure
```bash
Dishly/
├── **Frontend (React)**  
│   ├── `public/`               # Static assets  
│   │   ├── images/            # App visuals  
│   │   └── index.html         # HTML template  
│   │  
│   └── `src/`  
│       ├── components/        # Reusable UI  
│       │   ├── auth/         # Auth forms  
│       │   ├── cards/        # Restaurant/Review cards  
│       │   └── modals/       # Popups  
│       │  
│       ├── pages/            # Route-based views  
│       │   ├── Home.jsx      # Restaurant listings  
│       │   ├── Auth.jsx      # Login/Signup  
│       │   └── Profile.jsx   # User dashboard  
│       │  
│       ├── styles/           # CSS modules  
│       ├── App.jsx           # Root component  
│       └── main.jsx          # Entry point  

├── **Backend (Node/Express)**  
│   ├── `config/`              
│   │   └── db.js            # MongoDB connection  
│   │  
│   ├── `controllers/`        # Business logic  
│   │   ├── auth.js          # Auth handlers  
│   │   ├── restaurants.js   # Restaurant CRUD  
│   │   └── reviews.js       # Review CRUD  
│   │  
│   ├── `models/`            # Mongoose schemas  
│   │   ├── User.js  
│   │   ├── Restaurant.js  
│   │   └── Review.js  
│   │  
│   ├── `routes/`            # API endpoints  
│   │   ├── api/             # Versioned routes  
│   │   └── index.js         # Main router  
│   │  
│   └── `server.js`          # Express setup  

├── `.env`                   # Environment variables  
├── `.gitignore`  
└── `README.md`              # You're here!  
```

## Trello Project Link
[Trello](https://trello.com/invite/b/688b3054cf1dba1f9fee2d2d/ATTI41e0411ac8a0ac689155bb894e2b54fb2E66F765/restaurant-project-week-2)

## Linkedin Profile
[Linkedin](www.linkedin.com/in/salman-alhashime)

## GitHub Profile 
[GitHub](https://github.com/xpo1256)

# Link for Repo
[Repo]()