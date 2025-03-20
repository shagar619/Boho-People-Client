# BOHO PEOPLE

🌿 **Live Site:** [BOHO PEOPLE - Live Website](https://boho-people.web.app)

## 📖 About the Project
BOHO PEOPLE is a modern, feature-rich blog website designed for free-spirited individuals to share and explore inspiring content. Built using **React**, **Firebase**, and **MongoDB**, it offers a seamless and engaging user experience with authentication, blog management, and wishlist functionalities.

---
## ✨ Key Features

✅ **User Authentication** (Email/Password & Google Login)  
✅ **Fully Responsive Design** (Mobile, Tablet, Desktop)  
✅ **Dynamic Blog System** (Add, Update, Delete Blogs)  
✅ **Wishlist Feature** (Save Favorite Blogs)  
✅ **Comment System** (Users Can Comment on Blogs)
✅ **Search & Filter Blogs by Category**  
✅ **Featured Blogs Page** (Top Blogs Based on Word Count)  
✅ **JWT Authentication for Secure Private Routes**  
✅ **Newsletter Subscription with Toast Message**  
✅ **404 Page for Invalid Routes**  
✅ **Framer Motion Animations for a Smooth UI**
✅ **Secure API & Environment Variables**

---
## 🚀 Technologies Used

### 🔹 Front-End:
- React.js
- React Router
- Tailwind CSS
- Framer Motion
- TanStack Table (for sorting in Featured Blogs)

### 🔹 Back-End:
- Node.js
- Express.js
- MongoDB (Wishlist & Comments Collection)
- Firebase Authentication
- JWT Authentication

### 🔹 Deployment:
- Vercel (Back-End)
- Netlify (Front-End)

---
## 🔗 Project Structure & Pages

### 🔥 **Navigation Menu:**
- Home
- Add Blog (Private)
- All Blogs
- Featured Blogs
- Wishlist (Private)
- Login/Register

### 🏠 **Home Page:**
- Beautiful Hero Banner
- Recent Blogs Section (6 Blogs with Details & Wishlist Buttons)
- Newsletter Subscription
- Extra Sections for Uniqueness
- Footer with Social Links

### 📝 **All Blogs Page:**
- Displays All Blogs from Users
- Search by Blog Title & Filter by Category

### 📖 **Blog Details Page:**
- Full Blog Content Display
- User Comments Section with Profile Pictures
- Commenting Disabled for Blog Owners
- Conditional Update Button for Blog Owner

### ➕ **Add Blog Page:**
- Secure Form to Add New Blogs
- Dropdown for Blog Category Selection

### ✏️ **Update Blog Page:**
- Pre-Filled Form for Editing Blogs
- Secure & Private Route

### 🌟 **Featured Blogs Page:**
- Table of Top 10 Blogs (Sorted by Word Count)
- Interactive Sorting Feature using TanStack Table

### ❤️ **Wishlist Page:**
- Display Wishlisted Blogs of Logged-in User
- Remove from Wishlist Option

---
## ⚡ Deployment Guidelines
✅ Server must work perfectly in production (No CORS / 404 / 504 Errors)  
✅ Live Link must not show errors on landing  
✅ No page should break or reload incorrectly on refresh  
✅ Firebase Authentication Setup with Allowed Domains  
✅ Private Routes should not redirect logged-in users to login on refresh  

---
## 📜 Installation & Setup

1️⃣ Clone the repository:  
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/boho-people.git
```

2️⃣ Navigate to the project directory:  
```bash
cd boho-people
```

3️⃣ Install dependencies:  
```bash
npm install
```

4️⃣ Set up environment variables:  
Create a `.env` file and add your Firebase & MongoDB credentials:
```
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_MONGODB_URI=your_mongodb_uri
```

5️⃣ Start the development server:  
```bash
npm start
```

---
## 📌 Commit History & Best Practices
- **Client Side:** At least 15 meaningful commits with clear messages.
- **Server Side:** At least 8 meaningful commits with descriptive messages.
- Follow proper code structuring, naming conventions, and security practices.

---
## 🎯 Future Improvements
- Dark Mode Toggle
- AI-Powered Blog Recommendations
- Enhanced User Profiles
- Blog Analytics Dashboard

---
## 🤝 Contributing
We welcome contributions! If you’d like to improve *BOHO PEOPLE*, feel free to fork the repo, make changes, and submit a pull request.

---
## 📩 Contact
For any queries, reach out at [ashagar619@gmail.com](mailto:ashagar619@gmail.com).

🛠️ Happy Coding & Stay Boho! 🌿✨
