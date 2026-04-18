'use client'

// ─────────────────────────────────────────────────────────────────────────────
// n8n Webhook — replace this URL with your actual n8n webhook endpoint.
// It is also stored in .env.local as NEXT_PUBLIC_N8N_WEBHOOK_URL.
// ─────────────────────────────────────────────────────────────────────────────
const N8N_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ||
  'https://your-n8n-instance.com/webhook/muslim-academia-enroll'

import { useState } from 'react'

type FormState = {
  fullName: string
  homeAddress: string
  phoneNumber: string
  grade: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const grades = ['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8']

export default function EnrollmentForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    homeAddress: '',
    phoneNumber: '',
    grade: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`)
      }

      setStatus('success')
      setForm({ fullName: '', homeAddress: '', phoneNumber: '', grade: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or contact us via WhatsApp.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-950 rounded-sm p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-playfair text-2xl font-bold text-white mb-3">Application Received!</h3>
        <p className="text-gray-300 font-inter text-sm leading-relaxed max-w-sm mx-auto">
          Thank you for applying to Muslim Academia. Our admissions team will review your
          application and get back to you within 24–48 hours via phone or WhatsApp.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 btn-primary text-sm"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full border border-gray-200 rounded-sm px-4 py-3 text-sm font-inter text-gray-800 bg-white focus:outline-none focus:border-green-950 focus:ring-1 focus:ring-green-950 transition-colors placeholder-gray-400'
  const labelClass = 'block text-xs font-semibold text-gray-700 font-inter uppercase tracking-wide mb-1.5'

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-sm shadow-sm p-8 space-y-6">
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Student&apos;s Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          required
          placeholder="e.g. Muhammad Hassan Khan"
          value={form.fullName}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Home Address */}
      <div>
        <label htmlFor="homeAddress" className={labelClass}>
          Home Address <span className="text-red-500">*</span>
        </label>
        <textarea
          id="homeAddress"
          name="homeAddress"
          required
          rows={2}
          placeholder="Street, Area, City"
          value={form.homeAddress}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber" className={labelClass}>
          Parent / Guardian Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          required
          placeholder="+92 300 0000000"
          value={form.phoneNumber}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Grade */}
      <div>
        <label htmlFor="grade" className={labelClass}>
          Class / Grade Applying For <span className="text-red-500">*</span>
        </label>
        <select
          id="grade"
          name="grade"
          required
          value={form.grade}
          onChange={handleChange}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="" disabled>Select a grade…</option>
          {grades.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="text-red-600 text-sm font-inter bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary text-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting…
          </span>
        ) : (
          'Submit Enrolment Application'
        )}
      </button>

      <p className="text-gray-400 text-xs text-center font-inter">
        Your information is kept strictly confidential and used only for enrolment purposes.
      </p>
    </form>
  )
}
