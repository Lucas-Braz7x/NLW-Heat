import "dotenv/config";
import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server, Socket } from 'socket.io';
import { router } from './routes';

const app = express();
app.use(cors());

//Cria um servidor
const serverHttp = http.createServer(app);

//Acesso a conexão cliente
const io = new Server(
  serverHttp,
  {
    cors: {
      origin: "*"//Habilitado para tudo
    }
  });

io.on("connection", (socket) => {
  console.log(`Usuário conectado! É nois parça ${socket.id}!!`);
});//Ouvindo evento

app.use(express.json());

app.use(router);

app.get("/github", (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})


app.get("/signin/callback", (req, res) => {
  const { code } = req.query;
  return res.json(code);
})

export { serverHttp, io };