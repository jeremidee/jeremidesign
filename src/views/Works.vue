<template>
  <div class="works" id="works">
    <h1>works</h1>
    <div class="content">
      <router-link to="/works/politics" class="item">
        <img src="../assets/case1.png" class="item-img" alt="">
        <h3 class="item-title">canpro</h3>
        <span class="item-time">2018</span>
        <p class="item-text">A side project that working with colleagues inside the IBM Hackthon.</p>
        <div class="item-info">
          <div class="case-status">
            <img src="../assets/unlock.svg" alt="" class="lock locked">
            <span>open</span>
          </div>
          <div class="tag"> <span>UIUX/FE</span> </div>
        </div>
      </router-link>

      <div class="item" @click="checkPassword('lesenphants')">
        <img src="../assets/Artboard1.jpg" class="item-img" alt="">
        <h3 class="item-title">Les enphants</h3>
        <span class="item-time">2019</span>
        <p class="item-text">A LINE-based web application for the largest baby-care products company in Taiwan.</p>
        <div class="item-info">
          <div class="case-status">
            <img src="../assets/locked.svg" alt="" class="lock locked">
            <span>password needed</span>
          </div>
          <div class="tag"> <span>UI/FE</span> </div>
        </div>
      </div>

      <div class="item" @click="checkPassword('banking')">
        <img src="../assets/case4-1.jpg" class="item-img" alt="">
        <h3 class="item-title">Banking Projects</h3>
        <span class="item-time">2018-2019</span>
        <p class="item-text">Internet/Mobile banking app design project.</p>
        <div class="item-info">
          <div class="case-status">
            <img src="../assets/locked.svg" alt="" class="lock locked">
            <span>password needed</span>
          </div>
          <div class="tag"> <span>UI/FE</span> </div>
        </div>
      </div>

      <div class="item" @click="checkPassword('mobileFirst')">
        <img src="../assets/case3-1.png" class="item-img" alt="">
        <h3 class="item-title">Mobile First</h3>
        <span class="item-time">2018</span>
        <p class="item-text">A small UI project of IBM app management systems.</p>
        <div class="item-info">
          <div class="case-status">
            <img src="../assets/locked.svg" alt="" class="lock locked">
            <span>password needed</span>
          </div>
          <div class="tag"> <span>UI/FE</span> </div>
        </div>
      </div>

    </div>
    <app-password v-if="showModal" :class="{active:showModal}" :case-password="casePassword" :case-name="toCase"
      @close="showModal = false"></app-password>
  </div>
  
</template>

<script>
import appPassword from '../components/Password.vue';


export default {
  data() {
    return {
      casePassword:'jeremy',
      showModal:false,
      toCase:''
    }
  },
  methods: {
    checkPassword: function(name) {
      this.showModal=true;  
      this.toCase = name;
      console.log(this.toCase);
    }
  },
  components: {
    appPassword
  },
  

}
</script>


<style lang="scss" scoped>
  .works {
    width: 100%;
    max-width: 960px;
    margin: auto;
    margin-top: 100px;
    display: block;
    // height: calc(100vh - (6vh + 50px) - 140px);
    h1 {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        letter-spacing: 0.5px;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 100px;
    }

    .content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      // align-items: center;
      width: 100%;
      padding: 0;

      .item {
        text-decoration: none;
        display: block;
        border-radius: 10px;
        width: calc(50% - 20px);
        height: auto;
        position: relative;
        cursor: pointer;
        margin: 10px;
        flex-wrap: wrap;
        color: #2a2a2a;
        box-shadow: 0 0 6px 0 rgba(67, 71, 83, 0.12);
        transition: .3s;
        &:hover {
          transition: .3s;
          box-shadow: 2px 10px 6px 0 rgba(67, 71, 83, 0.12);
        }
        .item-img {
          width: 100%;
          height: 300px;
          display: block;
          object-fit: cover;
          border-radius: 10px 10px 0px 0px;
          margin-bottom: 1rem;
        }

        .item-title {
          text-decoration: none;
          font-weight: 700;
          font-size: 1.5rem;
          z-index: 2;
          transition: .3s;
          text-align: left;
          padding: 0 1rem;
          margin-bottom: 0.5rem;
        }

        .item-time {
          display: block;
          text-align: left;
          padding: 0 1rem;
          margin-bottom: 1rem;
          color: #898989;
        }

        .item-text {
          text-align: left;
          margin-bottom: 0.5rem;
          padding: 0 1rem;
        }

        .item-info {
          margin-top: 1rem;
          display: flex;
          padding: 10px;
          justify-content: space-between;

          .case-status {
            display: flex;
            align-items: center;

            img {
              width: 1rem;
              height: 1rem;
              margin-right: 5px;
            }

            span {
              font-size: 0.8rem;
            }
          }

          .tag {
            
            display: inline-block;
            text-decoration: none;
            text-align: right;
            padding: 4px 12px;
            border-radius: 10px 0px;
            background-color: #308BF4;
            z-index: 2;
            transition: .3s;

            span {
              display: inline-block;
              font-size: 0.9rem;
              color: #fff;
            }
          }
        }

      }
    }
  }

  @media all and (max-width: 500px){
    .works {
      .content {
        .item {
          width: 100%;
        }
      }
    }
  }


</style>