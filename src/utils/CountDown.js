/**
 * @type {Object}
 * author 万相明 2017.11.11
 */
export default function CountDown (MaxCount = 60, intervalTime = 1000) {
  this._maxCount = MaxCount
  this._currentCount = 0
  this._breakPointCount = 0
  this._interval = null
  this._intervalTime = intervalTime
  this._runningCallBack = function () {}
  this._onEndCallBack = function () {}
}

CountDown.prototype.start = function () {
  if (!this._isTimerExist()) {
    this._currentCount = this._breakPointCount

    this._runningCallBack(this._getRemainingTime(), this._currentCount)

    this._interval = setInterval(() => {
      this._currentCount++

      this._runningCallBack(this._getRemainingTime(), this._currentCount)

      if (this._getRemainingTime() === 0) {
        this._breakPointCount = 0
        this._currentCount = 0
        this._onEndCallBack()
        this.stop()
      }
    }, this._intervalTime)
  }
}

CountDown.prototype._getRemainingTime = function () {
  return (this._maxCount - this._currentCount)
}

CountDown.prototype._stop = function () {
  if (this._isTimerExist()) {
    clearInterval(this._interval)
    this._interval = null
  }
}

CountDown.prototype._isTimerExist = function () {
  return this._interval !== null
}

CountDown.prototype.restart = function () {
  this._breakPointCount = 0
  this._stop()
  this.start()
}

CountDown.prototype.stop = function () {
  this._stop()
  this._onEndCallBack()
}

CountDown.prototype.pause = function () {
  if (this._isTimerExist()) {
    this._breakPointCount = this._currentCount
    this._stop()
  }
}

CountDown.prototype.onEnd = function (OnEndCallBack) {
  this._onEndCallBack = OnEndCallBack
}

CountDown.prototype.onRunning = function (RunningCallBack) {
  this._runningCallBack = RunningCallBack
}

CountDown.prototype.isRunning = function () {
  return this._isTimerExist()
}
