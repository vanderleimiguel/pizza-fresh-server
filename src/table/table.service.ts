import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {
  findAll() {
    return 'Buscar todas as mesas';
  }

  create(createTableDto: CreateTableDto) {
    return 'criar uma mesa: ' + JSON.stringify(createTableDto);
  }
}
