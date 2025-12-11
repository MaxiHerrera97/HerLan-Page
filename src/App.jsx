import React from "react";
import { motion } from "framer-motion";
import {
  FaWifi,
  FaBolt,
  FaShieldAlt,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // NUEVO
import logoHerLan from "./assets/herlan-logo.png";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsappButton />
    </div>
  );
}

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logoHerLan}
            alt="HerLan - Conectando tu mundo digital"
            className="h-10 w-auto"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight">HerLan</p>
            <p className="text-[11px] text-slate-400 -mt-1">
              Conectando tu mundo digital
            </p>
          </div>
        </div>

        {/* Menú desktop */}
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#home" className="hover:text-sky-400 transition">
            Home
          </a>
          <a href="#servicios" className="hover:text-sky-400 transition">
            Servicios
          </a>
          <a href="#contacto" className="hover:text-sky-400 transition">
            Contacto
          </a>
        </nav>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium transition shadow-lg shadow-sky-500/20"
        >
          <FaPhoneAlt />
          Contratá ahora
        </a>

        {/* Botón hamburguesa (solo mobile) */}
        <button
          type="button"
          onClick={toggleMenu}
          className="sm:hidden inline-flex items-center justify-center rounded-full p-2 border border-slate-700 text-slate-200 hover:border-sky-500 hover:text-sky-400 transition"
          aria-label="Abrir menú"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="sm:hidden border-t border-slate-800 bg-slate-950/95">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <a
              href="#home"
              onClick={closeMenu}
              className="py-2 border-b border-slate-900 hover:text-sky-400"
            >
              Home
            </a>
            <a
              href="#servicios"
              onClick={closeMenu}
              className="py-2 border-b border-slate-900 hover:text-sky-400"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="py-2 hover:text-sky-400"
            >
              Contacto
            </a>
            <a
              href="#contacto"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-xs font-semibold shadow-md shadow-sky-500/20"
            >
              <FaPhoneAlt className="mr-1" />
              Contratá ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
