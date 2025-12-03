"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/75 border-b border-purple-100/70 shadow-[0_10px_35px_-20px_rgba(64,14,130,0.45)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-r from-transparent via-[#d8c7ff]/60 to-transparent blur-xl" />
      <div className="relative max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-[#2f1b52] shadow-lg shadow-purple-200/70 flex items-center justify-center text-white font-semibold tracking-tight">
            FS
          </div>
          <div>
            <h1 className="text-2xl font-bold leading-tight">Felix Schafer</h1>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-start sm:justify-end gap-2 sm:gap-3 text-sm md:text-base overflow-x-auto whitespace-nowrap">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative overflow-hidden rounded-full px-4 py-2 font-medium tracking-tight transition-all duration-300 ease-out active:scale-[0.97] ${
                  active
                    ? "bg-[#2f1b52] text-white shadow-md shadow-purple-200/70"
                    : "bg-white/70 text-slate-800 ring-1 ring-purple-100/70 hover:-translate-y-[2px] hover:shadow-lg hover:shadow-purple-200/70"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.label}
                  <span
                    className={`h-[3px] w-2 rounded-full transition-all duration-300 ${
                      active ? "bg-white/80 w-4" : "bg-[#c7b5ff] group-hover:w-4"
                    }`}
                  />
                </span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-[#f6c344]/70 via-[#7c3aed]/30 to-[#2f1b52]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-gradient-to-r from-transparent via-[#7c3aed] to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </Link>
            );
          })}
        </nav>
        <div className="pointer-events-none absolute inset-x-0 -bottom-[1px] h-px bg-gradient-to-r from-transparent via-[#7c3aed]/50 to-transparent" />
      </div>
    </header>
  );
}
