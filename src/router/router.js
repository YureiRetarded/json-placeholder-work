import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import PhotosPage from '@/pages/PhotosPage'
import ToDosPage from '@/pages/ToDosPage'
import CommentsPage from '@/pages/CommentsPage'
import AlbumsPage from '@/pages/AlbumsPage'
import UsersPage from '@/pages/UsersPage'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes=[
    {
        path:'/',
        component:MainPage
    },
    {
        path:'/PostsPage',
        component:PostsPage
    },
    {
        path:'/PhotosPage',
        component:PhotosPage
    },
    {
        path:'/ToDoPage',
        component:ToDosPage
    },
    {
        path:'/CommentsPage',
        component:CommentsPage
    },
    {
        path:'/AlbumsPage',
        component:AlbumsPage
    },
    {
        path:'/UsersPage',
        component:UsersPage
    }
]
const router = createRouter({
    routes,
    history:createWebHashHistory(process.env.BASE_URL)
})
export default router;