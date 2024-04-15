export class Anime {
    constructor (name, author, link, description, date, status) {
        this.name = name;
        this.author = author;
        this.link = link;
        this.description = description;
        this.date = date;
        this.status = status;
    };
};

export class Manga extends Anime {
    constructor (name, author, link, description, date, status, chapter, tag) {
        super (name, author, link, description, date, status);
        this.chapter = chapter;
        this.tag = tag;
    };
};

export class Novel extends Anime {
    constructor (name, author, link, description, date, status, volume, typeNovel) {
        super (name, author, link, description, date, status);
        this.volume = volume;
        this.typeNovel = typeNovel;
    };
};