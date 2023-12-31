import React, { useState } from "react";
import { ChromePicker } from "react-color";
import Select from "react-select";

function PantallasSalon() {
  const [screen1AspectRatio, setScreen1AspectRatio] = useState("16:9");
  const [screen2AspectRatio, setScreen2AspectRatio] = useState("9:16");
  const [templateColor, setTemplateColor] = useState("#D1D5DB");
  const [fontColor, setFontColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFontColorPicker, setShowFontColorPicker] = useState(false);
  const [selectedFontStyle, setSelectedFontStyle] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);

  const fontStyleOptions = [
    { value: "Arial", label: "Arial" },
    { value: "Times New Roman", label: "Times New Roman" },
    { value: "Verdana", label: "Verdana" },
    { value: "Rockwell", label: "Rockwell" },
    { value: "Helvetica", label: "Helvetica" },
    { value: "Courier New", label: "Courier New" },
    { value: "Georgia", label: "Georgia" },
    { value: "Tahoma", label: "Tahoma" },
    { value: "Trebuchet MS", label: "Trebuchet MS" },
    { value: "Palatino", label: "Palatino" },
  ];

  // Función para obtener la fecha actual en formato dd/mm/yyyy
  const obtenerFecha = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Función para obtener la hora actual en formato hh:mm:ss
  const obtenerHora = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleScreen1Default = () => {
    setScreen1AspectRatio("16:9");
  };

  const handleScreen1UseThis = () => {};
  const handleScreen2UseThis = () => {};

  const handleScreen2Default = () => {
    setScreen2AspectRatio("9:16");
  };
  const handleTemplateColorChange = () => {
    setShowColorPicker(!showColorPicker);
  };
  const handleFontColorChange = () => {
    setShowFontColorPicker(!showFontColorPicker);
  };

  const handleColorChange = (color) => {
    if (showColorPicker) {
      setTemplateColor(color.hex);
    } else if (showFontColorPicker) {
      setFontColor(color.hex);
    }
  };

  const handleFontStyleChange = (selectedOption) => {
    setSelectedFontStyle(selectedOption);
  };

  const handlePreviewClick = () => {
    setPreviewVisible(true);
  };

  const handleClosePreview = () => {
    setPreviewVisible(false);
  };

  return (
    <section className="px-8 py-12">
      <div>
        <div className="p-5">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
            Ajuste de pantallas salon
          </h1>
        </div>

        <div className="flex justify-center space-x-44">
          {/* Pantalla 1 */}
          <div>
            <div
              className={`border border-black px-40 py-28 aspect-ratio-${screen1AspectRatio}`}
            >
              <h2>Tipo pantalla 1</h2>
              <p>Relación de aspecto: {screen1AspectRatio}</p>
            </div>
            <button
              onClick={handleScreen1Default}
              className="mb-2 bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full active:bg-gray-500"
            >
              Set Default
            </button>
            <button
              onClick={handleScreen1UseThis}
              className="mt-2 bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full active:bg-gray-500"
            >
              Use This
            </button>
          </div>

          {/* Pantalla 2 */}
          <div>
            <div
              className={`border border-black px-20 py-40 aspect-ratio-${screen2AspectRatio}`}
            >
              <h2>Tipo pantalla 2</h2>
              <p>Relación de aspecto: {screen2AspectRatio}</p>
            </div>
            <button
              onClick={handleScreen2Default}
              className="mb-2 bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Set Default
            </button>
            <button
              onClick={handleScreen2UseThis}
              className="mt-2 bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Use This
            </button>
          </div>
        </div>

        {/* Sección de personalización */}
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md bg-gray-800 mt-20">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white">
            Personalización del Template
          </h1>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">
                Color de la plantilla
              </label>
              <div className="flex items-center">
                <button
                  onClick={handleTemplateColorChange}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                >
                  Seleccionar Color
                </button>
                {showColorPicker && (
                  <div className="absolute z-10">
                    <ChromePicker
                      color={templateColor}
                      onChange={handleColorChange}
                    />
                    <button
                      onClick={handleTemplateColorChange}
                      className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                    >
                      Listo
                    </button>
                  </div>
                )}
                <div
                  className="w-8 h-8 rounded-full ml-4"
                  style={{ backgroundColor: templateColor }}
                ></div>
              </div>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Color de letra
              </label>
              <div className="flex items-center">
                <button
                  onClick={handleFontColorChange}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                >
                  Seleccionar Color
                </button>
                {showFontColorPicker && (
                  <div className="absolute z-10">
                    <ChromePicker
                      color={fontColor}
                      onChange={handleColorChange}
                    />
                    <button
                      onClick={handleFontColorChange}
                      className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                    >
                      Listo
                    </button>
                  </div>
                )}
                <div
                  className="w-8 h-8 rounded-full ml-4"
                  style={{ backgroundColor: fontColor }}
                ></div>
              </div>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Logo</label>
              <div className="flex items-center">
                <input
                  className="block w-full text-sm  border rounded-lg cursor-pointer  text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                  type="file"
                />
              </div>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Estilo de texto
              </label>
              <Select
                options={fontStyleOptions}
                value={selectedFontStyle}
                onChange={handleFontStyleChange}
                placeholder="Seleccionar estilo de texto"
              />
            </div>
          </div>

          {/* Sección para definir nombre de monitor de salones */}
          <div className="mt-6">
            <label className="text-white dark:text-gray-200">
              Definir nombre de monitor de salones:
            </label>
            <div className="flex mt-2">
              <div className="mr-4">
                <p>SALON A</p>
                <input
                  className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                  type="text"
                />
              </div>
              <div className="mr-4">
                <p>SALON B</p>
                <input
                  className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                  type="text"
                />
              </div>
              <div>
                <p>SALON C</p>
                <input
                  className="block w-full text-sm border rounded-lg cursor-pointer text-gray-400 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                  type="text"
                />
              </div>
            </div>
          </div>

          {/* Sección de vista previa */}
          {previewVisible && (
            <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-80 z-50">
              <div className="bg-white w-2/4  p-6 rounded-md shadow-lg text-black  ">
                <div className="flex justify-between items-baseline">
                  {/* Logo en la esquina superior izquierda */}
                  <div className="">
                    <img
                      src="/img/fiestamericana.png" // Reemplaza con la ruta de tu logo
                      alt="Logo"
                      className="h-15"
                    />
                  </div>
                  <h1 className=" text-4xl font-bold">Salon ejemplo</h1>
                </div>
                <div className="bg-gradient-to-t from-gray-50  to-white text-gray-50">
                  <div className="">
                    <div className="text-3xl font-extrabold    bg-gradient-to-r from-custom  to-Second px-20">
                      {/* Título */}
                      <h2 className=" text-white">Título del template</h2>
                    </div>
                    <div className="flex justify-between text-black">
                      {/* Imagen a la izquierda */}
                      <div className="flex items-center">
                        <img
                          src="/img/imgTemplate.png" // Reemplaza con la ruta de tu imagen
                          alt="imgTemplate"
                          className="h-15"
                        />
                        <div className=" space-y-5 pl-5 ">
                          <div>
                            <h1>Sesión:</h1>
                            <p>14:00 hrs</p>
                          </div>
                          <div>
                            <h1>Conferencia:</h1>
                            <p>
                              Impartido por el profesor Alejandro Grinberg, "La
                              transfiguración del lector y la lectura a raíz de
                              las nuevas tecnologías"
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Div solo para que la imagen este a la derecha */}
                      <div></div>
                    </div>
                    <div>
                      {/* Fecha y hora en la esquina inferior */}
                      <div className=" text-2xl font-semibold mt-1  text-center bg-gradient-to-r from-custom  to-Second text-white justify-between flex px-20 ">
                        <p>Fecha: {obtenerFecha()}</p>{" "}
                        {/* Reemplaza con la lógica para obtener la fecha */}
                        <p>Hora: {obtenerHora()}</p>{" "}
                        {/* Reemplaza con la lógica para obtener la hora */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón para volver atrás */}
                <button
                  onClick={handleClosePreview}
                  className="absolute top-4 right-4 bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
                >
                  Volver atrás
                </button>
              </div>
            </div>
          )}

          <div className="flex justify-end mt-6">
            <button
              onClick={handlePreviewClick}
              className="mx-5 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Vista Previa
            </button>
            <button
              onClick={handlePreviewClick}
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Guardar
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PantallasSalon;
