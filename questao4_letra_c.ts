enum isDiaUtil {segunda, terca, quarta, quinta, sexta} // Encontrar um valor booleano
namespace (dias_Util !== Dias_Sema) // Questão para achar de número de dias úteis

var DiasSemana ;
( funcao ( DiasSemana ) {
    DiasSemana [ DiasSemana [ "segunda-feira" ] = 0 ] = "segunda";
    DiasSemana [ DiasSemana [ "terça-feira"] = 1 ] = "terça-feira";
    DiasSemana [ DiasSemana [ "quarta-feira"] = 2 ] = "quarta-feira";
    DiasSemana [ DiasSemana [ "quinta-feira"] = 3 ] = "quinta-feira";
    DiasSemana [ DiasSemana [ "sexta-feira"] = 4 ] = "sexta-feira";
    DiasSemana [ DiasSemana [ "sabado" = 5 ] = "sabado";
    DiasSemana [ DiasSemana [ "domingo" = 6 ] = "domingo";
} ) (DiasSemana || (DiasSemana = { } ) );
;

var Dias_Semana;
    ( function ( Dias_Semana ) {
function isDiaUtil (DiasSemanas) {
    if (dia == DiasSemana . domingo || dia == DiasSemana . sabado) {
        return false;
    }else {
        return true;
    }
}
    }

    DiasSemana.isDiaUtil = isDiaUtil;
} ) (Dias_Semana || (Dias_Semana = { } ) );
var dia;
var status_dia;
dia = 5;
status_dia = Dias_Semana . isDiaUtil ( dia );
console.log(status_dia);