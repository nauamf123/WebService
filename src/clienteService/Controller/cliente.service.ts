import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { CadastroCliente } from "src/entidades/cadastroCliente.entidade";
import { Repository } from "typeorm/repository/Repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CadastroProduto } from "src/entidades/cadastroProduto.entidade";




@Injectable()
export class ClieteService {

    
    
    constructor(@InjectRepository(CadastroCliente)
    private clienteRepository: Repository<CadastroCliente> ){}

    
    
   async create(data: CadastroCliente){
      this.clienteRepository.create(data);
      return this.clienteRepository.save(data);
    }
   
    async read(id : number){
        return await this.clienteRepository.findOne({where:{id}});
 
    }
    async update(id: number, data: CadastroProduto){
        this.clienteRepository.update(id ,data);
        return await this.clienteRepository.findOne(id);
    }
    async readAll() {
     return this.clienteRepository.find();
 }
    async destroy(cliente: CadastroCliente){
        await this.clienteRepository.delete(cliente);
         return {deleted: true};
    }
    async register(data: CadastroCliente) {
        const { nome } = data;
        let user = await this.clienteRepository.findOne({ where: { nome } });
        if (user) {
          throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }
        user = this.clienteRepository.create(data);
        await this.clienteRepository.save(user);
        return user.toResponseObject();
      }
    
 }
