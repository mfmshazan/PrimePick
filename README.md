# PrimePick - Modern E-Commerce Product Management System

## 🎨 Features

- **Beautiful UI Design**: Modern, gradient-based design with glassmorphism effects
- **Product Management**: Add, edit, delete, and view products
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Real-time Updates**: Instant UI updates without page refresh
- **Image Preview**: See product images before adding them
- **Smooth Animations**: Delightful hover effects and transitions

## 🚀 Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Make sure your `.env` file has the MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

## 📁 Project Structure

```
PrimePick/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── product.controller.js  # CRUD operations
│   ├── models/
│   │   └── product.js         # Product schema
│   ├── routes/
│   │   └── product.route.js   # API routes
│   ├── .env                   # Environment variables
│   ├── package.json
│   └── server.js              # Express server
│
└── frontend/
    ├── components/
    │   ├── Navbar.jsx         # Navigation bar
    │   └── ProductCard.jsx    # Product display card
    ├── pages/
    │   ├── HomePage.jsx       # Products listing
    │   └── CreatePage.jsx     # Add new product
    ├── src/
    │   ├── App.jsx            # Main app component
    │   ├── App.css            # Styling
    │   └── main.jsx           # Entry point
    ├── store/
    │   └── product.js         # Zustand state management
    └── package.json
```

## 🎯 API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## 🎨 Design Features

### Color Scheme
- Primary: Purple-Indigo gradient (#6366f1 to #8b5cf6)
- Secondary: Purple (#8b5cf6)
- Success: Green (#10b981)
- Danger: Red (#ef4444)

### UI Components
1. **Navbar**: Sticky navigation with gradient logo
2. **Product Cards**: Hover effects with edit/delete buttons
3. **Forms**: Modern input fields with icons
4. **Empty State**: Beautiful placeholder when no products exist

### Responsive Breakpoints
- Desktop: > 768px
- Tablet: 480px - 768px
- Mobile: < 480px

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv

### Frontend
- React 19
- Vite
- Zustand (State Management)
- React Router DOM
- React Icons
- CSS3 (Custom Styling)

## 📝 Usage Guide

### Adding a Product
1. Click "Add Product" in the navbar
2. Fill in the product name, price, and image URL
3. See a live preview of your image
4. Click "Add Product" to save

### Editing a Product
1. Hover over a product card on the home page
2. Click the edit icon (pencil)
3. Modify the product details
4. Click "Save" to update

### Deleting a Product
1. Hover over a product card
2. Click the delete icon (trash)
3. Confirm deletion

## 🎉 Features Implemented

✅ Full CRUD Operations
✅ Beautiful Modern UI Design
✅ Responsive Layout
✅ Real-time State Management
✅ Image Preview
✅ Smooth Animations
✅ Inline Editing
✅ Error Handling
✅ Loading States
✅ Empty States

## 🔒 Environment Variables

Make sure to add the following to your `backend/.env` file:

```env
MONGO_URI=mongodb://your_connection_string
PORT=5000
```

## 🚀 Deployment Tips

1. **Backend**: Deploy to Heroku, Railway, or Render
2. **Frontend**: Deploy to Vercel, Netlify, or Cloudflare Pages
3. Update the API proxy in `vite.config.js` to point to your deployed backend
4. Make sure to set environment variables in your hosting platform

## 💡 Tips

- Use high-quality product images for better visual appeal
- The image URL should be a direct link to an image (ending in .jpg, .png, etc.)
- Test on different screen sizes to see the responsive design in action
- The glassmorphism effect works best with the gradient background

Enjoy your beautiful product management system! 🎨✨
