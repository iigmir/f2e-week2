<template>
    <nav>
        <div class="bar">
            <p> Location </p>
            <select name="location" id="nav-location">
                <option value="0">All</option>
                <option value="1">B ares</option>
                <option value="2">C area</option>
            </select>
        </div>
        <div class="bar">
            <p> Date </p>
            <label class="txt">
                <span>From</span>
                <input type="date" name="foo">
            </label>
            <label class="txt">
                <span>To</span>
                <input type="date" name="bar">
            </label>
        </div>
        <div class="bar">
            <p> Categories </p>
            <label class="checkbox">
                <input type="checkbox" name="all">
                <span>All</span>
            </label>
            <label class="checkbox">
                <input type="checkbox" name="c1"> 
                <span>siuhdg</span>
            </label>
            <label class="checkbox">
                <input type="checkbox" name="q1"> 
                <span>ewoitq</span>
            </label>
            <label class="checkbox">
                <input type="checkbox" name="w1"> 
                <span>cbns,d,n</span>
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
    width: 300px;
    margin-left: 8rem;
    text-align: left;
    background: #EBEBEB;
    .bar
    {
        padding: 2rem;
        border-bottom: 1px solid #D7D7D7;
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
        label
        {
            display: block;
            font-size: 16px;
            color: #000000;
            &.txt
            {
                display: flex;
                padding: 2px;
                justify-content: space-between;
                & > * { flex-basis: 100%; }
                input
                {
                    padding: 4px;
                }
            }
        }
    }
}
</style>

