import { AUTH } from './constants';

export default props =>
  new Promise((resolve, reject) => {
    const data = {
      email: props.username,
      secret: props.password
    };

    fetch(`${AUTH}/login`, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => reject(error));
  });
