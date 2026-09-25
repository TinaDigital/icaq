'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Check, ChevronDown, ChevronUp, Clock3, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'

const logoUrl = '/logo.png'
const whatsappNumber = '5491126050359'
type Course = {
  title: string; type: 'Curso' | 'Carrera'; start: string; startSort: string
  duration: string; days: string; schedule: string; price: string; enrollment: string
  badge?: string; aval?: string; description?: string
}
const courses: Course[] = [
  {
    title: 'Introducción a la mecánica automotriz',
    type: 'Curso',
    start: '19 oct 2026',
    startSort: '2026-10-19',
    duration: '3 meses',
    days: 'Lunes',
    schedule: '9 a 12:30 h / 18 a 22 h',
    price: '$129.000',
    enrollment: '$55.000',
    badge: 'Próximo',
    aval: 'Certificado por Microcredenciales del Ministerio de Educación Del Gobierno de la Ciudad de Buenos Aires',
    description: 'Formate desde cero en mecánica automotriz y aprendé a comprender el funcionamiento de los principales sistemas de un vehículo. Incorporá conocimientos prácticos para realizar mantenimiento preventivo, detectar fallas y dar tus primeros pasos en el mundo de la mecánica.'
  },
  {
    title: 'Introducción a la mecánica de motos',
    type: 'Curso',
    start: '20 oct 2026',
    startSort: '2026-10-20',
    duration: '3 meses',
    days: 'Martes',
    schedule: '9 a 12:30 h / 18:30 a 22 h',
    price: '$129.000',
    enrollment: '$55.000',
    badge: 'Próximo',
    aval: 'Certificado por Microcredenciales del Ministerio de Educación Del Gobierno de la Ciudad de Buenos Aires',
    description: 'Iniciate en la mecánica de motocicletas y aprendé de forma práctica sobre motores de 2 y 4 tiempos, transmisión, embrague, frenos, suspensión, carburación y sistemas eléctricos. Incorporá conocimientos y herramientas para realizar controles y mantenimiento básico de tu propia moto.'
  },
  {
    title: 'Electricidad e inyección automotriz',
    type: 'Curso',
    start: '21 oct 2026',
    startSort: '2026-10-21',
    duration: '3 meses',
    days: 'Miércoles',
    schedule: '9 a 12:30 h / 18:30 a 22 h',
    price: '$109.900',
    enrollment: '$55.000',
    badge: 'Próximo',
    aval: 'Certificado por Microcredenciales del Ministerio de Educación Del Gobierno de la Ciudad de Buenos Aires',
    description: 'Especializate en electricidad, inyección y diagnóstico automotriz en solo 4 meses. Aprendé a interpretar circuitos, medir señales y detectar fallas utilizando tester, escáner, sonda lógica y osciloscopio.'
  },
  {
    title: 'Electricidad e inyección de motos',
    type: 'Curso',
    start: '22 oct 2026',
    startSort: '2026-10-22',
    duration: '3 meses',
    days: 'Jueves',
    schedule: '9 a 13 h / 18 a 22 h',
    price: '$159.000',
    enrollment: '$55.000',
    badge: 'Próximo',
    aval: 'Certificado por Microcredenciales del Ministerio de Educación Del Gobierno de la Ciudad de Buenos Aires',
    description: 'Formate en un curso intensivo y aprendé a comprender, diagnosticar y trabajar con los sistemas eléctricos y electrónicos de las motocicletas modernas. Incorporá conocimientos prácticos para detectar fallas, realizar controles y mejorar su funcionamiento, con una capacitación orientada al mundo laboral.'
  },
  {
    title: 'Diagnóstico de Camiones',
    type: 'Curso',
    start: '24 y 25 oct 2026',
    startSort: '2026-10-24',
    duration: '2 días',
    days: 'Sábado y domingo',
    schedule: 'Sáb 9 a 18 h · Dom 9 a 13 h',
    price: 'A consultar',
    enrollment: 'A consultar',
    badge: 'Intensivo',
    aval: 'Certificado por Microcredenciales del Ministerio de Educación Del Gobierno de la Ciudad de Buenos Aires',
    description: 'Formate en un curso intensivo y especializate en el diagnóstico de vehículos pesados. Aprendé a interpretar sistemas electrónicos, redes CAN Bus, realizar pruebas en tiempo real y detectar fallas complejas, con herramientas y conocimientos aplicados al mundo laboral.'
  },
  {
    title: 'Gestión de taller automotriz',
    type: 'Curso',
    start: '7 y 8 nov 2026',
    startSort: '2026-11-07',
    duration: 'Intensivo 2 días',
    days: 'Sábado y domingo',
    schedule: 'Sáb 9 a 18 h · Dom 9 a 13 h',
    price: 'A consultar',
    enrollment: 'A consultar',
    badge: 'Intensivo',
    aval: 'Certificado por Microcredenciales del Ministerio de Educación Del Gobierno de la Ciudad de Buenos Aires',
    description: 'Formate en un curso intensivo y llevá la gestión de tu taller al siguiente nivel. Aprendé a organizar órdenes de servicio y stock, definir el valor de la mano de obra, habilitar tu taller y mejorar la atención para fidelizar clientes. Herramientas de seguridad, prevención de riesgos y protección personal. Incluye 3 clases asincrónicas grabadas.'
  },
  {
    title: 'Reparación e instalación de aire acondicionado',
    type: 'Curso',
    start: '11 nov 2026',
    startSort: '2026-11-11',
    duration: '4 meses',
    days: 'Miércoles',
    schedule: '17:30 a 20:30 h / 19 a 22 h',
    price: '$109.000',
    enrollment: '$55.000',
    aval: 'Avalado por IAARA',
    description: 'Formate combinando clases teóricas y prácticas para adquirir conocimientos en reparación e instalación de equipos de aire acondicionado. Una capacitación respaldada por más de 30 años de experiencia en el rubro.'
  },
  {
    title: 'Carrera Mecánica y Electrónica Automotriz',
    type: 'Carrera',
    start: '15 feb 2027',
    startSort: '2027-02-15',
    duration: '1 año',
    days: 'Lunes, miércoles y viernes',
    schedule: '9 a 13 h / 18 a 22 h',
    price: '$300.000',
    enrollment: '$165.000',
    badge: 'Oficial',
    aval: 'Certificado por el Ministerio de Educación',
    description: 'Formate en mecánica, electricidad, electrónica e inyección automotriz, aprendiendo a diagnosticar, reparar y mantener vehículos convencionales y modernos. Capacitación teórica y práctica, con instrumental profesional y diagnóstico electrónico.'
  },
  {
    title: 'Carrera Mecánica y Electrónica de Motos',
    type: 'Carrera',
    start: '17 feb 2027',
    startSort: '2027-02-17',
    duration: '1 año',
    days: 'Lunes, miércoles y viernes',
    schedule: '9 a 13 h / 18 a 22 h',
    price: '$300.000',
    enrollment: '$150.000',
    badge: 'Oficial',
    aval: 'Certificado por el Ministerio de Educación',
    description: 'Aprendé mecánica, electricidad, electrónica e inyección de motocicletas, desde el mantenimiento hasta el diagnóstico y reparación de sistemas modernos. Trabajá con instrumental profesional, escáner, osciloscopio y herramientas de medición.'
  },
  {
    title: 'Plomería',
    type: 'Curso',
    start: 'Próximamente',
    startSort: '2027-09-01',
    duration: '4 meses',
    days: 'Martes',
    schedule: 'A confirmar',
    price: '$109.000',
    enrollment: '$55.000',
    aval: 'Avalado por CAIM',
    description: 'Capacitación integral en instalaciones sanitarias, distribución de agua, desagües cloacales y pluviales, y reparación integral de redes domésticas y comerciales con materiales y herramientas de taller.'
  },
  {
    title: 'Energía Solar Fotovoltaica',
    type: 'Curso',
    start: 'Próximamente',
    startSort: '2027-09-02',
    duration: '4 meses',
    days: 'Jueves',
    schedule: '20 a 22 h',
    price: 'A consultar',
    enrollment: 'A consultar',
    aval: 'Avalado por CAIM',
    description: 'Aprendé dimensionamiento, montaje e interconexión de paneles solares, inversores y acumuladores para instalaciones residenciales e industriales sustentables.'
  },
  {
    title: 'Electricidad domiciliaria',
    type: 'Curso',
    start: 'Próximamente',
    startSort: '2027-09-03',
    duration: '4 meses',
    days: 'Jueves',
    schedule: '20 a 22 h',
    price: '$109.000',
    enrollment: '$55.000',
    aval: 'Avalado por CAIM',
    description: 'Instalaciones eléctricas residenciales y comerciales bajo normativas vigentes. Tableros, circuitos, protecciones térmicas y diferenciales con práctica integral.'
  }
]
const faqs: [string, string][] = [
  [
    '¿Puedo empezar sin experiencia?',
    'Sí, absolutamente. La mayoría de nuestros alumnos llegan sin haber tocado una herramienta antes, y eso no es ningún problema. Los cursos e introducciones arrancan desde cero: el docente acompaña cada paso, los conceptos se presentan de forma simple y la práctica es guiada desde el primer día. Lo único que necesitás traer es ganas de aprender — el resto lo ponemos nosotros.'
  ],
  [
    '¿Qué necesito para inscribirme?',
    'Solo tus datos personales y reservar tu lugar. Escribinos por WhatsApp y te confirmamos disponibilidad, medios de pago y todo lo que necesitás saber antes de arrancar.'
  ],
  [
    '¿Dónde se cursa?',
    'La formación es 100% presencial en ICAQ, Av. Hipólito Yrigoyen 359, Quilmes Centro, Buenos Aires. Estamos bien ubicados, a pocos minutos de la estación de tren Quilmes.'
  ],
  [
    '¿Entregan certificado o tienen aval?',
    'Nuestras propuestas cuentan con certificaciones y avales oficiales según cada área: certificación del Ministerio de Educación en nuestras carreras de 1 año, Certificado por Microcredenciales del Ministerio de Educación Del Gobierno de la Ciudad de Buenos Aires en formación técnica automotriz y de motos, aval del IAARA en Aire Acondicionado y aval de CAIM en oficios (Plomería, Fotovoltaica y Electricidad). Al finalizar recibís la documentación oficial correspondiente.'
  ],
]

