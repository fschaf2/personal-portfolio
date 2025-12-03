export default function HomePage() {
  //Including 2 most recent projects
  const projects = [
    {
      title: "LaCulture Louisiana Culture Website",
      badge: "Full-Stack Web Development, Database Management",
      summary:
        "Explore Louisiana events, recipes with user submissions, interactive maps, tour bookings, and calendars in one cohesive hub, built with local love.",
      tech: "Angular · ASP.NET · SQL",
      github: "https://github.com/LandonW-CSC-LSU/4330_Project_LaCulture",
    },
    {
      title: "AI Digit Classifier",
      badge: "AI/ML, Data Analysis",
      summary:
        "MNIST digit classifier exploring five AI methods, with a CNN surpassing 99% accuracy plus confusion matrices and probability maps.",
      tech: "Python · PyTorch · Scikit-learn · Numpy",
      github: "https://github.com/fschaf2/AIProj",
    }
  ];

  return (
    <main className="min-h-screen text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-16 h-[320px] bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_75%_40%,rgba(246,195,68,0.16),transparent_28%)] blur-3xl opacity-80" />
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-16 relative">

        {/* HERO */}
        <section className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-sm text-slate-800 shadow-sm ring-1 ring-purple-100/70">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#f6c344] via-[#7c3aed] to-[#2f1b52] animate-pulse" />
              LSU senior (co '26) shipping sleek, exciting software.
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Software grounded in{" "}
              <span className="bg-gradient-to-r from-[#4c1d95] via-[#7c3aed] to-[#f6c344] bg-clip-text text-transparent">
                bold innovation
              </span>{" "}
              and clean structure.
            </h2>

            <div className="space-y-3">
              <p className="text-lg text-slate-700 max-w-2xl leading-relaxed">
                I'm Felix, an LSU Computer Science senior. I pair big-picture vision with detail-oriented performance: LaCulture’s statewide map and tours, BrainScan AI’s computer vision,
                 a student datastore with exports, a 99%+ MNIST lab, and much more.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-600">
                <span className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-purple-100">Baton Rouge</span>
                <span className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-purple-100">AI/ML + Full-Stack</span>
                <span className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-purple-100">Computer Vision · Maps · Data</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-3 rounded-full bg-[#2f1b52] text-white px-6 py-3 font-semibold shadow-lg shadow-purple-200/40 transition hover:-translate-y-0.5 hover:bg-[#25163f]"
              >
                View My Work!
                <span aria-hidden>→</span>
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur px-6 py-3 font-medium text-slate-800 ring-1 ring-purple-100 transition hover:-translate-y-0.5"
              >
                Meet Me!
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 text-sm text-slate-700">
              <div className="rounded-xl bg-white/90 p-4 shadow-sm ring-1 ring-purple-100">
                <p className="text-xs text-slate-500">Right now</p>
                <p className="font-semibold">LSU CS senior '26 · Software Engineering concentration</p>
              </div>
            
              <div className="rounded-xl bg-white/90 p-4 shadow-sm ring-1 ring-purple-100">
                <p className="text-xs text-slate-500">Projects</p>
                <p className="font-semibold">LaCulture · BrainScan AI · LSU Datastore · Digit Classifier</p>
              </div>
            
              <div className="rounded-xl bg-white/90 p-4 shadow-sm ring-1 ring-purple-100 sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto">
                <p className="text-xs text-slate-500">Stack</p>
                <p className="font-semibold">Python · PyTorch · Angular · React/Next · SQL</p>
              </div>
            </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-[#c7b5ff]/70 via-[#f5e7c8]/70 to-[#e6d6ff]/70 blur-2xl" />
            <div className="relative rounded-[24px] bg-white/80 backdrop-blur shadow-2xl shadow-purple-200/60 ring-1 ring-white/70 overflow-hidden">
              <img
                src="/portrait.jpg"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">Now</p>
                  <p className="text-lg font-semibold">Building new experiences while wrapping up my time at LSU</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="rounded-3xl border border-purple-100/80 bg-white/90 backdrop-blur px-6 py-8 shadow-xl shadow-purple-200/70 ring-1 ring-purple-100">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Selected work
              </p>
              <h3 className="text-2xl font-semibold">Recent Projects</h3>
              <p className="text-slate-700 max-w-2xl">
                Check out what I've been working on most recently!
              </p>
            </div>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#2f1b52] text-white px-4 py-2 text-sm font-semibold shadow-md transition hover:-translate-y-0.5 hover:bg-[#25163f]"
            >
              View all
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="mt-8 grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {projects.map((project) => (
              <article
                key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-purple-100 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#7c3aed0d] opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center justify-between gap-3">
                  <p className="inline-flex rounded-full bg-[#2f1b52] text-white px-3 py-1 text-xs font-semibold shadow-sm">
                    {project.badge}
                  </p>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#4c1d95]">
                    {project.tech}
                  </span>
                </div>
                <h4 className="mt-4 text-xl font-semibold leading-tight group-hover:text-[#4c1d95]">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2f1b52] hover:text-[#4c1d95]"
                >
                  View on GitHub <span aria-hidden>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="grid gap-6 md:grid-cols-[0.65fr_1.35fr] items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Capabilities</p>
            <h3 className="text-2xl font-semibold">Where I Thrive</h3>
            <p className="text-slate-700">
              From MRI scans to student datasets, I turn raw data into interfaces and insights, shipping the model, the API, and the UI.
            </p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-slate-600">
              <span className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-purple-100">AI/ML</span>
              <span className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-purple-100">Full-stack</span>
              <span className="rounded-full bg-white/80 px-3 py-1 ring-1 ring-purple-100">Explainability</span>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Machine learning + explainability",
              "Interactive maps and geospatial UI",
              "Data pipelines and SQLite/SQL",
              "Angular, React, Next.js front-ends",
              "APIs with ASP.NET and Python",
              "Readable, documented codebases",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-purple-100 hover:-translate-y-[2px] hover:shadow-md transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-slate-700">
          <div className="space-y-1">
            <p className="font-semibold">Felix Schafer</p>
            <p className="text-slate-600">
              Building crisp software and useful tools, one thoughtful release at a time.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#2f1b52] text-white px-4 py-2 font-medium shadow-md transition hover:-translate-y-0.5"
            >
              Start a project
            </a>
            <span className="text-slate-500">{new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
