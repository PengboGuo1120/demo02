// 引入登录|退出登录|获取用户信息的接口函数
import { login, logout, getInfo } from '@/api/user'
// 获取token|设置token|删除token的函数
import { getToken, setToken, removeToken } from '@/utils/auth'
// 路由模块当中重置路由的方法
import { anyRoutes, resetRouter, asyncRoutes, constantRoutes } from '@/router'
import router from '@/router'
import cloneDeep from 'lodash/cloneDeep'

// 箭头函数
const getDefaultState = () => {
  return {
    // 获取token
    token: getToken(),
    // 存储用户名
    name: '',
    // 存储用户头像
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    // 服务器返回的菜单信息【根据不同的角色：返回的标记信息，数组里面的元素是字符串】
    routes: [
      // 'User',
      // 'Category',
      // 'Discount',
      // 'ActivityEdit',
      // 'string',
      // 'CouponRule',
      // 'Product',
      // 'Activity',
      // 'CouponAdd',
      // '啊啊',
      // 'Trademark',
      // 'wsed',
      // 'Attr',
      // 'ActivityAdd',
      // 'CouponEdit',
      // 'OrderShow',
      // '234',
      // 'Stat',
      // 'Test',
      // 'Permission',
      // 'Spu',
      // 'UserList',
      // 'ClientUser',
      // 'Order',
      // 'Coupon',
      // 'a',
      // 'b',
      // 'test',
      // 'Acl',
      // 'ActivityRule',
      // 'Test222',
      // 'Role',
      // 'RoleAuth',
      // 'Test111',
      // '123',
      // 'Refund',
      // 'Stat2',
      // 'Scoped',
      // 'Stat1',
      // 'OrderList',
      // 'Sku'
    ],
    // 角色信息
    roles: [],
    // 按钮权限的信息
    buttons: [],
    // 对比之后【项目中已有的异步路由，与服务器返回的标记信息进行对比最终需要展示的理由】
    resultAsyncRoutes: [],
    // 用户最终需要展示全部路由
    resultAllRputes: [
      // {
      //   path: '/login',
      //   component: {
      //     _custom: {
      //       type: 'function',
      //       display: '<span>f</span> component(()',
      //       _reviveId: 10
      //     }
      //   },
      //   hidden: true
      // },
      // {
      //   path: '/404',
      //   component: {
      //     _custom: {
      //       type: 'function',
      //       display: '<span>f</span> component(()',
      //       _reviveId: 11
      //     }
      //   },
      //   hidden: true
      // },
      // {
      //   path: '/',
      //   component: {
      //     _custom: {
      //       type: 'component-definition',
      //       display: 'Layout <span>(src/layout/index.vue)</span>',
      //       tooltip: 'Component definition',
      //       file: 'src/layout/index.vue'
      //     }
      //   },
      //   redirect: '/dashboard',
      //   children: [
      //     {
      //       path: 'dashboard',
      //       name: 'Dashboard',
      //       component: {
      //         _custom: {
      //           type: 'function',
      //           display: '<span>f</span> component(()',
      //           _reviveId: 12
      //         }
      //       },
      //       meta: {
      //         title: '首页',
      //         icon: 'dashboard'
      //       }
      //     }
      //   ]
      // },
      // {
      //   name: 'Acl',
      //   path: '/acl',
      //   component: {
      //     _custom: {
      //       type: 'component-definition',
      //       display: 'Layout <span>(src/layout/index.vue)</span>',
      //       tooltip: 'Component definition',
      //       file: 'src/layout/index.vue'
      //     }
      //   },
      //   redirect: '/acl/user/list',
      //   meta: {
      //     title: '权限管理',
      //     icon: 'el-icon-lock'
      //   },
      //   children: [
      //     {
      //       name: 'User',
      //       path: 'user/list',
      //       component: {
      //         _custom: {
      //           type: 'function',
      //           display: '<span>f</span> component(()',
      //           _reviveId: 13
      //         }
      //       },
      //       meta: {
      //         title: '用户管理'
      //       }
      //     },
      //     {
      //       name: 'Role',
      //       path: 'role/list',
      //       component: {
      //         _custom: {
      //           type: 'function',
      //           display: '<span>f</span> component(()',
      //           _reviveId: 14
      //         }
      //       },
      //       meta: {
      //         title: '角色管理'
      //       }
      //     },
      //     {
      //       name: 'RoleAuth',
      //       path: 'role/auth/:id',
      //       component: {
      //         _custom: {
      //           type: 'function',
      //           display: '<span>f</span> component(()',
      //           _reviveId: 15
      //         }
      //       },
      //       meta: {
      //         activeMenu: '/acl/role/list',
      //         title: '角色授权'
      //       },
      //       hidden: true
      //     },
      //     {
      //       name: 'Permission',
      //       path: 'permission/list',
      //       component: {
      //         _custom: {
      //           type: 'function',
      //           display: '<span>f</span> component(()',
      //           _reviveId: 16
      //         }
      //       },
      //       meta: {
      //         title: '菜单管理'
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: '/product',
      //   component: {
      //     _custom: {
      //       type: 'component-definition',
      //       display: 'Layout <span>(src/layout/index.vue)</span>',
      //       tooltip: 'Component definition',
      //       file: 'src/layout/index.vue'
      //     }
      //   },
      //   name: 'Product',
      //   meta: {
      //     title: '商品管理',
      //     icon: 'el-icon-goods'
      //   },
      //   children: [
      //     {
      //       path: 'attr',
      //       name: 'Attr',
      //       component: {
      //         _custom: {
      //           type: 'function',
      //           display: '<span>f</span> component(()',
      //           _reviveId: 17
      //         }
      //       },
      //       meta: {
      //         title: '平台属性管理'
      //       }
      //     },
      //     {
      //       path: 'spu',
      //       name: 'Spu',
      //       component: {
      //         _custom: {
      //           type: 'function',
      //           display: '<span>f</span> component(()',
      //           _reviveId: 18
      //         }
      //       },
      //       meta: {
      //         title: 'Spu管理'
      //       }
      //     },
      //     {
      //       path: 'sku',
      //       name: 'Sku',
      //       component: {
      //         _custom: {
      //           type: 'function',
      //           display: '<span>f</span> component(()',
      //           _reviveId: 19
      //         }
      //       },
      //       meta: {
      //         title: 'Sku管理'
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: '/test',
      //   component: {
      //     _custom: {
      //       type: 'component-definition',
      //       display: 'Layout <span>(src/layout/index.vue)</span>',
      //       tooltip: 'Component definition',
      //       file: 'src/layout/index.vue'
      //     }
      //   },
      //   name: 'Test',
      //   meta: {
      //     title: '测试管理',
      //     icon: 'el-icon-goods'
      //   },
      //   children: []
      // },
      // {
      //   path: '*',
      //   redirect: '/404',
      //   hidden: true
      // }
    ]
  }
}

