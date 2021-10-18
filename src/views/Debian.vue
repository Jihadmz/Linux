<template>
  <div class="debian">
    <Com :image="image" :distro="distro" :altphoto="altphoto"/>

    <p>Debian is well-known for its stability. The stable version tends to provide older versions of software, so you may find yourself running code that came out several years ago. But that means you're using software that has had more time for testing and with fewer bugs. You can open your computer on a daily basis with a low likelihood of any surprises.</p>
    <p>Debian doesn't have a regular release schedule. New versions come out when they're ready, which tends to be around every two to three years. The gap tends to be even longer than the long-term support versions of Ubuntu.</p>
  </div>
</template>

<script>
import '../assets/styles/_style.sass'
import Com from '../components/DistrosComp.vue'
import img from '@/assets/images/debian_photo.png'

export default{
  data () {
    return {
      image:img,
      distro:'Debian',
      altphoto:'Debian'
    }
  },
components:{
  Com,
}
}
</script>
