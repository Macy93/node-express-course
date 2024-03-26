
const express = require('express')
const app = express()

const {products} = require('./data')//importing products array from data.js file

app.get ('/',(req, res) =>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')//HomePage heading
})
app.get('/api/v1/products',(req, res)=>{//looping through the products
    const newProducts = products.map((product)=>{
       const {id,name,image} = product
        return {id,name,image}
    })

    res.json(newProducts)
})
 app.get('/api/v1/products/:productID',(req, res)=>{//getting product# but not hardcoding it
    //console.log(req)
    //console.log(req.params)

    const {productID} = req.params

    //find a particular product by id
    const singleProduct = products.find((product)=>product.id === Number(productID)) 

    //if user requests a product that is not there
 if (!singleProduct){
    return res.status(404).send('That product was not found.')
 }
    return res.json(singleProduct)//response singleProduct from json file

})
    app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
        console.log(req.params)
        res.send('hello world')
})



    //in url: localhost:5000/api/v1/query?name=john&id=4
    //will print to console name:'john',id:'4'
    //note- the'4' is passed as a string
    //note-can add as many string parameters as you want
    app.get('/api/v1/query', (req, res) =>{
       // console.log(req.query)

       //we are looking for the user to provide the product to search for and the limit 
       const {search, limit, max_price} = req.query//amount such as 2 items
       let sortedProducts = [...products]

       //if none of the query parameters are provided then send back the whole data
       //user provides search and limit by: localhost5000/api/v1/query?limit=3
       //can query localhost:5000/api/v1/query?search=al&limit=5
       //this means user wants to see all prodcts that start with "al"but only 5
        if(search){
            sortedProducts = sortedProducts.filter((product)=>{
                return product.name.startsWith(search)
            })
        }
    if (limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    //WANTING TO QUERY ITEMS LESS THAN $20
    if (max_price){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.price < Number(max_price)
        })
    }

    
    res.status(200).json(sortedProducts)
    //res.send('hello world')
})

    app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})