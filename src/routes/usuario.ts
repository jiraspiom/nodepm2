import { FastifyInstance } from "fastify";

export async function usuarioRoutes(app: FastifyInstance){
    app.get('/usuario', async (req, res)=>{
        res.send('usuario rota ok')
    })
}