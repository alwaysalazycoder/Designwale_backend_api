## HTTP

🎇 HTTP - hyper text transfer protocol

- It is basically a protocol for web
- It help in the communication between the web servers and the client .
- It generates the response and the request to load the page , ajax request,form submit....
- Every request is completely independent and the http is stateless 

=====================================================================================

🎇 HTTPS - hyper text transfer protocol secure

- It the same but the data that is sent back and forth is encrypted using SSL and TSL
- SSL - secured socket layer
- TSL - transfer security layer
- https is used for transfering confedential data like contact form and credit card details..
- You can do that by installing the certificate from the web host

=====================================================================================

🎇 HTTP Methods

- 1. Get 
Retrieves data from the server
ex - loading js , loading images,loading basic html , xml ,etc .

- 2. Post
Submit data to the server
ex - when you submit form, blogpost.

-  3. Put
The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.
ex- update the data on the blogpost , updating images

- 4. Delete
To delete the data from the server.

- 5. Patch
for making partial changes to an existing resource. 

=====================================================================================

🎇 HTTPS header fields

1. GENERAL
 
 Request URL
 Request Method
 Status Code
 Remote Address
 Referrer Policy

2. RESPONSE

 Server
 Set-Cookies                                            method        path                  protocol
 Content-Type                                for example : GET/webdev/project/ca/index.html/HTTP/1.1
 Content-Length
 Date

3. Request

 Cookies
 Accept-xxx
 Content-Type
 Content-Length
 Authorization
 User-Agent
 Referrer
 
=====================================================================================

🎇 HTTP Status Code

- 1xx: Informational
Request recieved / processing
100 - continue..

- 2xx: Success
Successfully recieved , understood and accepted
200 - OK
201 - OK created
202 - accepted

- 3xx: Redirect
Further action must be taken / redirect
301 - Moved to new URL
304 - Not modified (Catched version)

- 4xx: Client Error
Request does not have what it needs
400 - Bad request
401 - Unauthorised 
402 - Payment required
403 - Forbidden
404 - Not found

- 5xx: Server Error 
Server failed to fullfil an apparent valid request
500 - Internal server error
505 - HTTP sever not found

=====================================================================================

🎇 HTTP / 2

    Major version of HTTP
    Under the hood changes
    Respond with more data
    Reduce latency by enabling full request and response multiplexing
    Fast, efficient and secure







 
