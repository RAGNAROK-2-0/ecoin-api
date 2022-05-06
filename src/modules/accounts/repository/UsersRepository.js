import { Users } from '../../../database/Users'

async function CreateUser(req, res, next) {
    const { email, dt_nascimento, nome, senha, cpf } = req.body
    const users = {  email, dt_nascimento, nome, senha, cpf  }

    try {
      console.log(await Users.create(users))
        // console.log(users)
        res.status(201).json({ message: "Cliente criado com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}


async function List(req, res, next) {
    try {
        const list = await Users.find();
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({error: error})
    }
}



export { CreateUser,List }