# iview-date-picker-week

## 介绍

基于[iviewui-DatePicker](https://www.iviewui.com/components/date-picker),拓展日期控件选择第几周，返回选中周的7天日期数据，array。

日期控件拓展，选择周，返回周7天数据。

## 使用方法

下载模块[iview-date-picker-week](https://www.npmjs.com/package/iview-date-picker-week)

```nodejs
yarn add iview-date-picker-week || npm i iview-date-picker-week
```

注入组件

```js
import Vue from 'vue'
import iviewDatePickerWeek from 'iview-date-picker-week'
Vue.component('iview-date-picker-week', iviewDatePickerWeek)
```

开始使用

```js
<template lang="html">
<div>
    <iview-date-picker-week :value="value3" confirm multiple show-week-numbers placeholder="请选择第几周" type="date" style="width:550px;" @on-change="value3 = $event"></iview-date-picker-week>
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

更多参考[DatePickerWeek](https://www.iviewui.com/components/date-picker)

## 1.0.x 效果

![iview.png](https://github.com/zhangrongliang/iview-date-picker-week/blob/master/iview.png?raw=true)

## TODO

1.  周选中高亮
2.  返回change中改为对象，附带第几周
3.  日期选择控件添加&lt;本周>按钮
