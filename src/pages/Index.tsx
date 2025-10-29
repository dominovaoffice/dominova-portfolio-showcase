import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactCTA from "@/components/ContactCTA";
import { Brain, Code, TestTube, Presentation } from "lucide-react";
import dominovaLogo from "@/assets/dominova-logo.png";

// Import event images
import nexoraWorkshop1 from "@/assets/events/nexora-workshop-1.jpg";
import nexoraWorkshop2 from "@/assets/events/nexora-workshop-2.jpg";
import nexoraAward from "@/assets/events/nexora-award.jpg";
import nexoraAuditorium from "@/assets/events/nexora-auditorium.jpg";
import simatsBuilding from "@/assets/events/simats-building.jpg";
import deepakPortrait from "@/assets/events/deepak-portrait.jpg";
import secAward from "@/assets/events/sec-award.jpg";
import secAward2 from "@/assets/events/sec-award-2.jpg";
import nexoraPresentation from "@/assets/events/nexora-presentation.jpg";
import panelDiscussion from "@/assets/events/panel-discussion.jpg";
import manojPresentation from "@/assets/events/manoj-presentation.jpg";
import classroomStudents from "@/assets/events/classroom-students.jpg";
import interactiveSession from "@/assets/events/interactive-session.jpg";
import guestLecture from "@/assets/events/guest-lecture.jpg";
import liveDemo from "@/assets/events/live-demo.jpg";
import auditoriumSetup from "@/assets/events/auditorium-setup.jpg";
import teamAward1 from "@/assets/events/team-award-1.jpg";
import teamAward2 from "@/assets/events/team-award-2.jpg";
import teamGroup from "@/assets/events/team-group.jpg";
import technicalPresentation from "@/assets/events/technical-presentation.jpg";
import mentoringSession from "@/assets/events/mentoring-session.jpg";
import pythonWorkshop from "@/assets/events/python-workshop.jpg";
import labTraining from "@/assets/events/lab-training.jpg";
import workshopActivity from "@/assets/events/workshop-activity.jpg";

const Index = () => {
  const events = [
    {
      title: "NEXORA 2K25",
      subtitle: "AI & Python Workshop at SIMATS",
      description: "A groundbreaking national-level symposium where we conducted comprehensive AI and Python workshops for 800+ students. Students learned to build real mobile apps and websites in just 3 hours using cutting-edge AI tools.",
      highlights: [
        "800+ students trained (550 in AI, 350 in Python)",
        "Hands-on, interactive sessions with live project building",
        "Students created functional apps and websites using AI in 3 hours",
        "Led by B Deepak (Founder), Manikandan (Infosys), and Gauthaman (CTS)",
        "Overwhelmingly positive student feedback and engagement"
      ],
      images: [manojPresentation, nexoraWorkshop1, labTraining, workshopActivity],
      stats: [
        { label: "Students", value: "800+" },
        { label: "Hours", value: "3" },
        { label: "Topics", value: "2" },
        { label: "Trainers", value: "3" }
      ]
    },
    {
      title: "PEC Guest Lecture",
      subtitle: "Comprehensive Testing Workshop",
      description: "An in-depth guest lecture delivered by B Deepak covering testing methodologies from fundamentals to advanced concepts. Students gained practical insights into User Requirement Documents (URD) and Agile testing practices.",
      highlights: [
        "End-to-end testing methodology coverage",
        "Deep dive into User Requirement Documents (URD)",
        "Practical Agile testing techniques and best practices",
        "Real-world testing scenarios and case studies",
        "Interactive Q&A and hands-on demonstrations"
      ],
      images: [guestLecture, pythonWorkshop, classroomStudents, interactiveSession],
      stats: [
        { label: "Duration", value: "2 hrs" },
        { label: "Topics", value: "URD + Agile" },
        { label: "Engagement", value: "High" },
        { label: "Speaker", value: "B Deepak" }
      ]
    },
    {
      title: "SEC Hackathon Evaluation",
      subtitle: "National-Level Project Assessment",
      description: "Conducted comprehensive evaluation of student hackathon projects at Saveetha Engineering College's national-level competition. Provided expert feedback and guidance to help students refine their innovations.",
      highlights: [
        "National-level hackathon evaluation panel",
        "Expert team: B Deepak, Manikandan, Gauthaman",
        "Detailed project assessment and technical review",
        "Constructive feedback and mentorship for participants",
        "Recognition of innovative student solutions"
      ],
      images: [teamAward1, teamAward2, teamGroup, auditoriumSetup],
      stats: [
        { label: "Projects", value: "50+" },
        { label: "Evaluators", value: "3" },
        { label: "Level", value: "National" },
        { label: "College", value: "SEC" }
      ]
    },
    {
      title: "SEC Hackathon Guidance",
      subtitle: "Presentation Mentoring Workshop",
      description: "Mentored engineering students in crafting compelling national-level hackathon presentations. Focused on storytelling, slide design, and effective communication of technical concepts.",
      highlights: [
        "Presentation skills training for hackathon participants",
        "Slide design and storytelling techniques",
        "Technical communication and pitch development",
        "One-on-one mentoring sessions with students",
        "Success stories from mentored teams advancing to finals"
      ],
      images: [mentoringSession, liveDemo, nexoraPresentation, panelDiscussion],
      stats: [
        { label: "Students", value: "100+" },
        { label: "Sessions", value: "Multiple" },
        { label: "Success Rate", value: "High" },
        { label: "Mentors", value: "3" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "The AI workshop by DOMINOVA was transformative! We built a functioning app in just 3 hours. The hands-on approach made complex concepts incredibly accessible.",
      author: "Priya Sharma",
      role: "Student",
      institution: "SIMATS Engineering College"
    },
    {
      quote: "B Deepak's testing lecture provided practical insights I've never encountered before. The URD and Agile methodologies are now core to my skill set.",
      author: "Rajesh Kumar",
      role: "Final Year Student",
      institution: "PEC"
    },
    {
      quote: "The hackathon evaluation team's feedback was invaluable. Their expertise helped us refine our project and think like professionals.",
      author: "Ananya Reddy",
      role: "Hackathon Participant",
      institution: "Saveetha Engineering College"
    },
    {
      quote: "DOMINOVA's presentation guidance transformed how we pitch our ideas. We learned to tell compelling stories that resonate with judges and investors.",
      author: "Karthik Menon",
      role: "Team Lead",
      institution: "Saveetha Engineering College"
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "AI Workshops",
      description: "Cutting-edge AI training with hands-on project building"
    },
    {
      icon: Code,
      title: "Python Training",
      description: "Comprehensive Python programming for real-world applications"
    },
    {
      icon: TestTube,
      title: "Testing Methodologies",
      description: "Professional testing practices from URD to Agile"
    },
    {
      icon: Presentation,
      title: "Hackathon Guidance",
      description: "Mentorship for presentations and project evaluations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Our </span>
              <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT training and guidance tailored for engineering excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-primary/20 hover:border-primary transition-all duration-300 text-center group animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="text-primary">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing our impact across leading engineering institutions
            </p>
          </div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Student </span>
              <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from students whose careers we've helped shape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <img src={dominovaLogo} alt="DOMINOVA" className="h-12" />
              <div>
                <p className="font-bold text-foreground">DOMINOVA</p>
                <p className="text-sm text-muted-foreground">MSME Registered IT Startup</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 DOMINOVA. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Founder: B Deepak | +91 87543 25192
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
