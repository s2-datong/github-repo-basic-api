import { Controller, Get, NotFoundError, Param } from "routing-controllers";
import axios from 'axios'

@Controller()
export class DefaultController{
    @Get('/repo/:username/:name')
    async GetReadme(@Param('username') username: string, @Param('name') reponame: string){
        const rawReadmeUrl = `https://raw.githubusercontent.com/${username}/${reponame}/master/README.md`
        try{
            const resp = await axios.get(rawReadmeUrl)
            const readme = resp.data
            return readme
        }
        catch(err){
            throw new NotFoundError('Readme file was not found')
        }
        
    }

    @Get('/hello')
    async hello(){
        return 'hello world'
    }
}