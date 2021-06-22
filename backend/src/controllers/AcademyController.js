const Academy = require('../models/Academy');

module.exports = {
    async createAcademy(req, res){
        const {name, telephone_number, address, email, location, nearby_amenity, capacity, rating} = req.body;
        // const { filename } = req.files;

        const academy = await Academy.create({
            name,
            telephone_number,
            address,
            email,
            location,
            nearby_amenity,
            capacity,
            rating,
            academy_pictres: req.files
        })
        console.log('academy controller')
        return res.json(academy);
    }
}

// name: String,
// telephone_number: String,
// address: String,
// email: String,
// location: String,
// nearby_amenity: String,
// capacity: Number,
// rating: Number,