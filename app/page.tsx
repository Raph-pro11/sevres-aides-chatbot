import Chatbot from "@/app/components/Chatbot";

const categories = [
  {
    id: "logement",
    label: "Logement",
    examples: [
      "J'ai des difficultés à payer mon loyer",
      "Je cherche un logement social",
      "Je risque une expulsion",
    ],
  },
  {
    id: "famille",
    label: "Famille & enfance",
    examples: [
      "Aide pour la cantine ou la garde d'enfant",
      "Inscription en crèche",
      "Aide aux devoirs",
    ],
  },
  {
    id: "energie",
    label: "Énergie & factures",
    examples: [
      "Impayés d'électricité ou de chauffage",
      "Droit au chèque énergie",
      "Menace de coupure",
    ],
  },
  {
    id: "alimentation",
    label: "Alimentation & précarité",
    examples: [
      "Aide alimentaire ponctuelle",
      "Période financière difficile",
      "Aide financière d'urgence",
    ],
  },
  {
    id: "handicap",
    label: "Handicap & autonomie",
    examples: [
      "Dossier MDPH",
      "Aide à domicile",
      "Soutien pour un proche dépendant",
    ],
  },
  {
    id: "je_ne_sais_pas",
    label: "Je ne sais pas par où commencer",
    examples: [
      "Je ne sais pas à qui m'adresser",
      "Plusieurs difficultés en même temps",
    ],
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-sevres-blue">
            Service citoyen — Ville de Sèvres
          </p>

          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
            Trouvez la bonne aide,{" "}
            <em className="not-italic text-sevres-blue">sans détour</em>.
          </h1>

          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-slate sm:text-lg">
            Répondez à quelques questions simples et nous vous orientons vers
            le bon interlocuteur, avec les documents à préparer et les
            contacts directs. Aucun compte à créer, aucune donnée conservée —
            juste la bonne information, tout de suite.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#chatbot"
              className="inline-flex items-center gap-2 rounded-sm bg-sevres-blue px-6 py-3 font-sans text-sm font-medium text-porcelain transition-colors hover:bg-sevres-blue-deep"
            >
              Commencer
            </a>
            <span className="font-sans text-sm text-slate">
              2 minutes, pas d&apos;inscription
            </span>
          </div>
        </div>

        {/* Signature : ligne de craquelure, motif de la glaçure en céramique */}
        <svg
          className="block w-full text-line"
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 12 L140 12 L162 4 L188 18 L230 12 L310 12 L336 20 L365 6 L420 12 L560 12 L584 3 L610 17 L660 12 L790 12 L812 19 L840 5 L900 12 L1040 12 L1064 4 L1090 18 L1130 12 L1200 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </section>

      {/* EXEMPLES */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl text-ink sm:text-3xl">
          Quelques situations fréquentes
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-slate">
          Un aperçu de ce que la boussole peut vous aider à démêler. Le
          questionnaire couvre bien d&apos;autres cas — lancez-le pour trouver
          le vôtre.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-porcelain p-6">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-sevres-blue">
                {cat.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {cat.examples.map((ex) => (
                  <li
                    key={ex}
                    className="font-sans text-sm leading-snug text-ink"
                  >
                    <span className="mr-2 text-gold">·</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CHATBOT */}
      <section id="chatbot" className="border-t border-line bg-porcelain-tint">
        <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
          <div className="text-center">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              Trouvons ensemble la bonne orientation
            </h2>
            <p className="mt-3 font-sans text-slate">
              Trois questions suffisent pour vous donner un contact précis.
            </p>
          </div>
          <div className="mt-10">
            <Chatbot />
          </div>
        </div>
      </section>
    </main>
  );
}
