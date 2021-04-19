import { post, post2, get, post123, postforapply } from './axios'
import request from './axios'

export default {

  //登录  首页登录
  login(params) {
    return post('api/user/signIn', params)
    // return post123('/sys/login', params)
  },
  getInfo(params){
    return get('api/user/getUserInfo', params)
  },
  //登录  发送短信
  sendmsg(params) {
    return post2('system/cmu/tenant/sendRegister', params)
  },

  //登录  验证短信
  authCode(params) {
    return post2('system/cmu/tenant/authCode', params)
  },


  //注册
  addtenant(params) {
    return postforapply('system/cmu/tenant/add', params)
  },
  //获取省市
  getTwoTree(params) {
    return post('system/cmu/property/getTwoTree', params)
  },
  //图片上传
  uploadpic(params) {
    return post2('system/cmu/property/uploadPictures', params)
  },

  //系统管理

  //员工管理  分页查询
  staffSelectPage(params) {
    return post2('/cmu/owner/selectPage', params)
  },
  //员工管理  新增
  staffAdd(params) {
    return post('/cmu/owner/add', params)
  },
  //员工管理  修改
  staffUpdate(params) {
    return post('/cmu/owner/update', params)
  },
  //员工管理  删除
  staffDelete(params) {
    return post2('/cmu/owner/delete', params)
  },
  //员工管理  重置密码
  staffReset(params) {
    return post2('/cmu/owner/resetPassword', params)
  },

  //部门管理  分页查询
  departmentSelectPage(params) {
    return post2('/cmu/department/selectPage', params)
  },
  //部门管理  新增
  departmentAdd(params) {
    return post2('/cmu/department/add', params)
  },
  //部门管理  修改
  departmentUpdate(params) {
    return post('/cmu/department/update', params)
  },

  //任务管理  分页查询
  maskSelectPage(params) {
    return post2('/cmu/currenttask/selectPage', params)
  },
  //任务管理  新增
  maskAdd(params) {
    return post('/cmu/currenttask/add', params)
  },
  //任务管理  发布
  maskUpdate(params) {
    return post('/cmu/currenttaskOwner/releaseTask', params)
  },
  //任务管理  发布后回显
  maskUpdateBack(params) {
    return post2('/cmu/currenttaskOwner/selectAll', params)
  },
  //任务管理  删除
  maskDelete(params) {
    return post2('/cmu/currenttask/delete', params)
  },
  //任务管理  获取任务人员列表
  getAllByDepartment(params) {
    return post('/cmu/owner/selectAllByDepartment', params)
  },

  //报告
  //出差报告  分页查询
  evectionReportSelectPage(params) {
    return post2('/cmu/businessreport/selectPage', params)
  },
  //出差报告  审批状态
  evectionReportUpdate(params) {
    return post('/cmu/businessreport/update', params)
  },
  //出差报告  删除
  evectionReportDelete(params) {
    return post2('/cmu/businessreport/delete', params)
  },
  //培训报告  分页查询
  trainReportSelectPage(params) {
    return post2('/cmu/train/selectPage', params)
  },
  //培训报告  删除
  trainReportDelete(params) {
    return post2('/cmu/train/delete', params)
  },

  //设备管理

  //设备管理  获取所有小区
  getCommunity(params) {
    return post('/cmu/community/selectAll', params)
  },
  //设备管理  分页查询
  gatherSelectPage(params) {
    return post('/cmu/gather/selectPage', params)
  },
  //设备管理  分页查询
  gatherDelete(params) {
    return post2('/cmu/gather/delete', params)
  },

  //小区信息 分页查询
  selectPagecommunity(params) {
    return post2('/system/cmu/community/selectPage', params)
  },

  //小区信息 新增小区
  addcommunity(params) {
    return post('/system/cmu/community/add', params)
  },
  // 小区信息 省市区级联查询
  getCascader(params) {
    return post('system/cmu/tree/selectLevelFour', params)
  },

  //小区信息 修改小区
  updatecommunity(params) {
    return post('/system/cmu/community/update', params)
  },

  //小区信息 删除小区
  deletecommunity(params) {
    return post2('/system/cmu/community/delete', params)
  },

  //小区信息 小区结构 下载excel
  insertRecord(params) {
    return post2('/system/cmu/tree/insertRecord', params)
  },

  //小区信息 小区结构 上传excel
  importHouse(params) {
    return post2('/system/cmu/tree/importHouse', params)
  },

  //小区信息 小区结构 查询
  getStructure(params) {
    return post2('/system/cmu/community/getStructure', params)
  },

  //小区信息 小区结构 楼栋新增
  addbuild(params) {
    return post('/system/cmu/building/add', params)
  },

  //小区信息 小区结构 单元新增
  addunit(params) {
    return post('/system/cmu/unit/add', params)
  },

  //小区信息 小区结构 室号新增
  adddoor(params) {
    return post('/system/cmu/house/add', params)
  },

  //小区信息 小区结构 房间号新增
  addhouse(params) {
    return post('/system/cmu/room/add', params)
  },

  //小区信息 小区结构 床位新增
  addbed(params) {
    return post('/system/cmu/bed/add', params)
  },

  //小区信息 分级信息 楼栋查询
  buildingselectPage(params) {
    return post2('/system/cmu/building/selectPage', params)
  },

  //小区信息 分级信息 单元查询
  unitselectPage(params) {
    return post2('/system/cmu/unit/selectPage', params)
  },

  //小区信息 分级信息 室号查询
  doorselectPage(params) {
    return post2('/system/cmu/house/selectPage', params)
  },

  //小区信息 分级信息 房间号查询
  houseselectPage(params) {
    return post2('/system/cmu/room/selectPage', params)
  },

  //小区信息 分级信息 床位号查询
  bedselectPage(params) {
    return post2('/system/cmu/bed/selectPage', params)
  },

  //小区信息 小区结构 楼栋修改
  updatebuild(params) {
    return post('/system/cmu/building/update', params)
  },

  //小区信息 小区结构 单元修改
  updateunit(params) {
    return post('/system/cmu/unit/update', params)
  },

  //小区信息 小区结构 室号修改
  updatedoor(params) {
    return post('/system/cmu/house/update', params)
  },

  //小区信息 小区结构 房间号修改
  updatehouse(params) {
    return post('/system/cmu/room/update', params)
  },

  //小区信息 小区结构 床位修改
  updatebed(params) {
    return post('/system/cmu/bed/update', params)
  },

  //小区管理 房屋类型 查询
  selectPagehouseType(params) {
    return post2('/system/cmu/houseType/selectPage', params)
  },
  //小区信息 获取小区树
  selectCommunity(params) {
    return post2('/system/cmu/tree/selectCommunity', params)
  },

  //小区信息 获取小区层级树
  selectCommunityLabelTree(params) {
    return post2('/system/cmu/tree/LevelValueTree', params)
  },
  //设备管理  小区大门 分页查询
  communityGateSelectPage(params) {
    return post2('/system/cmu/doorManage/selectPage', params)
  },

  //设备管理  分页查询
  deviceManageSelectPage(params) {
    return post2('/system/cmu/doorManage/selectPage', params)
  },

  //设备管理  新增
  deviceManageAdd(params) {
    return post('/system/cmu/doorManage/add', params)
  },

  //设备管理  修改
  deviceManageEdit(params) {
    return post('/system/cmu/doorManage/update', params)
  },

  //设备管理  删除
  deviceManageDelete(params) {
    return post2('/system/cmu/doorManage/delete', params)
  },

  //设备管理  门禁设备 新增
  doorEncodeAdd(params) {
    return post('/system/cmu/doorManage/add', params)
  },

  //设备管理  门禁设备 删除
  doorEncodeDelete(params) {
    return post2('/system/cmu/doorManage/delete', params)
  },
  //权限 角色管理  展示所有角色信息
  roleInfo(params) {
    return post2('/system/propertyAccountRole/selectPage', params)
  },

  //权限  角色管理 添加角色
  addRole(params) {
    return post('/system/propertyAccountRole/add', params)
  },

  //权限  角色管理 删除角色
  deleteRole(params) {
    return post2('/system/cmu/propertyRole/delete', params)
  },


  //权限  角色管理 编辑角色
  editeRole(params) {
    return post('/system/propertyAccountRole/update', params)
  },

  //获取权限路由
  PUT_roleSelete(params) {
    return post2('/system/sys/moduleRight/getModulesInfoByRoleId', params)
  },

  //修改权限路由
  PUT_role(params) {
    return post2('/system/sys/moduleRight/batchUpdate', params)
  },


  //权限  功能管理  展示所有功能
  showAllFunction(params) {
    return post('/system/sys/module/selectAll', params)
  },

  //权限  功能管理  删除
  deleteOneFunction(params) {
    return post2('/system/sys/module/delete', params)
  },

  //权限  功能管理  新增
  addOneFunction(params) {
    return post('/system/sys/module/add', params)
  },

  //权限  功能管理  设置
  editOneFunction(params) {
    return post('/system/sys/module/update', params)
  },

  //权限  权限管理  获取角色已有的功能模块
  getRoleFunction(params) {
    return post('/system/sys/module/selectAllByRoleId', params)
  },
}
