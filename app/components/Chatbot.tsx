"use client";

import { useState } from "react";
import { categories, reglesParCategorie, type Regle } from "@/app/lib/regles";

type Etape = "categorie" | "besoin" | "resultat";

export default function Chatbot() {
  const [etape, setEtape] = useState<Etape>("categorie");
  const [categorieId, setCategorieId] = useState<string | null>(null);
  const [regle, setRegle] = useState<Regle | null>(null);

  function choisirCategorie(id: string) {
    setCategorieId(id);
    setEtape("besoin");
  }

  function choisirBesoin(r: Regle) {
    setRegle(r);
    setEtape("resultat");
  }

  function recommencer() {
    setCategorieId(null);
    setRegle(null);
    setEtape("categorie");
  }

  function retourCategories() {
    setCategorieId(null);
    setEtape("categorie");
  }

  const besoinsDeLaCategorie = categorieId
    ? reglesParCategorie(categorieId)
    : [];
  const categorieActuelle = categories.find((c) => c.id === categorieId);

  return (
    <div className="mx-auto max-w-xl rounded-sm border border-line bg-porcelain p-6 sm:p-8">
      {/* Fil d'étapes */}
      <ol className="mb-6 flex items-center gap-2 font-sans text-xs text-slate">
        <li
          className={etape === "categorie" ? "font-semibold text-sevres-blue" : ""}
        >
          1. Situation
        </li>
        <li aria-hidden="true">—</li>
        <li
          className={etape === "besoin" ? "font-semibold text-sevres-blue" : ""}
        >
          2. Besoin précis
        </li>
        <li aria-hidden="true">—</li>
        <li
          className={etape === "resultat" ? "font-semibold text-sevres-blue" : ""}
        >
          3. Orientation
        </li>
      </ol>

      {/* ÉTAPE 1 : choix de la catégorie */}
      {etape === "categorie" && (
        <div>
          <h3 className="font-display text-xl text-ink">
            Quel type d&apos;aide recherchez-vous ?
          </h3>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => choisirCategorie(cat.id)}
                className="rounded-sm border border-line bg-porcelain px-4 py-3 text-left font-sans text-sm text-ink transition-colors hover:border-sevres-blue hover:bg-porcelain-tint"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ÉTAPE 2 : choix du besoin précis */}
      {etape === "besoin" && categorieActuelle && (
        <div>
          <button
            onClick={retourCategories}
            className="mb-4 font-sans text-xs text-slate underline-offset-2 hover:underline"
          >
            ← Changer de catégorie
          </button>
          <h3 className="font-display text-xl text-ink">
            {categorieActuelle.label}
          </h3>
          <p className="mt-1 font-sans text-sm text-slate">
            Précisez votre situation :
          </p>
          <div className="mt-5 flex flex-col gap-2">
            {besoinsDeLaCategorie.map((r) => (
              <button
                key={r.id}
                onClick={() => choisirBesoin(r)}
                className="rounded-sm border border-line bg-porcelain px-4 py-3 text-left font-sans text-sm text-ink transition-colors hover:border-sevres-blue hover:bg-porcelain-tint"
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ÉTAPE 3 : fiche résultat */}
      {etape === "resultat" && regle && (
        <div>
          <p className="font-sans text-xs uppercase tracking-wide text-gold">
            Vous êtes orienté(e) vers
          </p>
          <h3 className="mt-1 font-display text-2xl text-sevres-blue">
            {regle.result.organisme}
          </h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-ink">
            {regle.result.description}
          </p>

          <dl className="mt-6 space-y-4 border-t border-line pt-6">
            <div>
              <dt className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">
                Contact
              </dt>
              <dd className="mt-1 font-sans text-sm text-ink">
                {regle.result.telephone}
              </dd>
            </div>

            <div>
              <dt className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">
                Documents à préparer
              </dt>
              <dd className="mt-1">
                <ul className="space-y-1">
                  {regle.result.documents.map((doc) => (
                    <li
                      key={doc}
                      className="font-sans text-sm text-ink"
                    >
                      <span className="mr-2 text-gold">·</span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div>
              <dt className="font-sans text-xs font-semibold uppercase tracking-wide text-slate">
                Délai indicatif
              </dt>
              <dd className="mt-1 font-sans text-sm text-ink">
                {regle.result.delai}
              </dd>
            </div>
          </dl>

          {regle.result.lien && regle.result.lien !== "A_COMPLETER" && (
            <a
              href={regle.result.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-sevres-blue px-5 py-2.5 font-sans text-sm font-medium text-porcelain transition-colors hover:bg-sevres-blue-deep"
            >
              Voir la page officielle
            </a>
          )}

          <div className="mt-6 border-t border-line pt-4">
            <button
              onClick={recommencer}
              className="font-sans text-sm text-slate underline-offset-2 hover:text-sevres-blue hover:underline"
            >
              ← Recommencer le questionnaire
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
