# Schema Methods

In Mongoose, a schema method is like a special function you can create and attach to a blueprint (schema) for your data. This function lets you define and perform specific tasks on the data made from that blueprint. In the upcoming lessons, we'll be creating two schema methods: `checkPassword` and `withoutPassword`. These methods offer essential functionality to our user schema.

The `checkPassword` method is designed to compare a provided password attempt with the stored hashed password within a user document. It facilitates user authentication by verifying login credentials.

On the other hand, the `withoutPassword` method serves to remove the sensitive `password` field from a user document, often used when transmitting user data to ensure that passwords are not exposed. These methods provide flexibility and security enhancements to the user schema, allowing you to encapsulate relevant operations within the schema itself for cleaner and more organized code.

# **Understanding Mongoose Method for Password Verification**

### **Introduction:**

In this document, we'll break down a Node.js code snippet that defines a method within a Mongoose user schema. This method is used to compare a provided password attempt with the stored hashed password in the database, allowing for password verification.

**Code Breakdown:**

1. Defining a Password Verification Method:
    - **Code Block:**
        
        ```jsx
        userSchema.methods.checkPassword = function(passwordAttempt, callback) {
            // Method code here
        }
        
        ```
        
    - **Explanation:**
        - This code block defines a method called `checkPassword` that is attached to the user schema. It is designed to compare a provided password attempt with the stored hashed password in the database. The method takes two parameters: `passwordAttempt` (the password to be verified) and a `callback` function to handle the result.
2. Comparing Passwords with bcrypt:
    - **Code Block:**
        
        ```jsx
        bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
            // Comparison code here
        });
        
        ```
        
    - **Explanation:**
        - Inside the `checkPassword` method, this code uses the `bcrypt.compare` function to compare the `passwordAttempt` (the provided password) with the stored hashed password (`this.password`) in the user document. The result of the comparison or any potential error is handled in the callback function.
3. Handling Errors and Returning the Result:
    - **Code Block:**
        
        ```jsx
        if (err) return callback(err);
        return callback(null, isMatch);
        
        ```
        
    - **Explanation:**
        - Within the `bcrypt.compare` callback, it checks if there is an error (`err`) during the comparison. If an error occurs, it returns the error to the `callback`. If no error occurs, it returns the result of the comparison (`isMatch`) to the `callback` as well.

### **Conclusion:**

This method is a valuable part of a user authentication system, allowing you to verify a user's provided password against the stored hash, ensuring the correctness of login attempts.

---