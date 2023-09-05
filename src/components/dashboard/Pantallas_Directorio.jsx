import React, { useState } from "react";
import "./ConfPantallaDirectorio.css";

function ConfPantallaDirectorio() {
  const [pantallas, setPantallas] = useState([
    {
      nombre: "Directorio 1",
      imagen: "imagen1.jpg",
      posicion: {
        x: 0,
        y: 0,
      },
    },
    {
      nombre: "Directorio 2",
      imagen: "imagen2.jpg",
      posicion: {
        x: 0,
        y: 0,
      },
    },
    // Add more directory objects as needed
  ]);

  const handleImagenChange = (index, e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPantallas((prevPantallas) => {
        const updatedPantallas = [...prevPantallas];
        updatedPantallas[index].imagen = reader.result;
        return updatedPantallas;
      });
    };
    reader.readAsDataURL(file);
  };

  const handlePosicionChange = (index, e) => {
    const { name, value } = e.target;
    setPantallas((prevPantallas) => {
      const updatedPantallas = [...prevPantallas];
      updatedPantallas[index].posicion[name] = parseInt(value);
      return updatedPantallas;
    });
  };

  return (
    <div>
      <h2>Configuración de Pantallas de Directorio</h2>
      <div className="pantallas-container">
        {pantallas.map((pantalla, index) => (
          <div className="pantalla" key={index}>
            <h3>{pantalla.nombre}</h3>
            {pantalla.imagen && (
              <img src={pantalla.imagen} alt={pantalla.nombre} />
            )}
            <div className="form-group">
              <label htmlFor={`imagen-${index}`}>Imagen:</label>
              <input
                type="file"
                id={`imagen-${index}`}
                name={`imagen-${index}`}
                onChange={(e) => handleImagenChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`posicion-x-${index}`}>Posición X:</label>
              <input
                type="number"
                id={`posicion-x-${index}`}
                name="x"
                value={pantalla.posicion.x}
                onChange={(e) => handlePosicionChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor={`posicion-y-${index}`}>Posición Y:</label>
              <input
                type="number"
                id={`posicion-y-${index}`}
                name="y"
                value={pantalla.posicion.y}
                onChange={(e) => handlePosicionChange(index, e)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="live-preview">
        <h3>Previsualización en Vivo</h3>
        {pantallas.map((pantalla, index) => (
          <div className="preview" key={index}>
            <h4>{pantalla.nombre}</h4>
            {pantalla.imagen && (
              <img src={pantalla.imagen} alt={pantalla.nombre} />
            )}
            <div
              className="preview-overlay"
              style={{
                top: pantalla.posicion.y,
                left: pantalla.posicion.x,
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConfPantallaDirectorio;
