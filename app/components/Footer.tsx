import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-porcelain">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-xs text-slate">
            Boussole Sociale Sèvres — un service citoyen indépendant, non
            affilié officiellement à la mairie à ce stade.
          </p>

          <nav aria-label="Liens utiles">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-slate underline-offset-2 hover:text-sevres-blue hover:underline"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <a
                  href="https://www.sevres.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate underline-offset-2 hover:text-sevres-blue hover:underline"
                >
                  Site de la mairie de Sèvres
                </a>
              </li>
              <li>
                <Link
                  href="/comment-ca-marche"
                  className="text-slate underline-offset-2 hover:text-sevres-blue hover:underline"
                >
                  Comment ça marche
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
