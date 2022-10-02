import "./Navbar.css"
import ecuadorLogo from "/assets/ecuador-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={ecuadorLogo} alt="Ecuador Icon" className="logo" />
            <h1 className="title">Ecuador Travel Journal</h1>
        </nav>
    );
} 