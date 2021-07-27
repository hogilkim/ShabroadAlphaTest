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


    }, async searchPrograms(req, res){
        const { city, hashtags } = req.body;

        try {
            if(city) {
                const programs = await AcademyProgram.find({$and: [{city: city}, {hashtag: {$all: hashtags.split(',')}}]});
                res.json({data: programs})
            }
            else if(!city) {
                const programs = await AcademyProgram.find({hashtag: {$all: hashtags.split(',')}});
                res.json({data: programs})
        }
            
        } catch(error){
            res.status(404).json({message: error.message});
        }
    }, async getPrograms(req, res){
        try {
            const programs = await AcademyProgram.find();

            console.log("programs:" , programs);

            res.status(200).json(programs);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
}
