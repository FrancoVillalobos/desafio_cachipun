/* Desafío - Cachipún contra la máquina */
/*  piedra  1
    papel   2     
    tijeras 3    
     */

    var juegos = prompt("¿Cuántas veces quieres jugar contra la computadora? ");

    function partida(humano, cpu) {
    if (humano === cpu) {
        return alert(`¡Es un Empate!`);
    }    
    if (humano === 3 && cpu === 2) {
        return alert("Felicitaciones: ¡Ganaste!. Tiraste tijeras y la máquina papel");
    }
    if (humano === 2 && cpu === 1) {
        return alert("Felicitaciones: ¡Ganaste!. Tiraste papel y la máquina piedra");
    }
    if (humano === 1 && cpu === 3) {
        return alert("Felicitaciones: ¡Ganaste!. Tiraste piedra y la máquina tijeras");
    }
    if (humano === 2 && cpu === 3) {
        return alert("Lo lamento: Perdiste =( Tiraste pepel y la máquina tijeras");
    }
    if (humano === 1 && cpu === 2) {
        return alert("Lo lamento: Perdiste =(  Tiraste piedra y la máquina papel");
    }
    if (humano === 3 && cpu === 1) {
        return alert("Lo lamento: Perdiste =(  Tiraste tijeras y la máquina piedra");
    }
}

for (i = 1; i <= juegos; i++) {
    let humano = parseInt(prompt("Ingrese el número: piedra (1), papel (2) o tijeras (3)")) ;
    console.log(humano);
    let cpu = Math.floor(Math.random() * 3);

    partida(humano, cpu);
}