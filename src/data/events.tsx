import event1 from "../assets/images/event-1.webp";
import htmlevent from "../assets/images/HTML-CSS.png";
import UIevent from "../assets/images/UI-UX.png";

interface EventItem {
  id: number;
  title: string;
  tag: string;
  date: string;
  time: string;
  timezone: string;
  location: string;
  image?: string;
  description?: string;
}

export const events: EventItem[] = [
  {
    id: 0,
    title: "Product Demo (HTML/CSS Graduation Event)",
    tag: "HTML/CSS Demo",
    date: "2026-05-07",
    time: "5-7 PM",
    timezone: "EST",
    location: "Online Virtual",
    image: htmlevent,
    description: `🚀 HTML/CSS Product Demo Event

Join us at Outcome School as our students showcase the websites and applications they built during their 14-week HTML/CSS program.

👩‍💻 What to expect:
• Live demos of student-built HTML/CSS projects
• Short presentations on problem, solution, and tech used
• Meet learners, mentors, and community

📅 Date: May 07
🕖 Time: 5:00 PM – 7:00 PM EST

We celebrate creativity, growth, and persistence.`,
  },
  {
    id: 1,
    title: "Product Demo (UX/UI Design Graduation Event)",
    tag: "UX/UI Demo",
    date: "2026-05-14",
    time: "7-9 PM",
    timezone: "EST",
    location: "Online Virtual",
    image: UIevent,
    description: `About
🚀 UX/UI Design Product Demo Event – May 14 | 7:00–9:00 PM EST

Join us at Outcome School as our UX/UI Design students showcase the projects they built during their 18-week program. This Product Demo Event is where learners present real applications, explain the problems they tackled, and demonstrate the tools and technologies they used to build their solutions.

Throughout the evening, student teams will walk us through their ideas, give live demos of their products, and share what they learned while building with UX/UI Design. It’s a celebration of growth, persistence, and the power of hands-on learning.

👩‍💻 What to expect:
• Live demos of UX/UI projects built by our students
• Short presentations explaining the problem, solution, and technology used
• Opportunities to meet our learners, mentors, and community

📅 Date: May 14
🕖 Time: 7:00 PM – 9:00 PM (EST)

We invite community members, tech professionals, mentors, and supporters to join us and celebrate the incredible work our students have accomplished.`,
  },
  {
    id: 2,
    title: "Python Product Demo",
    tag: "Tech Demo",
    date: "2026-04-09",
    time: "7-9 PM",
    timezone: "PDT",
    location: "Online Virtual",
    image: event1,
    description: `Stop talking about 'learning to code.' Come see what it actually looks like.
    
    WATCH OUR STUDENTS DEMO THE PRODUCTS THEY BUILT IN 14 WEEKS.`,
  },
];
