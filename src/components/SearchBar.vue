<template>
    <div class="searchbarContainer">
        <input ref="searchInput" type="text" v-model="configStore.searchText" @keydown="handleKeydown" @contextmenu.stop />
    </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "@/stores/config";
import { ref, onMounted } from 'vue';

const configStore = useConfigStore();

const searchInput = ref<HTMLInputElement | null>(null);

function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
        if (configStore.searchText === "") return;
        window.open(`https://www.google.com/search?q=${configStore.searchText}`)
    }
}

onMounted(() => {
    document.addEventListener('keydown', event => {
        if (/^[a-zA-Z]$/.test(event.key)) {
            searchInput.value?.focus();
            console.log(event.key);
        }

    })
})

</script>

<style scoped>
.searchbarContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 100%;
    padding: 5px;

    input {
        text-align: center;
        background-color: transparent;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--unfocus-color);
        width: min(60%, 25rem);
        max-width: 40rem;
        height: 1.6rem;
        outline: none;
        transition: 0.3s ease;
        color: var(--unfocus-color);
    }

    input:focus {
        width: min(calc(60% + 5%), 30rem);
        height: calc(1.6rem + 0.2rem);
        border-color: var(--focus-color);
        color: var(--focus-color);
    }
}
</style>