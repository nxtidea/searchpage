# searchpage

[English](README_en.md)

自用的聚合搜索页面。

## 特点

- 仅使用轻量的 petite-vue 框架，需要加载的所有文件不超过 100KB。
- 数据与功能分离，所有数据保存在 sitelist.js 文件中。
- 简单的 CSS，但包含了自动切换主题和响应式布局。
- 无需架设服务，本地打开页面即可使用。

## 使用方法

1. 下载本仓库，将仓库文件夹放在你觉得合适的地方。
1. 在文件夹下创建一个名为 `sitelist.js` 的文件，内容可以复制 `sitelist-example.js`。
2. 打开 `index.html` 文件，即可开始使用。
3. 通过修改 `sitelist.js` 文件，可以添加或修改站点，根据自己需要进行调整。
4. 当有更新时，将你自己的 `sitelist.js` 放在新文件夹下，删除旧文件夹即可。

## 数据文件格式

数据文件主要为 json 格式，采用 js 文件保存是为了避免纯本地使用时被同源策略阻拦。

```javascript
const group_data = [
    {
        "name": "网页",
        "sites": [
            {
                "name": "Google",
                "search": "https://www.google.com/search?q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "百度",
                "search": "https://www.baidu.com/s?wd=%s"
                "home": "",
                "description": ""
            }
        ]
    },
    {
        "name": "编程",
        "sites": [
            {
                "name": "GitHub",
                "search": "https://github.com/search?utf8=✓&q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "PyPI",
                "search": "https://pypi.org/search/?q=%s",
                "home": "",
                "description": ""
            }
        ]
    }
]
```
- group_data 中的每个对象代表一个组，其属性包括:
    - 组名: name 
    - 站点列表: sites
- sites 中每个对象代表一个站点，其属性包括:
    - 站点名: name
    - 搜索字符串: search
    - （可为空）搜索框为空时，点击跳转的网站: home
    - （可为空）鼠标悬停在按钮上显示的帮助: description
- 对于 home 属性，如果留空，将自动尝试从 search 字符串中提取