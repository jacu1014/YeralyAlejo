document.addEventListener("DOMContentLoaded", function () {
    // Fecha objetivo (30 de abril de 2026)
    const fechaObjetivo = new Date("2026-05-04T00:00:00").getTime();

    function actualizarCuentaRegresiva() {
        const ahora = new Date().getTime();
        const tiempoRestante = fechaObjetivo - ahora;

        if (tiempoRestante < 0) {
            document.getElementById("contador").innerHTML = "¡El día ha llegado!";
            return;
        }

        // Cálculo de días, horas, minutos y segundos restantes
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // Insertar valores en la página
        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;
    }

    // Actualizar la cuenta regresiva cada segundo
    setInterval(actualizarCuentaRegresiva, 1000);

    // Ejecutar una vez al cargar la página
    actualizarCuentaRegresiva();
});
