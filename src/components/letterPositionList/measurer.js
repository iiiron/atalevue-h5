var measurer = {}

measurer.distanceFromTop = function (element) {
  return element.offsetTop - (document.documentElement.scrollTop || document.body.scrollTop)
}

export default measurer
