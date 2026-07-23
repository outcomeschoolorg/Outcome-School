import React, { useState } from "react";
import {
  GraduationCap,
  Mail,
  Briefcase,
  Lightbulb,
  Users,
  BookOpen,
  Code2,
  Star,
  ArrowRight,
  ShieldCheck,
  Rocket,
  MessageCircle,
  Puzzle,
  Cpu,
  Bot,
  ClipboardList,
  UserCircle2,
  Bell,
  Send,
  TrendingUp,
  Trophy,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import "../OutcomeSchoolLanding.css";

// lucide-react no longer ships brand/logo icons (Facebook, Twitter, etc).
// Small inline SVGs are used instead so the footer social row still works.
const SocialFacebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.2 4.32 15.19 4.23 14 4.23c-2.37 0-4 1.45-4 4.1V10.5H7.5v3H10V21h3.5Z" />
  </svg>
);

const SocialTwitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M20.5 6.9c-.6.27-1.24.45-1.9.53a3.3 3.3 0 0 0 1.46-1.83c-.64.38-1.35.65-2.1.8a3.3 3.3 0 0 0-5.63 3.01A9.36 9.36 0 0 1 5.4 6.14a3.3 3.3 0 0 0 1.02 4.41 3.27 3.27 0 0 1-1.5-.41v.04a3.3 3.3 0 0 0 2.65 3.24 3.3 3.3 0 0 1-1.49.06 3.3 3.3 0 0 0 3.08 2.29A6.62 6.62 0 0 1 4 17.1a9.33 9.33 0 0 0 5.05 1.48c6.06 0 9.38-5.02 9.38-9.38l-.01-.43c.64-.46 1.2-1.04 1.64-1.7Z" />
  </svg>
);

const SocialLinkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M6.94 8.5H4.06V19h2.88V8.5ZM5.5 4.25a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34ZM19.94 19h-2.87v-5.3c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79V19H10.4V8.5h2.76v1.43h.04c.38-.73 1.33-1.5 2.73-1.5 2.92 0 3.46 1.92 3.46 4.42V19Z" />
  </svg>
);

const SocialInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 5.93a2.33 2.33 0 1 1 0-4.66 2.33 2.33 0 0 1 0 4.66Zm4.6-6.08a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0ZM20 8.05c-.06-1.2-.33-2.26-1.2-3.13-.87-.87-1.93-1.14-3.13-1.2C14.44 3.66 9.56 3.66 8.33 3.72c-1.2.06-2.25.33-3.13 1.2-.87.87-1.13 1.93-1.2 3.13C3.94 9.56 3.94 14.44 4 15.67c.07 1.2.33 2.26 1.2 3.13.88.87 1.93 1.13 3.13 1.2 1.23.06 6.11.06 7.34 0 1.2-.07 2.26-.33 3.13-1.2.87-.87 1.14-1.93 1.2-3.13.06-1.23.06-6.11 0-7.34v-.02ZM18.4 17c-.26.66-.77 1.17-1.43 1.44-1 .4-3.36.3-4.97.3-1.62 0-3.98.1-4.97-.3A2.47 2.47 0 0 1 5.6 17c-.4-1-.3-3.36-.3-4.97 0-1.62-.1-3.98.3-4.97.26-.66.77-1.17 1.43-1.44 1-.4 3.36-.3 4.97-.3 1.62 0 3.98-.1 4.97.3.66.27 1.17.78 1.43 1.44.4 1 .3 3.36.3 4.97 0 1.62.1 3.98-.3 4.97Z" />
  </svg>
);

const SocialYoutube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M21.6 7.7a2.7 2.7 0 0 0-1.9-1.9C18 5.3 12 5.3 12 5.3s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.7C2 9.4 2 12 2 12s0 2.6.4 4.3a2.7 2.7 0 0 0 1.9 1.9C6 18.7 12 18.7 12 18.7s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.3.4-4.3s0-2.6-.4-4.3ZM10 15V9l5.2 3-5.2 3Z" />
  </svg>
);

