import { pool } from "./database.js";

class LibroController{

    async getAll(req,res) {
        const [result] = await pool.query('SELECT * FROM libros');
        res.json(result);
    }


    async getOne(req,res) {
        const libroId = req.params.id;
        const [result] = await pool.query(`SELECT * FROM libros WHERE id=(?)`,[libro.id]);
        res.json(result);
    }




    async add(req,res){
        const libro = req.body;
        const [result] = await pool.query(`INSERT INTO Libros (nombre,autor,categoria,año-publicacion,ISBN) VALUES (?,?,?;?;?)`,[libro.nombre,libro.autor,libro.categoria,libro.año-publicacion,libro.ISBN]);
        res.json({"Id insertado": result.insertId});
    }

    async delete(req,res){
        const libro = req.body;
        const [result] = await pool.query(`DELETE FROM Libros WHERE id=(?)`,[libro.ISBN]);
        res.json({"Registros eliminados": result.affectedRows});
    }


    async update(req,res){
        const libro = req.body;
        const [result] = await pool.query(`UPDATE Libros SET nombre=(?), autor=(?), categoria=(?), año-publicacion=(?), ISBN=(?) WHERE id=(?)`,[libro.nombre,libro.autor,libro.categoria,libro.año-publicacion,libro.ISBN, libro.id]);
        res.json({"Registros actualizados": result.changedRows});
    }
}

export const libro = new LibroController();
