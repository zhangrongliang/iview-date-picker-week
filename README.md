# iview-DatePickerWeeks
日期控件拓展，选择周，返回周7天数据。
## 使用方法

```js
<template lang="html">
<div>
    <date-picker-weeks :value="value3" confirm multiple show-week-numbers placeholder="请选择第几周" type="date" style="width:550px;" @on-change="value3 = $event"></date-picker-weeks>
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
