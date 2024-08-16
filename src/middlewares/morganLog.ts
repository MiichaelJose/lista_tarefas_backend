import morgan from "morgan";
import fs from "fs";
import path from "path";
import os from "os";
import { ApiError } from "../libs/apiError";

// Função para obter o IP da máquina servidora
const getServerIP = () => {
    const networkInterfaces = os.networkInterfaces();
    for (const interfaceName in networkInterfaces) {
        const interfaceInfo: any = networkInterfaces[interfaceName];
        for (const info of interfaceInfo) {
            if (info.family === "IPv4" && !info.internal) {
                return info.address;
            }
        }
    }
    return "IP não encontrado";
};

// Exibindo o IP da máquina servidora
console.log(new ApiError(403, "Server IP Address: " + getServerIP(), "IP", {}));

// Cria um stream de escrita para o arquivo de log
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "../logs/access.log"),
    { flags: "a" }
);

// Função de formato personalizada
const customFormat = (tokens: any, req: any, res: any) => {
    return [
        `Date: ${tokens.date(req, res, "iso")}`,
        `Method: ${tokens.method(req, res)}`,
        `URL: ${tokens.url(req, res)}`,
        `Status: ${tokens.status(req, res)}`,
        `Response Time: ${tokens["response-time"](req, res)} ms`,
        `Content Length: ${tokens["content-length"]}`, // Acesso como string
        `Remote Address: ${tokens["remote-addr"](req, res)}`,
        `User Agent: ${tokens["user-agent"](req, res)}`
    ].join(" | ");
};

// Aplicando o formato personalizado e gravando no arquivo
export default morgan(customFormat, { stream: accessLogStream });
