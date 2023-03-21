
import axios from "axios";


export async function usersLine (){
    
    let usuarios = await axios.get("http://localhost:3001/user")

}

