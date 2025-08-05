import React from 'react'
import { useState } from 'react';
import question from '../data/question';

function Quiz() {
    const [currentQuestion, nextQuestion] = useState(0);
    const [score, Updatescore] = useState(0);
    const [isResultShown, setIsResultShown] = useState(false);
    const [bold,SetBold] = useState(null);

    const q = question[currentQuestion];
    function renderQuestion() {
        return (
            <div className='w-[80vw]'>
                <p className='text-2xl font-bold'>{q.question}</p>
                <p>{q.options.map((item, index) => {
                    return <li className={`cursor-pointer list-none text-xl ${bold === item ? "font-bold text-gray-400" : "font-normal"}`}
                        onClick={() => { answer(item);SetBold(item);}}
                        key={index}>
                        {String.fromCharCode(index + 97)}. {item}
                    </li>
                })}</p>
            </div>
        )
    }
    function answer(item) {
        if (item === q.answer) {
            Updatescore(score + 1);
        }
    }
    function nextQ() {
        if (currentQuestion < question.length - 1) {
            nextQuestion(currentQuestion + 1);
        } else {
            showResult();
        }
    }
    function prevQ() {
        if (currentQuestion === 0) {
            alert("this is FXirst Question");
        } else {
            nextQuestion(currentQuestion - 1);
        }
    }
    function showResult() {
        setIsResultShown(true);
    }

    return (
        <>
            {isResultShown ? (
                <div>
                    <h2 className='text-2xl font-medium'>your Score is : {score}</h2>
                    <h3 className='text-xl font-medium mt-3'>Thanks for Attempting</h3>
                </div>
            ) :
                <>
                    <div className="flex flex-col lg:flex-row items-center justify-around w-[99vw] p-2 lg:p-0">
                        <p className='text-2xl font-medium'><strong className='font-bold'>Note:</strong> your First click will be consider!</p>
                        <div className='flex flex-col items-center mt-4 lg:mt-0'>
                            <button onClick={showResult} className='text-2xl font-medium'><img className='w-10' src="./images/end.svg" alt="End Quiz" /></button>
                            <p className='font-medium'>End Quiz</p>
                        </div>
                    </div>
                    <h3 className='text-4xl lg:text-6xl text-center font-medium'>Question No. {currentQuestion + 1}</h3>
                    <div className='mt-10'>{renderQuestion()}</div>
                    <div className='flex justify-around w-[80vw] mt-20'>
                        <div className='flex flex-col items-center justify-center'>
                            <button onClick={prevQ}><img src="./images/back.svg" alt="back_button" className='w-10' /></button>
                            <p>Back</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button onClick={nextQ}><img src="./images/next.svg" alt="next_button" className='w-10' /></button>
                            <p>Next</p>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Quiz;