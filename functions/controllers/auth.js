const { createUser } = require("./functions/users");

exports.login = (req, res) => {
    const {email,password,username} = req.body;
    console.log(req.body)
    res.status(200).send({email, password, username});
}

exports.register = (req, res) =>{
    const {email, password ,username} = req.body;
    const newUser =createUser({email, password, username})
    res.send(newUser)





}