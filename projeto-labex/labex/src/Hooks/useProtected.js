import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useProtected = () => {
    const history = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token === null || token === ""){
            alert ("Para acessar a área administrativa é precisa fazer login!")
            history("/login")
        }
    }, [history])
}

export default useProtected;

