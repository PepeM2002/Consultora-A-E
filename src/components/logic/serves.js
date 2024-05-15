
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4321n;
const DATA_FILE = path.join(__dirname, '/src/components/logic/cursos.json');

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para manejar las solicitudes POST del formulario y guardar los datos en el archivo JSON
app.post('/scr/components/Cursos/admin', (req, res) => {
    // Extraer datos del cuerpo de la solicitud
    const imagen = req.body.imagen;
    const titulo = req.body.titulo;
    const precio = req.body.precio;
    const descripcion = req.body.descripcion;

    // Crear un objeto de curso
    const curso = {
        imagen: imagen,
        titulo: titulo,
        precio: precio,
        descripcion: descripcion
    };

    // Leer el archivo JSON existente
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        // Convertir el contenido del archivo a un arreglo de cursos
        let cursos = JSON.parse(data);

        // Agregar el nuevo curso al arreglo
        cursos.push(curso);

        // Escribir los cursos actualizados en el archivo JSON
        fs.writeFile(DATA_FILE, JSON.stringify(cursos, null, 4), 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir en el archivo JSON:', err);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }

            console.log('Curso guardado:', curso);
            res.json(curso);
        });
    });
});

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
