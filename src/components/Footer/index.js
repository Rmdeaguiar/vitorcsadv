import './styles.css';
import Email from '../../assets/email.png'
import Phone from '../../assets/phone.png'
import { useNavigate } from 'react-router-dom';

function Footer({ setArticle }) {

    const navigate = useNavigate();

    function handleArticlesFooter() {
        navigate('/artigos')
        setArticle({ id: 0, title: '', show: false })
    }

    return (
        <div id="home" className="container-footer">
            <div className="left-footer">
                <div className='social-media'>
                    <h4><img src={Phone} alt='telefone' />{'(71) 9 8691-9230'}</h4>
                    <h4><img src={Email} alt='email' />contato@vitorsilveiraadv.com.br</h4>
                </div>
                <span>Av. Tancredo Neves, 2539, Edf. CEO Salvador Shopping, Torre Londres, sala 902</span>
            </div>
            <div className="right-footer">
                <h4 onClick={() => navigate('/')}>HOME |</h4>
                <h4 onClick={() => handleArticlesFooter()}>ARTIGOS</h4>
            </div>
        </div>
    );
}

export default Footer;
