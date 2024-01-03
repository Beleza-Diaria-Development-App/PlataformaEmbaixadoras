// dbConfig.js
'use client'
import mongoose from 'mongoose';
const MONGODB_URI = 'mongodb+srv://guihibb:Guilherme102030@clusterlogin.u9wmb98.mongodb.net/?retryWrites=true&w=majority';

// dbConfig.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://guihibb:Guilherme102030@clusterlogin.u9wmb98.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};

module.exports = connectDB;
