/* Sobrescreve o arquivo index.d.ts da pasta node modules, afim de 
possibilitar o reconhecimento das propriedades para o typescript */
declare namespace Express {
  export interface Request {
    user_id: string;
  }
}