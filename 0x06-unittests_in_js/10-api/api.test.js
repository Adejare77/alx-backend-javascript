const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", function(done) {
	request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", function(done) {
	request(options, function(err, res, body) {
	    expect(body).to.equal("Welcome to the payment system");
	    done();
	});
    });
});

describe("Cart page", function() {
    it("check correct status code for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for correct url", function(done) {
	request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(body).to.contain("Payment methods for cart 12");
	    done();
	});
    });
    it("check correct status code for incorrect url", function(done) {
	request.get("http://localhost:7865/cart/kim", function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });

	describe("Available Payments", (done) => {
		it("Checks if available_payment contains the right content", (done) => {
			request.get('http://localhost:7865/available_payments', (err, res, body) => {
				expect(body).to.deep.include(JSON.stringify({
					payment_methods: {
						credit_cards: true,
						paypal: false
					}
				}));
				done();
			})
		})
	})


	describe('Check login', (done) => {
		it('Checks if login contains the right content', (done) => {
			const postData = {
				userName: 'John'
			};

			request.post({
				uri: 'http://localhost:7865/login',
				json: postData
			}, (err, res, body) => {
				if (err) {
					return done(err);
				}
				expect(body).to.equal('Welcome John')
				});
				done();
		});
	});
});
