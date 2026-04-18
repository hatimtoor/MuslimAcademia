import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curriculum | Muslim Academia',
  description: 'Explore the structured curriculum at Muslim Academia covering Grades 5–8 across all core subjects.',
}

const subjects = [
  { name: 'Mathematics', icon: '∑', desc: 'Arithmetic, algebra, geometry and problem-solving with a focus on logical reasoning.' },
  { name: 'Science', icon: '⚗', desc: 'Biology, chemistry, and physics fundamentals presented through experiments and inquiry.' },
  { name: 'English', icon: '✍', desc: 'Reading comprehension, essay writing, grammar, and vocabulary development.' },
  { name: 'Urdu', icon: 'ا', desc: 'Prose, poetry, grammar, and composition in the national language.' },
  { name: 'Islamiat', icon: '☪', desc: 'Quran recitation, Seerah, Islamic history, and moral values.' },
  { name: 'Social Studies', icon: '🌐', desc: 'Geography, Pakistan Studies, and current affairs for contextual awareness.' },
]

const grades = ['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8']
const subjectNames = ['Mathematics', 'Science', 'English', 'Urdu', 'Islamiat', 'Social Studies']

const gradeSubjectMap: Record<string, Record<string, string>> = {
  Mathematics: { 'Grade 5': 'Fractions & Decimals', 'Grade 6': 'Ratios & Algebra Intro', 'Grade 7': 'Linear Equations', 'Grade 8': 'Advanced Algebra & Geometry' },
  Science: { 'Grade 5': 'Living Things & Matter', 'Grade 6': 'Cells & Energy', 'Grade 7': 'Forces & Reactions', 'Grade 8': 'Physics & Chemistry' },
  English: { 'Grade 5': 'Reading & Paragraph Writing', 'Grade 6': 'Essay Writing & Grammar', 'Grade 7': 'Comprehension & Debate', 'Grade 8': 'Critical Analysis & Literature' },
  Urdu: { 'Grade 5': 'Basic Prose & Poetry', 'Grade 6': 'Grammar & Comprehension', 'Grade 7': 'Composition & Qawaid', 'Grade 8': 'Advanced Prose & Essays' },
  Islamiat: { 'Grade 5': 'Pillars of Islam', 'Grade 6': 'Seerah & Sunnah', 'Grade 7': 'Quran Tafseer Intro', 'Grade 8': 'Islamic History & Ethics' },
  'Social Studies': { 'Grade 5': 'Maps & Pakistan Geography', 'Grade 6': 'Provincial Studies', 'Grade 7': 'Pakistan History', 'Grade 8': 'Civics & Current Affairs' },
}

const assessmentSteps = [
  { step: '01', title: 'Weekly Class Tests', desc: 'Short topic-based quizzes held every week to reinforce recently covered material and identify areas needing review.' },
  { step: '02', title: 'Monthly Written Exams', desc: 'Formal written tests at the end of each month, covering all subjects and following the same format as school examinations.' },
  { step: '03', title: 'Oral Assessment Sessions', desc: 'Verbal Q&A sessions where teachers gauge conceptual understanding beyond what written tests can measure.' },
  { step: '04', title: 'Progress Reports to Parents', desc: 'Detailed written reports shared with parents every month, outlining grades, strengths, and targeted improvement areas.' },
  { step: '05', title: 'Parent–Teacher Meetings', desc: 'Quarterly one-on-one sessions where parents and teachers align on each student\'s academic plan and goals.' },
]

export default function CurriculumPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-green-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-500 font-inter text-sm tracking-widest uppercase mb-3 font-medium">What We Teach</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">Our Curriculum</h1>
          <div className="w-20 h-1 bg-gold-500 mx-auto" />
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="section-title">Subject Overview</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle">
              Our curriculum is carefully aligned with Pakistan&apos;s national education standards
              while incorporating additional depth and extension activities to prepare students for
              academic challenges ahead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map(({ name, icon, desc }) => (
              <div key={name} className="card p-6 group hover:border-gold-500/30 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl text-gold-500 font-playfair">{icon}</span>
                  <h3 className="font-playfair text-lg font-bold text-green-950">{name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade-Level Breakdown Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Grade-Level Breakdown</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each grade builds progressively on the previous year&apos;s foundations, ensuring
              smooth academic transitions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm shadow-sm border border-gray-100">
            <table className="w-full text-sm font-inter">
              <thead>
                <tr className="bg-green-950 text-white">
                  <th className="text-left px-5 py-4 font-playfair text-base font-semibold">Subject</th>
                  {grades.map((g) => (
                    <th key={g} className="text-left px-5 py-4 font-playfair text-base font-semibold">{g}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {subjectNames.map((subj, i) => (
                  <tr
                    key={subj}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-5 py-4 font-semibold text-green-950 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0" />
                      {subj}
                    </td>
                    {grades.map((g) => (
                      <td key={g} className="px-5 py-4 text-gray-600">
                        {gradeSubjectMap[subj]?.[g] ?? '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Assessment & Progress Tracking</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We take a multi-layered approach to assessment that informs teaching, motivates
              students, and keeps parents fully informed.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {assessmentSteps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-950 text-gold-500 flex items-center justify-center font-playfair font-bold text-sm">
                  {step}
                </div>
                <div className="pt-2">
                  <h3 className="font-playfair text-lg font-bold text-green-950 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
