<template>
<div class="tab-controller">
    <div v-for="(item, index) in title" :key="index + 'tab_controller'" :class="{ active: currentIndex === index }" @click="tabClick(index)">
        <span>{{ item }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: "TabController",
    props: {
        title: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            currentIndex: 0
        };
    },
    methods: {
        tabClick(index) {
            this.currentIndex = index;
            this.$emit("tabClick", index);
        }
    }
};
</script>

<style>
.tab-controller {
    display: flex;
    text-align: center;
    min-height: 49px;
    line-height: 49px;
    font-size: 0.85rem;
}

.tab-controller div {
    flex: 1;
}

.tab-controller div>span {
    padding: 3px 5px;
    margin-bottom: 3px;
}

.tab-controller div.active>span {
    border-bottom: 2px solid var(--color-high-text);
}

.active {
    color: var(--color-high-text);
}
</style>
