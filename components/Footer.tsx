import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-green-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold-500 text-2xl">☪</span>
              <span className="font-playfair text-xl font-bold text-white">Muslim Academia</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Nurturing minds with knowledge, integrity, and purpose — guiding students in
              Grades 5–8 toward academic excellence and moral character.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/curriculum', label: 'Curriculum' },
                { href: '/faculty', label: 'Faculty' },
                { href: '/contact', label: 'Contact & Enroll' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-gold-500 transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1st floor, Islamic Stars Model High School,<br />Street no 2, Ghang Road, Sheikhupura, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.999 1C5.925 1 1 5.925 1 12c0 2.091.549 4.054 1.511 5.754L1 23l5.391-1.473C7.945 22.457 9.926 23 12 23c6.075 0 11-4.925 11-11S18.074 1 11.999 1zm0 20c-1.937 0-3.745-.535-5.283-1.462l-.378-.225-3.2.875.858-3.125-.246-.394C2.535 15.745 2 13.937 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                <a href="https://wa.me/923104186069" className="hover:text-gold-500 transition-colors duration-200">
                  +92 310 4186069
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hassansapra00@gmail.com" className="hover:text-gold-500 transition-colors duration-200">
                  hassansapra00@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Muslim Academia. All rights reserved.</p>
          <p>Dedicated to academic excellence and Islamic values.</p>
        </div>
      </div>
    </footer>
  )
}
