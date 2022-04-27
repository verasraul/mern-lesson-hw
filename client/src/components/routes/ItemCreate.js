import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Layout from '../shared/Layout';
import ItemForm from '../shared/ItemForm';

function ItemCreate() {
    const navigate = useNavigate();
    const [item, setItem] = useState({
        name: '',
        price: 0,
        type: ''
    })
    const [createdItem, setCreatedItem] = useState(null)

    const handleChange = (event) => {
      
      const updatedField = { [event.target.name] : event.target.value }
      
      const editedItem = Object.assign(item, updatedField)
      
      setItem(editedItem)
    }
    
    const handleSubmit = (event) => {
      event.preventDefault()
  
    
      axios({
        url: `http://localhost:3000/api/grocerylist`,
        method: 'POST',
        data: item
      }).then(res => setCreatedItem(res.data.item)).catch(console.error)
    }

    useEffect(() => {
        if (createdItem) {
            return navigate(`/grocerylist`)
        }
    }, [createdItem, navigate])


    return (
        <Layout>
            <ItemForm 
                item={item}
                handleChange={(e) => {handleChange(e)}}
                handleSubmit={(e) => {handleSubmit(e)}}
                cancelPath='/'
            />
        </Layout>
    )
}

export default ItemCreate;