import React, { useState } from "react";
import { Mail, ArrowUpRight, Download } from "lucide-react";

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

const competencies = [
  {
    code: "C1",
    title: "Réaliser un développement d'application",
    description:
      "Développer des applications informatiques simples, en partant des exigences jusqu'à une application complète.",
  },
  {
    code: "C2",
    title: "Optimiser des applications",
    description:
      "Appréhender et construire des algorithmes, et sélectionner les algorithmes adéquats pour répondre à un problème donné.",
  },
  {
    code: "C4",
    title: "Gérer des données de l'information",
    description:
      "Concevoir et mettre en place une base de données à partir d'un cahier des charges, l'optimiser, en assurer la sécurité, et aller jusqu'aux systèmes décisionnels.",
  },
  {
    code: "C5",
    title: "Conduire un projet",
    description:
      "Identifier les besoins métiers des clients et utilisateurs, appliquer une démarche de suivi de projet, et participer à la conception d'un projet système d'information.",
  },
  {
    code: "C6",
    title: "Collaborer au sein d'une équipe informatique",
    description:
      "Identifier ses aptitudes à travailler en équipe, situer son rôle et ses missions, et à terme, manager une équipe informatique.",
  },
];

const projects = [
  {
    name: "BatailleNavale",
    description:
      "Jeu de bataille navale en Java : placement des navires, tours de jeu et détection de victoire, jouable en console.",
    tags: ["Java", "Jeu", "Logique"],
    url: "https://github.com/fpinheiro05/BatailleNavale",
    competencies: ["C1", "C5", "C6"],
    notes: {
      C1: "Réaliser un développement d'application",
      C5: "Conduire un projet",
      C6: "Collaborer au sein d'une équipe informatique",
    },
  },
  {
    name: "Terraria-Like",
    description:
      "Projet de SAE des semestres 2 et 3 : un jeu videp 2D en Java, inspiré de Terraria.",
    tags: ["Java", "SAE S2 / S3", "Jeu"],
    url: "https://github.com/fpinheiro05/Terraria-Like",
    competencies: ["C1", "C2", "C5", "C6"],
    notes: {
      C1: "Réaliser un développement d'application",
      C2: "Optimiser des applications",
      C5: "Conduire un projet",
      C6: "Collaborer au sein d'une équipe informatique",
    },
  },
  {
    name: "SiteWebBuvetteAssociative",
    description:
      "SAE de développement web du semestre 3 : site de gestion pour la buvette d'une association.",
    tags: ["PHP", "SAE S3", "Web"],
    url: "https://github.com/fpinheiro05/SiteWebBuvetteAssociative",
    competencies: ["C1", "C2", "C4", "C5", "C6"],
    notes: {
      C1: "Réaliser un développement d'application",
      C2: "Optimiser des applications",
      C4: "Gérer des données de l'information",
      C5: "Conduire un projet",
      C6: "Collaborer au sein d'une équipe informatique",
    },
  },
];

const education = [
  {
    period: "2024 — 2027",
    title: "BUT Informatique",
    institution: "IUT de Montreuil — Université Paris 8",
  },
  {
    period: "2024",
    title: "Baccalauréat technologique STI2D",
    institution: "Lycée Chaptal, Paris — mention Assez Bien",
  },
];

