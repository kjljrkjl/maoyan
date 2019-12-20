import {get,post} from "./http" ;

export const movieOnInfoList = (params)=>{
    let url = "/api/ajax/movieOnInfoList" ;
    return get(url,params);
}
export const moreComingList = (params)=>{
    let url = "/api/ajax/moreComingList";
    return get(url,params);
}

export const mostExpected = (params)=>{
    let url = "/api/ajax/mostExpected";
    return get(url,params);
}

export const comingList = (params)=>{
    let url = "/api/ajax/comingList";
    return get(url,params);
}

export const getHotCities = (params)=>{
    let url = "/cities.json";
    return get(url,params);
}