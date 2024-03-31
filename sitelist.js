const group_data = [
    {
        "name": "网页",
        "sites": [
            {
                "name": "Google",
                "search": "https://www.google.com/search?q=%s"
            },
            {
                "name": "DDG",
                "search": "https://duckduckgo.com/?q=%s"
            },
            {
                "name": "百度",
                "search": "https://www.baidu.com/s?wd=%s"
            },
            {
                "name": "开发",
                "search": "https://kaifa.baidu.com/searchPage?wd=%s"
            },
            {
                "name": "F搜",
                "search": "https://fsoufsou.com/search?q=%s"
            },
            {
                "name": "必应",
                "search": "https://www.bing.com/search?mkt=zh-SG&q=%s"
            },
            {
                "name": "Yandex",
                "search": "https://yandex.com/search/?text=%s"
            },
            {
                "name": "Similarsites",
                "search": "https://www.similarsites.com/site/%s"
            },
            {
                "name": "搜狗",
                "search": "https://www.sogou.com/web?query=%s",
            },
            {
                "name": "phind",
                "search": "https://www.phind.com/search?q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "NewBing",
                "search": "https://www.bing.com/search?showconv=1&q=%s",
                "home": "https://www.bing.com/search?showconv=1&q=hello",
                "description": ""
            },
            {
                "name": "perplexity",
                "search": "https://www.perplexity.ai/",
                "home": "https://www.perplexity.ai/",
                "description": ""
            },
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
                "name": "速查",
                "search": "https://quickref.cn/docs/%s.html"
            },
            {
                "name": "man",
                "search": "https://dashdash.io/1/%s",
                "home": "https://dashdash.io/",
                "description": "man手册，默认搜索1部分，其余点进去看。"
            },
            {
                "name": "grep",
                "search": "https://grep.app/search?q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "Devhints",
                "search": "https://devhints.io/%s"
            },
            {
                "name": "GoPkg",
                "search": "https://pkg.go.dev/search?q=%s",
                "home": "https://pkg.go.dev/std",
                "description": ""
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
                "name": "Can I Use",
                "search": "http://caniuse.com/#search=%s",
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
                "name": "知乎(搜狗)",
                "search": "http://zhihu.sogou.com/zhihu?ie=utf8&query=%s",
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
            },
            {
                "name": "少数派(谷歌)",
                "search": "https://www.google.com/search?q=%s+site:sspai.com",
                "home": "https://sspai.com/",
                "description": ""
            },
            {
                "name": "维基中文",
                "search": "https://www.wikiwand.com/zh-hans/%s",
                "home": "https://zh.wikipedia.org/wiki/Portal:%E7%9B%AE%E5%BD%95"
            },
            {
                "name": "萌百",
                "search": "https://zh.moegirl.org/%s",
            },
            {
                "name": "百度百科",
                "search": "http://baike.baidu.com/search/word?pic=1&sug=1&word=%s"
            },
            {
                "name": "Quora",
                "search": "https://www.quora.com/search?q=%s",
            },
            {
                "name": "51cto",
                "search": "https://so.51cto.com/?keywords=%s&sever_type=2",
                "home": "",
                "description": ""
            },
            {
                "name": "linux中国",
                "search": "https://www.google.com/search?q=%s+site:linux.cn",
                "home": "https://linux.cn",
                "description": ""
            },
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
                "name": "AcFun",
                "search": "https://www.acfun.cn/search/?type=complex&keyword=%s"
            },
            {
                "name": "抖音",
                "search": "https://www.douyin.com/search/%s"
            },
            {
                "name": "快手",
                "search": "https://www.kuaishou.com/search/video?searchKey=%s"
            },
            {
                "name": "JustLive",
                "search": "http://live.yj1211.work/index/search?keyWord=%s",
                // "home": "",
                "description": ""
            },
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
            },
            {
                "name": "Twitter",
                "search": "https://twitter.com/search/%s"
            },
            {
                "name": "Reddit",
                "search": "https://www.reddit.com/search/?q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "Miniflux",
                "search": "http://123.56.10.94:22301/search?q=%s",
                "home": "http://123.56.10.94:22301/categories"
            },
            {
                "name": "博文搜索",
                "search": "https://uglysearch.othing.xyz/",
                "home": "",
                "description": ""
            },
            {
                "name": "小红书",
                "search": "https://www.xiaohongshu.com/search_result/?keyword=%s",
                "home": "",
                "description": ""
            },
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
                "name": "Flickr",
                "search": "https://www.flickr.com/search/?text=%s",
            },
            {
                "name": "花瓣",
                "search": "http://huaban.com/search/?q=%s"
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
            },
            {
                "name": "vocabulary",
                "search": "https://www.vocabulary.com/dictionary/%s",
                "home": "",
                "description": ""
            },
            {
                "name": "英语近义词",
                "search": "https://www.powerthesaurus.org/%s/synonyms",
                "home": "",
                "description": "近义词反义词定义例句"
            },
            {
                "name": "Forvo发音",
                "search": "https://zh.forvo.com/search/%s",
            },
            {
                "name": "YouGlish",
                "search": "https://youglish.com/pronounce/%s/english",
                "home": "",
                "description": "在youtube视频寻找发音"
            },
            {
                "name": "汉典",
                "search": "https://www.zdic.net/hans/%s",
            },
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
            },
            {
                "name": "1688",
                "search": "https://s.1688.com/selloffer/offer_search.htm?keywords=%s",
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
                "name": "千千音乐",
                "search": "https://music.91q.com/search?word=%s",
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
            },
            {
                "name": "sao.fm",
                "search": "https://sao.fm/?s=%s",
                "description": "电台",
            },
        ]
    },
    {
        "name": "学术",
        "sites": [
            {
                "name": "PaperswithCode",
                "search": "https://paperswithcode.com/search?q=%s",
                "home": "https://paperswithcode.com/",
                "description": "搜索关键词不如去浏览主题"
            },
            {
                "name": "谷歌学术",
                "search": "https://scholar.google.com/scholar?hl=zh-CN&q=%s"
            },
            {
                "name": "百度学术",
                "search": "http://xueshu.baidu.com/s?wd=%s"
            },
            {
                "name": "知网",
                "search": "http://epub.cnki.net/kns/brief/default_result.aspx?txt_1_value1=%s&dbPrefix=SCDB&db_opt=CJFQ%2CCJFN%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCCJD%2CHBRD&singleDB=SCDB&action=scdbsearch"
            },
            {
                "name": "dblp",
                "search": "https://dblp.org/search?q=%s",
                "home": "",
                "description": "computer science bibliography"
            },
            {
                "name": "arxiv",
                "search": "https://arxiv.org/search/?query=%s&searchtype=all&source=header",
                "home": "",
                "description": ""
            },
            // {
            //     "name": "万方",
            //     "search": "http://s.g.wanfangdata.com.cn/Paper.aspx?q=%s"
            // },
            // {
            //     "name": "EBSCO",
            //     "search": "http://web.b.ebscohost.com/ehost/results?sid=8e76c941-084d-4b93-b05a-d5f182196017%40sessionmgr102&vid=1&hid=128&bquery=%s"
            // },
            // {
            //     "name": "JSTOR",
            //     "search": "http://www.jstor.org/action/doAdvancedSearch?q0=%s"
            // },
            // {
            //     "name": "Springer",
            //     "search": "http://rd.springer.com/search?query=%s"
            // }
        ]
    },
    {
        "name": "Telegram",
        "sites": [
            {
                "name": "tgscan",
                "search": "https://tgscan.xyz/items?kw=%s",
                "description": "开源简洁",
            },
            {
                "name": "电报狗",
                "search": "https://www.smsgou.com/?s=%s",
                "description": "Telegram综合导航",
            },
            {
                "name": "TG搜",
                "search": "https://tgsou.me/findtg/?keyword=%s",
            },
            {
                "name": "TG喵",
                "search": "https://meow.tg/search/%s",
            },
            {
                "name": "sssoou",
                "home": "https://www.sssoou.com/",
            },
            {
                "name": "千帆搜索",
                "home": "https://tg.qianfan.app/",
                "description": "需登录"
            },
            {
                "name": "tgtw",
                "search": "https://tgtw.cc/?reg=1&search=%s",
            },
            {
                "name": "Lyzem",
                "search": "https://lyzem.com/search?q=%s",
            },
            {
                "name": "botostore",
                "search": "https://botostore.com/search/?q=%s",
                "home": "",
                "description": "tg机器人大全"
            },
        ]
    },
    {
        "name": "资源",
        "sites": [
            {
                "name": "免费砖",
                "search": "https://www.thosefree.com/?s=%s",
                "description": "前端，设计，音视频，应用",
                "home": ""
            },
            {
                "name": "文武科技柜",
                "search": "https://www.wangdu.site/?s=%s",
                "description": "",
                "home": ""
            },
            {
                "name": "奶酪",
                "search": "https://www.runningcheese.com/?post_type=post&s=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "奶酪号内",
                "search": "https://data.newrank.cn/m/s.html?s=PCguOi43PD89&k=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "不死鸟",
                "search": "https://www.google.com/search?q=%s+site:iui.su",
                "home": "https://iui.su/",
                "description": ""
            },
            {
                "name": "G2T",
                "search": "https://go2think.com/?s=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "开源项目",
                "search": "https://awesomeopensource.com/search?q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "Alist",
                "search": [
                    "https://pan.jlbx.xyz/?s=%s",
                    "https://www.google.com/search?q=%s+site:pity.eu.org",
                    "https://www.google.com/search?q=%s+site:pan.t-satoru.top",
                    "https://www.google.com/search?q=%s+site:chirmyram.com",
                    "https://www.google.com/search?q=%s+site:c.suucc.com",
                ],
                "home": [
                    "https://pan.xuz.cc/",
                    "https://github.com/ChirmyRam/ChirmyRam-OneDrive-Repository",
                ],
                "description": "多个Alist站点聚合搜索"
            },
            {
                "name": "阮一峰",
                "search": "https://github.com/search?q=repo%3Aruanyf%2Fweekly+%s&type=code",
                "home": "https://github.com/ruanyf/weekly",
                "description": ""
            },
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
        "name": "软件",
        "sites": [
            {
                "name": "游戏",
                "search": "http://www.zuobiao.press/?s=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "油猴",
                "search": "https://www.google.com/search?q=%s+site:greasyfork.org -inurl:feedback -inurl:by-site",
                "home": "https://greasyfork.org/zh-CN",
                "description": ""
            },
            {
                "name": "扩展",
                "search": "https://www.crxsoso.com/search?keyword=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "果核",
                "search": "https://www.ghxi.com/?s=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "异次元",
                "search": "https://www.iplaysoft.com/?s=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "小众软件",
                "search": "https://www.appinn.com/?s=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "软仓",
                "search": "https://www.ruancang.net/#/sim?q=%s",
                "home": "",
                "description": "生产力软件下载"
            },
            {
                "name": "gunwin",
                "search": "https://sourceforge.net/projects/gnuwin32/files/%s/",
                "home": "",
                "description": ""
            },
            {
                "name": "msys",
                "search": "https://packages.msys2.org/search?q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "HelloGithub",
                "search": "https://hellogithub.com/search/result?q=%s"
            },
        ]
    },
    {
        "name": "影视搜索",
        "sites": [
            {
                "name": "青麦",
                "search": "https://www.qmtv.app/#/search/%s",
                "home": "",
                "description": ""
            },
            {
                "name": "两个BT",
                "search": "https://www.bttwoo.com/xssearch?q=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "茶杯狐",
                "search": "https://cupfox.app/s/%s",
                "home": "",
                "description": ""
            },
            {
                "name": "豌豆",
                "search": "https://www.wandou.pro/search/%s",
                "home": "",
                "description": ""
            },
            {
                "name": "电影狗",
                "search": "https://www.dianyinggou.com/so/%s",
                "home": "",
                "description": ""
            },
            {
                "name": "搜漫",
                "search": "https://www.soman.com/search.html?keyword=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "mox.moe",
                "search": "https://mox.moe/list.php?s=%s",
                "home": "",
                "description": ""
            },
        ]
    },
    {
        "name": "影视下载",
        "sites": [
            {
                "name": "SeedHub",
                "search": "https://seedhub.info/search/?text=%s",
                "home": "",
                "description": ""
            },
            {
                "name": "人人数据库",
                "search": "https://yyets.dmesg.app/search?keyword=%s",
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
    },
    {
        "name": "暂未分类",
        "sites": [
            {
                "name": "33台词",
                "search": "https://33.agilestudio.cn/?subtitleKeyword=%s",
                "description": "查找台词出现在电影中的时间",
                "home": ""
            },
            {
                "name": "识典古籍",
                "search": "https://shidianguji.com/search?queryText=%s",
                "description": "古籍内容搜索",
                "home": ""
            },
            {
                "name": "官网大全",
                "search": "https://www.baidu.com/s?wd=%s site:guanwangdaquan.com",
                "description": "搜索官方网站",
                "home": "https://guanwangdaquan.com"
            },
            {
                "name": "政府国标辟谣",
                "search": "http://www.dajiadaohang.com/?kw=%s",
                "home": "",
                "description": ""
            },
        ]
    },
    {
        "name": "电子书",
        "sites": [
            {
                "name": "哔哩轻小说",
                "search": "https://www.google.com/search?q=%s+site:www.linovelib.com",
                "home": "https://www.linovelib.com/",
                "description": ""
            },
            {
                "name": "轻小说文库",
                "search": "https://www.google.com/search?q=%s+site:wenku8.net",
                "home": "https://www.wenku8.net/",
                "description": ""
            },
        ]
    },
]