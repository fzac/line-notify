const request = require('request');

class Notify {
  constructor(token) {
    this.token = token;
  }

  send(message = 'test', callback = () => {}) {
    const url = 'https://notify-api.line.me/api/notify';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${this.token}`
    }

    const options = {
      url,
      method: 'POST',
      headers,
      json: true,
      form: { message }
    }
    request.post(options, callback);
  }
}

module.exports = (token) => {
  return new Notify(token);
}
