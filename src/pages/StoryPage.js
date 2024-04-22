import React, { useState, useEffect } from 'react';

const StoryPage = ({ story, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const utterance = new SpeechSynthesisUtterance(story.content);
    utterance.lang = 'pt-BR'; // Set language to Portuguese

    const handlePlay = () => {
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const isCorrect = selectedOption === story.quiz.answer;

    useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
        };
    }, []);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                <div className='row'>
                    <div className="col-md-6">
                            <img src={story.image} alt={story.title} style={{width: '100%', height: 'auto'}} />
                        </div>
                        <div className='col-md-6'>
                        <h1 className="card-title">{story.title}</h1>
                    <p className="card-text">{story.content}</p>
                        </div>
                </div>
                    <button onClick={handlePlay} className="btn btn-primary mt-3 mr-4" disabled={isPlaying}>Escutar</button>
                    <button onClick={handleStop} className="btn btn-primary mt-3">Parar</button>
                    <div className="quiz-section">
                        <h2>Quiz</h2>
                        <p>{story.quiz.question}</p>
                        {story.quiz.options.map((option, index) => (
                            <div key={index}>
                                <input type="radio" id={`option-${index}`} name="quiz" value={option} onChange={handleOptionChange} />
                                <label htmlFor={`option-${index}`}>{option}</label>
                            </div>
                        ))}
                        {selectedOption && (
                            <p className="mt-2">{isCorrect ? "Resposta correta!" : "Desculpe, isso não está correto."}</p>
                        )}
                        <button onClick={onClose}>Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryPage;