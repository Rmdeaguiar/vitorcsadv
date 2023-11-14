import './styles.css';
import Background from '../../assets/background.png'
import Header from '../../components/Header'
import About from '../../components/About'
import Footer from '../../components/Footer'
import ImageList from '../../components/ImageList'
import WhatsApp from '../../assets/whatsapp.png'


function Home() {

    const services = ['Planejamento de aposentadoria', 'Aposentadorias', 'Aposentadoria por invalidez', 'Auxílio-doença', 'Auxílio-acidente', 'Pensão por morte', 'Auxílio Reclusão', 'Benefício Assistencial ao idoso e pessoa com deficiência - LOAS']

    return (
        <>
            <Header />
            <div className="container-home">
                <div className="container-main">
                    <h2>Ajudo você a garantir o seu melhor benefício perante o INSS</h2>
                    <a target="_blank" rel='noreferrer' href="https://wa.me/557186919230"><img src={WhatsApp} alt='whatsapp' />Clique para falar conosco</a>
                    <span>ATUAÇÃO EM TODO O BRASIL</span>
                </div>
                <div className="container-services">
                    <div className='background-services'></div> 
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
            <Footer />
        </>

    );
}

export default Home;
