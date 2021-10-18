<template>
<div class="arch">
    <Com :image="image" :distro="distro" :altphoto="altphoto"/>
    
    <h2>What is Arch?</h2>
    <p>Arch Linux is a rolling release distribution. That means new kernel and application versions are rolled out to you as soon as they are released.</p>
   
   <p>The same goes for software. If a new version of software in the Arch repositories is released, Arch users get the new versions before other users most of the time.</p>
    
    <p>Everything is fresh and cutting edge in the rolling release model. You don’t have to upgrade operating system from one version to another. Just use the pacman command and you always have the latest version.</p>
    
    </div>
</template>

<script>
import '../assets/styles/_style.sass'
import Com from '@/components/DistrosComp.vue'
import im from '../assets/images/arch.jpg'

export default {
data(){
    return{ 
        image:im,
        distro:'Arch',
        altphoto:'Arch'
}
    },
    components:{
        Com,
    },
    
}

</script>