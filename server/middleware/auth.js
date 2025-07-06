import jwt from "jsonwebtoken";


const auth=(req,res,next)=> {

    const token=req.headers.authorization;

    try{
        console.log("Token received:", token);

        jwt.verify(token,process.env.JWT_SECRET);
        next();
    }

    catch(error){
        console.error(`Error in auth middleware: ${error.message}`);
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

}

export default auth;