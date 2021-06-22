<template>
    <div class="app">
        <Category title="遊戲">
            <template slot="game">
                <ul>
                    <li v-for="game in gameArr" :key="game.id">
                        {{game.name}} --- {{game.price}}
                    </li>
                </ul>
            </template>
            
        </Category>
        <Category title="美食">
            <template slot="meishi">
                <img :src="foodUrl" alt="">
            </template>
        </Category>

        <Category title="視頻">
            <template slot="movie">
                <video controls :src="videoUrl"></video>
            </template>
        </Category>
        
    </div>
</template>

<script>
import Category from './components/Category'

export default {
    name:'App',
    components:{Category,},
    data(){
        return{
            gameArr:[
                {id:'001',name:'亡者榮耀',price:100},
                {id:'002',name:'絕地求生',price:200},
                {id:'003',name:'使命招喚',price:300},
                {id:'004',name:'穿越火線',price:400},
            ],
            foodUrl:'https://www.gomaji.com/blog/wp-content/uploads/2021/01/136956688_1083656075409882_948231958934561564_n.jpg',
            videoUrl:'',
        }
    }
}
</script>

<style>
    .app{
        display: flex;
        justify-content: space-around;
    }
    
</style>