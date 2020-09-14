<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        };
    },
    methods: {
        scrollTo(x, y, time = 500) {
            this.scroll && this.scroll.scrollTo(x, y, time);
        },
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp();
        },
        refresh() {
            this.scroll && this.scroll.refresh();
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        });
        this.scroll.scrollTo(0, 0);
        this.scroll.on("scroll", position => {
            this.$emit("scrollpotion", position);
        });
        this.scroll.on("pullingUp", () => {
            this.$emit("pullingUp");
        });
    }
};
</script>

<style scoped></style>
