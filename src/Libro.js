import React,{ useState, useEffect} from "react";

function Libros() {
    const [libros, setLibros] = useState([]);
    
    useEffect(() =>{
        fetch('http://localhost:8080/api/libros')
            .then(response => response.json())
            .then(data => setLibros(data));
},[]);

return(
    <div>
        <h2>Lista de Libros</h2>
        <ul>
            {libros.map(libro =>(
                <li key={libro.id}>{libro.id}|Titulo: {libro.titulo}|Paginas: {libro.paginas}</li>
            ))}
        </ul>
    </div>
);
}

export default Libros;