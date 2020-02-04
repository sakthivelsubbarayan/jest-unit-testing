const supertest = require('supertest');
const app = require('../server');
app.listen(3000,  function(){
    console.log('Koa application listening port number '+ (  3000));
  });

describe("Testing example API", () => {

	it("tests the base route and returns true for status", async () => {
		const response = await supertest(app.callback()).get('/');
		expect(response.body.status).toBe(200);
		expect(response.body.message).toBe('Success');

	});

});