import { Gol } from "./prototype.ts";
export interface PartidoObserver {
    update(golInfo: Gol, marcadorActual: string,equipoAnotador: string): void;
}

export class RedesSocialesClub implements PartidoObserver {
    update(golInfo: Gol,marcadorActual: string,equipoAnotador: string): void {
        console.log( `\n @ClubOficial: ¡GOLAZO de ${golInfo.autor}! ` + `${equipoAnotador} al ${golInfo.minuto}'. Marcador: ${marcadorActual} #VamosTigres`
        );
    }
}



export class DiarioDeportivo implements PartidoObserver {
    private nombrePeriodico: string;

    constructor(nombrePeriodico: string) {
        this.nombrePeriodico = nombrePeriodico;
    }



    update(golInfo: Gol,marcadorActual: string,equipoAnotador: string): void {
        console.log(`\nCrónica de ${this.nombrePeriodico}:`);
        console.log(`${equipoAnotador} ha conseguido una nueva anotación.`);
        console.log(golInfo.displayInfo());
        console.log(`Marcador después del gol: ${marcadorActual}`);
    }
}

export class AppAficionado implements PartidoObserver {
    private notificacionesEnviadas: number = 0;
    update(golInfo: Gol, marcadorActual: string, equipoAnotador: string): void {
        this.notificacionesEnviadas++;
        console.log(`\nOneFootball #${this.notificacionesEnviadas}: Gol de ${golInfo.autor} ` +
            `para ${equipoAnotador} al minuto ${golInfo.minuto}. Marcador: ${marcadorActual}.`
        );
    }
}