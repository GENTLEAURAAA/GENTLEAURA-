import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import {
  CORE_SERVICES,
  PORTFOLIO_PROJECTS,
  PortfolioProject,
} from './data/portfolioData';
import { PortfolioReaderModal } from './components/PortfolioReaderModal';

export default function App() {
  const [activeModalProject, setActiveModalProject] =
    useState<PortfolioProject | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactEmail = 'omobolajiabdulsalam56@gmail.com';
  const whatsappNumberDisplay = '07032344281';
  const whatsappLink = 'https://wa.me/2347032344281';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(whatsappNumberDisplay);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] flex flex-col">
      {/* Top Bar Contract: 1 Row, 3 Zones */}
      <header className="sticky top-0 z-40 bg-[#09090B]/90 backdrop-blur-md border-b border-[#1F1F28]">
        <div className="max-w-[1000px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#top"
            className="text-xl font-semibold tracking-tight text-[#FAFAFA] hover:text-[#C084FC] transition-colors whitespace-nowrap shrink-0"
          >
            GentleAura
          </a>

          {/* Zone 2: Clean Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]"
            aria-label="Primary navigation"
          >
            <a
              href="#services"
              className="hover:text-[#C084FC] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              What I Do
            </a>
            <a
              href="#work"
              className="hover:text-[#C084FC] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              Work Samples
            </a>
            <a
              href="#about"
              className="hover:text-[#C084FC] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[#C084FC] hover:underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-[#9333EA] hover:bg-[#7E22CE] rounded-lg transition-colors duration-150 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Clean, Picture-Free Typographic Hero */}
        <section className="py-16 sm:py-28">
          <div className="max-w-[1000px] mx-auto px-6 space-y-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#A1A1AA] tracking-wide">
              <span className="font-semibold text-[#C084FC]">
                Abdulsalam Omobolaji
              </span>
              <span aria-hidden="true">·</span>
              <span>GentleAura</span>
              <span aria-hidden="true">·</span>
              <span>Oyo State, Nigeria</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-[#FAFAFA] leading-[1.08] max-w-3xl">
              Clear writing and dependable{' '}
              <span className="font-serif-editorial italic font-normal text-[#C084FC]">
                follow-through
              </span>{' '}
              for growing brands.
            </h1>

            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-[62ch]">
              I’m Abdulsalam Omobolaji, the person behind GentleAura. I help brands with{' '}
              <strong className="font-medium text-[#FAFAFA]">
                copywriting, email marketing, customer & chat support, virtual assistance,
              </strong>{' '}
              and{' '}
              <strong className="font-medium text-[#FAFAFA]">
                social media management
              </strong>
              —using proven frameworks like AIDA and PAS to turn what you sell into copy people act on.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#9333EA] hover:bg-[#7E22CE] rounded-lg transition-colors duration-150 whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#FAFAFA] bg-[#14141B] hover:bg-[#1E1E28] border border-[#272732] rounded-lg transition-colors duration-150 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-[#C084FC]" />
                <span>WhatsApp: {whatsappNumberDisplay}</span>
              </a>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section
          id="services"
          className="py-16 sm:py-24 border-t border-[#1F1F28] bg-[#0D0D11]"
          aria-labelledby="services-heading"
        >
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="pb-10 border-b border-[#1F1F28] space-y-2">
              <p className="text-xs text-[#C084FC] tracking-wide">
                01 · Services
              </p>
              <h2
                id="services-heading"
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]"
              >
                What I Do
              </h2>
            </div>

            <div className="divide-y divide-[#1F1F28]">
              {CORE_SERVICES.map((service) => (
                <div
                  key={service.number}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                >
                  <div className="md:col-span-4 space-y-1">
                    <span className="font-mono-tabular text-xs text-[#C084FC] font-medium">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-semibold text-[#FAFAFA]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#A1A1AA]">
                      {service.focusLine}
                    </p>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-[15px] text-[#D4D4D8] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="md:col-span-3">
                    <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#C084FC] select-none">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work I Have Worked On Section (Pure Typography Cards) */}
        <section
          id="work"
          className="py-16 sm:py-24 border-t border-[#1F1F28]"
          aria-labelledby="work-heading"
        >
          <div className="max-w-[1000px] mx-auto px-6 space-y-10">
            <div className="space-y-2">
              <p className="text-xs text-[#C084FC] tracking-wide">
                02 · Portfolio Samples
              </p>
              <h2
                id="work-heading"
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]"
              >
                Work I Have Worked On
              </h2>
              <p className="text-[15px] text-[#A1A1AA] max-w-[60ch]">
                Click any project below to read the full writing sample.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PORTFOLIO_PROJECTS.map((project) => (
                <article
                  key={project.id}
                  onClick={() => setActiveModalProject(project)}
                  className="group bg-[#121217] border border-[#24242F] hover:border-[#9333EA] rounded-2xl overflow-hidden flex flex-col justify-between transition-colors cursor-pointer"
                >
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                      <span className="font-mono-tabular font-medium text-[#C084FC]">
                        {project.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.metadataLine}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-[#FAFAFA] group-hover:text-[#C084FC] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[15px] text-[#D4D4D8] leading-relaxed">
                      {project.summary}
                    </p>

                    <ul className="pt-4 border-t border-[#22222C] space-y-1.5 text-xs text-[#A1A1AA]">
                      {project.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#C084FC] select-none">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-6 sm:px-8 py-4 border-t border-[#22222C] bg-[#0D0D11] flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FAFAFA] group-hover:text-[#C084FC] transition-colors">
                      <BookOpen className="w-3.5 h-3.5 text-[#C084FC]" />
                      <span>Read Writing Sample</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#C084FC] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 sm:py-24 border-t border-[#1F1F28] bg-[#0D0D11]"
          aria-labelledby="about-heading"
        >
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-4 space-y-2">
                <p className="text-xs text-[#C084FC] tracking-wide">
                  03 · About Me
                </p>
                <h2
                  id="about-heading"
                  className="text-3xl font-semibold tracking-tight text-[#FAFAFA]"
                >
                  About GentleAura
                </h2>
                <div className="flex items-center gap-2 text-xs text-[#A1A1AA] pt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C084FC] shrink-0" />
                  <span>Oyo State, Nigeria</span>
                </div>
              </div>

              <div className="md:col-span-8 space-y-5 text-base sm:text-lg text-[#D4D4D8] leading-relaxed">
                <p>
                  I’m Omobolaji, the person behind{' '}
                  <strong className="font-semibold text-[#FAFAFA]">
                    GentleAura
                  </strong>
                  . I am based in Oyo State, Nigeria, and I work with brands anywhere that need clear writing and dependable follow-through.
                </p>
                <p>
                  I am a trained virtual assistant and use proven frameworks like{' '}
                  <strong className="font-semibold text-[#C084FC]">AIDA</strong>{' '}
                  and{' '}
                  <strong className="font-semibold text-[#C084FC]">PAS</strong>{' '}
                  to turn what you sell into copy people act on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simple, Direct Contact Section */}
        <section
          id="contact"
          className="py-16 sm:py-24 border-t border-[#1F1F28]"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-5 space-y-3">
                <p className="text-xs text-[#C084FC] tracking-wide">
                  04 · Contact
                </p>
                <h2
                  id="contact-heading"
                  className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FAFAFA]"
                >
                  Let’s Work Together
                </h2>
                <p className="text-[15px] text-[#A1A1AA] leading-relaxed">
                  Reach out directly via email or WhatsApp. I am available for copywriting, email marketing, customer support, virtual assistance, and social media management.
                </p>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Box */}
                <div className="p-6 bg-[#121217] border border-[#24242F] rounded-2xl flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                      <Mail className="w-4 h-4 text-[#C084FC]" />
                      <span>Email Address</span>
                    </div>
                    <p className="text-sm font-semibold text-[#FAFAFA] break-all">
                      {contactEmail}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <a
                      href={`mailto:${contactEmail}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#9333EA] hover:bg-[#7E22CE] rounded-lg transition-colors whitespace-nowrap"
                    >
                      <span>Send Email</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#FAFAFA] bg-[#1C1C26] hover:bg-[#272734] border border-[#2C2C3A] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C084FC]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* WhatsApp Box */}
                <div className="p-6 bg-[#121217] border border-[#24242F] rounded-2xl flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#A1A1AA]">
                      <Phone className="w-4 h-4 text-[#C084FC]" />
                      <span>WhatsApp & Phone</span>
                    </div>
                    <p className="font-mono-tabular text-base font-semibold text-[#FAFAFA]">
                      {whatsappNumberDisplay}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#9333EA] hover:bg-[#7E22CE] rounded-lg transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#FAFAFA] bg-[#1C1C26] hover:bg-[#272734] border border-[#2C2C3A] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {copiedPhone ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#C084FC]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-[#1F1F28] bg-[#09090B] py-8">
        <div className="max-w-[1000px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#C084FC]">GentleAura</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#FAFAFA]">Abdulsalam Omobolaji</span>
            <span aria-hidden="true">·</span>
            <span>Oyo State, Nigeria</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span>{contactEmail}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono-tabular">WhatsApp: {whatsappNumberDisplay}</span>
          </div>
        </div>
      </footer>

      {/* Sample Reader Modal */}
      <PortfolioReaderModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
