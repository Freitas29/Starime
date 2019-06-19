const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Token único para o site
const authConfig = require('../config/auth')

require('../models/User')
const User = new mongoose.model('User')

const generateToken = (params = {}) =>{
    return jwt.sign(params,authConfig.secret,{
        expiresIn: 864000,
    })
}

module.exports = {
    async register(req,res){
        const { email } = req.body
        
        try{
            if (await User.findOne( { email }))
                return res.status(400).send({error: 'Usuário já cadastrado'})

            const user = await User.create(req.body)

            //Essa linha é para não retornar a senha após ele ser cadastrado
            user.password = undefined
            return res.send({
                user,
                token: generateToken({ id: user.id }),
            })

        }catch (err){
            return res.status(400).send({error: `Registration failed: ${err}`})
        }
    },

    async login(req,res){
        const {email,password} = req.body

        const user = await User.findOne({email})

        if (!user)
            return res.status(400).send({error: "Usuário não encontrado"})

        if (!await bcrypt.compare(password, user.password))
            return res.status(400).send({error: "Senha incorreta"})

        user.password = undefined

        const token = 

        res.send({
            user, 
            token: generateToken({ id: user.id }),
        })
    }

}