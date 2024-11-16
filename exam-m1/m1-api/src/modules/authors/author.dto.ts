import { IsOptional, IsString } from 'class-validator';

// DTO pour la création d'un auteur
export class CreateAuthorDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

// DTO pour la mise à jour d'un auteur
export class UpdateAuthorDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}
