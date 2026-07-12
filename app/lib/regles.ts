import rulesData from "@/data/regles-chatbot.json";

export interface Resultat {
  organisme: string;
  description: string;
  telephone: string;
  email: string;
  lien: string;
  documents: string[];
  delai: string;
}

export interface Regle {
  id: string;
  category: string;
  label: string;
  result: Resultat;
}

export interface Categorie {
  id: string;
  label: string;
}

interface ReglesData {
  categories: Categorie[];
  rules: Regle[];
}

const data = rulesData as ReglesData;

export const categories: Categorie[] = data.categories;
export const regles: Regle[] = data.rules;

export function reglesParCategorie(categoryId: string): Regle[] {
  return regles.filter((r) => r.category === categoryId);
}
