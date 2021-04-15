import { createContext, useEffect, useState } from 'react';
import questionService from '../services/questions';

export const Context = createContext();

const initialQuestion = {
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
  const [questions, setQuestions] = useState([initialQuestion]);
  const [displayQuestions, setDisplayQuestions] = useState([initialQuestion]);
  const [finished, setFinished] = useState(false);
  const [notification, setNotification] = useState('');

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

  useEffect(() => {
    createRandom(questions);
  }, [questions]);
  const createRandom = array => {
    let originalArray = [...array];
    let randomizedArray = [];

    while (randomizedArray.length <= 9) {
      let randomIndex = Math.floor(Math.random() * originalArray.length);
      const randomQuestion = originalArray[randomIndex];

      randomizedArray.push(randomQuestion);

      originalArray.splice(randomIndex, 1);
    }

    setDisplayQuestions(randomizedArray);
  };

  const ContextValue = {
    displayQuestions,
    notification,
    setNotification,
    finished,
    setFinished,
  };
  return <Context.Provider value={ContextValue}>{children}</Context.Provider>;
};

export default Provider;
