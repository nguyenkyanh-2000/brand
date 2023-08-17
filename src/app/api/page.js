// pages/api/example.js

export default function handler(req, res) {
  // Your server-side logic goes here
  // Use req to access request data and res to send responses

  // For example, you can send a JSON response
  res.status(200).json({ message: "Hello from the API!" });
}
