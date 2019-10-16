<template>
    <header ref="header">
        <div class="logo-text">
            <p>jeremi<span class="type1">dée</span><span class="type2">dea</span><span class="type3">design</span></p>
        </div>
        <router-link to="/" class="logo-img">
            <div class="logo"></div>
        </router-link>
        <div class="nav" :class="{active: navIsActive}" ref="nav">
            <router-link to="/" @click.native="navIsActive = false">works</router-link>
            <router-link to="/about" @click.native="navIsActive = false">about</router-link>
            <a href="#">resume</a>
        </div>
        <div class="burger" :class="{cross: navIsActive}" @click="navIsActive = !navIsActive">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            navIsActive:false
        }
    },
    methods: {
        handleScroll() { 
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const header =  this.$refs['header'];
            const headerHeight = header.offsetHeight;
            if (scrollTop <= headerHeight) {
                header.classList.remove('scroll');
            } else {
                header.classList.add('scroll') 
            }
        },

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    
}
</script>


<style lang="scss" scoped>

@keyframes logo_animate {
    0% {
        transform: translateY(0px);
    }

    100% {
        transform: translateY(-33px);
    }
}

@keyframes logo_animate2 {
    0% {
        transform: translateY(-33px);
    }

    100% {
        transform: translateY(-66px);
    }
}

@keyframes bgchange {
    from {
        background-color: transparent;
        color: inherit;
    }

    to {
        background-color: #308BF4;
        color: #fff;
    }
}

@keyframes logospin {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

header {
    display: grid;
    grid-template-columns: 40% 20% 40%;
    width: 100%;
    align-content: center;
    padding: 15px 3%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    transition: .3s;    
    &.scroll {
        background-color: #fff;    
        z-index: 999;
        transition: .3s;
        box-shadow: 0 4px 10px 0 rgba(100, 100, 100, 0.1);
    }
    .logo-text {
        align-self: center;
        p {
            text-align: left;
            font-weight: 700;
            font-size: 2rem;
            position: relative;
            overflow: hidden;

            span {
                display: inline-block;
                position: absolute;
                bottom: -33px;
                left: 81px;

                &.type1 {
                    bottom: 0;
                    animation: logo_animate 1s ease-in-out forwards;
                }

                &.type2 {
                    animation: logo_animate 1s ease-in-out 0s forwards,
                        logo_animate2 1s ease-in-out 1s forwards;
                }

                &.type3 {
                    animation: logo_animate 1s ease-in-out 1s forwards,
                        bgchange .3s ease-in 2s forwards;
                }

            }
        }
    }
    .logo-img {
        display: block;
    }
    .logo {
        width: 50px;
        height: 50px;
        margin: auto;
        background-image: url('../assets/logo.svg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        animation: logospin 5s linear forwards infinite;
    }

    .nav {
        display: flex;
        justify-content: flex-end;
        text-align: right;
        align-items: center;

        a {
            font-weight: 700;
            text-decoration: none;
            font-size: 1.2rem;
            display: inline-block;
            margin: 0 10px;
            color: #3A3A3A;
            position: relative;
            
            &:last-child {
                margin-right: 0;
            }

            &.router-link-exact-active{
                &:before {
                    position: absolute;
                    content: '';
                    display: block;
                    width: 110%;
                    height: 2px;
                    background-color: #308BF4;
                    bottom: 0;
                    right: 0;
                }
            }
        }
    }
    .burger {
        justify-self: end;
        align-self: center;
        display: none;
        width: 30px;
        height: 30px;
        position: relative;
        margin-right: 10px;
        span {
            display: block;
            width: 20px;
            height: 3px;
            background-color: #2a2a2a;
            position: absolute;
            left: 10px;
            transition: .3s;
            &:first-child {
                top: 5px;
            }
            &:nth-child(2){
                top: 13px;
            }
            &:nth-child(3){
                opacity: 1;
                top: 22px;
            }
        }
        &.cross {
            span {
                transition: .3s;
                &:first-child {
                    top: 13px;
                    transform: rotate(-45deg);
                }
                &:nth-child(2){
                    // top: 5px;
                    transform: rotate(45deg);
                }
                &:nth-child(3){
                    display: none;
                }
            }
        }
    }
}

@media all and (max-width: 768px){
    header {
        // position: relative;

        .logo-text {
            margin-left: 10px;
            p {
                font-size: 1.5rem;
                span {
                    left: 61px;
                }
            }
        }
        
        .nav {
            position: fixed;
            top: 0;
            left: 100%;
            bottom: 0%;
            opacity: 0;
            right: 0;
            z-index: -1;
            background-color: #fff;
            width: 100vw;
            display: block;
            margin-top: calc(22px + 50px);
            transition: all .3s;
            a {
                width: 100px;
                display: block;
                text-align: center;
                margin:30px auto;
                font-size: 2rem;
                &:last-child {
                margin-right: auto;
            }
            }
            &.active {
                // bottom: calc((7vh + 50px) * (-1));
                left: 0;
                
                opacity: 1;
                z-index: 9999;
                transition: all .3s;

            }
        }
        .burger {
            display: block;
        }
    }    
}


</style>