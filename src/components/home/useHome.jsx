import { useState, useEffect } from "react";
import { endpoints } from "../../testData";
import { useNavigate } from "react-router";
import paths from "../../paths";

export const dataTemplate = {
    'user': {
        'email': 'iamkizito@gmail.com',
        'username': 'iamkizito@gmail.com',
        'balance': '7600',
    },
    'others': {}
}


const useHome = (props) => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {  
        const getData = async () => {
            const url = endpoints.home

            const options = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            }

            try {
                const response = await fetch(url, options);
                if (response.ok) {
                    const responseData = await response.json();
                    console.log(responseData)
                    setData(responseData.data)
                } else if (response.status === 401) {
                    navigate(paths.auth)
                } else {
                    
                }

            } catch (error) {
                setData(dataTemplate)
            }
        }

        getData()
    }, [])

    return data;
}

export default useHome;
