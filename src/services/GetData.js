import React from "react";
// const _apiBase = process.env.REACT_APP_API_KEY

class GetData extends React.Component {
    constructor() {
        super();
        this._apiBase = "http://176.126.164.191:8080"
    }

    async getData(url) {

     const res  = await fetch(`${this._apiBase}${url}`, {
            method: "GET"
        })
        return res.json()
    }

}
export default GetData

