export interface Zone {
    id: number;
    nom: string;
    latitude: number;
    longitude: number;
    type_de_sol?: string;
    climat?: Record<string, any>; // JSONB peut contenir des objets dynamiques
}
