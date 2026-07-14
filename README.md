# Proyecto: Partido de Fútbol con Patrones de Diseño

Nombre: [tu nombre aquí]

## Descripción

Simulación de un partido de fútbol en la que se registran goles y se notifica
a distintos medios (redes sociales del club, periódico y app de aficionados)
cada vez que ocurre una anotación.

## Patrones utilizados

### 1. Observer
La clase `Partido` funciona como sujeto observable: mantiene una lista de
observadores (`PartidoObserver`) y les notifica cada vez que se anota un gol
mediante `anotarGol()`. Se implementaron tres observadores concretos:

- `RedesSocialesClub`: publica el gol como si fuera la cuenta oficial del club.
- `DiarioDeportivo`: narra el gol como una crónica de periódico.
- `AppAficionado`: simula una notificación push (estilo OneFootball).

También se demuestra `unsubscribe()`, quitando al `DiarioDeportivo` a la mitad
del partido (por el chiste del rayo en la cabina de prensa) para probar que
deja de recibir actualizaciones del segundo gol en adelante.

### 2. Prototype
La clase `Gol` implementa `clone()`, permitiendo crear una copia independiente
de un gol base (por ejemplo, una "chilena" o un "tiro libre") sin tener que
volver a escribir toda su información. Cada clon puede modificarse (autor,
minuto, detalles) sin afectar al objeto original, lo cual se comprueba al
final del programa imprimiendo los prototipos originales sin cambios.

## Archivos

- `prototype.ts`: clase `Gol` con el patrón Prototype.
- `observer.ts`: interfaz `PartidoObserver` y los tres observadores concretos.
- `main.ts`: clase `Partido` y la función principal que arma la simulación.

## Cómo ejecutar

```bash
deno run main.ts
```