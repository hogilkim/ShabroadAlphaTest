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

July 15:
    working on password reseting. finished sending email for user who want to reset password.
    need to work on ResetPassword page & backend password reset.

July 16:
    finished reset password frontend & backend

July 17:
    start dashboard

July 19:
    imported google map in frontend using npm library's react-google-maps.

July 22:
    Went to hospital :(
    updated Academy Schema

July 23:
    added AcademyProgram schema
    can add academy & programs through POST request
    search by hashtag finished

July 27:
    working on search result page (searching language programs)
    created new redux - getting academy programs. Redux not working.
    why?? cannot set redux's program state in reducer.

July 28:
    Fixed Redux problem!
    problem: before data was loaded, Program component tried to access to the data.

July 29:
    working on search program: frontend

July 30:
    finished transferring searching program data from backend to frontend. 
    One thing learned: do not use req.body when making a get request.

    finished showing search result to frontend.

July 31:
    applied "pagination" for getting all programs. limit of programs in one page: 8. if want to see more, need to go to the next page.
    Made new page: program details. Now users can see details about a certain program (clicked from Programs page)
    programs/search/QUERIES page can be accessed just by typing queries. No need to search & enter. (in other words, if user directly access http://localhost:3000/programs/search?hashtags=GRE,TOEFL&city=New%20York, frontend shows search results )

August 1:
    Combined all redux components (actions, reducers, and constants) into one module (ReduxModules)

August 2:
    Some small fixes: Program details page does not show whether the program is weekly based or term based. Now fixed.

August 6:
    start working on main page. Users will be able to search.

August 7:
    still working on main page, but I don't have any css basis. Need to learn css first.

August 9:
    implementing searching academies by city in home. Now, frontend sends city info to backend, then backend sends response to frontend, and it stores to the redux.

    NEED TO WORK FOR TOMORROW: show results in "Academy" page.

August 10:
    Now users can get result of 'search academy by city' in "Academies" page

August 11:
    Changed main page: users now have to select cities with buttons.

August 12:
    Learned how to implement text editor using react-quill package

August 13:
    Added AcademyDetails page 


August 17:
    More detailed AcademyDetails page. 
        1. implement ControlledAccordian from Material-ui
        2. pass program details to ControlledAccordian
    Now, when user goes into the AcademyDetails page, they will be able to see program details.

August 23:
    academy schema has description in html format. in AcademyDetails page, it can now show description in html. 

September 9:
    Registration/forget password/Login functions checked.