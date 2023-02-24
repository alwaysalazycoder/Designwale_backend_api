# DNS

- Domain Name System
- The Domain Name System (DNS) is the phonebook of the Internet. 
- Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
- It converts the domain into the number which is known as IP address(internet protocol)
- DNS are also an IP address like (1.1.1.1)

=====================================================================================

# functioning of the dns 
1. we search domain name such as www.deva.com
2. then this query is passed to the DNS resolver which is provided by ISP
3. the DNS resolver transfers the query to the root nameserver(.)
4. the root name server responds with the TLD(Top Level Domain)(such as .com or .net)
5. then the DNS resolver sends the query along with the TLD to the TLD server 
6. the TLD server responds with the ip address of the domain's name server
7. The IP address for deva.com is then returned to the resolver from the    nameserver. 
8. The DNS resolver then responds to the web browser with the IP address of the domain requested initially.
9. The browser make the HTTP request to the IP address
10. The server at that IP returns the webpage to be rendered in the browser (step 10).

=====================================================================================


- Your ISP provides the dns resolver or manually we provide a dns resolver
- dns converts a request to google.com into an IP address
-  the DNS translates a web address like "www.google.com" into the physical IP     address

- My os will ask my 1.1.1.1 hey can you tell me ip address of codecademy.com? ...
- 1.1.1.1 : I know a guy who knows a guy
- 1.1.1.1 : hey 65.544.4.3.11 do you know where the ip address with .com are located
- 65.544. : yup there with 77.33.3
- 1.1.1.1 : hey do you have ip address of codedamn.com 
- 77.33.3 : no but this may know this 22.33
- 22.33 : yes the ip address is 45.33.45.55 of codecademy
- 








































































































# node js gives power and functionality  to js as it is running as a scripting language on server side ...

console.log('hello world');  --- to print

## deno vs nodejs
- Deno is alternative of node 
- Deno is runtime for javascript
- It took js from browser and placed it on the server 
- Support typescript
- Secure by default 
- Ships only a single executable file
- It built in rust and uses V8
