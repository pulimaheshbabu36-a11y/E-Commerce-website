const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// =======================
// MIDDLEWARE
// =======================
app.use(cors());
app.use(express.json());

// =======================
// ROUTES IMPORTS
// =======================
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

// =======================
// ROUTES USAGE
// =======================
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin/orders", adminOrderRoutes);
app.use("/api/payment", paymentRoutes);

// =======================
// DATABASE CONNECTION
// =======================
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Connection Error:", err);
});

// =======================
// HOME ROUTE
// =======================
app.get("/", (req, res) => {
    res.send("E-Commerce Backend Running");
});

// =======================
// START SERVER
// =======================
app.listen(5000, () => {
    console.log("Server running on port 5000");
});