import Address from "../models/Address.js";

export const addAddress = async (req, res) => {
  try {
    const userId = req.userId;
    const { firstName, lastName, email, street, city, state, zipcode, country, phone } = req.body;

    // validation
    if (!firstName || !lastName || !email || !street || !city || !state || !zipcode || !country || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required address details",
      });
    }

    await Address.create({
      userId,
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zipcode,
      country,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Address added successfully",
    });
  } catch (error) {
    console.error("Add Address Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// get address : /api/address/get
export const getAddress = async (req, res) => {
  try {
    const userId = req.userId;
    const addresses = await Address.find({ userId });
    res.status(200).json({ success: true, addresses });
  } catch (error) {
    console.error("Get Address Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
