import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import View404 from "@/views/404/View404";
import Authentic from "@/views/authentic/Authentic";
import MainContainer from "@/views/MainContainer";
import Release from "@/views/post/Release";
import PostDetail from "@/views/post/PostDetail";
import Edit from "@/views/post/Edit";
import Tag from "@/views/tag/Tag";
import Search from "@/views/Search";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainContainer',
    component: MainContainer,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
    ]
  },
  {
    path: '/authentic',
    name: 'Authentic',
    component: Authentic,
    meta: {
      title : '欢迎加入福云',
      keepAlive: true
    }
  },
  {
    name: 'search',
    path: '/search',
    component: Search,
    meta: { title: '搜索' }
  },
  {
    path: '/post/release',
    name: 'PostRelease',
    component: Release,
    meta: {
        title : '分享新鲜事',
        keepAlive: true
    }
  },
  {
    path: '/path/:id',
    name: 'post-detail',
    component: PostDetail,
  },
  {
    name: 'tag',
    path: '/tag/:name',
    component: Tag,
    meta: { title: '帖子列表' }
  },
  {
    name: 'post-edit',
    path: '/post/edit/:id',
    component: Edit,
    meta: {
      title: '编辑'
    }
  },
  {
    path: '/404',
    name: '404',
    component: View404,
    meta: {
      title: '你迷路啦',
      keepAlive: true
    }
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes
})

export default router
