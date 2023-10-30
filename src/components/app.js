import React, { useState } from 'react'

export default function App() {
	// Define a state variable here to track question status
	const [currentIndex, setCurrentIndex] = useState(0)

	const questions = [
		{
			questionText: 'Which country won the first ICC Cricket World Cup in 1975?',
			answerOptions: [
				{ answerText: 'Australia', isCorrect: false },
				{ answerText: 'England', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'West Indies', isCorrect: true },
			],
		},
		{
			questionText: 'Who holds the record for the highest individual score in Test cricket?',
			answerOptions: [
				{ answerText: 'Brian Lara', isCorrect: true },
				{ answerText: 'Sachin Tendulkar', isCorrect: false },
				{ answerText: 'Don Bradman', isCorrect: false },
				{ answerText: 'Matthew Hayden', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the highest run-scorer in One Day Internationals (ODIs)?',
			answerOptions: [
				{ answerText: 'Ricky Ponting', isCorrect: false },
				{ answerText: 'Sachin Tendulkar', isCorrect: true },
				{ answerText: 'Kumar Sangakkara', isCorrect: false },
				{ answerText: 'Virat Kohli', isCorrect: false },
			],
		},
		{
			questionText: 'Which player has taken the most wickets in Test cricket?',
			answerOptions: [
				{ answerText: 'Shane Warne', isCorrect: false },
				{ answerText: 'Muttiah Muralitharan', isCorrect: false },
				{ answerText: ' Anil Kumble', isCorrect: false },
				{ answerText: ' James Anderson', isCorrect: true },
			],
		},
        {
			questionText: 'Which team has won the most ICC Cricket World Cup titles?',
			answerOptions: [
				{ answerText: 'Australia', isCorrect: true },
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'England', isCorrect: false },
				{ answerText: 'West Indies', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the fastest bowler to reach 400 Test wickets?',
			answerOptions: [
				{ answerText: 'Richard Hadlee', isCorrect: false },
				{ answerText: 'Glenn McGrath', isCorrect: true },
				{ answerText: 'Courtney Walsh', isCorrect: false },
				{ answerText: ' Dale Steyn', isCorrect: false },
			],
		},
		{
			questionText: 'Which cricketer has scored the most centuries in international cricket?',
			answerOptions: [
				{ answerText: 'Ricky Ponting', isCorrect: false },
				{ answerText: 'Sachin Tendulkar', isCorrect: true },
				{ answerText: 'Kumar Sangakkara', isCorrect: false },
				{ answerText: 'Virat Kohli', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the current captain of the Indian cricket team in Test matches?',
			answerOptions: [
				{ answerText: 'Virat Kohli', isCorrect: false },
				{ answerText: 'Rohit Sharma', isCorrect: true },
				{ answerText: 'Ajinkya Rahane', isCorrect: false },
				{ answerText: 'KL Rahul', isCorrect: false},
			],
		},
        {
			questionText: 'Which player has the highest individual score in T20 international cricket?',
			answerOptions: [
				{ answerText: 'Aaron Finch', isCorrect: false },
				{ answerText: 'Rohit Sharma', isCorrect: true },
				{ answerText: 'Chris Gayle', isCorrect: false },
				{ answerText: 'Brendon McCullum', isCorrect: false},
			],
		},
        {
			questionText: 'Which country hosted the first-ever day-night Test match?',
			answerOptions: [
				{ answerText: 'England', isCorrect: false },
				{ answerText: 'Australia', isCorrect: true },
				{ answerText: 'New Zealand', isCorrect: false },
				{ answerText: 'South Africa', isCorrect: false},
			],
		},
	]

	function handleAnswerClick(isCorrect) {
		// Check if correct answer is pressed.
        if(isCorrect) {
            setScore((score) => score + 1);
        }
        // catching this block when the quiz is finished based upon the value when currentIndex is equal to 4 i.e. questions.length-1
		if (currentIndex === questions.length - 1) {
			// quiz over
			setQuizFinished(true)
		} // catching this block when the quiz is not finished and incrementing the question value 
        else {
			setCurrentIndex((value) => value + 1)
		}
	}

	const [quizFinished, setQuizFinished] = useState(false)
    const [score, setScore] = useState(0)
	// Create a state variable here [score, setScore]

	return (
		<div className="app">
			{quizFinished ? (
				/* Change this hardcoded 1 to state variable score else */
				<div className="score-section">
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className="question-section">
						<div className="question-count">
							<span>Question {currentIndex+1}</span>/{questions.length}
						</div>
						<div className="question-text">
                            {/* We can access the question's text through this syntax in which currentIndex is specified. */}
							{questions[currentIndex].questionText}
						</div>
					</div>
					<div className="answer-section">
                        {/* We can access the answer's through this syntax in which currentIndex is specified and 
                        creating a map() which renders down a new array of options whenever being called . */}
						{questions[currentIndex].answerOptions.map((answer) => {
							// Add onClick listener to this button
							return (
								<button
									onClick={() => handleAnswerClick(answer.isCorrect)}
									key={answer.answerText}
								>
									{answer.answerText}
								</button>
							)
						})}
					</div>
				</>
			)}
		</div>
	)
}

