import mysqlConnection from 'mysql2/promise';

const properties = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
};

/*xporto mi conexion a la BD*/
export const pool = mysqlConnection.createPool(properties);


