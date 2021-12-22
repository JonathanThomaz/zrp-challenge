const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon'

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
        res.send(error).status(500)        
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
