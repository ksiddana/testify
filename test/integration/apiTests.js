var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var testData = [1,2,3,1];
var server, setupStub, JSONresponse;
describe('API integration', function(){

  before(function() {

    server = sinon.fakeServer.create();
    stubSetup = sinon.stub(todo, 'setup');

  });

  after(function () { 
    // server.restore(); 
    todo.setup.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    var callback = sinon.spy();
    todo.init();
    // todo.api.sendRequest({ method: 'get', endpoint: 'http://localhost:3000/todos'}, callback);

    // This is part of the FakeXMLHttpRequest API

    //console.log(server.requests[0].respond);
      
    server.requests[0].respond(200,
      { "Content-Type": "application/json" },
      JSON.stringify({todos: testData})
    );

    sinon.assert.calledWith(stubSetup, testData);
    // assert(callback.calledOnce);

  });


  // it("returns the return value from the original function", function () {
  //   var callback = sinon.stub().returns([1,2,3]);
  //   // console.log(callback);
  //   // var proxy = todo.init(callback);;

});
