import mongoose from 'mongoose';

const Statement = mongoose.model('Statement', { 
    dateCreated: Date, 
    title: String, 
    description: String, 
    type: String, 
    amount: Number, 
    cpf: Number 
})

export { Statement };

