import * as express from "express";
import { myDB } from "./db";
import Users, {UserModel } from "./models/userModel";
import {Server, Path, GET, PathParam, POST } from "typescript-rest";

class Sample {

    //I am not sure if this part is correct:
    constructor() {
        myDB.initDB();
    }
    //////

    @Path("/hello:name")
    @GET
        sayHello(@PathParam('name') name: string ): string {
        return "Hello " + name;
    }


    /////CRUD FUNCTIONALITY:
   
    //POST REQUEST:
    @POST
        @Path('post/users')
        public async createUser (newRecord: UserModel) {
            try{
                var users = await Users.create(newRecord);
                return users;
            }catch(e){
                console.log(e);
            }
        }


};

let app: express.Application = express(); 
Server.buildServices(app);

app.listen(3000, function() {
    console.log('Rest Server listening on port 3000!');
});