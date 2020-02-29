import React , {useEffect} from 'react';
import Axios from 'axios'

export default function Bus(){


    useEffect(()=>{
        BusDataFetch();
    },[])

    function BusDataFetch(){
        // dynamic chaining ...
        Axios.get('http://openapi.gbis.go.kr/ws/rest/busarrivalservice?serviceKey=ZxrZfsn3W1SzrPkT25l4PDqkccKegvzS6SJxvHgc3yHTFm0ctdzwIZIkMgZNPwCyDoiNzAWJ4Uz%2BihCp%2BMqmHQ%3D%3D&stationId=200000153&routeId=200000078&staOrder=109')
        .then((res) => {
            console.log(res)
        })
    }

    return(
        <div>Hello, Bus!</div>
    )
}