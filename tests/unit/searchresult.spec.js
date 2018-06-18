import { expect } from "chai";
import { mount } from "@vue/test-utils";
import searchresult from "@/components/searchresult.vue";

describe( "searchresult.vue" , () =>
{
    describe( "group_arrays" , () =>
    {
        const source_object = {a:"123",b:456,c:false};
        let source_array = [];
        for( let i=0 ; i < 10 ; i++ )
        {
            source_array.push( source_object );
        }
        const $store = { state: { data_container : source_array } };
        const wrapper = mount( searchresult, {
            mocks: { $store }
        });
        
        it( "should get page numbers by given numbers" , () =>
        {
            expect( wrapper.vm.group_numbers( 3 ) ).to.equal( 4 ); // 3,3,3,1
            expect( wrapper.vm.group_numbers( 5 ) ).to.equal( 2 ); // 5,5
            expect( wrapper.vm.group_numbers( 6 ) ).to.equal( 2 ); // 6,4
            expect( wrapper.vm.group_numbers( 10 ) ).to.equal( 1 );// 10
            expect( wrapper.vm.group_numbers( 20 ) ).to.equal( 1 );// 10
            expect( wrapper.vm.group_numbers( 100 ) ).to.equal( 1 );// 10
        });

        it( "should have pagination numbers" , () =>
        {
            expect( wrapper.vm.group_pagination({ items:3, pages:4, page_pos:0, ary:source_array }) ).to.deep.equal([0,1,2]);
            expect( wrapper.vm.group_pagination({ items:5, pages:2, page_pos:1, ary:source_array }) ).to.deep.equal([5,6,7,8,9]);
            expect( wrapper.vm.group_pagination({ items:6, pages:2, page_pos:1, ary:source_array }) ).to.deep.equal([6,7,8,9]);
        });
    });
});