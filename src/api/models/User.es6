/**
 * 订单
 * Created by libinqi on 2016/4/28.
 */
module.exports = {
  autoCreatedAt: true,
  autoUpdatedAt: true,
  autoPK: false,
  tableName:'users',
  attributes: {
    id: {type: 'integer', primaryKey: true, autoIncrement: true},//用户ID
    name: {type: 'string'}//用户名称
  }
};
