<template>
    <div class="case">
        <img src="../../assets/case1.png" alt="politics case mobile show." class="full-width">
        <div class="case-container">
            <h1>/ canpro /</h1>
            <p class="case-intro">In Aug, 2018, when the Taipei Mayor & Legislator Election is about to start, we notice that there is a annoying problems needs to be solve. <br><b>The Political Paper</b>. </p>
            <img src="../../assets/paper.jpg" alt="">
            <h2 class="big-title">" It is a massive gap for people to read the political paper, so most of the voters don't understand what the candidate did, or what they will do for voters. "</h2>
            <p>To find out what and when would affect the voter decision, and what's the key factors that they don't count on the paper to make their decision, we decide to figure out the voter's decision flow.</p>
            <div class="gap"></div>
            
            <h2>As-Is Scenario Map: What is the voter's journey ?</h2>
            <p>Hence, we collect data from mutiples interviewers, making a As-is Scenario Map to explain the whole journey while the voter get to the election.</p>
            <img src="../../assets/case1-3.png" alt="As-is Scenario Map">
            <div class="gap"></div>
            
            <h2>The Paint Points</h2>
            <p>We choose some of the significant problems and user pain points from the As-Is journey above:</p>
            <img src="../../assets/case1-2.png" alt="user pain points">
            <ul class="pain-points">
                <li>Voter didn’t receive the Politics Paper before the election.</li>
                <li>Voter feel that the Paper is too thick and hard to read, then it result in making bad decision.</li>
                <li>Some voters focus on some specific issues, but these issues cannot  reveal on and be classified by the Paper.</li>
                <li>Some voters needs more information about the candidates, but it cannot be concluded on the Paper.</li>
            </ul>
            <div class="gap"></div>
            
            <h2>Define the Information Architecture</h2>
            <p class="case-txt">After analyzing all the pain points and the voter's journey, we conclude the idea and have an Information Architecture of this new platform for the voter.</p>
            <img src="../../assets/case1-4.png" alt="Information Architecture of platform">
            <div class="gap"></div>
            
            <h2>Logic Flow</h2>
            <p>Then, we based on the IA, draw a logic flow of this platform, to make sure the platform meet the usability principle.</p>
            <img src="../../assets/canpro_logicflow.svg" alt="Logic flow of this product" class="align-paragraph">
            <div class="gap"></div>

            <h2>Begin to Sketch</h2>
            <img src="../../assets/case1-5.jpg" alt="" class="align-paragraph">
            <div class="gap"></div>
            
            <h2>Introducing the new search platform: canpro </h2>
            <img src="../../assets/case1-8.jpg" alt="" class="align-paragraph">
            <p>We design a new platform, that the voter can easily search for the candidate's political view, without browsing all the list in the Political Paper.</p>
            <img src="../../assets/case1-6.jpg" alt="">
            <p>Also, the voter can easily understand the specific candidate's focused issues through the radar chart.</p>
            <img src="../../assets/case1-7.jpg" alt="">
            <div class="gap"></div>
            <div class="figma">
                <iframe style="border: none;" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FP9puMSKJm4aqB5OsF3Ng52%2Fcanpro%3Fnode-id%3D0%253A2%26viewport%3D-991%252C178%252C0.4206264019012451%26scaling%3Dscale-down" allowfullscreen></iframe>
            </div>
            <div class="gap"></div>
        </div>
        <img src="../../assets/case1.png" alt="politics case mobile show." class="full-width">

    </div>
</template>
<style lang="scss" scoped>
    #app main .case .case-container h2.big-title {
        grid-column: 2/12;
        font-family: initial;
    }
    #app main .case .case-container {
        .pain-points {
            grid-column: 2/12;
            margin: 50px 0;
            list-style: none;
            
            li {
                font-size:20px;
                margin: 30px 0;
                margin-left: 20px;
                position: relative;
                &:before {
                    content:''; 
                    position: absolute;
                    display: block;
                    width:20px;
                    height:20px;
                    left: -30px;
                    
                    background-image: url('../../assets/icon_confused.svg');
                    background-repeat: no-repeat;
                    background-size: 100%;
                }
            }
        }
    }
</style>