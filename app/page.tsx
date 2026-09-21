'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Check, ChevronDown, Clock3, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_nvp9dcnvp9dcnvp9-En2u5A3Uu2H30b4kBl9JjCxa3QhIMK.jpeg'
const whatsappNumber = '5491126050359'
type Course = {
  title: string; type: 'Curso' | 'Carrera'; start: string; startSort: string
  duration: string; days: string; schedule: string; price: string; enrollment: string
  badge?: string; aval?: string; description?: string
}
const courses: Course[] = [
  {
    title: 'Electricidad e inyección automotriz', type: 'Curso', start: '19 oct 2026', startSort: '2026-10-19',
    duration: '3 meses', days: 'Lunes', schedule: '9 a 12:30 / 18:30 a 21 h',
    price: '$109.900', enrollment: '$55.000', badge: 'Próximo', aval: 'CAM',
    description: 'Aprendé a diagnosticar y reparar fallas eléctricas y en sistemas de inyección de vehículos modernos. Trabajás con escáner, multímetro y situaciones reales de taller desde el primer día.'
  },
  {
    title: 'Inyección de motos y camiones', type: 'Curso', start: '20 oct 2026', startSort: '2026-10-20',
    duration: '3 meses', days: 'Lunes', schedule: '9 a 12:30 / 18:30 a 21 h',
    price: '$159.000', enrollment: '$55.000', badge: 'Próximo', aval: 'CAM',
    description: 'Formación específica en sistemas de inyección electrónica para motos y camiones. Diagnóstico por software, sensores y actuadores con práctica intensiva en banco.'
  },
  {
    title: 'Carrera de autos', type: 'Carrera', start: '22 oct 2026', startSort: '2026-10-22',
    duration: '1 año', days: 'Martes', schedule: '9 a 12:30 / 18:30 a 21 h',
    price: '$300.000', enrollment: '$165.000', badge: 'Cupos abiertos',
    description: 'Formación integral en mecánica automotriz: motor, transmisión, frenos, suspensión, electricidad e inyección. Al finalizar tenés las herramientas para trabajar en un taller o emprender por tu cuenta.'
  },
  {
    title: 'Carrera de motos', type: 'Carrera', start: '24 oct 2026', startSort: '2026-10-24',
    duration: '1 año', days: 'Sábados y domingos', schedule: '9 a 18 h / 9 a 13 h',
    price: '$300.000', enrollment: '$150.000', badge: 'Cupos abiertos',
    description: 'Capacitación completa en mecánica de motos: motor 2T y 4T, electricidad, inyección y carburación. Ideal para quienes quieren especializarse o montar su propio servicio técnico.'
  },
  {
    title: 'Introducción a la mecánica automotriz', type: 'Curso', start: '7 nov 2026', startSort: '2026-11-07',
    duration: '2 días', days: 'Sábado', schedule: '9 a 13 / 14 a 18 h',
    price: '$129.000', enrollment: '$55.000', badge: 'Ideal para empezar', aval: 'CAM',
    description: 'Un fin de semana intensivo para dar tu primer contacto real con el motor. Aprendés nociones básicas de funcionamiento, mantenimiento y diagnóstico sin necesitar ninguna experiencia previa.'
  },
  {
    title: 'Introducción a la mecánica de motos', type: 'Curso', start: '8 nov 2026', startSort: '2026-11-08',
    duration: '2 días', days: 'Domingo', schedule: '9 a 13 h',
    price: '$129.000', enrollment: '$55.000', badge: 'Ideal para empezar', aval: 'CAM',
    description: 'Jornada de iniciación en mecánica de motos. Conocés los sistemas principales, aprendés un mantenimiento básico y salís con una base concreta para seguir formándote.'
  },
  {
    title: 'Plomería', type: 'Curso', start: '15 feb 2027', startSort: '2027-02-15',
    duration: '4 meses', days: 'Lunes a viernes', schedule: '9 a 13 / 18 a 22 h',
    price: '$109.000', enrollment: '$55.000', aval: 'IAARA',
    description: 'Capacitación integral en instalaciones sanitarias: cañerías, conexiones de agua fría y caliente, desagüe y destapaciones. Prácticas en obra real con materiales actuales.'
  },
  {
    title: 'Electricidad domiciliaria', type: 'Curso', start: '17 feb 2027', startSort: '2027-02-17',
    duration: '4 meses', days: 'Lunes a viernes', schedule: '9 a 13 / 18 a 22 h',
    price: '$109.000', enrollment: '$55.000',
    description: 'Aprendé a instalar, reparar y ampliar instalaciones eléctricas en viviendas. Tableros, circuitos, tomas e iluminación. Formación práctica orientada a la salida laboral inmediata.'
  },
  {
    title: 'Reparación e instalación de aire acondicionado', type: 'Curso', start: '17 feb 2027', startSort: '2027-02-17',
    duration: '4 meses', days: 'Martes y jueves', schedule: '9 a 13 / 18 a 22 h',
    price: '$109.000', enrollment: '$55.000',
    description: 'Todo lo que necesitás para instalar, mantener y reparar equipos de aire acondicionado split y central. Carga de gas, diagnóstico eléctrico y puesta en marcha.'
  },
]
const faqs: [string, string][] = [
  [
    '¿Puedo empezar sin experiencia?',
    'Sí, absolutamente. La mayoría de nuestros alumnos llegan sin haber tocado una herramienta antes, y eso no es ningún problema. Los cursos e introducciones arrancan desde cero: el docente acompaña cada paso, los conceptos se presentan de forma simple y la práctica es guiada desde el primer día. Lo único que necesitás traer es ganas de aprender — el resto lo ponemos nosotros.'
  ],
  [
    '¿Qué necesito para inscribirme?',
    'Solo tus datos personales y el pago de la matrícula para reservar tu lugar. Escribinos por WhatsApp y te confirmamos disponibilidad, medios de pago y todo lo que necesitás saber antes de arrancar.'
  ],
  [
    '¿Dónde se cursa?',
    'La formación es 100% presencial en ICAQ, Av. Hipólito Yrigoyen 359, Quilmes Centro, Buenos Aires. Estamos bien ubicados, a pocos minutos de la estación de tren Quilmes.'
  ],
  [
    '¿Entregan certificado o tienen aval?',
    'Depende del curso. Los cursos de mecánica automotriz (electricidad, inyección, introducciones y carreras de autos y motos) cuentan con el aval del CAM (Centro Argentino de Mecatrónica) — una institución con más de 30 años de trayectoria en el sector. El curso de Plomería tiene aval del IAARA. El resto de las propuestas entregan certificado de asistencia y aprobación emitido por ICAQ. Consultanos por el curso que te interesa y te detallamos qué documentación recibís al finalizar.'
  ],
]

