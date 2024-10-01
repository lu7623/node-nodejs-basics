const parseEnv = () => {
    const prefix = 'RSS_';
    const result = [];

    for (let key in process.env) {
        if (key.startsWith(prefix))
            result.push(`${key}=${process.env[key]}`);
    }
    console.log(result.join('; '));
};

parseEnv();