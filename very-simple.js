const fastify = require('fastify')()

fastify.get('/', async (request, reply) => {
    return { message: 'Hello, Fastify!'}
})

const opts = {
    host: 'localhost',
    port: 8080
}
fastify.listen(opts, (err) => {
    if (err) {
        console.error('Error starting server: ', err)
        process.exit(1)
    }
    console.log('Server is running on http://localhost:8080')
})