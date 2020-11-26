let _app = document.getElementById('app');
let playerMoving = false;
let backgroundPos;
let gameBg = new Image();
gameBg.src = 'lib//imgs/gamebackground-3.png'
let gamescreen = document.getElementById('gamescreen');

let levelsJSON = {
    "levels": {
      "1": {
        "baseHp": "32",
        "baseDamage": "1",
        "baseCritChance": "1.1"
      },
      "2": {
        "baseHp": "64",
        "baseDamage": "2",
        "baseCritChance": "1.110"
      },
      "3": {
        "baseHp": "128",
        "baseDamage": "4",
        "baseCritChance": "1.120"
      },
      "4": {
        "baseHp": "256",
        "baseDamage": "8",
        "baseCritChance": "1.130"
      },
      "6": {
        "baseHp": "512",
        "baseDamage": "1.140",
        "baseCritChance": "1.140"
      },
      "7": {
        "baseHp": "1024",
        "baseDamage": "32",
        "baseCritChance": "1.150"
      },
      "8": {
        "baseHp": "2048",
        "baseDamage": "64",
        "baseCritChance": "1.160"
      },
      "9": {
        "baseHp": "4096",
        "baseDamage": "128",
        "baseCritChance": "1.170"
      },
      "10": {
        "baseHp": "8192",
        "baseDamage": "256",
        "baseCritChance": "1.180"
      }
    }
  };