

function updateGScreen() {
    _app.innerHTML = '';
    _app.innerHTML = `
    <div id="stats">
        
        <h4>Stats</h4>
        <div class="stats-item">
            <label>HP</label><label>${ _playerStats.stats.currentHP } <b>/</b> ${ _playerStats.stats.maxHP }</label>
        </div>
        <div class="stats-item">
            <label>Damage</label><label>${ _playerStats.stats.damage} </label>
        </div>
        <div class="stats-item">
            <label>CritChance</label><label>33</label>
        </div>
        <div class="stats-item">
            <label>HP</label><label>33</label>
        </div>
        <div class="stats-item">
            <label>HP</label><label>33</label>
        </div>
        <div class="stats-item">
            <label>HP</label><label>33</label>
        </div>
        <button onclick="startMoving()">aaa</button>
    </div>
    <div id="gamescreen" class="${ (playerMoving == true ? 'gamescreen-scrolling' : '')}" style="background-position:${(backgroundPos ? backgroundPos[0].replace('"', '') : backgroundPos = '' )} 0 ;">
        <div id="status">Win</div>
        <div class="combat-area">
            <span class="player">
                
                <span id="sprite" class="sprite ${ (playerMoving == true ? 'playerMoving' : console.log(3) && '')}" ></span>
            </span>
            <span class="enemy">E</span>
        </div>
        <div></div>
    </div>
    <div id="inventory-container">
        <h4>Inventory</h4>
        <div id="inventory">
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
            <div>?</div>
        </div>
    </div>
    `;

}
