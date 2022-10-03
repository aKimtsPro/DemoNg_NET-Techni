export interface Produit {
    id?: number;
    nom: string;
    marque: string;
    prix: number;
    desc?: string;
    peremption?: Date;
    categorie: 'alimentaire' | 'meuble' | 'electronique';
}