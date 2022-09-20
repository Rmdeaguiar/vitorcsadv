import './styles.css';
import Background from '../../assets/background.png'
import Header from '../../components/Header'
import About from '../../components/About'
import ImageList from '../../components/ImageList'
import WhatsApp from '../../assets/whatsapp.png'

function Home() {
    const services = ['Planejamento de aposentadoria', 'Aposentadorias', 'Aposentadoria por invalidez', 'Auxílio-doença', 'Auxílio-acidente', 'Pensão por morte', 'Auxílio Reclusão', 'Benefício Assistencial ao idoso e pessoa com deficiência - LOAS']
    return (
        <>
            <Header />
            <div className="container-home">
                <div className="container-main">
                    <h2>Ajudo a garantir o seu melhor benefício perante o INSS</h2>
                    <a target="_blank" href="https://wa.me/557186919230"><img src={WhatsApp} />WhatsApp</a>
                </div>
                <div className="container-services">
                    <img src={Background} alt="background" />
                    <div className='border-container'></div>
                    {services.map((service) => (
                        < div className="services" key={service} >
                            <h4>{service}</h4>
                        </div>
                    ))}
                </div>
                <div id="about" className='align-center'>
                    <About />
                </div>
                <ImageList />
            </div>
        </>

    );
}

export default Home;
