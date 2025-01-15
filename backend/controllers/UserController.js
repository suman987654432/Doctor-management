const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const UserRegistration = async (req, res) => {

    const { name, city, email, password } = req.body;
    console.log(req.body);
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const Data = await UserModel.create({
        name: name,
        city: city,
        email: email,
        password: passwordHash
    })
    res.send("OK");
}

const UserLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const User = await UserModel.findOne({ email: email });
        if (!User) {
            res.status(400).send({ msg: 'invalid email' });
        }

        const chkpass = await bcrypt.compare(password, User.password);
        if (chkpass) {
            res.status(200).send(User);
        }
        else {
            res.status(400).send({ msg: "invalid password" });
        }

    } catch (error) {
        res.send("error in code")
    }


}

const changePassword = async (req, res) => {
    const { userid, oldpassword, newpassword } = req.body;

    try {
        const Data = await UserModel.findById(userid);
        console.log(Data);
        const chkpass = await bcrypt.compare(oldpassword, Data.password);
        if (chkpass) {
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(newpassword, salt);
            await UserModel.findByIdAndUpdate(userid, { password: passwordHash });
            res.status(200).send({ msg: "password updated!!!" });
        }
        else {
            res.status(400).send({ msg: "old password dose not match!" })
        }
    } catch (error) {
        console.log(error);
    }
}


const userDisplay = async (req, res) => {
    const Data = await UserModel.find();
    res.status(200).send(Data);
}



module.exports = {
    UserRegistration,
    UserLogin,
    changePassword,
    userDisplay
}
