export class Produto{
   public idProduto: number;
   public nomeProduto:string;
   public precoProduto:number;
    constructor(idProduto:number, nomeProduto:string,precoProduto:number){
        this.idProduto = idProduto;
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
    }
}