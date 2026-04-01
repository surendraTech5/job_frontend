/* eslint-disable react/prop-types */
import styled from "styled-components";
import Logo from "../Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import axios from "axios";
import Swal from "sweetalert2";

const Navbar = ({ navbarRef }) => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/logout`,
        {},
        { withCredentials: true } // ✅ correct config position
      );

      setUser(null);

      Swal.fire({
        title: "Logged Out Successfully",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/", { replace: true }); // ✅ prevent back
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper ref={navbarRef}>
      <div className="container">
        <Logo />

        <div className="nav-links">
          {/* ✅ NEW HOME LINK */}
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>

          <NavLink className="nav-item" to="/all-jobs">
            Jobs
          </NavLink>

          <NavLink className="nav-item hidden sm:block" to="/dashboard">
            Dashboard
          </NavLink>

          {user ? (
            <button onClick={handleLogout} className="login-btn">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;

  /* White + soft gradient background */
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #ffffff 60%,
    #f3f8ff 100%
  );

  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  display: flex;
  justify-content: center;
  padding: 1rem 0;

  .container {
    width: 100%;
    max-width: 1200px;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  .nav-item {
    position: relative;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    transition: all 0.3s ease;
  }

  /* Animated underline effect */
  .nav-item::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(to right, #247bf7, #1d4ed8);
    transition: 0.3s ease;
  }

  .nav-item:hover {
    color: #247bf7;
  }

  .nav-item:hover::after {
    width: 100%;
  }

  .nav-item.active {
    color: #247bf7;
  }

  .nav-item.active::after {
    width: 100%;
  }

  /* Premium Login Button */
  .login-btn {
    padding: 8px 20px;
    border-radius: 8px;
    font-weight: 500;
    color: white;
    background: linear-gradient(to right, #247bf7, #1d4ed8);
    transition: all 0.3s ease;
  }

  .login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(36, 123, 247, 0.3);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    .nav-links {
      gap: 18px;
    }
  }
`;

export default Navbar;