import React from "react";

class GetData extends React.Component {
    constructor() {
        super();
        this._apiBase = process.env.REACT_APP_API
    }

    async getData(url) {

     const res  = await fetch(`${this._apiBase}${url}`, {
            method: "GET"
        })
        return res.json()
    }

    async getFile(fileName) {
        const token = JSON.parse(localStorage.getItem("user"))
        return await fetch(`${this._apiBase}/api/v1/categories/file/${fileName}`,{
            method: 'GET',
        })
    }


}
export default GetData

