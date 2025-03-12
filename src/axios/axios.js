import axios from "axios";

const api = axios.create({
    baseURL:"http://10.89.240.89:5000/api/v1",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=> api.post("/login",user),
    postCadastro:(user)=> api.post("/user",user),
    postCadastroIngressos:(ing)=> api.post("/ing",ing),
    postCadastroEvento:(evento)=> api.post("/evento",evento),
    postCadastroOrg:(org)=> api.post("/org",org),

    
}
export default sheets;