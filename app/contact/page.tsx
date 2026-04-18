import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Muslim Academia',
  description: 'Get in touch with Muslim Academia via WhatsApp or email.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-green-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3 font-medium">Get In Touch</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro message */}
          <div className="text-center mb-12">
            <h2 className="section-title">We&apos;d Love to Hear From You</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you have a question about our curriculum, fees, or schedule — or you&apos;re
              ready to enrol your child — the easiest and fastest way to reach us is directly on
              WhatsApp. Send us a message and we&apos;ll get back to you promptly.
            </p>
          </div>

          {/* WhatsApp CTA — primary */}
          <a
            href="https://wa.me/923104186069"
            className="flex items-center gap-5 bg-green-950 rounded-sm p-6 mb-6 group hover:bg-green-800 transition-colors duration-200"
          >
            <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 1C5.925 1 1 5.925 1 12c0 2.091.549 4.054 1.511 5.754L1 23l5.391-1.473C7.945 22.457 9.926 23 12 23c6.075 0 11-4.925 11-11S18.074 1 11.999 1zm0 20c-1.937 0-3.745-.535-5.283-1.462l-.378-.225-3.2.875.858-3.125-.246-.394C2.535 15.745 2 13.937 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-gold-500 text-xs uppercase tracking-widest font-inter mb-1">Message us on WhatsApp</p>
              <p className="text-white font-semibold text-xl font-playfair">+92 310 4186069</p>
              <p className="text-gray-400 text-xs mt-1 font-inter">Available Mon–Sat, 9 am–7 pm · Tap to open WhatsApp</p>
            </div>
            <svg className="w-5 h-5 text-gold-500 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:hassansapra00@gmail.com"
            className="flex items-center gap-5 bg-white border border-gray-100 rounded-sm p-6 mb-6 shadow-sm group hover:border-green-950/20 hover:shadow-md transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-full bg-green-950/5 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-gray-400 text-xs uppercase tracking-widest font-inter mb-1">Email us</p>
              <p className="text-green-950 font-semibold text-lg font-playfair">hassansapra00@gmail.com</p>
              <p className="text-gray-400 text-xs mt-1 font-inter">We typically reply within a few hours</p>
            </div>
            <svg className="w-5 h-5 text-gray-300 flex-shrink-0 group-hover:text-green-950 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Address */}
          <div className="flex items-start gap-5 bg-white border border-gray-100 rounded-sm p-6 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-green-950/5 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-inter mb-1">Our Address</p>
              <p className="text-green-950 font-semibold text-lg font-playfair leading-snug">
                123 Education Street<br />
                Model Town, Lahore<br />
                Punjab, Pakistan
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WhatsApp banner */}
      <section className="bg-gold-500 py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-green-950 mb-3">
            Ready to Enrol Your Child?
          </h2>
          <p className="text-green-950/80 font-inter mb-7 text-base">
            Send us a WhatsApp message with your child&apos;s name and grade — we&apos;ll take
            care of the rest.
          </p>
          <a
            href="https://wa.me/923104186069"
            className="inline-flex items-center gap-3 bg-green-950 text-white font-semibold px-8 py-4 rounded-sm hover:bg-green-800 transition-colors duration-200 font-inter tracking-wide"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 1C5.925 1 1 5.925 1 12c0 2.091.549 4.054 1.511 5.754L1 23l5.391-1.473C7.945 22.457 9.926 23 12 23c6.075 0 11-4.925 11-11S18.074 1 11.999 1zm0 20c-1.937 0-3.745-.535-5.283-1.462l-.378-.225-3.2.875.858-3.125-.246-.394C2.535 15.745 2 13.937 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
