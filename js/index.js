/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description Desafio Complementario - Clase 3
 * 
 * History
 *  1.0.0 - 2022-02-23 : Juan Gaudino : Mostrar en consola si el alumno esta aprobado o no
 */

const proyectosFinales = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

for (let i = 0; i <= 10; i++) {
    if (proyectosFinales[i] === 10) {
        console.log(`El alumno tuvo una nota perfecta`);
        console.log(`La nota es de ${proyectosFinales[i]} puntos`);
    }
    if (proyectosFinales[i] >= 8 && proyectosFinales[i] < 10) {
        console.log(`El alumno tuvo una nota sobresaliente`);
        console.log(`La nota es de ${proyectosFinales[i]} puntos`);
    } 
    if (proyectosFinales[i] >= 6 && proyectosFinales[i] < 8) {
        console.log(`El alumno aprobo`);
        console.log(`La nota es de ${proyectosFinales[i]} puntos`);
    }
    if (proyectosFinales[i] >= 1 && proyectosFinales[i] < 6) {
        console.log(`El alumno reprobo`);
        console.log(`La nota es de ${proyectosFinales[i]} puntos`);
    }
    else {
        if (proyectosFinales[i] == 0) {
            console.log(`El alumno presento un MEME`);
            console.log(`La nota es de ${proyectosFinales[i]} puntos`);
        }
    }
}