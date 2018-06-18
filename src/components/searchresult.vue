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
                    <div style="margin-bottom:15px">
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
            <article>
                <div class="image">
                    <img src="http://www.mobygames.com/images/covers/l/319702-minecraft-playstation-4-edition-minecraft-plastic-texture-pack-playstation-4-front-cover.jpg"
                    alt="Kogi Cosby sweater.">
                </div>
                <section>
                    <h3> Kogi Cosby sweater. </h3>
                    <p> Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo. </p>
                    <div style="margin-bottom:15px">
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
            <article>
                <div class="image">
                    <img src="http://www.mobygames.com/images/covers/l/319702-minecraft-playstation-4-edition-minecraft-plastic-texture-pack-playstation-4-front-cover.jpg"
                    alt="Kogi Cosby sweater.">
                </div>
                <section>
                    <h3> Kogi Cosby sweater. </h3>
                    <p> Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo. </p>
                    <div style="margin-bottom:15px">
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
        <div class="pagination">
            <div>
                <span> &lt;&lt; </span>
                <span> 1 </span>
                <span> 2 </span>
                <span> 3 </span>
                <span> &gt;&gt; </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "searchresult",
    components: {},
    data() {
        return {
            src_array: [],
            grouped_array: [],
            filter_array: [],
            items_per_page: 3,
            pages_number: 0,
            current_positison: 0,
            current_pos_array: []
        };
    },
    mounted()
    {
        this.$store.dispatch("init_info");
        // this.src_array = this.$store.state.data_container;
        this.$set( this, "src_array" , this.get_vuex_source );
        // if( this.$store.state.data_container.length === 0 )
        // {
        //     console.log( this.$store.state.data_container );
        //     debugger;
        //     throw new Error("There's problem with vuex!");
        // }
        this.$nextTick( () =>
        {
            // this.$set( this, "src_array" , this.get_vuex_source() );
            // this.$set( this, "pages_number" , this.group_numbers( this.items_per_page ) );
            this.pages_number = this.group_numbers( this.items_per_page );
            this.current_pos_array = this.group_pagination({
                ary:this.src_array,
                items:this.items_per_page,
                page_pos:this.current_positison,
            });
        });
    },
    methods: {
        group_numbers( input )
        {
            let value = Math.ceil( this.src_array.length / input );
            return value;
        },
        group_pagination( input )
        {
            let value = [];
            let initnum = 0;
            let looptimes = 0;
            if( input.page_pos > 0 )
            {
                initnum = input.items * input.page_pos;
                looptimes = input.items + ( input.items * input.page_pos );
            }
            else
            {
                initnum = 0;
                looptimes = input.items;
            }
            for( initnum ; initnum < looptimes ; initnum+=1 )
            {
                if( initnum > input.ary.length - 1 )
                {
                    break;
                }
                value.push( initnum );
            }
            return value;
        }
        // group_arrays( group_times )
        // {
        //     let ary = [];
        //     let num = 0;
        //     for( let i=0; i<this.src_array.length; i+=group_times )
        //     {
        //         //
        //     }
        //     return group_times;
        // }
    },
    computed: {
        get_vuex_source() {
            return this.$store.state.data_container;
        }
    }
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
        grid-template-columns: 220px 2fr 1rem;
        grid-template-rows: 220px;
        grid-auto-rows: 1fr;
        margin-bottom: 1rem;
        .image img
        {
            width: 100%;
            height: 100%;
        }
        section
        {
            padding: 1rem;
            background-color: #FFFFFF;
            h3 { color: #9013FE; }
            p
            {
                height: 40px;
                margin: 0 0 1rem 0;
                overflow: hidden;
                text-overflow: ellipsis;
            }
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

    .pagination
    {
        div
        {
            float: right;
            padding: 2rem;
            span
            {
                padding: 1rem;
                color: #9013FE;
                background: #FFFFFF;
                border: 1px solid #ECEEEF;
                &:first-child { border-radius: 4px 0 0 4px; }
                &:last-child  { border-radius: 4px 4px 0 0; }
                &.chosen{ background: #9013FE;color: #FFFFFF; }
            }
        }
    }
}
</style>
