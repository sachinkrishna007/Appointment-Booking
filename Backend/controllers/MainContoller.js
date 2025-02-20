import Booking from "../models/BookingModel.js";

const addBooking = async (req, res) => {
  console.log(req.body);

  try {
    const { name, phone, date, timeSlot } = req.body;

    const existingBooking = await Booking.findOne({ date, timeSlot });
    if (existingBooking) {
      return res.status(400).json({ message: "Slot already booked" });
    }

    const newBooking = new Booking({ name, phone, date, timeSlot });
    await newBooking.save();

    res
      .status(201)
      .json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getSlots = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    const bookings = await Booking.find({ date });

    const bookedSlots = bookings.map((booking) => booking.timeSlot);

    res.status(200).json({ bookedSlots });
  } catch (error) {
    console.error("Error fetching slots:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export { addBooking, getSlots };
