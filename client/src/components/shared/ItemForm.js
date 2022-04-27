import { Link } from 'react-router-dom';
const ItemForm = ({item, handleSubmit, handleChange, cancelPath}) => {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Title</label>
            <input
            placeholder="item to input"
            defaultValue={item.name}
            name="name"
            onChange={(e) => handleChange(e)} />
            
            <input
            placeholder="4.00"
            defaultValue={item.price}
            name="price"
            onChange={(e) => handleChange(e)} />

            <input
            placeholder="fruit"
            defaultValue={item.type}
            name="type"
            onChange={(e) => handleChange(e)} />    


            <button type="submit">Submit</button>
            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>
        </form>

    )
}

export default ItemForm;