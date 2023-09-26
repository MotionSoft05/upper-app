import React, { useState, useEffect } from "react";
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

function ConsultaModEvento() {
  const [eventos, setEventos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [eventoEditado, setEventoEditado] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [edicionFechas, setEdicionFechas] = useState(false);

  useEffect(() => {
    const consultarEventos = async () => {
      try {
        const eventosRef = firebase.firestore().collection("eventos");
        eventosRef.onSnapshot((snapshot) => {
          const eventosData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setEventos(eventosData);
        });
      } catch (error) {
        console.error("Error al consultar eventos:", error);
      }
    };
    consultarEventos();
  }, []);

  const eliminarEvento = async (id) => {
    try {
      await firebase.firestore().collection("eventos").doc(id).delete();
    } catch (error) {
      console.error("Error al eliminar el evento:", error);
    }
  };

  const abrirModalEdicion = (evento) => {
    setEventoEditado({ ...evento });
    setModalAbierto(true);
    setEdicionFechas(false);
  };

  const guardarCambios = async () => {
    try {
      await firebase
        .firestore()
        .collection("eventos")
        .doc(eventoEditado.id)
        .update(eventoEditado);
      setModalAbierto(false);
      setEventoEditado(null);
    } catch (error) {
      console.error("Error al guardar cambios:", error);
    }
  };

  const handleFieldEdit = (field, value) => {
    setEventoEditado((prevEventoEditado) => ({
      ...prevEventoEditado,
      [field]: value,
    }));
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  function formatFirebaseDate(firebaseDate) {
    // Verificar si la fecha ya está en el formato deseado "dd/mm/yyyy"
    if (firebaseDate.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
      return firebaseDate;
    }

    const parts = firebaseDate.split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    // Formatear la fecha en el formato deseado "dd/mm/yyyy"
    return `${day}/${month}/${year}`;
  }

  return (
    <section className="px-4 py-6 mx-auto max-w-7xl">
      <h1 className="text-3xl font-extrabold text-gray-900">
        Consulta y Modificación de Eventos
      </h1>
      <div className="mt-6 overflow-hidden bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                N
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                NOMBRE
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                TIPO
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                LUGAR
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                FECHA/S
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                HORA SALON
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID DEL EVENTO
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ACCIONES
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {eventos.map((evento, index) => (
              <tr
                key={evento.id}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {modoEdicion && evento.id === eventoEditado?.id ? (
                    <input
                      type="text"
                      value={eventoEditado.nombreEvento}
                      onChange={(e) =>
                        handleFieldEdit("nombreEvento", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded-lg text-center"
                    />
                  ) : eventoEditado?.id === evento.id ? (
                    eventoEditado.nombreEvento
                  ) : (
                    evento.nombreEvento
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {modoEdicion && evento.id === eventoEditado?.id ? (
                    <input
                      type="text"
                      value={eventoEditado.tipoEvento || ""}
                      onChange={(e) =>
                        handleFieldEdit("tipoEvento", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded-lg text-center"
                    />
                  ) : eventoEditado?.id === evento.id ? (
                    eventoEditado.tipoEvento
                  ) : (
                    evento.tipoEvento
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {modoEdicion && evento.id === eventoEditado?.id ? (
                    <input
                      type="text"
                      value={eventoEditado.lugar || ""}
                      onChange={(e) => handleFieldEdit("lugar", e.target.value)}
                      className="w-full px-2 py-1 border rounded-lg text-center"
                    />
                  ) : eventoEditado?.id === evento.id ? (
                    eventoEditado.lugar
                  ) : (
                    evento.lugar
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {modoEdicion &&
                  evento.id === eventoEditado?.id &&
                  edicionFechas ? (
                    <>
                      <input
                        type="date"
                        value={
                          formatFirebaseDate(eventoEditado.fechaInicio) || ""
                        }
                        onChange={(e) =>
                          handleFieldEdit("fechaInicio", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded-lg text-center"
                      />
                      <br />
                      <input
                        type="date"
                        value={
                          formatFirebaseDate(eventoEditado.fechaFinal) || ""
                        }
                        onChange={(e) =>
                          handleFieldEdit("fechaFinal", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded-lg text-center"
                      />
                    </>
                  ) : evento.id === eventoEditado?.id ? (
                    evento.fechaInicio === eventoEditado.fechaFinal ? (
                      formatFirebaseDate(eventoEditado.fechaInicio)
                    ) : (
                      <>
                        {formatFirebaseDate(eventoEditado.fechaInicio)}
                        <br />
                        {formatFirebaseDate(eventoEditado.fechaFinal)}
                      </>
                    )
                  ) : evento.fechaInicio === evento.fechaFinal ? (
                    formatFirebaseDate(evento.fechaInicio)
                  ) : (
                    <>
                      {formatFirebaseDate(evento.fechaInicio)}
                      <br />
                      {formatFirebaseDate(evento.fechaFinal)}
                    </>
                  )}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center">
                  {modoEdicion && evento.id === eventoEditado?.id ? (
                    <input
                      type="time"
                      value={eventoEditado.horaInicialSalon || ""}
                      onChange={(e) =>
                        handleFieldEdit("horaInicialSalon", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded-lg"
                    />
                  ) : eventoEditado?.id === evento.id ? (
                    eventoEditado.horaInicialSalon
                  ) : (
                    evento.horaInicialSalon
                  )}
                  <br />
                  {modoEdicion && evento.id === eventoEditado?.id ? (
                    <input
                      type="time"
                      value={eventoEditado.horaFinalSalon || ""}
                      onChange={(e) =>
                        handleFieldEdit("horaFinalSalon", e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded-lg"
                    />
                  ) : eventoEditado?.id === evento.id ? (
                    eventoEditado.horaFinalSalon
                  ) : (
                    evento.horaFinalSalon
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{evento.id}</td>
                <td className="px-6 py-4 text-center">
                  {modalAbierto && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="fixed inset-0 z-40 bg-black opacity-70"></div>
                      <div className="bg-white p-4 rounded shadow-lg z-50 relative">
                        <h2 className="text-xl font-bold mb-4">
                          Editar Evento
                        </h2>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Nombre del Evento
                          </label>
                          <input
                            type="text"
                            value={eventoEditado?.nombreEvento || ""}
                            onChange={(e) =>
                              handleFieldEdit("nombreEvento", e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded-lg text-center"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Tipo del Evento
                          </label>
                          <input
                            type="text"
                            value={eventoEditado?.tipoEvento || ""}
                            onChange={(e) =>
                              handleFieldEdit("tipoEvento", e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded-lg text-center"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Lugar del Evento
                          </label>
                          <input
                            type="text"
                            value={eventoEditado?.lugar || ""}
                            onChange={(e) =>
                              handleFieldEdit("lugar", e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded-lg text-center"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Fecha de Inicio del Evento
                          </label>
                          <input
                            type="date"
                            value={
                              eventoEditado?.fechaInicio || evento.fechaInicio
                            }
                            onChange={(e) =>
                              handleFieldEdit("fechaInicio", e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded-lg text-center"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Fecha de Finalización del Evento
                          </label>
                          <input
                            type="date"
                            value={
                              eventoEditado?.fechaFinal || evento.fechaFinal
                            }
                            onChange={(e) =>
                              handleFieldEdit("fechaFinal", e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded-lg text-center"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Hora Inicial del Evento
                          </label>
                          <input
                            type="time"
                            value={eventoEditado?.horaInicialSalon || ""}
                            onChange={(e) =>
                              handleFieldEdit(
                                "horaInicialSalon",
                                e.target.value
                              )
                            }
                            className="w-full px-2 py-1 border rounded-lg text-center"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Hora Final del Evento
                          </label>
                          <input
                            type="time"
                            value={eventoEditado?.horaFinalSalon || ""}
                            onChange={(e) =>
                              handleFieldEdit("horaFinalSalon", e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded-lg text-center"
                          />
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={guardarCambios}
                            className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg mr-2"
                          >
                            Guardar Cambios
                          </button>
                          <button
                            onClick={() => setModalAbierto(false)}
                            className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => abrirModalEdicion(evento)}
                    className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => eliminarEvento(evento.id)}
                    className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ConsultaModEvento;
