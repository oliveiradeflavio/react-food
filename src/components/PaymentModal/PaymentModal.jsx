import { useState } from 'react'
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';

const PaymentModal = ({ show, handleClose, handleSubmit, cartItems }) => {
    const [formData, setFormData] = useState({
        telefone: '',
        nome: '',
        rua: '',
        bairro: '',
        cidade: '',
        uf: '',
        numero: '',
        referencia: '',
        metodoPagamento: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {

        // verificar se os campos estão preenchidos menos o de referência (opcional)
        for (const key in formData) {
            if (formData[key] === '' && key !== 'referencia') {
                alert('Preencha todos os campos');
                return;
            }
        }

        handleSubmit(formData, cartItems);
    };

    const cityAndState = [
        { state: 'AC' },
        { state: 'AL' },
        { state: 'AP' },
        { state: 'AM' },
        { state: 'BA' },
        { state: 'CE' },
        { state: 'DF' },
        { state: 'ES' },
        { state: 'GO' },
        { state: 'MA' },
        { state: 'MT' },
        { state: 'MS' },
        { state: 'MG' },
        { state: 'PA' },
        { state: 'PB' },
        { state: 'PR' },
        { state: 'PE' },
        { state: 'PI' },
        { state: 'RJ' },
        { state: 'RN' },
        { state: 'RS' },
        { state: 'RO' },
        { state: 'RR' },
        { state: 'SC' },
        { state: 'SP' },
        { state: 'SE' },
        { state: 'TO' },
    ]

    return (
        <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Finalizar Pedido</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className='form-payment'>
                            <div className="form-group form-floating">

                                <IMaskInput
                                    mask="(00) 00000-0000"
                                    type='tel'
                                    className="form-control"
                                    id="telefone"
                                    name="telefone"
                                    placeholder="Digite o telefone de contato"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="telefone">Celular (zap)</label>
                            </div>
                            <div className="form-group form-floating">

                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    name="nome"
                                    placeholder="Digite o seu nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="rua">Digite seu nome</label>
                            </div>
                            <div className="form-group form-floating">

                                <input
                                    type="text"
                                    className="form-control"
                                    id="rua"
                                    name="rua"
                                    placeholder="Digite a rua"
                                    value={formData.rua}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="rua">Digite seu endereço</label>
                            </div>
                            <div className="form-group form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="bairro"
                                    name="bairro"
                                    placeholder="Digite o bairro"
                                    value={formData.bairro}
                                    onChange={handleChange}
                                />
                                <label htmlFor="bairro">Bairro</label>
                            </div>
                            <div className="row ">
                                <div className='col-md-6'>
                                    <div className="form-group  form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="cidade"
                                            name="cidade"
                                            placeholder="Digite a cidade"
                                            value={formData.cidade}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="cidade">Cidade</label>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group form-floating">
                                        <select
                                            name="uf"
                                            id="uf"
                                            className='form-select'
                                            value={formData.uf}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Estado</option>
                                            {cityAndState.map((item, index) => (
                                                <option key={index} value={item.state}>{item.state}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div className="row ">
                                <div className='col-md-6'>
                                    <div className="form-group form-floating ">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="numero"
                                            name="numero"
                                            placeholder="Digite o número"
                                            value={formData.numero}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor="numero">Número</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="referencia"
                                            name="referencia"
                                            placeholder="Digite uma referência"
                                            value={formData.referencia}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="referencia">Referência</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="metodoPagamento">Método de Pagamento</label>
                                <select
                                    className="form-select"
                                    id="metodoPagamento"
                                    name="metodoPagamento"
                                    value={formData.metodoPagamento}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecione...</option>
                                    <option value="crédito/débito">Cartão de Crédito/Débito</option>
                                    <option value="pix">PIX</option>
                                    <option value="dinheiro">Dinheiro</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Fechar</button>
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>Finalizar Pedido</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
PaymentModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
};

export default PaymentModal;

