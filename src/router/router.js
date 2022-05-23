import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import PostPage from '@/pages/PostPage'
import PhotosPage from '@/pages/PhotosPage'
import ToDosPage from '@/pages/ToDosPage'
import AlbumsPage from '@/pages/AlbumsPage'
import UsersPage from '@/pages/UsersPage'
import UserPage from '@/pages/UserPage'
import AlbumPage from '@/pages/AlbumPage'
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
        path:'/PostsPage/:id',
        component:PostPage
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
        path:'/AlbumsPage',
        component:AlbumsPage
    },
    {
        path:'/AlbumsPage/:id',
        component:AlbumPage
    },
    {
        path:'/UsersPage',
        component:UsersPage
    },
    {
        path:'/UsersPage/:id',
        component:UserPage
    },
]
const router = createRouter({
    routes,
    history:createWebHashHistory(process.env.BASE_URL)
})
export default router;