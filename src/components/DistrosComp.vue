<template>
<div class="component">
    <h1>{{distro}}</h1>
<hr>

<br>
<br>

<button @click='togglepic'>{{action}}</button>
<br>
<br>
<img :src="image" :alt="altphoto" v-if="isVisible">

    </div>
</template>

<script>
import '../assets/styles/_style.sass'

export default {
    data() {
        return {
            isVisible: true,
            action:'Hide Picture'
        }
    },
    name:"DistrosComponent",
    props:['image','distro','altphoto'],
    methods: {
        togglepic(){
            this.isVisible = !this.isVisible
            if(this.isVisible == false){
                this.action = 'Show Picture'
            }
            else{
                this.action = 'Hide Picture'
            }
        }
    }
}
</script>