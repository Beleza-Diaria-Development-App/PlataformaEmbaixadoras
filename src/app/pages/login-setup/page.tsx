// pages/login.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../../../dbConfig'; // Atualize o caminho conforme necessário
import mongoose from 'mongoose';

// Conectar ao MongoDB
connectDB();

// Definir o modelo de usuário
interface User extends mongoose.Document {
  email: string;
  password: string;
}

const UserModel = mongoose.model<User>(
  'User',
  new mongoose.Schema({
    email: String,
    password: String,
  })
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Verificar se as credenciais existem no MongoDB
      const matchingUser = await UserModel.findOne({ email, password });

      // Se o usuário for encontrado, responda com sucesso
      // Caso contrário, responda com erro 401 (não autorizado)
      if (matchingUser) {
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ success: false, message: 'Credenciais inválidas' });
      }
    } catch (error) {
      console.error('Erro ao processar login:', error);
      res.status(500).json({ success: false, message: 'Erro interno no servidor' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Método não permitido' });
  }
}