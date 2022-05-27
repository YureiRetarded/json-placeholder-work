<template>
    <div class="container b1">
        <div class="row">
            <div class="col-sm">
                <div class="user-basic-info">
                    <div class="user-basic-info__name"><h1>{{user.name}}</h1></div>
                    <div class="user-basic-info__email"><h4>Email: {{user.email}}</h4></div>
                    <div class="user-basic-info__phone"><h4>Phone: {{user.phone}}</h4></div>
                    <div class="user-basic-info__website"><h4>WebPage: <a :href="'https://'+user.website">{{user.website}}</a> </h4></div>
                </div>
            </div>
            <div class="col-sm">
                <div class="user-adress">
                    <div class="user-adress__title"><h1>Adress</h1></div>
                    <div class="user-adress__city"><h4>City: {{user.address.city}}</h4></div>
                    <div class="user-adress__street"><h4>Street: {{user.address.street}}</h4></div>
                    <div class="user-adress__suite"><h4>Suite: {{user.address.suite}}</h4></div>
                    <div class="user-adress__zipcode"><h4>Zipcode: {{user.address.zipcode}}</h4></div>
                    <div class="user-adress__geo"><h4>Geo: <a :href="'https://www.google.com/maps/search/?api=1&query='+user.address.geo.lat+'%2C'+user.address.geo.lng">{{user.address.geo.lat}}, {{user.address.geo.lng}} </a></h4></div>
                </div>
            </div>
            <div class="col-sm">
                <div class="user-work">
                    <div class="user-adress__title"><h1>Work</h1></div>
                    <div class="user-adress__city"><h4>Company name: {{user.company.name}}</h4></div>
                    <div class="user-adress__street"><h4>CatchPhrase: {{user.company.catchPhrase}}</h4></div>
                    <div class="user-adress__suite"><h4>Bs: {{user.company.bs}}</h4></div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="container b2">
        <button type="button" class="btn btn-secondary" data-bs-toggle="collapse" data-bs-target="#collapseAlbums" aria-expanded="false" aria-controls="collapseAlbums"><h3>Albums</h3></button>
        <div class="collapse" id="collapseAlbums">
            <albums-list :albums="albums"/>
        </div>  
    </div>
    <div class="container b3">
        <posts-list :posts="posts"/>
    </div>
    

</template>
<script>
import axios from 'axios'
import AlbumsList from "@/components/AlbumsList"
import PostsList from '@/components/PostsList'
export default {
 components:{
        AlbumsList,PostsList
    },
    data(){
        return{
            user_id:0,
            user:{},
            albums:[],
            posts:[]
        }
    },
    methods:{
        async fetchUser(userId){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/users?id='+userId)
                this.user = responce.data[0]
            }
            catch(e){
                alert(e)
            }

        },
        async fetchAlbums(userId){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/albums?userId='+userId)
                this.albums = responce.data
            }
            catch(e){
                alert(e)
            }

        },
        async fetchPosts(userId){
            try{
                const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
                this.posts = responce.data
            }
            catch(e){
            alert(e)
            }

        }
    },
    created(){
        this.user_id=this.$route.params.id
        this.fetchUser(this.user_id);
        this.fetchAlbums(this.user_id);
        this.fetchPosts(this.user_id)
    } 
}
</script>
<style scoped lang="scss">
a{
    text-decoration: none;
    color: #000;
}
.b1, .b2, .b3{
    margin-bottom: 20px;
}
</style>