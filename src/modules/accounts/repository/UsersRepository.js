import { Users } from '../../../database/Users'

async function CreateUser(req, res, next) {
    const { email, dt_nascimento, nome, senha, cpf } = req.body
    const users = {  email, dt_nascimento, nome, senha, cpf  }

    try {
        await Users.create(users)
        // console.log(users)
        res.status(201).json({ message: "Cliente criado com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}



export { CreateUser }