"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBooksDto = exports.UpdateBookDto = exports.CreateBooksDto = exports.CreateBookDto = exports.CreateBookAuthorDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateBookAuthorDto {
}
exports.CreateBookAuthorDto = CreateBookAuthorDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookAuthorDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookAuthorDto.prototype, "lastName", void 0);
class CreateBookDto {
}
exports.CreateBookDto = CreateBookDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateBookDto.prototype, "yearPublished", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => CreateBookAuthorDto),
    __metadata("design:type", String)
], CreateBookDto.prototype, "authorId", void 0);
class CreateBooksDto {
}
exports.CreateBooksDto = CreateBooksDto;
class UpdateBookDto {
}
exports.UpdateBookDto = UpdateBookDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateBookDto.prototype, "yearPublished", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => CreateBookAuthorDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", CreateBookAuthorDto)
], UpdateBookDto.prototype, "author", void 0);
class GetBooksDto {
}
exports.GetBooksDto = GetBooksDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetBooksDto.prototype, "name", void 0);
//# sourceMappingURL=book.dto.js.map