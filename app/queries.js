export const CREATE_TABLE = `CREATE TABLE IF NOT EXISTS people (name VARCHAR(80));`

export const INSERT_NAME = `INSERT INTO people (name) VALUES (?);`

export const SELECT_NAMES = `SELECT * FROM people;`
