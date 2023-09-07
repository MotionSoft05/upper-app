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

  useEffect(() => {
    // Consultar la colección 'eventos' en Firebase
    const consultarEventos = async () => {
      try {
        const eventosSnapshot = await firebase
          .firestore()
          .collection("eventos")
          .get();
        const eventosData = eventosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          fechaInicio: doc.data().fechaInicio.toDate(), // Convertir a fecha JavaScript
          fechaFinal: doc.data().fechaFinal.toDate(), // Convertir a fecha JavaScript
        }));
        setEventos(eventosData);
      } catch (error) {
        console.error("Error al consultar eventos:", error);
      }
    };

    // Llamar a la función para consultar eventos cuando el componente se monta
    consultarEventos();
  }, []);

  const eliminarEvento = async (id) => {
    try {
      // Eliminar el evento de Firebase
      await firebase.firestore().collection("eventos").doc(id).delete();

      // Actualizar la lista de eventos localmente
      const eventosActualizados = eventos.filter((evento) => evento.id !== id);
      setEventos(eventosActualizados);
    } catch (error) {
      console.error("Error al eliminar el evento:", error);
    }
  };

  const convertirTimestampAFechaString = (timestamp) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(timestamp).toLocaleDateString(undefined, options);
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
          {/* Lista de eventos */}
          <h4 className="mb-4 text-2xl leading-none tracking-tight text-gray-900">
            Lista de Eventos
          </h4>
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NÚMERO DE EVENTO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NOMBRE DE EVENTO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TIPO DE EVENTO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PISO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DESCRIPCIÓN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  FECHA DE INICIO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  FECHA DE FINALIZACIÓN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  HORA DE INICIO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  HORA DE FINAL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {evento.nombreEvento}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {evento.tipoEvento}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{evento.piso}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {evento.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {convertirTimestampAFechaString(evento.fechaInicio)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {convertirTimestampAFechaString(evento.fechaFinal)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {evento.horaInicio}:{evento.minutoInicio}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {evento.horaFinal}:{evento.minutoFinal}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => eliminarEvento(evento.id)}
                      className="text-red-600 hover:text-red-800"
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
