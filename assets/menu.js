"use strict";

// Legenda allergeni (Reg. UE 1169/2011)
const allergeni = {
    'G': { icon: '🌾', name: 'Glutine' },
    'C': { icon: '🦐', name: 'Crostacei' },
    'U': { icon: '🥚', name: 'Uova' },
    'P': { icon: '🐟', name: 'Pesce' },
    'A': { icon: '🥜', name: 'Arachidi' },
    'S': { icon: '🌱', name: 'Soia' },
    'L': { icon: '🥛', name: 'Latte' },
    'F': { icon: '🌰', name: 'Frutta a guscio' },
    'SE': { icon: '🌿', name: 'Sedano' },
    'SN': { icon: '🟡', name: 'Senape' },
    'SS': { icon: '🪴', name: 'Semi di sesamo' },
    'SO2': { icon: '🧪', name: 'Solfiti' },
    'LU': { icon: '🫘', name: 'Lupini' },
    'M': { icon: '🦑', name: 'Molluschi' }
};

// p = pizza normale, c = calzone, f = formato famiglia (vuoto se non disponibile)
const pizzeData = [
    { name: "Marinara", ing: "Pomodoro, aglio, origano, olio EVO", p: "€ 4,00", c: "€ 4,00", f: "€ 12,00", all: ['G'] },
    { name: "Margherita", ing: "Pomodoro, mozzarella, basilico", p: "€ 5,00", c: "€ 5,00", f: "€ 15,00", all: ['G', 'L'] },
    { name: "Margherita Extra", ing: "Pomodoro, mozzarella di bufala, basilico", p: "€ 7,00", c: "€ 7,00", f: "€ 21,00", all: ['G', 'L'] },
    { name: "Napoli / Napoletana", ing: "Pomodoro, mozzarella, acciughe, origano, capperi", p: "€ 6,00", c: "€ 6,00", f: "€ 18,00", all: ['G', 'L', 'P'] },
    { name: "Diavola", ing: "Pomodoro, mozzarella, salame piccante, olive", p: "€ 6,50", c: "€ 6,50", f: "€ 19,50", all: ['G', 'L'] },
    { name: "Quattro Stagioni", ing: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", p: "€ 7,00", c: "€ 7,00", f: "€ 21,00", all: ['G', 'L'] },
    { name: "Capricciosa", ing: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive, salame piccante", p: "€ 7,50", c: "€ 7,50", f: "€ 22,50", all: ['G', 'L'] },
    { name: "Prosciutto e Funghi", ing: "Pomodoro, mozzarella, prosciutto cotto, funghi", p: "€ 6,50", c: "€ 6,50", f: "€ 19,50", all: ['G', 'L'] },
    { name: "Tonno e Cipolla", ing: "Pomodoro, mozzarella, tonno, cipolla", p: "€ 6,50", c: "€ 6,50", f: "€ 19,50", all: ['G', 'L', 'P'] },
    { name: "Patatosa", ing: "Pomodoro, mozzarella, patate fritte", p: "€ 6,00", c: "€ 6,00", f: "€ 18,00", all: ['G', 'L'] },
    { name: "Würstel e Patatine", ing: "Pomodoro, mozzarella, würstel, patatine fritte", p: "€ 7,00", c: "€ 7,00", f: "€ 21,00", all: ['G', 'L'] },
    { name: "Ortolana", ing: "Pomodoro, mozzarella, verdure grigliate", p: "€ 6,50", c: "€ 6,50", f: "€ 19,50", all: ['G', 'L'] },
    { name: "Porcini", ing: "Pomodoro, mozzarella, funghi porcini", p: "€ 7,00", c: "€ 7,00", f: "€ 24,00", all: ['G', 'L'] },
    { name: "Valtellina", ing: "Pomodoro, mozzarella, bresaola, rucola, grana", p: "€ 8,50", c: "€ 8,00", f: "€ 25,50", all: ['G', 'L'] },
    { name: "Martinese", ing: "Pomodoro, mozzarella, funghi cardoncelli, capocollo, stracciatella", p: "€ 8,50", c: "€ 8,50", f: "€ 25,50", all: ['G', 'L'] },
    { name: "Quattro Formaggi", ing: "Mozzarella, gorgonzola, fontina, parmigiano", p: "€ 7,50", c: "€ 7,50", f: "€ 22,50", all: ['G', 'L'] },
    { name: "Salsiccia e Friarielli", ing: "Mozzarella, salsiccia, friarielli", p: "€ 8,00", c: "€ 8,00", f: "€ 24,00", all: ['G', 'L'] },
    { name: "Murtazza", ing: "Mozzarella, stracciatella, mortadella, crema di pistacchio", p: "€ 8,50", c: "€ 8,50", f: "€ 25,50", all: ['G', 'L', 'F'] },
    { name: "Panna e Crudo", ing: "Panna, mozzarella, prosciutto crudo", p: "€ 7,50", c: "€ 7,50", f: "€ 22,50", all: ['G', 'L'] },
    { name: "Crudaiola", ing: "Pomodorini, mozzarella, prosciutto crudo, rucola, grana (tutto fuori cottura)", p: "€ 7,50", c: "€ 7,50", f: "€ 22,50", all: ['G', 'L'] },
    { name: "Fumè", ing: "Pomodoro, mozzarella, speck, scamorza", p: "€ 7,00", c: "€ 7,00", f: "€ 21,00", all: ['G', 'L'] },
    { name: "Queen's", ing: "Pomodoro, mozzarella, funghi, pancetta, scamorza affumicata", p: "€ 7,50", c: "€ 7,50", f: "€ 22,50", all: ['G', 'L'] }
];

const specialiData = [
    { name: "Rustica Affumicata (Bianca)", ing: "Salsiccia fresca sbriciolata, patate al forno a cubetti, provola affumicata, rosmarino, olio EVO", p: "€ 9,00", all: ['G', 'L'] },
    { name: "Calabrese Cremosa (Rossa)", ing: "Pomodoro, 'nduja, cipolla rossa dolce stufata, stracciatella fresca, basilico", p: "€ 9,50", all: ['G', 'L'] },
    { name: "Carbonara Queen's (Bianca)", ing: "Fiordilatte, guanciale croccante, crema di tuorlo e pecorino aggiunti a fine cottura, pepe nero macinato fresco", p: "€ 10,00", all: ['G', 'L', 'U'] },
    { name: "Gialla Affumicata (Speciale)", ing: "Crema di pomodorini gialli arrosto, mozzarella fiordilatte, pancetta croccante, provola affumicata, basilico, olio EVO", p: "€ 9,50", all: ['G', 'L'] }
];

const tranciData = [
    { name: "Margherita", ing: "Pomodoro, mozzarella", p: "€ 3,00", all: ['G', 'L'] },
    { name: "Margherita + Patate", ing: "Pomodoro, mozzarella, patate", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Diavola", ing: "Pomodoro, mozzarella, salame piccante", p: "€ 3,50", all: ['G', 'L'] },
    { name: "Capricciosa", ing: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Cotto e Funghi", ing: "Pomodoro, mozzarella, prosciutto cotto, funghi", p: "€ 3,50", all: ['G', 'L'] },
    { name: "Ortolana", ing: "Pomodoro, mozzarella, verdure grigliate", p: "€ 3,50", all: ['G', 'L'] },
    { name: "Napoli", ing: "Pomodoro, mozzarella, acciughe, capperi", p: "€ 3,50", all: ['G', 'L', 'P'] },
    { name: "Mortadella e Pistacchio", ing: "Mozzarella, mortadella, crema di pistacchio", p: "€ 4,00", all: ['G', 'L', 'F'] },
    { name: "Tonno e Cipolla", ing: "Pomodoro, mozzarella, tonno, cipolla", p: "€ 3,50", all: ['G', 'L', 'P'] },
    { name: "Quattro Formaggi", ing: "Mozzarella, gorgonzola, fontina, parmigiano", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Valtellina", ing: "Pomodoro, mozzarella, bresaola, rucola, grana", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Speck e Affumicata", ing: "Mozzarella, speck, scamorza affumicata", p: "€ 4,00", all: ['G', 'L'] }
];

const panzerottiData = [
    { name: "Classico", ing: "Pomodoro, mozzarella", p: "€ 2,00", all: ['G', 'L'] },
    { name: "Patatoso", ing: "Pomodoro, mozzarella, patate", p: "€ 3,00", all: ['G', 'L'] },
    { name: "Sfizioso", ing: "Mortadella, provola, scamorza affumicata", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Pugliese", ing: "Cime di rapa, salsiccia, scamorza affumicata, pomodorini", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Quattro Formaggi", ing: "Gorgonzola, svizzero, grana, scamorza affumicata", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Capriccioso", ing: "Olive, prosciutto cotto, carciofi, salame piccante, funghi", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Diavolo", ing: "Salame piccante, olive", p: "€ 3,50", all: ['G', 'L'] },
    { name: "Bufala", ing: "Pomodoro, mozzarella di bufala", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Cipolloso", ing: "Stufato di cipolla", p: "€ 3,00", all: ['G'] },
    { name: "Nutelloso", ing: "Nutella", p: "€ 3,00", all: ['G', 'L', 'F', 'S'] }
];

// p = porzione piccola, g = porzione grande (vuoto se c'è un solo formato)
const frittiData = [
    { name: "Patate", p: "€ 2,50", g: "€ 4,50", all: [] },
    { name: "Panzerottini", p: "€ 3,00", g: "€ 6,00", all: ['G', 'L'] },
    { name: "Mozzarelline", p: "€ 3,00", g: "€ 6,00", all: ['G', 'L', 'U'] },
    { name: "Olive", p: "€ 3,00", g: "€ 6,00", all: ['G', 'U', 'L'] },
    { name: "Polpette di Carne", p: "€ 6,00", all: ['G', 'U', 'L'] },
    { name: "Arancini", p: "€ 3,00", g: "€ 6,00", all: ['G', 'L', 'U'] },
    { name: "Crocchette", p: "€ 3,00", g: "€ 6,00", all: ['G', 'L', 'U'] },
    { name: "Banditos", p: "€ 4,00", all: ['G', 'L'] },
    { name: "Nuggets di Pollo", p: "€ 4,00", all: ['G'] },
    { name: "Cotoletta e Patate", ing: "Servita nel piatto", p: "€ 6,00", all: ['G', 'U'] },
    { name: "Fritto Misto (12 pz)", ing: "Panzerottini, crocchette, polpette, mozzarelline, olive", p: "€ 7,00", all: ['G', 'L', 'U'] }
];

const birreData = [
    { name: "Raffo Grezza", size: "33 cl", p: "€ 3,50", all: ['G'] },
    { name: "Raffo", size: "33 cl", p: "€ 1,50", all: ['G'] },
    { name: "Raffo", size: "66 cl", p: "€ 2,50", all: ['G'] },
    { name: "Dreher", size: "33 cl", p: "€ 1,50", all: ['G'] },
    { name: "Dreher", size: "66 cl", p: "€ 2,50", all: ['G'] },
    { name: "Dreher Limone", size: "33 cl", p: "€ 2,50", all: ['G'] },
    { name: "Heineken", size: "33 cl", p: "€ 2,50", all: ['G'] },
    { name: "Peroni Rossa", size: "33 cl", p: "€ 2,50", all: ['G'] },
    { name: "Nastro Azzurro", size: "33 cl", p: "€ 2,50", all: ['G'] },
    { name: "Tennent's", size: "33 cl", p: "€ 3,50", all: ['G'] }
];

const bibiteData = [
    { name: "Coca-Cola", size: "33 cl", p: "€ 2,00" },
    { name: "Coca-Cola Zero", size: "33 cl", p: "€ 2,00" },
    { name: "Fanta", size: "33 cl", p: "€ 2,00" },
    { name: "Tè alla Pesca", size: "33 cl", p: "€ 2,00" },
    { name: "Tè al Limone", size: "33 cl", p: "€ 2,00" }
];

const acquaData = [
    { name: "Acqua Naturale", size: "50 cl", p: "€ 1,00" },
    { name: "Acqua Frizzante", size: "50 cl", p: "€ 1,00" }
];

// Icone delle categorie (linea oro)
const icons = {
    pizza: '<circle cx="16" cy="16" r="12"/><circle cx="16" cy="16" r="8.5" stroke-dasharray="1.5 3"/><path d="M16 4v24M5.6 10l20.8 12M26.4 10 5.6 22"/>',
    crown: '<path d="M5 23 4 10l7 6 5-9 5 9 7-6-1 13z"/><path d="M6 27h20"/><circle cx="16" cy="18" r="1.5"/>',
    trancio: '<rect x="6" y="5" width="20" height="22" rx="2"/><path d="M6 10h20"/><circle cx="12" cy="16" r="2"/><circle cx="20" cy="21" r="2"/><circle cx="19" cy="14" r="1"/>',
    panzerotto: '<path d="M4 23a12 12 0 0 1 24 0z"/><path d="M8.5 23a7.5 7.5 0 0 1 15 0" stroke-dasharray="1.5 3"/>',
    fries: '<path d="M8 14h16l-2 14H10z"/><path d="M11 14V5M14 14V3M18 14V4M21 14V6"/>',
    drink: '<path d="M13 3h6v5l2 3v16a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V11l2-3z"/><path d="M11 16h10M11 21h10"/>'
};
const iconSVG = name => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

// Categorie del menù, nell'ordine della home
const categorie = [
    { id: 'pizze-classiche', title: 'Pizze Classiche', anim: 'cutter', icon: 'pizza', unit: 'pizze', sections: [{ data: pizzeData, sizes: { p: 'Pizza', c: 'Calzone', f: 'Famiglia' } }], aggiunte: true },
    { id: 'pizze-speciali', title: 'Pizze Speciali', anim: 'crown', icon: 'crown', unit: 'pizze', sections: [{ data: specialiData }] },
    { id: 'fritti', title: 'I Nostri Fritti', anim: 'fries', icon: 'fries', unit: 'fritti', sections: [{ data: frittiData, sizes: { p: 'Piccola', g: 'Grande' } }] },
    { id: 'tranci', title: 'Pizze al Trancio', anim: 'trancio', icon: 'trancio', unit: 'tranci', sections: [{ data: tranciData }] },
    { id: 'panzerotti', title: 'Panzerotti Fritti', anim: 'panzerotto', icon: 'panzerotto', unit: 'panzerotti', sections: [{ data: panzerottiData }] },
    { id: 'bevande', title: 'Bevande', anim: 'cola', icon: 'drink', unit: 'bevande', sections: [
        { title: 'Birre', data: birreData },
        { title: 'Bibite', data: bibiteData },
        { title: 'Acqua', data: acquaData }
    ] }
];

function allergenIcons(arr) {
    if (!arr || arr.length === 0) return '';
    return `<div class="item-allergens">${arr.map(a =>
        `<span class="allergen" title="${allergeni[a].name}" aria-label="${allergeni[a].name}">${allergeni[a].icon}</span>`
    ).join('')}</div>`;
}

// Voce di menù: nome ····· prezzo (una o più colonne), ingredienti, allergeni
// sizes = { chiave prezzo: etichetta colonna }, es. { p: 'Piccola', g: 'Grande' }
function itemHTML(p, i, sizes) {
    const prices = sizes
        ? Object.keys(sizes).map(k => `<span class="item-price price-col">${p[k] || ''}</span>`).join('')
        : `<span class="item-price">${p.p}</span>`;
    return `
        <div class="item${sizes ? ` cols-${Object.keys(sizes).length}` : ''}" style="--i:${i}">
            <div class="item-head">
                <span class="item-name">${p.name}${p.size ? `<span class="item-size">${p.size}</span>` : ''}</span>
                <span class="item-dots"></span>
                ${prices}
            </div>
            ${p.ing ? `<p class="item-ing">${p.ing}</p>` : ''}
            ${allergenIcons(p.all)}
        </div>`;
}

const legendHTML = `
    <details class="legend">
        <summary>Legenda allergeni</summary>
        <div class="legend-grid">
            ${Object.values(allergeni).map(a => `<div class="legend-item"><span class="allergen">${a.icon}</span>${a.name}</div>`).join('')}
        </div>
        <p class="legend-note">Per allergie e intolleranze chiedi al personale.</p>
    </details>`;

const aggiunteHTML = `
    <div class="extras">
        <h3>Aggiunte</h3>
        <div class="extras-row"><span>Verdure e condimenti semplici</span><span>+ € 1,00</span></div>
        <div class="extras-row"><span>Insaccati, mozzarella di bufala e mozzarella senza lattosio</span><span>+ € 1,50</span></div>
    </div>`;

function countOf(cat) {
    return cat.sections.reduce((n, s) => n + s.data.length, 0);
}

function renderMenu() {
    document.getElementById('category-cards').innerHTML = categorie.map(c => `
        <button class="card" data-open="${c.id}">
            <span class="card-icon">${iconSVG(c.icon)}</span>
            <span class="card-title">${c.title}<span class="card-count">${countOf(c)} ${c.unit}</span></span>
        </button>
    `).join('');

    document.getElementById('category-views').innerHTML = categorie.map(c => {
        let i = 0;
        const sections = c.sections.map(s => `
            ${s.title ? `<h3 class="subsection-title">${s.title}</h3>` : ''}
            ${s.sizes ? `<div class="size-head cols-${Object.keys(s.sizes).length}">${Object.values(s.sizes).map(t => `<span>${t}</span>`).join('')}</div>` : ''}
            ${s.data.map(p => itemHTML(p, i++, s.sizes)).join('')}
        `).join('');
        return `
            <section id="${c.id}" class="view">
                <div class="topbar">
                    <button class="back-btn" data-home>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
                        Menù
                    </button>
                    <span class="topbar-title">${c.title}</span>
                </div>
                <div class="page-head">
                    <span class="card-icon">${iconSVG(c.icon)}</span>
                    <div>
                        <h2 class="page-title">${c.title}</h2>
                        <p class="page-count">${countOf(c)} ${c.unit}</p>
                    </div>
                </div>
                ${sections}
                ${c.aggiunte ? aggiunteHTML : ''}
                ${legendHTML}
            </section>`;
    }).join('');
}

renderMenu();

// --- ANIMAZIONI DI APERTURA ---
const animations = {
    cutter: () => `
        <svg class="anim-pizza" viewBox="0 0 200 200" aria-hidden="true">
            <g class="pc-pie">
                <circle cx="100" cy="100" r="82" fill="#f5b12a"/>
                <circle cx="100" cy="100" r="70" fill="#c83a2a"/>
                <g fill="#fff4dc">
                    <ellipse cx="75" cy="70" rx="12" ry="9"/><ellipse cx="128" cy="72" rx="11" ry="8"/>
                    <ellipse cx="70" cy="120" rx="11" ry="8"/><ellipse cx="124" cy="126" rx="13" ry="9"/>
                    <ellipse cx="102" cy="98" rx="9" ry="7"/><ellipse cx="148" cy="102" rx="7" ry="5"/>
                    <ellipse cx="96" cy="148" rx="9" ry="6"/><ellipse cx="52" cy="95" rx="6" ry="4"/>
                </g>
                <g fill="#3c9a3c">
                    <ellipse cx="90" cy="80" rx="5" ry="3"/><ellipse cx="120" cy="100" rx="5" ry="3"/>
                    <ellipse cx="80" cy="138" rx="5" ry="3"/><ellipse cx="140" cy="138" rx="5" ry="3"/>
                </g>
                <g stroke="#1b1b1b" stroke-width="3" stroke-linecap="round">
                    <line class="cut c1" x1="42" y1="42" x2="158" y2="158"/>
                    <line class="cut c2" x1="158" y1="42" x2="42" y2="158"/>
                    <line class="cut c3" x1="18" y1="100" x2="182" y2="100"/>
                    <line class="cut c4" x1="100" y1="18" x2="100" y2="182"/>
                </g>
            </g>
            <!-- Rotella tagliapizza -->
            <g class="pc-cutter">
                <g transform="translate(100 100)">
                    <line x1="0" y1="0" x2="-22" y2="-22" stroke="#bdbdbd" stroke-width="4"/>
                    <line x1="-22" y1="-22" x2="-48" y2="-48" stroke="#5a3a1a" stroke-width="10" stroke-linecap="round"/>
                    <g class="pc-wheel">
                        <circle r="15" fill="#e6e6e6" stroke="#8f8f8f" stroke-width="2"/>
                        <path d="M0 -10V10M-10 0H10" stroke="#8f8f8f" stroke-width="2"/>
                        <circle r="3" fill="#6f6f6f"/>
                    </g>
                </g>
            </g>
        </svg>`,

    crown: () => {
        const sparks = Array.from({ length: 10 }, (_, k) => {
            const a = k * 36 * Math.PI / 180, d = 90 + (k % 2) * 20;
            const fill = k % 2 ? '#ffffff' : '#ffd36b';
            return `<g transform="translate(100 92)"><path class="cr-spark" style="--dx:${(Math.cos(a) * d).toFixed(1)}px; --dy:${(Math.sin(a) * d).toFixed(1)}px" d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="${fill}"/></g>`;
        }).join('');
        return `
        <svg class="anim-crown" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
                <linearGradient id="cr-gold" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#ffd36b"/><stop offset="1" stop-color="#e09a1a"/>
                </linearGradient>
            </defs>
            <circle class="cr-ring" cx="100" cy="110" r="76" fill="none" stroke="#f5b12a" stroke-width="3"/>
            <!-- Pizza bianca gourmet -->
            <g class="cr-pie">
                <circle cx="100" cy="110" r="76" fill="#f5b12a"/>
                <circle cx="100" cy="110" r="65" fill="#f4e6c4"/>
                <g fill="#8a3b22">
                    <rect x="60" y="92" width="12" height="7" rx="2" transform="rotate(-20 66 95)"/>
                    <rect x="126" y="86" width="12" height="7" rx="2" transform="rotate(25 132 89)"/>
                    <rect x="70" y="140" width="12" height="7" rx="2" transform="rotate(15 76 143)"/>
                    <rect x="132" y="134" width="12" height="7" rx="2" transform="rotate(-30 138 137)"/>
                    <rect x="104" y="156" width="10" height="6" rx="2"/>
                </g>
                <g fill="#ffffff">
                    <circle cx="84" cy="74" r="8"/><circle cx="148" cy="112" r="7"/><circle cx="56" cy="122" r="6"/><circle cx="110" cy="146" r="7"/>
                </g>
                <g fill="#3c9a3c">
                    <ellipse cx="118" cy="70" rx="5" ry="3"/><ellipse cx="62" cy="106" rx="5" ry="3"/><ellipse cx="150" cy="140" rx="5" ry="3"/>
                </g>
                <g fill="#2a2a2a">
                    <circle cx="96" cy="88" r="1.3"/><circle cx="140" cy="100" r="1.3"/><circle cx="74" cy="130" r="1.3"/><circle cx="124" cy="152" r="1.3"/><circle cx="90" cy="160" r="1.3"/>
                </g>
            </g>
            <!-- Corona -->
            <g class="cr-crown" style="filter: drop-shadow(0 6px 8px rgba(0,0,0,0.55))">
                <path d="M62 122 L56 80 L80 100 L100 66 L120 100 L144 80 L138 122 Z" fill="url(#cr-gold)" stroke="#b37a0e" stroke-width="2" stroke-linejoin="round"/>
                <rect x="61" y="114" width="78" height="10" rx="3" fill="#d4900f"/>
                <circle cx="56" cy="80" r="4.5" fill="#ffd36b"/><circle cx="100" cy="64" r="5.5" fill="#ffd36b"/><circle cx="144" cy="80" r="4.5" fill="#ffd36b"/>
                <circle cx="100" cy="104" r="5" fill="#c83a2a"/><circle cx="80" cy="108" r="3.5" fill="#ffffff"/><circle cx="120" cy="108" r="3.5" fill="#ffffff"/>
            </g>
            ${sparks}
        </svg>`;
    },

    trancio: () => `
                <svg class="anim-trancio" viewBox="0 0 220 200" aria-hidden="true">
                    <defs>
                        <linearGradient id="tc-steel" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stop-color="#f2f2f2"/><stop offset="1" stop-color="#a6a6a6"/>
                        </linearGradient>
                    </defs>
                    <!-- Teglia -->
                    <polygon points="14.0,147.0 184.0,147.0 214.0,123.0 44.0,123.0" fill="#3a3a3a"/>
                    <rect x="14" y="147" width="170" height="6" fill="#262626"/>
                    <polygon points="184.0,147.0 214.0,123.0 214.0,129.0 184.0,153.0" fill="#1e1e1e"/>
                    <!-- Resto della pizza (con la faccia del taglio, nascosta finché il trancio non si alza) -->
                    <g>
                        <polygon points="124.0,120.0 152.0,98.0 152.0,122.0 124.0,144.0" fill="#e8b860"/><polygon points="124.0,120.0 152.0,98.0 152.0,102.0 124.0,124.0" fill="#b53224"/><polygon points="124.0,139.0 152.0,117.0 152.0,122.0 124.0,144.0" fill="#b97c22"/>
                        <rect x="24" y="120" width="100" height="24" fill="#f2c46d"/><rect x="24" y="120" width="100" height="4" fill="#c83a2a"/><rect x="24" y="139" width="100" height="5" fill="#c98a2a"/><ellipse cx="57.8" cy="128.4" rx="2.5" ry="1.1" fill="#d9a446"/><ellipse cx="77.3" cy="130.3" rx="1.6" ry="1.5" fill="#d9a446"/><ellipse cx="31.4" cy="130.9" rx="1.6" ry="1.1" fill="#d9a446"/><ellipse cx="67.1" cy="134.4" rx="1.7" ry="1.2" fill="#d9a446"/><ellipse cx="85.7" cy="135.5" rx="2.4" ry="1.4" fill="#d9a446"/><ellipse cx="117.8" cy="127.4" rx="2.8" ry="1.3" fill="#d9a446"/><ellipse cx="41.3" cy="128.1" rx="2.0" ry="1.8" fill="#d9a446"/><ellipse cx="44.6" cy="132.2" rx="2.5" ry="1.4" fill="#d9a446"/><ellipse cx="78.4" cy="127.6" rx="1.6" ry="1.2" fill="#d9a446"/><ellipse cx="90.6" cy="130.8" rx="2.0" ry="1.6" fill="#d9a446"/><ellipse cx="69.7" cy="129.7" rx="2.7" ry="1.7" fill="#d9a446"/>
                        <polygon points="24.0,120.0 124.0,120.0 152.0,98.0 52.0,98.0" fill="#c83a2a" stroke="#e0a040" stroke-width="2.5" stroke-linejoin="round"/>
                        <ellipse cx="66.9" cy="107.9" rx="7.6" ry="3.7" fill="#fff4dc"/><ellipse cx="104.0" cy="112.3" rx="8.9" ry="2.9" fill="#fff4dc"/><ellipse cx="85.8" cy="105.0" rx="6.5" ry="3.3" fill="#fff4dc"/><ellipse cx="50.7" cy="106.4" rx="8.3" ry="3.4" fill="#fff4dc"/><ellipse cx="117.4" cy="111.9" rx="8.1" ry="3.4" fill="#fff4dc"/><ellipse cx="94.2" cy="109.7" rx="8.5" ry="3.7" fill="#fff4dc"/><ellipse cx="88.6" cy="106.8" rx="4" ry="2" fill="#3c9a3c"/><ellipse cx="54.0" cy="106.3" rx="4" ry="2" fill="#3c9a3c"/>
                    </g>
                    <!-- Il trancio -->
                    <g class="tc-slice">
                        <polygon points="174.0,120.0 202.0,98.0 202.0,122.0 174.0,144.0" fill="#e2b45e"/><polygon points="174.0,120.0 202.0,98.0 202.0,102.0 174.0,124.0" fill="#b53224"/><polygon points="174.0,139.0 202.0,117.0 202.0,122.0 174.0,144.0" fill="#b97c22"/>
                        <rect x="124" y="120" width="50" height="24" fill="#f2c46d"/><rect x="124" y="120" width="50" height="4" fill="#c83a2a"/><rect x="124" y="139" width="50" height="5" fill="#c98a2a"/><ellipse cx="155.2" cy="135.9" rx="2.7" ry="1.3" fill="#d9a446"/><ellipse cx="144.2" cy="133.0" rx="1.5" ry="1.5" fill="#d9a446"/><ellipse cx="135.1" cy="128.1" rx="1.6" ry="1.8" fill="#d9a446"/><ellipse cx="133.4" cy="129.2" rx="2.1" ry="1.9" fill="#d9a446"/><ellipse cx="131.4" cy="131.0" rx="2.3" ry="1.9" fill="#d9a446"/>
                        <polygon points="124.0,120.0 174.0,120.0 202.0,98.0 152.0,98.0" fill="#c83a2a" stroke="#e0a040" stroke-width="2.5" stroke-linejoin="round"/>
                        <ellipse cx="182.3" cy="103.4" rx="6.8" ry="3.2" fill="#fff4dc"/><ellipse cx="165.2" cy="103.1" rx="8.9" ry="3.0" fill="#fff4dc"/><ellipse cx="145.4" cy="113.1" rx="6.7" ry="3.3" fill="#fff4dc"/><ellipse cx="162.1" cy="112.1" rx="4" ry="2" fill="#3c9a3c"/><ellipse cx="144.3" cy="110.1" rx="4" ry="2" fill="#3c9a3c"/>
                        <rect class="tc-drip" x="132" y="119" width="6" height="22" rx="3.0" fill="#fff4dc" style="animation-delay:0s"/><rect class="tc-drip" x="146" y="119" width="5" height="16" rx="2.5" fill="#fff4dc" style="animation-delay:0.06s"/><rect class="tc-drip" x="158" y="119" width="7" height="26" rx="3.5" fill="#fff4dc" style="animation-delay:0.03s"/><rect class="tc-drip" x="168" y="119" width="4" height="14" rx="2.0" fill="#fff4dc" style="animation-delay:0.09s"/>
                    </g>
                    <!-- Coltello -->
                    <g class="tc-knife">
                        <polygon points="117.0,125.5 159.0,92.5 159.0,62.5 117.0,95.5" fill="url(#tc-steel)" stroke="#8a8a8a" stroke-width="1"/>
                        <polygon points="159.0,86.5 182.8,67.8 182.8,47.8 159.0,66.5" fill="#4a2e17"/>
                        <circle cx="170.9" cy="67.2" r="2" fill="#d9d9d9"/>
                    </g>
                    <!-- Vapore -->
                    <g class="tc-steam" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0">
                        <path d="M160 64 q-7 -9 0 -18 q7 -9 0 -18"/>
                        <path d="M174 58 q-7 -9 0 -18 q7 -9 0 -18"/>
                        <path d="M188 64 q-7 -9 0 -18 q7 -9 0 -18"/>
                    </g>
                </svg>`,

    panzerotto: () => `
            <svg class="anim-panzerotto" viewBox="0 0 240 200" aria-hidden="true">
                <defs>
                    <clipPath id="pz-l"><rect x="0" y="0" width="120" height="200"/></clipPath>
                    <clipPath id="pz-r"><rect x="120" y="0" width="120" height="200"/></clipPath>
                    <g id="pz-body">
                        <!-- Bordo chiuso a pizzico -->
                        <g fill="#e29c2c">
                            <circle cx="204.9" cy="135.6" r="5"/>
                            <circle cx="203.4" cy="123.8" r="5"/>
                            <circle cx="200.4" cy="112.3" r="5"/>
                            <circle cx="195.7" cy="101.4" r="5"/>
                            <circle cx="189.6" cy="91.2" r="5"/>
                            <circle cx="182.2" cy="82.0" r="5"/>
                            <circle cx="173.5" cy="73.9" r="5"/>
                            <circle cx="163.8" cy="67.1" r="5"/>
                            <circle cx="153.2" cy="61.8" r="5"/>
                            <circle cx="142.0" cy="57.9" r="5"/>
                            <circle cx="130.4" cy="55.6" r="5"/>
                            <circle cx="118.5" cy="55.0" r="5"/>
                            <circle cx="106.7" cy="56.0" r="5"/>
                            <circle cx="95.1" cy="58.7" r="5"/>
                            <circle cx="84.1" cy="63.0" r="5"/>
                            <circle cx="73.7" cy="68.7" r="5"/>
                            <circle cx="64.2" cy="75.8" r="5"/>
                            <circle cx="55.8" cy="84.2" r="5"/>
                            <circle cx="48.7" cy="93.7" r="5"/>
                            <circle cx="43.0" cy="104.1" r="5"/>
                            <circle cx="38.7" cy="115.1" r="5"/>
                            <circle cx="36.0" cy="126.7" r="5"/>
                            <circle cx="35.0" cy="138.5" r="5"/>
                        </g>
                        <path d="M36 140 A84 84 0 0 1 204 140 Z" fill="#f2ae3a"/>
                        <!-- Cucitura e bolle della frittura -->
                        <path d="M48 140 A72 72 0 0 1 192 140" fill="none" stroke="#d48a1e" stroke-width="2" stroke-dasharray="2 7" stroke-linecap="round"/>
                        <g fill="#e39a26">
                            <circle cx="80" cy="112" r="4"/><circle cx="104" cy="92" r="3"/><circle cx="150" cy="100" r="5"/>
                            <circle cx="168" cy="126" r="3"/><circle cx="96" cy="128" r="3"/><circle cx="136" cy="76" r="3"/>
                            <circle cx="64" cy="132" r="2.5"/><circle cx="124" cy="118" r="4"/>
                        </g>
                    </g>
                </defs>
                <!-- Ripieno che appare quando si apre -->
                <path d="M90 140 Q88 74 120 66 Q152 74 150 140 Z" fill="#c83a2a"/>
                <g class="pz-strings" stroke="#fff4dc" stroke-width="4" stroke-linecap="round" fill="none">
                    <path d="M90 82 Q120 90 150 82"/>
                    <path d="M86 100 Q120 108 154 100"/>
                    <path d="M88 118 Q120 126 152 118"/>
                    <path d="M96 134 Q120 140 144 134"/>
                </g>
                <!-- Le due metà -->
                <g class="pz-half-l"><use href="#pz-body" clip-path="url(#pz-l)"/></g>
                <g class="pz-half-r"><use href="#pz-body" clip-path="url(#pz-r)"/></g>
                <!-- Vapore -->
                <g class="pz-steam" stroke="#ffffff" stroke-width="3" stroke-linecap="round" fill="none" opacity="0">
                    <path d="M106 48 q-8 -10 0 -20 q8 -10 0 -20"/>
                    <path d="M120 44 q-8 -10 0 -20 q8 -10 0 -20"/>
                    <path d="M134 48 q-8 -10 0 -20 q8 -10 0 -20"/>
                </g>
            </svg>`,

    fries: () => {
        // [x, y della punta, altezza, inclinazione]: le patatine finiscono dentro il sacchetto
        const fries = [
            [62, 82, 64, -10], [74, 70, 76, -5], [86, 78, 68, -2], [98, 64, 82, 3], [110, 74, 72, 6],
            [122, 68, 78, 9], [134, 80, 66, 12], [80, 88, 58, 4], [104, 86, 60, -6], [128, 90, 56, -3]
        ];
        const fry = ([x, y, h, r], k) =>
            `<rect class="fr-fry" x="${x}" y="${y}" width="10" height="${h}" rx="2" fill="${k % 3 ? '#ffd36b' : '#f5c04a'}" stroke="#d48a1e" stroke-width="1.5" style="--r:${r}deg; animation-delay:${(0.15 + k * 0.055).toFixed(2)}s"/>`;
        return `
        <svg class="anim-fries" viewBox="0 0 200 240" aria-hidden="true">
            <g class="fr-bag">
                <!-- Interno del sacchetto -->
                <path d="M50 120 Q100 106 150 120 Z" fill="#7a1f15"/>
                ${fries.map(fry).join('')}
                <!-- Fronte del sacchetto con la corona di Queen's -->
                <path d="M46 118 Q100 128 154 118 L140 222 Q100 230 60 222 Z" fill="#c83a2a"/>
                <path d="M49 140 Q100 150 151 140 L149 152 Q100 162 51 152 Z" fill="#f5b12a"/>
                <path d="M84 202 82 180l9 7 9-12 9 12 9-7-2 22z" fill="#f5b12a"/>
                <path d="M46 118 Q100 128 154 118" fill="none" stroke="#8f2519" stroke-width="3" stroke-linecap="round"/>
            </g>
        </svg>`;
    },

    cola: () => {
        // Spruzzo di schiuma che esce dall'apertura, verso l'alto
        const drops = Array.from({ length: 18 }, (_, k) => {
            const a = (-150 + Math.random() * 120) * Math.PI / 180, d = 50 + Math.random() * 70;
            const fill = k % 3 ? '#ffffff' : '#e8c9a0';
            return `<g transform="translate(106 50)"><circle class="cn-drop" r="${(2 + Math.random() * 3).toFixed(1)}" fill="${fill}" style="--dx:${(Math.cos(a) * d).toFixed(1)}px; --dy:${(Math.sin(a) * d).toFixed(1)}px"/></g>`;
        }).join('');
        return `
        <svg class="anim-cola" viewBox="0 0 200 260" aria-hidden="true">
            <g class="cn-can">
                <!-- Corpo della lattina -->
                <rect x="60" y="58" width="80" height="172" rx="10" fill="#d71920"/>
                <path d="M60 150 Q82 128 100 148 T140 138 L140 158 Q118 174 100 160 T60 170 Z" fill="#ffffff"/>
                <rect x="70" y="72" width="8" height="148" rx="4" fill="#ffffff" opacity="0.18"/>
                <g fill="#ffffff" opacity="0.45">
                    <circle cx="118" cy="92" r="2"/><circle cx="126" cy="110" r="1.5"/><circle cx="90" cy="196" r="2"/><circle cx="122" cy="204" r="1.5"/><circle cx="84" cy="100" r="1.5"/>
                </g>
                <!-- Fondo e coperchio -->
                <rect x="64" y="222" width="72" height="12" rx="5" fill="#b5b5b5"/>
                <rect x="64" y="48" width="72" height="16" rx="6" fill="#c9c9c9"/>
                <ellipse cx="100" cy="51" rx="34" ry="5" fill="#e3e3e3"/>
                <ellipse class="cn-hole" cx="108" cy="51" rx="7" ry="2.5" fill="#2a1208" opacity="0"/>
                <!-- Linguetta -->
                <g class="cn-tab">
                    <rect x="90" y="46" width="24" height="7" rx="3.5" fill="#9e9e9e"/>
                    <ellipse cx="108" cy="49.5" rx="3.5" ry="1.8" fill="#e3e3e3"/>
                </g>
            </g>
            ${drops}
            <text class="cn-psst" x="150" y="40" fill="#f5b12a" font-family="Montserrat, sans-serif" font-size="18" font-weight="800" font-style="italic">psst!</text>
        </svg>`;
    }
};

// --- NAVIGAZIONE ---
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let animating = false;

function showView(id) {
    const target = document.getElementById(id) || document.getElementById('home');
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v === target));
    window.scrollTo(0, 0);
}

function openCategory(id, animType) {
    if (animating || !document.getElementById(id)) return;
    // Ogni categoria ha il suo indirizzo: il tasto "indietro" del telefono torna alla home
    history.pushState({ view: id }, '', '#' + id);

    if (reduceMotion.matches || !animations[animType]) {
        showView(id);
        return;
    }

    animating = true;
    const overlay = document.getElementById('animation-overlay');
    overlay.innerHTML = animations[animType]();
    overlay.classList.remove('closing');
    overlay.style.display = 'flex';

    // Cambia vista a metà animazione, poi dissolvi l'overlay
    setTimeout(() => showView(id), 800);
    setTimeout(() => overlay.classList.add('closing'), 1250);
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.innerHTML = '';
        overlay.classList.remove('closing');
        animating = false;
    }, 1500);
}

function goHome() {
    if (history.state && history.state.view) {
        history.back();
    } else {
        history.replaceState(null, '', location.pathname);
        showView('home');
    }
}

// Click gestiti qui (niente onclick inline, così la CSP può bloccare ogni script inline)
document.addEventListener('click', e => {
    const open = e.target.closest('[data-open]');
    if (open) {
        const cat = categorie.find(c => c.id === open.dataset.open);
        if (cat) openCategory(cat.id, cat.anim);
    } else if (e.target.closest('[data-home]')) {
        goHome();
    }
});

window.addEventListener('popstate', () => showView(location.hash.slice(1) || 'home'));

// Apertura diretta di un link a una categoria (es. index.html#fritti)
if (location.hash) showView(location.hash.slice(1));
