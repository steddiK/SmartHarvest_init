export interface Diagnostic {
    id: number;
    date: string;
    image_url: string;
    resultat: string;
    conseils?: string;
    plante_id: number;
    user_id: number;
}
