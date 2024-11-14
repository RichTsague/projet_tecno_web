"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPresenter = void 0;
const author_presenter_1 = require("../authors/author.presenter");
class BookPresenter {
    constructor(data) {
        Object.assign(this, data);
    }
    static from(data) {
        return new BookPresenter({
            id: data.id,
            title: data.title,
            author: author_presenter_1.AuthorPresenter.from(data.author),
        });
    }
}
exports.BookPresenter = BookPresenter;
//# sourceMappingURL=book.presenter.js.map