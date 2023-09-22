import React, { useState } from "react";

function Publicidad() {
  // Estados para imágenes, tiempos y otros datos de configuración
  const [imagenesSalon, setImagenesSalon] = useState([null]);
  const [imagenesDirectorio, setImagenesDirectorio] = useState([null]);
  const [tiemposSalon, setTiemposSalon] = useState([{ horas: 0, minutos: 0 }]);
  const [tiemposDirectorio, setTiemposDirectorio] = useState([
    { horas: 0, minutos: 0 },
  ]);

  // Función para manejar la selección de imágenes
  const handleImagenSelect = (event, tipo) => {
    const file = event.target.files[0];

    if (tipo === "salon") {
      const nuevasImagenesSalon = [...imagenesSalon];
      nuevasImagenesSalon[imagenesSalon.length - 1] = file;
      setImagenesSalon(nuevasImagenesSalon);
    } else if (tipo === "directorio") {
      const nuevasImagenesDirectorio = [...imagenesDirectorio];
      nuevasImagenesDirectorio[imagenesDirectorio.length - 1] = file;
      setImagenesDirectorio(nuevasImagenesDirectorio);
    }
  };

  // Función para eliminar una imagen
  const eliminarImagen = (index, tipo) => {
    if (tipo === "salon") {
      const nuevasImagenesSalon = [...imagenesSalon];
      nuevasImagenesSalon.splice(index, 1);
      setImagenesSalon(nuevasImagenesSalon);
    } else if (tipo === "directorio") {
      const nuevasImagenesDirectorio = [...imagenesDirectorio];
      nuevasImagenesDirectorio.splice(index, 1);
      setImagenesDirectorio(nuevasImagenesDirectorio);
    }
  };

  // Función para manejar la configuración de tiempo
  const handleTiempoChange = (event, index, tipo) => {
    const { name, value } = event.target;
    const newTiempos =
      tipo === "salon" ? [...tiemposSalon] : [...tiemposDirectorio];
    newTiempos[index][name] = parseInt(value || 0);
    tipo === "salon"
      ? setTiemposSalon(newTiempos)
      : setTiemposDirectorio(newTiempos);
  };

  // Función para mostrar la vista previa
  const handlePreviewClick = () => {
    // Lógica para mostrar la vista previa de las imágenes con los tiempos configurados
  };

  // Renderizar los campos de selección de imágenes
  const renderCamposImagenes = (imagenes, tiempos, tipo) => {
    return (
      <div>
        {imagenes.map((imagen, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">
              {tipo === "salon" ? "Salón de Eventos" : "Directorio"} - Imagen{" "}
              {index + 1}
            </h3>
            <div className="mt-4">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id={`imagen${tipo}-${index}`}
                onChange={(event) => handleImagenSelect(event, tipo)}
              />
              <label
                htmlFor={`imagen${tipo}-${index}`}
                className="block p-3 border rounded-lg cursor-pointer text-blue-500 border-blue-500 hover:bg-blue-100 hover:text-blue-700"
              >
                Seleccionar Imagen
              </label>
              {imagen && (
                <div className="flex items-center mt-2">
                  <span className="block">{imagen.name}</span>
                  <button
                    onClick={() => eliminarImagen(index, tipo)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
            <div className="mt-4">
              <label className="text-gray-800">Tiempo de visualización:</label>
              <div className="flex mt-2">
                <input
                  type="number"
                  name="horas"
                  min="0"
                  max="24"
                  value={tiempos[index].horas || 0}
                  onChange={(event) => handleTiempoChange(event, index, tipo)}
                  className="w-16 px-2 py-1 border rounded-md border-gray-300 focus:outline-none"
                />
                <span className="mx-2">horas</span>
                <input
                  type="number"
                  name="minutos"
                  min="0"
                  max="59"
                  value={tiempos[index].minutos || 0}
                  onChange={(event) => handleTiempoChange(event, index, tipo)}
                  className="w-16 px-2 py-1 border rounded-md border-gray-300 focus:outline-none"
                />
                <span className="ml-2">minutos</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="px-8 py-12">
      <div>
        {/* Selección de pantallas */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            CONFIGURACIÓN DE PUBLICIDAD
          </h2>
          <p className="text-gray-600">
            Ingresar imágenes que serán desplegadas cuando no se cuente con
            eventos.
          </p>
        </div>

        {/* Configuración de Salón de Eventos */}
        <div className="mb-8">
          {renderCamposImagenes(imagenesSalon, tiemposSalon, "salon")}
          {imagenesSalon.length < 10 && (
            <div className="mt-4">
              <button
                onClick={() => {
                  setImagenesSalon([...imagenesSalon, null]);
                  setTiemposSalon([...tiemposSalon, { horas: 0, minutos: 0 }]);
                }}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
              >
                + Agregar Imagen
              </button>
            </div>
          )}
        </div>

        {/* Configuración de Directorio */}
        <div className="mb-8">
          {renderCamposImagenes(
            imagenesDirectorio,
            tiemposDirectorio,
            "directorio"
          )}
          {imagenesDirectorio.length < 10 && (
            <div className="mt-4">
              <button
                onClick={() => {
                  setImagenesDirectorio([...imagenesDirectorio, null]);
                  setTiemposDirectorio([
                    ...tiemposDirectorio,
                    { horas: 0, minutos: 0 },
                  ]);
                }}
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
              >
                + Agregar Imagen
              </button>
            </div>
          )}
        </div>

        {/* Botón de vista previa */}
        <div className="text-center">
          <button
            onClick={handlePreviewClick}
            className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
          >
            Vista Previa
          </button>
        </div>
      </div>
    </section>
  );
}

export default Publicidad;
