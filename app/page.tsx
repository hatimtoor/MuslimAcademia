import Link from 'next/link'

const highlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Quality Education',
    desc: 'Carefully designed lesson plans aligned with national curriculum standards, enriched with Islamic values and critical thinking exercises.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Experienced Faculty',
    desc: 'Our teaching staff brings years of classroom experience, subject mastery, and a genuine commitment to each student\'s growth and success.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Structured Curriculum',
    desc: 'A clear, progressive curriculum spanning Grades 5–8 with regular assessments, detailed progress reports, and focused exam preparation.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-green-950 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F9A825' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-4 font-medium">
            Welcome to
          </p>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Muslim Academia
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8" />
          <p className="text-gray-300 text-xl md:text-2xl font-inter max-w-2xl mx-auto mb-4 leading-relaxed">
            Where Knowledge Meets Character.
          </p>
          <p className="text-gray-400 text-base md:text-lg font-inter max-w-xl mx-auto mb-10">
            Empowering students in Grades 5–8 with rigorous academics, principled guidance,
            and a love for lifelong learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base">
              Enroll Now
            </Link>
            <Link href="/about" className="btn-outline text-base">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">About Our Academy</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Muslim Academia is a dedicated tutoring institution serving middle school students
              across Grades 5 to 8. Founded on the belief that every child deserves personalised
              attention and a strong educational foundation, we combine a comprehensive national
              curriculum with Islamic values, ethical guidance, and modern teaching methods.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Our small class sizes ensure that every student receives individual attention, while
              our structured assessment system keeps parents informed of their child&apos;s
              progress at every step.
            </p>
            <Link href="/about" className="inline-block mt-8 btn-primary">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Why Choose Muslim Academia?</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle max-w-2xl mx-auto">
              We offer more than tutoring — we build confident, capable, and morally grounded students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map(({ icon, title, desc }) => (
              <div key={title} className="card p-8 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-950/5 text-green-950 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                  {icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-green-950 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-green-950 mb-4">
            Ready to Begin Your Child&apos;s Journey?
          </h2>
          <p className="text-green-950/80 text-lg mb-8 max-w-xl mx-auto font-inter">
            Enrolment is now open for the upcoming academic session. Secure your child&apos;s place today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-950 text-white font-semibold px-10 py-4 rounded-sm hover:bg-green-800 transition-colors duration-200 font-inter tracking-wide"
          >
            Apply for Enrolment
          </Link>
        </div>
      </section>
    </>
  )
}
