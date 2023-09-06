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
        const eventosData = eventosSnapshot.docs.map((doc) => doc.data());
        setEventos(eventosData);
      } catch (error) {
        console.error("Error al consultar eventos:", error);
      }
    };

    // Llamar a la función para consultar eventos cuando el componente se monta
    consultarEventos();
  }, []);

  return (
    <section className="px-32">
      <div>
        <div className="p-5">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
            Consulta y Modificación de Eventos
          </h1>
        </div>
        <section className="grid grid-cols-2 gap-4">
          {/* Lista de eventos */}
          <div className="bg-gray-300 p-4">
            <h4 className="mb-4 text-2xl leading-none tracking-tight text-gray-900">
              Lista de Eventos
            </h4>
            <ul className="divide-y divide-gray-300">
              {eventos.map((evento, index) => (
                <li key={index} className="py-2">
                  <div className="text-lg font-semibold">
                    {evento.nombreEvento}
                  </div>
                  <div className="text-gray-600">Tipo: {evento.tipoEvento}</div>
                  <div className="text-gray-600">Piso: {evento.piso}</div>
                  <div className="text-gray-600">
                    Descripción: {evento.descripcion}
                  </div>
                  <div className="text-gray-600">
                    Hora de Inicio: {evento.horaInicio}:{evento.minutoInicio}
                  </div>
                  <div className="text-gray-600">
                    Hora de Final: {evento.horaFinal}:{evento.minutoFinal}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Configuración */}
          <div className="bg-gray-300 p-4">
            {/* Aquí puedes agregar la configuración adicional si es necesario */}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ConsultaModEvento;
