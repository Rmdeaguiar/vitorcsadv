import './styles.css';
import Card from '../../assets/cartao.png'
import Email from '../../assets/email.png'
import Phone from '../../assets/phone.png'
import { useNavigate } from 'react-router-dom';


function Header({ setArticle }) {
    const navigate = useNavigate();

    function handleArticlesHeader() {
        navigate('/artigos')
        setArticle({ id: 0, title: '', show: false })
    }

    return (
        <div className="container-header">
            <div className="main-left">
                <img src={Card} alt="cartao" />
                <h3>ADVOGADO | TRABALHISTA | PREVIDENCIÁRIO</h3>
            </div>
            <div className="main-right">
                <div className="right-top">
                    <div className='social-media'>
                        <h4><img src={Phone} alt='telefone' />{'(71) 9 8691-9230'}</h4>
                        <h4><img src={Email} alt='email' />contato@vitorsilveiraadv.com.br</h4>
                    </div>
                    <h4 className='address'>Av. Tancredo Neves, 2539, Edf. CEO Salvador Shopping, Torre Londres, sala 902</h4>
                </div>
                <div className="right-down">
                    <h4 onClick={() => navigate('/')}>HOME |</h4>
                    <h4 onClick={() => handleArticlesHeader()}>ARTIGOS</h4>
                </div>
            </div>
        </div>
    );
}

export default Header;
