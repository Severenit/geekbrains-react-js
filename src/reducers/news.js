const initialState = {
    year: 2018,
    items: [],
    isBusy: false
}



export default function news(state = initialState, action) {
    const news = [
        {
            title: 'Facebook предлагает пользователям установить на телефон бесплатный VPN. Лучше этого не делать',
            descr: 'В мобильном клиенте Facebook появилась кнопка «Protect» («Защитить»), которая ведет пользователей напрямую на страницу приложения Onavo Protect в App Store.'
        },
        {
            title: 'Сноубордисты — самые необычные звезды Олимпиады',
            descr: 'Они просыпают старт, теряют куртки, твитят между заездами — и выполняют супертрюки'
        },
        {
            title: 'Белый дом определился, что делать с МКС. Станцию отдадут бизнесменам',
            descr: 'Международная космическая станция на низкой земной орбите используется с 1998 года. Станцию строили всем миром: кроме США участие в проекте принимали Россия, Канада, Япония, а также Европейское космическое агентство.'
        }
    ];

    switch (action.type) {
        case 'SHOW_NEWS':
            return { ...state, isBusy: true }
        case 'SHOW_NEWS_RESOLVE':
            return { ...state,
                items: news,
                isBusy: false
            }
        case 'SHOW_NEWS_REJECT':
            return { ...state, isBusy: false }
        case 'ADD_NEWS':
            return { ...state, items: action.payload }
        default:
            return state;
    }
}