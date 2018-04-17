
import { BasicInput, BankCardInput, CommonInput, IdCardInput, 
	ImgValiInput, MoneyInput, MsgValiInput, NumberInput, PassWordInput, 
	PhoneNumInput, PickInput, UserNameInput } from 'atalevue'
	
import { InputManager, CountDown, weStorage, weLodash, weEncrypt, weStoreFactory } from 'atalevue'

import BankCard from './src/components/dataTag/bankCard'
import IdCard from './src/components/dataTag/idCard'
import Money from './src/components/dataTag/money'
import PhoneNumber from './src/components/dataTag/phoneNumber'
import Name from './src/components/dataTag/name'

import BasicImg from './src/components/basicImg'
import LetterPositionList from './src/components/letterPositionList'
import NumberKeyBoard from './src/components/numberKeyBoard'
import PopIframe from './src/components/popIframe'
import StateButton from './src/components/stateButton'
import YScroll from './src/components/yScroll'

export {
	// input
	BasicInput,
	BankCardInput,
	CommonInput,
	IdCardInput,
	ImgValiInput,
	MoneyInput,
	MsgValiInput,
	NumberInput,
	PassWordInput,
	PhoneNumInput,
	PickInput,
	UserNameInput,

	// dataTag
	BankCard,
	IdCard,
	Money,
	PhoneNumber,
	Name,

	BasicImg,
	LetterPositionList,
	NumberKeyBoard,
	PopIframe,
	StateButton,
	YScroll,

	// js
	InputManager,
	CountDown,
	weStorage,
	weLodash,
	weEncrypt,
	weStoreFactory
}