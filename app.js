const express = require("express");
const app = express();
const path = require("path")
// el perto 3000 lo tenemos libre para correr una app de manera local
const port = 3030;

// la ubicacion de nuestros archivos estaticos
const publicPath = path.resolve(__dirname, 'public');
app.use( express.static(publicPath) );


app.listen(port, () => {
    // siempre poner el puerto en el que esta corriendo para saber donde tengo que ir al navegador
    console.log(`Servidor corriendo en el puerto ${port}!!`);
    }
);


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
    }
);

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
    }
);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
    }
);