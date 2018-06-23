var anakinHealth = 150;
var anakinAttack = 0;
var anakinCounter = 20;
var obiWanHealth = 120;
var obiWanAttack = 0;
var obiWanCounter = 15;
var maulHealth = 200;
var maulAttack = 0;
var maulCounter = 25;
var kyloHealth = 180;
var kyloAttack = 0;
var kyloCounter = 22;
var characterHealth = $('.character').data('health');
var defenderHealth = $('.defender').data('health');

$('#anakin-health').text(anakinHealth);
$('#obi-wan-health').text(obiWanHealth);
$('#maul-health').text(maulHealth);
$('#kylo-health').text(kyloHealth);

// Picking your character
$(document).on('click','#card-img',function(){
    var character = $(this).data('character');
    if (character == 'anakin'){
        $('#character').html($(this));
        $('.character').attr('data-character','anakin');
        $('.character').attr('data-health',150);
        characterHealth = $('.character').data('health');
    }else if (character == 'obi-wan'){
        $('#character').html($(this));
        $('.character').attr('data-character','obi-wan');
        $('.character').attr('data-health',120);
        characterHealth = $('.character').data('health');
    }else if (character == 'maul'){
        $('#character').html($(this));
        $('.character').attr('data-character','maul');
        $('.character').attr('data-health',200);
        characterHealth = $('.character').data('health');
    }else if (character == 'kylo'){
        $('#character').html($(this));
        $('.character').attr('data-character','kylo');
        $('.character').attr('data-health',180);
        characterHealth = $('.character').data('health');
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

// Picking the defender
$(document).on('click','#img',function(){
    var character = $(this).data('character');
    var button = $('<button>');
    if (character == 'anakin'){
        $('#defender').html($(this));
        $('.defender').attr('data-character','anakin');
        $('.defender').attr('data-health',150);
        defenderHealth = $('.defender').data('health');
        $('.enemies').attr('class','col-lg-3');
    }else if (character == 'obi-wan'){
        $('#defender').html($(this));
        $('.defender').attr('data-character','obi-wan');
        $('.defender').attr('data-health',120);
        defenderHealth = $('.defender').data('health');
        $('.enemies').attr('class','col-lg-3');
    }else if (character == 'maul'){
        $('#defender').html($(this));
        $('.defender').attr('data-character','maul');
        $('.defender').attr('data-health',200);
        defenderHealth = $('.defender').data('health');
        $('.enemies').attr('class','col-lg-3');
    }else if (character == 'kylo'){
        $('#defender').html($(this));
        $('.defender').attr('data-character','kylo');
        $('.defender').attr('data-health',180);
        defenderHealth = $('.defender').data('health');
        $('.enemies').attr('class','col-lg-3');
    }else{
        $('#title').html(button);
        $(button).text('FIGHT!')
    }
});

// Your character and defender fighting
$(document).on('click','button',function(){
    var character = $('.character').attr('data-character');
    var defender = $('.defender').attr('data-character');
    anakinAttack +=8;
    obiWanAttack +=6;
    maulAttack +=16;
    kyloAttack +=14;
    if (character == 'anakin' && defender == 'obi-wan'){
        defenderHealth -= anakinAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
    }else if (character == 'anakin' && defender == 'maul'){
        defenderHealth -= anakinAttack;
        characterHealth -= maulCounter;
        $('#fightDisplay1').text('You attacked Darth Maul for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Darth Maul countered for ' + maulCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#maul-health').text(defenderHealth);
    }else if (character == 'anakin' && defender == 'kylo'){
        defenderHealth -= anakinAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + anakinAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#anakin-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
    }
    if (character == 'obi-wan' && defender == 'anakin'){
        defenderHealth -= obiWanAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
    }else if (character == 'obi-wan' && defender == 'maul'){
        defenderHealth -= obiWanAttack;
        characterHealth -= maulCounter;
        $('#fightDisplay1').text('You attacked Darth Maul for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Darth Maul countered for ' + maulCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#maul-health').text(defenderHealth);
    }else if (character == 'obi-wan' && defender == 'kylo'){
        defenderHealth -= obiWanAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + obiWanAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#obi-wan-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
    }
    if (character == 'maul' && defender == 'anakin'){
        defenderHealth -= maulAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
    }else if (character == 'maul' && defender == 'obi-wan'){
        defenderHealth -= maulAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
    }else if (character == 'maul' && defender == 'kylo'){
        defenderHealth -= maulAttack;
        characterHealth -= kyloCounter;
        $('#fightDisplay1').text('You attacked Kylo Ren for ' + maulAttack + ' damage');
        $('#fightDisplay2').text('Kylo Ren countered for ' + kyloCounter + ' damage');
        $('#maul-health').text(characterHealth);
        $('#kylo-health').text(defenderHealth);
    }
    if (character == 'kylo' && defender == 'anakin'){
        defenderHealth -= kyloAttack;
        characterHealth -= anakinCounter;
        $('#fightDisplay1').text('You attacked Anakin for ' + kyloAttack + ' damage');
        $('#fightDisplay2').text('Anakin countered for ' + anakinCounter + ' damage');
        $('#kylo-health').text(characterHealth);
        $('#anakin-health').text(defenderHealth);
    }else if (character == 'kylo' && defender == 'obi-wan'){
        defenderHealth -= kyloAttack;
        characterHealth -= obiWanCounter;
        $('#fightDisplay1').text('You attacked Obi-Wan for ' + kyloAttack + ' damage');
        $('#fightDisplay2').text('Obi-Wan countered for ' + obiWanCounter + ' damage');
        $('#kylo-health').text(characterHealth);
        $('#obi-wan-health').text(defenderHealth);
    }else if (character == 'kylo' && defender == 'maul'){
        defenderHealth -= kyloAttack;
        characterHealth -= maulCounter;
        $('#fightDisplay1').text('You attacked Darth Maul for ' + kyloAttack + ' damage');
        $('#fightDisplay2').text('Darth Maul countered for ' + maulCounter + ' damage');
        $('#kylo-health').text(characterHealth);
        $('#maul-health').text(defenderHealth);
    }
    if (defenderHealth <= 0){
        $('#fightDisplay1').text('You defeated '+defender);
        $('#fightDisplay2').empty();
        $('#defender').empty();
        $('#title').text('Choose another opponent')
    }else if (characterHealth <= 0){
        $('#fightDisplay1').text('You have been defeated.. Try Again!');
        $('#fightDisplay2').empty();
        $('#obi-wan-health').text('');
        $('button').text('REMATCH!')
        $(document).on('click','button',function(){
            location.reload();
        });
    }
});