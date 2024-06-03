import axios from 'axios';

export const auth = async (req: any, res: any, next: any) => {
    let header = req.header("authorization");
    
    let msg = {
        msg: "Token não encontrado!"
    }

    if(header == undefined) {
        res.status(403).json(msg)
        console.log("Token não encontrado!");
    } else {
        console.log("Token encontrado!");
        verifyRequest(header)
        // permite realizar requisão para proxima rota de qualquer method
        next()
    }
}

const verifyRequest = async (authorization_header: any) => {
    const { url, headers } = {
        url: 'http://localhost:3001/verify',
        headers: {"Authorization": authorization_header}
    }

    await axios.get(url, { headers })
    .then(response => {
        console.log('Resposta do microserviço:', response.data);
    })
    .catch(error => {
        console.error('Erro ao consumir o microserviço:', error);
    });
}