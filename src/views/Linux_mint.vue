<template>
    <Com :image="image" :distro="distro" :altphoto="altphoto" />

    <h2>What is Linux Mint?</h2>
    <p>Linux Mint is an operating system for desktop and laptop computers. It is designed to work 'out of the box' and comes fully equipped with the apps most people need.</p>
</template>




<script>
import '../assets/styles/_style.sass';
import Com from '../components/DistrosComp.vue'
import img from '../assets/images/linux-mint.png'

export default {
    data: function(){
        return {
            image:img,
            distro:'Linux Mint',
            altphoto:'Linux Mint'
        }
    },
    components: {
        Com,
    }

}
</script>