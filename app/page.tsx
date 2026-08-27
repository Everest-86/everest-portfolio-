import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "QA Automation Engineer",
    company: "Allstate Identity Protection",
    duration: "November 2022 – Present",
    location: "Northfield, IL · Remote",
    achievements: [
      "Build and maintain Java, Selenium WebDriver, TestNG, and Cucumber BDD automation for web applications, API services, and database workflows.",
      "Created 50+ automated BDD scenarios and reusable Page Object Model components, expanding regression coverage and reducing repetitive manual testing.",
      "Integrated automated suites with Maven, GitHub, and Jenkins for scheduled execution and faster release feedback.",
      "Automated SQL and JDBC validation and identified 70+ front-end issues, improving data integrity and cross-browser reliability.",
    ],
    skills: ["Java", "Selenium", "Cucumber", "TestNG", "JDBC", "SQL", "Jenkins"],
  },
  {
    title: "QA Engineer",
    company: "K Health",
    duration: "March 2020 – November 2022",
    location: "New York, NY · Remote",
    achievements: [
      "Designed and executed functional, regression, integration, and end-to-end testing for healthcare web and API workflows.",
      "Logged and tracked 250+ defects in Jira with clear reproduction steps, evidence, severity, and business impact.",
      "Validated REST APIs with Postman and REST Assured and verified backend data with 100+ SQL queries in MySQL.",
      "Partnered with developers, product owners, and business stakeholders throughout Agile delivery and supported UAT and release validation.",
    ],
    skills: ["Postman", "REST Assured", "MySQL", "Jira", "GitHub", "UAT", "Agile"],
  },
];

const skillGroups = [
  {
    title: "Test Automation",
    icon: Code2,
    items: ["Java", "Selenium WebDriver", "Playwright", "Cucumber BDD", "TestNG", "JUnit", "Page Object Model"],
  },
  {
    title: "API & Data",
    icon: Database,
    items: ["Postman", "REST Assured", "Swagger / OpenAPI", "SQL", "MySQL", "PostgreSQL", "JDBC"],
  },
  {
    title: "Quality Engineering",
    icon: TestTube2,
    items: ["Functional", "Regression", "Smoke", "Integration", "End-to-End", "UAT", "Cross-Browser"],
  },
  {
    title: "Delivery & Tooling",
    icon: ShieldCheck,
    items: ["Jenkins", "GitHub Actions", "Maven", "Git", "Jira", "Agile / Scrum", "CI/CD"],
  },
  {
    title: "AI Application Testing",
    icon: BrainCircuit,
    items: ["LLM Evaluation", "Multi-Turn Flows", "Hallucination Detection", "Groundedness", "Safety", "Fallback & Escalation"],
  },
];

