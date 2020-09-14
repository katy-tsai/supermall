<template>
<div class="scroll-to-top">
    <i class="icono-upArrow"></i>
</div>
</template>

<script>
export default {
    name: "ScrollToTop",
    data() {
        return {};
    }
};
</script>

<style scoped>
.scroll-to-top {
    width: 45px;
    height: 45px;
    background-color: #fff;
    opacity: 0.9;
    border: 1px solid #eee;
    position: fixed;
    right: 5px;
    bottom: 53px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px #eee;
}

.icono-upArrow {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    font-style: normal;
    color: #f70c37;
    text-align: left;
    text-indent: -9999px;
    direction: ltr;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
    -webkit-transform: translateY(3px) rotate(-90deg);
    transform: translateY(3px) rotate(-90deg);
    width: 12px;
    height: 3px;
    margin: 20px 17px;
    box-shadow: inset 0 0 0 2px;
    text-align: center;
}

.icono-upArrow:before {
    content: "";
    pointer-events: none;
    border-style: solid;
    border-width: 8px 0 8px 8px;
    border-color: transparent;
    border-left-color: inherit;
    left: 100%;
    right: auto;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

.icono-upArrow:after {
    content: "";
    pointer-events: none;
}
</style>
