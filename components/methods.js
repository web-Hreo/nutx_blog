//type=1 => 时间戳
//type=2 => yyyy-dd-mm hh-mm
export const getDateDiff = (dateTimeStamp, type = 2) => {
  // .getTime()

  if (type == 2) {
    dateTimeStamp = dateTimeStamp.replace(/-/g, '/') // 把所有-转化成/
    dateTimeStamp = new Date(dateTimeStamp).getTime()
  }
  var minute = 1000 * 60
  var hour = minute * 60
  var day = hour * 24
  var halfamonth = day * 15
  var month = day * 30
  var now = new Date().getTime()
  var diffValue = now - dateTimeStamp
  if (diffValue < 0) { return }
  var monthC = diffValue / month
  var weekC = diffValue / (7 * day)
  var dayC = diffValue / day
  var hourC = diffValue / hour
  var minC = diffValue / minute
  let result = ''
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + "月前"
  }
  else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前"
  }
  else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前"
  }
  else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前"
  }
  else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前"
  } else
    result = "刚刚"
  return result
}

//返回js判断早上好,上午好,下午好,傍晚好,晚上好
export function sayHi() {
  let str = ''
  const hour = new Date().getHours()
  if (hour < 6) { str = "凌晨好！" }
  else if (hour < 9) { str = "早上好！" }
  else if (hour < 12) { str = "上午好！" }
  else if (hour < 14) { str = "中午好！" }
  else if (hour < 17) { str = "下午好！" }
  else if (hour < 19) { str = "傍晚好！" }
  else if (hour < 22) { str = "晚上好！" }
  else { str = "夜里好！" }
  return str
}

// 复制功能
export const copyText = (data) => {
  // 存储传递过来的数据
  let OrderNumber = data;
  // 创建一个input 元素
  // createElement() 方法通过指定名称创建一个元素
  let newInput = document.createElement("input");
  // 讲存储的数据赋值给input的value值
  newInput.value = OrderNumber;
  // appendChild() 方法向节点添加最后一个子节点。
  document.body.appendChild(newInput);
  // 选中input元素中的文本
  // select() 方法用于选择该元素中的文本。
  newInput.select();
  // 执行浏览器复制命令
  //  execCommand方法是执行一个对当前文档，当前选择或者给出范围的命令
  document.execCommand("Copy");
  // 清空输入框
  newInput.remove();
}
