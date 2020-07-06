import { Controller, Body, Post, Get, Param, Delete, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ProdutoService } from "./Controller/Produto.service";
import { Produto } from "src/entidades/produto.entidade";








@Controller('produtos')
export class ProdutoController { 


    constructor(private  produtoService : ProdutoService ) { }
    @Get()
    showAllproduto(){
     return this.produtoService.readAll();
    }

    @Post()
    createProduto(@Body() produtoCliente){
     return this.produtoService.create(produtoCliente);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.produtoService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() data) {
        return this.produtoService.update(id, data);
    }
   

    @Delete('id:')
    destroyProduto(@Param('id') id: Produto){
        return this.produtoService.destroy(id);
    }

    @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: Produto) {
    return this.produtoService.register(data);
}

}
