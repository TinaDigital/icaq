export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://icaq.com.ar'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'VocationalSchool'],
  '@id': `${siteUrl}/#organization`,
  name: 'ICAQ - Instituto de Capacitación y Aprendizaje Quilmes',
  alternateName: ['ICAQ', 'Instituto ICAQ'],
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: [
    `${siteUrl}/local.jpeg`,
    `${siteUrl}/logo.png`,
  ],
  description:
    'Instituto de formación técnica y profesional en mecánica automotriz, motos, inyección electrónica, electricidad, aire acondicionado y oficios con talleres prácticos en Quilmes Centro.',
  telephone: '+5491124807891',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Hipólito Yrigoyen 359',
    addressLocality: 'Quilmes',
    addressRegion: 'Buenos Aires',
    postalCode: 'B1878',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.7242,
    longitude: -58.2575,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Av.+Hip%C3%B3lito+Yrigoyen+359%2C+Quilmes',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '20:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/somos.icaq/',
    'https://www.facebook.com/profile.php?id=61593790325297',
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Quilmes' },
    { '@type': 'AdministrativeArea', name: 'Bernal' },
    { '@type': 'AdministrativeArea', name: 'Berazategui' },
    { '@type': 'AdministrativeArea', name: 'Avellaneda' },
    { '@type': 'AdministrativeArea', name: 'Florencio Varela' },
    { '@type': 'AdministrativeArea', name: 'Zona Sur Gran Buenos Aires' },
  ],
}

export function generateCoursesJsonLd(courses: Array<{
  title: string
  type: string
  duration: string
  days: string
  schedule: string
  price: string
  aval?: string
  description?: string
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((c, index) => {
      const priceNumeric = c.price.replace(/[^0-9]/g, '')
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          '@id': `${siteUrl}/#curso-${index + 1}`,
          name: c.title,
          description: c.description || `${c.type} de ${c.title} en ICAQ Quilmes. Duración ${c.duration}, modalidad presencial con práctica en taller.`,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'ICAQ - Instituto de Capacitación y Aprendizaje Quilmes',
            sameAs: siteUrl,
          },
          educationalCredentialAwarded: c.aval || 'Certificado Oficial ICAQ',
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'onsite',
            courseWorkload: `PT${c.duration}`,
            instructor: {
              '@type': 'Organization',
              name: 'Equipo Docente ICAQ & CAM',
            },
            location: {
              '@type': 'Place',
              name: 'Sede ICAQ Quilmes Centro',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Hipólito Yrigoyen 359',
                addressLocality: 'Quilmes',
                addressRegion: 'Buenos Aires',
                addressCountry: 'AR',
              },
            },
          },
          ...(priceNumeric
            ? {
                offers: {
                  '@type': 'Offer',
                  category: 'Tuition',
                  price: priceNumeric,
                  priceCurrency: 'ARS',
                  availability: 'https://schema.org/InStock',
                  url: `${siteUrl}/#propuestas`,
                },
              }
            : {}),
        },
      }
    }),
  }
}

export function generateFaqJsonLd(faqs: [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

export const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Cursos y Carreras',
      item: `${siteUrl}/#propuestas`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Contacto e Inscripción',
      item: `${siteUrl}/#contacto`,
    },
  ],
}
