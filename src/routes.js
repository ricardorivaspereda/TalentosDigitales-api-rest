import { Router } from "express";
import { libro } from "./controller.js";

export const router = Router();

router.get('/libros', libro.getAll);
router.post('/libros', libro.add);
router.delete('/libros/:id', libro.delete);
router.put('/libros/:id', libro.update);
