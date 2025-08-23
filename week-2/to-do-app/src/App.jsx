import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import ListPage from "./components/ListPage";
import Header from "./components/Header";

export default function App() {

    const [lists, setLists] = useState([]);

    return (
        <div>
            <Header />
            <Routes>
                {/* Show all lists */}
                <Route path="/" element={<Home lists={lists} setLists={setLists} />} />

                {/* Show a single list by id */}
                <Route path="/:listId" element={<ListPage lists={lists} setLists={setLists} />}/>

            </Routes>
        </div>
    );
}