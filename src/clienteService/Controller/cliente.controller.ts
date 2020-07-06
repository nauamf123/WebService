import { Controller, Body, Post, Get, Param, Delete, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ClieteService } from "src/clienteService/Controller/Cliente.service";
import { CadastroCliente } from "../../entidades/cadastroCliente.entidade";








@Controller('cliente')
export class ClienteController { 


    constructor(private  clienteService: ClieteService ) { }
    @Get()
    showAllproduto(){
     return this.clienteService.readAll();
    }

    @Post()
    createProduto(@Body() CadastroCliente){
     return this.clienteService.create(CadastroCliente);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.clienteService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() data) {
        return this.clienteService.update(id, data);
    }
   

    @Delete('id:')
    destroyProduto(@Param('id') id: CadastroCliente){
        return this.clienteService.destroy(id);
    }

    @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: CadastroCliente) {
    return this.clienteService.register(data);
}

}
