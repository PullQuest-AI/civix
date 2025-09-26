import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Link,useNavigate } from 'react-router-dom';
import MinimalBG from './MinimalBG';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle password visibility toggle
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token } = response.data;

      const decoded = jwtDecode(token);
      console.log("Logged in as:", decoded.role); 
      localStorage.setItem("token", token);
      toast.success(message || "Login successful");
      if (decoded.role === "admin") {
        window.location.href = "/admin/dashboard";
      } else {
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
      toast.error(error.response.data.error);
      } else {
      toast.error("Login failed. Please try again.");
    }
    }
  };

  // Logic to hide eye icon on blur only if not hovered
  const handlePasswordBlur = () => {
    setTimeout(() => {
      if (!isHovered) setIsIconVisible(false);
    }, 100); // Delay so icon doesn't vanish before hover is triggered
  };
  const buttonStyle = {
  padding: '12px 20px',
  borderRadius: '8px',
  border: '1px solid transparent',
  backgroundColor: '#28a745',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};


  return (
    <div className="auth-container login" style={{ position: 'relative', overflow: 'hidden' }}>
      <MinimalBG />
      <div className="auth-image login-image" style={{ zIndex: 1 }}></div>
      <div className="auth-form" style={{ zIndex: 1 }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 

            />
            <div 
              className="password-wrapper"
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                if (!document.activeElement.classList.contains('password-input')) {
                  setIsIconVisible(false);
                }
              }}
            >
              <input
                type={showPassword ? 'text' : 'password'}
                className="password-input"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value !== '') setIsIconVisible(true);
                }}
                onFocus={() => {
                  if (password !== '') setIsIconVisible(true);
                }}
                onBlur={() => {
                  setTimeout(() => {
                    if (!isHovered) setIsIconVisible(false);
                  }, 100);
                }}
                required
                style={{ paddingRight: '40px' }}
              />

              {isIconVisible && (
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
  <button
    type="submit"
    className="auth-button"
    style={buttonStyle}
  >
    Login
  </button>
  <button
    type="button"
    className="auth-button"
    style={{ ...buttonStyle, backgroundColor: '#f0f0f0', color: '#333' }}
    onClick={() => navigate('/')}
  >
    Return to Home
  </button>
</div>

        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastClassName="toast-body custom-toast-shadow"
        bodyClassName="text-sm font-medium"
      />
    </div>
  );
};

export default Login;
