import { Link, Outlet } from "react-router-dom";
import "../css/dashboard.css";
import user from "../assets/image.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [username, setUsername] = useState("");
    const [useremail, setUserEmail] = useState("");
    const [showUserInfo, setShowUserInfo] = useState(false); // New state to toggle visibility of user info
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("username")) {
            navigate("/home");
        } else {
            setUsername(localStorage.getItem("username"));
            setUserEmail(localStorage.getItem("useremail"));
        }
    }, [navigate]);

    const logout = () => {
        localStorage.clear();
        navigate("/home");
    };

    const handleUserIconClick = () => {
        setShowUserInfo(prevState => !prevState);
    };

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2>  🧑‍⚕️Doctor🩺</h2>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/dashboard" className="active">
                            <i className="fas fa-home"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/insert">
                            <i className="fas fa-plus"></i> Insert
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/display">
                            <i className="fas fa-table"></i> Display
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/search">
                            <i className="fas fa-search"></i> Search
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/update">
                            <i className="fas fa-edit"></i> Update
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/contact">
                            <i className="fas fa-address-book"></i> Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="logout" onClick={logout}>
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <header>


                    <div className="search-bar">
                        <input type="text" placeholder="Search here..." />
                    </div>
                    <div className="user-info" onClick={handleUserIconClick}>
                        <img src={user} alt="User Icon" className="user-icon" />
                    </div>
                    {/* Display user info when showUserInfo is true */}
                    {showUserInfo && (
                        <div style={{ height: "100px", width: "200px", marginRight: "50px", marginTop: "20px" }} className="user-details ">
                            <p>Welcome: {username}</p>
                            <p>Email: {useremail}</p>
                        </div>
                    )}
                </header>
                <main>
                    <h1>Welcome to the Doctor Appointemenet</h1>

                    {/* <img className="suman" style={{ height: "80vh", width: "100%" }} src={image} alt="" /> */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
