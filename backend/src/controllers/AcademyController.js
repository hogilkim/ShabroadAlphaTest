const Academy = require('../models/Academy');

module.exports = {
    async createAcademy(req, res){
        const {name, telephone_number, address, email, location, nearby_amenity, capacity, rating} = req.body;
        // console.log(req.files)
        let array = [];
        req.files.forEach(function(json){
            array.push({picture: json.filename});
            // console.log(json.filename);
        })
        const academy = await Academy.create({
            name,
            telephone_number,
            address,
            email,
            location,
            nearby_amenity,
            rating,
            academy_pictures: array
        })
        return res.json(academy);
    }
}
