import { Anime } from '../model/data.anime.js';
import { Novel } from '../model/data.anime.js';
import { Manga } from '../model/data.anime.js';

export const amazenamento_atual = [];
const class_data = function (data) {
    amazenamento_atual.push(data);
};

export function anime_one (name, author, link, description, date, status) {
    const anime = new Anime (name, author, link, description, date, status);
    class_data(anime);
    return anime;
};
export function manga_one (name, author, link, description, date, status, volume, typeNovel) {
    const manga = new Manga (name, author, link, description, date, status, volume, typeNovel);
    class_data(manga);
    return manga;
};
export function novel_one (name, author, link, description, date, status, chapter, tag) {
    const novel = new Novel (name, author, link, description, date, status, chapter, tag);
    class_data(novel);
    return novel;
};