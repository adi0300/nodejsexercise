import axios from "axios"

export default async function getTodos(req,res){
    let body;
    const url=`${process.env.URL}`
    const data = `query{todos{
        id
        text
        done
    }
    }`
    const gqlquery = {"query": data};

    const response = await axios.post(url,gqlquery)
    body = response.data
    console.log(body)
    res.send(body)
}