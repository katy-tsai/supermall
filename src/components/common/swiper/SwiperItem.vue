<template>
<div class="slide">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "SwiperItem"
};
</script>

<style>
.slide {
    width: 100%;
    /*空間不夠時不被壓縮*/
    flex-shrink: 0;
}

.slide img {
    width: 100%;
}
</style>
