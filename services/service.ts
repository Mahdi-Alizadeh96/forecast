// <import header
import { header } from "./header";
// import header>

// < weather api
export const getWeatherApi = async (city: string) => {
    try{
        let response = await header().get(`/direct`, {
            params : {
                q : city,
                appid : "b03f14f09010d27c5651d9690562cbe0"
            }
        });
        
        return handleResponse(response);

    } catch (e){
        return handleCatch(e);
    }
   
};
// weather api>

// <<<<handle resposnse and catch

function handleResponse(response): any {

    if(response.status == 200 ||response.status == 201 ||response.status == 202){
        if(response.data){
            return {type: true, data:response.data}
        }else {
            return {type: false, message:"Some thing Went Wrong", status: response.status}
        }
        
    }else {
        throw "error"
    }
};

function handleCatch(e) {
    return {
        type:false,
        message: e,
        status:( e.response && e.response.status )? e.response.status : null
    }
}

// handle resposnse and catch>>>> 