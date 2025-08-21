import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ListPage from "./components/ListPage";

export default function App() {
    return (
        <div>
            {/*
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/list/">List</Link>
            </nav>
            */}
            <Routes>
                {/* Show all lists */}
                <Route path="/" element={<Home />} />

                {/* Show a single list by id */}
                <Route path="/list/" element={<ListPage />} />
            </Routes>
        </div>
    );
}