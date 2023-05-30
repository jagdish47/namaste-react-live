# 1. What is Microservice ?

Microservices is an architectural style in which an application is composed of small, independent, and loosely coupled services that communicate with each other using APIs. Each microservice is designed to perform a specific business function and can be developed, deployed, and scaled independently of other services in the system.

Unlike traditional monolithic architectures, microservices break down an application into smaller, more manageable components that can be developed and maintained by small, focused teams. This approach allows for greater agility, scalability, and resilience, as well as easier testing and deployment.

Microservices can be implemented using a variety of technologies and programming languages, and are typically deployed using containerization tools such as Docker and Kubernetes. However, designing and managing a microservices architecture can be complex and requires careful consideration of factors such as service boundaries, data consistency, and communication protocols.

## Advantages of Microservices:

Scalability: With a microservices architecture, services can be scaled independently of each other, allowing for greater flexibility and scalability.

Agility: Each microservice can be developed, tested, and deployed independently, allowing for faster iteration and more frequent releases.

Resilience: If one service fails, it does not necessarily affect the entire application, as other services can continue to operate normally.

Technology diversity: Microservices can be developed in different programming languages and use different technologies, allowing teams to choose the best tool for the job.

Simplified maintenance: With smaller services, it is easier to isolate and fix issues, reducing the complexity of maintenance and support.

## Disadvantages of Microservices:

Complexity: Microservices can introduce additional complexity, especially in areas such as service discovery, configuration management, and inter-service communication.

Distributed systems: A microservices architecture is inherently distributed, which can make it more difficult to manage, monitor, and secure.

Communication overhead: With many small services communicating with each other, there may be additional communication overhead and potential for network latency.

Data consistency: Maintaining consistency across multiple services can be challenging, especially when it comes to transactional data.

Skillset requirements: Developing and managing a microservices architecture requires specialized skills in areas such as containerization, orchestration, and service mesh.

# 2. What is Monolith architecture ?

A monolithic architecture is a traditional software architecture where an application is built as a single, self-contained unit with all its functionality tightly integrated and deployed as a single artifact. In a monolithic architecture, all the components of an application, such as the user interface, application logic, and database access, are tightly coupled together and run as a single process on a single server or group of servers.

Monolithic applications can be easier to develop and test initially, as there is no need to worry about the complexities of distributed systems. However, as the application grows in size and complexity, monolithic architectures can become difficult to manage and scale.

## Advantages of Monolithic Architecture:

Simplicity: Monolithic architecture is simple to understand, develop, and deploy. There is no need to worry about the complexities of distributed systems, making it easier to get started with.

Performance: Monolithic applications can be faster than microservices, as there is no communication overhead between different services.

Easy to test: Because the application is self-contained, it is easier to test and debug.

Easier to maintain: Monolithic applications are typically easier to maintain, as all the code is in one place.

Lower cost: Developing a monolithic application can be less expensive than developing a microservices architecture, as there are fewer moving parts.

## Disadvantages of Monolithic Architecture:

Lack of flexibility: Monolithic applications can be difficult to modify, as changes to one part of the application can have unintended consequences for other parts of the system.

Limited scalability: Monolithic architectures can be difficult to scale, as the entire application must be scaled as a single unit. This can lead to inefficiencies and wasted resources.

Risk of failure: In a monolithic architecture, if one component fails, the entire application can fail, making it less resilient and more susceptible to downtime.

Technology lock-in: Monolithic applications are often built using a specific technology stack, which can limit the ability to incorporate new technologies or adapt to changing business needs.

Development speed: Developing a monolithic application can be slower than developing a microservice

# 3.what is the difference between Monolith and Microservice?

The main difference between microservices and monolithic architecture is the way the application is designed and built.

In a monolithic architecture, the application is built as a single, self-contained unit with all its functionality tightly integrated. All the components of an application, such as the user interface, application logic, and database access, are tightly coupled together and run as a single process on a single server or group of servers.

In contrast, a microservices architecture is composed of small, independent services that communicate with each other using APIs. Each microservice is designed to perform a specific business function and can be developed, deployed, and scaled independently of other services in the system.

## Here are some of the main differences between microservices and monolithic architecture:

1.Complexity: Microservices can introduce additional complexity, especially in areas such as service discovery, configuration management, and inter-service communication. Monolithic architecture is simpler and easier to manage initially.

2.Scalability: Microservices can be scaled independently of each other, allowing for greater flexibility and scalability. In a monolithic architecture, the entire application must be scaled as a single unit.

3.Resilience: In a microservices architecture, if one service fails, it does not necessarily affect the entire application, as other services can continue to operate normally. In a monolithic architecture, if one component fails, the entire application can fail.

4.Technology diversity: Microservices can be developed in different programming languages and use different technologies, allowing teams to choose the best tool for the job. Monolithic architecture is typically built using a specific technology stack.

5.Maintenance: With smaller services, it is easier to isolate and fix issues, reducing the complexity of maintenance and support. In a monolithic architecture, it can be more difficult to isolate issues and make changes without affecting other parts of the application.

# 4.Why do we need a useEffect Hook?

In React, the useEffect hook is used to perform side effects such as data fetching, setting up subscriptions, or manipulating the DOM. It allows you to execute code in response to changes in the component state, props, or lifecycle events.

```
useEffect(() => {
  // side effect code
  return () => {
    // cleanup code
  }
}, [dependency])

```

The useEffect hook takes two arguments: the first argument is a function that represents the side effect code, and the second argument is an optional array of dependencies that the effect depends

### Example

```
import React, { useState, useEffect } from 'react';
//we have to import useState and useEffect so we have to import it from react.

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

```

# 5.What is Optional Chaining?

Optional chaining in JavaScript is a feature that allows you to safely access nested properties of an object without worrying about whether any of the properties in the chain are undefined or null. It was introduced in ECMAScript 2020 (ES2020) and is denoted by the ?. operator.

```
const person = {
  name: 'John',
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  }
};

console.log(person.address?.street); // '123 Main St'

console.log(person.address?.zipCode?.toString()); // undefined

```

In the first console.log statement, the optional chaining operator ?. is used to access the street property of the address object. Since address exists, the expression person.address?.street evaluates to '123 Main St'.

In the second console.log statement, the optional chaining operator ?. is used to access the zipCode property of the address object. However, since address does not have a zipCode property, the expression person.address?.zipCode?.toString() evaluates to undefined.

Optional chaining can be particularly useful when dealing with complex data structures or API responses where certain properties may or may not exist.

# 6.What is Shimmer UI ?

A shimmer screen is a version of the UI that doesn’t contain actual content. Instead, it mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows).

A shimmer screen is essentially a wireframe of the page, with placeholder boxes for text and images.

Shimmer screens tremendously improve the user experience by avoiding the frustration of facing an entirely blank screen and giving the user an impression of what content will look like before it loads. Applying them to your rendering bottlenecks will make your UI feel faster and make people happier.

# 7.What is the difference between JS expression and JS statement ?
