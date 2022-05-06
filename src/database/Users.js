import mongoose from 'mongoose';

const Users = mongoose.model('Users', {
    nome: String,
    dt_nascimento: Date,
    email: String,
    cpf: Number,
    senha: String,
})

export { Users };