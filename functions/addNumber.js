// functions/addNumbers.js

exports.handler = async function (event, context) {
  const apiKey = event.headers.authorization;
  if (!apiKey || apiKey !== 'DoctorWho') {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized. Invalid API key.' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Bad Request. Only POST requests are allowed.' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  try {
    const requestBody = JSON.parse(event.body);
    const { number1, number2 } = requestBody;
  
    const result = number1 + number2;
  
    return {
      statusCode: 201,
      body: JSON.stringify({ result }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON format in the request body.' }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
};

