<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <transition name="fade" type="out-in">
        <router-view></router-view>
      </transition>
      <transition  name="fade" type="out-in">
        <router-view name="works"></router-view>
      </transition>
    </main>
    <app-footer></app-footer>
    

  </div>
</template>
<script>

import appFooter from './components/Footer.vue';
import appHeader from './components/Header.vue';

export default {


  components: {
    appFooter,
    appHeader,
    // appPassword
  }
}
</script>


<style lang="scss">

@import url('https://unpkg.com/normalize.css@8.0.1/normalize.css');
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Yantramanav:400,500,700&display=swap');

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}
html,body {
  font-size: 16px;
}

@mixin mobile768(){
    @media all and (max-width: 768px){
        @content;
    }
}

#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'Yantramanav', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #3A3A3A;
  min-height: 100vh;

  main {
    // min-height: calc(100vh - (6vh + 50px) - 140px);
    position: relative;
    margin: 30px 0;
    margin-top: 110px;
    .title {
     
      h1 {
        text-align: left;
        font-weight: 400;
        // font-style: italic;
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        margin-left: 10%;
        line-height: 1.7;
      }
    }



    // CASE STUDY
    .case {
      width: 100%;
      .full-width {
        width: 100%;
        display: block;
        height: auto;
      }
      .case-container {
        width: 100%;
        max-width: 960px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        // grid-column-gap: 16px;
        margin: 0 auto;

        .col-half-left {
          grid-column: 1/7;
          width: 100%;
          margin: 50px 0;
        }
        .col-half-right {
          grid-column: 7/13;
          width: 100%;
          margin: 50px 0;
        }
        .gap {
          grid-column: 1/13 ;
          width: 100%;
          margin: 100px 0;
        }

        h1 {
          grid-column: 1/13 ;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          letter-spacing: 0.5px;
          font-size: 2.5rem;
          text-align: center;
        }

        h2 {
          grid-column: 3/11;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          text-align: left;
          font-size: 1.6rem;
          margin: 40px 0;
        }

        .case-info {
          grid-column: 1/13;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 50px 0;
          background-color: #ccc;
          ul {
            list-style: none;
            li {
              text-align: left;
              margin: 10px 0;
              font-size: 18px;
              .list-title {
                text-align: left;
                font-weight: bold;
                margin-right: 15px;
              }
            }
          }
        }


        p {
          grid-column: 3/11;
          line-height: 1.5;
          text-align: left;
          position: relative;
          margin: 40px 0;
          font-size: 18px;
          &.case-intro {
            margin: 50px 0;
            padding: 0 20px;

            &:before {
              font-family: inherit;
              font-size: 200%;
              content: '"';
              display: block;
              position: absolute;
              left: 0;
              top: -20px;
            }
            &:after {
              font-family: inherit;
              font-size: 200%;
              content: '"';
              display: block;
              position: absolute;
              right: 0;
              bottom: -20px;
            }
          }
        }
        img {
          grid-column: 1/13;
          width: 100%;
          display: block;
          height: auto;
          &.align-paragraph {
            grid-column: 3/11;
          }
        }
      

      }
      img {
          width: 100%;
          display: block;
          height: auto;
      }
      .figma {
        grid-column: 2/12;
        max-width:960px;
        display: flex;
        justify-content: center;
        
      }
    }// CASE STUDY

    

    //RWD 
    @include mobile768{
      .modal .input-block {
        width: 70%;
      }

      .case {
        .case-container {
          .figma iframe {
              width: 100%;
            }
          p,
          p.case-intro {
            grid-column: 2/12;
          }
          img.align-paragraph {
            grid-column: 2/12;
          }
          h2 {
            grid-column: 2/12;
          }
        }
        
      }
      
    }
  }



}

@keyframes slideFadeIn {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slideFadeOut {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  animation: slideFadeIn 1s ease-in-out forwards;  
  transition: opacity 1s;
}
.fade-enter-to {

}

.fade-leave {
  // opacity: 1;
}
.fade-leave-active {
  animation: slideFadeOut 1s ease-in-out forwards;  
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.fade-leave-to {
  opacity: 0;
}
</style>
