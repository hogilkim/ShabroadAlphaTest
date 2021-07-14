Webiste Project Alpha Test!

Update log:

------------------------------------2021------------------------------------

July 9
backend:
    installed from npm: morgan, crypto
    using morgan: help to see requests for development
    updated user model


July 10
backend:
    added dbErrorHandling.js:  checks if there is already existing field in DB.
    npm sendgrid/mail : for email verification. Also can use npm nodemailer
    npm express-validator
    UserController: adding email verification function. Need to fix sendgrid's api key process.env problem.
    Email sending function success! 

July 11
backend:
    working on email verification controller... verification after sending email
    validator.js : checks if the user has submitted valid information.
    finished email verification. Need to work on frontend email confirmation page.
frontend:
    Sign Up page: now users should fill in all blanks
                            should confirm password
                    Otherwise, error message

July 12: 
    backend:
        Completed email verification function. 
    frontend:
        completed email verification page.

July 14:
    backend: 
        UserController login: changed return values. it also had error. fixed.