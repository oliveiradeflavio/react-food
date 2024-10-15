import { useState } from "react";
import { useLocation } from "react-router-dom";

// icones
import { IoStar, IoStarHalf } from "react-icons/io5";
import { IoFastFoodSharp } from "react-icons/io5";

// imagens
import Burguer1 from '../../assets/hamburguers/burger-1.jpg';
import Burguer2 from '../../assets/hamburguers/burger-2.jpg';
import Burguer3 from '../../assets/hamburguers/burger-3.jpg';
import Burguer4 from '../../assets/hamburguers/burger-4.jpg';
import Burguer5 from '../../assets/hamburguers/burger-5.jpg';
import Burguer6 from '../../assets/hamburguers/burger-6.jpg';
import Burguer7 from '../../assets/hamburguers/burger-7.jpg';
import Burguer8 from '../../assets/hamburguers/burger-8.jpg';

// components
import ModalRequestFood from '../../components/ModalRequestFood/ModalRequestFood';

// context
import { useCart } from "../../context/CartContext"

const CardapioOnline = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search') || ''; // Obter o valor da query string


    const [selectedFood, setSelectedFood] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToCart } = useCart();


    const handleModal = (food) => {
        setSelectedFood(food);
        setIsModalOpen(true);

    }

    const closeModal = () => {
        setIsModalOpen(false);
    }


    const burgers = [
        { img: Burguer1, name: "X-Salada", description: "Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.", price: "R$ 37,50" },
        { img: Burguer2, name: "X-Tudo", description: "Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.", price: "R$ 55,00" },
        { img: Burguer3, name: "X-Bacon", description: "Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.", price: "R$ 48,90" },
        { img: Burguer4, name: "X-Egg", description: "Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.", price: "R$ 41,00" },
        { img: Burguer5, name: "X-Frango", description: "Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.", price: "R$ 38,99" },
        { img: Burguer6, name: "X-Gigante", description: "Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.", price: "R$ 33,90" },
        { img: Burguer7, name: "X-Frango Especial", description: "Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.", price: "R$ 35,00" },
        { img: Burguer8, name: "X-Especial Turbinado", description: "Hamburguer com cebola caramelizada, cheddar, bacon, alface, tomate e maionese.", price: "R$ 45,00" },
    ];

    // filtrar os hamburguers com base na consulta de pesquisa
    const filteredBurgers = searchQuery
        ? burgers.filter(burger => burger.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : burgers; // se não houver consulta de pesquisa, exibir todos os hamburguers

    const noResults = filteredBurgers.length === 0 && searchQuery !== ''; // Verificar se não há resultados

    return (
        <>

            <section className="section3 container_menu_online">
                <div className="container">
                    <div className="row">
                        {noResults ? ( // Se não houver resultados, mostrar mensagem
                            <div className="col-12 text-center no-results">
                                <h4>{`Nenhum hambúrguer encontrado para ${searchQuery}.`}</h4>
                            </div>
                        ) : (
                            filteredBurgers.map((burger, index) => (
                                <div key={index} className="col-md-3">
                                    <div className="card">
                                        <img src={burger.img} className="card-img-top" alt={burger.name} />
                                        <div className="card-body">
                                            <div className="stars">
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStar />
                                                <IoStarHalf />
                                            </div>
                                            <h5 className="card-title">{burger.name}</h5>
                                            <p className="card-text">{burger.description}</p>
                                            <p className="price"><strong>{burger.price}</strong></p>
                                            <button className="btn btn-secondary" onClick={() => handleModal(burger)}>
                                                Pedir aqui <IoFastFoodSharp />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>


            {isModalOpen && <ModalRequestFood
                food={selectedFood}
                closeModal={closeModal}
                addToCart={addToCart}
            />
            }



        </>
    )
}

export default CardapioOnline