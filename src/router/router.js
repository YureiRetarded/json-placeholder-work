import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import PhotosPage from '@/pages/PhotosPage'
import ToDosPage from '@/pages/ToDosPage'
import CommentsPage from '@/pages/CommentsPage'
import AlbumsPage from '@/pages/AlbumsPage'
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
]
const router = createRouter({
    routes,
    history:createWebHashHistory(process.env.BASE_URL)
})
export default router;