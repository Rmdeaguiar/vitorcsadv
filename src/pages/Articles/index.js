import './styles.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Content from '../../components/Content';
import { useState } from 'react'

function Articles() {


    const articles = [{ id: 1, title: 'Planejamento previdenciário' }, { id: 2, title: 'Regras de transição para aposentadoria' }]

    const [article, setArticle] = useState({ id: 0, title: '', show: false });

    function handleArticle(article) {
        setArticle({ id: article.id, title: article.title, show: true })
    }

    return (
        <div className='display-page'>
            <Header
                handleArticle={handleArticle} 
                />
            {!article.show ? <div className='container-articles'>
                {articles.map((article) => (
                    <div key={article.id} className='article'>
                        <h2>{article.title}</h2>
                        <h4 onClick={() => handleArticle(article)}>Leia mais!</h4>
                    </div>
                ))}

            </div>
                :
                <Content
                    article={article}
                    setArticle={setArticle}
                />}
            <Footer
                setArticle={setArticle} />
        </div>

    );
}

export default Articles;
