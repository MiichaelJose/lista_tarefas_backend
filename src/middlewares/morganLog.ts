import morgan from "morgan";
import fs from "fs";
import path from "path";
import os from "os";

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

console.log(`Server IP Address: ${getServerIP()}`);

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "../logs/access.log"),
    { flags: "a" }
);

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

export default morgan(customFormat, { stream: accessLogStream });
