import React, {useState, useRef} from 'react'

const MultiplicationApp = () => {

    const inputRef = useRef(null);
    const [score, setScore] = useState(0)
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)

   const HandleSubmit = ()=>{

        setFirstNumber(Math.floor(Math.random() * 10));
        setSecondNumber(Math.floor(Math.random() * 10));
        let correctAnswer = firstNumber * secondNumber;
        let userAnswer = (parseInt(inputRef.current.value));

        if(correctAnswer === userAnswer){setScore(score + 1)}
        else if(userAnswer !=  correctAnswer && score > 0){setScore(score -1)}

        // clearing the input field after submit
        inputRef.current.value = '';
   }


  return (
    <div className='container'>

        <div className='app-container'>
            <div className='score'>
                <p>Score: <span>{score}</span></p>
            </div>

            <div className='calculate'>
                <h1>What is <span>{firstNumber}</span> multiply by <span>{secondNumber}
                </span> ?</h1>
            </div>

            <div className='input-container'>
                <input type='number' ref={inputRef} className='input-text' 
                name='data' placeholder='type your answer here'/>
            </div>
            <div className='btn-container'>
                <button className='btn' onClick={HandleSubmit}>Submit</button>
            </div>
        </div>

    </div>
  )
}

export default MultiplicationApp