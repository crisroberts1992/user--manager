import crypto from "crypto"

const salt = crypto.randomBytes(128).toString("base64") //un salt sera un codigo secreto unico para cada encriptado de contraseña
export function encriptar(sinEncriptar){
    const encriptado= crypto.createHmac("sha256", salt).update(sinEncriptar).digest("hex")
    return encriptado

}