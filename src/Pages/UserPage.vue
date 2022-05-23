<template>
     <div class="user__wrapper">
        <div class="user-basic-info">
            Basic info
            <div class="user__name">{{user.name}}</div>
            <div class="user__email">{{user.email}}</div>
            <div class="user__phone">{{user.phone}}</div>
            <div class="user__website">{{user.website}}</div>
        </div>
        <div class="user-address">
            Address
            <div class="user-address__street">{{user.address.street}}</div>
            <div class="user-address__suite">{{user.address.suite}}</div>
            <div class="user-address__city">{{user.address.city}}</div>
            <div class="user-address__zipcode">{{user.address.zipcode}}</div>
            <div class="user-address__coordinates">Coordinates
                <div>
                    lat:{{user.address.geo.lat}}
                </div>
                <div>
                    lng:{{user.address.geo.lng}}
                </div>
            </div>
        </div>
        <div class="user-work">
            Work
            <div class="company__name">{{user.company.name}}</div>
            <div class="company__catchPhrase">{{user.company.catchPhrase}}</div>
            <div class="company__bs">{{user.company.bs}}</div>
        </div>
    </div>
    <div class="user__album">
    Albums
    <albums-list :albums="albums"/>
    </div>

</template>
<script>
import axios from 'axios'
import AlbumsList from "@/components/AlbumsList"
export default {
 components:{
        AlbumsList
    },
    data(){
        return{
            user_id:0,
            user:{},
            albums:[]
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

        }
    },
    created(){
        this.user_id=this.$route.params.id
        this.fetchUser(this.user_id);
        this.fetchAlbums(this.user_id);
    } 
}
</script>
<style>
    .user__wrapper{
        font-size: 25px;
        color: #CDD1C4;
        padding: 10px;
        margin: 10px;
        cursor: pointer;
        display: flex;
    }
    .user-address {
        margin: 0 30px;
    }
    .user__album{
        font-size: 50px;
        color: #CDD1C4;
        margin: 10px;
    }
</style>