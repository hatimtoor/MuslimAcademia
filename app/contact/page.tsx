import type { Metadata } from 'next'
import EnrollmentForm from '@/components/EnrollmentForm'

export const metadata: Metadata = {
  title: 'Contact & Enroll | Muslim Academia',
  description: 'Get in touch with Muslim Academia or submit an enrollment application for Grades 5–8.',
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-green-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3 font-medium">Get In Touch</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Contact & Enroll</h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left column — contact details */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-2xl font-bold text-green-950 mb-2">Reach Us Directly</h2>
              <div className="gold-divider" />
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a question before enrolling? Contact us via WhatsApp or email — we typically
                respond within a few hours during academy hours (Mon–Sat, 9 am–7 pm).
              </p>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 mb-6 p-5 bg-white border border-gray-100 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded-full bg-green-950 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 1C5.925 1 1 5.925 1 12c0 2.091.549 4.054 1.511 5.754L1 23l5.391-1.473C7.945 22.457 9.926 23 12 23c6.075 0 11-4.925 11-11S18.074 1 11.999 1zm0 20c-1.937 0-3.745-.535-5.283-1.462l-.378-.225-3.2.875.858-3.125-.246-.394C2.535 15.745 2 13.937 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-inter mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/923000000000"
                    className="text-green-950 font-semibold text-lg hover:text-gold-600 transition-colors"
                  >
                    +92 300 0000000
                  </a>
                  <p className="text-gray-500 text-xs mt-1">Tap to open in WhatsApp</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6 p-5 bg-white border border-gray-100 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded-full bg-green-950 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-inter mb-1">Email</p>
                  <a
                    href="mailto:info@muslimacademia.com"
                    className="text-green-950 font-semibold text-lg hover:text-gold-600 transition-colors break-all"
                  >
                    info@muslimacademia.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-sm shadow-sm">
                <div className="w-12 h-12 rounded-full bg-green-950 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-inter mb-1">Address</p>
                  <p className="text-green-950 font-medium text-sm leading-relaxed">
                    123 Education Street<br />
                    Model Town, Lahore<br />
                    Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Right column — enrollment form */}
            <div className="lg:col-span-3">
              <h2 className="font-playfair text-2xl font-bold text-green-950 mb-2">Enrolment Application</h2>
              <div className="gold-divider" />
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill in the form below to apply for enrolment. Our team will review your application
                and contact you within 24–48 hours to confirm your child&apos;s place and discuss
                the next steps.
              </p>
              <EnrollmentForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
