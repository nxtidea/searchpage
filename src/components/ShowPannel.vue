<template>
    <div class="mainContainer">
        <div class="tagContainer">
            <span class="tag" @click="handleFavoriteClick" :class="{ selected: configStore.showFavorite }">收藏</span>
            <span class="tag" v-for="tag in configStore.sitesTags" :key="tag" @click="handleTagClick($event, tag)"
                :class="{ selected: configStore.selectedTags.includes(tag) }">
                #{{ tag }}
            </span>
        </div>
        <hr class="Separator" />
        <div class="siteContainer">
            <!-- <TransitionGroup name="sitelist"> -->
            <span class="site" v-for="site in configStore.filteredSites" :key="site.title" @click="handleSiteClick(site)"
                @contextmenu="onTagContextMenu($event, site)"
                :class="{ nosearch: site.searchStr === '' && !configStore.isSearchTextEmpty }" :title="site.description">
                {{ site.title }}
            </span>
            <!-- </TransitionGroup> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConfigStore, type Site } from '@/stores/config';
import ContextMenu from '@imengyu/vue3-context-menu'
const configStore = useConfigStore();


function onTagContextMenu(e: MouseEvent, site: Site) {
    e.preventDefault();
    e.stopPropagation();
    let favoriteLabel = site.favorite ? "取消收藏" : "添加收藏";
    ContextMenu.showContextMenu({
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
        x: e.x,
        y: e.y,
        items: [
            {
                label: favoriteLabel,
                onClick: () => {
                    site.favorite = !site.favorite;
                }
            },
            {
                label: "修改网站",
                onClick: () => {
                    configStore.currentSite = site;
                    configStore.showEditSite = true;
                }
            },
            {
                label: "删除网站",
                onClick: () => {
                    configStore.removeSite(site);
                }
            }
        ]
    });
}



// 为tag添加普通click事件，实现单选
const switchSelectedTag = (tag: string) => {
    if (configStore.selectedTags.includes(tag)) {
        configStore.selectedTags = configStore.selectedTags.filter((selectedTag) => selectedTag !== tag);
        configStore.selectedTags.length === 0 && (configStore.showFavorite = true);
    } else {
        configStore.showFavorite = false;
        configStore.selectedTags = [tag];
    }
};
//为tag添加ctrl+click事件，实现多选
const multiSelectedTag = (tag: string) => {
    if (configStore.selectedTags.includes(tag)) {
        configStore.selectedTags = configStore.selectedTags.filter((selectedTag) => selectedTag !== tag);
        configStore.selectedTags.length === 0 && (configStore.showFavorite = true);
    } else {
        configStore.selectedTags = [...configStore.selectedTags, tag];
    }
};
//把单选和多选绑定到tag
const handleTagClick = (event: MouseEvent, tag: string) => {
    event.ctrlKey ? multiSelectedTag(tag) : switchSelectedTag(tag);
};

const handleFavoriteClick = () => {
    configStore.selectedTags = [];
    configStore.showFavorite = !configStore.showFavorite;
};

const handleSiteClick = (site: Site) => {
    callSearchForSite(site);
};

const callSearchForSite = (site: Site) => {
    if (configStore.isSearchTextEmpty) {
        window.open(site.homeUrl, '_blank');
    } else {
        if (site.searchStr === '' || typeof site.searchStr === 'undefined') {
            window.open(site.homeUrl, '_blank');
        } else {
            window.open(site.searchStr.replace(/\%s/, configStore.searchText), '_blank');
        }
    }
}



</script>

<style scoped>
.mainContainer {
    width: 100%;
}

.tagContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    flex-wrap: wrap;

    .tag {
        margin: 5px;
        padding: 2px 5px;
        border-radius: 5px;
        border: 1px solid var(--unfocus-color);
        cursor: pointer;

        &:hover {
            border: 1px solid var(--accent-color);
            color: var(--accent-color);
        }

        &.selected {
            border: 1px solid var(--accent-color);
            font-size: calc(1rem + 0.1rem);
            color: var(--accent-color);
        }
    }
}

.Separator {
    width: 90%;
    margin: 10px auto;
    border: 0;
    border-top: 1px solid var(--unfocus-color);
}

.siteContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5px;
    flex-wrap: wrap;

    .site {
        margin: 5px;
        padding: 2px 5px;
        border-radius: 5px;
        border: 1px solid var(--unfocus-color);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
            border: 1px solid var(--accent-color);
            color: var(--accent-color);
        }

        &.nosearch {
            border: 1px solid var(--unsearchable-color);
            color: var(--unsearchable-color);
            cursor: default;
        }
    }
}

.sitelist-move,
.sitelist-enter-active,
.sitelist-leave-active {
    transition: all 0.3s ease;
}

.sitelist-enter-from,
.sitelist-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.sitelist-leave-active {
    position: absolute;
}
</style>