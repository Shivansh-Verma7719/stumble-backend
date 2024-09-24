import { Request, Response, Router } from "express";
import express from "express";
const { createClient } = require("../../lib/supabase");

const router = express.Router();

// router.post("/createUser", async (req, res) => {
//   if (!req.body) {
//     return res.status(400).send("Request body is missing");
//   }
//   if (!req.body.name) {
//     return res.status(400).send("Name is required");
//   }
//   if (!req.body.password) {
//     return res.status(400).send("Password is required");
//   }
//   const user = req.body.name;
//   const password = req.body.password;
//   res.status(201).send({
//     message: "User created successfully",
//   });
// });

router.get("/users", (req, res) => {
  res.json();
});

router.post("/login", async (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  if (!req.body.password) {
    return res.status(400).send("Password is required");
  }
  const supabase = createClient({ req, res });
    const { data, error } = await supabase
        .from("users")
        .select("name, password")
        .eq("name", req.body.name)
        .single();
});

export default router;
