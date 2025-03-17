export interface Recommandation {
    id: number;
    titre: string;
    description?: string;
    dosage?: string;
    periode_utilisation?: string;
    zone_id?: number;
    plante_id?: number;
}
