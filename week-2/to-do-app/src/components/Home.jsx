import { Link } from "react-router-dom"
import { useState } from "react";
import Header from "./Header"

export default function Home(props) {
    function appendList(formData) {
        props.setLists(prevLists => [...prevLists, {id: (prevLists.length + 1)+'-'+formData.get("newList"), name: formData.get("newList"), items: []}]);
    }

    const listButtons = props.lists.map(list => (
        <Link to={`/${list.id}`} key={list.id}>
            <button variant="outlined">
                {list.name}
            </button>
            <br />
        </Link>
    ))

    return (
        <>
            <Header />
            <main className="home-main">
                <h1>Home Page!</h1>
                <p>This is the home page.</p>
                <form action={appendList}>
                    <input
                        type="text"                            
                        placeholder="e.g. clean bedroom"
                        aria-label="Create List"
                        name="newList"
                    />
                    <button>Create List</button>
                </form>
                {listButtons}
            </main>
        </>
    )
}