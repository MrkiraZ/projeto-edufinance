export interface Usuario {
  cpf?: string;
	nome?: string;
  email?:string;
  sexo?:string;
	dtNascimento?: Date;
	senha?: string;
	idPerfil?: number;
	nomePerfil?:string;
	idEndereco?: number;
	logradouro?: string;
	numero?: number;
	bairro?: string;
	cidade?: string;
	cep?: string;
	uf?: string;
}
