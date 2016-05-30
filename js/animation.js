$('#tweet-submit').hide();
$('#char-count').hide();
$('textarea').click(function(){
    $('.tweet-compose').animate({height: '5em' });
    $('#tweet-submit').show();
    $('#char-count').show();

});
maxCharacters = 140;

$('#char-count').text(maxCharacters);

$('textarea').bind('keyup keydown', function() {
    var count = $('#char-count');
    var characters = $(this).val().length;

    if (characters > maxCharacters) {
        count.addClass('over');
    } else {
        count.removeClass('over');
    }
    count.text(maxCharacters - characters);
    if (maxCharacters - characters < 11) {
      $('#char-count').css({color: 'red'})
    };
    if (maxCharacters - characters < 0) {
      $('#tweet-submit').hide();
    } else {
      $('#tweet-submit').show();
    };
});
$('#tweet-submit').click(function(){
  $('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Chris ONeill </strong><span class="username">@coneill</span><p class="tweet-text">' + $('.tweet-compose').val() + '</p><div class="tweet-actions"><ul> <li> <span class="icon action-reply"> </span> Reply</li>\n <li> <span class="icon action-retweet"> </span> Retweet</li>\n <li> <span class="icon action-favorite"> </span> Favorite</li>\n <li> <span class="icon action-more"> </span> More</li>\n </ul> </div> </div> </div>')
});

$('#main').hover(function() {
  $('.tweet-actions').show();
  }, function() {
  $('.tweet-actions').hide();
  });
