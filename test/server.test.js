const supertest = require('supertest');
const server = require('../app');
const chai = require('chai');

chai.should();
const api = supertest(server);
describe('server run', () => {
    api.get('/').send().end((err, res) => {

        res.status.should.equal(200);
        done();
    });
});