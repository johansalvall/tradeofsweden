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
      <div className="bg-zinc-900 text-white py-3 px-4 border-b-4 border-yellow-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm font-semibold">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              070-123 45 67
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              info@tradeofsweden.se
            </span>
          </div>
          <div className="text-yellow-400 mt-2 sm:mt-0">
            <span>Öppettider: Mån-Fre 07:00-17:00</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50" role="navigation" aria-label="Huvudnavigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-black text-zinc-800">
                Trade Of Sweden
              </Link>
              <p className="text-sm text-zinc-600 font-bold uppercase tracking-wider">Gräv & Markentreprenad</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#hem" className="text-zinc-700 hover:text-zinc-900 font-bold transition-colors">
                Hem
              </a>
              <a href="#tjanster" className="text-zinc-700 hover:text-zinc-900 font-bold transition-colors">
                Tjänster
              </a>
              <a href="#om-oss" className="text-zinc-700 hover:text-zinc-900 font-bold transition-colors">
                Om oss
              </a>
              <a href="#projekt" className="text-zinc-700 hover:text-zinc-900 font-bold transition-colors">
                Projekt
              </a>
              <a
                href="#kontakt"
                className="bg-yellow-500 text-zinc-900 px-6 py-2 rounded-sm font-black hover:bg-yellow-400 transition-colors border-b-4 border-yellow-700"
              >
                Kontakt
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-zinc-700"
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
        <a id="main-content" className="sr-only">Main content</a>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_4804.jpeg"
            alt="Trade Of Sweden - Professionell Gräv- & Markentreprenad"
            fill
            className="object-cover"
            priority
          />
          {/* Dark industrial overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/85 to-zinc-800/70"></div>
          {/* Construction grid pattern */}
          <div className="absolute inset-0 opacity-5 bg-construction-texture"></div>
          {/* Heavy machinery silhouette */}
          <div className="absolute bottom-0 left-0 w-1/2 h-2/3 opacity-15">
            <svg viewBox="0 0 300 150" fill="currentColor" className="text-yellow-500 w-full h-full">
              <path d="M20 120 L40 120 L40 90 L60 90 L60 60 L100 60 L115 45 L130 60 L130 120 L260 120 L260 100 L230 100 L230 70 L200 70 L200 120 M40 125 A8 8 0 1 1 40 140 A8 8 0 1 1 40 125 M130 125 A8 8 0 1 1 130 140 A8 8 0 1 1 130 125 M200 125 A8 8 0 1 1 200 140 A8 8 0 1 1 200 125 M250 125 A8 8 0 1 1 250 140 A8 8 0 1 1 250 125" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-yellow-500/20 backdrop-blur-sm border-2 border-yellow-500 rounded-sm px-4 py-2 mb-6">
              <p className="text-yellow-400 font-black text-sm uppercase tracking-widest">Certifierad Markentreprenad Sedan 2003</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-shadow-lg">
              Professionell Gräv- & Markentreprenad
            </h1>
            <p className="text-xl mb-8 text-gray-100 text-shadow-md font-medium">
              Med över 20 års erfarenhet levererar vi högkvalitativa gräv- och markarbeten
              till konkurrenskraftiga priser. Vi är er pålitliga partner från start till mål.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-block bg-yellow-500 text-zinc-900 px-8 py-4 rounded-sm text-lg font-black hover:bg-yellow-400 transition-all hover:scale-105 text-center shadow-2xl border-b-4 border-yellow-700"
              >
                Begär offert
              </a>
              <a
                href="tel:0701234567"
                className="inline-block bg-zinc-700 text-white px-8 py-4 rounded-sm text-lg font-black hover:bg-zinc-600 transition-all hover:scale-105 text-center shadow-2xl border-2 border-zinc-500"
              >
                Ring oss nu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 py-16 px-4 border-y-4 border-yellow-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimation key={index} type="zoom" duration={600} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-200 font-bold uppercase tracking-wide text-sm">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-500 text-zinc-900 px-4 py-2 rounded-sm mb-4 font-black text-sm uppercase tracking-widest">
                Våra Specialområden
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">
                Våra Tjänster
              </h2>
              <p className="text-xl text-zinc-700 max-w-3xl mx-auto font-medium">
                Vi erbjuder ett komplett utbud av gräv- och markarbeten för privat- och företagskunder.
                Alla arbeten utförs av erfarna yrkesmän med rätt certifieringar.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} type="slide-up" duration={700} delay={index * 50}>
                <article className="bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all border-l-4 border-yellow-500 hover:scale-[1.02]"
              >
                <h3 className="text-2xl font-black text-zinc-900 mb-4 pb-3 border-b-4 border-yellow-500">
                  {service.title}
                </h3>
                <p className="text-zinc-700 mb-6 font-medium">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-zinc-700 font-medium">
                      <svg
                        className="w-5 h-5 mr-2 text-yellow-600"
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
          <div className="grid md:grid-cols-2 gap-12 items-center overflow-visible">
            <ScrollAnimation type="slide-right" duration={700} threshold={0.05}>
              <div className="rounded-sm overflow-hidden shadow-2xl order-2 md:order-1 border-4 border-zinc-300">
                <Image
                  src="/images/IMG_0651.jpeg"
                  alt="Trädäcksbygge under arbete - vårt erfarna team"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation type="slide-left" duration={700} delay={100} threshold={0.05}>
              <div className="order-1 md:order-2">
              <div className="inline-block bg-yellow-100 text-zinc-900 px-4 py-2 rounded-sm mb-6 font-black text-sm uppercase tracking-widest">
                Familjeägt Sedan 2003
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                Om Trade Of Sweden
              </h2>
              <p className="text-lg text-zinc-700 mb-4 font-medium">
                Vi är ett familjeägt företag som har verkat inom gräv- och markbranschen sedan 2003.
                Med över 20 års erfarenhet har vi byggt upp ett starkt förtroende hos våra kunder
                genom kvalitet, pålitlighet och professionalism.
              </p>
              <p className="text-lg text-zinc-700 mb-6 font-medium">
                Vårt team består av erfarna maskinförare och yrkesmän som är certifierade och
                försäkrade. Vi använder modern utrustning och följer alltid gällande säkerhetsföreskrifter.
              </p>

              <div className="bg-zinc-900 p-6 rounded-sm border-l-4 border-yellow-500 mb-6">
                <h3 className="text-xl font-black text-yellow-400 mb-3 uppercase tracking-wide">Varför välja oss?</h3>
                <ul className="space-y-2">
                  {[
                    'Certifierade och erfarna operatörer',
                    'Modern och välunderhållen maskinpark',
                    'Alla arbeten är försäkrade',
                    'Kostnadsfri offert och rådgivning',
                    'Snabb och flexibel service',
                    'Konkurrrenskraftiga priser'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-white font-medium">
                      <svg
                        className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0"
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
      <section id="projekt" className="py-20 px-4 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-500 text-zinc-900 px-4 py-2 rounded-sm mb-4 font-black text-sm uppercase tracking-widest">
                Vårt Arbete
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">
                Tidigare Projekt
              </h2>
              <p className="text-xl text-zinc-700 font-medium">
                En samling av våra senaste genomförda projekt
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation type="zoom" duration={700} delay={0}>
              <article className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-b-4 border-yellow-500">
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
                <h3 className="text-xl font-black text-zinc-900 mb-2">
                  Altan & Pool
                </h3>
                <p className="text-zinc-700 font-medium">
                  Komplett uteplats med trädäck och pool. Markarbete, nivellering och färdig anläggning.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={100}>
              <article className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-b-4 border-yellow-500">
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
                <h3 className="text-xl font-black text-zinc-900 mb-2">
                  Poolgrävning
                </h3>
                <p className="text-zinc-700 font-medium">
                  Professionell poolgrävning med dränering och korrekt markberedning för långvarig hållbarhet.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={200}>
              <article className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-b-4 border-yellow-500">
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
                <h3 className="text-xl font-black text-zinc-900 mb-2">
                  Infiltration & Dränering
                </h3>
                <p className="text-zinc-700 font-medium">
                  Modern utrustning och expertis för infiltrations- och dräneringssystem.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={50}>
              <article className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-b-4 border-yellow-500">
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
                <h3 className="text-xl font-black text-zinc-900 mb-2">
                  Staket & Tomtmarkering
                </h3>
                <p className="text-zinc-700 font-medium">
                  Professionellt staketbygge och markberedning runt fastighet.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={150}>
              <article className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-b-4 border-yellow-500">
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
                <h3 className="text-xl font-black text-zinc-900 mb-2">
                  Trädäcksarbete
                </h3>
                <p className="text-zinc-700 font-medium">
                  Högkvalitativ markförberedelse för stabila och hållbara trädäck. Erfaret team.
                </p>
              </div>
            </article>
            </ScrollAnimation>
            <ScrollAnimation type="zoom" duration={700} delay={250}>
              <article className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02] border-b-4 border-yellow-500">
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
                <h3 className="text-xl font-black text-zinc-900 mb-2">
                  Markberedning
                </h3>
                <p className="text-zinc-700 font-medium">
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
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">
                Kontakta Oss
              </h2>
              <p className="text-xl text-zinc-700 font-medium">
                Vi återkommer med offert inom 24 timmar
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 overflow-visible">
            <ScrollAnimation type="slide-right" duration={700} delay={100} threshold={0.05}>
              <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-zinc-900 mb-2 uppercase tracking-wide">
                    Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border-2 border-zinc-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-black text-zinc-900 mb-2 uppercase tracking-wide">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-zinc-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-black text-zinc-900 mb-2 uppercase tracking-wide">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border-2 border-zinc-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-black text-zinc-900 mb-2 uppercase tracking-wide">
                    Typ av tjänst *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 border-2 border-zinc-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    aria-required="true"
                  >
                    <option value="">Välj tjänst...</option>
                    {services.map((service, i) => (
                      <option key={i} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-black text-zinc-900 mb-2 uppercase tracking-wide">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-2 border-zinc-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    aria-required="true"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-zinc-900 px-8 py-4 rounded-sm text-lg font-black hover:bg-yellow-400 transition-all hover:scale-[1.02] border-b-4 border-yellow-700"
                >
                  Skicka förfrågan
                </button>
              </form>
            </div>
            </ScrollAnimation>

            <ScrollAnimation type="slide-left" duration={700} delay={200} threshold={0.05}>
              <div className="space-y-8">
              <div className="bg-stone-100 p-8 rounded-sm border-2 border-zinc-300">
                <h3 className="text-2xl font-black text-zinc-900 mb-6 uppercase tracking-wide">Kontaktinformation</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-yellow-600 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <div>
                      <p className="font-black text-zinc-900 uppercase tracking-wide text-sm">Telefon</p>
                      <a href="tel:0701234567" className="text-yellow-600 hover:underline font-bold text-lg">
                        070-123 45 67
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-yellow-600 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <div>
                      <p className="font-black text-zinc-900 uppercase tracking-wide text-sm">E-post</p>
                      <a href="mailto:info@tradeofsweden.se" className="text-yellow-600 hover:underline font-bold">
                        info@tradeofsweden.se
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-yellow-600 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="font-black text-zinc-900 uppercase tracking-wide text-sm">Öppettider</p>
                      <p className="text-zinc-700 font-medium">Mån-Fre: 07:00-17:00</p>
                      <p className="text-zinc-700 font-medium">Lör-Sön: Stängt</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-yellow-600 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <p className="font-black text-zinc-900 uppercase tracking-wide text-sm">Besöksadress</p>
                      <p className="text-zinc-700 font-medium">Grävgatan 123</p>
                      <p className="text-zinc-700 font-medium">123 45 Stockholm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500 p-8 rounded-sm border-b-4 border-yellow-700">
                <h3 className="text-xl font-black text-zinc-900 mb-3 uppercase tracking-wide">Akut hjälp?</h3>
                <p className="text-zinc-900 mb-4 font-medium">
                  Vi erbjuder jour vid akuta ärenden. Ring oss för snabb hjälp!
                </p>
                <a
                  href="tel:0701234567"
                  className="inline-block bg-zinc-900 text-yellow-400 px-6 py-3 rounded-sm font-black hover:bg-zinc-800 transition-colors"
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
      <footer className="bg-zinc-900 text-white py-12 px-4 border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black mb-4 text-yellow-400">Trade Of Sweden</h3>
              <p className="text-gray-300 font-medium">
                Din pålitliga partner för gräv- och markarbeten sedan 2003
              </p>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4 text-yellow-400 uppercase tracking-wide">Tjänster</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#tjanster" className="hover:text-yellow-400 transition-colors font-medium">Gräv & Markarbete</a></li>
                <li><a href="#tjanster" className="hover:text-yellow-400 transition-colors font-medium">Avlopp & Infiltration</a></li>
                <li><a href="#tjanster" className="hover:text-yellow-400 transition-colors font-medium">Dränering</a></li>
                <li><a href="#tjanster" className="hover:text-yellow-400 transition-colors font-medium">Poolgrävning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4 text-yellow-400 uppercase tracking-wide">Företaget</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#om-oss" className="hover:text-yellow-400 transition-colors font-medium">Om oss</a></li>
                <li><a href="#projekt" className="hover:text-yellow-400 transition-colors font-medium">Våra projekt</a></li>
                <li><a href="#kontakt" className="hover:text-yellow-400 transition-colors font-medium">Kontakt</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors font-medium">Karriär</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-black mb-4 text-yellow-400 uppercase tracking-wide">Kontakt</h4>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li>Tel: 070-123 45 67</li>
                <li>E-post: info@tradeofsweden.se</li>
                <li>Adress: Grävgatan 123, Stockholm</li>
                <li>Tid: Mån-Fre 07:00-17:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 font-medium">
              © 2024 Trade Of Sweden. Alla rättigheter förbehållna.
            </p>
            <Link href="/" className="text-yellow-400 hover:text-yellow-300 font-black">
              ← Tillbaka till prototypöversikt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