function useScrollTo() {
  return (id) => (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
}

const tagClass =
  "inline-flex items-center whitespace-nowrap rounded-full border border-line px-2.5 py-1 text-xs text-ink";
const tagAccentClass =
  "inline-flex items-center whitespace-nowrap rounded-full border border-accent px-2.5 py-1 font-mono text-xs font-medium text-accent";

export default function Portfolio() {
  const scrollTo = useScrollTo();
  const [view, setView] = useState("competencies");

  const goToView = (id, nextView) => (e) => {
    e.preventDefault();
    setView(nextView);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-paper font-display leading-relaxed text-ink">
      <div className="mx-auto max-w-[1040px] px-5 sm:px-7">
        <nav className="flex items-center justify-between py-6 sm:py-7">
          <span className="font-mono text-sm font-semibold">FP</span>
          <div className="flex gap-4 text-xs text-muted sm:gap-7 sm:text-sm">
            <a className="hover:text-ink" href="#about" onClick={scrollTo("about")}>
              À propos
            </a>
            <a className="hover:text-ink" href="#formation" onClick={scrollTo("formation")}>
              Formation
            </a>
            <a
              className="hover:text-ink"
              href="#portfolio"
              onClick={goToView("portfolio", "competencies")}
            >
              Compétences
            </a>
            <a
              className="hover:text-ink"
              href="#portfolio"
              onClick={goToView("portfolio", "projects")}
            >
              Projets
            </a>
            <a className="hover:text-ink" href="#contact" onClick={scrollTo("contact")}>
              Contact
            </a>
          </div>
        </nav>
      </div>

      <hr className="border-line" />

      <header className="mx-auto max-w-[1040px] px-5 sm:px-7">
        <div className="motion-reduce:animate-none max-w-full animate-rise py-10 sm:py-14 md:max-w-2xl md:py-16">
          <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-[44px]">
            Florian PINHEIRO
          </h1>
          <p className="mb-5 text-base font-medium text-accent sm:text-lg">
            Étudiant en BUT Informatique — Parcours Administration, gestion et exploitation des données
          </p>
          <p className="mb-7 max-w-xl text-sm text-muted sm:text-base">
            En recherche d'un stage de 12 à 16 semaines, débutant en Mars.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-[3px] border border-ink bg-ink px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-accent hover:bg-accent"
              href="https://github.com/fpinheiro05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={16} /> Voir mon GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-[3px] border border-ink px-4 py-2.5 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
              href="#contact"
              onClick={scrollTo("contact")}
            >
              <Mail size={16} /> Me contacter
            </a>
          </div>
        </div>
      </header>

      <hr className="border-line" />

      <section
        id="about"
        className="mx-auto max-w-[1040px] scroll-mt-6 px-5 py-10 sm:px-7 sm:py-14"
      >
        <h2 className="mb-5 text-xl font-semibold sm:text-2xl">À propos</h2>
        <div className="space-y-4 text-sm sm:text-base">
          <p className="max-w-2xl">
            Je suis étudiant en 3e année de BUT Informatique, parcours « Administration, gestion et
            exploitation des données ». Cette formation prépare en particulier aux métiers
            d'administrateur de bases de données et de gestionnaire de grandes masses de
            données, notament au métier de Data Engineer.
          </p>
          <p className="max-w-2xl">
            Ce portfolio présente mes compétences de BUT au prisme des
            projets et SAE réalisés durant les 3 dernières années, avec une double lecture : par
            compétences, ou par projets.
          </p>
        </div>
      </section>

      <hr className="border-line" />

      <section
        id="formation"
        className="mx-auto max-w-[1040px] scroll-mt-6 px-5 py-10 sm:px-7 sm:py-14"
      >
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-semibold sm:text-2xl">Formation</h2>
        </div>
        <div className="relative flex flex-col gap-10 border-l-2 border-line pl-6 sm:pl-9">
          {education.map((edu) => (
            <div className="relative" key={edu.title}>
              <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-paper sm:-left-[41px]" />
              <span className="font-mono text-sm font-semibold text-accent">
                {edu.period}
              </span>
              <h3 className="mt-1 text-lg font-semibold sm:text-xl">{edu.title}</h3>
              <p className="mt-1 text-sm text-muted">{edu.institution}</p>
              {edu.details && (
                <ul className="mt-3 flex flex-col gap-1.5 text-sm text-muted">
                  {edu.details.map((d) => (
                    <li className="flex gap-2" key={d}>
                      <span className="text-accent">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-line" />

      <section
        id="portfolio"
        className="mx-auto max-w-[1040px] scroll-mt-6 px-5 py-10 sm:px-7 sm:py-14"
      >
        <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Compétences &amp; projets</h2>
        <p className="mb-7 max-w-xl text-sm text-muted">
          Portfolio de troisième année, parcours C — double lecture des compétences
          mobilisées dans mes projets.
        </p>

        <div
          className="mb-7 inline-flex overflow-hidden rounded-[3px] border border-ink text-xs sm:text-sm"
          role="group"
          aria-label="Choisir la lecture du portfolio"
        >
          <button
            type="button"
            aria-pressed={view === "competencies"}
            onClick={() => setView("competencies")}
            className={`px-3 py-2 font-medium sm:px-4 ${
              view === "competencies" ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
          >
            Lecture par compétences
          </button>
          <button
            type="button"
            aria-pressed={view === "projects"}
            onClick={() => setView("projects")}
            className={`border-l border-ink px-3 py-2 font-medium sm:px-4 ${
              view === "projects" ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
          >
            Lecture par projets
          </button>
        </div>

        {view === "competencies" && (
          <div className="flex flex-col gap-px">
            {competencies.map((c) => {
              const evidence = projects.filter((p) => p.competencies.includes(c.code));
              return (
                <div
                  className="mb-px rounded-[4px] border border-line p-5 sm:p-6"
                  key={c.code}
                >
                  <div className="mb-1.5 flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-[13px] font-medium text-accent">
                      {c.code}
                    </span>
                    <span className="text-base font-semibold sm:text-[17px]">
                      {c.title}
                    </span>
                  </div>
                  <p className="mb-4 max-w-2xl text-[13px] text-muted sm:text-sm">
                    {c.description}
                  </p>
                  <div className="flex flex-col gap-3">
                    {evidence.map((p) => (
                      <div className="border-t border-line pt-3" key={p.name}>
                        <a
                          className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-accent"
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p.name} <ArrowUpRight size={14} />
                        </a>
                        <p className="mt-1 text-[13px] italic text-accent-warm">
                          {p.notes[c.code]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {view === "projects" && (
          <div className="flex flex-col gap-px overflow-hidden rounded-[4px] border border-line bg-line">
            {projects.map((p) => (
              <div className="bg-paper p-5 sm:p-6" key={p.name}>
                <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[1fr_auto]">
                  <div>
                    <p className="mb-1.5 flex items-center gap-1.5 font-mono text-base font-semibold">
                      {p.name}
                    </p>
                    <p className="mb-3 max-w-xl text-sm text-muted">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span className={tagClass} key={t}>
                          {t}
                        </span>
                      ))}
                      {p.competencies.map((code) => (
                        <span className={tagAccentClass} key={code}>
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent sm:h-[34px] sm:w-[34px]"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir ${p.name} sur GitHub`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <div className="mt-3.5 flex flex-col gap-1.5 border-t border-line pt-3.5">
                  {p.competencies.map((code) => (
                    <p className="text-[13px] italic text-accent-warm" key={code}>
                      <span className="mr-1.5 font-semibold not-italic text-ink">
                        {code}
                      </span>
                      {p.notes[code]}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <hr className="border-line" />

      <footer
        id="contact"
        className="mx-auto flex max-w-[1040px] scroll-mt-6 flex-col flex-wrap items-start gap-4 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-16"
      >
        <span className="max-w-sm text-[13px] text-muted">
          Contact / Information supplémentaires
        </span>
        <div className="flex flex-wrap gap-5">
          <a
            className="flex items-center gap-1.5 text-sm text-muted hover:text-ink"
            href="/CV_Florian_PINHEIRO.pdf"
            download
          >
            <Download size={16} /> Télécharger mon CV
          </a>
          <a
            className="flex items-center gap-1.5 text-sm text-muted hover:text-ink"
            href="https://github.com/fpinheiro05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            className="flex items-center gap-1.5 text-sm text-muted hover:text-ink"
            href="mailto:fpinheiro.pro@gmail.com"
          >
            <Mail size={16} /> fpinheiro.pro@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}