<template>
<div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index + item.title">
        <a :href="item.link">
            <img :src="item.image" alt="" />
            <div>{{ item.title }}</div>
        </a>
    </div>
</div>
</template>

<script>
export default {
    name: "RecommendView",
    props: {
        recommends: {
            type: Array,
            default: []
        }
    },
    data() {
        return {};
    }
};
</script>

<style>
.recommend {
    background-color: #fff;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 5px solid #eee;
}

.recommend-item {
    flex: 1;
    padding: 5px;
}

.recommend-item img {
    width: 90%;
    margin-bottom: 5px;
}

.recommend-item div {
    font-size: 0.9rem;
}
</style>
