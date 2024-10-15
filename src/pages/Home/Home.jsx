import { Link } from "react-router-dom"

// icons estrelas
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

// imagens
import Burger from '../../assets/hamburguers/burguer_promo.png'
import Price from "../../assets/hamburguers/price_background.png"
import BestOfHamburguer from "../../assets/hamburguers/best_of_hamburguer.jpg"

// imanges burguers menu
import Burguer1 from "../../assets/hamburguers/burger-1.jpg"
import Burguer2 from "../../assets/hamburguers/burger-2.jpg"
import Burguer3 from "../../assets/hamburguers/burger-3.jpg"
import Burguer4 from "../../assets/hamburguers/burger-4.jpg"
import Burguer5 from "../../assets/hamburguers/burger-5.jpg"
import Burguer6 from "../../assets/hamburguers/burger-6.jpg"
import Burguer7 from "../../assets/hamburguers/burger-7.jpg"
import Burguer8 from "../../assets/hamburguers/burger-8.jpg"



const Home = () => {
    return (
        <>
            <section className="section1">
                <div className="container">
                    <div className="row">

                        <div className="col-md-8">
                            <div className="promo">
                                <div className='burguer_img'>
                                    <img src={Burger} alt={Burger} />
                                </div>
                                <div className='burguer_price'>
                                    <div>
                                        <img src={Price} alt={Price} />
                                        <div>
                                            <h4>Somente</h4>
                                            <h2>R$ 30,00</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className='burguer_text'>
                                <h1>Peça já o seu</h1>
                                <p>Novo hamburguer, com onion ring, cheddar, tomate, alface...</p>
                                <Link to="/cardapio-online" className='btn btn-warning'>Pedir agora</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section2">
                <div className="container">
                    <div className="row">
                        <h2>
                            O melhor hamburguer da cidade
                        </h2>

                        <p>
                            Se você está em busca do hambúrguer perfeito, acabou de encontrar! Feito com ingredientes frescos, selecionados e preparados com todo o cuidado, nossos hambúrgueres são conhecidos pelo sabor irresistível e suculência inigualável.
                        </p>

                        <div>
                            <Link to="/cardapio-online" className="btn btn-danger btn-lg">
                                Conheça nosso cardápio completo
                            </Link>

                            <img src={BestOfHamburguer} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="container">
                    <div className="row">
                        <h2>Confira nossos destaques</h2>
                    </div>

                    <div className="container_menu">
                        <div className="row">
                            {/* Cards com os lanches */}
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Burguer1} className="card-img-top" alt={Burguer1} />
                                    <div className="card-body">
                                        <div className="stars">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h5 className="card-title">Hamburuger B1</h5>
                                        <p className="card-text">
                                            Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.
                                        </p>
                                        <p className="price">
                                            <strong>R$ 37,50</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Burguer2} className="card-img-top" alt={Burguer2} />
                                    <div className="card-body">
                                        <div className="stars">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h5 className="card-title">Hamburuger B2</h5>
                                        <p className="card-text">
                                            Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.
                                        </p>
                                        <p className="price">
                                            <strong>R$ 55,00</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Burguer3} className="card-img-top" alt={Burguer3} />
                                    <div className="card-body">
                                        <div className="stars">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h5 className="card-title">Hamburuger B3</h5>
                                        <p className="card-text">
                                            Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.
                                        </p>
                                        <p className="price">
                                            <strong>R$ 48,90</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Burguer4} className="card-img-top" alt={Burguer4} />
                                    <div className="card-body">
                                        <div className="stars">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h5 className="card-title">Hamburuger B4</h5>
                                        <p className="card-text">
                                            Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.
                                        </p>
                                        <p className="price">
                                            <strong>R$ 41,00</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Continuando com os próximos cards */}
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Burguer5} className="card-img-top" alt={Burguer5} />
                                    <div className="card-body">
                                        <div className="stars">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h5 className="card-title">Hamburuger B5</h5>
                                        <p className="card-text">
                                            Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.
                                        </p>
                                        <p className="price">
                                            <strong>R$ 38,99</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Burguer6} className="card-img-top" alt={Burguer6} />
                                    <div className="card-body">
                                        <div className="stars">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h5 className="card-title">Hamburuger B6</h5>
                                        <p className="card-text">
                                            Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.
                                        </p>
                                        <p className="price">
                                            <strong>R$ 33,90</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Burguer7} className="card-img-top" alt={Burguer7} />
                                    <div className="card-body">
                                        <div className="stars">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h5 className="card-title">Hamburuger B7</h5>
                                        <p className="card-text">
                                            Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.
                                        </p>
                                        <p className="price">
                                            <strong>R$ 35,00</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Burguer8} className="card-img-top" alt={Burguer7} />
                                    <div className="card-body">
                                        <div className="stars">
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStar />
                                            <IoStarHalf />
                                        </div>
                                        <h5 className="card-title">Hamburuger B8</h5>
                                        <p className="card-text">
                                            Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.
                                        </p>
                                        <p className="price">
                                            <strong>R$ 45,00</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link to="/cardapio-online" className="btn btn-danger btn-lg mt-4">
                                    Conheça nosso cardápio completo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Home