import axios from 'axios';

export const auth = async (req: any, res: any, next: any) => {
    let header = req.header('authorization');

    let msg = {
        msg: 'Token não encontrado!',
    };

    if (header == undefined) {
        console.log('Token não encontrado!');
        res.status(403).json(msg);
    } else {
        console.log('Token encontrado!');

        const response = await verifyRequest(header);

        if (response?.name === 'JsonWebTokenError') {
            res.status(404).json(msg);
        } else {
            // permite realizar requisão para proxima rota de qualquer method
            next();
        }
    }
};
// verificar token utilizando microserviço
const verifyRequest = async (authorization_header: any) => {
    const { url, headers } = {
        url: 'http://localhost:3000/service-auth/verify',
        headers: { Authorization: authorization_header },
    };

    const response = await axios.get(url, { headers });

    console.log('Resposta do microserviço:', response.data?.name);

    return response.data;
};
