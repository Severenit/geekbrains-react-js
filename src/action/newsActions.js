export function newsAdd(news) {
    return {
        type: 'ADD_NEWS',
        payload: news
    }
}

export function showNews() {
    return (dispatch) => {
        dispatch({
            type: 'SHOW_NEWS'
        });

        setTimeout(() => {
            dispatch({
                type: 'SHOW_NEWS_RESOLVE'
            });
        }, 3000);
    }
}