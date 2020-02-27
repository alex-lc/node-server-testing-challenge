const request = require('supertest');

const server = require('../api/server');

describe('posts router', function () {
    it('should run tests for the posts router', function () {
        expect(true).toBe(true);
    });

    describe('GET /api/posts', function () {
        it('should return a 200 OK for posts', function () {
            return request(server)
                .get('/api/posts')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it('should return posts as the router value', function () {
            return request(server)
                .get('/api/posts')
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                });
        });

        it('should return JSON formatted body', function () {
            return request(server)
                .get('/api/posts')
                .then(res => {
                    expect(res.type).toMatch(/json/);
                });
        });
    })
})