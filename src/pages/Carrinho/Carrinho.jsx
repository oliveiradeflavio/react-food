
import PaymentModal from '../../components/PaymentModal/PaymentModal';

import { useState } from 'react';
import { useCart } from '../../context/CartContext';

const Carrinho = () => {
    const { cartItems, removeFromCart, clearCart } = useCart(); // Obtém os itens do carrinho do contexto
    const [showModal, setShowModal] = useState(false);

    const handleRemoveItem = (itemName) => {
        // remover o item do carrinho, localstorage
        removeFromCart(itemName);
    }

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFinalizeOrder = (formData) => {

        setShowModal(false);

        // enviar paro whatsapp 
        let message = `Olá, gostaria de fazer o pedido: \n`;
        cartItems.forEach((item, index) => {
            message += `${index + 1} - ${item.name} - ${item.quantity} un - ${parseFloat(item.totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`;
        });
        message += `Total: ${cartItems.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}\n`;
        message += `Dados para entrega:\n`;
        message += `Nome: ${formData.nome}\n`;
        message += `Telefone: ${formData.telefone}\n`;
        message += `Endereço: ${formData.rua}, ${formData.numero} - ${formData.bairro} - ${formData.cidade} - ${formData.uf}\n`;

        if (formData.referencia !== '') {
            message += `Referência: ${formData.referencia}\n`;
        }

        message += `Pagamento: ${formData.metodoPagamento}\n`;

        window.open(`https://api.whatsapp.com/send?phone=numeroWhatsApp&text=${encodeURIComponent(message)}`, '_blank');

        // limpar o carrinho e localstorage
        clearCart();

    };

    return (

        <section className='sectionCart'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h2>Carrinho</h2>
                            {cartItems.length === 0 ? (
                                <p>Seu carrinho está vazio.</p>
                            ) : (

                                // table
                                <>
                                    <div className='table-responsive'>
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Quantidade</th>
                                                    <th>Preço Unitário</th>
                                                    <th>Preço Total</th>
                                                    <th>Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartItems.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <img src={item.img} alt={item.name} />
                                                            <br />
                                                            <span>
                                                                {item.name} - {item.description} - Observações: {item.notes}
                                                            </span>
                                                        </td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            {parseFloat(item.totalPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                                        </td>

                                                        <td>
                                                            <button className="btn btn-danger" onClick={() => handleRemoveItem(item.name)}>Remover</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        {/* <h3>Total: {cartItems.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3> */}
                                        <h3>Total: {
                                            cartItems
                                                .reduce((acc, item) => acc + parseFloat(item.totalPrice), 0)
                                                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                        }
                                        </h3>


                                    </div>
                                    <div>
                                        <button className="btn btn-danger" onClick={handleOpenModal}>Fechar Pedido</button>
                                    </div>
                                    {/* modal de pagamento */}
                                    <PaymentModal
                                        show={showModal}
                                        handleClose={handleCloseModal}
                                        handleSubmit={handleFinalizeOrder}
                                        cartItems={cartItems}
                                    />
                                </>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Carrinho;
