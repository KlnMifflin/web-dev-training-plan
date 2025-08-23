import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ListPage(props) {
    const { listId } = useParams();
    const list = props.lists.find(l => l.id === listId);

    function appendItem(formData) {
        if (formData.get("item") !== "") {
            props.setLists(prevLists => prevLists.map(
                l => l.id === listId ? {...l, items: [...l.items, 
                    {id: uuidv4(), name: formData.get("item"), done: false}
                ]} : l
            ));
        }
    }

    const listButtons = props.lists.map(l => (
        <Link to={`/${l.id}`} key={l.id} className="list-page-buttons">
            <button disabled={l.id === listId} style={l.id === listId ? {cursor: "default"} : {}} className={`list-page-button ${l.id === listId ? "active" : ""}`}>
                {l.name}
            </button>
        </Link>
    ))

    function toggleItem(id) {
        props.setLists(prevLists => prevLists.map(
            l => l.id === listId ? {...l, items: l.items.map(
                item => item.id === id ? {...item, done: !item.done} : item
        )} : l
        ));
    }

    function deleteItem(id) {
        props.setLists(prevLists => prevLists.map(
            l => l.id === listId ? {...l, items: l.items.filter(
                item => item.id !== id
        )} : l
        ));
    }

    const [showDone, setShowDone] = useState(true);

    const itemList = list.items.map(item => (
        (!item.done || item.done && showDone) ?
        <li key={item.id} className="item">
            <input type="checkbox" checked={item.done} onChange={() => toggleItem(item.id)} />
            <span style={{textDecoration: item.done ? "line-through" : "none"}} className={`item-text ${item.done ?"complete" : ""}`} onClick={() => toggleItem(item.id)}>
                {item.name}
            </span>
            <button onClick={() => deleteItem(item.id)} style={{ background: "none", border: "none" }} aria-label="Delete item" className="delete-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path
                        d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
                        stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </li>
        : undefined
    ))

    function toggleShowDone() {
        setShowDone(!showDone);
    }

    function deleteDone() {
        props.setLists(prevLists => prevLists.map(
            l => l.id === listId ? {...l, items: l.items.filter(
                item => !item.done
        )} : l
        ));
    }

    return (
        <main className="list-main">
            <section className="all-lists">
                <h1>Your Lists</h1>
                {listButtons}
            </section>

            <section className="cur-list">
                <h1>{list.name}</h1>
                <form action={appendItem} className="list-create item-create">
                    <input
                        type="text"
                        placeholder="e.g. clean bedroom"                            
                        aria-label="Add item"
                        name="item"
                    />
                    <button>Add Item</button>
                </form>
                
                <span className="handle-complete">
                    <button onClick={toggleShowDone} className="handle-complete-button">{showDone ? "Hide" : "Show"} Completed</button>
                    <button onClick={deleteDone} className="handle-complete-button">Delete Completed</button>
                </span>

                <ul className="list-items">
                    {itemList}
                </ul>
            </section>
        </main>
    )
}

