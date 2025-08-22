import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import ListPage from "./components/ListPage";

export default function App() {

    const [lists, setLists] = useState([
        {id: 1+"-listy", name: "listy", items: ["wha"]},
        {id: 2+"pepper", name: "pepper", items: ["huh", "nuh"]},
        {id: 3+"water", name: "water", items: []}
    ])

    return (
        <div>
            <Routes>
                {/* Show all lists */}
                <Route path="/" element={<Home lists={lists} setLists={setLists} />} />

                {/* Show a single list by id */}
                <Route path="/:listId" element={<ListPage lists={lists} setLists={setLists} />}/>

            </Routes>
        </div>
    );
}