import { generateJWT } from '../jwt/JwtRepository';
import { findUserByEmail } from './UsersRepository'

async function Auth(req, res, next) {
    let { email, senha } = req.body

      
    try {
        const userInfo = await findUserByEmail(email);

        if (userInfo.senha != senha)
            throw new Error('Usuario ou senha incorreta!');

        if (userInfo.email != email)
            throw new Error('Usuario ou senha incorreta!');

        const nomeMongoDb = userInfo.nome;
        const payload = { nomeMongoDb, email }

        const jwt = generateJWT(payload);

        res.status(200).json({ jwt, message: "Operação realizada com sucesso!" });
    } catch (error) {
        
        const errorMessage = error.toString()
        res.status(400).json(errorMessage)
    }
}


export { Auth }