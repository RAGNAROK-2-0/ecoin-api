import mongoose from 'mongoose';

const Stores = mongoose.model('Stores', {
    idLoja: Number,
    nomeLoja: String,
    descricaoLoja: String,
    imgLoja: String,
    favoritedBy: Array,
})

export { Stores };