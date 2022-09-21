import './styles.css';
import Card from '../../assets/cartao.png'
import Email from '../../assets/email.png'
import Phone from '../../assets/phone.png'

function Header() {
    return (
        <div id="home" className="container-header">
            <div className="main-left">
                <img src={Card} alt="cartao" />
                <h3>ADVOGADO | TRABALHISTA | PREVIDENCIÁRIO</h3>
            </div>
            <div className="main-right">
                <div className="right-top">
                    <h4><img src={Phone} alt='telefone' />{'Ligue agora: (71)98691-9230'}</h4>
                    <h4><img src={Email} alt='email' />E-mail: vitor@vitorsilveiraadv.com.br</h4>
                </div>
                <div className="right-down">
                    <a href='#home'>HOME |</a>
                    <a href='#about'>SOBRE</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
