import './styles.css';

function Content({ article, setArticle }) {

    return (
        <div className="container-content">
            <div className='content-top-area'>
                <div></div>
                <h1>{article.title}</h1>
                <button onClick={() => setArticle(false)}>Voltar para Artigos</button>
            </div>
            {article.id === 1 && <>
                <p>Com a reforma da previdência foram criadas diversas regras para a concessão de aposentadorias. Além da nova modalidade, denominada aposentadoria programada, que substituiu as antigas aposentadorias por idade e por tempo de contribuição, foram criadas cinco regras de transição, para os segurados que já estavam contribuindo para a previdência social ao momento do inicio da vigência da reforma.</p>
                <p>Como cada regra tem a sua particularidade, o segurado vai compor os requisitos em diferentes momentos, o que vai impactar, sobretudo, no valor da aposentadoria e na data de inicio do seu pagamento. Aí entra a importância de realização de um <b>planejamento previdenciário, para se alcançar a concessão da melhor aposentadoria.</b></p>
                <p>Em suma, o <b>planejamento previdenciário</b> é feito através da análise de todo histórico previdenciário do segurado, sendo realizadas simulações futuras, com intuito de prever e viabilizar a aposentadoria mais vantajosa, de acordo com os interesses pessoais do segurado.</p>
                <p>Através do planejamento previdenciário o segurado poderá ter noção de quando, e o que precisará fazer para conseguir alcançar a regra de aposentadoria que esteja de acordo com os seus objetivos de vida.</p>
                <p>Pode ocorrer na prática que uma aposentadoria com renda inicial menor seja mais vantajosa financeiramente que outra regra com valor inicial maior, levando em consideração o tempo e o investimento para alcançar a regra mais distante. Nesse caso, o planejamento previdenciário dará a resposta para essa questão.</p>
                <p>O planejamento previdenciário é feito através avaliação das características pessoais do segurado, de acordo com o regime previdenciário no qual o mesmo está vinculado, além da análise da documentação referente às contribuições ao INSS realizadas durante a vida do segurado.</p>
                <p>Dessa forma, serão analisados os vínculos de trabalho (emprego e prestação de serviço); datas de início e término desses vínculos, para fins de cálculo de carência e tempo de contribuição; as remunerações auferidas durante os vínculos; as formas que foram feitas as contribuições; a existência de erros ou apontamentos no CNIS; a realização de atividades especiais; e etc.</p>
                <p>Um planejamento previdenciário bem feito vai fazer com que o segurado possa ter um aumento no valor da sua aposentadoria, levando em consideração o investimento que será feito para alcançar a aposentadoria desejada, além do tempo de contribuição faltante e o valor do retorno, de acordo com a expectativa de vida do mesmo.</p>
                <p>O planejamento previdenciário é materializado com a apresentação de um relatório ao segurado, demonstrando as possibilidades de aposentadoria para o seu caso, o que seria necessário para alcançá-las, e quanto tempo de contribuição será necessário para alcançar a regra mais vantajosa. O retorno financeiro geralmente é maior que o valor investido na elaboração de um planejamento previdenciário.</p>
                <p><b>Trata-se de um investimento feito pelo segurado para garantir uma maior tranqüilidade na sua aposentadoria, mantendo a qualidade de vida.</b></p>
            </>}
            {article.id === 2 && <>
                <p>Com a edição da <b>EC 103/2019</b>, denominada de Reforma previdenciária, as regras para a aposentadoria foram modificadas. A Aposentadoria Programada tomou o lugar das antigas aposentadorias por idade e tempo de contribuição, sendo a única regra para os segurados que começaram a contribuir após 13/11/2019, início da vigência da Emenda Constitucional.</p>
                <p>Para os segurados que ainda não tinham os requisitos necessários para se enquadrarem nas regras antigas de aposentadoria, podem se utilizar das regras de transição presentes na nova lei. São elas:</p>
                <h3>1. Pontos</h3>
                <p>Nessa regra, o segurado teria que cumprir certa pontuação, para poder se aposentar.</p>
                <p>A pontuação consiste na soma da idade do segurado com seu tempo de contribuição. <b>Os homens</b> necessitam ter <b>99 pontos</b> em 2022, sendo no mínimo <b>35 anos de contribuição</b>. Dessa forma, a idade mínima dos homens para se aposentarem utilizando essa regra em 2022 é de <b>64 anos</b> de idade. Já as<b> mulheres</b>, em 2022 devem ter <b>89 pontos</b>, tendo um tempo mínimo de contribuição de <b>30 anos</b>. Logo, nesse ano as mulheres devem ter idade mínima de 59 anos. </p>
                <p>Destaca-se que, a pontuação é progressiva, aumentando 1 ponto por ano, até que se complete a pontuação de <b>100 pontos para as mulheres e 105 pontos para os homens.</b> Dessa forma, a progressão dos pontos acabará em 2028 para os homens e em 2033 para as mulheres.</p>
                <h3>2. Transição por idade</h3>
                <p>Nessa regra seria necessário, tanto para homens, quanto para mulheres, o tempo mínimo de 15 anos de contribuição. A diferença entre homens e mulheres é exclusivamente em relação à idade. Os homens devem ter cumulativamente os 15 anos de contribuição mínimos, com idade mínima de 65 anos. Já em relação às mulheres, a idade é progressiva, sendo acrescido 6 meses a cada ano após a reforma. Dessa forma, como em 2020 a idade mínima era de 60 anos e seis meses, em 2021, mudou para 61 anos de idade, e agora, em 2020 a idade mínima para as mulheres é de 61 anos e seis meses.</p>
                <h3>3. Idade progressiva</h3>
                <p>Nessa regra os <b>homens</b> precisam ter <b>35 anos de contribuição</b> e as <b>mulheres 30 anos de contribuição</b>. A idade é progressiva, aumentando 6 meses a cada ano, tanto para homens quanto para mulheres.</p>
                <p>Em 2019 além dos 35 anos de contribuição, o<b>homem</b> deveria ter 61 anos de idade. Dessa forma, em 2022 a idade mínima para essa regra é <b>62 anos e seis meses</b>.</p>
                <p>Já a idade inicial das <b>mulheres</b>, em 2019 era 56 anos, logo, para se aposentarem por essa regra em 2022, as mulheres precisas de 30 anos de contribuição e <b>57 anos e seis meses de idade.</b></p>
                <h3>4. Pedágio de 50%</h3>
                <p>Primeiramente, nessa regra inexiste idade mínima para aposentadoria.</p>
                <p>Trata-se de uma regra mais restrita, na qual só podem se aposentar os segurados que faltavam menos de 2 anos para se aposentar na entrada em vigor da Reforma da Previdência, em 13 de novembro de 2019.</p>
                <p>No caso dos <b>homens</b>, como o tempo de contribuição para se aposentar era de <b>35 anos</b>, seria necessário o tempo mínimo de <b>33 anos</b> de contribuição em <b>13/11/2019</b>. Já no caso das <b>mulheres</b>, visto que o tempo de contribuição para se aposentar era de <b>30 anos</b>, deveriam ter <b>28 anos</b> de contribuição na referida data, para fazerem jus a essa regra.</p>
                <p>Dessa forma, no caso do homem, se ele tinha, por exemplo, 34 anos de contribuição ao momento da reforma, teria que cumprir o resto do tempo, que seria de um ano, acrescido de seis meses, que é de fato o pedágio de 50% do tempo que faltava. Logo, poderia se aposentar por essa regra com 35 anos e meio de contribuição.</p>
                <p>O mesmo para a mulher, que tivesse, por exemplo, 28 anos de contribuição ao momento da reforma, teria que cumprir os dois anos que faltavam, acrescidos de um ano de pedágio. Logo, nessa situação hipotética, a mulher poderia se aposentar com 31 anos de idade.</p>
                <h3>5. Idade Pedágio de 100%</h3>
                <p>Nessa regra, também é pago um pedágio de tempo de contribuição, porém ao contrário da regra anterior existe também a necessidade de cumprimento de idade mínima.</p>
                <p>Nessa regra, a idade mínima é de 60 anos para o homem e 57 anos para a mulher, ao momento da data de entrada no requerimento.</p>
                <p>Deve ser pago um pedágio de 100% do tempo de contribuição que faltava para o homem completar 35 anos de contribuição e a mulher 30 anos de contribuição.</p>
                <p><b>É importante ter em mente também que as regras de transição têm forma de cálculos que se diferem de umas para as outras, por conta disso é de fundamental importância a ajuda de um advogado para que se entenda de fato qual seria a regra mais vantajosa para o segurado.</b></p>
            </>}

        </div>
    );
}

export default Content;