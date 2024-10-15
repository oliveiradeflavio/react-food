
import { useState } from "react"
import PropTypes from 'prop-types';
import { useCart } from "../../context/CartContext"
import { useNavigate } from "react-router-dom";

const ModalRequestFood = ({ food, closeModal }) => {
    const [quantity, setQuantity] = useState(1);
    const [notes, setNotes] = useState('');
    let totalPrice = 0;
    const { addToCart } = useCart();
    const navigate = useNavigate();

    // se não tiver comida, retorna null
    if (!food) return null;

    const handleAddToCart = () => {

        // criar um objeto com os dados da comida
        const item = {
            ...food,
            quantity,
            notes,
            totalPrice: totalPrice.replace('R$', '').trim().replace(',', '.')

        }

        addToCart(item);
        closeModal();
    }

    const handleSuccessAddToCart = () => {
        handleAddToCart();
        navigate('/carrinho');
    }

    return (
        <>
            <div className="modal show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{food.name}</h5>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <img src={food.img} alt={food.name} className="img-fluid" />
                            <p>{food.description}</p>
                            <p><strong>{food.price}</strong></p>

                            <hr />
                            <div className="quantity">
                                <label htmlFor="quantity">Quantidade</label>
                                <input
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    min="1"
                                    max="100"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)} />

                                <span>
                                    x {food.price} = {totalPrice =
                                        (quantity * parseFloat(food.price.replace('R$', '').trim().replace(',', '.')))
                                            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                    }
                                </span>


                            </div>

                            <hr />

                            <div className="obs">
                                <label htmlFor="notes">Observações</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows="2"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handleAddToCart}
                            >
                                Adicionar ao carrinho
                            </button>
                            <button type="button"
                                className="btn btn-primary"
                                onClick={handleSuccessAddToCart}
                            >Confirmar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
ModalRequestFood.propTypes = {
    food: PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ModalRequestFood
