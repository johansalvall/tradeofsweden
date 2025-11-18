'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import QuickContactFAB from '@/components/QuickContactFAB'
import FAQAccordion from '@/components/FAQAccordion'
import AnimatedServiceCard from '@/components/AnimatedServiceCard'
import QuoteDialog from '@/components/QuoteDialog'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function Prototyp1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)

  const services = [
    {
      title: 'Gräv & Markarbete',
      description: 'Professionell grävning och markberedning för alla typer av projekt.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M6 18v-3l6-6 3 3-6 6H6zM15 6l3-3 3 3-3 3-3-3z"/>
        </svg>
      )
    },
    {
      title: 'Avlopp & Infiltration',
      description: 'Installation och underhåll av avloppssystem och infiltrationsanläggningar.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v6m0 0L9 5m3 3l3-3M12 22v-6m0 0l-3 3m3-3l3 3M2 12h6m0 0L5 9m3 3l-3 3M22 12h-6m0 0l3-3m-3 3l3 3"/>
        </svg>
      )
    },
    {
      title: 'Dränering',
      description: 'Dränering runt hus för att skydda din fastighet från fukt och vatten.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 10h18M3 14h18M8 18h8M6 6h12v12H6z"/>
        </svg>
      )
    },
    {
      title: 'Poolgrävning',
      description: 'Expertgrävning för pooler av alla storlekar och former.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 15c1.67 0 2.5.67 4 .67S8.33 15 10 15s2.5.67 4 .67 2.33-.67 4-.67 2.5.67 4 .67M2 19c1.67 0 2.5.67 4 .67S8.33 19 10 19s2.5.67 4 .67 2.33-.67 4-.67 2.5.67 4 .67M6 6h12v7H6z"/>
        </svg>
      )
    },
    {
      title: 'Husgrund & Väggarbete',
      description: 'Grundläggning och väggarbete för nybyggnation och renovering.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M4 21V10l8-7 8 7v11M9 21v-6h6v6"/>
        </svg>
      )
    },
    {
      title: 'Altan & Trädäck',
      description: 'Markberedning och förberedelse för altaner och trädäck.',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18M5 21V9h14v12M9 13h6M9 17h6"/>
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <QuickContactFAB />
      <QuoteDialog open={quoteDialogOpen} onClose={() => setQuoteDialogOpen(false)} />
      <a href="#main-content" className="skip-link">
        Hoppa till huvudinnehåll
      </a>

      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50" role="navigation" aria-label="Huvudnavigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Trade Of Sweden
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#tjanster" className="text-gray-700 hover:text-gray-900 transition-colors">
                Tjänster
              </a>
              <a href="#om-oss" className="text-gray-700 hover:text-gray-900 transition-colors">
                Om oss
              </a>
              <a href="#kontakt" className="text-gray-700 hover:text-gray-900 transition-colors">
                Kontakt
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              aria-expanded={mobileMenuOpen}
              aria-label="Öppna huvudmeny"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
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
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#tjanster"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tjänster
              </a>
              <a
                href="#om-oss"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Om oss
              </a>
              <a
                href="#kontakt"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="main-content" className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_4804.jpeg"
            alt="Trade Of Sweden - Professionellt gräv- och markarbete"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay with construction texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/75 to-slate-900/60"></div>
          {/* Machinery silhouette overlay */}
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-10">
            <svg viewBox="0 0 200 100" fill="currentColor" className="text-amber-500 w-full h-full">
              <path d="M10 80 L30 80 L30 60 L50 60 L50 40 L80 40 L90 30 L100 40 L100 80 L180 80 L180 70 L160 70 L160 50 L140 50 L140 80 M30 85 A5 5 0 1 1 30 95 A5 5 0 1 1 30 85 M100 85 A5 5 0 1 1 100 95 A5 5 0 1 1 100 85 M140 85 A5 5 0 1 1 140 95 A5 5 0 1 1 140 85 M170 85 A5 5 0 1 1 170 95 A5 5 0 1 1 170 85" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 rounded-md px-4 py-2 mb-6">
              <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Sedan 2003 • Certifierat & Försäkrat</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-lg">
              Professionellt
              <span className="block text-amber-500">Gräv & Markarbete</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 text-shadow-md">
              Vi hjälper dig med alla typer av grävarbeten - från husgrunder till pooler.
              Kvalitet och precision i varje projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setQuoteDialogOpen(true)}
                className="inline-block bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-amber-700 transition-all hover:scale-105 shadow-xl cursor-pointer border-b-4 border-amber-800"
              >
                Få en offert
              </button>
              <a
                href="#tjanster"
                className="inline-block bg-slate-700 text-white px-8 py-4 rounded-md text-lg font-bold border-2 border-slate-600 hover:bg-slate-600 transition-all hover:scale-105 shadow-xl"
              >
                Se våra tjänster
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-md mb-4 font-semibold text-sm uppercase tracking-wide">
                Våra Specialområden
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Våra Tjänster
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Vi erbjuder ett brett utbud av gräv- och markarbeten för både privat- och företagskunder.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center overflow-visible">
            <ScrollAnimation type="slide-right" duration={700} threshold={0.05}>
              <div>
                <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-md mb-6 font-semibold text-sm uppercase tracking-wide">
                  20+ År i Branschen
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Erfarna proffs med rätt utrustning
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  Med över 20 års erfarenhet i branschen levererar vi högkvalitativa gräv- och
                  markarbeten till konkurrenskraftiga priser.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  Vi använder modern utrustning och följer alltid gällande säkerhetsföreskrifter.
                  Vårt team är certifierat och försäkrat.
                </p>
                <ul className="space-y-3">
                  {['Certifierade operatörer', 'Modern maskinpark', 'Försäkrade arbeten', 'Fri offert'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700">
                      <svg
                        className="w-6 h-6 mr-3 text-amber-600"
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
            </ScrollAnimation>
            <ScrollAnimation type="slide-left" duration={700} delay={100} threshold={0.05}>
              <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-slate-200">
                <Image
                  src="/images/IMG_0651.jpeg"
                  alt="Trädäcksbygge under arbete - vårt erfarna team i aktion"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Vanliga Frågor
              </h2>
              <p className="text-xl text-slate-600">
                Svar på de mest ställda frågorna om våra tjänster
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation type="slide-up" duration={700} delay={200}>
            <FAQAccordion />
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Kontakta oss
              </h2>
              <p className="text-xl text-slate-600">
                Vi ger dig en kostnadsfri offert inom 24 timmar
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="zoom" duration={700} delay={100}>
            <form className="bg-stone-50 p-8 rounded-lg shadow-xl border-2 border-amber-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                E-post *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                aria-required="true"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                Typ av tjänst *
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                aria-required="true"
              >
                <option value="">Välj tjänst...</option>
                <option value="grav">Gräv & Markarbete</option>
                <option value="avlopp">Avlopp & Infiltration</option>
                <option value="dranering">Dränering</option>
                <option value="pool">Poolgrävning</option>
                <option value="husgrund">Husgrund & Väggarbete</option>
                <option value="altan">Altan & Trädäck</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Meddelande *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-amber-600 bg-white"
                aria-required="true"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-amber-700 transition-all hover:scale-[1.02] shadow-lg border-b-4 border-amber-800"
            >
              Skicka förfrågan
            </button>
          </form>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-400">Trade Of Sweden</h3>
              <p className="text-slate-300">
                Professionellt gräv- och markarbete sedan 2003
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Kontakt</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Tel: 070-123 45 67</li>
                <li>E-post: info@tradeofsweden.se</li>
                <li>Öppet: Mån-Fre 07:00-17:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-400">Tjänster</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Gräv & Markarbete</li>
                <li>Avlopp & Infiltration</li>
                <li>Dränering</li>
                <li>Poolgrävning</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Trade Of Sweden. Alla rättigheter förbehållna.
            </p>
            <Link href="/" className="text-amber-400 hover:text-amber-300 mt-4 md:mt-0 font-semibold">
              ← Tillbaka till prototypöversikt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
