import 'reflect-metadata'
import {createExpressServer} from 'routing-controllers'
import { DefaultController } from './DefaultController'

async function run(){
    const server = createExpressServer({
        controllers: [DefaultController],
        routePrefix: '/v1',
        cors: true
    })

    const port = process.env.PORT || 3001
    server.listen(port, () => { console.log(`listening on ${port}`) })
}

run()
.catch(e => {
    console.error(e)
    process.exit()
})