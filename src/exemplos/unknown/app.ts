let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

// Diferente do any - não é válido
let stringTest2: string = 'agora vai';
// stringTest2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}