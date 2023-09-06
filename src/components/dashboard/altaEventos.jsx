import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
function AltaEventos() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const [sliderRef] = useKeenSlider();

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
                  Nombre de evento
                </label>
              </div>

              <div class="grid md:grid-cols-2 md:gap-6">
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
                    Piso
                  </label>
                </div>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="floating_descripcion"
                  id="floating_descripcion"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_descripcion"
                  class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Descripción
                </label>
              </div>
            </form>

            <fieldset>
              <div class="flex items-center mb-4">
                <input
                  id="checkbox-2"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 "
                />
                <label
                  for="checkbox-2"
                  class="ml-2 text-sm font-medium text-gray-900"
                >
                  Texto de salon
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  id="checkbox-3"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checkbox-3"
                  class="ml-2 text-sm font-medium text-gray-900 "
                >
                  Texto de piso
                </label>
              </div>
            </fieldset>
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
          {/* Hora y Dias */}
          <div class="bg-gray-300 p-4">
            <h4 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 ">
              Seleccione los Dias
            </h4>
            <Datepicker
              useRange={false}
              value={value}
              onChange={handleValueChange}
            />
            <h4 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 pt-2 ">
              Seleccione las horas
            </h4>
            <div className=" flex justify-between px-20">
              <div>
                <div class="flex items-center space-x-4">
                  <div class="text-gray-700 font-medium">Hora de Inicio:</div>
                  <div class="relative">
                    <div class="text-gray-700 font-medium">Horas:</div>
                    <select
                      class="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="hourSelector"
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i.toString().padStart(2, "0")}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                  <div class="relative">
                    <div class="text-gray-700 font-medium">Minutos:</div>
                    <select
                      class="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="minuteSelector"
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={i.toString().padStart(2, "0")}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="text-gray-700 font-medium">Hora de Final:</div>
                  <div class="relative">
                    <div class="text-gray-700 font-medium">Horas:</div>
                    <select
                      class="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="hourSelector"
                    >
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i.toString().padStart(2, "0")}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                  <div class="relative">
                    <div class="text-gray-700 font-medium">Minutos:</div>
                    <select
                      class="block appearance-none w-20 bg-white border border-gray-300 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="minuteSelector"
                    >
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={i.toString().padStart(2, "0")}>
                          {i.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Pantallas */}
          <div class="bg-gray-300 p-4">Elemento 4</div>
        </section>
      </div>
    </section>
  );
}
export default AltaEventos;
