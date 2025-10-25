# 构建环境

从现在开始，你将从头开始开发一个 QwQNT 框架插件。

该节内容将会简要介绍如何构建一个插件开发环境。

## 使用模板

QwQNT 框架并未提供官方实现的插件模板。

下列均为社区模板，出现任何问题均与 QwQNT 框架官方无关。

### adproqwq 模板

[点击查看](https://github.com/adproqwq/QwQNT-PluginTemplate-Vite-pnpm/)

该模板由 [@adproqwq](https://github.com/adproqwq/) 提供。

该模板完全为 Typescript 设计，采用 pnpm + Vite + Oxc 开发链。

### xiyuesaves 模板

[点击查看](https://github.com/xiyuesaves/ts-plugin-template/)

该模板由 [@xiyuesaves](https://github.com/xiyuesaves/) 提供。

该模板完全为 Typescript 设计，采用 pnpm 作为包管理器。

该模板可用于开发 QwQNT 框架与 LiteLoaderQQNT 框架通用插件。

## 自己构建

我们使用 Typescript 为例。

我们假设你已经完成了项目的初始化。

首先，请在 package.json 中添加 QwQNT 框架官方的 schema 。

::: code-group

```json [package.json]
"$schema": "https://raw.githubusercontent.com/qwqnt-community/types/main/plugin.schema.json"
```

:::

由于 Electron 项目的特殊性，我们建议你将 tsconfig.json 拆分为两个文件分别对应使用 node 的主进程和使用 web 的 preload 和渲染进程。

假设你将其拆分为 tsconfig.node.json 和 tsconfig.web.json 。

请执行下列命令以安装 QwQNT 框架官方核心类型定义库。

::: code-group

```sh [npm]
npm install github:qwqnt-community/types --save-dev
```

```sh [pnpm]
pnpm add github:qwqnt-community/types -D
```

:::

然后再修改两个 tsconfig.*.json 文件。

::: code-group

```json [tsconfig.node.json]
"compilerOptions": {
  "types": ["@qwqnt/types/main"]
}
```

```json [tsconfig.web.json]
"compilerOptions": {
  "types": ["@qwqnt/types/preload", "@qwqnt/types/renderer"]
}
```

:::

在 tsconfig.json 中引入这两个文件：

::: code-group

```json [tsconfig.json]
"references": [
  { "path": "./tsconfig.node.json" },
  { "path": "./tsconfig.web.json" }
]
```

:::