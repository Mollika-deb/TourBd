import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold m-3 ">1. What is the difference between SQL and NoSQL</h1>
            <p className='m-3'>1. SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed <br />
               2. Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. <br />
               3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
            <h1 className="text-3xl font-bold m-3 ">2. What is JWT, and how does it work?</h1>
            <p className='m-3'>JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs).<br />
            Working process of jWt token has given below: <br />
                1. Create a JSON <br /> 2. Create a JWT signing key and decide the signing algorithm <br /> 
                3.  Creating the “Header”. <br /> 4.  Create a signature <br /> 5. Creating the JWT <br /> 6. Verifying the JWT </p>
            <h1 className="text-3xl font-bold m-3 ">3. What is the difference between javascript and NodeJS?</h1>
            <p className='m-3'>
                1. JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. <br /> 2. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.<br /> 
                3.  JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML. <br /> 4.  JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development <br /> 5. JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser. <br />  </p>
            <h1 className="text-3xl font-bold m-3 ">4. How does NodeJS handle multiple requests at the same time?</h1>
            <p className='m-3'>
                NodeJS receives multiple client requests and places them into EventQueue.NodeJS is built with the concept of event-driven architecture.NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. </p>
        </div>
    );
};

export default Blog;