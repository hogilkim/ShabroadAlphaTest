const Academy = require('../models/Academy');
const AcademyProgram= require('../models/AcademyProgram')

module.exports = {
    async createAcademy(req, res){
        const {name, company, telephone_number, address, email, city, location, nearby_amenity, rating} = req.body;
        // console.log(req.files)

        //!
        //! for storing images. Commented Out for a moment. dont forget to uncomment
        // let array = [];
        // req.files.forEach(function(json){
        //     array.push({picture: json.filename});
        //     // console.log(json.filename);
        // })
        //!
        const academy = await Academy.create({
            name,
            company,
            telephone_number,
            address,
            email,
            city,
            location,
            nearby_amenity,
            rating
            // academy_pictures: array
        })
        return res.json(academy);
    }
    ,
    async createProgram(req, res){
        
        const {academy_id, program_name, unit_price, program_type, age_group, hashtag} = req.body;

        const academy = await Academy.findOne({_id: academy_id})
        
        const academy_program = await AcademyProgram.create({
            academy_id, city: academy.city, program_name, program_type, unit_price, age_group, hashtag
        });

        await academy.updateOne({ $push: {programs: academy_program._id}})

        return res.json(academy_program);
    }
}
