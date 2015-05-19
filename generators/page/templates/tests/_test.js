casper.test.begin('Visual regression test for the <%= name %> <%= type %>.', function(test) {

  casper.loadPath('<%= location %>/<%= name %>')

  .loadFixture('<%= name %>')

  .then(function (){
    phantomcss.screenshot('.<%= name %>', '<%= name %> <%= type %>');
  })

  .run( function () {
    test.done();
  });

});
