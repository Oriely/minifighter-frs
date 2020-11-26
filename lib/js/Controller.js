function startMoving()  {
    
    if(playerMoving === true) {
        backgroundPos = window.getComputedStyle(document.getElementById('gamescreen'),null).backgroundPosition.trim().split(/\s+/);
        playerMoving = false;
    }else {
        backgroundPos = window.getComputedStyle(document.getElementById('gamescreen'),null).backgroundPosition.trim().split(/\s+/);
        playerMoving = true;
    }
    updateGScreen();
}