const navLinks = [
  "Home",
  "Career Insights",
  "Opportunities",
  "Resources",
  "About",
];

const heroFeatures = [
  { icon: Mail, label: "Delivered daily to your inbox" },
  { icon: Briefcase, label: "Internships & job opportunities" },
  { icon: Lightbulb, label: "Skills, insights & career growth" },
  { icon: Users, label: "Join a community that grows together" },
];

const journeySteps = [
  { icon: BookOpen, title: "Learn", desc: "Build knowledge and explore" },
  { icon: Code2, title: "Build", desc: "Develop skills and create" },
  { icon: Briefcase, title: "Internships", desc: "Gain real-world experience" },
  { icon: Star, title: "Jobs", desc: "Launch your career and grow" },
];

const receiveCards = [
  {
    icon: Briefcase,
    title: "Tech Jobs",
    desc: "Discover in-demand careers and what it takes to succeed.",
  },
  {
    icon: Rocket,
    title: "Internships & Opportunities",
    desc: "Find internships, scholarships, events, workshops & more.",
  },
  {
    icon: MessageCircle,
    title: "Interview Questions & Answers",
    desc: "Practice common questions and learn how to stand out.",
  },
  {
    icon: Puzzle,
    title: "Problem-Solving Skills",
    desc: "Develop critical thinking and solve problems with confidence.",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    desc: "Understand AI tools, careers, and how AI is shaping the future.",
  },
  {
    icon: Bot,
    title: "Robotics & Engineering",
    desc: "Explore robotics, automation, coding, and hands-on learning.",
  },
  {
    icon: Users,
    title: "Teamwork & Communication",
    desc: "Collaborate effectively and communicate with impact.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Plan, organize, and deliver successful projects.",
  },
  {
    icon: UserCircle2,
    title: "Career Mentorship",
    desc: "Get guidance on careers, resumes, portfolios & more.",
  },
  {
    icon: Bell,
    title: "Outcome School Updates",
    desc: "Be the first to know about programs, events, and new opportunities.",
  },
];

const whySubscribe = [
  { icon: Lightbulb, label: "Learn something new" },
  { icon: Code2, label: "Build something meaningful" },
  { icon: Send, label: "Apply for opportunities" },
  { icon: TrendingUp, label: "Prepare for your next step" },
  { icon: Trophy, label: "Move closer to your dream career" },
];

const guarantees = [
  "100% Free",
  "No Spam",
  "Unsubscribe Anytime",
  "Useful, Practical, Actionable",
];

