import Link from 'next/link'

export default function Home() {
  const prototypes = [
    {
      id: 1,
      name: 'Prototyp 1',
      description: 'Modern Minimalistisk Design',
      features: ['Ren och elegant', 'Fokus på innehåll', 'Stora bilder'],
      color: 'from-blue-500 to-cyan-600',
      href: '/prototyp-1'
    },
    {
      id: 2,
      name: 'Prototyp 2',
      description: 'Klassisk Professionell Design',
      features: ['Traditionell layout', 'Tydlig struktur', 'Företagsfokus'],
      color: 'from-slate-700 to-slate-900',
      href: '/prototyp-2'
    },
    {
      id: 3,
      name: 'Prototyp 3',
      description: 'Livfull Bildrik Design',
      features: ['Dynamisk layout', 'Mycket bilder', 'Engagerande'],
      color: 'from-orange-500 to-red-600',
      href: '/prototyp-3'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <a href="#main-content" className="skip-link">
        Hoppa till huvudinnehåll
      </a>

      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Trade Of Sweden - Prototyper
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Utforska tre olika designkoncept för Trade Of Sweden.
            Varje prototyp har sin unika stil och approach.
          </p>
        </header>

        <div id="main-content" className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {prototypes.map((prototype) => (
            <article
              key={prototype.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${prototype.color} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-2">{prototype.name}</h2>
                  <p className="text-lg opacity-90">{prototype.description}</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Funktioner:</h3>
                <ul className="space-y-2 mb-6">
                  {prototype.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={prototype.href}
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Visa {prototype.name}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <footer className="text-center mt-16 text-gray-600">
          <p className="text-sm">
            Utvecklad med Next.js och Tailwind CSS | Alla prototyper är responsiva och tillgängliga
          </p>
        </footer>
      </div>
    </main>
  )
}
