import React from "react";
import {
  Mail,
  Linkedin,
  MapPin,
  Github,
  Code,
  Database,
  TestTube,
  Cpu,
  CheckCircle,
} from "lucide-react";

export default function Portfolio() {
  const experiences = [
    {
      title: "Software Development Engineer in Test (SDET)",
      company: "Allstate",
      type: "Contract",
      duration: "Jun 2021 - Present · 4 yrs 6 mos",
      location: "Northfield, IL · Remote",
      achievements: [
        "Engaged with development teams to optimize system architecture and integrate SDLC/STLC frameworks, enhancing overall product quality and reducing critical defect recurrence",
        "Created automated JDBC tests to verify database connectivity and strengthen data validation",
        "Developed and executed over 50 automated test scripts using Cucumber to support Behavior-Driven Development (BDD), improving test coverage and reducing manual testing efforts",
        "Automated data validation processes by integrating SQL scripts into testing workflows, streamlining operations and reducing manual effort",
        "Detected and addressed over 70 front-end bugs, improving system stability and delivering consistent user experience across platforms",
      ],
      skills: ["Java", "Selenium", "Cucumber", "SQL", "JDBC", "BDD"],
    },
    {
      title: "QA Engineer",
      company: "KHealth",
      type: "Full-time",
      duration: "Feb 2019 - Jun 2021 · 2 yrs 5 mos",
      location: "New York, NY · Remote",
      achievements: [
        "Automated critical flows for patient-facing healthcare applications",
        "Ran performance checks and validated backend data using SQL",
        "Collaborated with doctors and data teams on clinical workflows",
        "Implemented comprehensive testing strategies for healthcare compliance",
      ],
      skills: ["SDLC", "Gherkin", "API Testing", "Healthcare QA"],
    },
  ];

  const skills = [
    {
      category: "Automation",
      items: [
        "Selenium WebDriver",
        "Playwright",
        "Cucumber BDD",
        "TestNG",
        "JUnit",
      ],
    },
    {
      category: "API Testing",
      items: ["Postman", "Rest-Assured", "API Validation"],
    },
    {
      category: "CI/CD",
      items: ["Jenkins", "GitHub Actions", "Pipeline Automation"],
    },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "SQL", "JDBC"] },
    { category: "Languages", items: ["Java", "JavaScript", "Gherkin"] },
    {
      category: "Tools & Methods",
      items: ["Git/GitHub", "Agile/Scrum", "SDLC/STLC", "AWS Basics"],
    },
  ];

  const projects = [
    {
      title: "Selenium Hybrid Automation Framework",
      description:
        "A modular framework using Java, TestNG, Page Object Model, and Jenkins CI",
      highlights: [
        "Reusable components for API + UI validation",
        "Real-time HTML reporting",
        "Reduced manual regression by 70%",
      ],
    },
    {
      title: "API Automation with Rest-Assured",
      description:
        "Created a full API suite with environment switching and payload validation",
      highlights: [
        "Comprehensive endpoint coverage",
        "Automated data-driven testing",
        "Integration with CI/CD pipeline",
      ],
    },
    {
      title: "Playwright UI Smoke Suite",
      description: "Fast cross-browser smoke tests running on GitHub Actions",
      highlights: [
        "Multi-browser support",
        "Parallel execution",
        "Quick feedback loop",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-4">
            <div className="relative">
              <img
                src="/everest.jpg"
                alt="Everest Laci"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/30 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-blue-600 flex items-center justify-center">
                <TestTube className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold tracking-tight">
                Everest Laci
              </h1>
              <p className="text-xl text-blue-100 mt-2">
                QA Automation Engineer • SDET
              </p>
            </div>
          </div>
          <p className="text-lg text-blue-50 max-w-3xl mt-6">
            6+ years of experience building scalable test automation frameworks
            • API & UI Automation • CI/CD Integration • SQL Data Validation •
            Agile Environments
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="mailto:everestqa@gmail.com"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              <Mail className="w-4 h-4" />
              everestqa@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/everest-laci-89b993377"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4" />
              Boston, MA
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* About */}
        <section className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            About Me
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-lg leading-relaxed text-gray-700">
              I am a QA Automation Engineer with 6+ years of experience across
              finance, insurance, and healthcare industries. I specialize in
              designing scalable test automation frameworks, enhancing CI/CD
              pipelines, validating complex datasets with SQL, and ensuring
              high-quality releases for web and mobile applications. My
              expertise spans Selenium WebDriver, Rest-Assured, Playwright,
              Cucumber BDD, Jenkins, GitHub Actions, and comprehensive API/test
              data validation strategies.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-indigo-600" />
            </div>
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold mt-1">
                      {exp.company} · {exp.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-medium">{exp.duration}</p>
                    <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-blue-500 font-bold text-lg">•</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Github className="w-6 h-6 text-green-600" />
            </div>
            Highlighted Automation Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-green-500 font-bold">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto">
            Looking for a dedicated QA Automation Engineer to elevate your
            testing strategy? Let's connect!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:everestqa@gmail.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/everest-laci-89b993377"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2025 Everest Laci. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
