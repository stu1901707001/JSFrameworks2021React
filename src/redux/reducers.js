import actions from './action-types';
import { combineReducers } from 'redux';

function actors(state = [], action) {
    switch (action.type) {
        case actions.SET_ACTORS: {
            return [...action.payload]
        }
        default:
            return state;
    }
}

function actor(state = {}, action) {
    switch (action.type) {
        case actions.SET_ACTOR: {
            return action.payload
        }
        default:
            return state;
    }
}

function tvList(state = [], action) {
    switch (action.type) {
        case actions.SET_TV_LIST: {
            return [...action.payload]
        }
        default:
            return state;
    }
}

function tv(state = {}, action) {
    switch (action.type) {
        case actions.SET_TV: {
            return action.payload
        }
        default:
            return state;
    }
}

function selectedActorFilters(state = {
    searchPhrase: 'name',
    selectedRegion: 'uk',
}, action) {
    switch (action.type) {
        case actions.SET_SEARCH_PHRASE: {
            return {
                ...state,
                ...{
                    searchPhrase: action.payload,
                }
            }
        }
        case actions.SET_SELECTED_REGION: {
            return {
                ...state,
                ...{
                    selectedRegion: action.payload
                }
            }
        }
        default:
            return state;
    }
}

function genres(state = [], action) {
    switch (action.type) {
        case actions.SET_GENRES: {
            return [...action.payload]
        }
        default:
            return state;
    }
}

function listView(state = false, action) {
    switch (action.type) {
        case actions.SET_LIST_VIEW: {
            return action.payload
        }
        default:
            return state;
    }
}


function selectedFilters(state = {
    selectedYear: '2021',
    selectedGenres: [],
}, action) {
    switch (action.type) {
        case actions.SET_SELECTED_YEAR: {
            return {
                ...state,
                ...{
                    selectedYear: action.payload,
                }
            }
        }
        case actions.SET_SELECTED_GENRES: {
            return {
                ...state,
                ...{
                    selectedGenres: [...action.payload]
                }
            }
        }
        default:
            return state;
    }
}

export default combineReducers({ tvList: tvList, tv: tv, actors, actor, genres, listView, selectedFilters, selectedActorFilters });
