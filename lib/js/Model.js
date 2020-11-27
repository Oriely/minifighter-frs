let _app = document.getElementById('app');
let playerMoving = false;
let backgroundPos;
let gameBg = new Image();
gameBg.src = 'lib//imgs/gamebackground-3.png'
let gamescreen = document.getElementById('gamescreen');
let levelsObj = {
  levels: {
    'level_1': {
      baseHp: '32',
      baseDamage: '1',
      baseCritChance: '1.1',
    },
    'level_2': {
      baseHp: '64',
      baseDamage: '2',
      baseCritChance: '1.110',
    },
    'level_3': {
      baseHp: '128',
      baseDamage: '4',
      baseCritChance: '1.120',
    },
    'level_4': {
      baseHp: '256',
      baseDamage: '8',
      baseCritChance: '1.130',
    },
    'level_5': {
      baseHp: '512',
      baseDamage: '1.140',
      baseCritChance: '1.140',
    },
    'level_6': {
      baseHp: '1024',
      baseDamage: '32',
      baseCritChance: '1.150',
    },
    'level_7': {
      baseHp: '2048',
      baseDamage: '64',
      baseCritChance: '1.160',
    },
    'level_8': {
      baseHp: '4096',
      baseDamage: '128',
      baseCritChance: '1.170',
    },
    'level_9': {
      baseHp: '8192',
      baseDamage: '256',
      baseCritChance: '1.180',
    },
  },
}

  let _playerStats = {
    'stats': {
      currentHP: levelsObj.levels.level_1.baseHp,
      maxHP: levelsObj.levels.level_1.baseHp,
      lvl: '4',
      experience: "",
      damage: levelsObj.levels.level_1.baseDamage,
      critChance: levelsObj.levels.level_1.critChance
    }
  };
