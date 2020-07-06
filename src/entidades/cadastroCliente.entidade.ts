
import { IsInt, IsString, MaxLength, MinLength, IsNumber } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Produto } from "./produto.entidade";


@Entity('cadastroClientes')
export class CadastroCliente {
    

    @IsString({ message: 'Não é uma string válida'})
    @MinLength(10,{message: 'Mínimo 10 caracteres.'})
    @MaxLength(30, {message: 'Máximo 30 caracteres.'})
    @Column({ name: 'nome', type: 'varchar', length: '80' })
    nome: String = 'Carlos João';

    
    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(11 , {message: 'Máximo 11 caracteres.'})
    @Column({ name: 'cpf', type: 'varchar', length: '11' })
    cpf: String = '825.889.050-64';

    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(12 , {message: 'Máximo 12 caracteres.'})
    @Column({ name: 'rg', type: 'varchar', length: '9' })
    rg: String = '33.103.044-5' ;
    
    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(100, {message: 'Máximo 100 caracteres.'})
    @Column({ name: 'endereco', type: 'varchar', length: '80' })
    endereco: String = ' Rua Antônio Barbosa' ;

    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(100, {message: 'Máximo 100 caracteres.'})
    @Column({ name: 'bairro', type: 'varchar', length: '80' })
    bairro: String = 'Zona de Expansão (Robalo)' ;

    @IsString({message: 'String inválida'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(50, {message: 'Máximo 60 caracteres.'})
    @Column({ name: 'cidade', type: 'varchar', length: '80' })
    cidade: String = 'Aracaju';
   
    @IsInt({message: 'Número inválido'})
    @MinLength(1,{message: 'Campo obrigatório.'})
    @MaxLength(50, {message: 'Máximo 60 caracteres.'})
    @Column({ name: 'cep', type: 'numeric', length: '10' })
    cep: number;
    
    @ManyToOne(type => Produto, produto => produto.cadastroProdutos)
    produto: Produto ;
    produtos: any;
    toResponseObject: any;
   
}