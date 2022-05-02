import mongoose from 'mongoose';



const productSchema = mongoose.Schema({

title:{

    required:true,


    type: String,

    maxlength:60,
},


description:{

    required:true,


    type: String,

    maxlength: 300,
},


img:{

    type: String,

    required:true,
},

prices:{


    type:[Number],

    required:true,
},


extraOptions:{

    type:[


        {

            text:{type:String,required:true},

            price:{type:Number,required:true}
        }
    ]
}






},


{timestamps:true}

);


export default  mongoose.models.Product ||  mongoose.model("Product",productSchema);