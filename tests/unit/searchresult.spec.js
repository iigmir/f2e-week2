import { expect } from "chai";
import { mount } from "@vue/test-utils";
import searchresult from "@/components/searchresult.vue";
// const expect = require("chai");
// const mount = require("@vue/test-utils");
// const searchresult = require("../../src/components/searchresult.vue");

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
            const $store = { state: { data_container : source_array } };
            const wrapper = mount( searchresult, {
                mocks: { $store }
            });
            expect( wrapper.vm.group_arrays( 3 ) ).to.deep.equal( case1 );
            expect( wrapper.vm.group_arrays( 5 ) ).to.deep.equal( case2 );
            expect( wrapper.vm.group_arrays( 6 ) ).to.deep.equal( case3 );
            expect( wrapper.vm.group_arrays( 10 ) ).to.deep.equal( case4 );
            expect( wrapper.vm.group_arrays( 20 ) ).to.deep.equal( case4 );
            expect( wrapper.vm.group_arrays( 100 ) ).to.deep.equal( case4 );
        });
    });
});