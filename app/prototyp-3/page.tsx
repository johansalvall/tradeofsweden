'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Prototyp3() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: 'Gräv & Markarbete',
      shortDesc: 'Professionell grävning för alla projekt',
      fullDesc: 'Vi utför alla typer av grävarbeten med precision och omsorg. Vårt erfarna team och moderna maskiner garanterar ett resultat i världsklass.',
      icon: '🚜',
      color: 'from-amber-500 to-orange-600',
      features: ['Schaktning', 'Markplanering', 'Terrassering', 'Fyllnadsarbeten']
    },
    {
      title: 'Avlopp & Infiltration',
      shortDesc: 'Kompletta avloppslösningar',
      fullDesc: 'Från installation till service - vi hanterar alla aspekter av avlopp och infiltration enligt gällande miljönormer.',
      icon: '💧',
      color: 'from-blue-500 to-cyan-600',
      features: ['Avloppsinstallation', 'Infiltrationssystem', 'Pumpstationer', 'Service & underhåll']
    },
    {
      title: 'Dränering runt Hus',
      shortDesc: 'Skydda ditt hem från fukt',
      fullDesc: 'En väl utförd dränering är avgörande för husets livslängd. Vi erbjuder kompletta dräneringslösningar.',
      icon: '🏠',
      color: 'from-green-500 to-emerald-600',
      features: ['Husdränering', 'Fuktsäkring', 'Täckdiken', 'Dräneringssystem']
    },
    {
      title: 'Poolgrävning',
      shortDesc: 'Förbered för din drömpool',
      fullDesc: 'Vi gräver perfekta poolschakt och ser till att allt är förberett för din nya pool. Exakt nivellering garanteras.',
      icon: '🏊',
      color: 'from-sky-400 to-blue-600',
      features: ['Poolschakt', 'Nivellering', 'Dräneringsplanering', 'Återfyllning']
    },
    {
      title: 'Husgrund & Väggarbete',
      shortDesc: 'Stabil grund för ditt hem',
      fullDesc: 'Grundläggning är fundamentet för varje bygge. Vi levererar precision och kvalitet i varje husgrund.',
      icon: '🏗️',
      color: 'from-stone-500 to-slate-700',
      features: ['Grundschakt', 'Källargrävning', 'Stödmurar', 'Väggförberedelser']
    },
    {
      title: 'Altan & Trädäck',
      shortDesc: 'Förbered för uteplatsen',
      fullDesc: 'Vi skapar den perfekta grunden för din uteplats. Från markarbete till färdig förberedelse.',
      icon: '🪵',
      color: 'from-yellow-600 to-amber-700',
      features: ['Markberedning', 'Nivellering', 'Grundläggning', 'Stomförberedelse']
    }
  ]

  const testimonials = [
    {
      name: 'Anna Svensson',
      location: 'Stockholm',
      text: 'Fantastiskt jobb med vår poolgrävning! Proffsigt, snabbt och till ett bra pris.',
      rating: 5
    },
    {
      name: 'Erik Johansson',
      location: 'Uppsala',
      text: 'Installationen av vårt avlopp gick smidigt. Kan varmt rekommendera!',
      rating: 5
    },
    {
      name: 'Maria Lindström',
      location: 'Västerås',
      text: 'Dräneringen runt vårt hus löste alla fuktproblem. Tack för ett proffsigt arbete!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      <a href="#main-content" className="skip-link">
        Hoppa till huvudinnehåll
      </a>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-lg z-50" role="navigation" aria-label="Huvudnavigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Trade Of Sweden
                  </div>
                  <div className="text-xs text-gray-600">Gräv & Markentreprenad</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#hem" className="text-gray-700 hover:text-orange-600 font-semibold transition-colors">
                Hem
              </a>
              <a href="#tjanster" className="text-gray-700 hover:text-orange-600 font-semibold transition-colors">
                Tjänster
              </a>
              <a href="#galleri" className="text-gray-700 hover:text-orange-600 font-semibold transition-colors">
                Galleri
              </a>
              <a href="#omdomen" className="text-gray-700 hover:text-orange-600 font-semibold transition-colors">
                Omdömen
              </a>
              <a
                href="#kontakt"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all"
              >
                Kontakta oss
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-orange-100"
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
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-3 space-y-2">
              {['Hem', 'Tjänster', 'Galleri', 'Omdömen', 'Kontakt'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-600 font-semibold transition-colors"
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
      <section id="hem" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_4804.jpeg"
            alt="Trade Of Sweden - Vi Gräver Din Framtid"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-red-900/70 to-orange-800/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
              Sveriges mest pålitliga grävfirma sedan 2003
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl">
              <span className="block">
                Vi Gräver
              </span>
              <span className="block text-orange-200">Din Framtid!</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto drop-shadow-lg">
              Från husgrunder till pooler - vi levererar kvalitet med professionalism.
              Över 1000 nöjda kunder och räknar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="#kontakt"
                className="inline-block bg-white text-orange-600 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Få Gratis Offert
              </a>
              <a
                href="tel:0701234567"
                className="inline-block bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold border-4 border-white hover:bg-orange-700 hover:shadow-xl transition-all"
              >
                Ring Nu
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Snabb service</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Bästa priser</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">20+ års erfarenhet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '20+', label: 'Års Erfarenhet' },
              { number: '1000+', label: 'Nöjda Kunder' },
              { number: '1500+', label: 'Projekt Klara' },
              { number: '5.0', label: 'Medelbetyg' }
            ].map((stat, i) => (
              <ScrollAnimation key={i} type="zoom" duration={600} delay={i * 100}>
                <div className="transform hover:scale-110 transition-transform">
                  <div className="text-4xl md:text-5xl font-black mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold opacity-90">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
                VÅRA TJÄNSTER
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                Vad Kan Vi Hjälpa Dig Med?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vi erbjuder ett komplett utbud av gräv- och markarbeten!
              </p>
            </div>
          </ScrollAnimation>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <ScrollAnimation key={index} type="zoom" duration={700} delay={index * 80}>
                <article
                className={`relative rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all cursor-pointer ${
                  activeService === index ? 'ring-4 ring-orange-600' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 text-white h-full`}>
                  <div className="text-6xl mb-4" aria-hidden="true">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-lg opacity-90 mb-4">{service.shortDesc}</p>
                  <button
                    className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold hover:shadow-lg transition-shadow"
                    aria-label={`Läs mer om ${service.title}`}
                  >
                    Läs mer →
                  </button>
                </div>
              </article>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation type="slide-up" duration={700} delay={200}>
            {/* Active Service Details */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`inline-block bg-gradient-to-r ${services[activeService].color} text-white px-6 py-3 rounded-full text-5xl mb-6`}>
                  {services[activeService].icon}
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">
                  {services[activeService].title}
                </h3>
                <p className="text-xl text-gray-700 mb-6">
                  {services[activeService].fullDesc}
                </p>
                <div className="space-y-3 mb-8">
                  {services[activeService].features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <svg className="w-6 h-6 mr-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#kontakt"
                  className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-xl transition-shadow"
                >
                  Boka {services[activeService].title}
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/IMG_0651.jpeg"
                  alt="Exempel på vårt arbete - trädäcksbygge under arbete"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galleri" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
                GALLERI
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                Se Våra Senaste Projekt!
              </h2>
              <p className="text-xl text-gray-600">
                Bilder som talar för sig själva
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="slide-up" duration={800} delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <Image
                src="/images/IMG_4804.jpeg"
                alt="Färdig altan och pool"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <Image
                src="/images/IMG_1158.jpeg"
                alt="Grävmaskin och infiltrationsarbete"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <Image
                src="/images/IMG_0651.jpeg"
                alt="Trädäcksbygge pågår"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <Image
                src="/images/IMG_1139.jpeg"
                alt="Poolschakt med duk"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <Image
                src="/images/IMG_4803.jpeg"
                alt="Staket och markberedning"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <Image
                src="/images/IMG_1158.jpeg"
                alt="Maskinarbete infiltration"
                width={400}
                height={400}
                className="w-full h-full object-cover object-left"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <Image
                src="/images/IMG_0651.jpeg"
                alt="Team bygger trädäck"
                width={400}
                height={400}
                className="w-full h-full object-cover object-right"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all cursor-pointer">
              <Image
                src="/images/IMG_4804.jpeg"
                alt="Pool och altan färdigt"
                width={400}
                height={400}
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section id="omdomen" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
                OMDÖMEN
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                Våra Kunder Älskar Oss!
              </h2>
              <p className="text-xl text-gray-600">
                Läs vad andra säger om oss
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollAnimation key={i} type="slide-up" duration={700} delay={i * 100}>
                <article className="bg-white rounded-3xl shadow-xl p-8 transform hover:scale-105 transition-transform">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="text-2xl text-yellow-400" aria-hidden="true">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </article>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 to-red-100">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-12">
              <div className="inline-block bg-white text-orange-600 px-6 py-2 rounded-full text-sm font-bold mb-4">
                KONTAKT
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
                Redo Att Börja?
              </h2>
              <p className="text-xl text-gray-700">
                Vi svarar inom 2 timmar!
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="zoom" duration={700} delay={100}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-gray-900 mb-2">
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-orange-600 focus:border-transparent text-lg"
                    placeholder="Förnamn Efternamn"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-lg font-bold text-gray-900 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-orange-600 focus:border-transparent text-lg"
                    placeholder="070-123 45 67"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-bold text-gray-900 mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-orange-600 focus:border-transparent text-lg"
                  placeholder="din@epost.se"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-lg font-bold text-gray-900 mb-2">
                  Typ av tjänst
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-orange-600 focus:border-transparent text-lg"
                  aria-required="true"
                >
                  <option value="">Välj tjänst...</option>
                  {services.map((service, i) => (
                    <option key={i} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold text-gray-900 mb-2">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-2xl focus:ring-4 focus:ring-orange-600 focus:border-transparent text-lg"
                  placeholder="Beskriv ditt projekt här..."
                  aria-required="true"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-6 rounded-2xl text-xl font-black hover:shadow-2xl hover:scale-105 transition-all"
              >
                Skicka Förfrågan
              </button>

              <p className="text-center text-gray-600 text-sm">
                Gratis offert • Snabb återkoppling • Inga dolda kostnader
              </p>
            </form>
          </div>
          </ScrollAnimation>

          {/* Contact Info Cards */}
          <ScrollAnimation type="slide-up" duration={700} delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Ring Oss</h3>
              <a href="tel:0701234567" className="text-orange-600 hover:underline font-semibold text-lg">
                070-123 45 67
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Maila Oss</h3>
              <a href="mailto:info@tradeofsweden.se" className="text-orange-600 hover:underline font-semibold text-lg">
                info@tradeofsweden.se
              </a>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Öppettider</h3>
              <p className="text-gray-700 font-semibold">Mån-Fre 07:00-17:00</p>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Trade Of Sweden</h3>
              <p className="text-gray-400">
                Din pålitliga partner för alla gräv- och markarbeten sedan 2003
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Snabblänkar</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#hem" className="hover:text-white transition-colors">Hem</a></li>
                <li><a href="#tjanster" className="hover:text-white transition-colors">Tjänster</a></li>
                <li><a href="#galleri" className="hover:text-white transition-colors">Galleri</a></li>
                <li><a href="#omdomen" className="hover:text-white transition-colors">Omdömen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Tjänster</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gräv & Markarbete</li>
                <li>Avlopp & Infiltration</li>
                <li>Dränering</li>
                <li>Poolgrävning</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tel: 070-123 45 67</li>
                <li>E-post: info@tradeofsweden.se</li>
                <li>Stockholm, Sverige</li>
                <li>Mån-Fre 07:00-17:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Trade Of Sweden. Alla rättigheter förbehållna.
            </p>
            <Link href="/" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-shadow">
              ← Tillbaka till prototypöversikt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
