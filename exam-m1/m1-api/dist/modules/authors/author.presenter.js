"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorPresenter = void 0;
class AuthorPresenter {
    constructor(author) {
        Object.assign(this, author);
    }
    static from(author) {
        return new AuthorPresenter({
            id: author.id,
            firstName: author.firstName,
            lastName: author.lastName,
        });
    }
}
exports.AuthorPresenter = AuthorPresenter;
//# sourceMappingURL=author.presenter.js.map