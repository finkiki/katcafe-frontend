import Vue from 'vue'

export default {


    SET_COMMENTS:  (state, comments ) => {

        const map = {};

        for (const comment of comments)
            map[comment.slug] = comment ;

        state.map = map;


    },

    ADD_COMMENTS: (state, comments)=>{

        for (const comment of comments)
            Vue.set( state.map, comment.slug, comment );

        state.map = Object.assign({}, state.map );

    },

    SET_COMMENTS_PAGE_INFO: (state, {pageIndex, pageCount, pageMore} ) => {

        state.pageIndex = pageIndex;
        state.pageCount = pageCount;
        state.pageMore = pageMore;

    },

    SET_COMMENTS_DELETE: ( state, ids ) => {

        ids.map(it => Vue.delete( state.map, it ));

    }

}