Astros中间件

用户在书写时可使用CMD形式

该中间件的filter为：

```
{
    modType: 'page',
    fileType: 'js'
}
```
会在代码顶部增加define的实现函数实体。因此该中间件需要在所有的JS相关中间件之后执行（保证define的实现函数在最顶部）、JS压缩中间件之前。