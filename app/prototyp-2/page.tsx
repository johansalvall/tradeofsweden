'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Prototyp2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      title: 'Gräv & Markarbete',
      description: 'Professionell grävning och markberedning för alla typer av projekt. Vi har lång erfarenhet av komplexa grävarbeten.',
      features: ['Schaktning', 'Markplanering', 'Maskingrävning', 'Handgrävning']
    },
    {
      title: 'Avlopp & Infiltration',
      description: 'Installation och underhåll av avloppssystem och infiltrationsanläggningar enligt gällande normer.',
      features: ['Avloppsinstallation', 'Infiltration', 'Pumpstationer', 'Service']
    },
    {
      title: 'Dränering runt Hus',
      description: 'Vi skyddar din fastighet från fukt och vatten med professionell dränering.',
      features: ['Husdränering', 'Dräneringssystem', 'Fuktsäkring', 'Täckdiken']
    },
    {
      title: 'Poolgrävning',
      description: 'Expertgrävning för pooler av alla storlekar. Vi ser till att allt är perfekt förberett.',
      features: ['Poolschakt', 'Nivellering', 'Dränering', 'Återfyllning']
    },
    {
      title: 'Husgrund & Väggarbete',
      description: 'Grundläggning och väggarbete utfört av erfarna yrkesmän.',
      features: ['Grundläggning', 'Källargrävning', 'Stödmurar', 'Väggarbete']
    },
    {
      title: 'Altan & Trädäck',
      description: 'Markberedning och förberedelse för altaner och trädäck.',
      features: ['Markberedning', 'Nivellering', 'Stomarbete', 'Grundläggning']
    }
  ]

  const stats = [
    { number: '20+', label: 'Års erfarenhet' },
    { number: '500+', label: 'Nöjda kunder' },
    { number: '1000+', label: 'Genomförda projekt' },
    { number: '100%', label: 'Kvalitetsgaranti' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <a href="#main-content" className="skip-link">
        Hoppa till huvudinnehåll
      </a>

      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📞 070-123 45 67</span>
            <span>✉️ info@tradeofsweden.se</span>
          </div>
          <div>
            <span>Öppettider: Mån-Fre 07:00-17:00</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50" role="navigation" aria-label="Huvudnavigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-bold text-slate-800">
                Trade Of Sweden
              </Link>
              <p className="text-sm text-gray-600">Gräv & Markentreprenad</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#hem" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">
                Hem
              </a>
              <a href="#tjanster" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">
                Tjänster
              </a>
              <a href="#om-oss" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">
                Om oss
              </a>
              <a href="#projekt" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">
                Projekt
              </a>
              <a
                href="#kontakt"
                className="bg-slate-800 text-white px-6 py-2 rounded hover:bg-slate-700 transition-colors"
              >
                Kontakt
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700"
              aria-expanded={mobileMenuOpen}
              aria-label="Öppna huvudmeny"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Hem', 'Tjänster', 'Om oss', 'Projekt', 'Kontakt'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hem" className="relative text-white py-32 px-4 min-h-[650px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_4804.jpeg"
            alt="Trade Of Sweden - Professionell Gräv- & Markentreprenad"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-slate-900/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professionell Gräv- & Markentreprenad
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Med över 20 års erfarenhet levererar vi högkvalitativa gräv- och markarbeten
              till konkurrenskraftiga priser. Vi är er pålitliga partner från start till mål.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-block bg-orange-600 text-white px-8 py-4 rounded text-lg font-semibold hover:bg-orange-700 transition-colors text-center shadow-xl"
              >
                Begär offert
              </a>
              <a
                href="tel:0701234567"
                className="inline-block bg-white text-slate-800 px-8 py-4 rounded text-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-xl"
              >
                Ring oss nu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} type="zoom" duration={600} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Våra Tjänster
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vi erbjuder ett komplett utbud av gräv- och markarbeten för privat- och företagskunder.
                Alla arbeten utförs av erfarna yrkesmän med rätt certifieringar.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} type="slide-up" duration={700} delay={index * 50}>
                <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-4 pb-3 border-b-2 border-orange-600">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-2 text-orange-600"
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
              </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="slide-right" duration={700}>
              <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/IMG_0651.jpeg"
                  alt="Trädäcksbygge under arbete - vårt erfarna team"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="slide-left" duration={700} delay={100}>
              <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Om Trade Of Sweden
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Vi är ett familjeägt företag som har verkat inom gräv- och markbranschen sedan 2003.
                Med över 20 års erfarenhet har vi byggt upp ett starkt förtroende hos våra kunder
                genom kvalitet, pålitlighet och professionalism.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Vårt team består av erfarna maskinförare och yrkesmän som är certifierade och
                försäkrade. Vi använder modern utrustning och följer alltid gällande säkerhetsföreskrifter.
              </p>

              <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-orange-600 mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Varför välja oss?</h3>
                <ul className="space-y-2">
                  {[
                    'Certifierade och erfarna operatörer',
                    'Modern och välunderhållen maskinpark',
                    'Alla arbeten är försäkrade',
                    'Kostnadsfri offert och rådgivning',
                    'Snabb och flexibel service',
                    'Konkurrrenskraftiga priser'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 mr-2 text-orange-600 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projekt" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Tidigare Projekt
              </h2>
              <p className="text-xl text-gray-600">
                En samling av våra senaste genomförda projekt
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation type="zoom" duration={700} delay={0}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/images/IMG_4804.jpeg"
                  alt="Färdig altan och pool"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Altan & Pool
                </h3>
                <p className="text-gray-600">
                  Komplett uteplats med trädäck och pool. Markarbete, nivellering och färdig anläggning.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={100}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/images/IMG_1139.jpeg"
                  alt="Poolgrävning med duk och dränering"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Poolgrävning
                </h3>
                <p className="text-gray-600">
                  Professionell poolgrävning med dränering och korrekt markberedning för långvarig hållbarhet.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={200}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/images/IMG_1158.jpeg"
                  alt="Grävmaskin i arbete - infiltration och dränering"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Infiltration & Dränering
                </h3>
                <p className="text-gray-600">
                  Modern utrustning och expertis för infiltrations- och dräneringssystem.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={50}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/images/IMG_4803.jpeg"
                  alt="Staketbygge och markarbete"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Staket & Tomtmarkering
                </h3>
                <p className="text-gray-600">
                  Professionellt staketbygge och markberedning runt fastighet.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={150}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/images/IMG_0651.jpeg"
                  alt="Trädäcksbygge under arbete"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Trädäcksarbete
                </h3>
                <p className="text-gray-600">
                  Högkvalitativ markförberedelse för stabila och hållbara trädäck. Erfaret team.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={250}>
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/images/IMG_1139.jpeg"
                  alt="Poolschakt förberedelse"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  Markberedning
                </h3>
                <p className="text-gray-600">
                  Omfattande markarbeten för pooler och andra anläggningar med modern maskinpark.
                </p>
              </div>
            </article>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Kontakta Oss
              </h2>
              <p className="text-xl text-gray-600">
                Vi återkommer med offert inom 24 timmar
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollAnimation type="slide-right" duration={700} delay={100}>
              <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                    Typ av tjänst *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    aria-required="true"
                  >
                    <option value="">Välj tjänst...</option>
                    {services.map((service, i) => (
                      <option key={i} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                    aria-required="true"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white px-8 py-4 rounded text-lg font-bold hover:bg-orange-700 transition-colors"
                >
                  Skicka förfrågan
                </button>
              </form>
            </div>
            </ScrollAnimation>

            <ScrollAnimation type="slide-left" duration={700} delay={200}>
              <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Kontaktinformation</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4" aria-hidden="true">📞</span>
                    <div>
                      <p className="font-bold text-gray-800">Telefon</p>
                      <a href="tel:0701234567" className="text-orange-600 hover:underline">
                        070-123 45 67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4" aria-hidden="true">✉️</span>
                    <div>
                      <p className="font-bold text-gray-800">E-post</p>
                      <a href="mailto:info@tradeofsweden.se" className="text-orange-600 hover:underline">
                        info@tradeofsweden.se
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4" aria-hidden="true">🕒</span>
                    <div>
                      <p className="font-bold text-gray-800">Öppettider</p>
                      <p className="text-gray-600">Mån-Fre: 07:00-17:00</p>
                      <p className="text-gray-600">Lör-Sön: Stängt</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4" aria-hidden="true">📍</span>
                    <div>
                      <p className="font-bold text-gray-800">Besöksadress</p>
                      <p className="text-gray-600">Grävgatan 123</p>
                      <p className="text-gray-600">123 45 Stockholm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-600">
                <h3 className="text-xl font-bold text-slate-800 mb-3">Akut hjälp?</h3>
                <p className="text-gray-700 mb-4">
                  Vi erbjuder jour vid akuta ärenden. Ring oss för snabb hjälp!
                </p>
                <a
                  href="tel:0701234567"
                  className="inline-block bg-orange-600 text-white px-6 py-3 rounded font-bold hover:bg-orange-700 transition-colors"
                >
                  Ring jouren: 070-123 45 67
                </a>
              </div>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Trade Of Sweden</h3>
              <p className="text-gray-400">
                Din pålitliga partner för gräv- och markarbeten sedan 2003
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Tjänster</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tjanster" className="hover:text-white transition-colors">Gräv & Markarbete</a></li>
                <li><a href="#tjanster" className="hover:text-white transition-colors">Avlopp & Infiltration</a></li>
                <li><a href="#tjanster" className="hover:text-white transition-colors">Dränering</a></li>
                <li><a href="#tjanster" className="hover:text-white transition-colors">Poolgrävning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Företaget</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#om-oss" className="hover:text-white transition-colors">Om oss</a></li>
                <li><a href="#projekt" className="hover:text-white transition-colors">Våra projekt</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karriär</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 070-123 45 67</li>
                <li>✉️ info@tradeofsweden.se</li>
                <li>📍 Grävgatan 123, Stockholm</li>
                <li>🕒 Mån-Fre 07:00-17:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Trade Of Sweden. Alla rättigheter förbehållna.
            </p>
            <Link href="/" className="text-orange-600 hover:text-orange-500">
              ← Tillbaka till prototypöversikt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
