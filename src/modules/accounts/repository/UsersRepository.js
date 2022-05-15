import { Users } from '../../../database/Users'
import { TestaCPF } from '../../validators/testCpf'

async function CreateUser(req, res, next) {
    const { email, dt_nascimento, nome, senha, cpf } = req.body
    const users = { email, dt_nascimento, nome, senha, cpf }

    try {
        if (!email || !senha) {
            throw new Error('Usuario ou senha não informados!');
        }

        let cpfValid = TestaCPF(cpf)
        if (!cpfValid) {
            throw new Error('Cpf invalido!');
        }

        let UserExists = await findUserByCpf(cpf);

        if (UserExists.length > 0) {
            throw new Error('Usuario já existe!');
        }

        await Users.create(users);

        res.status(201).json({ message: "Cliente criado com sucesso!" })
    } catch (error) {
        const errorMessage = error.toString()
        res.status(400).json(errorMessage)
    }
}

async function ListAllUsers(req, res, next) {

    try {
        const list = await Users.find();
        res.status(200).json(list)
    } catch ({ error }) {
        res.status(500).json({ error: error })
    }
}


async function findUserByCpf(cpf) {
    const user = await Users.find({ cpf: cpf });

    return user;
}

async function findUserByEmail(email) {
    const user = await Users.findOne({ email: email }).exec();
    return user;
}



export { CreateUser, ListAllUsers, findUserByEmail, findUserByCpf }