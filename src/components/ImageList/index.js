import './styles.css';
import Coworking1 from '../../assets/coworking1.jpg'
import Coworking2 from '../../assets/coworking2.jpg'
import Coworking4 from '../../assets/coworking4.jpg'
import Coworking5 from '../../assets/coworking5.jpg'
import Coworking6 from '../../assets/coworking6.jpg'
import Coworking7 from '../../assets/coworking7.jpg'

const images = [Coworking1, Coworking2, Coworking4, Coworking5, Coworking6, Coworking7];


function ImageList() {
    return (
        <div className="container-office">
            <div className="container-images">
                {images.map((image) => (
                    <img src={image} alt='coworking' />
                ))}
            </div>
            <div className='about-office'>
                <h3>Sobre o escritório</h3>
                <p>Escritório localizado na <b>Av. Tancredo Neves, 2539, Edf. CEO Salvador Shopping, Torre Londres, sala 902</b>, novo centro comercial da Salvador, com uma estrutura necessária para um melhor atendimento aos clientes. Vamos tomar um café?! Marque sua visita!</p>
            </div>
        </div>
    );
}

export default ImageList;
