casper.test.begin( 'Visual regression test for the <%= name %> <%= type %>.', function(test) {

  casper.configure('<%= location %>/<%= name %>')

  .load('<%= name %>.html')

  .then(function (){
    phantomcss.screenshot('.<%= name %>', '<%= name %> <%= type %>');
  })

  .run( function () {
    test.done();
  });

});
