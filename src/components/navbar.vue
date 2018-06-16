<template>
    <nav>
        <div class="bar">
            <p> Location </p>
            <select name="location" id="nav-location">
                <option value="1">fdns</option>
                <option value="2">fdns</option>
                <option value="3">fdns</option>
            </select>
        </div>
        <div class="bar">
            <p> Categories </p>
            <label>
                <input type="checkbox" name="all" id=""> All
            </label>
            <label>
                <input type="checkbox" name="c1" id=""> /
            </label>
            <label>
                <input type="checkbox" name="q1" id=""> /
            </label>
            <label>
                <input type="checkbox" name="w1" id=""> /
            </label>
        </div>
    </nav>
</template>

<script>
// import { mapState } from "vuex";

export default {
    name: "navbar",
    components: {}
}
</script>

<style lang="scss" scoped>
nav
{
    width: 80%;
    margin-left: 5rem;
    text-align: left;
    background: #EBEBEB;
    .bar
    {
        padding: 2rem;
        p
        {
            font-family: "Roboto";
            font-size: 20px;
            color: #000000;
        }
        select
        {
            width: 100%;
            border: 0;
            padding: 1rem;
            font-size: 16px;
        }
    }
}
</style>

