import axios from "axios";
import { ApiError } from "../libs/apiError";

export const auth = async (req: any, res: any, next: any) => {
    let header = req.header("authorization");

    let msg = new ApiError(403, "Token inválido", "Token inválido", {});

    if (header == undefined) {
        console.log("Token não encontrado!");
        res.status(403).json(msg);
    } else {
        console.log("Token encontrado!");

        const response = await verifyRequest(header);

        if (response?.name === "JsonWebTokenError") {
            res.status(404).json(msg);
        } else {
            next(); // permite realizar requisão para proxima rota de qualquer method
        }
    }
};
// verificar token utilizando microserviço
const verifyRequest = async (authorization_header: any) => {
    const { url, headers } = {
        url: "http://localhost:3000/service-auth/verify",
        headers: { Authorization: authorization_header }
    };

    const response = await axios.get(url, { headers });

    return response.data;
};
