import cookie from "cookie";


const handler = (req,res)=> {
  if(req.method == "POST"){
    if(req.body.username == process.env.ADMIN_USERNAME && req.body.password == process.env.ADMIN_PASSWORD){
      // res.status(200).json({success : "Welcome Admin"})
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 10,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Succesfull");
    }else{
      res.status(404).json("error")
    }
  }
  else{
    res.status(404).json({success : "This method is not allowed"})
  }
}

export default handler

