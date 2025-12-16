# 🎶 La Grande Soirée Gnawa – Mobile Application

## 📌 Project Overview

**La Grande Soirée Gnawa** is a full-stack mobile application designed to manage a cultural Gnawa event held in **Agadir, Morocco**.
The application allows visitors to view event details, discover participating Gnawa artists, and make simple ticket reservations.

This project was developed as an **individual academic project** with a real-world context and strict technical constraints.

---

## 🎯 Objectives

* Promote Gnawa cultural heritage
* Provide a simple mobile experience for event attendees
* Manage artists and bookings through a REST API
* Ensure offline access and smooth data caching

---

## 🏗️ Project Architecture

This repository contains **both Backend and Frontend** projects.

```txt
gnawa-soiree
 ├── backend/
 │    ├── src/
 │    ├── .env
 │    ├── package.json
 │
 ├── frontend/
 │    ├── app/
 │    ├── assets/
 │    ├── services/
 │    ├── app.json
 │    ├── package.json
 │
 ├── README.md
```

---

## 🖥 Backend

### ⚙️ Technologies

* **Node.js**
* **Express.js**
* **MySQL**
* **Sequelize ORM**
* **Dotenv & CORS**

### 🗄 Database Structure (3 tables only)

* `artists`
* `bookings`
* `event_info`

### 📡 API Endpoints

#### Event (Public)

* `GET /api/event` – Event information

#### Artists (Public)

* `GET /api/artists` – List all artists
* `GET /api/artists/:id` – Artist details

#### Bookings

* `POST /api/bookings` – Create a booking
* `GET /api/bookings/:code` – Get booking by confirmation code
* `GET /api/bookings/email/:email` – Get bookings by email


---

## 📱 Frontend (Mobile App)

### ⚙️ Technologies

* **React Native** (Expo)
* **React Query** – API data fetching & cache
* **AsyncStorage** – Local persistence
* **React Navigation**

### 📱 Screens (Minimum 5)

1. **Home** – Event information & banner
2. **Artists List** – List of Gnawa artists
3. **Artist Detail** – Artist details & schedule
4. **Booking Form** – Simple ticket reservation
5. **My Bookings** – View bookings & confirmation codes

---

## ▶️ Installation & Run

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
expo start
```

⚠️ Make sure to configure the `.env` file for database credentials and API URLs.

---

## 🧪 Tools & Testing

* **Postman** – API testing
* **Git & GitHub** – Version control
* **VS Code** – Development environment

---

## 📅 Project Context

* **Type**: Individual academic project
* **Duration**: 5 days
* **Launch Date**: 08/12/2025
* **Deadline**: 12/12/2025

### 📝 Evaluation Format

* 10 min – Mobile App Demo
* 10 min – Code & Architecture Review
* 30 min – Practical Scenarios
* 10 min – Code Review & Questions

---

## 👤 Author

Developed by **Abdelmajide Faska**
Full-Stack Developer

---

## 📄 License

This project is for **educational purposes only**.
