import React from 'react'

const Navbar = () => {
    return (
        <div>


            <nav className="navbar bg-dark">
                <form className="container-fluid justify-content-start">
                    <a className="navbar-brand text-white" href="#">Pizzería Mamma Mía</a>
                    <button className="btn btn-sm btn btn-outline-light me-2" type="button"><img src="src/assets/img/pizza.png" alt="Home" width="20" height="20" className="me-1" />Home</button>
                    <button className="btn btn-sm btn btn-outline-light me-2" type="button"><img src="src/assets/img/logout.png" alt="Home" width="14" height="20" className="me-1" />Login</button>
                    <button className="btn btn-sm btn btn-outline-light me-2" type="button"><img src="src/assets/img/register.png" alt="Home" width="20" height="20" className="me-1" />Register</button>
                    <button className="btn btn-sm btn btn-outline-light ms-auto text-primary" type="button"><img src="src/assets/img/carro.png" alt="Home" width="20" height="20" className="me-1" />Total: $25.000</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar