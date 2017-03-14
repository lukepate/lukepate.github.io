"use strict";

(function(){

  var pokemon = [
    ['Bulbasaur','images/001.png',60],
    // ['Ivisaur','images/002.png',80],
    // ['Venusaur','images/003.png',130],
    // ['Charmander','images/004.png',50],
    // ['Charmeleon','images/005.png',70],
    // ['Squirtle','images/007.png',60],
    // ['Warturtle','images/008.png',60],

  ];
    var lanceTeam = [
    ['Gyarados','images/132.png',95],
    ['Dragonair','images/148.png',61],
    ['Dragonair','images/148.png',61],
    ['Aerodactyl','images/142.png',60],
    ['Dragonite','images/149.png',91],

  ];
let gyarados = lanceTeam[0][1];
let gyaradosName = lanceTeam[0][0];
let gyaradosHealth = lanceTeam[0][2];
let gyaradosHealthInt = parseInt(gyaradosHealth)

let dragonairFirst = lanceTeam[1][1];
let dragonairName = lanceTeam[1][0];
let dragonairHealth = lanceTeam[1][2];
let dragonairFirstHealthInt = parseInt(dragonairHealth)

let dragonairSecond = lanceTeam[2][1];
let dragonairSecondName = lanceTeam[2][0];
let dragonairSecondHealth = lanceTeam[2][2];
let dragonairSecondHealthInt = parseInt(dragonairSecondHealth)

let aero = lanceTeam[3][1];
let aeroName = lanceTeam[3][0];
let aeroHealth = lanceTeam[3][2];
let aeroHealthInt = parseInt(aeroHealth)

let dragonite = lanceTeam[4][1];
let dragoniteName = lanceTeam[4][0];
let dragoniteHealth = lanceTeam[4][2];
let dragoniteHealthInt = parseInt(dragoniteHealth)

let randomNumber = function(){
  let result = parseInt([Math.floor(Math.random()*100)]);
    return result;
      };
let randomHeal = function(){
  let result = parseInt([Math.floor(Math.random()*25)]);
    return result;
     };
let randomAttack = function(){
  let result = parseInt([Math.floor(Math.random()*25)]+5);
    return result;
      };
let attack = parseInt([Math.floor(Math.random()*25)+5]);
let random = pokemon[Math.floor(Math.random()*pokemon.length)];
let hit = attack;


//player
let counter = 100;
let heal =   randomHeal() + counter;
let playerHealth = $("#player > p:nth-child(3)")

//enemy pokemon
let pic = random[1];
let pokemonCounter = parseInt(random[2]);
let enemyPlace = $("#enemy_img")
let enemyName = $("#enemy > p:nth-child(1)")

let enemyHealth = $("#enemy > p:nth-child(2)")
enemyHealth.append(pokemonCounter)
enemyName.append(random[0])

let itemPlayer = $('#item_btn')
let attackPlayer = $('#attack_btn')

$('#status_text').append('Begin Fight!');
let chooseTeam = function(){
     for(let i=0 ; i < pokemon.length;i++){
        $("#player_img").attr("src",pic);
     }
  };
  let team = chooseTeam();




let lrandom = lanceTeam[Math.floor(Math.random()*lanceTeam.length)];
let lpic = lrandom[1];
let pokemonSwitch = function(){
               $("#enemy_img").attr("src",dragonairFirst);
                enemyName.append(dragonairName);
                enemyHealth.text(dragonairHealth);
        }
      pokemonSwitch();

// let chooseEnemy = function(){
//      for(let x=0 ; x < lanceTeam.length;x++){
//         $("#enemy_img").attr("src",gyarados);
//         enemyName.text(gyaradosName);
//         enemyHealth.text(gyaradosHealth);

//      }
//   };
//   let enemy = chooseEnemy();
let chooseEnemy = function(){
     for(let x=0 ; x < lanceTeam.length;x++){
        $("#enemy_img").attr("src",lanceTeam[0][1]);
        enemyName.text(lanceTeam[0][0]);
        enemyHealth.text(lanceTeam[0][2]);
     } if(lanceTeam[0][2]== 0){

     }

  };
  let enemy = chooseEnemy();




  var addAttack= function(){
      attackPlayer.on('click', function(){
        let youAttack = function(){
          if(randomNumber() > 10){
            $('#status_text').text('player used Tackle');
            enemyHealth.empty().append((gyaradosHealthInt - attack))
             gyaradosHealthInt = gyaradosHealthInt - attack;
              if(gyaradosHealthInt <= 0){
                 pokemonSwitch();


              }
            }
          }
        youAttack();
      })
  }
  var garaddAttack= function(){
      attackPlayer.on('click', function(){
        let youAttack = function(){
          if(randomNumber() > 10){
                  $('#status_text').text('player used Tackle');
                    enemyHealth.empty().append((dragonairFirstHealthInt - attack))
                      dragonairFirstHealthInt = dragonairFirstHealthInt - attack;
                        if(dragonairFirstHealthInt <= 0){
                          pokemonSwitch();
                        }
                      }
          }
        garaddAttack();
      })
  }









    var addEventListeners = function(){
    $("#attack_btn").click(addAttack)
    }
  $(document).ready(function(){
    addEventListeners();
  })
})();
