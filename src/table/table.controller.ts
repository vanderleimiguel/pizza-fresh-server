import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
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
  // create ira ter um body que ira receber um createtabledto com o tipo CreateTableDto vindo do arquivo
  create(@Body() createTableDto: CreateTableDto) {
    return this.tableService.create(createTableDto);
  }
}
