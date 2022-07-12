import axios from "axios"

export default async function getCompanyByName(req,res){
    let body;
    let name = req.query.name

    const url=`${process.env.URL}`
    const data = `query($name:String!){
        company(name:$name){
            name
        }
    }`
    const vars = {"name": name}
    const gqlquery = {"query": data, "variables":vars}

    console.log(gqlquery)
    const response = await axios.post(url,gqlquery)
    body = response.data
    console.log(body)
    res.json(body)

};