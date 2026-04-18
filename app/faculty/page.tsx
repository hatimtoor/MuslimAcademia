import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faculty | Muslim Academia',
  description: 'Meet the experienced teaching staff at Muslim Academia.',
}

const faculty = [
  {
    name: 'Mr. Ahmed Ali',
    title: 'Mathematics Teacher',
    experience: '12 Years',
    subjects: ['Mathematics', 'Applied Reasoning'],
    bio: 'Mr. Ahmed holds an MSc in Pure Mathematics from Punjab University and has spent over a decade making complex concepts accessible to young learners. He is known for his patient, step-by-step teaching style and his ability to build genuine mathematical confidence in students who previously struggled with numbers.',
    initials: 'AA',
    color: 'bg-green-950',
  },
  {
    name: 'Mrs. Fatima Noor',
    title: 'Science Teacher',
    experience: '9 Years',
    subjects: ['Science', 'Biology', 'Chemistry'],
    bio: 'Mrs. Fatima earned her BSc (Hons) in Biological Sciences and has a remarkable talent for turning abstract scientific principles into memorable, hands-on learning experiences. Her classroom is filled with curiosity and carefully guided experimentation that deepens both understanding and enthusiasm.',
    initials: 'FN',
    color: 'bg-gold-600',
  },
  {
    name: 'Ms. Ayesha Malik',
    title: 'English & Urdu Teacher',
    experience: '7 Years',
    subjects: ['English', 'Urdu', 'Creative Writing'],
    bio: 'Ms. Ayesha holds an MA in English Literature and a Diploma in Urdu Language Teaching. She has a special gift for nurturing confident communicators — students in her classes consistently improve their written and oral expression. She brings literature to life through drama, discussion, and debate.',
    initials: 'AM',
    color: 'bg-green-700',
  },
  {
    name: 'Mr. Usman Tariq',
    title: 'Islamiat & Social Studies Teacher',
    experience: '10 Years',
    subjects: ['Islamiat', 'Social Studies', 'Pakistan Studies'],
    bio: 'Mr. Usman graduated from the International Islamic University and brings both scholarly depth and a compassionate teaching style to the classroom. He weaves contemporary relevance into Islamic history and civic education, helping students see the practical wisdom in their faith and heritage.',
    initials: 'UT',
    color: 'bg-amber-700',
  },
]

export default function FacultyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-green-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3 font-medium">Meet the Team</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Our Faculty</h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Dedicated Educators, Genuine Care</h2>
          <div className="gold-divider mx-auto" />
          <p className="text-gray-600 text-lg leading-relaxed">
            Every member of our faculty is carefully selected not only for their academic
            credentials but for their passion for teaching and their commitment to the
            holistic development of each student. They are mentors as much as teachers.
          </p>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-12 pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.map(({ name, title, experience, subjects, bio, initials, color }) => (
              <div key={name} className="card overflow-hidden">
                {/* Card header */}
                <div className="bg-green-950 p-6 flex items-center gap-5">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-full ${color} border-2 border-gold-500 flex items-center justify-center flex-shrink-0`}>
                    <span className="font-playfair font-bold text-white text-lg">{initials}</span>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-white">{name}</h3>
                    <p className="text-gold-500 text-sm font-inter mt-0.5">{title}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  {/* Stats row */}
                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex items-center gap-2 bg-green-950/5 px-3 py-1.5 rounded-sm">
                      <svg className="w-4 h-4 text-green-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs font-semibold text-green-950 font-inter">{experience} Experience</span>
                    </div>
                    {subjects.map((s) => (
                      <div key={s} className="bg-gold-500/10 px-3 py-1.5 rounded-sm">
                        <span className="text-xs font-semibold text-gold-600 font-inter">{s}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Banner */}
      <section className="bg-gold-500 py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-green-950 mb-3">
            Are You an Experienced Educator?
          </h2>
          <p className="text-green-950/80 font-inter mb-6 text-base">
            We are always looking for qualified, passionate teachers to join our growing team.
            Reach out to us with your CV and a brief introduction.
          </p>
          <a
            href="mailto:Hassan.muhaiyuldin@gmail.com"
            className="inline-block bg-green-950 text-white font-semibold px-8 py-3 rounded-sm hover:bg-green-800 transition-colors duration-200 font-inter tracking-wide text-sm"
          >
            Hassan.muhaiyuldin@gmail.com
          </a>
        </div>
      </section>
    </>
  )
}
