/**
 * Created by libinqi on 2016/5/23.
 */
import request from 'supertest';

describe('AboutController', function () {
  describe('#index()', function () {
    it('请求应该返回一个对象', function (done) {
      request(sails.hooks.http.app)
        .get('/about')
        .expect(200, {result: 'about'}, done);
    });
  });
});
