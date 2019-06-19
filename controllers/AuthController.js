const mongoose = require('mongoose')

require('../models/User')
const User = new mongoose.model('User')



module.exports = {
    async register(req,res){
        const { email } = req.body
        
        try{
            if (await User.findOne( { email }))
                return res.status(400).send({error: 'Usuário já cadastrado'})

            const user = await User.create(req.body)

            //Essa linha é para não retornar a senha após ele ser cadastrado
            user.password = undefined
            return res.send({user})

        }catch (err){
            return res.status(400).send({error: `Registration failed: ${err}`})
        }
    },

}