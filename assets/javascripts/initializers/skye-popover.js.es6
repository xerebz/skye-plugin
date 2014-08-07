import { decorateCooked } from 'discourse/lib/plugin-api';

export default {
  name: 'skye-popover',
  initialize: function(container) {
    decorateCooked(container, function($elem) {
      $('.skye-item', $elem).css('border','1px solid').qtip({
        content: {
          text: function(event, api) {
              $.ajax({
                  url: 'http://qtip2.com/demos/data/owl' // Use href attribute as URL xerebz.com/avatar/
              })
              .then(function(content) {
                  // Set the tooltip content upon successful retrieval
                  api.set('content.text', content);
              }, function(xhr, status, error) {
                  // Upon failure... set the tooltip content to error
                  api.set('content.text', status + ': ' + error);
              });
  
              return '...'; // Set some initial text
          },
          button: true
        },
        //reposition to stay visible
        position: {
          my: 'middle left',
          at: 'middle right',
          viewport: $(window),
          adjust: {
            method: 'shift'
          },
          effect: true
        },
        //show on click
        show: {
          event: 'click'
        },
        //hide on click or click off
        hide: 'click unfocus',
        style: {
            classes: 'qtip-light qtip-shadow'
        }
      });
    });
  }
};