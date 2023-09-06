import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
function AltaEventos() {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
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
          <div class="bg-gray-300 p-4">Elemento 2</div>
          <div class="bg-gray-300 p-4">
            <h4 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 ">
              Seleccione los Dias
            </h4>
            <Datepicker
              useRange={false}
              value={value}
              onChange={handleValueChange}
            />

            <div
              class="relative"
              id="timepicker-inline-24"
              data-te-input-wrapper-init
            >
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="form3"
              />
              <label
                for="form3"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Select a time
              </label>
            </div>
          </div>

          <div class="bg-gray-300 p-4">Elemento 4</div>
        </section>
      </div>
    </section>
  );
}
export default AltaEventos;
