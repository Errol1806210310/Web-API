function animate(obj, target, callback) {
  clearInterval(obj.timer);//防止创建多个obj.timer
  obj.timer = setInterval(function () {
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer);
      if (callback)
        callback();
    }
    var step = (target - obj.offsetLeft) / 10;
    step = step < 0 ? Math.floor(step) : Math.ceil(step);
    obj.style.left = obj.offsetLeft + step + 'px';
  }, 30);
}