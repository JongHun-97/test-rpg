const playerUI = {
    name: document.getElementById("player_Name"),
    HP: document.getElementById("player_HP"),
    atk: document.getElementById("player_Atk"),
    def: document.getElementById("player_Def"),
    acc: document.getElementById("player_Acc"),
    eva: document.getElementById("player_Eva"),
    agi: document.getElementById("player_Agi"),
};

const enemyUI = {
    name: document.getElementById("enemy_Name"),
    HP: document.getElementById("enemy_HP"),
    atk: document.getElementById("enemy_Atk"),
    def: document.getElementById("enemy_Def"),
    acc: document.getElementById("enemy_Acc"),
    eva: document.getElementById("enemy_Eva"),
    agi: document.getElementById("enemy_Agi"),
};

function Unit(name, CurHp, MaxHp, atk, atk_sta, def, acc, eva, crt, agi) {
    this.name = name;
    this.CurHp = CurHp;
    this.MaxHp = MaxHp;
    this.attack = atk;
    this.stable = atk_sta;
    this.defense = def;
    this.acc = acc;
    this.eva = eva;
    this.crt = crt;
    this.agi = agi;
}

function Monster(name, CurHp, MaxHp, atk, atk_sta, def, acc, eva, crt, agi) {
    Unit.call(this, name, CurHp, MaxHp, atk, atk_sta, def, acc, eva, crt, agi);
}

function Character(name, CurHp, MaxHp, atk, atk_sta, def, acc, eva, crt, agi) {
    Unit.call(this, name, CurHp, MaxHp, atk, atk_sta, def, acc, eva, crt, agi);
}


var enemy = new Monster("오크", 180, 180, 15, 0, 30, 0, 3, 5, 5);
// 적 선택 프로세스를 따로 정해야함
var player = new Character("엘프", 100, 100, 30, 10, 10, 0, 3, 5, 7);
// 아군 선택 프로세스를 따로 정해야함함

function AttackRange(atk) {
    const min = Math.floor(atk * 0.9);
    const max = Math.floor(atk * 1.1);
    return { min, max };
}

function Card_Data(ui, unit) {
    const range = AttackRange(unit.attack);
    ui.name.innerText = `${unit.name}`;
    ui.HP.innerText = `HP: ${unit.CurHp} / ${unit.MaxHp}`;
    ui.atk.innerText = `공격력: ${range.min} ~ ${range.max}`;
    ui.def.innerText = `방어력: ${unit.defense}`;
    ui.acc.innerText = `명중: ${unit.acc}`;
    ui.eva.innerText = `회피: ${unit.eva}`;
    ui.agi.innerText = `속도: ${unit.agi}`;
}

Card_Data(playerUI, player);
Card_Data(enemyUI, enemy);