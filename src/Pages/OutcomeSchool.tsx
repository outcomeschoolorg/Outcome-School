import React, { useEffect } from "react";
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
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";

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

declare global {
  interface Window {
    sender: any;
    senderForms: {
      render: (formId: string) => void;
      destroy: (formId: string) => void;
    };
    senderFormsLoaded?: boolean;
  }
}

export default function OutcomeSchoolLanding() {
  useEffect(() => {
    const formId = "e1wZMP"; // must match data-sender-form-id exactly

    const renderForm = () => {
      if (window.senderForms) {
        window.senderForms.render(formId);
      }
    };

    if (window.senderFormsLoaded) {
      renderForm();
    } else {
      window.addEventListener("onSenderFormsLoaded", renderForm);
    }

    return () => {
      window.removeEventListener("onSenderFormsLoaded", renderForm);
      if (window.senderForms) {
        window.senderForms.destroy(formId);
      }
    };
  }, []);
  return (
    <>
      <NavBar />
      <div className="py-20">
        <div className="os-page">
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
                  careers, internships, opportunities, and the skills you need
                  to build your future.
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
                <div className="os-card os-form">
                  <div
                    id="sender-form"
                    className="sender-form-field"
                    data-sender-form-id="e1wZMP"
                  ></div>
                </div>

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
              Information is everywhere. Guidance is not. We deliver what
              matters.
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
                  <span className="os-final__title--accent">
                    Access is not.
                  </span>
                </h2>
                <p className="os-final__desc">
                  Join thousands of students, mentors, and professionals
                  receiving daily insights to help them learn, grow, and build
                  successful careers in technology.
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
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
