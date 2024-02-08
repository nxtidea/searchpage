
# SearchPage

独特而易用的导航页/聚合搜索页面，没找到合用的导航页所以自己写了一个。


## 特性

与常见的导航页相比，有以下不同：

- 聚合搜索：点击即可直接调用对应网站的搜索。
- 多标签管理：使用标签管理站点，一个站点可添加多个标签。
- 自定义站点：方便的添加和修改站点。
- 数据本地保存：配置和站点数据保存到 LocalStorage。
- 配置迁移：可以从文件导入配置，也可随时将当前数据导出保存。

此外的功能特性包括：

- 提供单文件版本，浏览器本地打开也可以正常使用。
- 自动切换明暗模式（Vue自带）。


## 怎样使用

### 方式1. 本地使用

1. 下载[编译后的单文件版本](https://github.com/nxtidea/searchpage/releases/download/v0.1.0/SearchPage-standalone.zip)，解压获得`index.html`页面。

2. 将`index.html`保存到本地的合适位置。

3. 在浏览器中打开页面，即可使用。

> 我使用的`ungoogled-chromium`可以直接将本地文件设为新标签页，如果你的浏览器不支持，或许需要看看是否有合适的插件可以做到这一点。

### 方式2. 部署到服务器/静态托管

1. 下载编译后的项目，二选一即可：
    - [普通版本](https://github.com/nxtidea/searchpage/releases/download/v0.1.0/SearchPage-normal.zip)：可以合理利用网络缓存，节省资源。
    - [单文件版本](https://github.com/nxtidea/searchpage/releases/download/v0.1.0/SearchPage-standalone.zip)：所有内容都在单文件中。
2. 将解压后的文件部署到 http 服务器或 vercel 等托管站点。
3. 打开网址，即可使用。若你的网址是：`https://example.com/`
    - 普通版本：打开`https://example.com/`
    - 单文件版本：打开`https://example.com/index.html`


## 开发

### 推荐的开发环境

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


### 项目建立

```sh
pnpm install
```

#### 开发过程中的编译和热重载

```sh
pnpm dev
```

#### 用于生产的打包编译、类型检查和压缩

```sh
pnpm build
```

#### 使用 [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### 编译与单文件编译

#### 单文件编译

受限于浏览器安全策略限制，为了在本地打开也能正常使用，需要将项目编译为单 html 文件。

默认情况下，运行下面命令，即可在`dist`文件夹得到编译后的结果。
```sh
pnpm build
```

#### 普通编译

如果不希望编译为单文件，需要在`vite.config.ts`中注释掉`vite-plugin-singlefile`相关的2行：

```typescript

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from "vite-plugin-singlefile"; // 1. 将该行注释

export default defineConfig({
  plugins: [
    vue(),
    viteSingleFile(), // 2. 将该行注释
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

注释后，运行下面命令，即可在`dist`文件夹得到编译后的结果。
```sh
pnpm build
```

## 下一步

- 将本项目制作为浏览器插件，方便本地使用。
- 美化界面，包括主动夜间模式，自定义主题颜色等。
- 通过WebDAV同步数据。


## 致谢

 - [lhqs/lhqs-site-nav](https://github.com/lhqs/lhqs-site-nav)：一个简洁的导航页，是本项目界面设计的灵感来源。
- [richardtallent/vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile)：提供了将Vue项目打包为单文件的能力。
