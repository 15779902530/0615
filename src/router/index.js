import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
    routes: [{
            path: "/",
            component: () =>
                import ('@/components/pages/Layout'),
            children: [{
                    path: "home",
                    component: () =>
                        import ('@/components/pages/Index'),
                    meta: { select: '/home' }
                },
                {
                    path: "user",
                    component: () =>
                        import ("@/components/pages/user/User"),
                    meta: { select: '/user' }
                },
                {
                    path: "user/add",
                    component: () =>
                        import ("../components/pages/user/UserInfo"),
                    meta: { select: '/user' }
                },
                {
                    path: "menu",
                    component: () =>
                        import ("@/components/pages/menu/Menu"),
                    meta: { select: '/menu' }
                },
                {
                    path: "menu/add",
                    component: () =>
                        import ("../components/pages/menu/MenuInfo"),
                    meta: { select: '/menu' }
                }
            ],
        },
        {
            path: "*",
            redirect: "/index"
        }
    ]
});
// 设置全局守卫
// router.beforeEach((to, from, next) => {
//     let userinfo = localStorage.getItem('user');
//     // 1、如果用户已登录，那么就执行默认路由规则
//     // 2、如果用户未登录，并且访问的不是登录页面，让他跳转到登录页面
//     // 3、如果访问的是登录页面，就执行默认路由规则
//     if (userinfo) {
//         console.log("已登录");
//         next("/index")
//     } else {
//         // 未登录
//         if (to.fullPath != "/login") {
//             next("/login")
//         } else {
//             next();
//         }
//     }
// })

export default router;