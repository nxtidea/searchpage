<template>
  <div id="mainContainer" @contextmenu="onAppContextMenu">
    <div id="PannelContainer" v-show="!configStore.showEditSite">
      <SearchBar />
      <ShowPannelVue />
    </div>
    <EditSite v-if="configStore.showEditSite" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import SearchBar from './components/SearchBar.vue';
import ShowPannelVue from './components/ShowPannel.vue';
import EditSite from './components/EditSite.vue';
import { exportConfig, initConfig, loadConfigFromFile } from './utils/configUtils';
import { setItem } from './utils/storageUtils';
import ContextMenu from '@imengyu/vue3-context-menu'
import { useConfigStore } from './stores/config';
const configStore = useConfigStore();


function onAppContextMenu(e: MouseEvent) {
  e.preventDefault();
  ContextMenu.showContextMenu({
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light",
    x: e.x,
    y: e.y,
    items: [
      {
        label: "添加网站",
        onClick: () => {
          configStore.currentSite = null;
          configStore.showEditSite = true;
        }
      },
      {
        label: "导入配置",
        onClick: () => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = ".json";
          input.onchange = (e) => {
            loadConfigFromFile(e, configStore);
          };
          input.click();
        }
      },
      {
        label: "导出配置",
        onClick: () => {
          exportConfig(configStore.globalConfig);
        }
      }
    ]
  });
}


onMounted(() => {
  initConfig(configStore);
});

watch(configStore.globalConfig, (newConfig) => {
  setItem("globalConfig", newConfig);
}, { deep: true });

</script>


<style scoped>
#mainContainer {
  margin: auto;
  max-width: 45rem;
  height: 100vh;
}
</style>
