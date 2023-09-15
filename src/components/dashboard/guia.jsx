function Guia() {
  return (
    <section>
      <div className="bg-gray-100 min-h-screen py-10 px-16">
        <div className="container mx-auto ">
          <h1 className="text-3xl font-semibold mb-4">Guía de Usuario</h1>

          {/* Sección de Descripción */}
          <section className="bg-white shadow-md rounded-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Introducción</h2>
            <p>
              Bienvenido a la guía de usuario de nuestro servicio de publicidad
              y gestión de contenido en monitores y televisores. Nuestro
              servicio está diseñado para hoteles, aeropuertos y lugares
              similares que deseen mostrar contenido atractivo en sus pantallas.
              Esta guía te ayudará a configurar y utilizar nuestro servicio de
              manera efectiva.
            </p>
          </section>

          {/* Sección de Videos Tutoriales */}
          <section className="bg-white shadow-md rounded-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Videos Tutoriales</h2>
          </section>

          {/* Sección de URL y Puertos */}
          <section className="bg-white shadow-md rounded-md p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">
              Configuración de URL y Puertos
            </h2>
            <p>
              Para aquellos negocios que tienen restricciones de navegación, es
              importante conocer la URL y los puertos específicos que nuestro
              servicio utiliza. Asegúrate de configurar correctamente estos
              parámetros para un funcionamiento óptimo.
            </p>
            {/* Aquí puedes proporcionar detalles sobre la URL y puertos */}
          </section>
        </div>
      </div>
    </section>
  );
}
export default Guia;
