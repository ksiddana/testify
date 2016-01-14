var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('API integration', function(){
  var server, setupStub, JSONresponse;
  before(function() {

    server = sinon.fakeServer.create();

  })

  after(function () { 
    server.restore(); 
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    var callback = sinon.spy();
    todo.api.sendRequest({ method: 'get', endpoint: 'http://localhost:3000/todos'}, callback);

    // This is part of the FakeXMLHttpRequest API

    console.log(server.requests[0].respond);
      
    server.requests[0].respond(200,
      { "Content-Type": "application/json" },
      JSON.stringify([1,2,3])
    );

    assert(callback.calledOnce);

  });
});
