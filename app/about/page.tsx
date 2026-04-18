import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Muslim Academia',
  description: 'Learn about Muslim Academia\'s mission, vision, history, and how to reach us.',
}

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: '123 Education Street, Model Town, Lahore, Punjab, Pakistan',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.999 1C5.925 1 1 5.925 1 12c0 2.091.549 4.054 1.511 5.754L1 23l5.391-1.473C7.945 22.457 9.926 23 12 23c6.075 0 11-4.925 11-11S18.074 1 11.999 1zm0 20c-1.937 0-3.745-.535-5.283-1.462l-.378-.225-3.2.875.858-3.125-.246-.394C2.535 15.745 2 13.937 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+92 325 7496934',
    href: 'https://wa.me/923257496934',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'Hassan.muhaiyuldin@gmail.com',
    href: 'mailto:Hassan.muhaiyuldin@gmail.com',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-green-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3 font-medium">Get to Know Us</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">About Muslim Academia</h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold-500 text-3xl">◎</span>
                <h2 className="font-playfair text-2xl font-bold text-green-950">Our Mission</h2>
              </div>
              <div className="gold-divider" />
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide every student in Grades 5 through 8 with a rigorous,
                well-rounded academic education rooted in Islamic principles. We strive to cultivate
                intellectual curiosity, moral responsibility, and the self-confidence needed to excel
                in school and in life.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We believe that education is not merely the transmission of information, but the
                formation of character — shaping young minds to think critically, act ethically,
                and contribute meaningfully to their communities.
              </p>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-gold-500 text-3xl">◈</span>
                <h2 className="font-playfair text-2xl font-bold text-green-950">Our Vision</h2>
              </div>
              <div className="gold-divider" />
              <p className="text-gray-600 leading-relaxed">
                We envision a generation of Muslim students who are academically prepared,
                spiritually grounded, and socially conscious. Muslim Academia aspires to be the
                leading tutoring institution in the region — one that parents trust and students
                love to attend.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Through consistent quality, a caring faculty, and a structured learning environment,
                we aim to set the benchmark for middle-school tutoring that honours both knowledge
                and faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Our Story</h2>
            <div className="gold-divider" />
            <p className="text-gray-600 leading-relaxed text-lg">
              Muslim Academia was founded in 2018 by a small group of experienced educators who
              recognised a pressing need for quality, values-driven tutoring in the local community.
              What began as a modest after-school programme serving just twelve students has since
              grown into a fully structured institution, now supporting over one hundred families
              each academic year.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              From the very beginning, our founders insisted that academic excellence and Islamic
              character development must go hand in hand. That founding principle remains at the
              heart of everything we do today. Over the years we have refined our curriculum,
              expanded our faculty, and built a warm, disciplined environment where students feel
              safe to ask questions, make mistakes, and grow.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-5">
              We are proud of our track record: the vast majority of our students achieve
              above-average grades in their school examinations, and many go on to secure places
              in the city&apos;s most competitive secondary schools. But we measure our success
              not only in grades — we measure it in the confidence, curiosity, and integrity we
              see in every student who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-green-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">Find Us</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactDetails.map(({ icon, label, value, href }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-sm p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/10 text-gold-500 mb-4">
                  {icon}
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2 font-inter">{label}</p>
                {href ? (
                  <a href={href} className="text-white hover:text-gold-500 transition-colors font-medium text-sm">
                    {value}
                  </a>
                ) : (
                  <p className="text-white font-medium text-sm">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
