import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzD--npY_6fZcXH-8CzBV7UGzPBqg85y8",
  authDomain: "upper-a544e.firebaseapp.com",
  projectId: "upper-a544e",
  storageBucket: "upper-a544e.appspot.com",
  messagingSenderId: "665713417470",
  appId: "1:665713417470:web:73f7fb8ee518bea35999af",
  measurementId: "G-QTFQ55YY5D",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function AltaEventos() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [alertaEnviada, setAlertaEnviada] = useState(false);

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const [sliderRef] = useKeenSlider();

  // Función para enviar los datos a Firebase
  const enviarDatosAFirebase = () => {
    const nombreEvento = document.getElementById("floating_name").value;
    const tipoEvento = document.getElementById("floating_event").value;
    const lugar = document.getElementById("floating_floor").value;
    const horaInicio = document.getElementById("hourSelectorInicio").value;
    const minutoInicio = document.getElementById("minuteSelectorInicio").value;
    const horaFinal = document.getElementById("hourSelectorFinal").value;
    const minutoFinal = document.getElementById("minuteSelectorFinal").value;

    const fechaInicio = new Date(value.startDate);
    fechaInicio.setHours(horaInicio, minutoInicio, 0, 0); // Establecer los segundos en 0
    const fechaFinal = new Date(value.endDate);
    fechaFinal.setHours(horaFinal, minutoFinal, 0, 0); // Establecer los segundos en 0

    // Accede a la colección 'eventos' en Firestore y agrega un nuevo documento
    firebase
      .firestore()
      .collection("eventos")
      .add({
        nombreEvento,
        tipoEvento,
        lugar,
        horaInicio,
        minutoInicio,
        horaFinal,
        minutoFinal,
        fechaInicio,
        fechaFinal, // Use the date object for the end date
      })
      .then(() => {
        // Limpiar campos después de enviar
        document.getElementById("floating_name").value = "";
        document.getElementById("floating_event").value = "";
        document.getElementById("floating_floor").value = "";

        document.getElementById("hourSelectorInicio").value = "00";
        document.getElementById("minuteSelectorInicio").value = "00";
        document.getElementById("hourSelectorFinal").value = "00";
        document.getElementById("minuteSelectorFinal").value = "00";

        // Mostrar la alerta
        setAlertaEnviada(true);

        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
          setAlertaEnviada(false);
        }, 6000);
      })
      .catch((error) => {
        console.error("Error al enviar datos a Firebase:", error);
      });
  };

  return (
    <section className="px-32">
      <div>
        <div className="p-5">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
            Alta de eventos
          </h1>
        </div>
        <section class="grid grid-cols-2 gap-4">
          {/* Detalles evento */}
          <div class="bg-gray-300 p-4">
            <form>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre del evento
                </label>
              </div>

              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_event"
                  id="floating_event"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_event"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Tipo de evento
                </label>
              </div>

              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_floor"
                  id="floating_floor"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_floor"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Lugar
                </label>
              </div>

              <div class="bg-gray-300 p-4">
                <h4 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 ">
                  Seleccione los días:
                </h4>
                <Datepicker
                  useRange={false}
                  value={value}
                  onChange={handleValueChange}
                />
                <h4 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 pt-2 ">
                  Seleccione las horas:
                </h4>
                <div className="flex items-center space-x-4">
                  <div className="text-gray-700 font-medium">
                    Hora de Inicio:
                  </div>
                  <div className="relative">
                    <div className="text-gray-700 font-medium">Horas:</div>
                    <select
                      className="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="hourSelectorInicio"
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i.toString().padStart(2, "0")}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <div className="text-gray-700 font-medium">Minutos:</div>
                    <select
                      className="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="minuteSelectorInicio"
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={i.toString().padStart(2, "0")}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-gray-700 font-medium">
                    Hora de Final:
                  </div>
                  <div className="relative">
                    <div className="text-gray-700 font-medium">Horas:</div>
                    <select
                      className="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="hourSelectorFinal"
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i.toString().padStart(2, "0")}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                  <div className="relative">
                    <div className="text-gray-700 font-medium">Minutos:</div>
                    <select
                      className="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="minuteSelectorFinal"
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={i.toString().padStart(2, "0")}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                </div>
                <button
                  onClick={enviarDatosAFirebase}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Enviar
                </button>
                {alertaEnviada && (
                  <div className="mt-4 text-green-500">
                    Los datos se enviaron correctamente.
                  </div>
                )}
              </div>
            </form>
          </div>
          {/* Slider */}
          <div class="bg-gray-300 p-4">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <img src="/img/promo1.jpg" />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img src="/img/promo1.jpg" />
              </div>
              <div className="keen-slider__slide number-slide3">
                <img src="/img/promo1.jpg" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
export default AltaEventos;
