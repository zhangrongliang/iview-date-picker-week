# iview-date-picker-weeks
基于iview,拓展日期控件选择第几周，返回选中周的7天日期数据，array。
日期控件拓展，选择周，返回周7天数据。
## 使用方法

```js
1.
import Vue from 'vue'
import iviewDatePickerWeeks from 'iview-date-picker-weeks'
Vue.component('iview-date-picker-weeks', iviewDatePickerWeeks)

2.
<template lang="html">
<div>
    <iview-date-picker-weeks :value="value3" confirm multiple show-week-numbers placeholder="请选择第几周" type="date" style="width:550px;" @on-change="value3 = $event"></iview-date-picker-weeks>
</div>
</template>

<script>
export default {
    data() {
        return {
            value3: ['2019-02-20', '2019-02-21', '2019-02-22']
        }
    }
}
</script>

```  
更多参考[DatePickerWeeks](https://www.iviewui.com/components/date-picker)

##1.0.0 效果
![iview.png](https://github.com/zhangrongliang/iview-date-picker-weeks/blob/master/iview.png?raw=true)
##TODO
1. 周选中高亮
2. 返回change中改为对象，附带第几周
3. 日期选择控件添加<本周>按钮
### 基本
```txt
base/date-table.vue
控制显示 跟 class name

base/mixin.js
控制点击事件,返回点击对象
page:43
handleClick()

panel/date.vue
返回周天数
page:168
handlePick()

picker.vue
数据显示

```  
