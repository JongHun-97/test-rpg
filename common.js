function dw(str){ 
    document.write(str);
}
function br(){
    document.write("<br>");
}

function hr(){
    document.write("<hr>");
}

const r = n => Math.floor(Math.random() * (n + 1));
// 0~n까지의 무작위의 정수를 구함

function atk_val(base, stable) {
    // 안정성(stable)이 낮을수록 편차가 커짐
    const varianceRatio = 1 - stable / (stable + 100); // 0 ~ 1 사이
    const maxDeviation = base * 0.1 * varianceRatio;   // ±10% 중 실제 편차

    const deviation = r(Math.floor(maxDeviation * 2)) - Math.floor(maxDeviation); 
    // -maxDeviation ~ +maxDeviation 범위

    return base + deviation;
}

function take_damage(base, defense){
    const alleviate = defense/(defense+100);
    const taked = Math.floor(base*(1-alleviate));
    return taked;
}

let logLines = []; // 로그를 담을 배열
const MAX_LOG = 15;

function addLog(message) {
    logLines.push(message); // 새 로그 추가

    if (logLines.length > MAX_LOG) {
        logLines.shift(); // 가장 오래된 로그 제거
    }

    B_log.innerHTML = logLines.join("<hr>");
}

var evade;

function atk_hit(acc, eva){
    evade = eva -acc;
    return evade;
}