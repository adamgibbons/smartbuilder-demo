(function() {
  $('form').find('input[type=radio]').change(function(e) {
    var $container = $(e.target).closest('form')

    $($container).find('.messaging').children().hide()
    $($container).find('button').fadeIn(250)
  })

  $('form').submit(function(e) {
    e.preventDefault();

    var $container = $(e.target)
    var result = $container.find('input:checked');

    $container.find('.messaging [data-response=' + $(result).attr('id') + ']').show();
    
    if ($(result).attr('data-correct')) {
      $container.next().show();
      $container.find('input').attr('disabled', 'disabled');
    }
  })
})();