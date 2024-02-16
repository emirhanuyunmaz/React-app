import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import { Outlet, useParams } from "react-router-dom";

export default function IndexLayout () {

    return(<>
        <div className="container mt-3">
            <div className="row">
               <div className="col-sm-8">
                    <div className="row">
                        <Outlet/>
                    </div>
                </div>                
                <div className="col-sm-4">
                    <CategoryList/>
                </div>
            </div>
        </div>
        
    </>)
}