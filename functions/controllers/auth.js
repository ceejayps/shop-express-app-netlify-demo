exports.login = (req, res) => {
    const {email,password,username} = req.body;
    console.log(req.body)
    res.status(200).send({email, password, username});
}