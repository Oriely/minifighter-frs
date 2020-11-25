function updateGScreen() {
    _app.innerHTML = '';
    _app.innerHTML = `
    <div id="stats">
        HP:100
        EXP:100
    </div>

    <div id="gamescreen">
        <div></div>
        <div class="combat-area"><span class="player"></span><span class="enemy">E</span></div>
        <div></div>
    </div>
    <div id="">
    <div></div>
    <div></div>

    </div>
    `;

}
