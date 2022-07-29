var db = require('../config/connection')
var collection = require('../config/collections')
const ObjectId =require('mongodb').ObjectId
module.exports={
    addproduct:(user)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).insertOne(user).then((data)=>{
                resolve(data)
            })
        })
    },
    getproduct:()=>{
     return new Promise(async(resolve,reject)=>{
        let product =await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
    resolve(product)
   // let id = await db.get().collection(collection.PRODUCT_COLLECTION).find()
     })
    },
    deleteproduct:(deleteid)=>{
        return new Promise((resolve,reject)=>{
            console.log(deleteid);
            db.get().collection(collection.PRODUCT_COLLECTION).deleteOne({_id:ObjectId(deleteid)}).then(()=>{
                resolve()
            })
        })
    },
    getProductDetiles:(detilesid)=>{
     return new Promise((resolve,reject)=>{
        db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:ObjectId(detilesid)}).then((detiles)=>{
            resolve(detiles)
        })
     })
    },
    updateProduct:(updateid,updatedetiles)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id:ObjectId(updateid)},
                {$set:
                    {
                        mobile:updatedetiles.mobile,
                        categary:updatedetiles.categary,
                        price:updatedetiles.price,
                        descrption:updatedetiles.description
                    }}).then(()=>{
                        resolve(true)
                    })
        })
    }
}