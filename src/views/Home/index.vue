<template>
    <div class="home">
        <Header /> 
        <router-view></router-view>
        <TabBar />
    </div>
</template>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
export default {
    name:'home',
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){},
    components:{
        Header,
        TabBar
    }
}
</script>

<style scoped>
.home{
    width: 100%;
    height: 100%;
}
 </style>