import {User} from "./User.js"
import fs from "fs/promises"
import {encriptar} from "./criptografia.js"




export class UserManager{

    #users
    #ruta

    constructor(ruta){
        this.#ruta=ruta
        this.#users=[]
    }

    async #leer(){
        const json= await fs.readFile(this.#ruta,'utf-8')
        this.#users=JSON.parse(json)
    }
    async #escribir(){    //el simbolo #antes es para hacerla privada y que no aparezca cuando llamo a la funcion
        const nuevoJson=JSON.stringify(this.#users,null,2)
        await fs.writeFile(this.#ruta,nuevoJson)

    }

    async crearUsuario({nombre, apellido, username, password}){
        await this.#leer()
        const user= new User({nombre, apellido, username, password: encriptar(password)})
        this.#users.push(user)
        await this.#escribir()
        return user
    }
    async loguear({username,password}){
        await this.#leer() //leemos para asegurarnos que este todo sincronizado
        const user = this.#users.find(u => u.username===username )
        const encriptada = encriptar(password)
        if (encriptada !== user.password) {
            throw new Error ("Credenciales invalidas ")
        }else{
            return user
        }

    }
}