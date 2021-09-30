enum DiasSemana {segunda, terca, quarta, quinta, sexta, sabado, domingo};
namespace Dias_Semana{
    export function isDiaUtil(DiasSemana : number) : boolean{
        if(dia == DiasSemana.domingo || dia == DiaSemana.sabado) {
            return false;
        }else{
            return true;
        }
    }
}
let dia : number;