export default function OutcomeSchoolLanding() {
  const [heroForm, setHeroForm] = useState({ firstName: "", email: "" });
  const [footerForm, setFooterForm] = useState({
    firstName: "",
    email: "",
    interest: "",
  });

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hero subscribe:", heroForm);
  };

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Footer subscribe:", footerForm);
  };

  return (
    <div className="os-page">
      {/* Header */}
      <header className="os-header">
        <div className="os-container os-header__inner">
          <div className="os-logo">
            <span className="os-logo__icon">
              <GraduationCap size={22} strokeWidth={2.25} />
            </span>
            <span className="os-logo__text">
              OUTCOME
              <span className="os-logo__sub">SCHOOL</span>
            </span>
          </div>

          <nav className="os-nav">
            {navLinks.map((link) => (
              <a key={link} href="#" className="os-nav__link">
                {link}
              </a>
            ))}
          </nav>

          <button type="button" className="os-btn os-btn--primary os-btn--sm">
            Subscribe
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="os-hero">
        <div className="os-hero__blob" aria-hidden="true" />
        <div className="os-container os-hero__inner">
          <div className="os-hero__copy">
            <p className="os-eyebrow">Outcome School Career Signal</p>
            <h1 className="os-hero__title">
              Daily insights.
              <br />
              <span className="os-hero__title--accent">
                Limitless opportunities.
              </span>
            </h1>
            <span className="os-underline" />
            <p className="os-hero__desc">
              Subscribe to receive daily information and insights about tech
              careers, internships, opportunities, and the skills you need to
              build your future.
            </p>

            <ul className="os-hero__features">
              {heroFeatures.map(({ icon: Icon, label }) => (
                <li key={label} className="os-hero__feature">
                  <span className="os-hero__feature-icon">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="os-hero__form-wrap">
            <form className="os-card os-form" onSubmit={handleHeroSubmit}>
              <h2 className="os-form__title">Join the Mailing List</h2>
              <p className="os-form__subtitle">
                It&apos;s free. No spam. Unsubscribe anytime.
              </p>

              <label className="os-field">
                <span className="os-visually-hidden">First Name</span>
                <input
                  type="text"
                  placeholder="First Name"
                  value={heroForm.firstName}
                  onChange={(e) =>
                    setHeroForm({ ...heroForm, firstName: e.target.value })
                  }
                />
              </label>

              <label className="os-field">
                <span className="os-visually-hidden">Email Address</span>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={heroForm.email}
                  onChange={(e) =>
                    setHeroForm({ ...heroForm, email: e.target.value })
                  }
                />
              </label>

              <button
                type="submit"
                className="os-btn os-btn--primary os-btn--block"
              >
                Subscribe Now
                <ArrowRight size={18} strokeWidth={2} />
              </button>

              <p className="os-form__privacy">
                <ShieldCheck size={16} strokeWidth={2} />
                We respect your privacy.
              </p>
            </form>

            <div className="os-hero__illustration" aria-hidden="true">
              <svg viewBox="0 0 120 90" className="os-hero__plane">
                <path
                  d="M4 46 L112 6 L70 42 L84 82 L60 54 L28 66 Z"
                  fill="currentColor"
                />
              </svg>
              <svg viewBox="0 0 160 130" className="os-hero__envelope">
                <rect
                  x="8"
                  y="30"
                  width="144"
                  height="92"
                  rx="10"
                  fill="#fff"
                />
                <path
                  d="M8 40 L80 92 L152 40"
                  stroke="#c9c3f5"
                  strokeWidth="4"
                  fill="none"
                />
                <rect
                  x="24"
                  y="52"
                  width="70"
                  height="6"
                  rx="3"
                  fill="#e7e3fb"
                />
                <rect
                  x="24"
                  y="64"
                  width="90"
                  height="6"
                  rx="3"
                  fill="#e7e3fb"
                />
                <rect
                  x="24"
                  y="76"
                  width="60"
                  height="6"
                  rx="3"
                  fill="#e7e3fb"
                />
                <path d="M0 44 L80 0 L160 44 L80 88 Z" fill="#7c3aed" />
                <circle cx="80" cy="44" r="17" fill="#5b21b6" />
                <path
                  d="M74 44 a6 6 0 1 1 12 0 a6 6 0 1 1 -12 0 M80 50 l0 6 M74 40 q6 -6 12 0"
                  stroke="#fff"
                  strokeWidth="2.4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="os-section">
        <div className="os-container os-section__head">
          <p className="os-eyebrow os-eyebrow--center">Why This Exists</p>
          <h2 className="os-section__title">We help you move forward.</h2>
          <span className="os-underline os-underline--center" />
          <p className="os-section__desc">
            Many students have the potential but lack the right access,
            guidance, and opportunities. Outcome School exists to close that
            gap.
          </p>
        </div>

        <div className="os-container os-journey">
          {journeySteps.map(({ icon: Icon, title, desc }, i) => (
            <React.Fragment key={title}>
              <div className="os-journey__step">
                <span className="os-journey__icon">
                  <Icon size={30} strokeWidth={1.75} />
                </span>
                <p className="os-journey__title">{title}</p>
                <p className="os-journey__desc">{desc}</p>
              </div>
              {i < journeySteps.length - 1 && (
                <ArrowRight
                  className="os-journey__arrow"
                  size={20}
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* What you'll receive */}
      <section className="os-section os-section--tint">
        <div className="os-container os-section__head">
          <p className="os-eyebrow os-eyebrow--center">
            What You&apos;ll Receive
          </p>
          <h2 className="os-section__title">
            Daily insights that help you grow
          </h2>
        </div>

        <div className="os-container os-grid">
          {receiveCards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="os-tile">
              <span className="os-tile__icon">
                <Icon size={24} strokeWidth={1.75} />
              </span>
              <p className="os-tile__title">{title}</p>
              <p className="os-tile__desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="os-container os-section__more">
          <button type="button" className="os-btn os-btn--outline">
            And much more!
          </button>
        </div>
      </section>

      {/* Why subscribe */}
      <section className="os-band">
        <div className="os-container os-band__head">
          <p className="os-eyebrow os-eyebrow--onband">Why Subscribe?</p>
          <h2 className="os-band__title">
            One daily insight can change your future.
          </h2>
        </div>

        <div className="os-container os-band__grid">
          {whySubscribe.map(({ icon: Icon, label }) => (
            <div key={label} className="os-band__item">
              <span className="os-band__icon">
                <Icon size={26} strokeWidth={1.5} />
              </span>
              <p>{label}</p>
            </div>
          ))}
        </div>

        <p className="os-band__tagline">
          Information is everywhere. Guidance is not. We deliver what matters.
        </p>
      </section>

      {/* Final CTA */}
      <section className="os-section os-final">
        <div className="os-container os-final__inner">
          <div className="os-final__copy">
            <p className="os-eyebrow">Join the Outcome School Community</p>
            <h2 className="os-final__title">
              Talent is everywhere.
              <br />
              <span className="os-final__title--accent">Access is not.</span>
            </h2>
            <p className="os-final__desc">
              Join thousands of students, mentors, and professionals receiving
              daily insights to help them learn, grow, and build successful
              careers in technology.
            </p>

            <ul className="os-final__checks">
              {guarantees.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={18} strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form className="os-card os-form" onSubmit={handleFooterSubmit}>
            <h2 className="os-form__title">Subscribe Today</h2>

            <div className="os-form__row">
              <label className="os-field">
                <span className="os-visually-hidden">First Name</span>
                <input
                  type="text"
                  placeholder="First Name"
                  value={footerForm.firstName}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, firstName: e.target.value })
                  }
                />
              </label>
              <label className="os-field">
                <span className="os-visually-hidden">Email Address</span>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={footerForm.email}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, email: e.target.value })
                  }
                />
              </label>
            </div>

            <label className="os-field os-field--select">
              <span className="os-field__label">Career Interest</span>
              <div className="os-select">
                <select
                  value={footerForm.interest}
                  onChange={(e) =>
                    setFooterForm({ ...footerForm, interest: e.target.value })
                  }
                >
                  <option value="">Select an area of interest</option>
                  <option value="software">Software Engineering</option>
                  <option value="data">Data & AI</option>
                  <option value="design">Design & UX</option>
                  <option value="robotics">Robotics</option>
                  <option value="product">Product Management</option>
                </select>
                <ChevronDown size={18} className="os-select__chevron" />
              </div>
            </label>

            <button
              type="submit"
              className="os-btn os-btn--primary os-btn--block"
            >
              Join the Mailing List
              <ArrowRight size={18} strokeWidth={2} />
            </button>

            <p className="os-form__fineprint">
              By subscribing, you agree to receive emails from Outcome School.
              You may unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="os-footer">
        <div className="os-container os-footer__inner">
          <div className="os-logo os-logo--footer">
            <span className="os-logo__icon os-logo__icon--footer">
              <GraduationCap size={20} strokeWidth={2.25} />
            </span>
            <span className="os-logo__text">
              OUTCOME
              <span className="os-logo__sub">SCHOOL</span>
            </span>
          </div>

          <p className="os-footer__tagline">
            Empowering the next generation
            <br />
            of technology leaders.
          </p>

          <div className="os-footer__social">
            <a href="#" aria-label="Facebook">
              <SocialFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <SocialTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <SocialLinkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <SocialInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <SocialYoutube />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
