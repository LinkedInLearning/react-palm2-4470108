require('dotenv').config();
const express = require('express');
const app = express();

const { TextServiceClient } =
  require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

let answer = null;
const prompt = "Repeat after me: one, two,";

app.get('/api', (req, res) => {
  client
    .generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    })
    .then((result) => {
      answer = result[0].candidates[0].output;
      res.json(answer)
    }).catch((err) => {
      console.error(err.details);
      res.json(err.details);
    });
});

app.listen(3333, () => console.log('Server running on port 3333'));