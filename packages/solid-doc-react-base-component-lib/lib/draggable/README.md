# Draggable 拖拽组件

- Draggable

## usage

#### API

| 标题    | 类型           | 默认值 | 描述                                             |
| ------- | -------------- | ------ | ------------------------------------------------ |
| value   | string         | []     | 数据数组                                         |
| style   | object         | " "    | 样式                                             |
| render  | function(item) | " "    | 生成复杂数据的渲染函数，参数为当前行数据         |
| sortKey | string         | " "    | 设置根据排序的字段                               |
| codeKey | string         | " "    | 制定 item 中某个字段作为拖拽元素的 key，必须唯一 |
