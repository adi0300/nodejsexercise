import axios from "axios"

export default async function getCompany(req,res){
    let body;
    const url=`${process.env.URL}`
    const data = `query{ company{
        name
    }
    }`
    const gqlquery = {"query": data};

    const response = await axios.post(url,gqlquery)
    body = response.data
    console.log(body)
    res.json(body)

};