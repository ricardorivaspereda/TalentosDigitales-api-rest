/* servidor de la api-rest */
import express from "express";
/* para mostrar por consola la solicitud de clientes*/
import morgan from "morgan";
import { router } from "./routes.js";

/*creo el servidor de la api-rest*/
const app = express();
/*puerto para escuchar la solicitud*/
app.set('port', 2000);

app.use(morgan('dev'));
/*metodo q permite interpretar objetos json de las solicitudes que se van enviando*/
app.use(express.json());
app.use(router);

/* indicamos a nuestra app en que puerto se va a estar ejecutando */
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

