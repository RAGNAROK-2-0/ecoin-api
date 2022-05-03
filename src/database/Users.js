import mongoose from 'mongoose';

const Users = mongoose.model('Users', {
    usuario: String,
    senha: String,
    email: String,
    admin: Boolean,
})

export { Users };