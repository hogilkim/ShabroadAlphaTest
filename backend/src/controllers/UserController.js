const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken') ;
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);   
sgMail.setApiKey('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');   
const nodemailer = require('nodemailer')
const {validationResult} = require('express-validator');
const User = require('../models/User');


// Custom error handler to get useful error from database errors
const {errorHandler} = require('../helper/dbErrorHandling');



module.exports = {
    async store(req, res){
        try {
            const { email, firstName, lastName, password } = req.body;
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                const firstError = errors.array().map(error => error.msg)[0];
                return res.status(422).json({errrors: firstError});
            } else {
                const existentUser = await User.findOne({email})

                if(existentUser) {
                    return res.status(400).json({
                        error: "Email is taken"
                    });
                }

                const token = jwt.sign({
                    firstName, 
                    lastName, 
                    email, 
                    password
                    }, process.env.JWT_ACCOUNT_ACTIVATION,
                    {
                        expiresIn: '15m'
                    }
                )

                const emailData = {
                    from: 'hogilkim@gmail.com',
                    to: email,
                    subject: "Account Activation Link",
                    html:`
                        <h1> 이메일 인증을 위해 링크를 클릭해 주세요 </h1>
                        <p> localhost:3000/users/activate/${token}</p>
                        <hr/>
                        <p> 이 이메일은 개인정보를 포함하고 있습니다. 노출되지 않게 주의해 주세요. 계정이 활성화 되었다면 이메일을 삭제하여 주십시오.</p>
                        <p>localhost:3000</p>
                    `
                }


                
                
                sgMail.send(emailData)
                .then(()=>{
                    return res.json({
                        message:`Email has been sent to ${email}`
                    });
                }).catch(err=>{
                    return res.status(400).json({
                        errors: errorHandler(err)
                    })
                });
                
                // console.log(email, password, firstName, lastName);
                
                // await sgMail.send(emailData);  
                // return res.json({
                //     message:`Email has been sent to ${email}`
                // });           
              

                
                
    
                // if (!existentUser){
                //     const hashedPassword = await bcrypt.hash(password, 12)
                //     const user = await User.create({
                //         email,
                //         firstName,
                //         lastName,
                //         password: hashedPassword
                //     })
                //     return res.json(user);
                // }
                // return res.status(400).json({
                //     error:
                //     'email already exists! do you want to login instead?'
                // })
            }
        } catch (error) {
            return res.status(400).json({
                errors: errorHandler(error)
            })
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