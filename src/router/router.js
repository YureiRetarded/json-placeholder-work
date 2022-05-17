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
        path:'/',
        component:PostsPage
    },
    {
        path:'/',
        component:PhotosPage
    },
    {
        path:'/',
        component:ToDosPage
    },
    {
        path:'/',
        component:CommentsPage
    },
    {
        path:'/',
        component:AlbumsPage
    },
]
const router = createRouter({
    routes,
    history:createWebHashHistory(process.env.BASE_URL)
})
export default router;