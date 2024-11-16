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
exports.AuthorRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const author_entity_1 = require("../database/entities/author.entity");
let AuthorRepository = class AuthorRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.authorRepository = this.dataSource.getRepository(author_entity_1.AuthorEntity);
    }
    async listAuthors() {
        return this.authorRepository.find();
    }
    async createAuthor(input) {
        const result = await this.authorRepository.save(this.authorRepository.create(input));
        return result;
    }
    async save(author) {
        return this.authorRepository.save(author);
    }
    async findById(authorId) {
        return this.authorRepository.findOne({ where: { id: authorId } });
    }
    async updateAuthor(authorId, input) {
        return this.authorRepository.save(input);
    }
    async deleteAuthor(authorId) {
        await this.authorRepository.delete(authorId);
    }
};
exports.AuthorRepository = AuthorRepository;
exports.AuthorRepository = AuthorRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AuthorRepository);
//# sourceMappingURL=author.repository.js.map