import { generateJWT } from '../../jwt/repository/JwtRepository';
import { findUserByEmail } from './UsersRepository'

async function Auth(req, res, next) {
    const { email, senha } = req.body


    try {
        const userInfo =  await findUserByEmail(email);
        console.log(userInfo)



        if (userInfo[0].senha.trim() != senha.trim())
            throw new Error('Usuario ou senha incorreta!');

        if (userInfo[0].email.trim() != email.trim())
            throw new Error('Usuario ou senha incorreta!');

        const {
            nomeToJwt,
            emailToJwt
        } = userInfo;

        const payload = { nomeToJwt, emailToJwt }

        const jwt = generateJWT(payload);




        res.status(200).json({ jwt, message: "Operação realizada com sucesso!" });
    } catch (error) {
        const errorMessage = error.toString()
        res.status(400).json(errorMessage)
    }
}


export {Auth}