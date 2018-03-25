(function() {
  $('[data-block]').find('input[type=radio]').change(function(e) {
    var $container = $(e.target).closest('[data-block]')

    $($container).find('.messaging').children().hide()
    $($container).find('button').fadeIn(250)
  })

  $('[data-block]').find('button').click(function(e) {
    var $container = $(e.target).closest('[data-block]')
    var result = $container.find('input:checked');

    $container.find('.messaging [data-response=' + $(result).attr('id') + ']').show();
    
    if ($(result).attr('data-correct')) {
      $container.next().show();
      $container.find('input').attr('disabled', 'disabled');
    }
  })
})();