const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken') ;
const User = require('../models/User');

module.exports = {
    async store(req, res){
        try {
            const { email, firstName, lastName, password } = req.body;
            const existentUser = await User.findOne({email})

            if (!existentUser){
                const hashedPassword = await bcrypt.hash(password, 12)
                const user = await User.create({
                    email,
                    firstName,
                    lastName,
                    password: hashedPassword
                })
                return res.json(user);
            }
            return res.status(400).json({
                message:
                'email already exists! do you want to login instead?'
            })
        } catch (error) {
            throw Error(`Error while Registering new user : ${error}`)
        }
    },
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const existingUser = await User.findOne({email});
            if (!existingUser) return res.satus(404).json({message: "User Does not exist!"});

            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

            if (!isPasswordCorrect) return res.status(404).json({message: "wrong password"})

            const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"})

            res.status(200).json({result: existingUser, token});
        } catch (error) {
            res.status(500).json({message: "Something Went Wrong: backend UserController.js"})
        }
    }
}