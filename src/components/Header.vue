<template>
    <header>
        <div class="logo-text">
            <p>jeremi<span class="type1">dée</span><span class="type2">dea</span><span class="type3">design</span></p>
        </div>
        <div class="logo-img">
            <div class="logo"></div>
        </div>
        <div class="nav">
            <router-link to="/">home</router-link>
            <router-link to="/about">about</router-link>
            <router-link to="/works">works</router-link>
            <a href="#">resume</a>
        </div>
    </header>
</template>

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
    padding: 3%;

    .logo-text {
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

            &.router-link-exact-active {
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
}
</style>