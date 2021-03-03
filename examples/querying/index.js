import JSDB from '../../index.js'

const db = JSDB.open('db')

// Create test/people.js with some sample data if it doesn’t already exist.
if (!db.people) {
  db.people = [
    {name: 'Aral', age: 43},
    {name: 'Laura', age: 34},
    {name: 'Osky', age: 8}
  ]
}

const peopleYoungerThan35 = db.people.where('age').isLessThan(35).get()

console.log('people under 35 result set', peopleYoungerThan35)

console.log('Adding object to result set (should not be persisted)')

peopleYoungerThan35.push({name: 'baby', age: 1})

console.log('people under 35 result set', peopleYoungerThan35)

console.log('db.people', db.people)

console.log('referencing first record from results', peopleYoungerThan35[0])

console.log('updating first record (should trigger save)')

peopleYoungerThan35[0].name = 'Laura Kalbag'

console.log('db.people', db.people)

console.log(db.people.where('age').isGreaterThan(35).and('name').is('Aral').get())

console.log(db.people.whereIsTrue('valueOf.name === "Aral" || (valueOf.name === "Laura Kalbag" && valueOf.age > 50)').get())

console.log(db.people.where('name').startsWith('a').get())

console.log(db.people.where('name').includes('ka').get())
