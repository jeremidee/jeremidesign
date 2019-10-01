<template>
  <footer>
    <p class="name">Jeremy Huang</p>
    <p class="title">An Interaction / Front-End <span>Designer</span></p>
    <div class="footer-middle">
      <ul>
        <li>
          <a href="#" class="icon">
            <img src="../assets/linkedin.svg" alt="linkedin">
          </a>
        </li>
        <li>
          <a href="#" class="icon">
            <img src="../assets/mail.svg" alt="linkedin">
          </a>
        </li>
        <li>
          <a href="#" class="icon">
            <img src="../assets/fb.svg" alt="linkedin">
          </a>
        </li>
      </ul>
      <p class="copyright">© 2019 jeremidesign</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer {
    padding:0 3% 15px;
    position: absolute;
    bottom: 0;
    width: 100%;
    > p {
      text-align: right;
      font-size: 1.5rem;
      margin-bottom: 10px;
      font-style: italic;
      letter-spacing: -1px;
    }

    .footer-middle {
      font-size: 14px;
      text-align: center;
      margin-top: 10px;
      ul {
        list-style: none;
        margin-bottom: 5px;
        li {
          display: inline-block;
          font-size: 0;
          margin: 0px 10px;
          a {
            display: inline-block;
            text-align: center;
            img {
              width: 16px;
              height: 16px;
            }
          }
        }
      }
      p {
        font-weight: 700;
      }
    }
  }
</style>
