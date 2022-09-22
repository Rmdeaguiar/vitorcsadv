import './styles.css';
import Email from '../../assets/email.png'
import Phone from '../../assets/phone.png'
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    return (
        <div id="home" className="container-footer">
            <div className="left-footer">
                <div className='social-media'>
                    <h4><img src={Phone} alt='telefone' />{'Ligue agora: (71)98691-9230'}</h4>
                    <h4><img src={Email} alt='email' />E-mail: contato@vitorsilveiraadv.com.br</h4>
                </div>
                <span>Av. Tancredo Neves, 2539, Edf. CEO Salvador Shopping, Torre Londres, sala 902</span>
            </div>
            <div className="right-footer">
                <h4 onClick={() => navigate('/')}>HOME |</h4>
                <h4 onClick={() => navigate('/artigos')}>ARTIGOS</h4>
            </div>
        </div>
    );
}

export default Header;
