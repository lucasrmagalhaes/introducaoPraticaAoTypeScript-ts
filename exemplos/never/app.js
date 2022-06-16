"use strict";
// never - retorno que nunca é finalizado
function jogaErro(erro, codigo) {
    throw {
        error: erro,
        code: codigo
    };
}
jogaErro('Deu erro!', 500);
