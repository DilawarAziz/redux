var INITIAL_STATAE ={
    email:"dilaweraziz555@gmail.com"
}

export default  ( state=INITIAL_STATAE,action)=>{
    // console.log(action)
    // console.log(action.users)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: action.users
            })
           
        }
        
        return state

}


