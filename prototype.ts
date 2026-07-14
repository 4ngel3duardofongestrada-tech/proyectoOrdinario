export class Gol {
    public autor: string;
    public minuto: number;
    public tecnica: string;
    public dificultad: string;
    public detallesExtra: string[];

    constructor(
        autor: string,
        minuto: number,
        tecnica: string,
        dificultad: string,
        detallesExtra: string[] = []
    ) {
        this.autor = autor;
        this.minuto = minuto;
        this.tecnica = tecnica;
        this.dificultad = dificultad;
        this.detallesExtra = [...detallesExtra];
    }

    

    clone(): Gol {
        return new Gol(
            this.autor,
            this.minuto,
            this.tecnica,
            this.dificultad,
            [...this.detallesExtra]
        );
    }

    displayInfo(): string {
        return `
Anotador: ${this.autor}
Minuto: ${this.minuto}'
Jugada: ${this.tecnica}
Dificultad: ${this.dificultad}
Detalles: ${this.detallesExtra.join(", ") || "Sin detalles adicionales"}
`;
    }
}