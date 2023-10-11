import React from 'react'
import { Link } from "react-router-dom"
import { ShoppingCart } from 'phosphor-react'
import {MdOutlinePermIdentity} from 'react-icons/md'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">
                    Shop
    </Link>
                <Link to="/cart">

    <ShoppingCart size={32} />

                </Link>

                <Link to ="/Login">

                <MdOutlinePermIdentity size={32} color='black' />

                </Link>

                

                 


            </div>

        </div>
    )
}

export default Navbar
