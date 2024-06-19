export const verifyProxyHeader = (req: any, res: any, next: any) => {
    const header = req.headers['x-proxy-header'];

    if (header === 'secret-value') {
        next();
    } else {
        res.status(403).send('Acesso negado.');
    }
};
