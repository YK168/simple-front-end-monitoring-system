# 前端监控系统控制面板

## 技术栈

> Vue3 + Vite3 + Vue Router4 + Pinia + Element Plus + Echarts
> Vue3: https://v3.cn.vuejs.org/
> Vite:构建打包工具 https://vitejs.dev/
> Vue Router:路由管理库  https://router.vuejs.org/zh/index.html
> Pinia:状态管理库  https://pinia.web3doc.top/
> Element Plus:UI库 https://element-plus.gitee.io/
> Echarts: 图表库 https://echarts.apache.org/zh/index.html

## 目录结构

```
├── src
│    ├── api             // api请求
│    ├── assets          // 静态文件
│    ├── components      // 业务通用组件
│    ├── layouts      	 // 布局组件
│    ├── pages           // 业务页面
│    ├── routers         // 路由文件
│    ├── services        // 请求代码
│    ├── store           // 状态管理
│    ├── styles          // 公用样式
│    ├── utils           // 工具类
│    ├── App.vue         // vue模板入口
│    ├── main.ts         // vue模板js
└── vite.config.ts       // vite全局配置
```


## 项目命令

```bash
dev # 启动开发服务器
build # 打包项目
preview # 预览打包项目
```

## 项目功能

1. 登录/注册
2. 首页 - 用于展示项目，新建/删除/修改项目
3. 总览
4. 页面访问详情
5. 网络请求监控

## 项目规范

### 分支规范

main        主分支
develop     开发主分支
feat/xxx    开发主分支

开发者基于 develop 分支拉取自己的开发分支 feat/xxx 开发完毕后合并进 develop 分支，当所有功能开发完毕统一将 develop 分支合并到 main 分支

### 提交规范

项目采用约定式提交规范

```bash
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

Type类型

```bash
'feat', // 新功能 feature
'fix', // 修复 bug
'docs', // 文档注释
'style', // 代码格式(不影响代码运行的变动)
'refactor', // 重构(既不增加新功能，也不是修复bug)
'perf', // 性能优化
'test', // 增加测试
'chore', // 构建过程或辅助工具的变动
'revert', // 回退
'build' // 打包
```

### 开发规范

- 编辑器推荐使用VS Code
- 项目中Vue代码统一使用 composition api 进行开发
- 逻辑函数带注释

## TODO

1. 界面框架优化
2. 登录权限校验
3. axios封装
4. 打包优化
5. CI/CD
6. 一些工程化的东西
7. 一些自动化的东西
