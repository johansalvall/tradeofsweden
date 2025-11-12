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
      icon: '🚜'
    },
    {
      title: 'Avlopp & Infiltration',
      description: 'Installation och underhåll av avloppssystem och infiltrationsanläggningar.',
      icon: '💧'
    },
    {
      title: 'Dränering',
      description: 'Dränering runt hus för att skydda din fastighet från fukt och vatten.',
      icon: '🏠'
    },
    {
      title: 'Poolgrävning',
      description: 'Expertgrävning för pooler av alla storlekar och former.',
      icon: '🏊'
    },
    {
      title: 'Husgrund & Väggarbete',
      description: 'Grundläggning och väggarbete för nybyggnation och renovering.',
      icon: '🏗️'
    },
    {
      title: 'Altan & Trädäck',
      description: 'Markberedning och förberedelse för altaner och trädäck.',
      icon: '🪵'
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
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_4804.jpeg"
            alt="Trade Of Sweden - Professionellt gräv- och markarbete"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Professionellt
              <span className="block text-blue-400">Gräv & Markarbete</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Vi hjälper dig med alla typer av grävarbeten - från husgrunder till pooler.
              Kvalitet och precision i varje projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setQuoteDialogOpen(true)}
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
              >
                Få en offert
              </button>
              <a
                href="#tjanster"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-gray-100 transition-colors shadow-lg"
              >
                Se våra tjänster
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjanster" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Våra Tjänster
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
      <section id="om-oss" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation type="slide-right" duration={700}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Erfarna proffs med rätt utrustning
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Med över 20 års erfarenhet i branschen levererar vi högkvalitativa gräv- och
                  markarbeten till konkurrenskraftiga priser.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Vi använder modern utrustning och följer alltid gällande säkerhetsföreskrifter.
                  Vårt team är certifierat och försäkrat.
                </p>
                <ul className="space-y-3">
                  {['Certifierade operatörer', 'Modern maskinpark', 'Försäkrade arbeten', 'Fri offert'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg
                        className="w-6 h-6 mr-3 text-blue-600"
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
            <ScrollAnimation type="slide-left" duration={700} delay={100}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Vanliga Frågor
              </h2>
              <p className="text-xl text-gray-600">
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
      <section id="kontakt" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation type="fade" duration={600}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Kontakta oss
              </h2>
              <p className="text-xl text-gray-600">
                Vi ger dig en kostnadsfri offert inom 24 timmar
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="zoom" duration={700} delay={100}>
            <form className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Namn *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-post *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                aria-required="true"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Typ av tjänst *
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Meddelande *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                aria-required="true"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Skicka förfrågan
            </button>
          </form>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Trade Of Sweden</h3>
              <p className="text-gray-400">
                Professionellt gräv- och markarbete sedan 2003
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tel: 070-123 45 67</li>
                <li>E-post: info@tradeofsweden.se</li>
                <li>Öppet: Mån-Fre 07:00-17:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Tjänster</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gräv & Markarbete</li>
                <li>Avlopp & Infiltration</li>
                <li>Dränering</li>
                <li>Poolgrävning</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Trade Of Sweden. Alla rättigheter förbehållna.
            </p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 mt-4 md:mt-0">
              ← Tillbaka till prototypöversikt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
