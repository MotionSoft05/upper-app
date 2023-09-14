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
        const eventosData = eventosSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id, // Aquí recuperamos el ID generado automáticamente
            ...data,
            fechaInicio:
              data.fechaInicio instanceof firebase.firestore.Timestamp
                ? data.fechaInicio.toDate()
                : data.fechaInicio, // Use the value as-is if not a Timestamp
            fechaFinal:
              data.fechaFinal instanceof firebase.firestore.Timestamp
                ? data.fechaFinal.toDate()
                : data.fechaFinal, // Use the value as-is if not a Timestamp
          };
        });
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
    if (timestamp instanceof Date) {
      const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };
      return new Date(timestamp).toLocaleDateString(undefined, options);
    } else {
      return timestamp; // Devolver el valor tal como está si no es un objeto Date
    }
  };

  const convertirDiasSeleccionados = (diasSeleccionados) => {
    if (Array.isArray(diasSeleccionados)) {
      const dias = {
        lunes: "L",
        martes: "MA",
        miércoles: "MI",
        jueves: "J",
        viernes: "V",
        sábado: "S",
        domingo: "D",
      };
      return diasSeleccionados.map((dia) => dias[dia]).join(", ");
    } else {
      return ""; // Otra opción es devolver una cadena vacía u otro valor predeterminado
    }
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
                  Nº
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NOMBRE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  TIPO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  LUGAR/ES
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  FECHA/S
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  HORA REAL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  HORA SALÓN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  REPETICIÓN DEL EVENTO
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID DEL EVENTO
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
                  <td className="px-6 py-4 whitespace-nowrap">
                    {evento.lugar}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="mb-1">
                      <strong>Inicio:</strong>{" "}
                      {convertirTimestampAFechaString(evento.fechaInicio)}
                    </div>
                    <div>
                      <strong>Final:</strong>{" "}
                      {convertirTimestampAFechaString(evento.fechaFinal)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="mb-1">
                      <strong>Inicio:</strong> {evento.horaInicialReal}
                    </div>
                    <div>
                      <strong>Final:</strong> {evento.horaFinalReal}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="mb-1">
                      <strong>Inicio:</strong> {evento.horaInicialSalon}
                    </div>
                    <div>
                      <strong>Final:</strong> {evento.horaFinalSalon}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {convertirDiasSeleccionados(evento.diasSeleccionados)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{evento.id}</td>{" "}
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
