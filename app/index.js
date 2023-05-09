import express from 'express'
import { faker } from '@faker-js/faker'
import mysql from 'mysql'

import { CREATE_TABLE, SELECT_NAMES, INSERT_NAME } from './queries.js'

const app = express()
const port = 3000

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'root',
  database: 'app',
  port: '3306',
})

connection.connect()

connection.query(CREATE_TABLE)

app.get('/', (req, res) => {
  const randomName = faker.name.fullName()

  connection.query(INSERT_NAME, [randomName])

  connection.query(SELECT_NAMES, (err, result) => {
    let usersList = ''

    result.forEach((user) => {
      usersList += `<li>${user.name}</li>`
    })

    res.send(`<h1>Full Cycle Rocks!</h1><ul>${usersList}</ul>`)
  })
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