const projects = [
  {
    eyebrow: "Featured project",
    title: "AI Medical Voice Agent",
    description:
      "A clinic communication assistant for appointment reminders, confirmations, rescheduling, follow-up, administrative questions, and human escalation.",
    highlights: ["React + FastAPI + PostgreSQL", "Twilio voice workflow", "OpenAI-powered conversations", "API, database, and safety testing"],
    link: "https://github.com/Everest-86/clinic-agent",
  },
  {
    eyebrow: "Automation framework",
    title: "Selenium Hybrid Framework",
    description:
      "A reusable Java automation framework built around Page Object Model, data-driven execution, and CI feedback.",
    highlights: ["Selenium + TestNG", "Maven dependency management", "Reusable page objects", "Jenkins-ready execution"],
  },
  {
    eyebrow: "API quality",
    title: "REST API Test Suite",
    description:
      "Automated service validation covering payloads, status codes, authorization, negative paths, and data integrity.",
    highlights: ["REST Assured", "Schema and response validation", "Data-driven scenarios", "CI/CD integration"],
  },
];

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
];

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-900">
      <header className="relative isolate bg-[#0b1224] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(79,70,229,.42),transparent_35%),radial-gradient(circle_at_10%_70%,rgba(14,165,233,.18),transparent_30%)]" />
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="text-lg font-black tracking-tight">EL<span className="text-indigo-400">.</span></a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {navigation.map(([label, href]) => <a key={label} href={href} className="transition hover:text-white">{label}</a>)}
          </div>
          <a href="mailto:everestslaci@gmail.com" className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-slate-950">Contact me</a>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-[1fr_280px] md:pb-28 md:pt-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to QA/SDET opportunities
            </div>
            <p className="mb-3 font-semibold uppercase tracking-[.2em] text-indigo-300">QA Automation Engineer · SDET</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              I build confidence into every release.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I&apos;m Everest Laci, a quality engineer with 6+ years of experience testing web, API, database, and AI-powered applications—from hands-on exploration to maintainable automation.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 font-bold transition hover:bg-indigo-400">
                See my work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/everest-laci-89b993377" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/Everest-86" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Swampscott, Massachusetts</span>
              <a href="mailto:everestslaci@gmail.com" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> everestslaci@gmail.com</a>
            </div>
          </div>

          <div className="relative mx-auto hidden md:block">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500 to-sky-400 opacity-40 blur-2xl" />
            <Image
              src="/everest.jpg"
              alt="Everest Laci"
              width={256}
              height={320}
              priority
              className="relative aspect-[4/5] w-64 rounded-[2rem] border border-white/20 object-cover shadow-2xl"
            />
          </div>
        </div>
      </header>

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[.72fr_1.28fr] md:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Professional summary</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Quality that connects technology with real users.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>I combine thoughtful manual testing with practical automation across UI, API, and database layers. My work includes test strategy, reusable frameworks, CI/CD execution, defect triage, release validation, and close collaboration with developers and product teams.</p>
          <p>I also test conversational and LLM-powered applications for response accuracy, groundedness, multi-turn behavior, hallucinations, safety, fallback handling, and human escalation.</p>
          <div className="grid grid-cols-3 gap-3 pt-4">
            {[['6+', 'Years in QA'], ['50+', 'BDD scenarios'], ['250+', 'Defects tracked']].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-indigo-600 sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Technical toolkit</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-slate-950">Tools I use to test the full product journey.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map(item => <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-end gap-4">
          <BriefcaseBusiness className="mb-1 h-8 w-8 text-indigo-600" />
          <div><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Career</p><h2 className="mt-2 text-4xl font-black tracking-tight text-slate-950">Professional experience</h2></div>
        </div>
        <div className="mt-12 space-y-6">
          {experiences.map(exp => (
            <article key={exp.company} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
              <div className="flex flex-col gap-3 border-b border-slate-100 pb-6 md:flex-row md:items-start md:justify-between">
                <div><h3 className="text-2xl font-black">{exp.title}</h3><p className="mt-1 font-bold text-indigo-600">{exp.company}</p></div>
                <div className="text-sm text-slate-500 md:text-right"><p className="font-semibold text-slate-700">{exp.duration}</p><p className="mt-1">{exp.location}</p></div>
              </div>
              <ul className="mt-6 grid gap-4 text-slate-600 md:grid-cols-2">
                {exp.achievements.map(item => <li key={item} className="flex gap-3 leading-7"><Check className="mt-1.5 h-4 w-4 shrink-0 text-emerald-500" /><span>{item}</span></li>)}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">{exp.skills.map(skill => <span key={skill} className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#0b1224] py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-300">Selected work</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight">Projects that show how I approach modern quality engineering.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className={`flex flex-col rounded-3xl border p-7 ${index === 0 ? 'border-indigo-400/50 bg-indigo-500/15' : 'border-white/10 bg-white/5'}`}>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-indigo-300">{project.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <ul className="mt-6 flex-grow space-y-3 text-sm text-slate-300">{project.highlights.map(item => <li key={item} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-emerald-400" />{item}</li>)}</ul>
                {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 font-bold text-white hover:text-indigo-300">View on GitHub <ExternalLink className="h-4 w-4" /></a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_1.3fr] md:py-28">
        <div className="flex items-start gap-4"><div className="rounded-2xl bg-amber-100 p-3 text-amber-700"><GraduationCap className="h-6 w-6" /></div><div><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Education</p><h2 className="mt-2 text-3xl font-black">A cross-disciplinary perspective</h2></div></div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><p className="font-black">Master of Arts in Archaeology</p><p className="mt-2 text-sm text-slate-500">University of Tirana · Tirana, Albania</p></div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><p className="font-black">Bachelor of Arts in History</p><p className="mt-2 text-sm text-slate-500">University of Tirana · Tirana, Albania</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-indigo-600 to-blue-600 px-7 py-12 text-center text-white shadow-2xl sm:px-12">
          <h2 className="text-3xl font-black sm:text-4xl">Let&apos;s build better software together.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">I&apos;m open to QA Automation Engineer, SDET, and Software Quality Engineer opportunities in the Boston area or remotely.</p>
          <a href="mailto:everestslaci@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-indigo-700 transition hover:bg-indigo-50"><Mail className="h-4 w-4" /> Email me</a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Everest Laci. All rights reserved.</p>
          <p>Quality is built, tested, and continuously improved.</p>
        </div>
      </footer>
    </main>
  );
}
