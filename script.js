"use strict";

(function(){




  var pokemon = [
    ['Arcanine','images/059.png',90,'Fire Blast','Bite','Ember','Take Down','fire'],
    ['Exeggutor','images/103.png',95,'Hypnosis','Stomp','Barrage','Psybeam'],
    ['Alakazam','images/065.png',55,'Psybeam','Psychic', 'Reflect', 'Recover'],
    ['Machamp','images/068.png',90,'Leer','Focus Energy', 'Fissure', 'Submission'],
    ['Lapras','images/131.png',130,'Body Slam','Hydro Pump', 'Blizard', 'Surf'],

  ]
    var lanceTeam = [
    ['Gyarados','images/132.png',95,'Hydro Pump','Dragon Rage','Leer','Hyper Beam'],
    ['Dragonair','images/148.png',61,'Agility','Slam','Dragon Rage','Hyper Beam'],
    ['Dragonair','images/148.png',61,'Agility','Slam','Dragon Rage','Hyper Beam'],
    ['Aerodactyl','images/142.png',60,'Supersonic','Take Down','Bite','Hyper Beam'],
    ['Dragonite','images/149.png',91,'Agility','Slam','Barrier','Hyper Beam'],
  ];

let attack = parseInt([Math.floor(Math.random()*20)+5]);
let random = pokemon[Math.floor(Math.random()*pokemon.length)];
let randomL = lanceTeam[Math.floor(Math.random()*lanceTeam.length)];

//player
let playerHealth = $("#player > p:nth-child(3)")
let player = $("#player > p:nth-child(1)")

//enemy pokemon
let pic = random[1];
let enemyPlace = $("#enemy_img")
let playerPlace = $("#player_img")
let enemyName = $("#enemy > p:nth-child(1)")
let enemyHealth = $("#enemy > p:nth-child(2)")

//controls
let itemPlayer = $('#item_btn')
// let attackPlayer = $("#menu_bar > p:nth-child(6)")
let attackBar = $('#attack_bar')
let hideattack = attackBar.css('display','none');

let menuBar = $("#menubg")
let attack1= $("#menu_bar > p:nth-child(6)")
let attack2= $("#menu_bar > p:nth-child(7)")
let attack3= $("#menu_bar > p:nth-child(8)")
let attack4= $("#menu_bar > p:nth-child(9)")
let attackPlayer = (attack1 & attack2 & attack3);



let oppPokemon = function(){

  $("#enemy_img").attr("src",lanceTeam[0][1]);
  $("#status_text").text(" You sent out " + pokemon[0][0]);
    player.text(lanceTeam[0][0]);

      playerHealth.text(lanceTeam[0][2]);
       attack1.text(lanceTeam[0][3]);
       attack2.text(lanceTeam[0][4]);
       attack3.text(lanceTeam[0][5]);
       attack4.text(lanceTeam[0][6]);
        $('#enemy_img').animate({
                height: "+=180px",
                }, 110 );
          $('#enemy_img').animate({
                width: "+=180px",
                }, 110 );

}
oppPokemon();
let playerPokemon = function(){
 $("#player_img").hide();
  $("#player_img").attr("src",pokemon[0][1]);
  $("#status_text").text(" You sent out " + pokemon[0][0]);
    player.text(pokemon[0][0]);

    $("#player_img").show();
      playerHealth.text(pokemon[0][2]);
       attack1.text(pokemon[0][3]);
       attack2.text(pokemon[0][4]);
       attack3.text(pokemon[0][5]);
       attack4.text(pokemon[0][6]);
        $('#player_img').animate({
                height: "+=180px",
                }, 210 );
          $('#player_img').animate({
                width: "+=180px",
                }, 210 );

}
playerPokemon();






let i = 0;
                attack1.on('click', function(){
                $("#menu_bar").hide();
                let youAttack = function(){
                function explode(){

                $("#menu_bar").css('display', 'show');
                enemyHealth.empty().append(lanceTeam[0][2])
                lanceTeam[0][2] = (lanceTeam[0][2] - attack);
                $('#enemy_img').animate({
                marginTop: "-=30px",
                }, 500 );
                $('#enemy_img').animate({
                marginTop: "+=30px",
                }, 100 );



              $("#menu_bar").show();
                  if(lanceTeam[0][2] < 0){

                  $("#enemy_img").attr("src",lanceTeam[1][1]);
                  enemyName.text(lanceTeam[1][0]);
                  enemyHealth.text(lanceTeam[1][2]);
                  $("#status_text").text(lanceTeam[1][0] + " used " + lanceTeam[1][3]);
                  lanceTeam[1][2] = lanceTeam[1][2] - attack;
                  $('#enemy_img').animate({
                  marginTop: "-=0px",
                  }, 1500 );
                  $('#enemy_img').animate({
                  marginTop: "+=0px",
                  }, 1500 );

                  if(lanceTeam[1][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[2][1]);
                  enemyName.text(lanceTeam[2][0]);
                  enemyHealth.text(lanceTeam[2][2]);
                  lanceTeam[2][2] = (lanceTeam[2][2] - attack);


                  if(lanceTeam[1][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[2][1]);
                  enemyName.text(lanceTeam[2][0]);
                  enemyHealth.text(lanceTeam[2][2]);
                  lanceTeam[2][2] = (lanceTeam[2][2] - attack);


                  if(lanceTeam[2][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[3][1]);
                  enemyName.text(lanceTeam[3][0]);
                  enemyHealth.text(lanceTeam[3][2]);
                  lanceTeam[3][2] = (lanceTeam[3][2] - attack);


                  if(lanceTeam[3][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[4][1]);
                  enemyName.text(lanceTeam[4][0]);
                  enemyHealth.text(lanceTeam[4][2]);
                  lanceTeam[4][2] = (lanceTeam[4][2] - attack);
                  }
                  }
                  }
                  }
                  }
                  }
                  setTimeout(explode, 1000);
                  }
                  youAttack()
                  })

                  attack2.on('click', function(){
                  let youAttack = function(){
                  function explode(){
                  enemyHealth.empty().append(lanceTeam[0][2])
                  lanceTeam[0][2] = (lanceTeam[0][2] - attack);
                  $('#enemy_img').animate({
                  marginLeft: "-=30px",
                  }, 100 );
                  $('#enemy_img').animate({
                  marginLeft: "+=30px",
                  }, 500 );

                  if(lanceTeam[0][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[1][1]);
                  enemyName.text(lanceTeam[1][0]);
                  enemyHealth.text(lanceTeam[1][2]);
                  $("#status_text").text(lanceTeam[1][0] + " used " + lanceTeam[1][3]);
                  lanceTeam[1][2] = lanceTeam[1][2] - attack;



                  if(lanceTeam[1][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[2][1]);
                  enemyName.text(lanceTeam[2][0]);
                  enemyHealth.text(lanceTeam[2][2]);
                  lanceTeam[2][2] = (lanceTeam[2][2] - attack);


                  if(lanceTeam[1][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[2][1]);
                  enemyName.text(lanceTeam[2][0]);
                  enemyHealth.text(lanceTeam[2][2]);
                  lanceTeam[2][2] = (lanceTeam[2][2] - attack);


                  if(lanceTeam[2][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[3][1]);
                  enemyName.text(lanceTeam[3][0]);
                  enemyHealth.text(lanceTeam[3][2]);
                  lanceTeam[3][2] = (lanceTeam[3][2] - attack);


                  if(lanceTeam[3][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[4][1]);
                  enemyName.text(lanceTeam[4][0]);
                  enemyHealth.text(lanceTeam[4][2]);
                  lanceTeam[4][2] = (lanceTeam[4][2] - attack);

                  }
                  }
                  }
                  }
                  }
                  }
                  setTimeout(explode, 1000);
                  }
                  youAttack()
                  })
                attack3.on('click', function(){
                let youAttack = function(){
                function explode(){
                enemyHealth.empty().append(lanceTeam[0][2])
                lanceTeam[0][2] = (lanceTeam[0][2] - attack);
                  $('#enemy_img').animate({
                  marginLeft: "-=30px",
                  }, 500 );
                  $('#enemy_img').animate({
                  marginLeft: "+=30px",
                  }, 500 );

                  if(lanceTeam[0][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[1][1]);
                  enemyName.text(lanceTeam[1][0]);
                  enemyHealth.text(lanceTeam[1][2]);
                  $("#status_text").text(lanceTeam[1][0] + " used " + lanceTeam[1][3]);
                  lanceTeam[1][2] = lanceTeam[1][2] - attack;



                  if(lanceTeam[1][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[2][1]);
                  enemyName.text(lanceTeam[2][0]);
                  enemyHealth.text(lanceTeam[2][2]);
                  lanceTeam[2][2] = (lanceTeam[2][2] - attack);


                  if(lanceTeam[1][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[2][1]);
                  enemyName.text(lanceTeam[2][0]);
                  enemyHealth.text(lanceTeam[2][2]);
                  lanceTeam[2][2] = (lanceTeam[2][2] - attack);


                  if(lanceTeam[2][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[3][1]);
                  enemyName.text(lanceTeam[3][0]);
                  enemyHealth.text(lanceTeam[3][2]);
                  lanceTeam[3][2] = (lanceTeam[3][2] - attack);


                  if(lanceTeam[3][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[4][1]);
                  enemyName.text(lanceTeam[4][0]);
                  enemyHealth.text(lanceTeam[4][2]);
                  lanceTeam[4][2] = (lanceTeam[4][2] - attack);

                  }
                  }
                  }
                  }
                  }
                  }
                  setTimeout(explode, 1000);
                  }
                  youAttack()
                  })
                attack4.on('click', function(){
                let youAttack = function(){
                function explode(){
                enemyHealth.empty().append(lanceTeam[0][2])
                lanceTeam[0][2] = (lanceTeam[0][2] - attack);
                  $('#enemy_img').animate({
                  marginTop: "-=30px",
                  }, 100 );
                  $('#enemy_img').animate({
                  marginTop: "+=30px",
                  }, 100 );

                  if(lanceTeam[0][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[1][1]);
                  enemyName.text(lanceTeam[1][0]);
                  enemyHealth.text(lanceTeam[1][2]);
                  $("#status_text").text(lanceTeam[1][0] + " used " + lanceTeam[1][3]);
                  lanceTeam[1][2] = lanceTeam[1][2] - attack;



                  if(lanceTeam[1][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[2][1]);
                  enemyName.text(lanceTeam[2][0]);
                  enemyHealth.text(lanceTeam[2][2]);
                  lanceTeam[2][2] = (lanceTeam[2][2] - attack);


                  if(lanceTeam[1][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[2][1]);
                  enemyName.text(lanceTeam[2][0]);
                  enemyHealth.text(lanceTeam[2][2]);
                  lanceTeam[2][2] = (lanceTeam[2][2] - attack);

                  if(lanceTeam[2][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[3][1]);
                  enemyName.text(lanceTeam[3][0]);
                  enemyHealth.text(lanceTeam[3][2]);
                  lanceTeam[3][2] = (lanceTeam[3][2] - attack);


                  if(lanceTeam[3][2] < 0){
                  $("#enemy_img").attr("src",lanceTeam[4][1]);
                  enemyName.text(lanceTeam[4][0]);
                  enemyHealth.text(lanceTeam[4][2]);
                  lanceTeam[4][2] = (lanceTeam[4][2] - attack);

                  }
                  }
                  }
                  }
                  }
                  }
                  setTimeout(explode, 1000);
                  }
                  youAttack()
                  })

// your attacks

          attack1.on('click', function(){
            let theyAttack = function(){
            function explode(){
            $("#status_text").text(" You sent out " + pokemon[0][0]);
            playerHealth.empty().append(pokemon[0][2])
            pokemon[0][2] = (pokemon[0][2] - attack);
            $('#player_img').animate({
                  marginLeft: "-=15px",
                  }, 500 );
                  $('#player_img').animate({
                  marginLeft: "+=15px",
                  }, 100 );


                  if(pokemon[0][2] < 0){
                  $("#status_text").text(" You sent out " + pokemon[1][0]);
                  $("#player_img").attr("src",pokemon[1][1]);
                  attack1.text(pokemon[1][3]);
                  attack2.text(pokemon[1][4]);
                  attack3.text(pokemon[1][5]);
                  attack4.text(pokemon[1][6]);
                  player.text(pokemon[1][0]);
                  playerHealth.text(pokemon[1][2]);
                  pokemon[1][2] = (pokemon[1][2] - attack);


                  if(pokemon[1][2] < 0){
                  $("#status_text").text(" You sent out " + pokemon[2][0]);
                  $("#player_img").attr("src",pokemon[2][1]);
                  player.text(pokemon[2][0]);
                  playerHealth.text(pokemon[2][2]);
                  attack1.text(pokemon[2][3]);
                  attack2.text(pokemon[2][4]);
                  attack3.text(pokemon[2][5]);
                  attack4.text(pokemon[2][6]);
                  pokemon[2][2] = (pokemon[2][2] - attack);


                  if(pokemon[2][2] < 0){
                  $("#player_img").attr("src",pokemon[3][1]);
                  $("#status_text").text(" You sent out " + pokemon[3][0]);
                  player.text(pokemon[3][0]);
                  playerHealth.text(pokemon[3][2]);
                  attack1.text(pokemon[3][3]);
                  attack2.text(pokemon[3][4]);
                  attack3.text(pokemon[3][5]);
                  attack4.text(pokemon[3][6]);
                  pokemon[3][2] = (pokemon[3][2] - attack);

                  if(pokemon[3][2] < 0){
                  $("#player_img").attr("src",pokemon[4][1]);
                  $("#status_text").text(" You sent out " + pokemon[4][0]);
                  player.text(pokemon[4][0]);
                  playerHealth.text(pokemon[4][2]);
                  attack1.text(pokemon[4][3]);
                  attack2.text(pokemon[4][4]);
                  attack3.text(pokemon[4][5]);
                  attack4.text(pokemon[4][6]);
                  pokemon[4][2] = (pokemon[4][2] - attack);


                  if(pokemon[4][2] < 0){
                  $("#player_img").attr("src",pokemon[5][1]);
                  player.text(pokemon[5][0]);
                  playerHealth.text(pokemon[5][2]);
                  $("#status_text").text(" You defeated Lance!  ");

                  pokemon[5][2] = (pokemon[5][2] - attack);

                  }
                  }
                  }
                  }
                  }
                  // if(lanceTeam[4][2] >= 0){
                  //     alert('youlose')
                  //   }
                  }
                  setTimeout(explode, 1000);
                  }
                  theyAttack()
                  })
          attack2.on('click', function(){
            let theyAttack = function(){
            function explode(){
            $("#status_text").text(" You sent out " + pokemon[0][0]);
            playerHealth.empty().append(pokemon[0][2])
            pokemon[0][2] = (pokemon[0][2] - attack);
                    $('#player_img').animate({
                  marginLeft: "-=15px",
                  }, 500 );
                  $('#player_img').animate({
                  marginLeft: "+=15px",
                  }, 500 );

                  if(pokemon[0][2] < 0){
                  $("#status_text").text(" You sent out " + pokemon[1][0]);
                  $("#player_img").attr("src",pokemon[1][1]);
                  attack1.text(pokemon[1][3]);
                  attack2.text(pokemon[1][4]);
                  attack3.text(pokemon[1][5]);
                  attack4.text(pokemon[1][6]);
                  player.text(pokemon[1][0]);
                  playerHealth.text(pokemon[1][2]);
                  pokemon[1][2] = (pokemon[1][2] - attack);


                  if(pokemon[1][2] < 0){
                  $("#status_text").text(" You sent out " + pokemon[2][0]);
                  $("#player_img").attr("src",pokemon[2][1]);
                  player.text(pokemon[2][0]);
                  playerHealth.text(pokemon[2][2]);
                  attack1.text(pokemon[2][3]);
                  attack2.text(pokemon[2][4]);
                  attack3.text(pokemon[2][5]);
                  attack4.text(pokemon[2][6]);
                  pokemon[2][2] = (pokemon[2][2] - attack);


                  if(pokemon[2][2] < 0){
                  $("#player_img").attr("src",pokemon[3][1]);
                  $("#status_text").text(" You sent out " + pokemon[3][0]);
                  player.text(pokemon[3][0]);
                  playerHealth.text(pokemon[3][2]);
                  attack1.text(pokemon[3][3]);
                  attack2.text(pokemon[3][4]);
                  attack3.text(pokemon[3][5]);
                  attack4.text(pokemon[3][6]);
                  pokemon[3][2] = (pokemon[3][2] - attack);


                  if(pokemon[3][2] < 0){
                  $("#player_img").attr("src",pokemon[4][1]);
                  $("#status_text").text(" You sent out " + pokemon[4][0]);
                  player.text(pokemon[4][0]);
                  playerHealth.text(pokemon[4][2]);
                  attack1.text(pokemon[4][3]);
                  attack2.text(pokemon[4][4]);
                  attack3.text(pokemon[4][5]);
                  attack4.text(pokemon[4][6]);
                  pokemon[4][2] = (pokemon[4][2] - attack);


                  if(pokemon[4][2] < 0){
                  $("#player_img").attr("src",pokemon[5][1]);
                  player.text(pokemon[5][0]);
                  playerHealth.text(pokemon[5][2]);
                  $("#status_text").text(" You defeated Lance!  ");

                  pokemon[5][2] = (pokemon[5][2] - attack);

                  }
                  }
                  }
                  }
                  }
                  // if(lanceTeam[4][2] >= 0){
                  //     alert('youlose')
                  //   }
                  }
                  setTimeout(explode, 1000);
                  }
                  theyAttack()
                  })

          attack3.on('click', function(){
            let theyAttack = function(){
            function explode(){
            $("#status_text").text(" You sent out " + pokemon[0][0]);
            playerHealth.empty().append(pokemon[0][2])
            pokemon[0][2] = (pokemon[0][2] - attack);
             $('#player_img').animate({
                  marginLeft: "-=30px",
                  }, 100 );
                  $('#player_img').animate({
                  marginLeft: "+=30px",
                  }, 100 );

                  if(pokemon[0][2] < 0){
                  $("#status_text").text(" You sent out " + pokemon[1][0]);
                  $("#player_img").attr("src",pokemon[1][1]);
                  attack1.text(pokemon[1][3]);
                  attack2.text(pokemon[1][4]);
                  attack3.text(pokemon[1][5]);
                  attack4.text(pokemon[1][6]);
                  player.text(pokemon[1][0]);
                  playerHealth.text(pokemon[1][2]);
                  pokemon[1][2] = (pokemon[1][2] - attack);


                  if(pokemon[1][2] < 0){
                  $("#status_text").text(" You sent out " + pokemon[2][0]);
                  $("#player_img").attr("src",pokemon[2][1]);
                  player.text(pokemon[2][0]);
                  playerHealth.text(pokemon[2][2]);
                  attack1.text(pokemon[2][3]);
                  attack2.text(pokemon[2][4]);
                  attack3.text(pokemon[2][5]);
                  attack4.text(pokemon[2][6]);
                  pokemon[2][2] = (pokemon[2][2] - attack);


                  if(pokemon[2][2] < 0){
                  $("#player_img").attr("src",pokemon[3][1]);
                  $("#status_text").text(" You sent out " + pokemon[3][0]);
                  player.text(pokemon[3][0]);
                  playerHealth.text(pokemon[3][2]);
                  attack1.text(pokemon[3][3]);
                  attack2.text(pokemon[3][4]);
                  attack3.text(pokemon[3][5]);
                  attack4.text(pokemon[3][6]);
                  pokemon[3][2] = (pokemon[3][2] - attack);


                  if(pokemon[3][2] < 0){
                  $("#player_img").attr("src",pokemon[4][1]);
                  $("#status_text").text(" You sent out " + pokemon[4][0]);
                  player.text(pokemon[4][0]);
                  playerHealth.text(pokemon[4][2]);
                  attack1.text(pokemon[4][3]);
                  attack2.text(pokemon[4][4]);
                  attack3.text(pokemon[4][5]);
                  attack4.text(pokemon[4][6]);
                  pokemon[4][2] = (pokemon[4][2] - attack);


                  if(pokemon[4][2] < 0){
                  $("#player_img").attr("src",pokemon[5][1]);
                  player.text(pokemon[5][0]);
                  playerHealth.text(pokemon[5][2]);
                  $("#status_text").text(" You defeated Lance!  ");

                  pokemon[5][2] = (pokemon[5][2] - attack);

                  }
                  }
                  }
                  }
                  }
                  // if(lanceTeam[4][2] >= 0){
                  //     alert('youlose')
                  //   }
                  }
                  setTimeout(explode, 1000);
                  }
                  theyAttack()
                  })

          attack4.on('click', function(){
            let theyAttack = function(){
            function explode(){
            $("#status_text").text(" You sent out " + pokemon[0][0]);
            playerHealth.empty().append(pokemon[0][2])
            pokemon[0][2] = (pokemon[0][2] - attack);
                  $('#player_img').animate({
                  marginLeft: "-=15px",
                  }, 500 );
                  $('#player_img').animate({
                  marginLeft: "+=15px",
                  }, 100 );

                  if(pokemon[0][2] < 0){
                  $("#status_text").text(" You sent out " + pokemon[1][0]);
                  $("#player_img").attr("src",pokemon[1][1]);
                  attack1.text(pokemon[1][3]);
                  attack2.text(pokemon[1][4]);
                  attack3.text(pokemon[1][5]);
                  attack4.text(pokemon[1][6]);
                  player.text(pokemon[1][0]);
                  playerHealth.text(pokemon[1][2]);
                  pokemon[1][2] = (pokemon[1][2] - attack);


                  if(pokemon[1][2] < 0){
                  $("#status_text").text(" You sent out " + pokemon[2][0]);
                  $("#player_img").attr("src",pokemon[2][1]);
                  player.text(pokemon[2][0]);
                  playerHealth.text(pokemon[2][2]);
                  attack1.text(pokemon[2][3]);
                  attack2.text(pokemon[2][4]);
                  attack3.text(pokemon[2][5]);
                  attack4.text(pokemon[2][6]);
                  pokemon[2][2] = (pokemon[2][2] - attack);

                  if(pokemon[2][2] < 0){
                  $("#player_img").attr("src",pokemon[3][1]);
                  $("#status_text").text(" You sent out " + pokemon[3][0]);
                  player.text(pokemon[3][0]);
                  playerHealth.text(pokemon[3][2]);
                  attack1.text(pokemon[3][3]);
                  attack2.text(pokemon[3][4]);
                  attack3.text(pokemon[3][5]);
                  attack4.text(pokemon[3][6]);
                  pokemon[3][2] = (pokemon[3][2] - attack);

                  if(pokemon[3][2] < 0){
                  $("#player_img").attr("src",pokemon[4][1]);
                  $("#status_text").text(" You sent out " + pokemon[4][0]);
                  player.text(pokemon[4][0]);
                  playerHealth.text(pokemon[4][2]);
                  attack1.text(pokemon[4][3]);
                  attack2.text(pokemon[4][4]);
                  attack3.text(pokemon[4][5]);
                  attack4.text(pokemon[4][6]);
                  pokemon[4][2] = (pokemon[4][2] - attack);

                  if(pokemon[4][2] < 0){
                  $("#player_img").attr("src",pokemon[5][1]);
                  player.text(pokemon[5][0]);
                  playerHealth.text(pokemon[5][2]);
                  $("#status_text").text(" You defeated Lance!  ");

                  pokemon[5][2] = (pokemon[5][2] - attack);
                  }
                  }
                  }
                  }
                  }
                  }
                  setTimeout(explode, 1000);
                  }
                  theyAttack()
                  })




let enemy = function(){
  $("#enemy_img").attr("src",lanceTeam[i][1]);
    enemyName.text(lanceTeam[i][0]);
      enemyHealth.text(lanceTeam[i][2]);
        youAttack();
          if(lanceTeam[i][2]<0){
              i + 1;
              enemy();
            }
    speed = lanceTeam[i][3]
}
    enemy();



})();
