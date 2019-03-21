/* eslint-disable default-case */
const initState = {
    projects: [
        { id: 1, title: "title deneme1", content: "ddeneme content1" },
        { id: 2, title: "title deneme2", content: "ddeneme content2" },
        { id: 3, title: "title deneme3", content: "ddeneme content3" },
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
    }
    return state;
}
export default projectReducer;