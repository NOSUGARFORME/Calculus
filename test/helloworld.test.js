const request = require('supertest')
const app = require('../src/app')

describe('Hello World Test', () => {
    it('should test GET Method returns 200', async () => {
      const res = await request(app).get('/')
      
      expect(res.statusCode).toEqual(200)
      expect(res.text).toEqual('Hello World!')
    })
  })
  