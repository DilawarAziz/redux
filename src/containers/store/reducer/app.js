var INITIAL_STATAE ={
    name1:"Dilawer Aziz"
}


export default ( state=INITIAL_STATAE,action)=>{
    // console.log()
    // console.log(action.name4)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                name4: action.name4,
                name5 : action.name5
            })
            // break;
            
            // default:
            //     break;
        }
        
        return state



    
}