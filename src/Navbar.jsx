 
import {
    Link,
  } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className='nav'>
                <Link to="/" className="nav-link">ToDos</Link>
                <Link to="/user" className="nav-link">User</Link>
                <Link to="/post" className="nav-link">Post</Link>
                

                </div>
        </>
    )
}

export default Navbar