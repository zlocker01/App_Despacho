import mongoose from "mongoose";

export const conectarDB = async () => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );

    const url = `${db.connection.host}: ${db.connection.port}`
    console.log(`Mongo DB conected in: ${url}`);
    }catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    };
};