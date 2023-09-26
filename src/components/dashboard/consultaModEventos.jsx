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

  return (
    <section className="px-32">
      <div>
        <div className="p-5">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
            Consulta y Modificación de Eventos
          </h1>
        </div>
        <section className="bg-gray-300 p-4 overflow-x-auto">
          <h4 className="mb-4 text-2xl leading-none tracking-tight text-gray-900">
            Lista de Eventos
          </h4>
          <table className="min-w-full table-fixed">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NOMBRE
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TIPO
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  LUGAR
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID DEL EVENTO
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACCIONES
                </th>
              </tr>
            </thead>
            <tbody>
              {eventos.map((evento, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {modoEdicion && evento.id === eventoEditado?.id ? (
                      <input
                        type="text"
                        value={eventoEditado.nombreEvento}
                        onChange={(e) =>
                          handleFieldEdit("nombreEvento", e.target.value)
                        }
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
                        onChange={(e) =>
                          handleFieldEdit("lugar", e.target.value)
                        }
                      />
                    ) : eventoEditado?.id === evento.id ? (
                      eventoEditado.lugar
                    ) : (
                      evento.lugar
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{evento.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
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
                              className="mt-1 p-2 w-full border rounded-lg"
                              value={eventoEditado?.nombreEvento || ""}
                              onChange={(e) =>
                                setEventoEditado({
                                  ...eventoEditado,
                                  nombreEvento: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Tipo del Evento
                            </label>
                            <input
                              type="text"
                              className="mt-1 p-2 w-full border rounded-lg"
                              value={eventoEditado?.tipoEvento || ""}
                              onChange={(e) =>
                                setEventoEditado({
                                  ...eventoEditado,
                                  tipoEvento: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Lugar del Evento
                            </label>
                            <input
                              type="text"
                              className="mt-1 p-2 w-full border rounded-lg"
                              value={eventoEditado?.lugar || ""}
                              onChange={(e) =>
                                setEventoEditado({
                                  ...eventoEditado,
                                  lugar: e.target.value,
                                })
                              }
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
        </section>
      </div>
    </section>
  );
}

export default ConsultaModEvento;
