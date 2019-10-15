<template>
  <div class="home">
    <div class="home-text">
      <h1>This is Jeremy<br> a UI / Front-End designer</h1>
      <p>I’m a Front-End designer who cares about designing enjoyable products for users with my passion about front-end techniques.</p>
      <p>Having worked in various project in IBM iX, most of the project are banking related. I’m experienced in <b>web design</b>, <b>UI prototypes</b>, and recently dig into User experience research area.</p>
      <div class="more">
        <div class="home-button" @click="scrollToWorks">What I've done?</div>
        <!-- <router-link to="/about" class="home-button">What I've done?</router-link> -->
      </div>
    </div>
    <div class="home-img">
      <img src="../assets/Square.svg" alt="">
    </div>
    <app-works></app-works>
  </div>
</template>

<script>
// @ is an alias to /src
import appWorks from '../views/Works.vue';

export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  mounted (){
    
  },
  methods: {
    scrollToWorks(){
      document.getElementById("works").scrollIntoView({
        behavior:'smooth'
      });
    }
  },
  components: {
    appWorks
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 0 3%;
  // height: calc(100vh - (6vh + 50px) - 140px);
  display: grid;
  // grid-template-columns: repeat(12, 1fr);
  grid-template-areas: 
        "text image"
        "works works";
  grid-template-columns: repeat(1, 50% 1fr);
  // grid-column-gap: 16px;
  .home-text {
    grid-area: text;
    // grid-column: 1/8;
    h1 {
      text-align: left;
      font-size: 3rem;
      line-height: 1.5;
      margin: 1rem 0;
      font-family: 'Playfair Display', serif;
    }
    p {
      font-size: 1.5rem;
      margin: 1rem 0;
    }
    .more {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      .home-button {
        display: block;
        padding: 10px 24px;
        border: 1px solid #2a2a2a;
        color:#2a2a2a;
        border-radius: 24px;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
  .home-img {
    // grid-column: 8/13;
    grid-area: image;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    img {
      display: block;
      width: 90%; 
      height: 100%;
    }
  }
  .works {
    grid-area: works;
    // grid-column: 1/13;
    
  }

}
@media all and (max-width: 768px){
  .home {
    grid-template-areas: 
        "image image"
        "text text"
        "works works";
    
    .home-text {
      // grid-column: 1/13;
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
    .home-img {
      margin-top: 50px;
      grid-column: 1/13;
      height: auto;
      justify-content: center;
      img {
        width: 100%;
        height: 250px;
      }
    }
  }
}


</style>