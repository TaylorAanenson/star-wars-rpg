// Characters stats
var anakinHealth = 145;
var obiWanHealth = 130;
var maulHealth = 160;
var kyloHealth = 150;
var anakinAttack = 15;
var obiWanAttack = 18;
var maulAttack = 16;
var kyloAttack = 14;
var anakinCounter = 22;
var obiWanCounter = 18;
var maulCounter = 24;
var kyloCounter = 20;
var characterHealth = $('.character').data('health');
var defenderHealth = $('.defender').data('health');
var characterAttack = $('.character').data('attack');
var enemiesRemaining = 3;

// Game sounds
var loadMusic = $('#load-music')[0];
var openingMusic = $('#opening-music')[0];
var fightMusic = $('#fight-music')[0];
var openingLightsaber = $('#opening-lightsaber')[0];
var closingLightsaber = $('#closing-lightsaber')[0];
var attack1 = $('#attack1')[0];
var attack2 = $('#attack2')[0];
var attack3 = $('#attack3')[0];
var attack4 = $('#attack4')[0];
var attack5 = $('#attack5')[0];
var attack6 = $('#attack6')[0];
var attack7 = $('#attack7')[0];
var attack8 = $('#attack8')[0];
var attack9 = $('#attack9')[0];
var attack10 = $('#attack10')[0];
var attack11 = $('#attack11')[0];
var attackArray= [attack1,attack2,attack3,attack4,attack5,attack6,attack7,attack8,attack9,attack10,attack11];

$('#anakin-health').text(anakinHealth);
$('#obi-wan-health').text(obiWanHealth);
$('#maul-health').text(maulHealth);
$('#kylo-health').text(kyloHealth);

$(window).on('load',function(){
    loadMusic.play();
});
// Player picks their character
$(document).on('click','#card-img',function(){
    var character = $(this).data('character');
    loadMusic.pause();
    openingMusic.play();
    if (character == 'anakin'){
        $('#character').html($(this));
        $('.character').attr('data-character','anakin');
        $('.character').attr('data-health',145);
        characterHealth = $('.character').data('health');
        openingLightsaber.play();
    }else if (character == 'obi-wan'){
        $('#character').html($(this));
        $('.character').attr('data-character','obi-wan');
        $('.character').attr('data-health',130);
        characterHealth = $('.character').data('health');
        openingLightsaber.play();
    }else if (character == 'maul'){
        $('#character').html($(this));
        $('.character').attr('data-character','maul');
        $('.character').attr('data-health',160);
        characterHealth = $('.character').data('health');
        openingLightsaber.play();
    }else if (character == 'kylo'){
        $('#character').html($(this));
        $('.character').attr('data-character','kylo');
        $('.character').attr('data-health',150);
        characterHealth = $('.character').data('health');
        openingLightsaber.play();
    }else{
        $('#character').show();
        $('#enemies').show();
        $('#defender').show();
        $('#enemies').append($(this));
        $('.col').attr('id','img');
        $('.row').attr('id','img');
        $('#title').text('NOW PICK AN OPPONENT!')
    }
});

// Player picks the defender
$(document).on('click','#img',function(){
    var character = $(this).data('character');
    var button = $('<button>');
    openingMusic.pause();
    fightMusic.play();
    if (character == 'anakin'){
        $('#header').text('STAR WARS RPG!');
        $('#defender').html($(this));
        $('.defender').attr('data-character','anakin');
        $('.defender').attr('data-health',145);
        defenderHealth = $('.defender').attr('data-health');
        $('.enemies').attr('class','col-lg-3');
        openingLightsaber.play();
    }else if (character == 'obi-wan'){
        $('#header').text('STAR WARS RPG!');
        $('#defender').html($(this));
        $('.defender').attr('data-character','obi-wan');
        $('.defender').attr('data-health',130);
        defenderHealth = $('.defender').attr('data-health');
        $('.enemies').attr('class','col-lg-3');
        openingLightsaber.play();
    }else if (character == 'maul'){
        $('#header').text('STAR WARS RPG!');
        $('#defender').html($(this));
        $('.defender').attr('data-character','maul');
        $('.defender').attr('data-health',160);
        defenderHealth = $('.defender').attr('data-health');
        $('.enemies').attr('class','col-lg-3');
        openingLightsaber.play();
    }else if (character == 'kylo'){
        $('#header').text('STAR WARS RPG!');
        $('#defender').html($(this));
        $('.defender').attr('data-character','kylo');
        $('.defender').attr('data-health',150);
        defenderHealth = $('.defender').attr('data-health');
        $('.enemies').attr('class','col-lg-3');
        openingLightsaber.play();
    }else{
        $('#title').html(button);
        $(button).text('FIGHT!');
    }
});

