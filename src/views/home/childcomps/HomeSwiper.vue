<template>
<div>
    <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index + item.title">
            <a :href="item.link">
                <img :src="item.image" :alt="item.title" />
            </a>
        </swiper-item>
    </swiper>
</div>
</template>

<script>
import {
    Swiper,
    SwiperItem
} from "@/components/common/swiper";
export default {
    name: "HomeSwiper",
    props: {
        banners: {
            type: Array,
            default () {
                return [];
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    data() {
        return {};
    }
};
</script>

<style></style>
