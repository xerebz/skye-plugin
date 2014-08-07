SkyePopoverView = Ember.View.extend({
	didInsertElement: 
  $('a').qtip({ // Grab some elements to apply the tooltip to
    content: {
        text: 'My common piece of text here'
    }
  });
});