<template>
<div class="ubuntu">
    <Com :image="image" :distro="distro" :altphoto="altphoto" />

<p>Ubuntu comes with everything you need to run your organisation, school, home or enterprise. All the essential applications, like an office suite, browsers, email and media apps come pre-installed and thousands more games and applications are available in the Ubuntu Software Centre.</p>
<p>Canonical is the global software vendor that provides commercial, design and engineering support to the Ubuntu project. Today, the hardware enablement team supports the pre-installation of Ubuntu on hundreds of laptops and workstations, worldwide.</p>
</div>
</template>

<script>
import '../assets/styles/_style.sass'
import Com from '../components/DistrosComp.vue'
import img from '../assets/images/ubuntu.jpg'

export default {
    data () {
        return {
            image:img,
            distro:"Ubuntu",
            altphoto:'Ubuntu'
        }
    },
    components:{
        Com
    }
    
}
</script>