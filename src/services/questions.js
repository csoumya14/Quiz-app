import axios from 'axios';
const baseUrl = 'https://johnmeade-webdev.github.io/chingu_quiz_api/trial.json';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll };
