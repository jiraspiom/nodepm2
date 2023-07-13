import fastify from 'fastify'
import cors from '@fastify/cors'
import { usuarioRoutes } from './routes/usuario'


const app = fastify()

app.register(cors,{
    origin: true
})

app.register(usuarioRoutes)

app.listen({port: 3001, host: '0.0.0.0'}).then(()=>{
    console.log('rodando porta 3001')
})