# Using `{ timestamps: true }` in Mongoose

In Mongoose, when you pass `{ timestamps: true }` as the second argument
to your schema, Mongoose will automatically add two fields to every
document in that collection:

-   **createdAt** → the date & time when the document was first
    created.\
-   **updatedAt** → the date & time when the document was last modified.

------------------------------------------------------------------------

## Example

``` js
const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
```

------------------------------------------------------------------------

## Creating a User

``` js
const user = await User.create({
  username: "niket",
  email: "niket@example.com",
  password: "12345",
});
console.log(user);
```

👉 **Output (simplified):**

``` json
{
  "_id": "651234abc123...",
  "username": "niket",
  "email": "niket@example.com",
  "password": "12345",
  "createdAt": "2025-09-25T12:34:56.789Z",
  "updatedAt": "2025-09-25T12:34:56.789Z",
  "__v": 0
}
```

------------------------------------------------------------------------

## Updating a User

``` js
user.password = "newpassword";
await user.save();
```

📌 `updatedAt` will automatically change to the current date/time, while
`createdAt` stays the same.

✅ So `{ timestamps: true }` = auto-track when the document is created &
updated without you writing extra code.
