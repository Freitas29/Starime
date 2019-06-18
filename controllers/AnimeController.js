const mongoose = require('mongoose')

const Anime = new mongoose.model('Animes')

module.exports = {
    async create(req,res){
        const anime = await Anime.create(req.body, (err,anime) => {
            if (err)  console.log("Error create anime:",err)
            return anime
        })
        return res.json(anime)
    },

    async index(req,res){
        const animes = await Anime.find();
        return res.json(animes)
    },
    
    async show(req,res){
        const anime = await Anime.findById(req.params.id, (err,anime) => {
            if (err) console.log("Error show anime: ", err)
            return anime
        })
        return res.json(anime)
    },

    async update(req,res){
        const anime = await Anime.findOneAndUpdate(req.params.id, req.body, {new: true}, (err,anime) => {
            if (err) console.log("Error update anime", err)
            return anime
        })
        return res.json(anime)
    },

    async delete(req,res){
        const anime = await Anime.findByIdAndRemove(req.params.id, (err,anime) => {
            if(err) console.log("error delete anime", err)
            return anime
        })
        return res.send()
    }
}