<template>
  <div class="home">
    <div class="title">
      <h1>Always Forward,<br>Forward Always.</h1>
    </div>
    <div class="split"></div>
    <div class="content">
      <a href="#" class="item"></a>
      <a href="#" class="item"></a>
      <a href="#" class="item"></a>
      <a href="#" class="item"></a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: calc(50% - 25px) 50px calc(50% - 25px);
  align-content: center;
  padding: 0 3%;
  height: calc(100vh - (6vh + 50px) - 140px);

  .title {
  display: flex;
  align-items: center;
  height: 100%;  
  justify-content: center;
    h1 {
      text-align: right;
      font-weight: bold;
      font-style: italic;
      font-size: 2.5rem;
      margin-left: 10%;
      line-height: 1.7;
    }
  }
  .split {
    width: 50px;
    
    position: relative;
    &:before {
      position: absolute;
      content:'';
      width: 1px;
      height: 100%;
      background-color: #898989;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transform: rotate(20deg);
    }
  }
  .content {
    
    padding: 3%;
    display: grid;
    
    grid-template-columns: 150px 150px;
    grid-template-rows:150px 150px;
    grid-gap: 30px;
    justify-content: center;
    align-content: center;
    .item {
      background-color: #ccc;
    }

  }
}

</style>