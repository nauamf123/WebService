
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Double, ManyToOne } from "typeorm";
import { Produto } from "./produto.entidade";



@Entity('cadastroProdutos')
export class CadastroProduto{
    
    @PrimaryGeneratedColumn() 
    codigo: number;
    
    @Column({ name: 'nome', type: 'varchar', length: '80' })
    nome: String;

    @Column({ name: 'dscricao', type: 'varchar', length: '80' })
    descricao: String;

    @Column({ name: 'preço', type: 'decimal', length: '40' })
    preco: Double;

    @Column({ name: 'estoque', type: 'numeric', length: '40' })
    estoque:number;

    @Column({ name: 'datadevalidade', type: 'date', length: '20' })
    datavalidade: Date;

    @Column({ name: 'unidadedemedida', type: 'decimal', length: '20' })
    unidademedida: Double;

    @ManyToOne(type => Produto, produto => produto.cadastroProdutos)
     produto: Produto ;
    produtos: any;
  toResponseObject: any;
}