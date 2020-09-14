<template>
<div id="home">
    <nav-bar class="home-nav">
        <div slot="center">購物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scrollpotion="scrollpotion" :pullUpLoad="true" @pullingUp="pullingUp">
        <home-swiper :banners="banners" />
        <recommend-view :recommends="recommend" />
        <feature />
        <tab-controller class="tab-controller" :title="['流行', '新款', '精選']" @tabClick="tabClick" />
        <goods-show :goods="showGoods" />
    </scroll>
    <scroll-to-top @click.native="toTopClick" v-show="isShowBackTop" />
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabController from "@/components/content/tabController/TabController";
import GoodsShow from "@/components/content/goodsShow/GoodsShow";
import Scroll from "@/components/common/scroll/Scroll";
import ScrollToTop from "@/components/content/scrollToTop/ScrollToTop";

import HomeSwiper from "./childcomps/HomeSwiper";
import RecommendView from "./childcomps/RecommendView";
import Feature from "./childcomps/Feature";
import {
    getMultidata,
    getHomeGoods
} from "@/network/home";
export default {
    name: "Home",
    data() {
        return {
            banners: [],
            recommend: [],
            tabItems: ["WOMEN", "MEN", "KIDS"],
            currencType: "WOMEN",
            goods: {
                WOMEN: {
                    page: 0,
                    list: []
                },
                MEN: {
                    page: 0,
                    list: []
                },
                KIDS: {
                    page: 0,
                    list: []
                }
            },
            isShowBackTop: false
        };
    },
    components: {
        NavBar,
        TabController,
        Scroll,
        ScrollToTop,
        GoodsShow,
        HomeSwiper,
        RecommendView,
        Feature
    },
    computed: {
        showGoods() {
            return this.goods[this.currencType].list;
        }
    },
    created() {
        this.getMultidata();
        this.getHomeGoods("WOMEN");
        this.getHomeGoods("MEN");
        this.getHomeGoods("KIDS");
    },
    mounted() {
        this.$refs.scroll.refresh();
    },
    methods: {
        pullingUp() {
            this.getHomeGoods(this.currencType);
            this.$refs.scroll.finishPullUp();
        },
        scrollpotion(position) {
            this.isShowBackTop = -position.y > 1000;
        },
        toTopClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        tabClick(index) {
            this.currencType = this.tabItems[index];
        },
        getMultidata() {
            getMultidata().then(res => {
                const {
                    banner,
                    recommend
                } = res.data;
                this.banners = banner.list;
                this.recommend = recommend.list;
            });
        },
        getHomeGoods(type) {
            const page = this.goods[type].page;
            getHomeGoods(type, page).then(res => {
                this.goods[type].list.push(...res);
                this.goods[type].page = page + 1;
            });
        }
    }
};
</script>

<style scoped>
.content {
    position: absolute;
    top: 48px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
}

#home {
    padding-top: 49px;
    height: 100vh;
    position: relative;
}

.home-nav {
    background-color: var(--color-tine);
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
}

.tab-controller {
    position: sticky;
    top: 49px;
    background-color: #fff;
}
</style>
