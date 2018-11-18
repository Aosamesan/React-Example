export const md5 = require('md5')


export const ActionTypes = {
    SORT_COLORS: "SORT_COLORS",
    ADD_COLOR: "ADD_COLOR",
    RATE_COLOR: "RATE_COLOR",
    REMOVE_COLOR: "REMOVE_COLOR"
}

export const SortMethods = {
    SORT_BY_DATE: "SORT_BY_DATE",
    SORT_BY_RATING: "SORT_BY_RATING",
    SORT_BY_TITLE: "SORT_BY_TITLE"
}

export const SortComparer = {
    SORT_BY_DATE: (a, b) => a.timestamp < b.timestamp,
    SORT_BY_RATING: (a, b) => a.rating < b.rating,
    SORT_BY_TITLE: (a, b) => a.title > b.title
}

export const SortTitles = {
    SORT_BY_DATE: "날짜순",
    SORT_BY_RATING: "평가순",
    SORT_BY_TITLE: "이름순"
}

export const InitialState = {
    colors: [
        {
            id: md5('바닷빛 파랑'),
            title : "바닷빛 파랑",
            color: "#0070ff",
            rating: 3,
            timestamp: new Date("2018-11-01")
        },
        {
            id: md5('토마토'),
            title: '토마토',
            color: '#d10012',
            rating: 2,
            timestamp: new Date("2018-11-02")
        },
        {
            id: md5('잔디'),
            title: '잔디',
            color: '#67bf4f',
            rating: 1,
            timestamp: new Date("2018-11-03")
        },
        {
            id: md5('파티 핑크'),
            title: '파티 핑크',
            color: "#ff00f7",
            rating: 5,
            timestamp: new Date("2018-11-04")
        }
    ],
    sort: SortMethods.SORT_BY_TITLE
}