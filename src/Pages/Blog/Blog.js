import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className="text-4xl">What is the difference between SQL and NoSQL</h1>
            <p>1. SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed <br />
               2. Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. <br />
               3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
        </div>
    );
};

export default Blog;