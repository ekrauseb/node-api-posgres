const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: '11_libros',
  password: 'root',
  port: 5432,
})
const getGeneros = (request, response) => {
    pool.query('SELECT * FROM generos', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const getLibros = (request, response) => {
    pool.query('SELECT * FROM libros', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createGenero =  (request, response) => {  
    const { generonombre } = request.body
     pool.query(
      'INSERT INTO generos (generonombre) VALUES ($1)', [generonombre], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(`genero añadido `)
      })
    }

  const createLibro = (request, response) => {
    const { librotitulo, libroautor, genero, portadalibro } = request.body
  
    pool.query('INSERT INTO libros (librotitulo, libroautor, genero, portadalibro) VALUES ($1,$2,$3,$4)', [librotitulo, libroautor, genero, portadalibro], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`libro añadido `)
    })
  }
  
  const updateGenero = (request, response) => {
    const { generoid, generonombre } = request.body
  
    pool.query(
      'UPDATE generos SET  generonombre = $2 WHERE generoid = $1',
      [ generoid, generonombre],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`genero modificado`)
      }
    )
  }
  
  const updateLibro = (request, response) => {
    const { libroid, librotitulo , libroautor3, genero, portadalibro } = request.body
  
    pool.query(
      'UPDATE libros SET  librotitulo = $2, libroautor=$3, genero=$4, portadalibro=$5 WHERE libroid = $1',
      [ libroid, librotitulo , libroautor3, genero, portadalibro],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`genero modificado`)
      }
    )
  }

  const deleteGenero = (request, response) => {
    const { generoid } = request.body
  
    pool.query('DELETE FROM generos WHERE generoid = $1', [generoid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`genero deleted `)
    })
  }
  const deleteLibro = (request, response) => {
    const { libroid } = request.body

    pool.query('DELETE FROM generos WHERE libroid = $1', [libroid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`libro deleted `)
    })
  }

  
  



  module.exports = {
    getGeneros,
    getLibros,
    createGenero,
    createLibro,
    updateGenero,
    updateLibro,
    deleteGenero,
    deleteLibro
  }

  