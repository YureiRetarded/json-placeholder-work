<template>
    <div class="navbar">
        <div class="navbar__logo" @click="$router.push('/')">JSON</div>
        <div class="navbar__btns">
            <button @click="$router.push('/PostsPage')">PostsPage</button>
            <button @click="$router.push('/UsersPage')">UsersPage</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped >
.navbar{
    height: 50px;
    background-color: #5C80BC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}
.navbar__btns{
    display: flex;
    
}
button{
    background-color: #5C80BC;
    color: #CDD1C4;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin: 0 5px;
}
.navbar__logo{
    margin: 0 0 0 5px;
    cursor: pointer;
    color: #CDD1C4;
}
</style>