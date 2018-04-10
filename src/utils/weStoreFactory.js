/**
 * author wanxm
 * 
 * 最后要返回一个对象，这个对象有一个state，以及对state中的属性的set方法（通过commit方式set）
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
export default function weStoreFactory (obj) {
  var store = {}

  store.state = {}
  store.computed = {}

  var commitFunList = {}
  store.commit = function (propName, val) {
    store.state[propName] = commitFunList[propName](val, store.state, store.computed)
  }

  for (var prop in obj) {
    if (prop === 'computed') {
      for (var computedProp in obj[prop]) {
        defineComputedProp(store.computed, computedProp, obj, store)
      }
    } else if (prop === 'state') {
      for (var stateProp in obj[prop]) {
        var theProp = obj[prop][stateProp]

        store.state[stateProp] = theProp['default']

        if (theProp['committer'] !== undefined && typeof theProp['committer'] === 'function') {
          commitFunList[stateProp] = theProp['committer']
        } else {
          commitFunList[stateProp] = v => v
        }

        //暂时不引入get
        // if (theProp['getter'] !== undefined && typeof theProp['getter'] === 'function') {
        //   Object.defineProperty(store.state,stateProp,{
        //     get: theProp['getter']
        //   })
        // }
      }
    }
  }

  return store
}

function defineComputedProp (computed, computedProp, obj, store) {
  Object.defineProperty(computed,computedProp,{
    get: function () {
      return obj['computed'][computedProp](store.state, store.computed)
    }
  })
}


/*
 
weStoreFactory(
  state: {
    age: {
      default: 18,
        committer: function (val, state, computed) {
        return val + 1
      }
    }
  },
  computed: {
    age2: function (state,computed) {
      return state.age + 10
    }
  }
)

*/
 