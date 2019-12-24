import Vue from 'vue'

import VueRouter from 'vue-router'
import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Collections from '@/views/Collections.vue'
import CollectionDetail from '@/views/CollectionDetail.vue'
import Articles from '@/views/Articles.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Users from '@/views/Users.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserFans from '@/views/UserFans.vue'
import UserFollows from '@/views/UserFollows.vue'
import Topics from '@/views/Topics.vue'
import Sign from '@/views/SignIn.vue'
import Regition from '@/views/Regition.vue'
import Liberty from '@/views/Liberty.vue'
import NewArticle from '@/views/NewArticle.vue'
import UserDetailOne from '@/views/UserDetailOne.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Nav,
		children: [{
				path: '/',
				redirect: '/sign-in'
			},
			{
				path:'articledetail',
				component: ArticleDetail
			},
			{
				path:'newarticle',
				component: NewArticle
			},
			{
				path:'userdetail',
				component: UserDetail
			},
			{
				path:'userfollows',
				component: UserFollows
			},
			{
				path:'liberty',
				component: Liberty
			},
			{
				path: 'index',
				component: Index
			},
			{
				path: 'userdetailone',
				component: UserDetailOne
			},
			{
				path:'regition',
				component:Regition
			},
			{
				path:'topics',
				component:Topics
			},
			// {
			// 				path: 'topics/:id',
			// 				component: TopicDetail
			// 			},
			{
				path: 'collections',
				component: Collections,
				children: [{
					path: ':id',
					component: CollectionDetail
				}]
			},
			{
					path: 'articles',
					component: Articles,
			},
			{
							path: 'article/:id',
							component: ArticleDetail
						},
			// {
			// 	path: 'articles',
			// 	component: Articles,
			// 	children: [{
			// 		path: ':id',
			// 		component: ArticleDetail
			// 	}]
			// },
			
			{
				path: 'users',
				component: Users,
				children: [
					// {
					// 	path: 'follows',
					// 	component: UserFollows
					// },
					
					{
						path: 'fans',
						component: UserFans
					},
					{
						path: 'user/:id',
						component: UserDetail
					}
				]
			},

		]
	},
	{
		path: '/sign-in',
		component: Sign
	}
]

const router = new VueRouter({
	routes
})

export default router