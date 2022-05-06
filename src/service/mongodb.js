import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_LINK)
.then(()=>{
    console.log("Conectado ao MongoDB")
})
.catch((e)=>{
    console.log("Erro ao acessar o MongoDB")
    console.log(e)
})
