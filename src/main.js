import { UserManager } from "./UserManager.js"


const um = new UserManager("./database/usuarios.json")

const user= await um.crearUsuario({
    nombre:"luis",
    apellido: "diaz",
    username: "luisdiaz",
    password: "123456"
})

console.log(user)

const loggedUser = await um.loguear(
    {
        username:"luisdiaz",
        password:"123456"
    }
)

console.log(loggedUser)