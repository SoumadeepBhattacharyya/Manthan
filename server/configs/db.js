import mongoose, { connect, mongo } from 'mongoose';


const connectDB = async () => {
    try{
        mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'))
        await mongoose.connect(`${process.env.MONGODB_URI}/manthan`)

    }

    catch(error){

        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with failure

    }
}


export default connectDB;