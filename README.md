# 🏠 Housing Listings App (Inspired by HousingPanda)

This is a simple web application that allows users to submit and view rental housing listings. It's inspired by HousingPanda and built using:

- **Node.js + Express** (Backend)
- **MySQL** (Relational Database)
- **HTML/CSS + Vanilla JavaScript** (Frontend)

---

## 🚀 Features

- Submit new listings with:
  - Listing Title
  - Description
  - Rent
  - Address
  - Number of Rooms
  - Contact Info
- View all submitted listings on a separate page.
- Uses a relational database (MySQL) to store and retrieve data.

---

## 📁 Folder Structure

```
housingpanda/
├── db.js               # Database connection
├── server.js           # Express backend server
├── package.json        # Project dependencies
├── public/
│   ├── form.html       # Form page to submit listings
│   └── listings.html   # Page to view submitted listings
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SmitPanchal61/Housing-Panda-OA.git
cd Housing-Panda-OA
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up MySQL Database

Open MySQL CLI or Workbench and run:

```sql
CREATE DATABASE housing_db;

USE housing_db;

CREATE TABLE listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  rent DECIMAL(10,2),
  address VARCHAR(255),
  rooms INT,
  contact VARCHAR(100)
);
```

### 4. Update `db.js` with your MySQL credentials

Replace `xxxxx` with your actual MySQL root password:

```js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xxxxx', // <= REPLACE this
  database: 'housing_db'
});
```

---

## 🚀 Run the Project

### Start the Server
```bash
node server.js
```

### Open in Browser
- Submit listings at: [http://localhost:3000/form.html](http://localhost:3000/form.html)
- View listings at: [http://localhost:3000/listings.html](http://localhost:3000/listings.html)

