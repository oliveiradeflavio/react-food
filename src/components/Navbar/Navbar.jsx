import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

// hook
import { useCart } from "../../context/CartContext"

// imagens 
import logo from '../../assets/logo/logo.png'

// react icons  ionicons5
import { IoCart } from "react-icons/io5";
import { IoFastFoodSharp } from "react-icons/io5";


const Navbar = () => {

    const { cartItems } = useCart(); // Obter os itens do carrinho
    const [search, setSearch] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (search.trim()) {
            navigate(`/cardapio-online?search=${search}`)
        }
    }

    return (
        <>
            <header>

                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid justify-content-center">

                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Logo" />
                        </Link>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cardapio-online">Cardápio Online</Link>
                                </li>
                                <li className="nav-item">
                                    <div className="container_search">
                                        <form onSubmit={handleSearchSubmit}>
                                            <label htmlFor="search">
                                                <input
                                                    type="search"
                                                    id="search"
                                                    className="form-control"
                                                    placeholder="Pesquisar seu lanche"
                                                    value={search}
                                                    onChange={(e) => setSearch(e.target.value)}
                                                />
                                                <div className="icon_food">
                                                    <IoFastFoodSharp />
                                                </div>
                                            </label>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link position-relative" to="/carrinho">
                                        <IoCart size={24} />
                                        {cartItems.length > 0 && (
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                                {cartItems.length}
                                                <span className="visually-hidden">itens no carrinho</span>
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header >

        </>
    )
}

export default Navbar