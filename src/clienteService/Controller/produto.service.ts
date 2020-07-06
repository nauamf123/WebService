import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { CadastroCliente } from "src/entidades/cadastroCliente.entidade";
import { Repository } from "typeorm/repository/Repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CadastroProduto } from "src/entidades/cadastroProduto.entidade";
import { Produto } from "src/entidades/produto.entidade";




@Injectable()
export class ProdutoService {

    
    
    constructor(@InjectRepository(Produto)
    private produtoRepository: Repository<Produto> ){}

    
    
   async create(data: Produto){
      this.produtoRepository.create(data);
      return this.produtoRepository.save(data);
    }
   
    async read(id : number){
        return await this.produtoRepository.findOne({where:{id}});
 
    }
    async update(id: number, data: Produto){
        this.produtoRepository.update(id ,data);
        return await this.produtoRepository.findOne(id);
    }
    async readAll() {
     return this.produtoRepository.find();
 }
    async destroy(cliente: Produto){
        await this.produtoRepository.delete(cliente);
         return {deleted: true};
    }
    async register(data: Produto) {
        const { nome } = data;
        let user = await this.produtoRepository.findOne({ where: { nome } });
        if (user) {
          throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }
        user = this.produtoRepository.create(data);
        await this.produtoRepository.save(user);
        return user.toResponseObject();
      }
    
 }
