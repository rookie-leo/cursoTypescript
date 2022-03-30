"use strict";
var Teclas;
(function (Teclas) {
    Teclas["Cima"] = "ArrowUp";
    Teclas["Baixo"] = "ArrowDown";
    Teclas["Esquerda"] = "ArrowLeft";
    Teclas["Direita"] = "ArrowRight";
})(Teclas || (Teclas = {}));
window.addEventListener('keydown', function (e) {
    if (e.key == Teclas.Cima) {
        console.log('Pressionou a tecla seta pra cima');
    }
});
