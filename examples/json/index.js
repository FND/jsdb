const fs = require('fs')
const JSDB = require('../..')

// console.log(languages)

const db = JSDB.open('db')

// If the data has not been populated yet, populate it.
if (!db.countries) {
  const countries = JSON.parse(fs.readFileSync('./countries.json', 'utf-8'))
  db.countries = countries
}

// Query the data.
const countriesThatSpeakEnglish = db.countries.where('languages').includes('Kurdish').get()

console.log(countriesThatSpeakEnglish)