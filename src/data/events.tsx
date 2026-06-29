import event1 from "../assets/images/event-1.webp";
import htmlevent from "../assets/images/HTML-CSS.png";
import UIevent from "../assets/images/UI-UX.png";
import GameEvent from "../assets/images/GameEvent.png";

interface EventItem {
  id: number;
  title: string;
  tag: string[];
  date: string;
  time: string;
  timezone: string;
  location: string;
  image?: string;
  description?: string;
  NumberAttendees?: number;
  mapEmbed?: string;
  register?: string;
}

export const events: EventItem[] = [
  {
    id: 97,
    title: "Build Your First Game — In Person in Los Angeles!",
    tag: ["Game Development", "Ages 7-13"],
    date: "Aug 07, 2026",
    time: "9 AM - 12 PM",
    register: "https://tally.so/r/rjJAGN",
    timezone: "PT",
    location: "10200 S. Success Ave., Los Angeles, CA 90002",
    image: GameEvent,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.886780540873!2d-118.24897999999999!3d33.944039999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c9c4896b38ff%3A0xa98f050eb1790426!2s10200%20Success%20Ave%2C%20Los%20Angeles%2C%20CA%2090002!5e0!3m2!1sen!2sus!4v1782765268941!5m2!1sen!2sus",
    description: `
Join us in person for a fun, free workshop where kids get to build their very first game from scratch!

Build Your First Game (Free Workshop for Kids)

The games your kids play today could become the careers they build tomorrow. Every great game developer started with one simple project. What if your child didn't just spend hours playing games... What if they learned how to create them?

At Outcome School, we're giving kids ages 7–13 the opportunity to transform curiosity into creativity through a fun, hands-on game development workshop.

⭐ Your Child Will:
🎮 Build their very first playable game
💻 Learn coding in a beginner-friendly way
🧠 Strengthen creativity, problem-solving, and critical thinking
🚀 Gain confidence by creating something they can proudly showcase
🤝 Learn from experienced mentors in a supportive environment
This isn't just another summer activity. It's an opportunity to introduce your child to the skills behind tomorrow's fastest-growing careers in technology.

🎯 Parents in Los Angeles: Give your child the chance to become a creator—not just a consumer of technology.
🎫 Spaces are limited! Register your child today:

Tag a parent who has a future game developer at home!

📞 Contact the Organizer:
Outcome School  
samson@outcomeschool.org

🎟️ Tickets:
Student Ticket (Ages 7–13) — 11 remaining

Each student in your family requires a ticket. Only registered students are allowed to attend the workshop due to space constraints.

As parents/guardians complete the registration form, please include:
- First and last name of the student
- Email address of the parent/guardian completing registration

📢 Outcome School Communication Policy:
By entering your phone number and email and submitting this form, you agree to receive recurring automated promotional and marketing messages via text and email from Outcome School.

Consent is not a condition of purchase. Message frequency may vary. Message and data rates may apply. You may unsubscribe at any time.
`,
    NumberAttendees: 25,
  },
  {
    id: 98,
    title: "Product Demo (UX/UI Design Graduation Event)",
    tag: ["UX/UI Demo"],
    date: "May 14, 2026",
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
    id: 99,
    title: "Product Demo (HTML/CSS Graduation Event)",
    tag: ["HTML/CSS Demo"],
    date: "May 07, 2026",
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
    id: 100,
    title: "Python Product Demo",
    tag: ["Tech Demo"],
    date: "April 09, 2026",
    time: "7-9 PM",
    timezone: "PDT",
    location: "Online Virtual",
    image: event1,
    description: `Stop talking about 'learning to code.' Come see what it actually looks like.
    
    WATCH OUR STUDENTS DEMO THE PRODUCTS THEY BUILT IN 14 WEEKS.`,
  },
];
