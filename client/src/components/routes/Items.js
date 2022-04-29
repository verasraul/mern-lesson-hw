import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';


function Items() {
    const [items, setItems] = useState([])

    // load the object once
    const fetchData = async () => {
        // since we are dealing with a objects we need a try/catch block to troubleshoot.
        try {
            const response = await axios('http://localhost:3000/api/grocerylist')
            setItems(response.data.items)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const prices = items.map((price) => price.price)
    const totalPrice = prices.reduce((prevValue, cerrValue) => Math.floor(prevValue + cerrValue), 0)

    const itemsData = items.map((item) => {
        return <li key={item._id}>
            <NavLink to={`/grocerylist/${item._id}`}>{item.name}</NavLink>
            </li>
    })

    return (
        <Layout>
            
        <div>
            <div className='grocery-list'>
            <h4> Grocery List</h4>
            </div>

            <ul>
                {itemsData}
            </ul>

            <div className='total-prices'>
            <p><b>Totol Amount</b>: ${totalPrice} </p>
            </div>
        </div>

        </Layout>
    )
}

export default Items;