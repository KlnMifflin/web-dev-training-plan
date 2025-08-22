import { useParams } from "react-router-dom";
import Header from "./Header";

export default function ListPage(props) {
    const { listId } = useParams();
    const list = props.lists.find(l => l.id === listId);

    function appendItem(formData) {
        props.setLists(prevLists => prevLists.map(
            l => l.id === listId ? {...l, items: [...l.items, formData.get("item")]} : l
        ));
    }

    const itemButtons = list.items.map((item, i) => (
                            <button variant="outlined" key={i}>
                                {item}
                            </button>
                        ))

    return (
        <>
            <Header />
            <main className="list-main">
                <section className="all-lists">
                    <h1>All Lists Here!</h1>
                </section>
                <section className="cur-list">
                    <h1>{list.name}</h1>
                    <br />
                    <form action={appendItem}>
                        <input
                            type="text"
                            placeholder="e.g. clean bedroom"
                            aria-label="Add item"
                            name="item"
                        />
                        <button>Add Item</button>
                    </form>
                    <div className="list-items">
                        {itemButtons}
                    </div>
                </section>
            </main>
        </>
    )
}

