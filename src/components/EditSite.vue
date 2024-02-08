<template>
    <div id="pageContainer">
        <form>
            <div>
                <label for="title">标题</label>
                <input type="text" id="title" v-model="newSite.title" placeholder="必填" />
            </div>
            <div>
                <label for="description">网站描述</label>
                <input type="text" id="description" v-model="newSite.description" placeholder="可留空" />
            </div>
            <div>
                <label for="homeUrl">主页</label>
                <input type="text" id="homeUrl" v-model="newSite.homeUrl" placeholder="留空自动从搜索字符串获取" />
            </div>
            <div>
                <label for="searchStr">搜索字符串</label>
                <input type="text" id="searchStr" v-model="newSite.searchStr" placeholder="用%s代替搜索词" />
            </div>
            <div>
                <label for="tags">标签</label>
                <TagSelector v-model="taglist" />
            </div>
            <div>
                <button type="submit" @click.prevent="submitForm">
                    {{ configStore.currentSite === null ? "添加" : "修改" }}
                </button>
                <button type="submit" @click.prevent="cancelForm">取消</button>
            </div>
        </form>
    </div>
</template>
    

<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from "vue";
import { type Site, useConfigStore } from "@/stores/config"
import TagSelector from "@/components/TagSelector.vue";
const configStore = useConfigStore();


// 使用reactive创建一个符合Site类型的对象
const newSite = reactive<Site>({
    title: "",
    description: "",
    homeUrl: "",
    searchStr: "",
    tags: [],
    favorite: false,
});
const taglist = ref<string[]>([]);
watch(taglist, (newVal) => {
    newSite.tags = newVal;
});
watchEffect(() => {
    if (newSite.homeUrl === "") {
        let temphome = newSite.searchStr.match(/https?:\/\/.*?\//g)
        newSite.homeUrl = temphome ? temphome[0] : "";
    }
});



if (configStore.currentSite) {
    newSite.title = configStore.currentSite.title;
    newSite.description = configStore.currentSite.description;
    newSite.homeUrl = configStore.currentSite.homeUrl;
    newSite.searchStr = configStore.currentSite.searchStr;
    newSite.favorite = configStore.currentSite.favorite;
    taglist.value = configStore.currentSite.tags;
}

const checkForm = (site: Site) => {
    let checkResult = {
        title: false,
        url: false,
        tag: false,
    };
    site.title === "" ? checkResult.title = false : checkResult.title = true;
    site.tags.length === 0 ? checkResult.tag = false : checkResult.tag = true;
    site.homeUrl === "" && site.searchStr === "" ? checkResult.url = false : checkResult.url = true;
    return checkResult;
};

const submitForm = () => {
    //回到MainView
    let checkResult = checkForm(newSite);
    if (!checkResult.title) {
        alert("标题不能为空");
        return;
    } else if (!checkResult.url) {
        alert("主页和搜索字符串不能同时为空");
        return;
    } else if (!checkResult.tag) {
        alert("标签不能为空");
        return;
    } else {
        if (configStore.currentSite === null) {
            configStore.addSite(newSite);
        } else {
            configStore.editSite(configStore.currentSite, newSite);
        }
        configStore.showEditSite = false;
    }
};

const cancelForm = () => {
    configStore.currentSite = null;
    configStore.showEditSite = false;
};

</script>

<style scoped>
#pageContainer {
    display: grid;
    place-items: center;
    height: 100vh;
}

form {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: 100%;
    max-width: 20rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        label {
            font-size: 1.2rem;
        }

        input {
            padding: 0.5rem;
            border: 1px solid var(--unfocus-color);
            color: var(--unfocus-color);
            border-radius: 5px;
            outline: none;
            transition: 0.3s ease;
            background-color: transparent;
        }
    }

    button {
        margin-top: 1rem;
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s ease;
        background-color: var(--unfocus-color);
    }
}
</style>
