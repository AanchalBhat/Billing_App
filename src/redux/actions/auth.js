import { INVOICE } from './authDefine'


export const invoice_data = (userInfo)=>dispatch=>{
//    let arr =[]
//    arr.push(userInfo)
    dispatch({
        type:INVOICE,
       
        payload: {userInfo}
    })
    // setTimeout(()=>dispatch({type:LOG_OUT,payload:id}),2000)
}