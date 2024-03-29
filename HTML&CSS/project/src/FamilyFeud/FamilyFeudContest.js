import React, { useState } from 'react';
import { getFamilyFeudData } from './getFamilyFeudData';
import './FamilyFeudContest.css';

function FamilyFeudContest({ onStartClick, theme, handleThemeChange }) {
  const [data] = useState(getFamilyFeudData());
  const [showWinner, setShowWinner] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [teamScores, setTeamScores] = useState({
    team1: 0,
    team2: 0,
  });
  const [tempScore, setTempScore] = useState(0);
  const [levelCoefficient, setLevelCoefficient] = useState(1);
  const [clickedButtonIndexes, setClickedButtonIndexes] = useState([]);
  const [selectedAnswersIndexes, setSelectedAnswersIndexes] = useState([]); 
  const [X1clickCount, setX1ClickCount] = useState(0);
  const [X2clickCount, setX2ClickCount] = useState(0);

  const handleButtonX1Click = () => {
    setX1ClickCount(X1clickCount + 1);
  };

  const handleButtonX2Click = () => {
    setX2ClickCount(X2clickCount + 1);
  };
  const handleAnswerClick = (mark, buttonIndex) => {
    if (clickedButtonIndexes.includes(buttonIndex)) {
      return;
    }

    let newTempScore = tempScore;
    if (clickedButtonIndexes.length > 0) {
      newTempScore = clickedButtonIndexes.reduce(
        (totalMark, index) => totalMark + answers[index].mark * levelCoefficient,
        0
      );
    }

    if (!clickedButtonIndexes.includes(buttonIndex)) {
      newTempScore += mark * levelCoefficient;
    }

    setClickedButtonIndexes([...clickedButtonIndexes, buttonIndex]);
    setTempScore(newTempScore);

    setSelectedAnswersIndexes((prevIndexes) =>
      prevIndexes.includes(buttonIndex)
        ? prevIndexes.filter((index) => index !== buttonIndex)
        : [...prevIndexes, buttonIndex]
    );
  };

  const handleTeamScoreClick = (team) => {
    if (selectedAnswersIndexes.length > 0) {
      setTeamScores((prevTeamScores) => ({
        ...prevTeamScores,
        [team]: prevTeamScores[team] + tempScore,
      }));
      setTempScore(0);
      setClickedButtonIndexes([]);
    }
  };

  const handleScoreboardClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    setClickedButtonIndexes([]);
  };

  const handleLevelCoefficientAdd = () => {
    setLevelCoefficient(levelCoefficient + 1);
  };

  const handleLevelCoefficientMinus = () => {
    setLevelCoefficient((prevLevelCoefficient) =>
      prevLevelCoefficient > 1 ? prevLevelCoefficient - 1 : 1
    );
  };

  const handleBackToStartClick = () => {
    onStartClick('');
  };

  const currentData = data[currentQuestion];
  const answers = currentData
    ? [
        currentData.answer1,
        currentData.answer2,
        currentData.answer3,
        currentData.answer4,
        currentData.answer5,
        currentData.answer6,
        currentData.answer7,
        currentData.answer8,
      ]
    : [];

  const handleShowWinnerClick = () => {
    setShowWinner(true);
  };

  const lastQuestionIndex = data.length - 1;

  return (
    <div className={`familyFeudContest ${theme}`}>
      <button
        style={{ width: '150px', marginRight: '1000px' }}
        className='start'
        onClick={handleBackToStartClick}
      >
        الصفحة الرئيسية
      </button>

      <div className='questions card familyFued'>
        <div className='header'>
          <button
            className='score team1'
            onClick={() => handleTeamScoreClick('team1')}
          >
            نقاط الفريق 1: {teamScores.team1}
          </button>
          <button className='score team1 X' onClick={handleButtonX1Click}>
  X: {X1clickCount}
</button>
          <h4>فاميلي فيود</h4>
          <button
            className='score team2'
            onClick={() => handleTeamScoreClick('team2')}
          >
            نقاط الفريق 2: {teamScores.team2}
          </button>
          <button className='score team2 X' onClick={handleButtonX2Click}>X: {X2clickCount}</button>
        </div>
        <div className='question'>
          <h5>{currentData.question}</h5>
          <div className='answers-grid'>
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <div key={rowIndex}>
                {Array.from({ length: 2 }).map((_, colIndex) => {
                  const answerIndex = rowIndex * 2 + colIndex;
                  const answer = answers[answerIndex];
                  const isSelected = selectedAnswersIndexes.includes(
                    answerIndex
                  ); 

                  return (
                    <div key={answerIndex}>
                      <button
                        className={`start answer-button ${
                          clickedButtonIndexes.includes(answerIndex) ||
                          isSelected 
                            ? 'clicked'
                            : ''
                        }`}
                        onClick={() => handleAnswerClick(answer.mark, answerIndex)}
                      >
                        {answer.answer}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <h5>
          <button onClick={handleLevelCoefficientMinus}>-</button> المستوى: {levelCoefficient}{' '}
          <button onClick={handleLevelCoefficientAdd}>+</button>
        </h5>
        {currentQuestion < data.length - 1 && (
          <button className='next-question' onClick={handleScoreboardClick}>
            السؤال التالي
          </button>
        )}
        {currentQuestion === lastQuestionIndex && (
          <button
            style={{
              backgroundColor: '#f8dd44',
              color: 'black',
              padding: '10px 20px',
              fontSize: '20px',
              borderRadius: '10px',
              marginBottom: '10px',
              width: '155px',
            }}
            onClick={handleShowWinnerClick}
          >
            اظهر الفائز
          </button>
        )}
        {showWinner && (
          <div>
            {teamScores.team1 > teamScores.team2 ? (
              <h2>الفريق الاول هو الفائز!</h2>
            ) : teamScores.team2 > teamScores.team1 ? (
              <h2>الفريق الثاني هو الفائز!</h2>
            ) : (
              <h2>تعادل!</h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FamilyFeudContest;
