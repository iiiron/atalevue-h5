<template>
  <div>
    <common-input v-model="bank"></common-input>
    <br>
    <id-card-input v-model="id"></id-card-input>
    <br>
    <img-vali-input></img-vali-input>
    <br>
    <money-input v-model="money"></money-input>
    <br>
    <msg-vali-input></msg-vali-input>
    <br>
    <pass-word-input></pass-word-input>
    <br>
    <phone-num-input v-model="phone"></phone-num-input>
    <br>
    <pick-input></pick-input>
    <br>
    <user-name-input ref="name"></user-name-input>
    <br>
    <!-- <basic-img :img="require('./logo.png')" @error="error"></basic-img> -->
    <br>
    <!-- <basic-img @error="error"></basic-img> -->
    <br>
    <state-button ref="btn" :isActive="isActive" :model="1" :value="'按钮'" @click="onClick" class="test"></state-button>
    <br>
    <bank-card :model="1" v-model="bank" style="color:red;"></bank-card>
    <br>
    <id-card v-model="id" :model="2"></id-card>
    <br>
    <money :value="money" :isCover="false"></money>
    <br>
    <phone-number :value="phone" :model="4"></phone-number>
    <br>
    <number-key-board :value="keyShow" @finished="onInputFinished"></number-key-board>
    <pop-iframe ref="pop" :url="'https://www.baidu.com'"></pop-iframe>
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

import popIframe from '@/components/popIframe'
import numberKeyBoard from '@/components/numberKeyBoard'

import bankCard from '@/components/dataTag/bankCard'
import idCard from '@/components/dataTag/idCard'
import money from '@/components/dataTag/money'
import phoneNumber from '@/components/dataTag/phoneNumber'

export default {
  data () {
    return {
      isActive: false,
      bank: '6214830174640135',
      phone: 13390146190,
      id: '502927199001270077',
      money: 1000,
      keyShow: true,

      error: () => {
        console.log('img get error')
      },
      onClick: () => {
        this.$refs.pop.show()
        console.log('click btn')
      },
      moveIn: () => {
        console.log('move in')
      },
      onInputFinished: (val) => {
        this.keyShow = false
        console.log(val)
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
    bankCard,
    idCard,
    money,
    phoneNumber,
    popIframe,
    numberKeyBoard
  },
  mounted () {
    var im = new InputManager()
    im.put(this.$refs.name)
    im.onChange((v, i) => {
      // console.log(v, i)
    })

    var cd = new CountDown(4)
    cd.onRunning((m, c) => {
      // console.log(m, c)
      this.isActive = !this.isActive
      // this.$refs.btn.click()
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
