const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 3333
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon'

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/pokemon/:pokemon', async (req, res) => {
    const queryPokemon = req.params.pokemon
    try {
        const response = await axios.get(`${pokeApiUrl}/${queryPokemon}`)
        let arrayAbilities = []
        if (response.data.abilities) {
            response.data.abilities.forEach(ability => {
                arrayAbilities.push(ability.ability.name)
            })
        }
        arrayAbilities.sort((a, b) => {
            if (a.toUpperCase() < b.toUpperCase()) {
                return -1
            }
        });
        res.send(arrayAbilities)    
    } catch (error) {
        res.status(404).send(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