function Logo() { return <img className="logo" src={logoUrl} alt="ICAQ — Instituto de Capacitación y Aprendizaje Quilmes" /> }

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<'Todos' | 'Próximos' | 'Curso' | 'Carrera'>('Carrera')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selected, setSelected] = useState<Course | null>(null)
  const [form, setForm] = useState({ nombre: '', telefono: '', consulta: '' })
  const upcoming = useMemo(() => courses.slice(0, 4), [])
  const visible = courses.filter(c => filter === 'Todos' || (filter === 'Próximos' ? c.startSort < '2027-01-01' : c.type === filter))
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  const ask = (course?: Course) => { if (course) setSelected(course); scrollTo('contacto') }
  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hola ICAQ, soy ${form.nombre}. Mi teléfono es ${form.telefono}. ${selected ? `Me interesa ${selected.title}, comienza el ${selected.start}.` : 'Quisiera información sobre los próximos cursos.'} ${form.consulta}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
  }
  return (
    <main>

      <div className="header-wrap">
        {/* TOP BAR / UTILITY */}
        <div className="top-bar">
          <div className="top-bar-inner">
            <div className="top-bar-item">
              <MapPin size={13} className="top-bar-icon" />
              <span>SEDE QUILMES CENTRO · HIPÓLITO YRIGOYEN 359</span>
            </div>
            <div className="top-bar-badge">
              <span className="live-indicator" />
              <span>CICLO LECTIVO 2026 // INSCRIPCIONES ABIERTAS</span>
            </div>
            <div className="top-bar-item top-bar-contact">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
                <MessageCircle size={13} className="top-bar-icon" />
                <span>CONSULTAS WA: 11 2605-0359</span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN HEADER */}
        <header className="site-header">
          <a href="#inicio" className="brand-link" aria-label="Ir al inicio ICAQ">
            <div className="logo-container">
              <Logo />
            </div>
            <div className="brand-meta">
              <span className="brand-tag">TALLER & OFICIOS</span>
              <span className="brand-sub">QUILMES BS.AS.</span>
            </div>
          </a>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
            <button onClick={() => scrollTo('quienes-somos')}>
              <span className="nav-index">01</span>Quiénes somos
            </button>
            <button onClick={() => scrollTo('agenda')}>
              <span className="nav-index">02</span>Próximos cursos
            </button>
            <button onClick={() => scrollTo('propuestas')}>
              <span className="nav-index">03</span>Propuestas
            </button>
            <button onClick={() => scrollTo('metodo')}>
              <span className="nav-index">04</span>Cómo aprendés
            </button>
            <button onClick={() => scrollTo('contacto')}>
              <span className="nav-index">05</span>Contacto
            </button>
          </nav>

          <div className="header-actions">
            <a
              className="header-whatsapp"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola ICAQ, quiero consultar por los próximos cursos.')}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
            <button className="header-cta" onClick={() => scrollTo('agenda')}>
              <span>Inscribirse</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </header>
      </div>

      {/* HERO */}
      <section id="inicio" className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> FORMACIÓN TÉCNICA PRESENCIAL</p>
          <h1>Formate en ICAQ.<br /><em>Empezá ahora.</em></h1>
          <p className="hero-lead">Cursos y carreras prácticas para convertir tu interés por los autos, las motos y los oficios en una habilidad concreta.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => scrollTo('agenda')}>Ver próximos comienzos <ArrowRight size={18} /></button>
            <button className="text-button" onClick={() => scrollTo('quienes-somos')}>Conocé ICAQ <span>↓</span></button>
          </div>
          <div className="hero-proof"><span className="proof-mark"><Check size={16} /></span><span>Presencial · Práctico · Quilmes</span></div>
        </div>
        <div id="agenda" className="hero-agenda reveal reveal-delay-2">
          <div className="agenda-heading"><span>AGENDA ICAQ / 2026</span><b>Próximos comienzos</b><small>Elegí una propuesta y consultá tu vacante.</small></div>
          {upcoming.map((c, i) => (
            <button className="agenda-item" style={{ '--i': i } as React.CSSProperties} key={c.title} onClick={() => ask(c)}>
              <span className="agenda-date"><b>{c.start.slice(0, 2)}</b><small>{c.start.slice(3, 6).toUpperCase()}</small></span>
              <span><strong>{c.title}</strong><small>{c.type} · {c.duration} · {c.days}</small></span>
              <ArrowRight size={17} />
            </button>
          ))}
          <button className="agenda-more" onClick={() => scrollTo('propuestas')}>Ver toda la agenda <ArrowRight size={15} /></button>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="section-shell trust-grid">
          <div><span>01</span><strong>Aprendizaje práctico</strong><small>Herramientas y situaciones reales</small></div>
          <div><span>02</span><strong>Inicios confirmados</strong><small>Fechas claras para organizarte</small></div>
          <div><span>03</span><strong>Acompañamiento docente</strong><small>Teoría simple y práctica guiada</small></div>
          <div><span>04</span><strong>En Quilmes Centro</strong><small>Hipólito Yrigoyen 359</small></div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes-somos" className="quienes-section">
        <div className="quienes-grid reveal">
          {/* FOTO — reemplazá por <img src="..." className="photo-slot-img" /> cuando tengas la foto */}
          <div className="photo-slot photo-slot--portrait" aria-label="Foto del instituto">
            <span className="photo-slot-label">FOTO DEL<br />INSTITUTO</span>
          </div>
          <div className="quienes-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> QUIÉNES SOMOS</p>
            <h2>Instituto de Capacitación<br /><span>y Aprendizaje Quilmes</span></h2>
            <p>Somos una institución de formación técnica y profesional con sede en Quilmes Centro. Nuestro propósito es claro: brindar herramientas reales para que cada alumno pueda incorporarse al mundo laboral o mejorar lo que ya sabe hacer.</p>
            <p>Trabajamos con docentes especializados, metodología práctica y grupos reducidos para garantizar un aprendizaje de calidad. Cada propuesta está pensada para que apliques lo aprendido desde el primer día, sin rodeos y sin teoría vacía.</p>
            <p>En el área automotriz trabajamos junto al <strong>CAM</strong> (Centro Argentino de Mecatrónica) — con más de 30 años formando profesionales — lo que nos permite ofrecer certificaciones reconocidas y un respaldo académico sólido.</p>
            <div className="quienes-bottom">
              <button className="button button-primary" onClick={() => scrollTo('agenda')}>Formate en ICAQ <ArrowRight size={18} /></button>
              <div className="cam-box">
                <p className="cam-label">AVALADO POR</p>
                <img className="cam-logo" src="/Logo.jpeg" alt="CAM — Centro Argentino de Mecatrónica" />
                <p className="cam-years"><strong>+30 años</strong> formando profesionales del sector automotriz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="nosotros" className="intro-band">
        <div className="intro-grid reveal">
          <div className="intro-text">
            <div className="section-kicker">ICAQ / DESDE 2014</div>
            <h2>Aprendés con las manos,<br /><span>avancás con confianza.</span></h2>
            <p>Formamos personas que quieren incorporarse al mundo laboral o perfeccionar una habilidad. La propuesta combina teoría clara, práctica guiada y acompañamiento docente en cada encuentro.</p>
          </div>
          {/* FOTO — reemplazá por <img src="..." className="photo-slot-img" /> cuando tengas la foto */}
          <div className="photo-slot photo-slot--landscape" aria-label="Foto de clase práctica">
            <span className="photo-slot-label">FOTO DE<br />LA CLASE</span>
          </div>
        </div>
      </section>

      {/* PROPUESTAS */}
      <section id="propuestas" className="section-shell proposals">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> CURSOS Y CARRERAS</p>
            <h2>Propuestas con<br /><span>fecha de inicio.</span></h2>
          </div>
          <p className="section-description">Encontrá una formación, compará sus datos y consultá la disponibilidad. La información de cada ficha te ayuda a decidir sin vueltas.</p>
        </div>
        <div className="filter-bar reveal" role="tablist" aria-label="Filtrar propuestas">
          {(['Todos', 'Próximos', 'Curso', 'Carrera'] as const).map(item => (
            <button key={item} className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)}>{item}{item === 'Próximos' && <span>2026</span>}</button>
          ))}
        </div>
        <div className="course-catalog">
          {visible.map((c, i) => (
            <article className="catalog-card reveal" style={{ '--i': i } as React.CSSProperties} key={c.title}>
              <div className="catalog-top"><span className="type-label">{c.type}</span>{c.badge && <span className="card-tag">{c.badge}</span>}</div>
              <h3>{c.title}</h3>
              {c.description && <p className="course-description">{c.description}</p>}
              <div className="card-start"><span>COMIENZA</span><strong>{c.start}</strong></div>
              <div className="course-details">
                <p><b>Duración</b><strong>{c.duration}</strong></p>
                <p><b>Cursada</b><strong>{c.days}</strong></p>
                <p><b>Horario</b><strong>{c.schedule}</strong></p>
              </div>
              <div className="price-row">
                <div><small>Valor del curso</small><strong>{c.price}</strong></div>
                <div><small>Matrícula</small><strong>{c.enrollment}</strong></div>
              </div>
              {c.aval && <p className="aval">Avalado por {c.aval}</p>}
              <button className="course-cta" onClick={() => ask(c)}>Consultar vacante <ArrowRight size={16} /></button>
            </article>
          ))}
        </div>
        <p className="price-note">Valores informados en la planilla de cursos. Confirmá vigencia, medios de pago y vacantes al consultar.</p>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="method-section">
        <div className="section-shell method-grid reveal">
          <div>
            <p className="eyebrow light"><span className="eyebrow-line" /> NUESTRA FORMA DE ENSEÑAR</p>
            <h2>La teoría orienta.<br /><em>La práctica transforma.</em></h2>
            <p className="method-text">No te quedás mirando: trabajás con herramientas y situaciones reales desde el primer encuentro. Cada clase es una oportunidad concreta de aprender algo que podés aplicar al día siguiente.</p>
            <button className="button button-outline" onClick={() => scrollTo('contacto')}>Hablar con ICAQ <ArrowRight size={18} /></button>
          </div>
          <div className="method-steps">
            <div>
              <span>01</span>
              <h3>Entendé</h3>
              <p>El docente explica los conceptos de forma directa y accesible. Sin tecnicismos innecesarios. Si algo no quedó claro, se repasa hasta que sí.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Practicá</h3>
              <p>Ponés las manos en la masa desde la primera clase. Trabajás con herramientas reales, en situaciones reales, con acompañamiento constante.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Avanzá</h3>
              <p>Con cada encuentro ganás seguridad. Al terminar, no solo sabés hacerlo: sabés por qué funciona. Eso es lo que te diferencia en el mercado laboral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section-shell">
        <div className="faq-heading reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> INFORMACIÓN ÚTIL</p>
          <h2>Antes de inscribirte,<br /><span>resolvemos tus dudas.</span></h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map(([q, a], i) => (
            <div className={openFaq === i ? 'faq-item open' : 'faq-item'} key={q}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                <span>{q}</span><ChevronDown size={20} />
              </button>
              {openFaq === i && <p>{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="contact-section">
        <div className="section-shell contact-grid reveal">
          <div>
            <p className="eyebrow light"><span className="eyebrow-line" /> RESERVÁ TU LUGAR</p>
            <h2>¿Qué querés<br /><em>aprender?</em></h2>
            <p className="contact-copy">Dejanos tus datos y la propuesta que te interesa. Te respondemos con vacantes, formas de pago y toda la información para empezar.</p>
            <div className="contact-details">
              <p><MapPin size={18} /> Av. Hipólito Yrigoyen 359, Quilmes Centro</p>
              <p><Phone size={18} /> +54 11 2605-0359</p>
              <p><Clock3 size={18} /> Lunes a viernes · 9 a 13 / 16 a 20 h</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={sendWhatsApp}>
            {selected && (
              <div className="selected-course">
                <small>Consulta seleccionada</small>
                <strong>{selected.title}</strong>
                <span>Comienza {selected.start} · {selected.price}</span>
                <button type="button" onClick={() => setSelected(null)} aria-label="Quitar curso seleccionado">×</button>
              </div>
            )}
            <label>Nombre completo<input required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} placeholder="¿Cómo te llamás?" /></label>
            <label>Teléfono / WhatsApp<input required value={form.telefono} onChange={e => setForm({ ...form, telefono: e.target.value })} placeholder="Tu número de contacto" /></label>
            <label>Consulta<textarea value={form.consulta} onChange={e => setForm({ ...form, consulta: e.target.value })} placeholder="¿Qué querés saber?" rows={3} /></label>
            <button className="button button-light" type="submit"><MessageCircle size={18} /> Consultar por WhatsApp</button>
            <small>Se abrirá WhatsApp con tu consulta lista para enviar.</small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <Logo />
          <p>Instituto de Capacitación y Aprendizaje Quilmes</p>
          <div className="footer-social">
            <a href="#contacto">IG</a>
            <a href="#contacto">FB</a>
            <a href={`https://wa.me/${whatsappNumber}`} aria-label="WhatsApp"><MessageCircle size={18} /></a>
          </div>
          <span className="footer-copy">© 2026 ICAQ. Todos los derechos reservados.</span>
        </div>
      </footer>
      <a className="sticky-whatsapp" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hola ICAQ, quiero consultar por los próximos cursos.')}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar por WhatsApp</a>
    </main>
  )
}
