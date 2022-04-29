import Nav from './Nav';
import Footer from './Footer';


const Layout = (props) => {
    return (
        <div>
            <div className='layout-div'>
            <h1>Groceries App</h1>
            </div>
            <Nav />

            {props.children}

            <Footer />
        </div>
    )
};


export default Layout;