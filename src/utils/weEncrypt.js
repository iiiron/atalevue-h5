/**
 * author 万相明
 */
import aes from 'crypto-js/aes'
import CryptoJS from 'crypto-js'
import JsEncrypt from 'jsencrypt/bin/jsencrypt.js'

var weEncrypt={};

weEncrypt.randomAesKey=function(len){
  var $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  var maxPos = $chars.length;
  var keyStr ="";
  for(var i = 0; i < len; i++) {
    keyStr += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return keyStr.toUpperCase()
}

weEncrypt.AesEncoding=function(content,aeskey,deviation){
  var key = CryptoJS.enc.Utf8.parse(aeskey); //16位
  var iv = CryptoJS.enc.Utf8.parse(deviation);
  var encrypted = '';
  if (typeof(content) == 'string') {
    var srcs = CryptoJS.enc.Utf8.parse(content);
    // console.log("srcs:"+srcs);
    encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  } else if (typeof(content) == 'object') {//对象格式的转成json字符串
    var data = JSON.stringify(content);
    var srcs = CryptoJS.enc.Utf8.parse(data);
    encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
  }
  return encrypted.toString();//返回的就是base64编码之后的数据  
}

weEncrypt.AesDecoding=function(content,aesKey,deviation){
  var key = CryptoJS.enc.Utf8.parse(aesKey);
  var iv = CryptoJS.enc.Utf8.parse(deviation);

  var decrypt = CryptoJS.AES.decrypt(content, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC
  });
  var rtnStr = CryptoJS.enc.Utf8.stringify(decrypt).toString();
  return rtnStr;  
}

weEncrypt.RsaEncoding=function(content,RsaKey){
  var jsEncrypt=new JsEncrypt.JSEncrypt();
  jsEncrypt.setKey(RsaKey);
  return jsEncrypt.encrypt(content);
}

weEncrypt.RsaDecoding=function(content,RsaKey){
  var jsEncrypt=new JsEncrypt.JSEncrypt();
  jsEncrypt.setKey(RsaKey);
  return jsEncrypt.decrypt(CryptoJS.enc.Utf8.parse(content));
}

export default weEncrypt;