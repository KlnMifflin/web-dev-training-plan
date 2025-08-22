import { Link } from "react-router-dom"
import todoLogo from "../assets/todo-logo-blue.png"

export default function Header() {
    return (
        <Link to="/" className="link">
            <header>
                <img src={todoLogo} alt="calendar logo" />
                <h1>To-Day</h1>
            </header>
        </Link>
    )
}