// Character and defender fighting
$(document).on('click','button',function(){
    var character = $('.character').attr('data-character');
    var defender = $('.defender').attr('data-character');
    var randomAttackSound = attackArray[Math.floor(Math.random()*attackArray.length)];
    anakinAttack +=15;
    obiWanAttack +=18;
    maulAttack +=16;
    kyloAttack +=14;
    
// If character is Anakin
    if (character == 'anakin' && defender == 'obi-wan'){
        defenderHealth -= anakinAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
        randomAttackSound.play();

    }else if (character == 'anakin' && defender == 'maul'){
        defenderHealth -= anakinAttack;
        characterHealth -= maulCounter;
        $('#fightDisplay1').text('You attacked Darth Maul for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Darth Maul countered for ' + maulCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#maul-health').text(defenderHealth);
        randomAttackSound.play();

    }else if (character == 'anakin' && defender == 'kylo'){
        defenderHealth -= anakinAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
        randomAttackSound.play();

    }

// If character is Obi-Wan
    if (character == 'obi-wan' && defender == 'anakin'){
        defenderHealth -= obiWanAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'obi-wan' && defender == 'maul'){
        defenderHealth -= obiWanAttack;
        characterHealth -= maulCounter;
        $('#fightDisplay1').text('You attacked Darth Maul for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Darth Maul countered for ' + maulCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#maul-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'obi-wan' && defender == 'kylo'){
        defenderHealth -= obiWanAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
        randomAttackSound.play();
    }

// If character is Maul
    if (character == 'maul' && defender == 'anakin'){
        defenderHealth -= maulAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'maul' && defender == 'obi-wan'){
        defenderHealth -= maulAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'maul' && defender == 'kylo'){
        defenderHealth -= maulAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
        randomAttackSound.play();
    }

// If character is Kylo
    if (character == 'kylo' && defender == 'anakin'){
        defenderHealth -= kyloAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + kyloAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#kylo-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'kylo' && defender == 'obi-wan'){
        defenderHealth -= kyloAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + kyloAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#kylo-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'kylo' && defender == 'maul'){
        defenderHealth -= kyloAttack;
        characterHealth -= maulCounter;
        $('#fightDisplay1').text('You attacked Darth Maul for ' + kyloAttack + ' damage');
        $('#fightDisplay2').text('Darth Maul countered for ' + maulCounter + ' damage');
        $('#kylo-health').text(characterHealth);
        $('#maul-health').text(defenderHealth);
        randomAttackSound.play();
    }

// If defender is defeated or character is defeated
    if (defenderHealth <= 0){
        $('#header').text('You defeated '+defender+'!');
        $('#fightDisplay1').empty();
        $('#fightDisplay2').empty();
        $('#defender').empty();
        $('#title').text('Choose another opponent');
        enemiesRemaining--;
        closingLightsaber.play();
    }
    if (characterHealth <= 0){
        $('#header').text('You have been defeated.. Try Again!');
        $('#fightDisplay1').empty();
        $('#fightDisplay2').empty();
        $('#anakin-health').text('');
        $('#obi-wan-health').text('');
        $('#maul-health').text('');
        $('#kylo-health').text('');
        $('button').text('REMATCH!');
        $(document).on('click','button',function(){
            location.reload();
        });
        closingLightsaber.play();
    }

// If player wins
    if (characterHealth >= 0 && enemiesRemaining == 0){
        $('#header').text('YOU WIN!');
        $('#title').html($('<button>'));
        $('#enemies-title').text('');
        $('#anakin-health').text('');
        $('#obi-wan-health').text('');
        $('#maul-health').text('');
        $('#kylo-health').text('');
        $('button').text('REMATCH!');
        $(document).on('click','button',function(){
            location.reload();
        });
        closingLightsaber.play();
    }
});