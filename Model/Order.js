import mongoose from 'mongoose';



const OrderSchema = mongoose.Schema({

customer:{

    required:true,


    type: String,

    maxlength:60,
},


address:{

    required:true,


    type: String,

    maxlength: 300,
},


total:{

    type: Number,

    required:true,
},

status:{


    type:Number,

    default:0,
},



method:{


    type:Number,

    required:true,
},





},


{timestamps:true}

);


export default mongoose.models.Order || mongoose.Model("Order",OrderSchema);