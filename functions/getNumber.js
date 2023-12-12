// functions/getNumbers.js
const jwt = require('jsonwebtoken');

export async function handler(event, context) {

  if (event.httpMethod !== "GET") {
    const res = {
      code: "rest_missing_callback_param",
      message: "Paramètre(s) manquant(s) : name",
      data: {
        status: 400,
        params: [
          "name"
        ]
      }
    }

    return {
      statusCode : 400,
       body : JSON.stringify(res),
       headers : {
        'Content-Type': 'application/json',
       },
    };
  }else{
    return {
      statusCode: 200,
      body: JSON.stringify({ numbers: [1, 2, 3, 4, 5] }),
      headers : {
       'Content-Type': 'application/json',
      },
    };

  }

}
