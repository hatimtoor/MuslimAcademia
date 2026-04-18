import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Faculty | Muslim Academia',
  description: 'Meet the experienced teaching staff at Muslim Academia.',
}

const faculty = [
  {
    name: 'Mr. Hassan Muhaiyuldin',
    title: 'Science Teacher',
    experience: '8 Years',
    subjects: ['Science', 'Biology', 'Chemistry'],
    bio: 'Mr. Hassan brings a deep passion for the natural sciences to every lesson, making complex concepts approachable through clear explanations and practical demonstrations. His students consistently develop strong analytical skills and a genuine curiosity for scientific inquiry.',
    initials: 'HM',
    color: 'bg-green-950',
  },
  {
    name: 'Mr. Mujahid Farooq',
    title: 'Mathematics Teacher',
    experience: '10 Years',
    subjects: ['Mathematics', 'Algebra', 'Geometry'],
    bio: 'Mr. Mujahid is a dedicated mathematics educator known for his structured, step-by-step teaching approach. He excels at breaking down difficult problems into manageable parts, building both the confidence and the competence of students who find mathematics challenging.',
    initials: 'MF',
    color: 'bg-gold-600',
  },
  {
    name: 'Mr. Hashim',
    title: 'General Teacher',
    experience: '6 Years',
    subjects: ['Urdu', 'Islamiat', 'Social Studies'],
    bio: 'Mr. Hashim is a versatile and committed educator who covers a broad range of subjects with equal dedication. He has a warm, encouraging classroom presence and ensures that every student feels supported, understood, and motivated to reach their potential across all areas of the curriculum.',
    initials: 'MH',
    color: 'bg-green-700',
  },
  {
    name: 'Mr. Hatim Toor',
    title: 'English Teacher',
    experience: '5 Years',
    subjects: ['English', 'Reading', 'Creative Writing'],
    bio: 'Mr. Hatim has a flair for making English engaging and accessible for middle school students. From grammar and comprehension to essay writing and creative expression, he guides students to communicate with clarity and confidence — skills that serve them across every subject and beyond.',
    initials: 'HT',
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
            href="mailto:hassansapra00@gmail.com"
            className="inline-block bg-green-950 text-white font-semibold px-8 py-3 rounded-sm hover:bg-green-800 transition-colors duration-200 font-inter tracking-wide text-sm"
          >
            hassansapra00@gmail.com
          </a>
        </div>
      </section>
    </>
  )
}
