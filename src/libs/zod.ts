import { createConfig } from "express-zod-api";

const ENV: any = process.env;

const config = createConfig({
    server: {
      listen: ENV.PORT, // port, UNIX socket or options
    },
    cors: true,
    logger: { level: "debug", color: true },
});

export default config