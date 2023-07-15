AOS.init();

const dataEvent = new Date("Dec 12, 2023 19:00:00");
const timesTempEvento = dataEvent.getTime();

const contaHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timesTempEvento - timeStampAtual;

    const diaEmMs = 1000 *  60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const MinEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaEvento % horaEmMs) / MinEmMs);
    segundosAteEvento = Math.floor((distanciaEvento % MinEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento encerrado';
    }
}, 1000);