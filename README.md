# Civix - Civic Engagement Platform

![Civix Logo](public/logo512.png)

A comprehensive civic engagement platform that empowers citizens to participate in democracy through issue reporting, community voting, civic education, and interactive simulations.

## 🚀 Features

- **Issue Reporting**: Citizens can report local issues and track their status
- **Community Voting**: Participate in community-wide voting on local matters
- **Civic Education**: Learn about civic processes and responsibilities
- **Interactive Simulations**: Experience civic scenarios through interactive simulations
- **User Dashboard**: Personalized dashboard for managing complaints and activities
- **Admin Dashboard**: Administrative interface for managing platform content
- **Mobile Apps**: Available for both Android and iOS platforms
- **Profile Management**: User profiles with activity tracking

## 🛠 Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **React Router Dom 7.6.3** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.18.1** - Animation library
- **React Hot Toast** - Toast notifications
- **Lucide React** - Icon library
- **Styled Components** - CSS-in-JS styling
- **Three.js** - 3D graphics and animations

### Backend
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication and authorization
- **Bcrypt** - Password hashing
- **Multer** - File upload handling
- **Nodemailer** - Email service
- **Swagger** - API documentation
- **Express Rate Limit** - Rate limiting
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

### Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting
- Input validation and sanitization
- XSS protection
- CSRF protection
- Security headers with Helmet

## 📁 Project Structure

```
Civix/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── Pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── assets/
│   └── package.json
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── server.js
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/Shashwat-Trivedi/Civix.git
cd Civix
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install backend dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/civix
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

## 📱 Available Scripts

### Frontend Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Backend Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

## 🌟 Key Features Overview

### For Citizens
- **Report Issues**: Submit local issues with photos and descriptions
- **Track Progress**: Monitor the status of reported issues
- **Community Voting**: Participate in local decision-making
- **Educational Content**: Access civic education resources
- **Interactive Simulations**: Learn through hands-on civic scenarios

### For Administrators
- **Issue Management**: Review and update issue statuses
- **User Management**: Manage user accounts and permissions
- **Content Management**: Create and manage educational content
- **Analytics Dashboard**: View platform statistics and engagement

## 🔐 Authentication

The platform uses JWT-based authentication with:
- Secure user registration and login
- Password hashing with bcrypt
- Protected routes for authenticated users
- Role-based access control (User/Admin)

## 📊 API Documentation

API documentation is available through Swagger UI when running the backend server:
- Development: `http://localhost:5000/api-docs`

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages

### Backend Deployment
The backend can be deployed to:
- Heroku
- AWS EC2
- DigitalOcean
- Railway

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in this repository
- Contact the development team

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this platform
- Special thanks to the civic engagement community for feedback and testing

---

**Civix** - Empowering citizens through technology 🏛️