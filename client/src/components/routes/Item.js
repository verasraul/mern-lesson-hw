import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';


function Item() {
    const [item, setItem] = useState([])
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await axios(`http://localhost:3000/api/grocerylist/${id}`)
            const result = response.data.item
            setItem(result)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (!item) {
            return <p>Loading...</p>
        }
    }, [item])

    const destroy = () => {
        axios({
            url: `http://localhost:3000/api/grocerylist/${id}`,
            method: 'DELETE'
        }).then(() => setDeleted(true)).catch(console.error)
    }

    useEffect(() => {
        if (deleted) {
            return navigate('/')
        }
    }, [deleted, navigate])

    return (
        <Layout>
            <h4> { item.name } </h4>
            <p>Price: {item.price}</p>
            <p>Type: {item.type}</p>
            
            <button onClick={() => destroy()}> Delete Item </button>

            <NavLink to={`/grocerylist/${id}/edit`}>
                <button>Edit</button>
            </NavLink>

            <NavLink to='/grocerylist'> Back to your grocery list</NavLink>

        </Layout>
    )
}

export default Item;