const request = require("supertest");
const expect = require("chai").expect;
const server = require("../src/app");

describe("GET /iecho", function () {
  it("return status code 200", async function () {
    const response = await request(server).get("/iecho?text=hola");
    expect(response.status).to.equal(200);
  });
  it("return the reverse text", async function () {
    const response = await request(server).get("/iecho?text=hola");
    expect(response.body.text).to.equal("aloh");
  });
  it("not sending a text gives a 404 error", async function () {
    const response = await request(server).get("/iecho");
    expect(response.status).to.equal(400);
  });
  it("not sending a text gives a 'no text' error message", async function () {
    const response = await request(server).get("/iecho");
    expect(response.body.error).to.equal("no text");
  });
  it("sending a palindromic phrase returns true even if it has ','/'.'/' ' or special characters", async function () {
    const response = await request(server).get(
      "/iecho?text=A man, a plan, a canal. Panama"
    );
    expect(response.body.palindrome).to.be.true;
  });
  it("sending a not palindromic phrase returns false", async function () {
    const response = await request(server).get(
      "/iecho?text=not a Palindrome text"
    );
    expect(response.body.palindrome).to.be.false;
  });
});
