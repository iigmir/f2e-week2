<template>
    <header>
        <div class="title">
            <h1>{{ msg }}</h1>
        </div>
        <div class="search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Explore your own activities" />
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: { msg: String }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header
{
    background: #7828B4;
    color: #FFFFFF;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // grid-gap: 1rem;
    grid-auto-rows: minmax(7rem, auto);

    .title, .search { margin: auto; }

    .title
    {
        grid-column: 1;
        h1
        {
            font-family: "Optima";
            padding-left: 3rem;
        }
    }

    .search
    {
        grid-column: 2 / 3;
        input
        {
            border: 0;
            width: 20rem;
            height: 3rem;
            font-size: 1.2rem;
            color: rgba(255,255,255,0.50);
            background-color: rgba( 0, 0, 0, 0 );
            border-bottom: 1px solid #FFFFFF;
            padding-left: 2rem;
        }
        
        i
        {
            transform: translate(1.5rem,5px);
            font-size: 1.5rem;
        }
    }
}
</style>