function Logo() { return <img className="logo" src={logoUrl} alt="ICAQ — Instituto de Capacitación y Aprendizaje Quilmes" /> }

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.71 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

const courseSlug = (title: string) =>
  'curso-' +
  title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<'Todos' | 'Próximos' | 'Curso' | 'Carrera'>('Todos')
  const [expanded, setExpanded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selected, setSelected] = useState<Course | null>(null)
  const [highlightedCourse, setHighlightedCourse] = useState<string | null>(null)
  const [form, setForm] = useState({ nombre: '', telefono: '', consulta: '' })
  const upcoming = useMemo(() => courses.slice(0, 4), [])
  const visible = courses.filter(c => filter === 'Todos' || (filter === 'Próximos' ? c.startSort < '2027-01-01' : c.type === filter))
  const displayedCourses = expanded ? visible : visible.slice(0, 3)
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  const ask = (course?: Course) => { if (course) setSelected(course); scrollTo('contacto') }

  const goToCourse = (course: Course) => {
    if (filter !== 'Todos' && filter !== course.type && (filter !== 'Próximos' || course.startSort >= '2027-01-01')) {
      setFilter('Todos')
    }
    setExpanded(true)
    setHighlightedCourse(course.title)
    const id = courseSlug(course.title)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else {
        scrollTo('propuestas')
      }
    }, 60)
    setTimeout(() => {
      setHighlightedCourse(null)
    }, 2800)
  }

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hola ICAQ, soy ${form.nombre}. Mi teléfono es ${form.telefono}. ${selected ? `Me interesa ${selected.title}, comienza el ${selected.start}.` : 'Quisiera información sobre los próximos cursos.'} ${form.consulta}`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
  }
  return (
    <main>

      <div className="header-wrap">


        {/* MAIN HEADER */}
        <header className="site-header">
          <a href="#inicio" className="brand-link" aria-label="Ir al inicio ICAQ">
            <div className="logo-container">
              <Logo />
            </div>
          </a>

          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
            <button onClick={() => scrollTo('quienes-somos')}>
              Quiénes somos
            </button>
            <button onClick={() => scrollTo('agenda')}>
              Próximos cursos
            </button>
            <button onClick={() => scrollTo('propuestas')}>
              Propuestas
            </button>
            <button onClick={() => scrollTo('metodo')}>
              Cómo aprendés
            </button>
            <button onClick={() => scrollTo('contacto')}>
              Contacto
            </button>
          </nav>

          <div className="header-actions">
            <button className="header-cta" onClick={() => scrollTo('contacto')}>
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
            <button className="button button-primary hero-btn-main" onClick={() => scrollTo('propuestas')}>Ver cursos y carreras <ArrowRight size={17} /></button>
            <button className="text-button hero-btn-secondary" onClick={() => scrollTo('quienes-somos')}>Conocé ICAQ <span>↓</span></button>
          </div>
          <div className="hero-proof"><span className="proof-mark"><Check size={16} /></span><span>Presencial · Práctico · Quilmes</span></div>
        </div>
        <div id="agenda" className="hero-agenda reveal reveal-delay-2">
          <div className="agenda-heading"><span>AGENDA ICAQ / 2026</span><b>Próximos comienzos</b><small>Tocá un curso para ver su ficha completa.</small></div>
          {upcoming.map((c, i) => (
            <button className="agenda-item" style={{ '--i': i } as React.CSSProperties} key={c.title} onClick={() => goToCourse(c)}>
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
        <div className="section-shell">
          <div className="quienes-grid reveal">
            <div className="quienes-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> QUIÉNES SOMOS</p>
              <h2>Instituto de Capacitación<br /><span>y Aprendizaje Quilmes</span></h2>
              <p>Somos una institución de formación técnica y profesional con sede en Quilmes Centro. Nuestro propósito es claro: brindar herramientas reales para que cada alumno pueda incorporarse al mundo laboral, perfeccionar su técnica o iniciar su propio taller.</p>
              <p>Trabajamos con docentes especializados, metodología práctica y grupos reducidos para garantizar un aprendizaje de calidad. Cada propuesta está pensada para que apliques lo aprendido con herramientas reales desde el primer día, sin rodeos y sin teoría vacía.</p>

              <div className="quienes-bottom">
                <button className="button button-primary" onClick={() => scrollTo('propuestas')}>Ver todas las propuestas <ArrowRight size={18} /></button>
                <div className="cam-box">
                  <span className="cam-label">AVALADO POR</span>
                  <img className="cam-logo" src="/logo_cam.png" alt="CAM — Centro Argentino de Mecatrónica" />
                  <p className="cam-years"><strong>+30 años</strong> formando profesionales del sector automotriz</p>
                </div>
              </div>
            </div>

            <div className="photo-slot photo-slot--featured" aria-label="Sede y talleres del instituto">
              <img src="/local.jpeg" alt="Sede ICAQ y CAM Quilmes Centro - Hipólito Yrigoyen 359" />
              <span className="photo-slot-badge">Av. Hipólito Yrigoyen 359, Quilmes Centro</span>
            </div>
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
            <button key={item} className={filter === item ? 'filter active' : 'filter'} onClick={() => { setFilter(item); setExpanded(false); }}>{item}{item === 'Próximos' && <span>2026</span>}</button>
          ))}
        </div>
        <div className="course-catalog">
          {displayedCourses.map((c, i) => {
            const id = courseSlug(c.title)
            const isHighlighted = highlightedCourse === c.title
            return (
              <article id={id} className={`catalog-card reveal ${isHighlighted ? 'is-highlighted' : ''}`} style={{ '--i': i } as React.CSSProperties} key={c.title}>
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
                {c.aval && <p className="aval">{c.aval}</p>}
                <button className="course-cta" onClick={() => ask(c)}>Consultar vacante <ArrowRight size={16} /></button>
              </article>
            )
          })}
        </div>
        {visible.length > 3 && (
          <div className="catalog-toggle-wrap">
            <button
              className="catalog-toggle-btn"
              onClick={() => {
                if (expanded) {
                  setExpanded(false)
                  document.getElementById('propuestas')?.scrollIntoView({ behavior: 'smooth' })
                } else {
                  setExpanded(true)
                }
              }}
            >
              {expanded ? (
                <>
                  <span>Mostrar menos</span>
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  <span>Ver más propuestas ({visible.length - 3})</span>
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}
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
              <a href="https://www.google.com/maps/search/?api=1&query=Av.+Hip%C3%B3lito+Yrigoyen+359%2C+Quilmes" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <MapPin size={18} /> <span>Av. Hipólito Yrigoyen 359, Quilmes Centro</span>
              </a>
              <p><Phone size={18} /> +54 11 2605-0359</p>
              <a href="https://www.instagram.com/somos.icaq/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                <InstagramIcon size={18} /> <span>Instagram: <strong>@somos.icaq</strong></span>
              </a>
              <p><Clock3 size={18} /> Lunes a viernes · 9 a 13 / 16 a 20 h</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={sendWhatsApp}>
            {selected && (
              <div className="selected-course">
                <small>Consulta seleccionada</small>
                <strong>{selected.title}</strong>
                <span>Comienza {selected.start}{selected.price ? ` · ${selected.price}` : ''}</span>
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
            <a href="https://www.instagram.com/somos.icaq/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de ICAQ (@somos.icaq)">
              <InstagramIcon size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook de ICAQ">
              <FacebookIcon size={16} />
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de ICAQ">
              <WhatsAppIcon size={16} />
            </a>
          </div>
          <span className="footer-copy">© 2026 ICAQ. Todos los derechos reservados.</span>
        </div>
      </footer>
    </main>
  )
}
