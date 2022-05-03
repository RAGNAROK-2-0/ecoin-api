import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://tofanini:cesar12345@cluster0.ytgt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado ao MongoDB")
})
.catch((e)=>{
    console.log("Erro ao acessar o MongoDB")
    console.log(e)
})
