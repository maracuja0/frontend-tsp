import React from "react";
import {Container} from "react-bootstrap";
import axios from 'axios'
import { useState, useEffect } from 'react';
import CardComponent from "./Components/Cart";
import _header from './_header.png'
import {useGlobalContext} from "./GlobalInfo";


function Liked (){
    const {userInfo} = useGlobalContext();

    const [data, setData] = useState([]);

    // const getLiked = ()=>{
    //     axios
    //         .get(`http://localhost:8080/api/user/${userInfo.id}/liked`)
    //         .then((response) => {
    //             console.log(response.data)
    //             setData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    useEffect(() => {
        if (userInfo && userInfo.id) {
            axios
                .get(`http://localhost:8080/api/user/${userInfo.id}/liked`)
                .then((response) => {
                    console.log(response.data)
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);
    if (!(!userInfo || !userInfo.id)) {
        return (

            <div>
                <h1 className="ms-4 mt-4">Избранное</h1>
                <Container className={"pt-3 d-flex flex-wrap justify-content-center"}>
                    {data.map((liked) => (
                        <CardComponent
                            //   key={liked.user_id}
                            title={liked.positionId.name}
                            text={liked.positionId.description}
                            imgUrl={_header}
                        />
                    ))}

                </Container>
            </div>
        );
    } else {
        return (
            <div>
                <h1 className="ms-4 mt-4">Избранное</h1>
                <div className={"d-flex justify-content-center"} style={{height: "500px"}}>
                    <h1 className={"align-self-center"}>Пожалуйста, авторизуйтесь!</h1>
                </div>
            </div>
        );
    }

    // if(userInfo !== undefined || userInfo !== null || userInfo.size !== 0){
    //     getLiked()
    // }

}

export default Liked;
   