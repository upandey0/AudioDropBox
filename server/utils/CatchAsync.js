const CatchAsync=(fn) =>(req,res,next)=>{
    return Promise.resolve(fn(req,res,next)).catch((e)=>{
        console.log("promise breaked");
        next(e)
    })
}

export default CatchAsync