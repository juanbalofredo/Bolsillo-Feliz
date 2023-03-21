
import axios from "axios";


export async function usersLine (){
    
    let usuarios = await axios.get("http://localhost:3001/user")

   
    console.log(usuarios.data.sort((a, b) => new Date(a.updatedAt).getTime() > new Date(b.updatedAt).getTime()));
}

