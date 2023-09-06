# Security in RESTful APIs

I am following the Linkedin Learning course: Node.js: Securing RESTful APIs by Emmanuel Henri.


## Notes

#### Top security attacks
1. Injection attacks
2. Broken authentication
3. Sensitive data exposure
4. XML entities
5. Broken access control

#### OWASP
Open Web Application Security Project
Resources on attacks, vilnerabilities and security.

#### JWT
JSON Web Tokens
Open standard used to securely transport information between parties
Components: header, payload, signature


## Reflection

Security is vital to building a safe and reliable web application. This course has taught me how to implement an account system to protect the API access, which will help prevent unauthorised access and malicious attacks. By using the encrypted JSON Web Tokens (JWT) to verify user identities, it is much harder for a hacker to impersonate or hack into another user's account.

This course had some frustrating aspects, as it is outdated. Mongoose has changed the behaviour of many of its functions to no longer work with callback functions, or have changed the function name, so I had to spend a while fixing these bugs. I also couldn't use the course material to guide fixing my code since it was the problem. Despite this, I liked how the course covered the topic in a concise manner.

I have also never used MongoDB before, so this course gave me a brief exposure, which will help me if I use it more in the future (which is likely). It has given be a very basic understanding on how to interact with Mongo from a JS script, and how to utilise schema to store data.

We have discussed JWT in class, but being able to use it in practical, cements its uses and functionality. I now feel like I should be able to implement it in future projects without much trouble. I think it would be valuable more me to build a side project with these skills to further reinforce them.

