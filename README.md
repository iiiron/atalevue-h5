# atalevue-h5

<!-- MarkdownTOC -->

- [简介](#abstract)
- [js工具](#jsTool)
    - [weStoreFactory](#weStoreFactory)
    - [weEncrypt](#weEncrypt)
    - [weLodash](#weLodash)
    - [weStorage](#weStorage)

<!-- /MarkdownTOC -->

<a id="abstract"></a>

## 简介 {#abstract}

在实际开发过程中，我们根据需求提炼了一些实用的组件。它们不同于UI框架所提供的组件，我们所提供的，是一些几乎没有样式的功能性组件，它们的样式完全可由客户端程序员来自定制。例如只为格式化身份证号，手机号，银行卡号的"IdCard"，"PhoneNumber"，"BankCard"组件；例如只为更完备的控制数据输入的各类input组件。它们甚至选择故意将根节点暴露给客户端程序员，以便你可以更自由的使用它们。

除了这些基础组件，我们还提供了几个基于vux开发的UI组件，例如类似微信通讯录的"LetterPositionList"，手写的数字弹出键盘"NumberKeyBoard"

在开发过程中，我们会不断丰富该组件库，如果你想使用，可以通过npm安装

```

npm install atalevue-h5

```

目前由于时间稀缺，我们还没有来得及为它编写一份文档，不过这会在近期逐渐完善。如果你现在想要使用它，你可以通过[github](https://github.com/iiiron/atalevue-h5.git)抓取代码直接查看相关组件的实现，以决定如何使用它们。

如果你有更好的点子，或者想要参与该组件库的开发，请通过[github](https://github.com/iiiron/atalevue-h5.git)。欢迎RP。

<a id="jsTool"></a>

js工具 {#jsTool}
===

<a id="weStoreFactory"></a>

#### weStoreFactory {#weStoreFactory}

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

```javascript
var store = weStoreFactory(
    {
        state:
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

#### weEncrypt {#weEncrypt}

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

#### weLodash {#weLodash}

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

            coeRange (Number) : 基于标准线的容错区间

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

#### weStorage {#weStorage}

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



