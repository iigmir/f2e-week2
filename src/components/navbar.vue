<template>
    <nav>
        <div>
            <p> Location </p>
            <select name="location" id="nav-location">
                <option value="1">fdns</option>
                <option value="2">fdns</option>
                <option value="3">fdns</option>
            </select>
        </div>
        <div>
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
export default {
    name: "navbar",
    components: {}
}
</script>
