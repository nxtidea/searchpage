const defaultConfig = {
    "sites": [
        {
            "title": "Bilibili",
            "description": "",
            "homeUrl": "https://www.bilibili.com/",
            "searchStr": "https://search.bilibili.com/all?keyword=%s",
            "tags": [
                "视频"
            ],
            "favorite": true
        },
        {
            "title": "Google",
            "description": "",
            "homeUrl": "https://www.google.com/",
            "searchStr": "https://www.google.com/search?q=%s",
            "tags": [
                "搜索"
            ],
            "favorite": false
        },
        {
            "title": "Vue",
            "description": "",
            "homeUrl": "https://cn.vuejs.org/guide/introduction.html",
            "searchStr": "",
            "tags": [
                "文档"
            ],
            "favorite": false
        }
    ],
    "setting": {}
}


export const exportConfig = (data: object) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);

    // get time like YYYYMMDD-HHmmss, 获取当地时间
    function formatTime(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，需要加 1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}${month}${day}-${hours}${minutes}${seconds}`;
    }
    let currentTime = formatTime(new Date());
    let fileName = `config-${currentTime}.json`;

    downloadAnchorNode.setAttribute("download", fileName);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

const loadConfigFromDefault = async (configStore: any) => {
    configStore.setGlobalConfig(defaultConfig);
};

const checkConfig = (config: any) => {
    if (!config.sites) {
        alert('配置文件缺少 sites 字段');
        return false;
    } else {
        let checkResult = ''
        config.sites.forEach((site: any) => {
            if (!site.title) {
                checkResult += "有网站没有标题\n";
            }
            if (!site.homeUrl && !site.searchStr) {
                checkResult += `${site.title} 既没有主页链接也没有搜索链接\n`;
            }
            if (!site.tags || site.tags.length === 0) {
                checkResult += `${site.title} 至少需要一个标签\n`;
            }
        });
        if (checkResult !== '') {
            alert(checkResult);
            return false;
        }
    }
    return true;
}

const handleConfig = (config: any) => {
    config.sites.forEach((site: any) => {
        site.homeUrl = site.homeUrl ? site.homeUrl : site.searchStr.match(/https?:\/\/.*?\//g)[0];
    })
    return config;
}

export const loadConfigFromFile = (e: Event, configStore: any) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result;
            if (result) {
                let jsondata = JSON.parse(result as string);
                if (!checkConfig(jsondata)) {
                    return;
                }
                configStore.setGlobalConfig(handleConfig(jsondata));
            }
        };
        reader.readAsText(file);
    }
};

const loadConfigFromLocalStorage = (configStore: any) => {
    const config = localStorage.getItem("globalConfig");
    if (config) {
        configStore.setGlobalConfig(JSON.parse(config));
    }
}

export const initConfig = (configStore: any) => {
    if (localStorage.getItem("globalConfig")) {
        loadConfigFromLocalStorage(configStore);
    } else
        loadConfigFromDefault(configStore)
}
