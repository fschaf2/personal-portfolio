const projects = [
  {
    title: "LaCulture Louisiana Culture Website",
    badge: "Full-Stack Web Development, Database Management",
    summary:
      "Allows the user to explore Louisiana through a variety of lenses, including a page of events, a recipes page which allows user submissions, an interactive map with a heatmap, a page to book a tour, and a calendar.",
    tech: "Angular, ASP.NET, SQL",
    github: "https://github.com/LandonW-CSC-LSU/4330_Project_LaCulture",
  },
  {
    title: "BrainScan AI",
    badge: "AI/ML, Full-Stack Web Development",
    summary:
      "An AI model (convolutional neural net) that takes MRI images and classifies them on if certain types of tumors may be present. Includes a Grad-CAM heatmap for explainable AI.",
    tech: "Python, PyTorch, Grad-CAM, React, Next.js, Tailwind CSS",
    github: "https://github.com/christixian/BrainScanAI_4444",
    isPrivate=false,
  },
  {
    title: "LSU Student Datastore",
    badge: "Data Science, Database Management",
    summary:
      "A datastore for LSU students which scrapes data, displays it, allows for analysis, and exports it.",
    tech: "Python, Streamlit, SQLite",
    github: "https://github.com/CSC-3380-Spring-2025/Team-34",
  },
  {
    title: "AI Digit Classifier",
    badge: "AI/ML, NumPy",
    summary:
      "A digit classifier on the MNIST dataset, which employs 5 different AI methods, the highest of which (convolutional neural net) reaches over 99% accuracy. Also includes confusion matrices and a Naive Bayes probability map. Focuses on clean, organized, readable, and well-documented code.",
    tech: "Python, PyTorch, Scikit-learn, Numpy",
    github: "https://github.com/fschaf2/AIProj",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7f2ff] via-[#fdf7ec] to-[#ece3ff] text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Selected work</p>
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-slate-700 max-w-3xl">
            A sample of products I love creating, blending innovation with reliable engineering.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-purple-100 bg-white/80 backdrop-blur p-6 shadow-md transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-50/60 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col gap-3">
                <p className="inline-flex w-fit rounded-full bg-[#2f1b52] text-white px-3 py-1 text-xs font-semibold">
                  {project.badge}
                </p>
                <h2 className="text-xl font-semibold leading-tight group-hover:text-[#4c1d95]">
                  {project.title}
                </h2>
                <p className="text-slate-700">{project.summary}</p>
                <p className="text-sm font-medium text-[#2f1b52]">{project.tech}</p>
                {project.isPrivate ? (
                  <span className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-[#2f1b52]">
                    {project.githubLabel ?? "Repo currently private"}
                  </span>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#2f1b52] hover:text-[#4c1d95]"
                  >
                    {project.githubLabel ?? "View on GitHub"} <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>


        <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-lg shadow-purple-200/50 ring-1 ring-purple-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Next up</p>
            <h3 className="text-2xl font-semibold">Have a project in mind?</h3>
            <p className="text-slate-700">
              I partner with founders and teams to design, ship, and refine digital experiences.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#2f1b52] text-white px-5 py-3 font-medium shadow-md transition hover:-translate-y-0.5"
          >
            Contact Me <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
