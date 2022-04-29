import { Navigate, NavLink } from 'react-router-dom'; 

const Nav = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/grocerylist'>Grocery list</NavLink>
            <NavLink to='/create-grocerylist'>Create Item</NavLink>
        </nav>
    )
}

export default Nav;