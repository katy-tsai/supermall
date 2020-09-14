<template>
<div class="goods-show">
    <goods-show-item v-for="(item, index) in goods" :key="index + '_' + item.ProductID" :item="item" />
</div>
</template>

<script>
import GoodsShowItem from "./GoodsShowItem";
export default {
    name: "GoodsShow",
    props: {
        goods: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    components: {
        GoodsShowItem
    },
    data() {
        return {};
    }
};
</script>

<style>
.goods-show {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
}
</style>
