const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json') 

describe('login', () => {
    describe('POST /login', () => {
        it('deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            const bodyLogin = { ...postLogin }
            
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-type', 'application/json')
                .send(bodyLogin)
 
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        }) 
    }) 
})       