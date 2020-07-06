import { Module } from '@nestjs/common';
import { CadastroCliente } from './entidades/cadastroCliente.entidade';
import { CadastroProduto } from './entidades/cadastroProduto.entidade';
import { Produto } from './entidades/produto.entidade';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from './clienteService/Produto.controller';
import { ClieteService } from './clienteService/Controller/Cliente.service';
import { ProdutoService } from './clienteService/Controller/Produto.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 50558,
      username: 'nauamf12',
      password: 'jabulani',
      database: 'nest-produto',
      entities: [
        CadastroCliente,
        CadastroProduto,
        Produto
      ],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      CadastroCliente,
      CadastroProduto,
      Produto
    ])
  ],
  controllers: [ProdutoController,ClieteService],
  providers: [ProdutoService,ClieteService],
  
})
export class AppModule {}