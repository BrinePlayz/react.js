window.onload = function() {
    "use strict";
    const 
      baseURL = 'file:///C:/Users/Intel/Downloads/HTML5-canvas-game---POKEMON-/'
      canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d"),
      w = canvas.offsetWidth,
      h = canvas.offsetHeight,
      objectSizes = 20,
      speed = 100,
      modifier = 100,
      playerImage = new Image(),
      pokeballImage = new Image(), 
      terrain = new Image(),
      house = new Image(),
      pokePick = new Audio(`${baseURL}/sounds/pickup.mp3`),
      music = new Audio(`${baseURL}sounds/main-theme.mp3`)
    let score = localStorage.getItem('pokeballs') || 0;
    terrain.src = `${baseURL}images/pokemon_terrain.jpg`;
    house.src = `${baseURL}images/house.png`;
    music.loop = true;
    music.volume = 0.5;
    music.play().catch(() => {});
    pokePick.volume = 0.8;
    playerImage.src = `${baseURL}images/player.png`;
    pokeballImage.src = `${baseURL}images/pokeball.png`;
    [terrain, house, playerImage, pokeballImage].forEach(img => {
        img.onload = function() {
            img.loaded = true;
            checkIfLoaded()
        }
    })
    const pokeball = { 
      x: Number(localStorage.getItem('pokeball.x')) || 0,
      y: Number(localStorage.getItem('pokeball.y')) || 0,
      spritePosition: localStorage.getItem('spritePosition'), 
      spriteItemDistance: 33,
    };
    pokeball.generatePosition  = () => {
        do {
            pokeball.x = Math.floor(Math.random() * 20) + 1;
            pokeball.y = Math.floor(Math.random() * 16) + 4;
        } while(check_collision(pokeball.x, pokeball.y));
        pokeball.spritePosition = Math.floor(Math.random() * 4) + 0;
        localStorage.setItem('pokeball.x', pokeball.x)
        localStorage.setItem('spritePosition', pokeball.spritePosition)
        localStorage.setItem('pokeball.y', pokeball.y)
    } 
    const player = {
        x: Number(localStorage.getItem('x')) || Math.round((w/2)/objectSizes),
        y: Number(localStorage.getItem('y')) || Math.round((h/2)/objectSizes),
        currentDirection: localStorage.getItem('direction') || "stand",
        direction: {
            "stand" : { x: 0, y: 0 },
            "down-1" : { x: 17, y: 0 },
            "down-2" : { x: 34, y: 0 },
            "up-1" : { x: 125, y: 0 },
            "up-2" : { x: 142, y: 0 },
            "left-1" : { x: 69, y: 0 },
            "left-2" : { x: 87, y: 0 },
            "right-1" : { x: 160, y: 0 },
            "right-2" : { x: 178, y: 0 }
        }
    };
    const update = () => {

      ctx.drawImage(terrain, 0, 0);
      ctx.drawImage(house, 80, 60);
      {
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(w-100, h-70, 100, 70);

        ctx.font = "18px Arial";
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillText("Score",w-93, h-45);

        ctx.font = "14px Arial";
        ctx.fillStyle = "rgba(255, 255, 255, 1)";
        ctx.fillText(score,w-85, h-25);
      }
  
      ctx.drawImage(
        pokeballImage,
        pokeball.spritePosition * pokeball.spriteItemDistance,
        0,
        objectSizes,
        objectSizes,
        pokeball.x * objectSizes,
        pokeball.y * objectSizes,
        objectSizes,
        objectSizes
      );
      document.querySelector('title').innerHTML = `Cordinates: y: ${(player.y * objectSizes) / objectSizes}, x: ${(player.x * objectSizes) / objectSizes}`
      ctx.drawImage(
        playerImage,
        player.direction[player.currentDirection].x,
        player.direction[player.currentDirection].y,
        objectSizes - 2,
        objectSizes,
        player.x * objectSizes,
        player.y * objectSizes,
        objectSizes,
        objectSizes
      );
    }

    function check_collision(x, y) {
        let foundCollision = false;
        if(
          ((x > 3 && x < 9) && y == 6) || 
          ((x > 4 && x < 9) && (y == 5 || y == 4 || y == 3))
          ) foundCollision = true;

        if(
            (x < 1 || x > 20) || (y < 2 || y > 20) ||
            ((y > 0 && y < 4) && (x == 20 || x == 19)) ||
            ((y > 0 && y < 4) && (x == 2 || x == 3)) ||
            ((y > 18) && (x == 2 || x == 3)) || 
            ((x > 17) && (y == 19 || y == 20)) || 
            ((x > 19) && (y == 17 || y == 18))
        ) foundCollision = true

        return foundCollision;
    }

    function checkIfLoaded() {
        if([terrain, house, playerImage, pokeballImage].filter(
            img => !img.loaded
        ).length) return;
        if(!localStorage.getItem('pokeball.x') || !localStorage.getItem('pokeball.y')) pokeball.generatePosition()
        update();
    }

    document.onkeydown = function(e) {
      e = e || window.event;
      const direction = [
        { key: '37', value: 'left' },
        { key: '38', value: 'up' },
        { key: '39', value: 'right' },
        { key: '40', value: 'down' }
      ].find(item => e.keyCode == item.key).value
      if(direction) {
      const hold_player = { x: player.x, y: player.y };
      if(direction === 'down') {
        player.y += speed / modifier;
        player.currentDirection = [
          { key: 'stand', value: 'down-1' },
          { key: 'down-1', value: 'down-2' },
          { key: 'down-2', value: 'down-1' }
      ].find(object => object.key == player.currentDirection)?.value || 'down-1'
      }
      if(direction === 'left') {
        player.x -= speed / modifier;
        player.currentDirection = [
            { key: 'stand', value: 'left-1' },
            { key: 'left-1', value: 'left-2' },
            { key: 'left-2', value: 'left-1' }
        ].find(object => object.key == player.currentDirection)?.value || 'left-1'
      }
      if(direction === 'right') {
        player.x += speed / modifier;
        player.currentDirection = [
          { key: 'stand', value: 'right-1' },
          { key: 'right-1', value: 'right-2' },
          { key: 'right-2', value: 'right-1' }
      ].find(object => object.key == player.currentDirection)?.value || 'right-1'
      }
      if(direction === 'up') {
        player.y -= speed / modifier;
        player.currentDirection = [
          { key: 'stand', value: 'up-1' },
          { key: 'up-1', value: 'up-2' },
          { key: 'up-2', value: 'up-1' }
         ].find(object => object.key == player.currentDirection)?.value || 'up-1'
      }
  
      if (check_collision(player.x, player.y)) {
        player.x = hold_player.x
        player.y = hold_player.y;
      }
      if (player.x == pokeball.x && player.y == pokeball.y) {
        pokePick.pause();
        pokePick.currentTime = 0;
        pokePick.play();
        pokeball.generatePosition();
        localStorage.setItem('pokeballs', score++)
      }
      localStorage.setItem('x', player.x)
      localStorage.setItem('y', player.y)
      localStorage.setItem('direction', player.currentDirection)
      update();
    };
    };
};
    document.querySelector('head').removeChild(document.querySelector('script'))