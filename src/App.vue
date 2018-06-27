<template lang="pug">
	#app
		img(src="https://media.freepik.com/accounts/img/badges/you_are_on_top.png")
		h1 PlatziMusic
		ul
			li(v-for="artist in artists") {{artist.name}}
</template>

<script>
// no hace falta poner index js 
import getArtist from './api'
export default {
  name: "app",
  data() {
    return {
     artists:[]
    }
  },
  mounted: function(){
    const self = this;
    getArtist()
      .then(function(artists){
        console.log(artists)
        self.artists = artists;
      });
  }
};
</script>

<style lang="stylus">

</style>
