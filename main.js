import { anime_one } from './src/controller/config.js';
import { novel_one } from './src/controller/config.js';
import { manga_one } from './src/controller/config.js';

import { amazenamento_atual } from './src/controller/config.js';

const pending = document.getElementById('pending');
const ops_register_name = document.getElementById('ops_register_name');
const close_novel = document.getElementById('close_novel');
const close_manga = document.getElementById('close_manga');
let ops = true;



const deletCard = () => {
    const buttonDelete = document.querySelectorAll('.buttonDelet');
    buttonDelete.forEach((card, index) => {
        card.addEventListener('click', () => {
            const li = card.parentNode;
            li.remove();
            amazenamento_atual.splice(index, 1);
            contador_click--;
        });
    });
};

// __________ 50%

const list_cards = document.getElementById('list_cards');
let contador_click = 0;

const all_list_data = (passa = 0) => {
    let all = passa !== 0 ? passa : ". . .";
    list_cards.innerHTML += `<li><h4>${amazenamento_atual[contador_click].name}</h4>
    <img src=${amazenamento_atual[contador_click].link} />
    <span>${amazenamento_atual[contador_click].author}</span>
    ${all}<button class=buttonDelet>Delet Card</button>
    </li>`;
};

const all_data = () => {
    const array_teste = amazenamento_atual[contador_click];
    const all_check_obj = Object.keys(array_teste).every(key => {
        return array_teste[key] !== '';
    });
    if (all_check_obj) return true;
    return false;
};

const add_cards = () => {
    if (amazenamento_atual.length === 0) return;
    if (amazenamento_atual.length <= contador_click) return;

    if (all_data()) {
        if (ops === true) {
            let passa = `<details>
            <p>Description: ${amazenamento_atual[contador_click].description}</p>
            <p>Date: ${amazenamento_atual[contador_click].date}</p>
            <p>Status: ${amazenamento_atual[contador_click].status}</p>
            </details>`;
            all_list_data(passa);
        } else if (ops === false) {
            let passa = `<details>
            <p>Description: ${amazenamento_atual[contador_click].description}</p>
            <p>Date: ${amazenamento_atual[contador_click].date}</p>
            <p>Status: ${amazenamento_atual[contador_click].status}</p>
            <p>Volume: ${amazenamento_atual[contador_click].volume}</p>
            <p>Type Novel: ${amazenamento_atual[contador_click].typeNovel}</p>
            </details>`;
            all_list_data(passa);
        } else {
            let passa = `<details>
            <p>Description: ${amazenamento_atual[contador_click].description}</p>
            <p>Date: ${amazenamento_atual[contador_click].date}</p>
            <p>Status: ${amazenamento_atual[contador_click].status}</p>
            <p>Chapter: ${amazenamento_atual[contador_click].chapter}</p>
            <p>Tags: ${amazenamento_atual[contador_click].tag}</p>
            </details>`;
            all_list_data(passa);
        }
    } else {
        all_list_data();
    };
    contador_click++;
};



const importing_data = (name, author, link_img, description, date, status, volume = 0, typeNovel = "", chapter = "", tag = "") => {
    if (ops === true) {
        anime_one(name, author, link_img, description, date, status);
    } else if (ops === false) {
        novel_one(name, author, link_img, description, date, status, volume, typeNovel);
    } else {
        manga_one(name, author, link_img, description, date, status, chapter, tag);
    };
    add_cards();
};



const pending_data = (a) => {
    // Messagem de dados pendentes (erro)...
    if (!a) {
        pending.innerText = "É necessário preencher o name, author e link para os dados serem salvos! Leia as informações ao lado, se caso não estiver visível recarregue a página!";
    } else {
        pending.innerText = "Salvo!";
    }
};

const check_data_exist = (name) => {
    for (const key in amazenamento_atual) {
        if (amazenamento_atual[key].name === name) {
            return false;
        };
    };
    return true;
};

const check_data = (name, author, link_img) => {
    if (name !== "" && author !== "" && link_img !== "" && check_data_exist(name)) {
        return true;
    };
    return false;
};

const collect_data = () => {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const link_img = document.getElementById('link').value;

    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    const volume = document.getElementById('volume').value;
    const typeNovel = document.getElementById('typeNovel').value;

    const chapter = document.getElementById('chapter').value;
    const tag = document.getElementById('tag').value;

    let check_data_boolean = check_data(name, author, link_img);
    if (check_data_boolean) {
        importing_data(name, author, link_img, description, date, status, volume, typeNovel, chapter, tag);
        document.getElementById('remove_container').style.display = "none";
        pending_data(check_data_boolean);
    } else {
        pending_data(check_data_boolean);
    };
};

document.getElementById('register').addEventListener('click', () => {
    collect_data();
    deletCard();
});



document.getElementById('ops_register').addEventListener('click', () => {
    if (ops === true) {
        tema_js(ops);
        ops = false;
        ops_register_name.innerText = "Novel";
        close_novel.style.display = "block";
    } else if (ops === false) {
        tema_js(ops);
        ops = null;
        ops_register_name.innerText = "Manga";
        close_novel.style.display = "none";
        close_manga.style.display = "block";
    } else {
        tema_js(ops);
        ops = true;
        ops_register_name.innerText = "Anime";
        close_novel.style.display = "none";
        close_manga.style.display = "none";
    };
});

document.addEventListener('DOMContentLoaded', (event) => {
    close_novel.style.display = "none";
    close_manga.style.display = "none";
});

function tema_js(ops) {
    const dataFiltro = [
        'hue-rotate(926deg) saturate(991%) brightness(116%)',
        'hue-rotate(406deg) saturate(890%) brightness(84%)',
        'hue-rotate(893deg) saturate(869%) brightness(54%)',
        'hue-rotate(693deg) saturate(950%) brightness(80%)',
        'hue-rotate(839deg) saturate(186%) brightness(61%)',
        'hue-rotate(73deg) saturate(168%) brightness(103%)',
        'none'
    ];
    let filter_atual = Math.floor(Math.random() * 7) + 1;
    const tema_css_js_body = document.getElementById('tema_css_js_body');
    tema_css_js_body.style.filter = `${dataFiltro[filter_atual]}`;
};