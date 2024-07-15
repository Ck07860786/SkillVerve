

const validate = (schema)=>async(req,res,next)=>{
    try {
        const ParseBody = await schema.parseAsync(req.body)
        req.body= ParseBody
        next()

    } catch (err) {
        const message = err.errors[0].message;
        console.log(message)
        res.status(400).json({message:message})
    }
}

export default validate;