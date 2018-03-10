<template>
  <div>
    <common-input v-model="bank"></common-input>
    <id-card-input></id-card-input>
    <img-vali-input></img-vali-input>
    <money-input></money-input>
    <msg-vali-input></msg-vali-input>
    <pass-word-input></pass-word-input>
    <phone-num-input></phone-num-input>
    <pick-input></pick-input>
    <user-name-input ref="name"></user-name-input>
    <basic-img :img="require('./logo.png')" @error="error"></basic-img>
    <basic-img @error="error"></basic-img>
    <state-button ref="btn" :isActive="isActive" :model="1" :value="'按钮'" @click="onClick" class="test"></state-button>
    <bank-card :model="2" v-model="bank" style="color:red;"></bank-card>
  </div>
</template>

<script>
import commonInput from '@/components/input/commonInput'
import idCardInput from '@/components/input/idCardInput'
import imgValiInput from '@/components/input/imgValiInput'
import moneyInput from '@/components/input/moneyInput'
import msgValiInput from '@/components/input/msgValiInput'
import passWordInput from '@/components/input/passWordInput'
import phoneNumInput from '@/components/input/phoneNumInput'
import pickInput from '@/components/input/pickInput'
import userNameInput from '@/components/input/userNameInput'
import InputManager from '@/components/input/InputManager.js'
import CountDown from '@/utils/CountDown.js'
import weLodash from '@/utils/weLodash.js'
import weStorage from '@/utils/weStorage.js'
import basicImg from '@/components/basicImg'
import stateButton from './stateButton'

import bankCard from '@/components/dataTag/bankCard'

export default {
  data () {
    return {
      isActive: false,
      bank: '6214830174640135',

      error: () => {
        console.log('img get error')
      },
      onClick: () => {
        console.log('click btn')
      },
      moveIn: () => {
        console.log('move in')
      }
    }
  },
  components: {
    commonInput,
    idCardInput,
    imgValiInput,
    moneyInput,
    msgValiInput,
    passWordInput,
    phoneNumInput,
    pickInput,
    userNameInput,
    basicImg,
    stateButton,
    bankCard
  },
  mounted () {
    var im = new InputManager()
    im.put(this.$refs.name)
    im.onChange((v, i) => {
      // console.log(v, i)
    })

    var cd = new CountDown(3)
    cd.onRunning((m, c) => {
      // console.log(m, c)
      this.isActive = !this.isActive
      this.$refs.btn.click()
    })
    cd.start()

    console.log(weLodash.random())

    console.log(weStorage.getToken())
  }
}
</script>

<style scode>
.test{
  width: 300px;
  color: red;
}
</style>
