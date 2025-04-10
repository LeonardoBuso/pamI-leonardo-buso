function somar(a:number, b:nume): number;
function somar(a:string, b:string): string;
function somar(a:any, b:any):any {
    return a + b;
}
console.log(somar(5,10));