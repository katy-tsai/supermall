<template>
<div class="goods-item">
    <img :src="'https://s4.lativ.com.tw/' + item.image_140" alt="" />
    <div>
        <span>{{ item.ProductName }}</span>
        <span>${{ item.Price }}</span>
    </div>
</div>
</template>

<script>
export default {
    name: "GoodShowItem",
    props: {
        item: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    data() {
        return {};
    }
};
</script>

<style>
.goods-item {
    width: 45%;
}

.goods-item img {
    width: 100%;
}
</style>
