import { Controller, Get, Post } from '@nestjs/common';
import { TableService } from './table.service';

// end point localhost:3333/table
@Controller('table')
export class TableController {
  //
  constructor(private tableService: TableService) {}

  // metodo utilizado no endpoint
  @Get()
  findAll() {
    return this.tableService.findAll();
  }

  // metodo utilizado no endpoint
  @Post()
  create() {
    return this.tableService.create();
  }
}
