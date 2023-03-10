import { UserManager } from "./UserManager.js"


const um = new UserManager("./database/usuarios.json")
//await um.reset()

/*try{
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
    
} catch (error){
    console.log(error.message)
}*/

/*await um.crearUsuario(
    {
        nombre:"roberto",
        apellido: "rodriguez",
        username: "rober",
        password: "131313"
    }
)

await um.loguear({username:"juani",password:"112233"})

await um.crearUsuario(
    {
        nombre:"luis",
        apellido: "paz",
        username: "luispaz",
        password: "123456"
    }
)
await um.crearUsuario(
    {
        nombre:"carlos",
        apellido: "gomez",
        username: "carli",
        password: "987654"
    }
)


const loggedUser = await um.loguear(
    {
        username:"carli",
        password:"987654"
    }
)*/
await um.loguear({
    username:"luispaz",
        password:"3462546"
})
