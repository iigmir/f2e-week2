<template>
    <main>
        <Headerbar msg="HaveFun"/>
        <div id="maingrid">
            <navbar />
            <searchresult />
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
    components: {
        Headerbar,
        navbar,
        searchresult
    }
}
</script>
