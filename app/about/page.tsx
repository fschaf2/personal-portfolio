interface Project {
  title: string;
  summary: string;
  tech: string;
  github: string;
  isPrivate?: boolean;
  githubLabel?: string;
}
export default function AboutPage() {
  const projects: Project[] = [
    {
      title: "BrainScan AI",
      summary: "MRI tumor classifier with Grad-CAM overlays for explainability.",
      tech: "Python · PyTorch · React · Next.js",
      github: "https://github.com/christixian/BrainScanAI_4444",
    },
    {
      title: "LaCulture",
      summary: "Statewide events, recipes, tours, and heatmap-driven map for Louisiana culture.",
      tech: "Angular · ASP.NET · SQL",
      github: "https://github.com/LandonW-CSC-LSU/4330_Project_LaCulture",
    },
    {
      title: "LSU Student Datastore",
      summary: "Scrapes, analyzes, and exports LSU student data with a clear UI.",
      tech: "Python · Streamlit · SQLite",
      github: "https://github.com/CSC-3380-Spring-2025/Team-34",
    },
    {
      title: "AI Digit Classifier",
      summary: "Five-model MNIST lab with a CNN topping 99% accuracy and visualized results.",
      tech: "Python · PyTorch · Scikit-learn",
      github: "https://github.com/fschaf2/AIProj",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7f2ff] via-[#fdf7ec] to-[#ece3ff] text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">About Felix</p>
          <h1 className="text-4xl font-bold leading-tight">
            LSU CSC senior building AI and full-stack experiences rooted in Louisiana
          </h1>
          <p className="text-slate-700 max-w-3xl">
            I like taking real ideas and data, from MRI scans to Louisiana culture, and turning it into software people
            can use. Most days I'm split between classes, homework, and shipping code for innovative projects.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[1fr_1.1fr]">
          <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg shadow-purple-200/50 ring-1 ring-purple-100 space-y-5">
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2f1b52] text-white px-3 py-1 font-semibold">
                LSU Computer Science · Senior
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 text-slate-800 px-3 py-1 font-semibold ring-1 ring-purple-100">
                AI/ML + Full-Stack
              </span>
            </div>
            <p className="text-slate-700">
              My work mixes machine learning, data pipelines, and UI engineering. I care about clarity: clean
              code, clear visuals, and explaining the "why" behind models and features.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              {[
                "Baton Rouge-based, Louisiana native",
                "Comfortable in Angular, React/Next, ASP.NET, Python",
                "Strong with PyTorch and NumPy for advanced data analysis",
                "Prefer readable, documented, scalable code over spaghetti",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white/80 px-3 py-2 font-medium text-slate-800 shadow-sm ring-1 ring-purple-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg shadow-purple-200/50 ring-1 ring-purple-100 space-y-4">
            <h2 className="text-xl font-semibold">Project highlights</h2>
            <div className="grid gap-3">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-xl border border-purple-100 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-[#2f1b52]">{project.title}</p>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#4c1d95] font-semibold">
                      {project.tech}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
                  {Boolean(project.isPrivate) ? (
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2f1b52]">
                      {project.githubLabel ?? "Repo currently private"}
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#2f1b52] hover:text-[#4c1d95]"
                    >
                      {project.githubLabel ?? "View on GitHub"} <span aria-hidden>↗</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg shadow-purple-200/50 ring-1 ring-purple-100 space-y-4">
            <h2 className="text-xl font-semibold">How I work</h2>
            <ul className="space-y-3 text-slate-700">
              <li>
                <span className="font-semibold text-[#2f1b52]">Explain the black box:</span> I ship readable, structured code and 
                 and annotate it with comments and visuals (confusion matrices, probability maps, graphs) so teammates know what’s going on.
              </li>
              <li>
                <span className="font-semibold text-[#2f1b52]">Small iterations count:</span> I believe that continuous updates are better than
                once-in-a-blue-moon drops.
              </li>
              <li>
                <span className="font-semibold text-[#2f1b52]">Design and build:</span> I jump between big picture-level thinking and
                detail-oriented code, keeping polish and performance in balance.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg shadow-purple-200/50 ring-1 ring-purple-100 space-y-4">
            <h2 className="text-xl font-semibold">Toolbox</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Python, PyTorch, NumPy",
                "FastAPI and REST APIs",
                "Angular, React, Next.js",
                "Unity and Godot",
                "Java and C#",
                "ASP.NET backends",
                "SQLite, SQL, data pipelines",
                "Windows and Linux environments",
                "Web deployment",
                "Git, GitHub",
                "Tailwind CSS, component systems",
                "Testing, docs, and linted code",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white/80 px-3 py-2 font-medium text-slate-800 shadow-sm ring-1 ring-purple-100"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-600">
              Not seeing your stack? Reach out and I’ll let you know how I can help.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg shadow-purple-200/50 ring-1 ring-purple-100 space-y-4">
          <h2 className="text-xl font-semibold">Relevant coursework</h2>
          <div className="grid gap-2 sm:grid-cols-2 text-sm text-slate-800">
            {[
              "Java Programming",
              "Discrete Math",
              "Linear Algebra",
              "Numerical Methods",
              "Advanced Data Structures and Algorithms",
              "Object-Oriented Design",
              "Computer Organization and Design",
              "Engineering Statistics",
              "Ethics in Computing",
              "Operating Systems",
              "Software Systems Development",
              "Database Management Systems",
              "Programming Languages",
              "Systems Programming",
              "Artificial Intelligence",
            ].map((course) => (
              <div
                key={course}
                className="rounded-xl bg-white/80 px-3 py-2 font-medium shadow-sm ring-1 ring-purple-100"
              >
                {course}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-[#2f1b52] text-white p-6 md:p-8 shadow-xl shadow-purple-300/40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-white/60">Next step</p>
              <h2 className="text-2xl font-semibold">Let’s collaborate</h2>
              <p className="text-white/80 max-w-2xl">
                I'm open to work, internships, research, and build-with-me projects that need clear, innovative, well-written code.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#2f1b52] px-5 py-3 font-semibold shadow-md transition hover:-translate-y-0.5"
              >
                See the work <span aria-hidden>→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#f6c344] text-[#2f1b52] px-5 py-3 font-semibold shadow-md transition hover:-translate-y-0.5"
              >
                Say hello <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
