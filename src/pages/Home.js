// src/pages/Home.js

import React, { useState } from 'react';
import StoryImage1 from '../images/pigs.png';
import StoryImage2 from '../images/redhood.png';
import StoryImage3 from '../images/jm.png';
import StoryPage from './StoryPage';

const Home = () => {
    const [selectedStory, setSelectedStory] = useState(null);

    const stories = [
        {
            title: "Os Três Porquinhos",
            description: "Uma história sobre três porquinhos que constroem suas casas de diferentes materiais e um lobo que tenta derrubá-las.",
            content: "Três porquinhos irmãos, cada um com sua personalidade e habilidades, decidem construir suas próprias casas. O primeiro, mais preguiçoso, constrói uma casa de palha rapidamente para ter mais tempo para brincar. O segundo, um pouco mais diligente, constrói uma casa de madeira que é mais forte que a palha. O terceiro, o mais trabalhador e sábio, gasta tempo e esforço para construir uma casa de tijolos resistente. Quando o lobo mau aparece, ele sopra as duas primeiras casas com facilidade, mas não consegue derrubar a casa de tijolos, não importa o quanto ele tente. No final, os três porquinhos ficam seguros na casa de tijolos, aprendendo a importância do trabalho duro e da preparação.",
            image: StoryImage1,
            quiz: {
                question: "Qual material o terceiro porquinho usou para construir sua casa?",
                options: ["Palha", "Madeira", "Tijolos"],
                answer: "Tijolos"
            }
        },
        {
            title: "Chapeuzinho Vermelho",
            description: "Uma menina chamada Chapeuzinho Vermelho encontra um lobo astuto em sua jornada para visitar sua avó doente",
            content: "Chapeuzinho Vermelho, assim chamada por causa do capuz vermelho que sempre usa, é uma menina que recebe de sua mãe a tarefa de levar uma cesta de guloseimas para sua avó doente que mora na floresta. No caminho, ela encontra um lobo mau que, ao saber de seus planos, engana Chapeuzinho e corre para a casa da avó primeiro. O lobo engole a avó inteira e se disfarça de avó para enganar Chapeuzinho Vermelho. Quando Chapeuzinho chega, o lobo também a engole. Mas um caçador que passava ouve os roncos do lobo, percebe o que aconteceu e corta a barriga do lobo para salvar Chapeuzinho e sua avó.",
            image: StoryImage2,
            quiz: {
                question: "Quem salvou Chapeuzinho Vermelho e sua avó?",
                options: ["Um caçador", "Um lenhador", "Um fazendeiro"],
                answer: "Um caçador"
            }
        },
        {
            title: "João e Maria",
            description: "Dois irmãos são abandonados na floresta, encontram uma casa feita de doces e precisam escapar de uma bruxa malvada.",
            content: "João e Maria são irmãos que são abandonados na floresta por seus pais, que estão desesperados e não podem mais alimentá-los devido à fome. Perdidos e com fome, eles encontram uma casa feita de doces e começam a comê-la, sem saber que pertence a uma bruxa que usa a casa para atrair crianças e comê-las. A bruxa prende João e começa a alimentá-lo para engordá-lo, enquanto Maria é forçada a trabalhar. No entanto, as crianças conseguem enganar a bruxa. Maria finge que não sabe como verificar se o forno está quente o suficiente, e quando a bruxa se inclina para verificar, Maria a empurra para dentro e tranca a porta. Depois disso, eles encontram o caminho de casa com a ajuda de pássaros que eles alimentam com migalhas de pão. Quando chegam em casa, descobrem que seu pai se arrependeu de abandoná-los e ficou aliviado por eles terem voltado.",
            image: StoryImage3,
            quiz: {
                question: "De que era feita a casa da bruxa?",
                options: ["Madeira", "Pedra", "Doces"],
                answer: "Doces"
            }
        }
    ];
    

    const handleStoryClose = () => {
        setSelectedStory(null);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center home-title">Bem Vindo a Historias Infantis</h1>
            {selectedStory ? (
                <StoryPage story={selectedStory} onClose={handleStoryClose} />
            ) : (
                <div className="row">
                    {stories.map((story, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <img src={story.image} className="card-img-top" alt={story.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{story.title}</h5>
                                    <p className="card-text">{story.description}</p>
                                    <button onClick={() => setSelectedStory(story)} className="btn btn-primary">Ler Historia</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
