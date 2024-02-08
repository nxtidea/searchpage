<template>
    <input ref="inputRef" @change="handleChange" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Tagify from "@yaireo/tagify";
import { watch } from "vue";
import { useConfigStore } from "@/stores/config";
const configStore = useConfigStore();

const props = defineProps(["modelValue"]);

const emits = defineEmits(["update:modelValue"]);

const inputRef = ref();
let tagify = ref();

function handleChange(e: any) {
    let str = e.target.value;
    if (!str) emits("update:modelValue", []);
    else {
        let ans = str.split(",");
        emits("update:modelValue", ans);
    }
}

onMounted(() => {
    tagify.value = new Tagify(inputRef.value, {
        originalInputValueFormat: (valuesArr) =>
            valuesArr.map((item) => item.value).join(","),
        whitelist: configStore.sitesTags,
        dropdown: {
            maxItems: 50,           // <- mixumum allowed rendered suggestions
            classname: "tags-look", // <- custom classname for this dropdown, so it could be targeted
            enabled: 0,             // <- show suggestions on focus
            closeOnSelect: true    // <- do not hide the suggestions dropdown once an item has been selected
        }
    });
    tagify.value.loadOriginalValues(props.modelValue);


});
</script>

<style>
@import "@yaireo/tagify/dist/tagify.css";

tags.tagify {
    border-radius: 5px;
}

.tags-look .tagify__dropdown__item {
    display: inline-block;
    vertical-align: middle;
    border-radius: 3px;
    padding: .3em .5em;
    border: 1px solid #CCC;
    background: #9c9a9a;
    margin: .2em;
    font-size: .85em;
    color: black;
    transition: 0s;
}

/* .tags-look .tagify__dropdown__item--active {
    color: black;
} */

.tags-look .tagify__dropdown__item:hover {
    background: lightyellow;
    border-color: gold;
}

/* .tags-look .tagify__dropdown__item--hidden {
    max-width: 0;
    max-height: initial;
    padding: .3em 0;
    margin: .2em 0;
    white-space: nowrap;
    text-indent: -20px;
    border: 0;
} */
</style>