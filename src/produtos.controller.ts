import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { log } from 'console';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'essa action retorna todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `essa action retonar os dados do produto com id: ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return `essa action cria um novo produto`;
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto);
    return `essa action altera um produto já existente`;
  }

  @Delete(":id")
  excluir(@Param() params): string {
    return `essa action exclui o produto de id: ${params.id}` 
  }
}
