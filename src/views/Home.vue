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
        // console.log( this.$store );
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
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1rem;
    grid-auto-rows: minmax(10rem, auto);
}
</style>
