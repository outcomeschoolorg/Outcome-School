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
}

export const events: EventItem[] = [
  {
    id: 97,
    title: "Build Your First Game — In Person in Los Angeles!",
    tag: ["Game Development", "Ages 7-13"],
    date: "Aug 12, 2026",
    time: "9 AM - 12 PM",
    timezone: "PT",
    location: "700 South Flower Street, Suite 1950, Los Angeles, CA 90017",
    image: GameEvent,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.8302364281094!2d-118.2614322260246!3d34.04822557315849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b6a63c5c51%3A0xdb2cb559771b8f32!2s700%20Flower%20St%20%23%201950%2C%20Los%20Angeles%2C%20CA%2090017!5e0!3m2!1sen!2sus!4v1778881030763!5m2!1sen!2sus",
    description: `
Join Outcome School in Los Angeles for a hands-on workshop where kids ages 7–13 design and build their very first game in a fun, creative, and beginner-friendly environment.

🎮 What Students Will Learn:
• Learn the basics of coding, game logic, and interactive design
• Build a simple game using tools like Scratch, Roblox Studio, or MakeCode
• Create characters, goals, obstacles, and scoring systems
• Practice creativity, problem-solving, and digital confidence
• Showcase their game at the end of the workshop

📞 Contact the Organizer:
Outcome School  
samson@outcomeschool.org

🎟️ Tickets:
Student Ticket (Ages 7–13) — 11 remaining

Each student in your family requires a ticket. Only registered students are allowed to attend the workshop due to space constraints.

As parents/guardians complete the registration form, please include:
• First and last name of the student
• Email address of the parent/guardian completing registration

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
