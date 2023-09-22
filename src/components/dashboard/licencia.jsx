import React from "react";

function Licencia() {
  return (
    <section className="px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Licencia</h2>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          {/* Datos Generales del negocio */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Datos Generales del Negocio
            </h3>
            <p>Nombre: Nombre del Negocio</p>
            <p>Domicilio: Domicilio del Negocio</p>
            <p>Teléfono: Teléfono de Contacto</p>
            <p>Correo de Contacto: correo@example.com</p>
          </div>

          {/* Datos Fiscales */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Datos Fiscales
            </h3>
            <p>Información fiscal para emisión de factura</p>
            {/* Agregar más información fiscal aquí */}
          </div>

          {/* Información de licencia contratada */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Información de Licencia Contratada
            </h3>
            <p>Fecha de Inicio: 01/01/2023</p>
            <p>Fecha de Fin: 01/01/2024</p>
            <p>Número de Licencias Adquiridas: 5</p>
            <p>URL de Salón de Eventos en línea: Sí</p>
            <p>URL de Directorio en línea: Sí</p>
          </div>

          {/* Información adicional */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Información Adicional
            </h3>
            <p>Datos de Contacto para Renovación y Upgrade de Licencia:</p>
            <p>Nombre de Contacto: Nombre del Contacto</p>
            <p>Teléfono de Contacto: Teléfono del Contacto</p>
            <p>Correo de Contacto: correo_contacto@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Licencia;
