import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Double, ManyToOne } from "typeorm";
import { CadastroCliente } from "./cadastroCliente.entidade";
import { CadastroProduto } from "./cadastroProduto.entidade";



@Entity('produtos')
export class Produto{
   [x: string]: any;

   @PrimaryGeneratedColumn() 
   codigo: number;

   @Column({ name: 'data', type: 'date', length: '20' })
   data: Date;

   @Column({ name: 'dataprevista', type: 'date', length: '20' }) 
   dataprevista: Date;

   @Column({ name: 'transportadora', type: 'varchar', length: '80' })
   transportadora: String;

   @Column({ name: 'valortotal', type: 'decimal', length: '40' })
   valortotal:Double;

   @Column({ name: 'valorproduto', type: 'decimal', length: '40' })
   valorproduto: Double;

   @Column({ name: 'valordesconto', type: 'decimal', length: '40' })
   valordesconto: Double;

   @Column({ name: 'cliente', type: 'varchar', length: '80' })
   cliente: String;
  
   @Column({ name: 'endereçodaentrega', type: 'varchar', length: '80' })
   enderecoentrega: String;

   @ManyToOne(type =>  CadastroProduto, CadastroProduto => CadastroProduto.produtos, { cascade: true, eager: true })
   cadastroproduto: CadastroProduto ;

   @ManyToOne(type =>  CadastroCliente, CadastroCliente => CadastroCliente.produtos, { cascade: true, eager: true })
   cadastroCliente: CadastroCliente ;


}