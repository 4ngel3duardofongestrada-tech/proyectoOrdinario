import { Gol } from "./prototype.ts";
import { PartidoObserver,RedesSocialesClub,DiarioDeportivo,AppAficionado
} from "./observer.ts";

class Partido {
    private observers: PartidoObserver[] = [];
    private golesLocal: number = 0;
    private golesVisitante: number = 0;
    private equipoLocal: string;
    private equipoVisitante: string;

    constructor(equipoLocal: string, equipoVisitante: string) {
        this.equipoLocal = equipoLocal;
        this.equipoVisitante = equipoVisitante;
    }

    subscribe(observer: PartidoObserver): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: PartidoObserver): void {
        this.observers = this.observers.filter(
            (observador) => observador !== observer
        );
    }

    get marcador(): string {
        return `${this.equipoLocal} ${this.golesLocal} - ` +
               `${this.golesVisitante} ${this.equipoVisitante}`;
    }

    anotarGol(golRegistrado: Gol, esLocal: boolean): void {
        let equipoAnotador: string;

        if (esLocal) {
            this.golesLocal++;
            equipoAnotador = this.equipoLocal;
        } else {
            this.golesVisitante++;
            equipoAnotador = this.equipoVisitante;
        }

        this.observers.forEach((observer) =>
            observer.update(
                golRegistrado,
                this.marcador,
                equipoAnotador
            )
        );
    }
}

function main(): void {
    const partido = new Partido("Tigres", "Barcelona");

    const redesClub = new RedesSocialesClub();
    const periodico = new DiarioDeportivo("El Sol de Puebla");
    const appCelular = new AppAficionado();


    partido.subscribe(redesClub);
    partido.subscribe(periodico);
    partido.subscribe(appCelular);


    const chilena = new Gol(
        "Sin asignar",
        0,
        "Chilena ",
        "Extrema",
        ["Acrobacia", "Destreza", "Premio Puskás"]
    );

    const tiroLibre = new Gol(
        "Sin asignar",
        0,
        "Tiro libre con efecto",
        "Alta",
        ["Balón parado", "Colocación"]
    );


    
    console.log("El árbitro da el silbatazo inicial.");
    console.log("Inicia el partido");

    const primerGol = chilena.clone();
    primerGol.autor = "Gignac";
    primerGol.minuto = 42;
    primerGol.detallesExtra.push("Gol del equipo local");

    partido.anotarGol(primerGol, true);

    console.log("\nEl partido continúa y el barcelona esta pechofriando...\n");

    partido.unsubscribe(periodico);
    console.log("||||||UN RAYO CAYO EN LA CABINA DE PRENSA Y DEJO TIRADO AL PERDIOSTA|||||.\n");

    const segundoGol = tiroLibre.clone();
    segundoGol.autor = "Ángel Correa";
    segundoGol.minuto = 88;
    segundoGol.detallesExtra.push("Gol del equipo local de tiro libre");

    partido.anotarGol(segundoGol, true);


    console.log("\n||||aca se verifica que el clone() no afecto los objetos originales:||||");
    console.log(chilena.displayInfo());
    console.log(tiroLibre.displayInfo());
}

main();