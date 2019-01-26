//require DB 
const pgp = require('pg-promise')({})
const db = pgp('postgres://localhost/ecommerce');

const userService = {};

userService.create = (first_name, last_name, email, city)=>{
  return db.none('INSERT INTO customers (first_name, last_name, email, city) VALUES (${first_name}, ${last_name},${email}, ${city})', {first_name, last_name, email, city})
}

userService.read = (id) =>{
  return db.one('SELECT * FROM customers WHERE id = ${id}', {id})
}

userService.update = (id, first_name, last_name, email, city)=>{
  return db.none('UPDATE customers SET first_name=${first_name},last_name = ${last_name}, email=${email}, city= ${city} WHERE id=${id}', {first_name, last_name, email, city, id})
}

userService.delete = (id)=>{
  return db.none('DELETE FROM orders WHERE customer_id = ${id}; DELETE from customers WHERE id = ${id}', {id})

}

module.exports = userService ;