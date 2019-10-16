<template>
  <div class="about">
    
    <div class="content">
      <h2>Hi there, I'm Jeremy</h2>
      <img src="../assets/aboutme.jpg" alt="about me">
      <div class="quote">
        <p>I'm a UI designer/Front-end developer who lives in London.</p>
        <p>With all my heart in design, I believe that all the products that we design is about user. And I am obsessed with solving user's problems by using design and coding.</p>
        <p>I have developed an interdisciplinary skillset and bring strong interaction design, problem solving and product strategy skills, allowing me to design solutions in a holistic way.</p>
        <p>and...wait!</p>
        <p>I am a dog-person, basketball fan (yeah, Let's go mavs), playing bass guitar and love hip-hop music(u feel me? ) and my favorite line is:</p>        
        <p>"Always forward, forward always." -pop, the Luke Cage</p>
        <div class="contact-block">
          <p>feel free to connect me with</p>
          <a href="https://www.linkedin.com/in/jeremidesign/" class="icon-link">
            <img src="../assets/linkedin.svg" alt="">
            <span>LikedIn</span>
          </a>
          <a href="mailto:jeremidee@gmail.com" class="icon-link">
            <img src="../assets/mail.svg" alt="">
            <span>Email</span>
          </a>
          <a href="http://facebook.com/jeremidee" class="icon-link">
            <img src="../assets/fb.svg" alt="">
            <span>Facebook</span>
          </a>
        </div>
        <p>cheers!</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .about {
    width: 100%;
    padding: 0 3%;
    min-height: calc(100vh - (6vw + 50px) - 132px);
    .content {
      width: 100%;
      display: grid;
      grid-template-areas: 
        "title images"
        "quote images";
      grid-template-columns: 50% 50%;
      // padding: 5%;
      h2 {
        grid-area: title;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        text-align: left;
        font-size: 2rem;
        margin: 10px 0;
        padding: 0 3%;
      }
      img {
        grid-area: images;
        max-width: 100%;
        height: 70%;
        display: block;
        object-fit: contain;
        align-self: start;
        justify-self: center;
      }
      .quote {
        grid-area: quote;
        padding: 3%;
        p {
          text-align: left;
          margin-bottom: 10px;
          font-size: 1rem;
          line-height: 1.8;
          letter-spacing: 0.03em;
        }
        .contact-block {
          margin: 2rem 0;
          a {
            display: inline-block;
            color:#2a2a2a;
            text-decoration: none;
            margin-right: 2rem;
            img {
              display: inline-block;
              width: 24px;
              height: 24px;
              vertical-align: middle;
              margin-right: 5px;
            }
          }
        }
      }
      
    }
  }

@media all and (max-width: 768px){
  .about{
    height: auto;
    .content {
      grid-template-columns: 100%;
      grid-template-areas: 
          "images"
          "title"
          "quote";
      img {
        width: 100%;
        height: 200px;
      }
    }
  }
}

</style>