import {useParams} from "react-router-dom"
const Parameter = ()=>{
    const {id} = useParams()
    return(
        <div>This is parameter {id}</div>
    )
}

export default Parameter