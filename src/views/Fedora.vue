<template>
    <Com :image="image" :distro="distro" :altphoto="altphoto" />
    
    <p>Fedora creates an innovative, free, and open source platform for hardware, clouds, and containers that enables software developers and community members to build tailored solutions for their users.</p>

<h2>Fedora Workstation</h2>
<p>Fedora Workstation is a polished, easy to use operating system for laptop and desktop computers, with a complete set of tools for developers and makers of all kinds.</p>

<h2>Fedora Server</h2>
<p>Fedora Server is a powerful, flexible operating system that includes the best and latest datacenter technologies. It puts you in control of all your infrastructure and services.</p>

<h2>Fedora Iot</h2>
<p>Fedora IoT provides a trusted open source platform as a strong foundation for IoT ecosystems.</p>
</template>

<script>
import Com from "@/components/DistrosComp.vue";
import img from '../assets/images/Fedora34.jpg.webp'
export default {
    data () {
        return {
            image:img,
            distro:'Fedora',
            altphoto:'Fedora'
        }
    },
    components:{
        Com,
    }
}
</script>