const state = getDefaultState()

// 唯一修改state的地方
const mutations = {
  // 重置state
  RESET_STATE: state => {
    Object.assign(state, getDefaultState())
  },
  // 存储token
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // 存储用户信息
  SET_USERINFO: (state, userInfo) => {
    // 用户名
    state.name = userInfo.name
    // 用户头像
    state.avatar = userInfo.avatar
    // 菜单权限标记
    state.routes = userInfo.routes
    // 按钮权限标记
    state.buttons = userInfo.buttons
    // 角色
    state.roles = userInfo.roles
  },
  // 最终计算出的异步路由
  SET_RESULTASYNCROUTES: (state, asyncRoutes) => {
    // vuex保存当前用户的异步路由，注意，一个用户需要展示完成路由：常量、异步、任意路由
    state.resultAsyncRoutes = asyncRoutes
    // 计算出当前用户需要展示所有路由
    state.resultAllRputes = constantRoutes.concat(state.resultAsyncRoutes, anyRoutes)
    // 给路由器添加新的路由
    router.addRoutes(state.resultAllRputes)
  }
}

// 定义一个函数：两个数组进行对比，对比出当前用户到底显示哪些异步路由
const computedAsyncRoutes = (asyncRoutes, routes) => {
  // 过滤出当前用户【超级管理|普通员工】需要展示的异步路由
  return asyncRoutes.filter(item => {
    // 数组当中没有这个元素返回索引值-1，如果有这个元素返回的索引值一定不是-1
    if (routes.indexOf(item.name) != -1) {
      // 递归:别忘记还有2、3、4、5、6级路由
      if (item.children && item.children.length) {
        item.children = computedAsyncRoutes(item.children, routes)
      }
      return true
    }
  })
}

// actions
const actions = {
  // 这里在处理登录业务
  async login({ commit }, userInfo) {
    // 解构出用户名与密码
    const { username, password } = userInfo
    const result = await login({ username: username.trim(), password: password })
    // 注意：当前登录请求现在使用mock数据，mock数据code是20000
    if (result.code == 20000) {
      // vuex存储token
      commit('SET_TOKEN', result.data.token)
      // 本地持久化存储token
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },

  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then(response => {
          // 获取用户信息:返回数据包含：用户名name、用户头像avatar、routes[返回的标志:不同的用户应该展示哪些菜单的标记]、roles（用户角色信息）、buttons【按钮的信息：按钮权限用的标记】
          const { data } = response
          // vuex存储用户全部的信息
          commit('SET_USERINFO', data)
          commit('SET_RESULTASYNCROUTES', computedAsyncRoutes(cloneDeep(asyncRoutes), data.routes))
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken() // must remove  token  first
          resetRouter()
          commit('RESET_STATE')
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
