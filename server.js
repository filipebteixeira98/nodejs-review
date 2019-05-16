const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native mobile apps',
    url: 'https://github.com/facebook/react-native'
  });

  return res.send('Node.js');
});

app.listen(3001);
