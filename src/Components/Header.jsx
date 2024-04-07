import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-5 items-center justify-center">
            <Link to="/">Home</Link>
            <Link to="/LogIn">LogIn</Link>
        </div>
    );
};

export default Header;