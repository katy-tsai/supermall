<template>
<div id="tabbar">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "TabBar",
    data() {
        return {};
    }
};
</script>

<style>
#tabbar {
    display: flex;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
}
</style>
