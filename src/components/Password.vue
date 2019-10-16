<template>
    <transition name="fade">
        <div class="modal">
            <div class="input-block">
                <h3>Please enter the password:</h3>
                <div class="input">
                    <input type="password" class="password" v-model="userInput" @focus="check=true">
                    <div class="error" v-if="!check">Oops! wrong password, please try again!</div>
                </div>
                <div class="btn-grp">
                    <div class="cancel" @click="$emit('close')">CLOSE</div>
                    <div class="submit" @click="checkPsw">CONFIRM</div>
                </div>
            </div>
        </div>
    </transition>
    
</template>

<script>
export default {
    props:['casePassword','caseName'],
    data(){
        return {
            userInput:'',
            password:this.casePassword,
            check:true,
            routesTo:this.caseName,
        }
    },
    methods: {
        checkPsw(){
            if ( this.userInput == this.password ){
                console.log('pass');
                this.$router.push('/works/'+this.routesTo);
            } else {
                this.check=false;
            }
        },
        
    }
}
</script>


<style lang="scss">

    .modal {
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.3);
        &.active {
            display: flex;
        }
        .input-block {
            width: 50%;
            max-width: 500px;
            padding: 3%;
            background-color: #fff;
            border-radius: 10px;
            h3 {
                text-align: center;
                font-size: 1.5rem;
                margin: 20px 0;
                font-weight: 300;
            }
            .input {
                margin: 20px auto;
                input {
                    padding: 8px;
                    width: 50%;
                    min-width: 150px;
                    border: 0;
                    border-bottom: 1px solid #ccc;
                    font-size: 1.5rem;
                    letter-spacing: 6px;
                    transition: .2s;
                    display: block;
                    margin: auto;
                    border-radius: 0;
                    &:focus {
                        outline: none;
                        box-shadow: none;
                        border-bottom-color: #000;
                        transition: .2s;
                    }
                }
                .error {
                    margin: 10px 0;
                    text-align: center;
                    color:hsl(4, 90%, 57%);
                }
            }
            .btn-grp {
                margin: 10px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                div {
                    
                    display: block;
                    margin: 0 10px;
                    padding: 8px 24px;
                    font-size: 18px;
                    text-align: center;
                    background-color: #308BF4;
                    color:#fff !important;
                    border-radius: 5px;
                    transition: .2s;
                    cursor: pointer;
                    &.cancel {
                        color:#308BF4 !important;
                        background-color:#fff ;
                        border:1px solid #308BF4;
                        &:hover {
                            background-color:rgba(48, 139, 244,.1) ;
                            transition: .2s;
                        }
                    }
                    &.submit:hover {
                        background-color:hsl(212, 90%, 50%) ;
                            transition: .2s;
                    }
                    
                }
            }
        }
    }
</style>