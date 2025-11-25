# 🛒 GreenCart – E-Commerce Grocery Store

GreenCart is a full-stack e-commerce web application designed for seamless online grocery shopping. Users can browse products, add items to a cart, register/login, and place orders with a user-friendly interface.

## 🌟 Features

- 🥦 Browse grocery products by category (fruits, vegetables, dairy, etc.)
- 🛍 Add items to cart, update quantity, and remove items
- 🔐 User registration and login with JWT authentication
- 📦 View order summary and place orders
- 🗃 View past orders in "My Orders"
- ⚙️ Admin dashboard for managing products and orders (optional)
- 📱 Fully responsive design

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- React Toastify

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT Authentication

## 🔗 Live Demo
 https://greencart-frontend-sandy.vercel.app/

## 🧩 How It Works

1. **Browse Products** – Users can view items by category, filter, or search.
2. **Add to Cart** – Items can be added or removed; cart quantity is adjustable.
3. **Login/Register** – Secure authentication with JWT tokens.
4. **Place Orders** – On checkout, an order summary is displayed and saved to the database.
5. **Track Orders** – Users can view their previous orders under "My Orders".


## 🛠️ Installation & Setup

1️⃣ Clone the repo

git clone https://github.com/<your-username>/<repo-name>.git

cd <repo-name>

2️⃣ Install Backend Dependencies

cd backend

npm install

npm run dev

3️⃣ Install Frontend Dependencies

cd ../client

npm install

npm run dev

## 🔑 Environment Variables

Backend .env:

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=

Frontend .env:

VITE_API_URL=http://localhost:5000

## screenshots

# Home

<img width="1271" height="1230" alt="image" src="https://github.com/user-attachments/assets/f5bc4b75-83db-4289-919c-96b46717cb59" />

# Login

<img width="366" height="383" alt="image" src="https://github.com/user-attachments/assets/ba21d188-1e5c-4d93-a195-76c85308ef72" />

# All products

<img width="1187" height="1460" alt="image" src="https://github.com/user-attachments/assets/33d64f4b-b5a0-4868-8716-eba995333b42" />

# Shopping Cart

<img width="1231" height="628" alt="image" src="https://github.com/user-attachments/assets/cf1bfb9d-a1d7-46c2-ae93-fdc18515e156" />

# My orders

<img width="949" height="630" alt="image" src="https://github.com/user-attachments/assets/952ce081-743e-488e-9396-982d6c5a6fa8" />



🤝 Contributing

Pull requests are welcome. Open an issue for major changes.

📄 License

This project is licensed under the MIT License.
