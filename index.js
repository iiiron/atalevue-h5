
import basicInput from './src/components/input/basicInput/index.vue'
import bankCardInput from './src/components/input/bankCardInput/index.vue'
import commonInput from './src/components/input/commonInput/index.vue'
import idCardInput from './src/components/input/idCardInput/index.vue'
import imgValiInput from './src/components/input/imgValiInput/index.vue'
import moneyInput from './src/components/input/moneyInput/index.vue'
import msgValiInput from './src/components/input/msgValiInput/index.vue'
import numberInput from './src/components/input/numberInput/index.vue'
import passWordInput from './src/components/input/passWordInput/index.vue'
import phoneNumInput from './src/components/input/phoneNumInput/index.vue'
import pickInput from './src/components/input/pickInput/index.vue'
import userNameInput from './src/components/input/userNameInput/index.vue'

import bankCard from './src/components/dataTag/bankCard'
import idCard from './src/components/dataTag/idCard'
import money from './src/components/dataTag/money'
import phoneNumber from './src/components/dataTag/phoneNumber'

import basicImg from './src/components/basicImg'
import letterPositionList from './src/components/letterPositionList'
import numberKeyBoard from './src/components/numberKeyBoard'
import popIframe from './src/components/popIframe'
import stateButton from './src/components/stateButton'

import InputManager from "./src/components/input/InputManager.js"
import CountDown from "./src/utils/CountDown.js"
import weStorage from "./src/utils/weStorage.js"
import weLodash from "./src/utils/weLodash.js"

export {
	// input
	basicInput,
	bankCardInput,
	commonInput,
	idCardInput,
	imgValiInput,
	moneyInput,
	msgValiInput,
	numberInput,
	passWordInput,
	phoneNumInput,
	pickInput,
	userNameInput,

	// dataTag
	bankCard,
	idCard,
	money,
	phoneNumber,

	basicImg,
	letterPositionList,
	numberKeyBoard,
	popIframe,
	stateButton

	// js
	InputManager,
	CountDown,
	weStorage,
	weLodash,
}