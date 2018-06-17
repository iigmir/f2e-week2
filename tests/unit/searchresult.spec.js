import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import searchresult from "@/components/searchresult.vue";

describe( "searchresult.vue" , () =>
{
    describe( "group_arrays" , () =>
    {
        it( "should group source array into input numbers" , () =>
        {
            const source_object = {a:"123",b:456,c:false};
            const case1 = [
                [{a:"123",b:456,c:false},{a:"123",b:456,c:false},{a:"123",b:456,c:false}],
                [{a:"123",b:456,c:false},{a:"123",b:456,c:false},{a:"123",b:456,c:false}],
                [{a:"123",b:456,c:false},{a:"123",b:456,c:false},{a:"123",b:456,c:false}],
                [{a:"123",b:456,c:false}]
            ];
            const case2 = [
                [
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                    {a:"123",b:456,c:false}
                ],
                [
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                    {a:"123",b:456,c:false}
                ],
            ];
            const case3 = [
                [
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false}
                ],
                [
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                    {a:"123",b:456,c:false},{a:"123",b:456,c:false}
                ],
            ];
            const case4 = [ [
                {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                {a:"123",b:456,c:false},{a:"123",b:456,c:false},
                {a:"123",b:456,c:false},{a:"123",b:456,c:false}
            ] ];
            let source_array = [];
            for( let i=0 ; i < 10 ; i++ )
            {
                source_array.push( source_object );
            }
            const wrapper = shallowMount( searchresult, {
                propsData: { src_array : source_array }
            });
            expect( wrapper.group_arrays( 3 ) ).to.deep.equal( case1 );
            expect( wrapper.group_arrays( 5 ) ).to.deep.equal( case2 );
            expect( wrapper.group_arrays( 6 ) ).to.deep.equal( case3 );
            expect( wrapper.group_arrays( 10 ) ).to.deep.equal( case4 );
            expect( wrapper.group_arrays( 20 ) ).to.deep.equal( case4 );
            expect( wrapper.group_arrays( 100 ) ).to.deep.equal( case4 );
            // assert.deepEqual({ tea: 'green' }, { tea: 'green' });
        });
    });
    /*
    it('renders props.msg when passed', () =>
    {
        const msg = 'new message';
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        });
        expect( wrapper.text() ).to.include(msg );
    })
    */
});