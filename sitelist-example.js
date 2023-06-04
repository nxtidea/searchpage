/*
site数组中元素对象的说明：
{
    "name": "站点名称",
    "search": "搜索模板字符串",
    "description": "站点描述，鼠标放在对应按钮上显示。为空时不显示。",
    "home": "网站主页，在搜索框为空的情况下点击跳转。此项为空时将尝试从search中提取主页"
},

*/

const group_data = [
    {
        "name": "网页",
        "sites": [
            {
                "name": "Google",
                "search": "https://www.google.com/search?q=%s"
            },
            {
                "name": "百度",
                "search": "https://www.baidu.com/s?wd=%s"
            },
            {
                "name": "必应",
                "search": "https://www.bing.com/search?mkt=zh-SG&q=%s"
            }
        ]
    },
    {
        "name": "编程",
        "sites": [
            {
                "name": "GitHub",
                "search": "https://github.com/search?utf8=✓&q=%s",
            },
            {
                "name": "菜鸟",
                "search": "https://www.runoob.com/?s=%s"
            },
            {
                "name": "PyPI",
                "search": "https://pypi.org/search/?q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "MDN",
                "search": "https://developer.mozilla.org/zh-CN/search?q=%s"
            },
            {
                "name": "Stackoverflow",
                "search": "https://stackoverflow.com/search?q=%s"
            },
        ]
    },
    {
        "name": "知识",
        "sites": [
            {
                "name": "知乎",
                "search": "http://www.zhihu.com/search?q=%s"
            },
            {
                "name": "少数派",
                "search": "https://sspai.com/search/post/%s",
                "home": "",
                "description": ""
            },
            {
                "name": "v2ex",
                "search": "https://www.google.com/search?q=%s+site:v2ex.com",
                "home": "",
                "description": ""
            },
            {
                "name": "简书",
                "search": "https://www.jianshu.com/search?q=%s",
                "home": "",
                "description": ""
            }
        ]
    },
    {
        "name": "视频",
        "sites": [
            {
                "name": "Bilibili",
                "search": "https://search.bilibili.com/all?keyword=%s",
                "home": "https://www.bilibili.com/"
            },
            {
                "name": "Youtube",
                "search": "https://www.youtube.com/results?search_query=%s"
            },
            {
                "name": "西瓜视频",
                "search": "https://www.ixigua.com/search/%s"
            },
            {
                "name": "抖音",
                "search": "https://www.douyin.com/search/%s"
            },
            {
                "name": "快手",
                "search": "https://www.kuaishou.com/search/video?searchKey=%s"
            }
        ]
    },
    {
        "name": "社交媒体",
        "sites": [
            {
                "name": "贴吧",
                "search": "http://tieba.baidu.com/f?kw=%s&ie=utf-8",
            },
            {
                "name": "微信",
                "search": "http://weixin.sogou.com/weixin?ie=utf8&type=2&query=%s"
            },
            {
                "name": "微博",
                "search": "https://s.weibo.com/weibo?q=%s"
            },
            {
                "name": "豆瓣",
                "search": "http://www.douban.com/search?source=suggest&q=%s"
            }
        ]
    },
    {
        "name": "图片",
        "sites": [
            {
                "name": "必应",
                "search": "https://www.bing.com/images/search?q=%s"
            },
            {
                "name": "Yandex",
                "search": "https://yandex.com/images/search?from=tabbar&text=%s"
            },
            {
                "name": "百度",
                "search": "http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s"
            },
            {
                "name": "谷歌",
                "search": "https://www.google.com/search?q=%s&tbm=isch"
            },
            {
                "name": "搜狗",
                "search": "https://pic.sogou.com/pic/emo/searchList.jsp?statref=home_form&keyword=%s",
            },
            {
                "name": "Pixiv",
                "search": "http://www.pixiv.net/search.php?word=%s",
            },
            {
                "name": "Pinterest",
                "search": "https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta",
            }
        ]
    },
    {
        "name": "语言",
        "sites": [
            {
                "name": "必应",
                "search": "http://cn.bing.com/dict/search?q=%s"
            },
            {
                "name": "谷歌",
                "search": "https://translate.google.com/?q=%s&sl=auto&tl=zh-CN"
            },
            {
                "name": "有道",
                "search": "http://dict.youdao.com/search?q=%s",
            },
            {
                "name": "DeepL",
                "search": "https://www.deepl.com/translator#zh/en/%s",
            }
        ]
    },
    {
        "name": "购物",
        "sites": [
            {
                "name": "淘宝",
                "search": "http://s.taobao.com/search?q=%s",
                "home": "https://www.taobao.com/"
            },
            {
                "name": "京东",
                "search": "http://search.jd.com/Search?keyword=%s&enc=utf-8"
            },
            {
                "name": "天猫",
                "search": "http://list.tmall.com/search_product.htm?q=%s"
            },
            {
                "name": "什么值得买",
                "search": "http://search.smzdm.com/?c=home&s=%s",
            },
            {
                "name": "喵喵折",
                "search": "https://www.miaomiaozhe.com/search?q=%s",
            }
        ]
    },
    {
        "name": "音频",
        "sites": [
            {
                "name": "网易云",
                "search": "http://music.163.com/#/search/m/?s=%s"
            },
            {
                "name": "酷我",
                "search": "http://www.kuwo.cn/search/list?key=%s",
            },
            {
                "name": "5sing",
                "search": "http://search.5sing.kugou.com/?keyword=%s",
            },
            {
                "name": "PodLink",
                "search": "https://pod.link/",
                "description": "播客搜索",
            },
            {
                "name": "播客",
                "search": "https://www.lingjiangtai.com/search/%s",
                "description": "播客工具",
            }
        ]
    },
    {
        "name": "表情包",
        "sites": [
            {
                "name": "逗救",
                "search": "https://www.dbbqb.com/s?w=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "斗图啦",
                "search": "https://www.pkdoutu.com/search?keyword=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "发表情",
                "search": "https://www.fabiaoqing.com/search/bqb/keyword/%s",
                "home": "",
                "description": ""
            },
            {
                "name": "爱斗图",
                "search": "http://www.adoutu.com/search?keyword=%s",
                "home": "",
                "description": ""
            },
        ]
    },
    {
        "name": "生活",
        "sites": [
            {
                "name": "下厨房",
                "search": "https://www.xiachufang.com/search/?keyword=%s",
                "home": ""
            },
            {
                "name": "马蜂窝",
                "search": "https://www.mafengwo.cn/search/q.php?q=%s",
                "home": "",
                "description": ""
            },
        ]
    }
]