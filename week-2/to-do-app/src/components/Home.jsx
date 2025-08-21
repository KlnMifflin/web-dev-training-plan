import { Link } from "react-router-dom"
import Header from "./Header"

export default function Home() {
    return (
        <>
            <Header />
            <h1>Home Page!</h1>
            <p>This is the home page.</p>
            <Link to="/list">
                <button variant="outlined">
                    List
                </button>
            </Link>
        </>
    )
}