import axios from "axios";

const api = axios.create({
    baseURL:"http://10.89.240.88:5000/api/v1",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    postLogin:(user)=> api.post("/login",user),
    getEventos: () => api.get("/evento"),
    postCadastro:(user)=> api.post("/user",user),
    postCadastroIngressos:(ing)=> api.post("/ing",ing),
    postCadastroEvento:(evento)=> api.post("/evento",evento),
    postCadastroOrg:(org)=> api.post("/org",org),
    getIngressosPorEvento:(idEvento) => api.get(`ingresso/evento/${idEvento}`),
    createIngresso: (dados) => api.post("/ing", dados),
}
export default sheets;