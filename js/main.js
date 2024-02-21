jQuery(function() {
    $('.item__form').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
        url: './send.php',
        type: 'POST',
        cache: false,
        data: $(e.target).serialize()
      }).done(function() {
        alert('Done.');
      }).fail(function() {
        alert('Something went wrong.');
      });
    });
  });