import mongoose from "mongoose";


const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
   
    name: {
      type: String,
      required: true,
    },
    
    phone: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      timeSlot: {
        type: String,
        required: true,
      }
  },
  {
    timestamps: true,
  }
);

const Booking= mongoose.model("Booking", bookingSchema);
export default Booking
