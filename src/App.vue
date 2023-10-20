<template>
    <router-view>
        <translation v-solt="{Component}">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </translation>
    </router-view>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style></style>