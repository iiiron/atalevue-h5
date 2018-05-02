<template>
  <!-- <popup v-model="showPop" :position="'right'" :width="'100%'"> -->
  <div style="height:100%;width:100%;position: absolute;z-index: 100000;top:0;" v-show="showPop">
    <iframe ref="iframe" v-if="showPop" :src="url" style="width:100%;height:100%"></iframe>
  </div>
  <!-- </popup> -->
</template>

<script>
import {Popup, InlineLoading} from 'vux'
export default{
  name: 'PopIframe',
  props: {
    url: String,
    title: String
  },
  data () {
    return {
      showPop: false,
      oldTitle: '',

      onBack: () => {
        this.hide()
      },
      setWechatTitle: (title, img) => {
        if (title === undefined || window.document.title === title) {
          return
        }
        document.title = title
        var mobile = navigator.userAgent.toLowerCase()
        if (/iphone|ipad|ipod/.test(mobile)) {
          var iframe = document.createElement('iframe')
          iframe.style.display = 'none'
          iframe.setAttribute('src', img || '/favicon.ico')
          var iframeCallback = function () {
            setTimeout(function () {
              iframe.removeEventListener('load', iframeCallback)
              document.body.removeChild(iframe)
            }, 0)
          }
          iframe.addEventListener('load', iframeCallback)
          document.body.appendChild(iframe)
        }
      }
    }
  },
  components: {
    Popup,
    InlineLoading
  },
  methods: {
    show () {
      this.oldTitle = document.title
      this.setWechatTitle(this.title)
      window.history.pushState({name: 'anchor'}, null)
      window.addEventListener('popstate', this.onBack, false)
      this.showPop = true
    },
    hide () {
      this.setWechatTitle(this.oldTitle)
      window.removeEventListener('popstate', this.onBack, false)
      this.showPop = false
    }
  },
  watch: {
    url: function (val) {
      console.log(val, window.history.length)
    }
  }
}
</script>
