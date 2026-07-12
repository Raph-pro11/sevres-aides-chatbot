import Link from "next/link";

export default function MentionsLegales() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="font-sans text-sm text-slate underline-offset-2 hover:text-sevres-blue hover:underline"
        >
          ← Retour à l&apos;accueil
        </Link>

        <h1 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-8 space-y-8 font-sans text-sm leading-relaxed text-ink">
          <section>
            <h2 className="font-display text-lg text-sevres-blue">
              Éditeur du site
            </h2>
            <p className="mt-2">
              Ce site est édité à titre personnel et indépendant par{" "}
              <strong>[Raphaël Lainé]</strong>, dans une démarche citoyenne
              d&apos;information sur les aides sociales disponibles à Sèvres.
              <br />
              Contact : <strong>[EMAIL À COMPLÉTER]</strong>
            </p>
            <p className="mt-2 text-slate">
              Ce site n&apos;est, à ce stade, ni un service officiel de la
              mairie de Sèvres ni du CCAS de Sèvres.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-sevres-blue">
              Hébergement
            </h2>
            <p className="mt-2">
              Ce site est hébergé par Netlify, Inc. — 2325 3rd Street, Suite
              296, San Francisco, CA 94107, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-sevres-blue">
              Données personnelles
            </h2>
            <p className="mt-2">
              Ce site ne collecte, n&apos;enregistre ni ne transmet aucune
              donnée personnelle. Le questionnaire fonctionne entièrement
              dans votre navigateur, sans compte utilisateur et sans
              transmission de vos réponses à un serveur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-sevres-blue">
              Cookies
            </h2>
            <p className="mt-2">
              Ce site n&apos;utilise aucun cookie de suivi ou de mesure
              d&apos;audience.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg text-sevres-blue">
              Contenu et informations affichées
            </h2>
            <p className="mt-2">
              Les coordonnées et informations relatives aux organismes
              (CCAS, CAF, MDPH, ADIL, etc.) sont fournies à titre indicatif
              et peuvent évoluer. En cas d&apos;erreur ou de mise à jour
              nécessaire, merci de le signaler à{" "}
              <strong>[raphael.laine.pro1@gmail.com]</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
