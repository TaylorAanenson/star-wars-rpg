// Characters stats
var anakinHealth = 145;
var obiWanHealth = 130;
var maulHealth = 160;
var kyloHealth = 150;
var anakinAttack = 0;
var obiWanAttack = 0;
var maulAttack = 0;
var kyloAttack = 0;
var anakinCounter = 23;
var obiWanCounter = 18;
var maulCounter = 24;
var kyloCounter = 19;
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
    if (character == 'Anakin'){
        $('#character').html($(this));
        $('.character').attr('data-character','Anakin');
        $('.character').attr('data-health',145);
        characterHealth = $('.character').data('health');
        $('#anakin-health').css('color','white');
        openingLightsaber.play();
    }else if (character == 'Obi-Wan'){
        $('#character').html($(this));
        $('.character').attr('data-character','Obi-Wan');
        $('.character').attr('data-health',130);
        characterHealth = $('.character').data('health');
        $('#obi-wan-health').css('color','white');
        openingLightsaber.play();
    }else if (character == 'Darth Maul'){
        $('#character').html($(this));
        $('.character').attr('data-character','Darth Maul');
        $('.character').attr('data-health',160);
        characterHealth = $('.character').data('health');
        $('#maul-health').css('color','white');
        openingLightsaber.play();
    }else if (character == 'Kylo Ren'){
        $('#character').html($(this));
        $('.character').attr('data-character','Kylo Ren');
        $('.character').attr('data-health',150);
        characterHealth = $('.character').data('health');
        $('#kylo-health').css('color','white');
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
    if (character == 'Anakin'){
        $('#header').text('STAR WARS RPG!');
        $('#defender').html($(this));
        $('.defender').attr('data-character','Anakin');
        $('.defender').attr('data-health',145);
        defenderHealth = $('.defender').attr('data-health');
        $('#anakin-health').css('color','white');
        $('.enemies').attr('class','col-lg-3');
        openingLightsaber.play();
    }else if (character == 'Obi-Wan'){
        $('#header').text('STAR WARS RPG!');
        $('#defender').html($(this));
        $('.defender').attr('data-character','Obi-Wan');
        $('.defender').attr('data-health',130);
        defenderHealth = $('.defender').attr('data-health');
        $('#obi-wan-health').css('color','white');
        $('.enemies').attr('class','col-lg-3');
        openingLightsaber.play();
    }else if (character == 'Darth Maul'){
        $('#header').text('STAR WARS RPG!');
        $('#defender').html($(this));
        $('.defender').attr('data-character','Darth Maul');
        $('.defender').attr('data-health',160);
        defenderHealth = $('.defender').attr('data-health');
        $('#maul-health').css('color','white');
        $('.enemies').attr('class','col-lg-3');
        openingLightsaber.play();
    }else if (character == 'Kylo Ren'){
        $('#header').text('STAR WARS RPG!');
        $('#defender').html($(this));
        $('.defender').attr('data-character','Kylo Ren');
        $('.defender').attr('data-health',150);
        defenderHealth = $('.defender').attr('data-health');
        $('#kylo-health').css('color','white');
        $('.enemies').attr('class','col-lg-3');
        openingLightsaber.play();
    }else{
        $('#title').html(button);
        $(button).text('ATTACK!');
    }
});

// Character and defender fighting
$(document).on('click','button',function(){
    var character = $('.character').attr('data-character');
    var defender = $('.defender').attr('data-character');
    var randomAttackSound = attackArray[Math.floor(Math.random()*attackArray.length)];
    anakinAttack +=22;
    obiWanAttack +=27;
    maulAttack +=14;
    kyloAttack +=23;
    
// If character is Anakin
    if (character == 'Anakin' && defender == 'Obi-Wan'){
        defenderHealth -= anakinAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
        randomAttackSound.play();

    }else if (character == 'Anakin' && defender == 'Darth Maul'){
        defenderHealth -= anakinAttack;
        characterHealth -= maulCounter;
        $('#fightDisplay1').text('You attacked Darth Maul for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Darth Maul countered for ' + maulCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#maul-health').text(defenderHealth);
        randomAttackSound.play();

    }else if (character == 'Anakin' && defender == 'Kylo Ren'){
        defenderHealth -= anakinAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
        randomAttackSound.play();

    }

// If character is Obi-Wan
    if (character == 'Obi-Wan' && defender == 'Anakin'){
        defenderHealth -= obiWanAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'Obi-Wan' && defender == 'Darth Maul'){
        defenderHealth -= obiWanAttack;
        characterHealth -= maulCounter;
        $('#fightDisplay1').text('You attacked Darth Maul for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Darth Maul countered for ' + maulCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#maul-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'Obi-Wan' && defender == 'Kylo Ren'){
        defenderHealth -= obiWanAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
        randomAttackSound.play();
    }

// If character is Maul
    if (character == 'Darth Maul' && defender == 'Anakin'){
        defenderHealth -= maulAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'Darth Maul' && defender == 'Obi-Wan'){
        defenderHealth -= maulAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'Darth Maul' && defender == 'Kylo Ren'){
        defenderHealth -= maulAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
        randomAttackSound.play();
    }

// If character is Kylo
    if (character == 'Kylo Ren' && defender == 'Anakin'){
        defenderHealth -= kyloAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + kyloAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#kylo-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'Kylo Ren' && defender == 'Obi-Wan'){
        defenderHealth -= kyloAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + kyloAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#kylo-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
        randomAttackSound.play();
    }else if (character == 'Kylo Ren' && defender == 'Darth Maul'){
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
        $('#header').text('You have been defeated..');
        $('#title').html($('<button>'));
        $('#enemies-title').text('');
        $('#fightDisplay1').empty();
        $('#fightDisplay2').empty();
        $('#enemies-title').text('');
        $('#anakin-health').text('');
        $('#obi-wan-health').text('');
        $('#maul-health').text('');
        $('#kylo-health').text('');
        $('button').text('Try Again!');
        closingLightsaber.play();
        $(document).on('click','button',function(){
            location.reload();
        });
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
        closingLightsaber.play();
        $(document).on('click','button',function(){
            location.reload();
        });
    }
});