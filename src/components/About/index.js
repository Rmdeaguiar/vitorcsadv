import './styles.css';
import Foto from '../../assets/foto.jpeg'

function About() {
    return (
        <div className="container-about">
            <div className="about-content">
                <h2>Quem é Vitor Silveira?</h2>
                <div className="line"></div>
                <p>Advogado pós-graduado em Direito e Processo do Trabalho, tendo realizado diversos voltados ao Direito Previdenciário. Com mais de cinco anos de experiência na gestão de demandas contenciosas e consultivas, sempre atuando com o devido zelo, visando a melhor solução para os seus clientes, mesclando qualidade técnica com ferramentas tecnológicas. Uma prestação de serviço pautada no profissionalismo e confiança, realizando atendimento personalizado e humanizado aos seus clientes.</p>
            </div>
            <div className="about-image">
                <img src={Foto} />
            </div>
        </div>
    );
}

export default About;
