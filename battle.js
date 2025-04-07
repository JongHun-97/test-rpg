var B_log = document.getElementById("battle_log")

function damage(attacker, defender) {
    const pre_damage = atk_val(attacker.attack, attacker.stable);
    const final_damage = take_damage(pre_damage, defender.defense);
    console.log(`받은 데미지 : ${final_damage}`);
    return final_damage;
}

function setHp(player, enemy) {
    var player_MaxHp = player.MaxHp;
    var enemy_MaxHp = enemy.MaxHp;
    var player_CurHp = player.CurHp;
    var enemy_CurHp = enemy.CurHp;
    return { player_MaxHp, enemy_MaxHp, player_CurHp, enemy_CurHp };
}

function battle(atker, defer) {
    const atk_dmg = damage(atker, defer);

    atk_hit(atker.acc, defer.eva);

    if (r(99) + 1 > evade){
    defer.CurHp -= atk_dmg;
    addLog(`<b>${atker.name}</b>가 <b>${defer.name}</b>에게 <b>${atk_dmg}</b>의 피해를 입혔습니다`);
    }
    else {
    addLog(`<b>${defer.name}</b>가 공격을 회피하였습니다`);  
    }
}

// 속도에 따라 10에 도달했을 때 공격권을 보유하게 되고, 공격권이 있다면 공격하는 경우

var player_turn = 0;
var enemy_turn = 0;

function att_phase() {
    while (true) {
        if (player.CurHp <= 0 || enemy.CurHp <= 0) {
            break;
        }

        player_turn += player.agi;
        enemy_turn += enemy.agi;

        if (player_turn >= 10 && enemy_turn >= 10) {
            if (player_turn > enemy_turn) {
                attacker = player;
                defender = enemy;
            }
            else if (player_turn < enemy_turn) {
                attacker = enemy;
                defender = player;
            }
            else {
                var x = r(1);
                if (x === 0) {
                    attacker = player;
                    defender = enemy;
                }
                else {
                    attacker = enemy;
                    defender = player;
                }
            }
            battle(attacker, defender);
            if (defender.CurHp > 0) {
                battle(defender, attacker);
            }
            player_turn -= 10;
            enemy_turn -= 10;
        }
        else if (player_turn >= 10) {
            attacker = player;
            defender = enemy;
            battle(attacker, defender);
            player_turn -= 10;
        }
        else if (enemy_turn >= 10) {
            attacker = enemy;
            defender = player;
            battle(attacker, defender);
            enemy_turn -= 10;
        }
        Card_Data(playerUI, player);
        Card_Data(enemyUI, enemy);

        if (player.CurHp <= 0) {
            addLog(`전투 종료!<br>${enemy.name}의 승리!`);
            break;
        }
        else if (enemy.CurHp <= 0) {
            addLog(`전투 종료!<br>${player.name}의 승리!`);
            break;
        }

    }
}