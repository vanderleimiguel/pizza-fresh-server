import { Controller, Get, Post } from '@nestjs/common';

// end point localhost:3333/table
@Controller('table')
export class TableController {
  // metodo utilizado no endpoint
  @Get()
  findAll() {
    return 'Buscar todas as mesas';
  }

  // metodo utilizado no endpoint
  @Post()
  create() {
    return 'Criar uma mesa';
  }
}
