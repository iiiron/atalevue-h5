# atalevue-h5

<!-- MarkdownTOC -->

- [简介](#abstract)
- [js工具](#jsTool)
    - [weStoreFactory](#weStoreFactory)
    - [weEncrypt](#weEncrypt)
    - [weLodash](#weLodash)
    - [weStorage](#weStorage)
    - [InputManager](#InputManager)
- [vue组件](#vueComponents)
    - [BasicImg](#BasicImg)
    - [BankCard](#BankCard)
    - [IdCard](#IdCard)
    - [PhoneNumber](#PhoneNumber)
    - [Money](#Money)
    - [Name](#Name)
    - [PopIframe](#PopIframe)
    - [StateButton](#StateButton)
    - [YScroll](#YScroll)
    - [LetterPositionList](#LetterPositionList)
    - [BasicInput](#BasicInput)
    - [BankCardInput](#BankCardInput)
    - [IdCardInput](#IdCardInput)
    - [NumberInput](#NumberInput)
    - [ImgValiInput](#ImgValiInput)
    - [CommonInput](#CommonInput)
    - [MoneyInput](#MoneyInput)
    - [MsgValiInput](#MsgValiInput)
    - [PassWordInput](#PassWordInput)
    - [PhoneNumInput](#PhoneNumInput)
    - [PickInput](#PickInput)
    - [UserNameInput](#UserNameInput)

<!-- /MarkdownTOC -->

<a id="abstract"></a>

# 简介 {#abstract}

在实际开发过程中，我们根据需求提炼了一些实用的组件。它们不同于UI框架所提供的组件，我们所提供的，是一些几乎没有样式的功能性组件，它们的样式完全可由客户端程序员来自定制。例如只为格式化身份证号，手机号，银行卡号的"IdCard"，"PhoneNumber"，"BankCard"组件；例如只为更完备的控制数据输入的各类input组件。它们甚至选择故意将根节点暴露给客户端程序员，以便你可以更自由的使用它们。

除了这些基础组件，我们还提供了几个基于vux开发的UI组件，例如类似微信通讯录的"LetterPositionList"，手写的数字弹出键盘"NumberKeyBoard"

在开发过程中，我们会不断丰富该组件库，如果你想使用，可以通过npm安装

```

npm install atalevue-h5

```

目前由于时间稀缺，我们还没有来得及为它编写一份文档，不过这会在近期逐渐完善。如果你现在想要使用它，你可以通过[github](https://github.com/iiiron/atalevue-h5.git)抓取代码直接查看相关组件的实现，以决定如何使用它们。

如果你有更好的点子，或者想要参与该组件库的开发，请通过[github](https://github.com/iiiron/atalevue-h5.git)。欢迎RP。

<a id="jsTool"></a>

# js工具 {#jsTool}

<a id="weStoreFactory"></a>

### weStoreFactory {#weStoreFactory}

weStoreFactory是一个用来生成store的工厂函数。

- 类型：Function

- 参数：(Object)

```javascript
/**
 * 参数示例
 *
 * 对于state，可配置默认值（default）和提交函数（committer），也可以只提供一个空的对象如occupation。
 *
 * 对于computed，可配置一个计算函数，获取对应的value时，其值会通过计算函数运算得出
 *
 * 你可以将weStoreFactory产生出的store看作：
 * var store = {
 *     state: {
 *         name: '张三',
 *         age: 18
 *     },
 *     computed: {
 *         occupation: 19
 *     }
 * }
 * 则committer和computed中的计算函数的state和computed两个参数对应的就是store.state和store.computed
 */
{
    state: {
        name: {
            default: '张三',
            committer: function (value, state, computed) {
                return value
            }
        },
        age: {
            default: 18
        },
        occupation: {}
    },
    computed: {
        nominalAge: function (state, computed) {
            return state.age + 1
        }
    }
}
```

代码示例

``` javascript
var store = weStoreFactory(
  {
        state:{
            name: {
                default: '张三',
                committer: function (value, state, computed) {
                    return value
                }
            },
            age: {
                default: 18
            },
            occupation: {}
        },
        computed: {
            nominalAge: function (state, computed) {
                return state.age + 1
            }
        }        
    }
)

//你可以通过 store.state.xxx访问state中的属性，或者通过store.computed.xxx访问computed中的属性，如下
console.log(store.state.name) //张三

store.commit('name','李四')

console.log(store.state.name) //李四
console.log(store.state.age) //18
console.log(store.computed.nominalAge) //19

```


<a id="weEncrypt"></a>

### weEncrypt {#weEncrypt}

weEncrypt是一个用来处理AES和RSA加密的对象，它有5个封装好的方法提供给客户端程序员使用。

- 类型：Object

- 成员函数：

    - randomAesKey()

        - 参数

            length (Number) : 指定返回随机码的长度

    - AesEncoding()

        - 参数
            
            content (String) : 待加密内容

            aeskey (String) : aes密钥

            deviation (String) : 偏移字符串

        - 返回值 

            (String) : 加密后字符串

    - AesDecoding()

        - 参数
            
            content (String) : 待解密内容

            aeskey (String) : aes密钥

            deviation (String) : 偏移字符串

        - 返回值 

            (String) : 解密后字符串

    - RsaEncoding()

        - 参数 

            content (String) : 待加密内容

            RsaKey (String) : RSA 公钥

        - 返回值

            (String) : 加密后字符串

    - RsaDecoding()

        - 参数 

            content (String) : 待解密内容

            RsaKey (String) : RSA 公钥

        - 返回值

            (String) : 解密后字符串

<a id="weLodash"></a>

### weLodash {#weLodash}

这是一个琐碎的工具函数集合

- 类型：Object

- 成员函数：
    
    - parseToString()

        - 参数

            obj (Object) : 待转换的对象

        - 返回值

            (Object) : 转换后的对象

        - 说明

            这个方法会遍历入参对象，将其中的所有成员属性转换为String类型的数据

    - getUrlParam()

        - 参数

            name (String) : 要从URL中解析的参数的名字

        - 返回值

            (String) : 从当前URL中解析出来的特定名字的参数的值

        - 示例

                //如当前浏览器URL为：www.baidu.com/s?name=abc
            
                console.log(weLodash.getUrlParam('name')) //abc 
            
    - random()

        - 参数

            min (Number) : 最小值

            max (Number) : 最大值

            coeLine (Number) : 标准线

            coeRange (Number) : 基于标准线的容错区间，该区间是在标准线的基础上加减coeRange值得出的

            coeTimes (Integer) : 超出容错区间时的重随次数

        - 返回值

            (Number) : 随机值

    - dateFormat()

        - 参数

            mdate (String || Number) : 时间，可以是格式化的时间，也可以是时间戳

            fmt (String) : 格式。如：yyyy-MM-dd hh:mm:ss

        - 返回值

            (String) : 格式化后的时间

    - fillIn()

        - 参数

            content (String) : 待填充字符串

            format (String) : 格式。格式中的 **%** 表示保留原字符； **^** 表示丢弃（使用空字符串替换）原字符； **_** 表示使用其后一个字符替换原字符，只有存在原字符的情况下才会替换

        - 返回值

            (String) : 填充后的字符串

        - 示例

                console.log(weLodash.fillIn('13300000000','%%% _*_*_*_* %%%%')) //133 **** 0000

<a id="weStorage"></a>

### weStorage {#weStorage}

持久化存储器，用来屏蔽具体的底层的持久化操作，让上层代码可以不去关心具体的持久化实现。

- 类型: Object
    
- 成员函数
    
    - set(key, value)

        - 参数

            key (String) : 数据的key

            value (String) : 数据的值

    - get(key)

        - 参数

            key (String) : 数据的key

        - 返回值

            (String) : key所对应的value

    - remove(key)

        - 参数

            key (String) : 数据的key
        
        - 说明

            移除key对应的值

    - setToken(value)

        - 参数

            value (String) : 要存储的token值

    - getToken()
    
        - 返回值

            (String) : 返回存储的token值

    - removeToken()

        - 说明

            移除token

<a id="InputManager"></a>

### InputManager {#InputManager}

该组件**专门用来管理该项目中BasicInput及其子组件**（及继承于BasicInput的各个组件）。

- 类型: Object

- 成员函数：

    - put(input)

        - 参数

            input (? extends BasicInput)：要推给InputManager管理的input，input必须继承自BasicInput。

    - onChange(fun)

        - 参数

            fun (Function)：fun是一个回调函数。当被InputManager管理的任何一个input发生变化的时候，fun函数就会被触发。

    - findFail()

        - 返回值

            input(? extends BasicInput)组件的vue实例，你可以通过它获取被InputManager管理的input中输入内容处于错误的那个input组件实例，如果有多个input处于错误状态，它会按照put函数推入的顺序，返回第一个错误的input。

<a id="vueComponents"></a>

# vue组件 {#vueComponents}

<a id="BasicImg"></a>

### BasicImg {#BasicImg}

```
import { BasicImg } from 'atalevue-h5'

export default {
    components: {
        BasicImg
    }
}
```

- 属性

    - img: String

        图片的url

    - defaultImg: String

        默认加载图片的url

- 说明
    
    该组件是一个图片加载组件，用来处理当加载图片“img”失败时，自动加载“defaultImg”。它有且仅有一个dom元素（<img\>元素），你几乎可以像使用<img\>一样使用它。

<a id="BankCard"></a>

### BankCard {#BankCard}

```
import { BankCard } from 'atalevue-h5'

export default {
    components: {
        BankCard
    }
}
```

- 属性

    - value: String

        银行卡号

    - model: Number

        显示模式编号，默认是0

    - formatList: Array

        格式列表，也就是模式列表。在此注册的模式，可通过model参数选择。该属性默认值请参看说明。

- 说明

    formatList是配合weLodash中的fillIn()方法来使用的，它会根据format中，下划线（_），星号（*），尖号（^），百分号（%）的个数来判断用户输入的value，适用的格式化参数。**格式化参数的作用请看weLodash.fillIn()。**  

    **重要**：虽然formatList是该组件的参数，但我不推荐你频繁的在引用该组件的地方去通过传参实现自定义格式，假如你有特殊的需要，可以通过继承该组件，修改其默认formatList属性，以避免在项目中散落太多细节，导致代码不可维护。

        例如：
        模式1下，16位的value将会被匹配'_*_*_*_*_*_*_*_*_*_*_*_*%%%%'这条格式参数；
        19位的value将会被匹配'_*_*_*_*_*_*_*_*_*_*_*_*^^^%%%%'


        //formatList的默认实现如下：

        formatList: {
          type: Array,
          default: function () {
            return [{
              model: 1,
              format: [
                '_*_*_*_*_*_*_*_*_*_*_*_*%%%%',
                '_*_*_*_*_*_*_*_*_*_*_*_*^^%%%%',
                '_*_*_*_*_*_*_*_*_*_*_*_*^^^%%%%'
              ]
            }, {
              model: 2,
              format: [
                '_*_*_*_* _*_*_*_* _*_*_*_* %%%%',
                '_*_*_*_* _*_*_*_* _*_*_*_*^^ %%%%',
                '_*_*_*_* _*_*_*_* _*_*_*_*^^^ %%%%'
              ]
            }, {
              model: 3,
              format: [
                '%%%% _*_*_*_* _*_*_*_* %%%%',
                '%%%% _*_*_*_* _*_*_*_*^^ %%%%',
                '%%%% _*_*_*_* _*_*_*_*^^^ %%%%'
              ]
            }]
        }

<a id="IdCard"></a>

### IdCard {#IdCard}

```
import { IdCard } from 'atalevue-h5'

export default {
    components: {
        IdCard
    }
}
```

- 属性

    - value: String

    - model: Number

    - formatList: Array

- 说明

    所有参数用法，**参看[BankCard](#BankCard)组件**

        //formatList默认值：
        formatList: {
          type: Array,
          default: function () {
            return [{
              model: 1,
              format: [
                '_*_*_*_*_*_*_*_*_*_****%%%%',
                '_*_*_*_*_*_*_*_*_*_*_*_*_*_*%%%%'
              ]
            }, {
              model: 2,
              format: [
                '%%%%_*_*_*_*_*_*_****%%%%',
                '%%%%_*_*_*_*_*_*_*_*_*_*%%%%'
              ]
            }]
          }
        }

<a id="PhoneNumber"></a>

### PhoneNumber {#PhoneNumber}

```
import { PhoneNumber } from 'atalevue-h5'

export default {
    components: {
        PhoneNumber
    }
}
```

- 属性 

    - value: String

    - model: Number

    - formatList: Array

- 说明

    所有参数用法，**参看[BankCard](#BankCard)组件**

        //formatList默认值：
        formatList: {
          type: Array,
          default: function () {
            return [{
              model: 1,
              format: '%%%-%%%%-%%%%'
            }, {
              model: 2,
              format: '%%% %%%% %%%%'
            }, {
              model: 3,
              format: '_*_*_*_*_*_*_*%%%%'
            }, {
              model: 4,
              format: '%%% _*_*_*_* %%%%'
            }]
          }
        }

<a id="Money"></a>

### Money {#Money}

```
import { Money } from 'atalevue-h5'

export default {
    components: {
        Money
    }
}
```

- 属性

    - value：[String,Number]

        默认Number类型0

    - isCover: boolean

        默认false

- 说明
    
    该组件将金额格式化为两位小数，千分位待逗号的格式。如：100,000,000.00。当isCover为true时，金额变为6个星号‘\*\*\*\*\*\*’

<a id="Name"></a>

### Name {#Name}

```
import { Name } from 'atalevue-h5'

export default {
    components: {
        Name
    }
}
```

- 属性

    - value: String

        中文名字。

    - model: Number

        名字的显示模式，默认0，即无模式。

- 说明

        模式1：张*
        模式2：*三

<a id="PopIframe"></a>

### PopIframe {#PopIframe}

```
import { PopIframe } from 'atalevue-h5'

export default {
    components: {
        PopIframe
    }
}
```

- 属性

    - url: String

        被加载页面url

    - title: String

        弹出框的title

- 方法

    - show()

        显示pop

    - hide()

        隐藏pop

<a id="StateButton"></a>

### StateButton {#StateButton}

```
import { StateButton } from 'atalevue-h5'

export default {
    components: {
        StateButton
    }
}
```

- 属性

    - isActive: Boolean

        按钮是否活跃，默认true

    - value: String

        按钮上的文字

    - notActiveStyle: Object

        class风格的css样式，会在isActive处于false时启用

    - activeStyle: Object

        class风格的css样式，会在isActive处于true时启用

- 方法

    - click()

        模拟一次按钮点击

- 事件

    - click()

        当按钮被点击时触发，只有isActive为true时才会触发该事件

    - clickFail()

        当isActive为false时按钮被点击，该事件被触发

<a id="YScroll"></a>

### YScroll {#YScroll}

```
import { YScroll } from 'atalevue-h5'

export default {
    components: {
        YScroll
    }
}
```

- 属性

    - height: Number

        指定该组件的高度，默认值0

    - loadLeadDistance: Number

        指定触发loadMore的提前量，当其为0时，只有YScroll完全滑动到底部时才会触发loadMore。默认值20，其单位为px

- 方法

    - tryLoadMore()

        尝试加载更多数据，它不会直接触发loadMore事件，但它会去检查触发loadMore的条件是否满足，如果满足则触发loadMore事件。该方法提供了一种手动触发检查的途径，某些复杂使用场景下，你可能会用得到它

- 事件

    - loadMore()

        当YScroll中的内容没有填充满，或者YScroll滑动到底部时，该事件会触发

    - scroll(scrollHeight,contentHeight,containerHeight)

        当YScroll滚动的时候会触发该事件，该事件传出三个参数，第一个参数是滚动距离，第二个参数是YScroll中内容的内容高度，第三个参数是YScroll的可见高度

- 说明

    用它做InfiniteScroll是很简单的，但因为这种需求场景千差万别，我们便没有将它做成InfiniteScroll，不过我这里给大家一个基于vux的实现

        <template>
          <div>
            <y-scroll ref="scroll" :height="height" @loadMore="loadMore">
              <slot name="default"></slot>
              <load-more ref="load" :tip="loadContent" :show-loading="loadContent === '正在加载'"></load-more>
            </y-scroll>
          </div>
        </template>

        <script>
        import { YScroll } from 'atalevue-h5'
        import { LoadMore } from 'vux'

        export default {
          components: {
            YScroll,
            LoadMore
          },
          data () {
            return {
              loadContent: '正在加载',
              isLoadLock: false,

              loadMore: () => {
                if (this.loadContent !== '正在加载' || this.isLoadLock) {
                  return 
                }

                this.isLoadLock = true
                this.$emit('loadMore',this)
              }
            }
          },
          props: {
            height: {
              type: Number,
              default: window.innerHeight
            },
            loadLeadDistance: {
              type: Number,
              default: 70
            }
          },
          watch: {
            maxPage: function (v) {
              this.maxPageSelf = v
            }
          },
          methods: {
            finished: function (maxPages, currentPages) {
              this.isLoadLock = false

              if (maxPages === 0) {
                this.loadContent = '暂无数据'
              } else if (maxPages > currentPages) {
                this.loadContent = '正在加载'
              } else {
                this.loadContent = '暂无更多'
              }
            },
            tryLoadMore: function () {
              this.isLoadLock = false
              this.$refs.scroll.tryLoadMore()
            },
            refresh: function () {
              this.isLoadLock = false
              this.loadContent = '正在加载'
              this.$refs.scroll.tryLoadMore()
            }
          }
        }
        </script>

<a id="LetterPositionList"></a>

### LetterPositionList {#LetterPositionList}

```
import { LetterPositionList } from 'atalevue-h5'

export default {
    components: {
        LetterPositionList
    }
}
```

- 属性

    - data: Array

        数据数组

    - slide: Boolean

        是否使用动画。为false时，左侧内容是跳变到对应字母的；为true时，左侧内容滑动到对应字母

- 事件

    - on-pick(name, value)

        当选中时触发

- 说明
        
        //参数示例
        data: [
            {
                letter: A,
                data: [
                    {
                        name: 'xxx',
                        value: 1
                    },
                    {
                        name: 'yyy',
                        value: 2
                    }
                ]
            },
            {
                letter: B,
                data: [
                    {
                        name: 'zzz',
                        value: 5
                    },
                    {
                        name: 'www',
                        value: 8
                    }
                ]
            }
        ]

<a id="BasicInput"></a>

### BasicInput {#BasicInput}

```
import { BasicInput } from 'atalevue-h5'

export default {
    components: {
        BasicInput
    }
}
```

- 属性

    - value: String

        用户输入的内容

    - delay: Number

        输入防抖动延时，默认0，即不延时

- 方法

    - getVerify()

        获取验证结果，返回Boolean，true表示验证通过，false表示验证失败

    - getVerifyInfo()

        获取验证结果信息，返回String

- 事件

    - input()

        当用户输入时，触发input事件

- 说明

    BasicInput是一个扩展性很强的组件，推荐通过继承的方式来实现你自己的输入组件。该组件的data中提供了几个你可以通过继承并覆盖其实现而扩展功能的方法。它们分别是：**validator(), afterVerifyPass(), beforeOutput()**，以及两个私有属性：**verify，verifyInfo**。下面逐一说明。

        validator(newValue, oldValue)

            该方法会在用户输入信息时最先被调用，它必须反回一个Boolean，当返回true时，afterVerifyPass()
            方法将会被调用；当返回false，用户的当次输入将被回撤。因此你可以用它实现强制校验的功能，例如
            用户无法输入非法字符。

        afterVerifyPass(newValue, oldValue)

            该方法在用户的输入已经通过validator()方法的校验的情况下被触发。你可以在这里修改verify属性和
            verifyInfo属性，这两个属性可以配合InputManager工作。当然你可以在这里完成一些其他的工作。

        beforeOutput(value)

            这个方法是用户输入被input事件带出前的最后一个钩子函数，它需要返回一个字符串，该字符串将会最终
            呈现在输入框内。所以其默认实现就是return参数，即不对输入做任何处理。

    除了上述三个方法，还有两个私有属性很重要，当你要配合InputManager来使用input时，这两个值必须被正确的操控，否则InputManager将不会按照你的期望工作。

        verify，这个属性用于存放验证结果，它是个Boolean值。你可以在任何一个钩子函数中设置它的值。

        verifyInfo，这个属性用于存放验证结果信息，它是String值。你可以在任何一个钩子函数中设置它的值。

    下面是BasicInput的data的声明情况，贴出来，以便你清楚如何继承并重写相关方法。

        export default {
            data () {
                return {
                  // 强制校验器，返回值为false时，会强制回退当次输入。
                  validator: function (nv, ov) { return true },
                  // 输入校验结果，它并不是强制校验器的结果。
                  // 你可以通过各个钩子函数来修改这个值，该值会被input事件带出
                  verify: false,
                  // 输入校验提示信息，它并不是强制校验器的结果。
                  // 你可以通过各个钩子函数来修改这个值，该值会被input事件带出
                  verifyInfo: '',
                  // 验证通过后的钩子函数
                  afterVerifyPass: function (nv, ov) {},
                  // 内容输出前的勾子函数，需要返回输出值，该函数可影响最终的输出值，
                  // 多次连续输入后，只在debounce延迟结束时触发一次该钩子函数，
                  // 若延迟为0，则每次输入都触发该函数
                  beforeOutput: function (val) { return val }
                }
            }
        }
  

    **后文将介绍的所有Input组件，都是继承于BasicInput的**

<a id="BankCardInput"></a>

### BankCardInput {#BankCardInput}

```
import { BankCardInput } from 'atalevue-h5'

export default {
    components: {
        BankCardInput
    }
}
```

属性，方法参考[BasicInput](#BasicInput)

重写了afterVerifyPass()方法

    afterVerifyPass: (nv = '') => {
        this.verify = true
        if (nv.length === 0) {
            this.verifyInfo = '请输入银行卡号'
            this.verify = false
        } else if (!(/^[0-9]{15,22}$/.test(nv))) {
            this.verifyInfo = '请输入正确的银行卡号'
            this.verify = false
        }
    }

<a id="IdCardInput"></a>

### IdCardInput {#IdCardInput}

```
import { IdCardInput } from 'atalevue-h5'

export default {
    components: {
        IdCardInput
    }
}
```

属性，方法参考[BasicInput](#BasicInput)

重写了afterVerifyPass()方法

    afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
            this.verifyInfo = '请输入您的身份证号'
            this.verify = false
        } else if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(nv))) {
            this.verifyInfo = '您的身份证号码输入有误，请重新输入'
            this.verify = false
        }
    }

<a id="NumberInput"></a>

### NumberInput {#NumberInput}

```
import { NumberInput } from 'atalevue-h5'

export default {
    components: {
        NumberInput
    }
}
```

属性，方法参考[BasicInput](#BasicInput)

- 扩展属性

    - maxLength: Number

        可输入的最长位数，小数点也算一位。**强制校验**

    - float: Number

        可输入的小数位数，**强制校验**

    - unsigned: Boolean

        是否支持正负符号，默认为true，即支持正负号，**强制校验**

    - max: Number
    
        输入的最大数字，**非强制**

    - min: Number

        输入的最小数字，**非强制**

    - maxErrorMsg: String

        超过最大值时verifyInfo被赋予的值

    - minErrorMsg: String

        不足最小值时verifyInfo被赋予的值

    - nullErrorMsg: String

        输入为空字符串时verifyInfo被赋予的值

重写了validator()和afterVerifyPass()方法

    validator: (nv = '', ov) => {
        if (this.maxLength < nv.length) {
            return false
        } else if (nv === '') {
            return true
        } else {
            var unsigned = this.unsigned ? '-?' : ''
            var dot = this.float <= 0 ? '' : '\\.?'
            var reg = new RegExp('^' + unsigned + '\\d*' + dot + '\\d{0,' + this.float + '}$')
            return reg.test(nv)
        }
    }

    afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
            this.verifyInfo = this.nullErrorMsg
            this.verify = false
        } else if (Number(nv) < this.min) {
            this.verifyInfo = this.minErrorMsg
            this.$emit('on-lessMin', this.maxErrorMsg)
            this.verify = false
        } else if (this.max < Number(nv)) {
            this.verifyInfo = this.maxErrorMsg
            this.$emit('on-overMax', this.maxErrorMsg)
            this.verify = false
        }
    }

<a id="ImgValiInput"></a>

### ImgValiInput {#ImgValiInput}

```
import { ImgValiInput } from 'atalevue-h5'

export default {
    components: {
        ImgValiInput
    }
}
```

属性，方法参考[BasicInput](#BasicInput)

重写了afterVerifyPass()方法

    afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
            this.verifyInfo = '请输入验证码'
            this.verify = false
        } else if (nv.length !== 4) {
            this.verifyInfo = '请输入正确的验证码'
            this.verify = false
        }
    }

<a id="CommonInput"></a>

### CommonInput {#CommonInput}

```
import { CommonInput } from 'atalevue-h5'

export default {
    components: {
        CommonInput
    }
}
```

属性，方法参考[BasicInput](#BasicInput)

重写了afterVerifyPass()方法
    
    afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
            this.verify = false
        }
    }

<a id="MoneyInput"></a>

### MoneyInput {#MoneyInput}

```
import { MoneyInput } from 'atalevue-h5'

export default {
    components: {
        MoneyInput
    }
}
```

属性，方法参考[NumberInput](#NumberInput)。注意，该组件是**NumberInput**的子组件！

修改了maxErrorMsg，minErrorMsg，nullErrorMsg，verifyInfo的默认值

    maxErrorMsg: {
        type: String,
        default: '输入金额超限'
    },
    minErrorMsg: {
        type: String,
        default: '输入金额不足'
    },
    nullErrorMsg: {
        type: String,
        default: '请输入金额'
    }

    verifyInfo: '请输入金额'

<a id="MsgValiInput"></a>

### MsgValiInput {#MsgValiInput}

```
import { MsgValiInput } from 'atalevue-h5'

export default {
    components: {
        MsgValiInput
    }
}
```

属性，方法参考[NumberInput](#NumberInput)。注意，该组件是**NumberInput**的子组件！

重写了afterVerifyPass()方法

    afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
            this.verifyInfo = '请输入验证码'
            this.verify = false
        } else if (nv.length !== this.maxLength) {
            this.verifyInfo = '请输入正确的验证码'
            this.verify = false
        }
    }

修改了maxLength，float，unsigned，maxErrorMsg，minErrorMsg，nullErrorMsg，verifyInfo的值

    maxLength: {
        type: Number,
        default: 6
    },
    float: {
        type: Number,
        default: 0
    },
    unsigned: {
        type: Boolean,
        default: false
    },
    maxErrorMsg: {
        type: String,
        default: '请输入正确的验证码'
    },
    minErrorMsg: {
        type: String,
        default: '请输入正确的验证码'
    },
    nullErrorMsg: {
        type: String,
        default: '请输入验证码'
    }

    verifyInfo: '请输入验证码'

<a id="PassWordInput"></a>

### PassWordInput {#PassWordInput}

```
import { PassWordInput } from 'atalevue-h5'

export default {
    components: {
        PassWordInput
    }
}
```

- 属性

    - isCiphertext: Boolean

        是否隐藏密码

其余属性，方法参考[BasicInput](#BasicInput)

重写了afterVerifyPass()方法

    afterVerifyPass: (nv = '', ov) => {
        this.verify = this.passWordValidator(nv)
        if (nv.length === 0) {
            this.verifyInfo = '请输入登陆密码'
        } else if (!this.verify) {
            this.verifyInfo = '登录密码须是8-16位数字与字母组合'
        }
    }

该组件具有私有方法**passWordValidator()**,它是密码的验证器，会被afterVerifyPass方法调用，用于验证密码的正确性。你可以通过继承该组件，覆盖该方法的方式修改密码校验方式，从而创造属于特定App的独有验证器。

<a id="PhoneNumInput"></a>

### PhoneNumInput {#PhoneNumInput}

```
import { PhoneNumInput } from 'atalevue-h5'

export default {
    components: {
        PhoneNumInput
    }
}
```

- 属性

    - model: Number

        模式1，正常输入
        模式2，输入号码自动在第3位和第7位后隔开，形如： 133 0000 0000

其他属性，方法参考[NumberInput](#NumberInput)

重写了afterVerifyPass()方法

    afterVerifyPass: (nv, ov) => {
        this.verify = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(nv)
        if (nv === '' || nv === null) {
            this.verifyInfo = '请输入手机号码'
        } else if (!this.verify) {
            this.verifyInfo = '请输入正确的手机号'
        }
    }

修改了unsigned，float的值

    unsigned: {
        type: Boolean,
        default: false
    },
    float: {
        type: Number,
        default: 0
    }

<a id="PickInput"></a>

### PickInput {#PickInput}

```
import { PickInput } from 'atalevue-h5'

export default {
    components: {
        PickInput
    }
}
```

- 属性

    - eMsg: String

        用来控制默认的验证信息，也就是控制BasicInput中的verifyInfo字段

其他属性，方法参考[BasicInput](#BasicInput)

重写了afterVerifyPass()方法

    afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
            this.verify = false
        }
    }

<a id="UserNameInput"></a>

### UserNameInput {#UserNameInput}

```
import { UserNameInput } from 'atalevue-h5'

export default {
    components: {
        UserNameInput
    }
}
```

属性，方法参考[BasicInput](#BasicInput)

重写了afterVerifyPass()方法

    afterVerifyPass: (nv = '', ov) => {
        this.verify = true
        if (nv.length === 0) {
            this.verifyInfo = '请输入您的真实姓名'
            this.verify = false
        } else if (!(/^[\u4e00-\u9fa5]{2,16}$/.test(nv))) {
            this.verifyInfo = '您的姓名输入有误，请重新输入'
            this.verify = false
        }
    }