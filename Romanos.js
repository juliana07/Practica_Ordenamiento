const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();

var millar, centena, decena, unidades;
var Millar,Centena,Decena,Unidades;

var n = parseInt(prompt('Ingrese un numero: '));
n = Romanos(n);


function Romanos(n)
{
    millar = parseInt((n/1000)) % 10;
    centena = parseInt((n/100)) % 10;
    decena = parseInt((n/10)) % 10;
    unidades = parseInt((n/1)) % 10;

    switch(millar)
    {
        case 0: var Millar=(''); break;
        case 1: var Millar=('M'); break;
        case 2: var Millar=('MM'); break;
        case 3: var Millar=('MMM'); break;
    }

    switch(centena)
    {
        case 0: var Centena=(''); break;
        case 1: var Centena=('C'); break;
        case 2: var Centena=('CC'); break;
        case 3: var Centena=('CCC'); break;
        case 4: var Centena=('CD'); break;
        case 5: var Centena=('D'); break;
        case 6: var Centena=('DC'); break;
        case 7: var Centena=('DCC'); break;
        case 8: var Centena=('DCCC'); break;
        case 9: var Centena=('CM'); break;
    }

    switch(decena)
    {
        case 0: var Decena=(''); break;
        case 1: var Decena=('X'); break;
        case 2: var Decena=('XX'); break;
        case 3: var Decena=('XXX'); break;
        case 4: var Decena=('XL'); break;
        case 5: var Decena=('L'); break;
        case 6: var Decena=('LX'); break;
        case 7: var Decena=('LXX'); break;
        case 8: var Decena=('LXXX'); break;
        case 9: var Decena=('XC'); break;
    }
    switch(unidades)
    {
        case 0: var Unidades=(''); break;
        case 1: var Unidades=('I'); break;
        case 2: var Unidades=('II'); break;
        case 3: var Unidades=('III'); break;
        case 4: var Unidades=('IV'); break;
        case 5: var Unidades=('V'); break;
        case 6: var Unidades=('VI'); break;
        case 7: var Unidades=('VII'); break;
        case 8: var Unidades=('VIII'); break;
        case 9: var Unidades=('IX'); break;
    }
    console.log('El numero en romano es: '+Millar+Centena+Decena+Unidades);
}

