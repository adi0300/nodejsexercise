import axios from "axios"

export default async function createEmployee(req,res){
    let body;
    let name = req.query.name
    let companyID = req.query.companyID
    let longitude = req.query.longitude
    let latitude = req.query.latitude
    let city = req.query.city
    let gender = req.query.gender
    let age = req.query.age

    const url=`${process.env.URL}`
    const data = `mutation($name:String! $companyID:String! $longitude:Int! $latitude:Int!
        $city:String! $gender:String! $age:Int!){
            createEmployee(input:{
                name: $name
                companyID: $companyID
                location:{
                    longitude: $longitude
                    latitude: $latitude
                    city: $city
                }
                gender: $gender
                age: $age
            })
            {
                name
                location{
                    longitude
                    latitude
                    city
                }
                age
                gender
            }
        }`
    const vars = {"name": name, "companyID":companyID,"longitude":longitude,"latitude":latitude,"city":city,"gender":gender,"age":age}
    const gqlquery = {"query": data, "variables":vars}

    const response = await axios.post(url,gqlquery)
    body = response.data
    console.log(body)
    res.json(body)
};