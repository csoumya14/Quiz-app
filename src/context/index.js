import { createContext, useEffect, useState } from 'react';
import questionService from '../services/Questions';

export const Context = createContext();

const intialQuestion = {
  question: 'Which HTML5 element should contain important links for navigating a website?',
  id: 1,
  topic: 'html',
  choices: {
    a: '<li>',
    b: '<ul>',
    c: '<header>',
    d: '<nav>',
  },
  answer: 'd',
};

const Provider = ({ children }) => {
  const [questions, setQuestions] = useState([intialQuestion]);
  const [score, setScore] = useState(0);
  const [notification, setNotification] = useState('');
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    questionService
      .getAll()
      .then(fetchedQuestions => {
        setQuestions(fetchedQuestions);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const displayQuestions = questions.slice(0, 3);

  const ContextValue = {
    displayQuestions,
    notification,
    setNotification,
    score,
    setScore,
    showScore,
    setShowScore,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;
