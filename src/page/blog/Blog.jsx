const Blog = () => {
  return (
    <div className="p-16">
      <div className="card w-10/12 mx-auto mt-4 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <div className="space-y-3">
            <p>
              {" "}
              <span className="font-bold">Access token</span> are used in
              token-based authentication to allow an application to access an
              API. It is valid for specific second of time.
            </p>
            <p>
              {" "}
              <span className="font-bold">Refresh token</span> is a special
              token that is used to revalued access tokens. This allows you to
              have short-lived access tokens without having to collect
              credentials every time one expires.{" "}
            </p>
            <p>
              One possible way to store them on the client-side is to use{" "}
              <span className="font-bold">HTTP-only cookies.</span> This means
              that the tokens are stored in the browser cookies. But some time
              we can store token in{" "}
              <span className="font-bold"> Local storage</span> or{" "}
              <span className="font-bold"> Sessional storage</span> in side the
              browser memory.
            </p>
          </div>
        </div>
      </div>
      <div className="card w-10/12 mx-auto mt-4 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Compare SQL and NoSQL databases</h2>
          <div className="w-full">
            <table className=" bg-white rounded-lg   w-full  blog ">
              <caption className="font-bold text-xl ">
                SQL VS NoSQL Databases
              </caption>
              <thead>
                <tr className="border border-gray-500">
                  <th>SQL</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SQL databases are relational </td>
                  <td>NoSQL databases are non-relational. </td>
                </tr>
                <tr>
                  <td>
                    SQL databases can handle complex relationships between data
                    using foreign keys and joins.{" "}
                  </td>
                  <td>
                    NoSQL databases can handle simple relationships under
                    documents or references{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    SQL databases use SQL as a standard query language to
                    manipulate and analyze data.
                  </td>
                  <td>
                    NoSQL databases use varying query languages or APIs
                    depending on the type and vendor of the database
                  </td>
                </tr>
                <tr>
                  <td>Data is stored in tables with columns and row .</td>
                  <td>Data is stored in collections or documents .</td>
                </tr>
                <tr>
                  <td>
                    Examples: MySQL, PostgreSQL, SQL Server, Microsoft SQL
                    Server
                  </td>
                  <td>Examples: MongoDB, Amazon DynamoDB, Redis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card w-10/12 mx-auto mt-4 bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is express js? What is Nest JS ?</h2>
          <div className="space-y-3">
            <p>
              {" "}
              <span className="font-bold">Express JS</span> is a free Node.js
              framework designed to build restful API for web applications and
              cross-platform apps quickly and make easily node js server. It
              provide a set of powerful and flexible feature for node server .{" "}
              <span className="font-bold">
                {" "}
                Express release under the MIT License
              </span>
            </p>
            <p>
              {" "}
              <span className="font-bold">Nest.JS</span> is a framework that
              helps build Node.JS server-side applications. The Nest framework
              is built using TypeScript which allows developers to build highly
              scalable and testable applications.You can build Rest APIs, MVC
              applications, GraphQL applications, Web Sockets etc.{" "}
              <span className="font-bold">
                It alternative Express.js but more powerful.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
