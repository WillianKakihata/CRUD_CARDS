import { PartialType } from '@nestjs/mapped-types';
import { CreateCardsDto } from './createCardsDto.dto';

export class UpdateCardsDto extends PartialType(CreateCardsDto) {}