function Hero() {
  return (
    <section
      id="home"
      className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Lado izquierdo: logo + texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          

          <p className="text-xs uppercase tracking-[0.3em] text-sky-400 mb-3">
            HerLan 
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Internet estable y rápido
            <span className="block text-sky-400">
              pensado para tu hogar.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-6">
            Conectá tus dispositivos, mirá tus series favoritas y trabajá desde
            casa sin cortes. HerLan te ofrece planes de internet hogar con
            soporte local y atención personalizada.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-semibold shadow-lg shadow-sky-500/20 transition"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-slate-700 hover:border-slate-500 text-sm font-semibold text-slate-200 transition"
            >
              Consultar disponibilidad
            </a>
          </div>

          <div className="flex flex-wrap gap-5 text-xs text-slate-400">
            <FeatureBadge icon={<FaWifi />} text="Conexión estable" />
            <FeatureBadge icon={<FaBolt />} text="Baja latencia" />
            <FeatureBadge icon={<FaShieldAlt />} text="Soporte dedicado" />
          </div>
        </motion.div>

        {/* Lado derecho: planes destacados */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute -inset-4 bg-sky-500/10 blur-3xl" />
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl">
            <p className="text-xs text-sky-400 mb-3 font-medium">
              Planes destacados
            </p>
            <div className="grid gap-4">
              <PlanCard
                name="Plan Hogar 50 Mb"
                price="$20.000"
                details={[
                  "Ideal para streaming HD",
                  "3-4 dispositivos",
                  "Soporte básico",
                ]}
                highlighted
              />
              <PlanCard
                name="Plan Hogar 100 Mb"
                price="$30.000"
                details={[
                  "Familias conectadas",
                  "5-8 dispositivos",
                  "Soporte prioritario",
                ]}
              />
            </div>
            <p className="mt-4 text-[11px] text-slate-500">
              * Consultá por disponibilidad según tu zona. Valores finales por
              mes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureBadge({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/70">
      <span className="text-sky-400 text-sm">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function PlanCard({ name, price, details, highlighted = false }) {
  return (
    <div
      className={`rounded-2xl border p-4 text-sm ${
        highlighted
          ? "border-sky-500 bg-slate-900/80 shadow-lg shadow-sky-500/30"
          : "border-slate-800 bg-slate-900/60"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-slate-100">{name}</p>
        <p className="font-bold text-sky-400">{price}</p>
      </div>
      <ul className="text-slate-300 text-xs space-y-1">
        {details.map((d) => (
          <li key={d}>• {d}</li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section id="servicios" className="border-b border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
            Nuestros servicios
          </h3>
          <p className="text-slate-300 text-sm sm:text-base">
            Planes diseñados para las necesidades reales de tu hogar. Elegí el
            que mejor se adapte a tu familia y a tu forma de conectarte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<FaWifi size={28} />}
            title="Internet Hogar"
            description="Planes residenciales con velocidades estables para streaming, clases online y redes sociales."
            items={[
              "Instalación programada",
              "Routers de alta calidad",
              "Soporte por WhatsApp",
            ]}
          />
          <ServiceCard
            icon={<FaBolt size={28} />}
            title="Alta velocidad"
            description="Conectividad pensada para usuarios exigentes, gaming y teletrabajo."
            items={["Baja latencia", "Mayor estabilidad", "Planes escalables"]}
          />
          <ServiceCard
            icon={<FaShieldAlt size={28} />}
            title="Soporte y Asistencia"
            description="Te acompañamos ante cualquier inconveniente con un equipo cercano y respuesta rápida."
            items={[
              "Atención personalizada",
              "Monitoreo de incidencias",
              "Derivación técnica",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, items }) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className="mb-3 text-sky-400">{icon}</div>
      <h4 className="font-semibold mb-2 text-lg">{title}</h4>
      <p className="text-slate-300 text-sm mb-3 flex-1">{description}</p>
      <ul className="text-xs text-slate-400 space-y-1">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function Contact() {
  return (
    <section id="contacto" className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            ¿Querés HerLan en tu hogar?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-4">
            Completá el formulario y te vamos a contactar para confirmar
            disponibilidad en tu zona, coordinar la instalación y ayudarte a
            elegir el mejor plan.
          </p>
          <div className="text-sm text-slate-300 space-y-1">
            
            <p>
              <span className="font-semibold text-slate-100">WhatsApp:</span>{" "}
              (+54) 9 381 419 3568
            </p>
            <p>
              <span className="font-semibold text-slate-100">Email:</span>{" "}
              ventas@herlan.info
            </p>
          </div>
        </div>

        {/* FORMULARIO – después conectar a backend/API */}
        <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <InputField label="Nombre y apellido" name="nombre" required />
            <InputField label="Teléfono" name="telefono" required />
          </div>
          <InputField label="Email" name="email" type="email" />
          <InputField label="Dirección" name="direccion" />
          <div className="grid sm:grid-cols-2 gap-4">
            <InputField label="Localidad" name="localidad" />
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Plan de interés
              </label>
              <select
                name="plan"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"
              >
                <option value="">Seleccionar plan</option>
                <option value="50mb">Plan Hogar 50 Mb - $20.000</option>
                <option value="100mb">Plan Hogar 100 Mb - $30.000</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Comentarios
            </label>
            <textarea
              name="comentarios"
              rows={3}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500 resize-none"
              placeholder="Ej: Horario de contacto, tipo de uso, dudas, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-sm font-semibold shadow-lg shadow-sky-500/30 transition"
          >
            Enviar consulta
          </button>

          <p className="text-[11px] text-slate-500">
            Al enviar tu consulta un asesor de HerLan se comunicará con vos para
            coordinar los próximos pasos.
          </p>
        </form>
      </div>
    </section>
  );
}

function InputField({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-300 mb-1">
        {label} {required && <span className="text-rose-400">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-500"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
        <p>© {new Date().getFullYear()} HerLan. Todos los derechos reservados.</p>
        <p>Conectando tu mundo digital.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsappButton() {
  const mensaje = encodeURIComponent(
    "Hola HerLan, quiero consultar por los planes de internet para mi hogar."
  );

  return (
    <motion.a
      href={`https://wa.me/5493814193568?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 shadow-xl shadow-emerald-500/40 transition"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      <FaWhatsapp size={28} className="text-white" />
    </motion.a>
  );
}

export default App;