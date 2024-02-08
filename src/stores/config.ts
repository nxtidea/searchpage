import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Site {
    title: string;
    description: string;
    homeUrl: string;
    searchStr: string;
    tags: string[];
    favorite: boolean;
}

export const useConfigStore = defineStore('config', () => {
    const globalConfig = reactive({
        "sites": reactive<Site[]>([]),
    });
    function setGlobalConfig(newConfig: object) {
        Object.assign(globalConfig, newConfig);
    }
    function addSite(site: Site) {
        globalConfig.sites.push(site);
    }
    function removeSite(site: Site) {
        const index = globalConfig.sites.indexOf(site);
        globalConfig.sites.splice(index, 1);
    }
    function editSite(site: Site, newSite: Site) {
        const index = globalConfig.sites.indexOf(site);
        globalConfig.sites[index] = newSite;
    }

    const currentSite = ref<Site | null>(null);

    const searchText = ref('');
    const isSearchTextEmpty = computed(() => searchText.value === "");

    const sitesTags = computed(() => {
        const tags = new Set<string>();
        globalConfig.sites.forEach(site => {
            site.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    });
    const selectedTags = ref<string[]>([]);

    const filteredSites = computed(() => {
        const selectedByTags = selectedTags.value.length === 0 ? globalConfig.sites : globalConfig.sites.filter((site) => {
            return selectedTags.value.every((tag) => site.tags.includes(tag));
        });
        const finalfilteredSites = showFavorite.value ? selectedByTags.filter(
            (site) => site.favorite
        ) : selectedByTags;
        return finalfilteredSites
    });

    const showFavorite = ref(true);
    const showEditSite = ref(false);


    return {
        globalConfig,
        setGlobalConfig,
        addSite,
        removeSite,
        editSite,
        currentSite,
        searchText,
        isSearchTextEmpty,
        sitesTags,
        selectedTags,
        showFavorite,
        filteredSites,
        showEditSite
    };
})
