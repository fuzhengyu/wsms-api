/**
 * Created by libinqi on 2016/5/24.
 */
describe('UserModel', function() {
  describe('#find()', function() {
    it('测试查询是否可用', function (done) {
      User.find()
        .then(function(results) {
          // some tests
          done();
        })
        .catch(done);
    });
  });
});
