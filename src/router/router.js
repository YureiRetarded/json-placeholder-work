import MainPage from '@/Pages/MainPage'
import PostsPage from '@/Pages/PostsPage'
import PhotosPage from '@/Pages/PhotosPage'
import ToDosPage from '@/Pages/ToDosPage'
import CommentsPage from '@/Pages/CommentsPage'
import AlbumsPage from '@/Pages/AlbumsPage'
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