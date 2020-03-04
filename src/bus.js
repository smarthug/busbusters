import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios'

import { NeuCard, NeuButton } from 'neumorphic-ui'




let busDataArr = []

if (localStorage.getItem("bus")) {
    console.log(localStorage.getItem("bus"))
    var tmp = localStorage.getItem("bus")
    console.log(JSON.parse(tmp))
    //console.log(JSON.parse(tmp[0]))
    busDataArr = JSON.parse(tmp);
} else {
    busDataArr = [
        { "name": "Your sample route", "url": "https://www.google.com/maps/dir/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD+411-371+%EA%B2%BD%EA%B8%B0%EB%8F%84+%EA%B3%A0%EC%96%91%EC%8B%9C+%EC%9D%BC%EC%82%B0%EC%84%9C%EA%B5%AC+%EC%A3%BC%EC%97%BD%EB%8F%99+%EB%8C%80%EC%82%B0%EB%A1%9C+106/%EA%B3%A0%EC%96%91%EC%8B%9C+%EB%8C%80%ED%99%94%EB%8F%99+%EA%B1%B4%EC%84%A4%EC%82%B0%EC%97%85%ED%98%81%EC%8B%A0%EC%84%BC%ED%84%B0/@37.6752544,126.7495353,16z/am=t/data=!4m14!4m13!1m5!1m1!1s0x357c8ff6a2c0d231:0x779d45bd6c773443!2m2!1d126.7663994!2d37.674412!1m5!1m1!1s0x357c8578fdd0776d:0x28e8e64f31fbce87!2m2!1d126.741426!2d37.673175!3e3?hl=ko" },
        { "name": "sample Route(Naver)", "url": "https://map.naver.com/v5/directions/14111592.615753975,4533598.088289954,%EA%B0%95%EC%84%A0%EB%A7%88%EC%9D%841%EB%8B%A8%EC%A7%80%EC%95%84%ED%8C%8C%ED%8A%B8,,/14108761.905818436,4533177.089453584,%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B3%A0%EC%96%91%EC%8B%9C%20%EC%9D%BC%EC%82%B0%EC%84%9C%EA%B5%AC%20%EB%8C%80%ED%99%94%EB%8F%99%20%EA%B3%A0%EC%96%91%EB%8C%80%EB%A1%9C%20315,,/-/transit?c=14109221.7979326,4533552.2878445,14,0,0,0,dh" }
    ]


    localStorage.setItem("bus", JSON.stringify(busDataArr))
}


export default function Bus() {
    const defaultRef = useRef();
    const inputRef = useRef();
    const [busData, setBusData] = useState(busDataArr);

    useEffect(() => {

    }, [])


    async function handleFiles(e) {
        let jsonFile = e.target.files[0]


        let reader = new FileReader();
        reader.onload = (evt) => {

            let resultJson = JSON.parse(evt.target.result)

            localStorage.setItem("bus", JSON.stringify(resultJson.data))

            setBusData(resultJson.data)
        }

        reader.readAsText(jsonFile)


    }

    function AddAdress(){
        console.log('hihi')
        let newName = prompt("rootName?")
        let newAddress = prompt("copy and paste google map or naver map url")

        let newbusArr = [ ...busData , {name:newName, url:newAddress}]

        localStorage.setItem("bus", JSON.stringify(newbusArr))
        setBusData(newbusArr)
    }



    function downloadObjectAsJson(){

        let tmp = {
            "data":busDataArr
        }
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tmp));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", "your" + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      }


    return (
        <React.Fragment>
            <input ref={inputRef} type="file" onChange={handleFiles} />
            <button onClick={AddAdress}>주소추가</button>
            <button onClick={downloadObjectAsJson}>백업파일저장</button>
            {busData.map((v, i) => {

                return (
                    <div key={i} style={{ margin: '30px', width: '100%' }}>
                        <a style={{ textDecoration: "none" }} href={v.url}>

                            <NeuButton text={v.name}></NeuButton>
                        </a>
                    </div>
                )
            })}

        </React.Fragment>
    )
}


//<a href={v.url}>{v.name}</a>