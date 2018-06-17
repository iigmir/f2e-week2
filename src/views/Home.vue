<template>
    <main>
        <Headerbar msg="HaveFun"/>
        <div id="maingrid">
            <navbar class="navbar" />
            <searchresult class="result" />
        </div>
    </main>
</template>

<script>
// @ is an alias to /src
import Headerbar from "@/components/header.vue";
import navbar from "@/components/navbar.vue";
import searchresult from "@/components/searchresult.vue";

export default {
    name: "home",
    mounted()
    {
        this.$store.dispatch("init_info");
    },
    components: {
        Headerbar,
        navbar,
        searchresult
    }
}
</script>

<style lang="scss" scoped>
#maingrid
{
    display: grid;
    grid-template-columns: 400px 1fr 10px;
    grid-auto-rows: minmax(10rem, auto);
}
</style>
