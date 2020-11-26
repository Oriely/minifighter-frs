

function updateGScreen() {
    _app.innerHTML = '';
    _app.innerHTML = `
    <div id="stats">
    <button onclick="startMoving()">aaa</button>
        <div class="stats-item">
            <label>HP</label><label>10 <b>/</b> 33</label>
        </div>
        <div class="stats-item">
            <label>HP</label><label>33</label>
        </div>
        <div class="stats-item">
            <label>Damage</label><label>33</label>
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
    </div>
    <div id="gamescreen" class="${ (playerMoving == true ? 'gamescreen-scrolling' : '')}" style="background-position:${(backgroundPos ? backgroundPos[0].replace('"', '') : backgroundPos = '' )} 0 ;">
        <div id="status">Win</div>
        <div class="combat-area">
            <span class="player">
                
                <span id="sprite" class="sprite ${ (playerMoving == true ? 'playerMoving' : console.log(3) && '')}" ></span>
            </span>
            <span class="enemy">E</span>
        </div>
        <div>
        
        </div>
    </div>
    <div id="">
        <div></div>
        <div></div>

    </div>
    `;

}
