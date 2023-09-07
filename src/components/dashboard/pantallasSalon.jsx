import React, { useState } from "react";
import { ChromePicker } from "react-color"; // Importa ChromePicker de react-color

function PantallasSalon() {
  const [screen1AspectRatio, setScreen1AspectRatio] = useState("16:9");
  const [screen2AspectRatio, setScreen2AspectRatio] = useState("9:16");
  const [templateColor, setTemplateColor] = useState("#D1D5DB");
  const [fontStyle, setFontStyle] = useState("Arial");
  const [fontColor, setFontColor] = useState("#000000"); // Color de letra
  const [showColorPicker, setShowColorPicker] = useState(false); // Estado para mostrar/ocultar el selector de color
  const [showFontColorPicker, setShowFontColorPicker] = useState(false); // Estado para mostrar/ocultar el selector de color de letra

  const handleScreen1Default = () => {
    setScreen1AspectRatio("16:9");
  };

  const handleScreen1UseThis = () => {
    // Lógica para aplicar la relación de aspecto de pantalla 1 al diseño.
  };

  const handleScreen2Default = () => {
    setScreen2AspectRatio("9:16");
  };

  const handleScreen2UseThis = () => {
    // Lógica para aplicar la relación de aspecto de pantalla 2 al diseño.
  };

  const handleTemplateColorChange = () => {
    // Mostrar u ocultar el selector de color de plantilla cuando se hace clic en "Seleccionar Color"
    setShowColorPicker(!showColorPicker);
  };

  const handleFontColorChange = () => {
    // Mostrar u ocultar el selector de color de letra cuando se hace clic en "Seleccionar Color"
    setShowFontColorPicker(!showFontColorPicker);
  };

  const handleColorChange = (color) => {
    // Manejar el cambio de color y actualizar el estado del color correspondiente
    if (showColorPicker) {
      setTemplateColor(color.hex);
    } else if (showFontColorPicker) {
      setFontColor(color.hex);
    }
  };

  const handleFontStyleChange = (e) => {
    setFontStyle(e.target.value);
  };

  const handlePreviewClick = () => {
    // Lógica para la vista previa del diseño con las opciones seleccionadas.
  };

  return (
    <section className="px-32">
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
              className="mb-2 bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
            >
              Set Default
            </button>
            <button
              onClick={handleScreen1UseThis}
              className="mt-2 bg-gray-300 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full"
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
                  className="bg-blue-500 hover.bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
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
                  className="bg-blue-500 hover.bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
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
                      className="mt-2 bg-blue-500 hover.bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
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
              <label className="text-white dark:text-gray-200">
                Estilo de texto
              </label>
              <select
                value={fontStyle}
                onChange={handleFontStyleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark.bg-gray-800 dark.text-gray-300 dark.border-gray-600 focus.border-blue-500 dark.focus.border-blue-500 focus.outline-none focus.ring"
              >
                <option>Arial</option>
                <option>Times New Roman</option>
                <option>Verdana</option>
                <option>Rockwell</option>
                {/* Agregar más opciones de fuente aquí */}
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handlePreviewClick}
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover.bg-pink-700 focus.outline-none focus.bg-gray-600"
            >
              Vista Previa
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PantallasSalon;
