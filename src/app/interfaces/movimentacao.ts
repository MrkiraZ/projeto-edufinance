export interface Movimentacao {
    id?: number;
    data?: Date;
    tipo?: string;
    valor?: number;
    idCarteira?: number;
    nomeCarteira?: string;
    idCategoria?: number;
    descricaoCategoria?: string;
    saldo?: number;
    cpf?: string;
}
