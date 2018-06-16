<template>
    <div id="result">
        <aside class="panel">
            <h2> Showing <mark>15</mark> results by… </h2>
            <div class="tags">
                <span>
                    Koahsiung
                    <i class="far fa-times-circle"></i>
                </span>
                <span>
                    Entertainment
                    <i class="far fa-times-circle"></i>
                </span>
            </div>
        </aside>
        <div class="area">
            <article>
                <div class="image">
                    <img src="http://www.mobygames.com/images/covers/l/319702-minecraft-playstation-4-edition-minecraft-plastic-texture-pack-playstation-4-front-cover.jpg"
                    alt="Kogi Cosby sweater.">
                </div>
                <section>
                    <h3> Kogi Cosby sweater. </h3>
                    <p> Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo. </p>
                    <div style="margin:8px">
                        <span class="author">Author</span> 
                        <span class="tag">Entertainment</span>
                    </div>
                    <div>
                        <span class="location">
                            <i class="fas fa-map-marker"></i> Kaohsiung City
                        </span>
                        <span class="date">
                            <i class="far fa-calendar-alt"></i> 2018/5/24 - 2018/5/31
                        </span>
                    </div>
                </section>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: "searchresult",
    components: {}
}
</script>

<style lang="scss" scoped>
#result
{
    text-align: left;
    .panel
    {
        padding: 1rem;
        h2
        {
            mark
            {
                background-color: transparent;
                color:#7828B4;
            }
        }
        .tags
        {
            display: flex;
            span
            {
                border: 1px solid #9013FE;
                color:#7828B4;
                border-radius: 100px;
                padding: 8px 16px 8px 16px;
                margin-right: 5px;
            }
        }
    }

    article
    {
        display: grid;
        grid-template-columns: 240px 1fr;
        grid-template-rows: 240px;
        .image img
        {
            width: 100%;
            height: 100%;
        }
        section
        {
            padding-left: 2rem;
            background-color: #FFFFFF;
        }
        div span { margin-right: 1rem; }
        .tag
        {
            background: #D7D7D7;
            color: #FFFFFF;
            border-radius: 100px;
            padding: 8px;
        }
    }
}
</style>
