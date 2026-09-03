# MCQ Springboot practice - COMPLETE 446 ANSWER KEY & EXPLANATIONS

## Course & Test Summary
- **Title**: MCQ Springboot practice
- **Total Questions**: 446
- **Duration**: 9999 mins
- **Topics Covered**: Spring Boot, Spring MVC, Spring Security, JWT, JPA, Hibernate, JPQL, Servlets, Web Containers, REST APIs, Database Normalization & SQL, Git Version Control

---

### Q1. In Spring Boot JPA, what does the @PersistenceContext annotation represent?

- **[x] A. It injects a reference to the EntityManager into a Spring bean. (Correct Answer)**
- [ ] B. It defines the persistence unit for the JPA entity manager.
- [ ] C. It specifies the database schema for entity mappings.
- [ ] D. It configures the transactional behavior of JPA repositories.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q1, the correct answer is "It injects a reference to the EntityManager into a Spring bean.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q2. What is the purpose of the @ExceptionHandler annotation in Spring MVC?

- **[x] A. It handles exceptions thrown by controller methods (Correct Answer)**
- [ ] B. It defines a custom exception class
- [ ] C. It automatically enables global exception handling
- [ ] D. It configures application logging

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Medium`

**Explanation:** For Q2, the correct answer is "It handles exceptions thrown by controller methods". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q3. What is the primary purpose of using DTOs (Data Transfer Objects) in a Spring Boot application with a multi-tiered architecture? DTOs facilitate direct communication between the presentation layer and the database, reducing the need for intermediary services. DTOs encapsulate domain logic and business rules, ensuring data consistency and integrity across the application. DTOs improve performance by reducing the size of data transferred

- [ ] A. between client and server, minimizing network overhead.
- [ ] B. DTOs serve as lightweight data containers for transferring data between
- **[x] C. different layers of the application, promoting separation of concerns and (Correct Answer)**
- [ ] D. decoupling.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q3, the correct answer is "different layers of the application, promoting separation of concerns and". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q4. When debugging a Spring Boot application, what does a "502 Bad Gateway" error typically indicate?

- [ ] A. Server overload
- [ ] B. Database connection failure
- **[x] C. Proxy or load balancer issue (Correct Answer)**
- [ ] D. Memory leak

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q4, the correct answer is "Proxy or load balancer issue". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q5. What issue can occur if the mappedBy attribute is incorrectly configured in a bidirectional one-to-many relationship? Hibernate may generate an incorrect database schema or create duplicate

- **[x] A. relationship mappings (Correct Answer)**
- [ ] B. The application automatically switches to lazy loading
- [ ] C. JSON serialization always causes infinite recursion
- [ ] D. Foreign keys are automatically removed from the database

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q5, the correct answer is "relationship mappings". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q6. What is the primary purpose of the 'cascade' attribute in a JPA association mapping? It specifies the fetch strategy for associated entities during querying. It determines the propagation behavior of operations (e.g., save, delete) from parent to child entities.

- [ ] A. It configures the naming strategy for foreign key columns in the database
- [ ] B. schema.
- [ ] C. It indicates the type of join used to establish the association between
- **[x] D. entities. (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q6, the correct answer is "entities.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q7. Which of the following configurations correctly sets up a one-to-many relationship where Order is the parent and OrderItem is the child entity in Spring Boot JPA? @OneToMany(mappedBy = "order", cascade = CascadeType.ALL) in Order and @ManyToOne in OrderItem. @OneToMany in Order and @ManyToOne(mappedBy = "order") in OrderItem.

- [ ] A. @OneToMany(cascade = CascadeType.ALL) in Order and @ManyToOne in
- **[x] B. OrderItem. (Correct Answer)**
- [ ] C. @OneToMany in Order and @ManyToOne(cascade = CascadeType.ALL) in
- [ ] D. OrderItem.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q7, the correct answer is "OrderItem.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q8. What is the purpose of the @Transactional annotation in Spring?

- **[x] A. It defines a transactional boundary for a method or class (Correct Answer)**
- [ ] B. It marks an entity as transaction-safe
- [ ] C. It creates database tables automatically
- [ ] D. It enables dependency injection

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q8, the correct answer is "It defines a transactional boundary for a method or class". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q9. What is the primary reason to use @OneToMany(mappedBy = "parent") in the parent entity of a one-to-many association? To indicate that the parent entity is responsible for managing the foreign

- [ ] A. key.
- **[x] B. To specify that the child entity owns the relationship. (Correct Answer)**
- [ ] C. To avoid creating a join table for the association.
- [ ] D. To ensure that the association is lazily loaded.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q9, the correct answer is "To specify that the child entity owns the relationship.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q10. In a bidirectional One-to-One JPA relationship, what does the mappedBy attribute indicate? The name of the relationship field in the owning side entity that manages

- **[x] A. the foreign key (Correct Answer)**
- [ ] B. The database column name used for storing the primary key
- [ ] C. The fetch strategy used for loading the associated entity
- [ ] D. The cascade operations applied to the relationship

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q10, the correct answer is "the foreign key". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q11. What is the primary advantage of using JWT (JSON Web Tokens) for authentication in Spring Boot applications? JWT tokens can only be decoded by the server, ensuring maximum security. JWT tokens are stateless, reducing the need to store session information on

- **[x] A. the server. (Correct Answer)**
- [ ] B. JWT tokens provide built-in encryption, ensuring data integrity during
- [ ] C. transmission.
- [ ] D. JWT tokens automatically expire after a certain period, enhancing security.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q11, the correct answer is "the server.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q12. Which of the following is NOT a valid way to communicate between a servlet and a client browser?

- [ ] A. HTTP response headers
- [ ] B. HTTP request parameters
- **[x] C. Java Native Interface (JNI) (Correct Answer)**
- [ ] D. Session attributes

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q12, the correct answer is "Java Native Interface (JNI)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q13. Which of the following scenarios is most suitable for implementing database normalization in a Spring Boot application? When the application requires denormalized data for efficient querying and reporting. When the application has limited data volume and complexity, making normalization unnecessary.

- [ ] A. When the application needs to enforce complex business rules and
- [ ] B. validation logic at the database level.
- **[x] C. When the application involves managing large volumes of data with multiple (Correct Answer)**
- [ ] D. interrelated entities and relationships.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q13, the correct answer is "When the application involves managing large volumes of data with multiple". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q14. What is the purpose of using optional = false in a @OneToOne association in Spring Boot JPA?

- [ ] A. It ensures that cascading operations are applied to the associated entity.
- [ ] B. It allows the associated entity to be null, making the association optional.
- [ ] C. It enforces the eager fetching of the associated entity.
- **[x] D. It indicates that the association is mandatory and cannot be null. (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q14, the correct answer is "It indicates that the association is mandatory and cannot be null.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q15. In the context of version control, what is a "commit"?

- [ ] A. A request to merge code changes into the main branch
- **[x] B. A snapshot of the project's current state at a specific point in time (Correct Answer)**
- [ ] C. An action to revert changes made to a file
- [ ] D. A notification to team members about code updates

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q15, the correct answer is "A snapshot of the project's current state at a specific point in time". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q16. Consider the following Spring Boot controller method, How can you improve error handling in this method to provide more informative error messages without exposing sensitive information? Implement centralized logging and auditing mechanisms using AOP and Spring Boot's logging frameworks to capture detailed error logs and context information, facilitating post-mortem analysis and incident response. Use Spring Boot's built-in @ResponseStatus annotation to customize HTTP error responses based on specific exception types, ensuring consistent error handling across all controller methods. Integrate with Spring Boot Actuator's error endpoint to expose application- wide error metrics and diagnostics, enabling real-time monitoring and

- [ ] A. troubleshooting of error conditions in production environments.
- **[x] B. Implement a custom exception handler using @ControllerAdvice to intercept (Correct Answer)**
- [ ] C. ProductCreationException and return a structured error response with
- [ ] D. detailed error codes and messages, adhering to RESTful API best practices.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q16, the correct answer is "Implement a custom exception handler using @ControllerAdvice to intercept". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q17. How can you define a checked custom exception in Spring Boot?

- [ ] A. Annotations like @GetMapping can handle all potential errors
- **[x] B. Extend the Exception class (Correct Answer)**
- [ ] C. Implement the Throwable interface
- [ ] D. Extend the RuntimeException class

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q17, the correct answer is "Extend the Exception class". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q18. In Spring Framework, what is the purpose of using the @Qualifier annotation along with @Autowired? It disables dependency injection for a specific bean @PostMapping("/products") public ResponseEntity<Product> createProduct(@RequestBody Product newProduct) { try { Product createdProduct = productService.createProduct(newProduct); return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);

```java
It selects a specific bean when multiple beans of the same type are
available
It creates a new bean instance during application startup
It replaces the need for the @Autowired annotation
```

- [ ] A. } catch (ProductCreationException e) {
- [ ] B. return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
- **[x] C. } (Correct Answer)**
- [ ] D. }

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q18, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q19. Which HTTP status code is typically used to indicate that a requested resource is not found in a Spring Boot REST API?

- [ ] A. 200
- [ ] B. 403
- **[x] C. 404 (Correct Answer)**
- [ ] D. 500

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q19, the correct answer is "404". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q20. Which ORM design pattern is responsible for tracking changes made to objects and coordinating database updates within a transaction?

- **[x] A. Unit of Work pattern (Correct Answer)**
- [ ] B. Proxy pattern
- [ ] C. Singleton pattern
- [ ] D. Factory pattern

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q20, the correct answer is "Unit of Work pattern". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q21. Which of the following is true about the @JoinColumn annotation in the context of a one-to-one association in Spring Boot JPA?

- **[x] A. It defines the foreign key column in the database table of the owning entity. (Correct Answer)**
- [ ] B. It specifies the primary key column in the inverse side of the relationship.
- [ ] C. It is used only in unidirectional associations.
- [ ] D. It can only be used with @OneToOne annotations.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q21, the correct answer is "It defines the foreign key column in the database table of the owning entity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q22. What is the primary goal of normalization in database design? To eliminate redundancy and minimize data duplication.

- **[x] A. To maximize data integrity and enforce referential constraints. (Correct Answer)**
- [ ] B. To optimize query performance and improve data retrieval speed.
- [ ] C. To standardize data formats and ensure compatibility across different
- [ ] D. systems.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q22, the correct answer is "To maximize data integrity and enforce referential constraints.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q23. In a Spring Boot REST API application, what does the term "content negotiation" refer to in the context of handling HTTP requests and responses? It denotes the negotiation of session management and authentication mechanisms between the client and server to establish a trusted and authenticated connection. It refers to the negotiation of HTTP methods and request headers between the client and server to establish a secure and reliable communication channel. It signifies the negotiation of caching directives and cache-control policies between the client and server to optimize resource caching and reduce

- [ ] A. network latency.
- [ ] B. It denotes the process of negotiating the content type and encoding
- **[x] C. between the client and server to determine the most suitable representation (Correct Answer)**
- [ ] D. of the resource.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q23, the correct answer is "between the client and server to determine the most suitable representation". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q24. In a servlet container, what is the purpose of the servlet life cycle methods init(), service(), and destroy()? init() creates a new instance of the servlet, service() processes HTTP requests, and destroy() shuts down the servlet container. init() configures servlet mappings, service() dispatches requests to appropriate servlets, and destroy() terminates the current session.

- [ ] A. init() sets up database connections, service() executes business logic, and
- [ ] B. destroy() closes database connections.
- **[x] C. init() initializes the servlet, service() handles incoming requests, and (Correct Answer)**
- [ ] D. destroy() releases resources.

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Hard`

**Explanation:** For Q24, the correct answer is "init() initializes the servlet, service() handles incoming requests, and". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q25. What is the primary benefit of using the @MapsId annotation in a one-to-one association with shared primary keys? It simplifies the configuration by removing the need for a separate foreign key column.

- [ ] A. It allows the associated entity to have a composite key.
- **[x] B. It ensures that the primary key of the owning entity is automatically set as (Correct Answer)**
- [ ] C. the primary key of the associated entity.
- [ ] D. It improves the performance of queries involving the association.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q25, the correct answer is "It ensures that the primary key of the owning entity is automatically set as". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q26. What is the simplest way to override the default validation message for a single Bean Validation constraint? Specify a custom message using the message attribute in the validation

- **[x] A. annotation. (Correct Answer)**
- [ ] B. Create a custom validation framework from scratch
- [ ] C. Modify the Hibernate Validator source code
- [ ] D. Disable Bean Validation and handle all validation manually

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q26, the correct answer is "annotation.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q27. In JPQL, what is the significance of the DISTINCT keyword in a SELECT clause? It specifies that duplicate entities should be excluded from the query result.

- **[x] A. It indicates that the query should return only entities with distinct property (Correct Answer)**
- [ ] B. values.
- [ ] C. It defines the criteria for ordering query results based on entity properties.
- [ ] D. It signifies that the query should return a distinct set of entity properties.

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Hard`

**Explanation:** For Q27, the correct answer is "It indicates that the query should return only entities with distinct property". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q28. What is the purpose of the SpringApplication class in Spring Boot? It provides utilities for loading and configuring the Spring application context. It manages the lifecycle of Spring beans in the application context.

- **[x] A. It bootstraps the Spring Boot application and launches the application (Correct Answer)**
- [ ] B. context.
- [ ] C. It initializes the embedded web server for deploying Spring Boot
- [ ] D. applications.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q28, the correct answer is "It bootstraps the Spring Boot application and launches the application". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q29. In JPA, which annotation would you use to define a non-persistent field in an entity?

- [ ] A. @Id
- **[x] B. @Transient (Correct Answer)**
- [ ] C. @NonPersistent
- [ ] D. @Column(nullable = false)

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q29, the correct answer is "@Transient". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q30. In a Spring Boot application, how can you handle errors and exceptions globally across all controller methods? By using try-catch blocks within each controller method to handle specific exceptions. By annotating individual controller methods with @ExceptionHandler to handle specific exception types.

- **[x] A. By configuring a centralized error handler using @ControllerAdvice and (Correct Answer)**
- [ ] B. @ExceptionHandler to intercept and process exceptions globally.
- [ ] C. By returning a custom error response directly from the controller method in
- [ ] D. case of errors.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q30, the correct answer is "By configuring a centralized error handler using @ControllerAdvice and". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q31. What is a drawback of handling exceptions using try-catch blocks in every controller method?

- **[x] A. It leads to repetitive code and makes centralized error handling difficult (Correct Answer)**
- [ ] B. It improves code readability by reducing duplication
- [ ] C. It automatically converts all exceptions into HTTP 404 responses
- [ ] D. It eliminates the need for @ControllerAdvice

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Easy`

**Explanation:** For Q31, the correct answer is "It leads to repetitive code and makes centralized error handling difficult". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q32. Which annotation is used to specify the database table name for a JPA entity?

- [ ] A. @NamingStrategy
- [ ] B. @EntityTable
- **[x] C. @Table (Correct Answer)**
- [ ] D. @ColumnNaming

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q32, the correct answer is "@Table". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q33. In Spring Boot, what is the purpose of the @RestController annotation compared to @Controller, and how does it affect response handling? @RestController is a specialized annotation for handling asynchronous requests, allowing for non-blocking I/O operations and more efficient resource utilization compared to @Controller. @RestController ensures that all methods within the annotated class are treated as REST endpoints, automatically generating Swagger documentation and API documentation based on method signatures. @RestController combines the behavior of @Controller and @ResponseBody, automatically converting method return values to JSON or

- **[x] A. XML responses, making it suitable for RESTful APIs. (Correct Answer)**
- [ ] B. @RestController is used specifically for controlling the flow of requests and
- [ ] C. responses in the application, providing finer control over HTTP status codes
- [ ] D. and response headers compared to @Controller.

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Hard`

**Explanation:** For Q33, the correct answer is "XML responses, making it suitable for RESTful APIs.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q34. What is the primary purpose of a servlet filter in a Java web application? To intercept and modify HTTP requests and responses before they reach the servlet or after they leave.

- **[x] A. To cache static resources like images and CSS files to improve page loading (Correct Answer)**
- [ ] B. speed.
- [ ] C. To encrypt sensitive data transmitted over HTTP connections.
- [ ] D. To manage user sessions and enforce access control policies.

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q34, the correct answer is "To cache static resources like images and CSS files to improve page loading". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q35. What is the primary advantage of token-based authentication over traditional session-based authentication?

- [ ] A. It is easier to implement
- [ ] B. It provides better security against CSRF attacks
- **[x] C. It allows stateless communication between the client and server (Correct Answer)**
- [ ] D. It offers stronger encryption for user credentials

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q35, the correct answer is "It allows stateless communication between the client and server". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q36. Which Spring Security filter processes username/password authentication requests?

- **[x] A. UsernamePasswordAuthenticationFilter (Correct Answer)**
- [ ] B. SecurityContextPersistenceFilter
- [ ] C. ExceptionTranslationFilter
- [ ] D. AuthorizationFilter

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q36, the correct answer is "UsernamePasswordAuthenticationFilter". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q37. What is the purpose of the HAVING clause in JPQL?

- **[x] A. It filters the grouped results based on a specified condition. (Correct Answer)**
- [ ] B. It specifies the criteria for joining multiple entities.
- [ ] C. It defines the order of the query results.
- [ ] D. It performs an aggregation operation on the query results.

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Easy`

**Explanation:** For Q37, the correct answer is "It filters the grouped results based on a specified condition.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q38. Consider the following JPQL query, What does :deptName represent in below query? A derived attribute of the Employee entity class that specifies the department name. A static placeholder indicating the position of the department name in the query.

- **[x] A. A named query parameter that will be dynamically replaced with a (Correct Answer)**
- [ ] B. department name at runtime.
- [ ] C. A predefined parameter representing the name of the Department entity
- [ ] D. class.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q38, the correct answer is "A named query parameter that will be dynamically replaced with a". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q39. Consider the following controller method: What happens if OrderCreationException is thrown? The exception is caught, and the method returns HTTP 500 Internal Server Error The application automatically retries the request The exception is ignored, and HTTP 201 is returned The request is redirected to another controller SELECT e FROM Employee e WHERE e.department.name = :deptName	1 @PostMapping("/orders") public ResponseEntity<Order> createOrder(@RequestBody Order newOrder) { try { Order createdOrder = orderService.createOrder(newOrder); return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);

- [ ] A. } catch (OrderCreationException e) {
- [ ] B. return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
- **[x] C. } (Correct Answer)**
- [ ] D. }

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q39, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q40. When designing a Spring Boot application, what is the primary role of the controller layer in the context of handling HTTP requests and responses? Executing business logic and enforcing application-specific rules. Interacting with the database to perform CRUD (Create, Read, Update, Delete) operations.

- [ ] A. Validating incoming requests and serializing responses into JSON or XML
- [ ] B. format.
- **[x] C. Handling HTTP request mapping, request parameter parsing, and generating (Correct Answer)**
- [ ] D. appropriate HTTP responses.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q40, the correct answer is "Handling HTTP request mapping, request parameter parsing, and generating". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q41. Which of the following statements accurately describes the role of Tomcat in web development? Tomcat is a web server that exclusively serves static content like HTML files. Tomcat is primarily used for database management and does not handle HTTP requests.

- [ ] A. Tomcat is a load balancer that distributes incoming requests across
- [ ] B. multiple server instances.
- **[x] C. Tomcat is a servlet container that executes Java servlets and manages (Correct Answer)**
- [ ] D. JavaServer Pages (JSP).

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q41, the correct answer is "Tomcat is a servlet container that executes Java servlets and manages". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q42. What is the difference between authentication and authorization in Spring Security? Authentication verifies user credentials, while authorization determines what resources a user can access. Authentication determines what resources a user can access, while

- [ ] A. authorization verifies user credentials.
- [ ] B. Authentication and authorization are synonymous terms in Spring Security.
- [ ] C. Authentication and authorization both refer to the process of verifying user
- **[x] D. credentials. (Correct Answer)**

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q42, the correct answer is "credentials.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q43. In a Spring Boot REST API, what is the significance of using HTTP status code 204? It indicates that the requested resource has been successfully created on the server. It signifies that the server has processed the request but requires additional action from the client to complete the operation.

- **[x] A. It denotes that the server successfully processed the request but (Correct Answer)**
- [ ] B. intentionally returned no content in the response body.
- [ ] C. It represents a client-side error indicating that the request syntax is incorrect
- [ ] D. or malformed.

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q43, the correct answer is "It denotes that the server successfully processed the request but". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q44. What is the purpose of the PATCH HTTP method? To create a new resource on the server.

- **[x] A. To update an existing resource with partial modifications. (Correct Answer)**
- [ ] B. To delete a resource permanently from the server.
- [ ] C. To retrieve metadata about a resource without transferring the entire
- [ ] D. content.

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q44, the correct answer is "To update an existing resource with partial modifications.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q45. In Spring Security, what is the purpose of an AuthenticationProvider?

- [ ] A. To authenticate users based on their roles and permissions.
- [ ] B. To manage user sessions and cookies.
- [ ] C. To intercept and handle authentication requests.
- **[x] D. To validate user credentials and authenticate users. (Correct Answer)**

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q45, the correct answer is "To validate user credentials and authenticate users.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q46. What is the purpose of the @Version annotation in JPA entities?

- [ ] A. It specifies the database version compatibility.
- **[x] B. It indicates the version of the entity for optimistic locking. (Correct Answer)**
- [ ] C. It marks the entity as eligible for caching.
- [ ] D. It defines the entity's lifecycle management strategy.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q46, the correct answer is "It indicates the version of the entity for optimistic locking.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q47. If you need to perform a complex query involving a many-to-one relationship, which feature of Spring Data JPA would you use to construct such queries dynamically?

- [ ] A. EntityManager
- [ ] B. JPQL
- **[x] C. Criteria API (Correct Answer)**
- [ ] D. Named Queries

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q47, the correct answer is "Criteria API". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q48. Your Spring Boot API returns a "500 Internal Server Error" for certain requests. What are some debugging strategies to identify the root cause?

- [ ] A. Restart the server and retry the request.
- [ ] B. Analyze network traffic using a sniffer tool.
- [ ] C. Increase the logging level for all classes in the application.
- **[x] D. Check server logs for specific error messages. (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q48, the correct answer is "Check server logs for specific error messages.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q49. What is the purpose of the @JoinTable annotation in Spring Boot JPA?

- [ ] A. To specify the join column for a relationship
- [ ] B. To define a custom repository method
- **[x] C. To create a join table for a many-to-many relationship (Correct Answer)**
- [ ] D. To indicate the fetch plan for lazy-loaded entities

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q49, the correct answer is "To create a join table for a many-to-many relationship". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q50. What role do stereotype annotations (@Service, @Repository, etc.) play in Spring Framework applications?

- [ ] A. They enforce strict data typing
- **[x] B. They provide metadata for dependency injection (Correct Answer)**
- [ ] C. They facilitate aspect-oriented programming
- [ ] D. They optimize database access patterns

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q50, the correct answer is "They provide metadata for dependency injection". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q51. Consider the following Spring Boot controller method, What are the potential drawbacks of directly returning a list of entities in the response body in a production-grade Spring Boot application? It exposes internal implementation details of the application, including database schema and entity mappings, potentially posing security risks such as SQL injection attacks. @GetMapping("/products")

```java
It may result in inefficient client-side processing and rendering of the
response data, leading to slower page load times and degraded user
experience.
It may lead to performance degradation and increased network bandwidth
consumption due to the size of the response payload, especially for large
datasets.
It violates RESTful API principles by tightly coupling the client with the
server's internal data model, hindering scalability and flexibility in future API
enhancements.
```

- [ ] A. public ResponseEntity<List<Product>> getAllProducts() {
- [ ] B. List<Product> products = productService.getAllProducts();
- [ ] C. return ResponseEntity.ok(products);
- **[x] D. } (Correct Answer)**

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q51, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q52. You have a Spring Boot controller with a @GetMapping method that retrieves a list of users. How can you ensure pagination is supported in the request using parameters?

- [ ] A. Define a custom annotation for pagination logic.
- [ ] B. Implement manual pagination logic within the controller method.
- **[x] C. Utilize built-in Spring Data JPA features for pagination. (Correct Answer)**
- [ ] D. Pagination is not possible with @GetMapping.

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Medium`

**Explanation:** For Q52, the correct answer is "Utilize built-in Spring Data JPA features for pagination.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q53. Consider a Customer entity that has a many-to-one relationship with a Country entity. Which of the following is the correct way to define this relationship in the Customer entity if you want to override the default fetch behavior with explicit eager loading? @ManyToOne(fetch = FetchType.EAGER) @JoinColumn(name = "country_id") private Country country; @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = "country_id") private Country country; @ManyToOne @JoinColumn(name = "country_id", updatable = false, insertable = false)

- [ ] A. private Country country;
- [ ] B. @ManyToOne(cascade = CascadeType.ALL)
- **[x] C. @JoinColumn(name = "country_id") (Correct Answer)**
- [ ] D. private Country country;

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q53, the correct answer is "@JoinColumn(name = "country_id")". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q54. In a Spring Boot application, which Spring feature is commonly used to manage database transactions declaratively?

- **[x] A. Spring Transaction Management using @Transactional (Correct Answer)**
- [ ] B. Spring MVC DispatcherServlet
- [ ] C. Spring Security Filter Chain
- [ ] D. Spring Boot Starter Dependency Management

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q54, the correct answer is "Spring Transaction Management using @Transactional". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q55. What is the purpose of HTTP Status Code 202 Accepted? The request has been accepted for processing, but the processing has not

- **[x] A. yet been completed (Correct Answer)**
- [ ] B. The requested resource has been created successfully
- [ ] C. The client must perform additional actions before processing
- [ ] D. The requested resource was not found

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q55, the correct answer is "yet been completed". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q56. In JPA, what does the @ElementCollection annotation signify when used with a field?

- [ ] A. It specifies a collection of embedded elements.
- [ ] B. It defines an element of a composite primary key.
- [ ] C. It marks the field as a collection of entities.
- **[x] D. It indicates a collection of simple values or embeddable objects. (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q56, the correct answer is "It indicates a collection of simple values or embeddable objects.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q57. In Spring Boot, what is the purpose of the Actuator module in debugging and monitoring applications? It provides endpoints for exposing application metrics and status

- **[x] A. information. (Correct Answer)**
- [ ] B. It enables remote debugging of Spring Boot applications.
- [ ] C. It automates the generation of bug reports and stack traces.
- [ ] D. It integrates with profiling tools for detailed performance analysis.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q57, the correct answer is "information.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q58. Which of the following annotations is used to specify the column name of the foreign key in a one-to-one association in Spring Boot JPA?

- **[x] A. @JoinColumn (Correct Answer)**
- [ ] B. @Column
- [ ] C. @ForeignKey
- [ ] D. @ForeignKeyColumn

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q58, the correct answer is "@JoinColumn". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q59. When encountering a NullPointerException in a Spring Boot application, what is the recommended approach for debugging?

- [ ] A. Ignoring the exception as it's a common occurrence
- **[x] B. Identifying the root cause by examining the stack trace (Correct Answer)**
- [ ] C. Restarting the application server
- [ ] D. Disabling exception handling to see more detailed error messages

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q59, the correct answer is "Identifying the root cause by examining the stack trace". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q60. ORM allows developers to work with which type of data structures?

- [ ] A. Arrays
- [ ] B. Lists
- [ ] C. Maps
- **[x] D. Objects (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q60, the correct answer is "Objects". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q61. Which of the following best describes the process of denormalization in the context of a Spring Boot application? Combining multiple normalized tables into a single denormalized table to improve query performance. Breaking down a single table into multiple related tables to eliminate redundancy and dependency.

- **[x] A. Introducing redundancy and duplication in a database schema to optimize (Correct Answer)**
- [ ] B. data retrieval and manipulation.
- [ ] C. Dividing a database schema into multiple related tables to enforce
- [ ] D. referential integrity constraints.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q61, the correct answer is "Introducing redundancy and duplication in a database schema to optimize". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q62. When implementing exception handling in a Spring Boot controller, what is the benefit of using @ControllerAdvice combined with @ExceptionHandler annotations? They provide a centralized location to define exception handling logic for multiple controllers.

- **[x] A. @ControllerAdvice defines the exception type, and @ExceptionHandler (Correct Answer)**
- [ ] B. handles the specific error message.
- [ ] C. These annotations are only necessary for custom exceptions.
- [ ] D. They are used for security exception handling specifically.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q62, the correct answer is "@ControllerAdvice defines the exception type, and @ExceptionHandler". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q63. What is the primary purpose of the payload in a JWT?

- **[x] A. To store claims (such as user information and token metadata) (Correct Answer)**
- [ ] B. To encrypt the token contents
- [ ] C. To digitally sign the token
- [ ] D. To store only the token's expiration time

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q63, the correct answer is "To store claims (such as user information and token metadata)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q64. In Spring Security, what is the purpose of the @Order annotation in filter configuration?

- **[x] A. To specify the order in which filters should be applied. (Correct Answer)**
- [ ] B. To control the order of method execution within a filter.
- [ ] C. To indicate the order of execution for request processing.
- [ ] D. To define the order of exception handling in the filter chain.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q64, the correct answer is "To specify the order in which filters should be applied.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q65. What is the role of the service layer in a Spring Boot REST API architecture? Managing HTTP requests and routing them to appropriate endpoints.

- **[x] A. Implementing business logic and interacting with repositories for data (Correct Answer)**
- [ ] B. operations.
- [ ] C. Performing CRUD operations directly on the database.
- [ ] D. Validating request parameters and serializing responses.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q65, the correct answer is "Implementing business logic and interacting with repositories for data". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q66. What is Autowiring in Spring Framework? It is a feature that enables Spring to dynamically generate bean instances based on runtime conditions. It is a design pattern used for manual injection of dependencies in Spring applications.

- [ ] A. It is a mechanism for defining explicit wiring between beans in Spring
- [ ] B. configuration files.
- **[x] C. It is a feature that allows Spring to automatically detect and inject (Correct Answer)**
- [ ] D. dependencies into beans.

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Hard`

**Explanation:** For Q66, the correct answer is "It is a feature that allows Spring to automatically detect and inject". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q67. In a Spring Boot JPA application, how do you configure a one-to-one relationship between User and Profile entities where User is the owning side? By using @OneToOne(mappedBy = "user") annotation in the User entity. By using @OneToOne annotation in the User entity and

- [ ] A. @OneToOne(mappedBy = "profile") in the Profile entity.
- [ ] B. By using @OneToOne annotation in both User and Profile entities.
- **[x] C. By using @OneToOne annotation in the User entity and (Correct Answer)**
- [ ] D. @OneToOne(mappedBy = "user") in the Profile entity.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q67, the correct answer is "By using @OneToOne annotation in the User entity and". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q68. Which normal form is primarily used to remove transitive dependencies and separate attributes that depend on non-key attributes?

- [ ] A. First Normal Form (1NF)
- [ ] B. Boyce-Codd Normal Form (BCNF)
- [ ] C. Second Normal Form (2NF)
- **[x] D. Third Normal Form (3NF) (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q68, the correct answer is "Third Normal Form (3NF)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q69. How do you ensure that deleting an Order entity will also delete its associated OrderItem entities in a one-to-many relationship? Use @OneToMany(mappedBy = "order", orphanRemoval = true) in Order. Use @OneToMany(mappedBy = "order", cascade = CascadeType.ALL) in

- **[x] A. Order. (Correct Answer)**
- [ ] B. Use @OneToMany(cascade = CascadeType.REMOVE) in Order.
- [ ] C. Use @ManyToOne(cascade = CascadeType.ALL, orphanRemoval = true) in
- [ ] D. OrderItem.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q69, the correct answer is "Order.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q70. What is the purpose of applying the @JsonIgnore annotation to a field in a Spring Boot entity class? To define a custom JSON property name for the field, allowing for aliasing and mapping between entity properties and JSON attributes in API payloads. To configure the field as a primary key or unique identifier for the entity, ensuring data integrity and uniqueness constraints are enforced by the database. To indicate that the field should be ignored during object mapping and persistence operations performed by Spring Boot's ORM (Object-Relational

- [ ] A. Mapping) framework.
- [ ] B. To specify that the field should be excluded from JSON serialization and
- **[x] C. deserialization processes, preventing sensitive data from being exposed in (Correct Answer)**
- [ ] D. API responses.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q70, the correct answer is "deserialization processes, preventing sensitive data from being exposed in". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q71. In Spring Security, which component is responsible for storing the authenticated user's details after successful authentication?

- **[x] A. SecurityContext (Correct Answer)**
- [ ] B. AuthenticationEntryPoint
- [ ] C. AccessDeniedHandler
- [ ] D. PasswordEncoder

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q71, the correct answer is "SecurityContext". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q72. Which HTTP status code is typically returned when a user attempts to access a secured endpoint without proper authentication in Spring Security?

- **[x] A. 401 Unauthorized (Correct Answer)**
- [ ] B. 403 Forbidden
- [ ] C. 404 Not Found
- [ ] D. 500 Internal Server Error

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q72, the correct answer is "401 Unauthorized". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q73. When using @Query annotation in Spring Data JPA, which syntax would you use to define a native SQL query?

- **[x] A. @Query(value = "SELECT * FROM table_name", nativeQuery = true) (Correct Answer)**
- [ ] B. @Query("SELECT * FROM table_name")
- [ ] C. @Query(value = "SELECT * FROM table_name")
- [ ] D. @NativeQuery("SELECT * FROM table_name")

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q73, the correct answer is "@Query(value = "SELECT * FROM table_name", nativeQuery = true)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q74. When designing a Spring Boot REST API, what does the term "layering" refer to in the context of application architecture? It refers to the physical separation of server-side and client-side components in a distributed system, ensuring modularity and scalability. It indicates the process of optimizing network communication and data transfer between different layers of the application, minimizing latency and bandwidth consumption. It signifies the hierarchical organization of software components based on their relative dependencies and interactions, ensuring encapsulation and

- [ ] A. abstraction.
- **[x] B. It denotes the logical partitioning of application functionality into distinct (Correct Answer)**
- [ ] C. layers such as presentation, business logic, and data access, promoting
- [ ] D. separation of concerns and maintainability.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q74, the correct answer is "It denotes the logical partitioning of application functionality into distinct". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q75. In Spring Boot, which logging level provides the most detailed information and is commonly used for fine-grained diagnostic tracing, one level below DEBUG?

- [ ] A. ERROR
- [ ] B. WARN
- [ ] C. DEBUG
- **[x] D. TRACE (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q75, the correct answer is "TRACE". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q76. In a scenario with DI, who is responsible for creating the object dependencies?

- [ ] A. The programmer
- **[x] B. The IoC container (Correct Answer)**
- [ ] C. The object itself
- [ ] D. The operating system

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q76, the correct answer is "The IoC container". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q77. Which of the following is generally NOT considered a benefit of using ORM frameworks compared to JDBC?

- [ ] A. Reduced boilerplate database access code
- [ ] B. Automatic mapping between objects and database tables
- [ ] C. Improved maintainability of data access code
- **[x] D. Guaranteed better runtime performance in all scenarios (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q77, the correct answer is "Guaranteed better runtime performance in all scenarios". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q78. Which Spring Boot feature is commonly used to globally customize error responses across multiple controllers?

- **[x] A. @ControllerAdvice with @ExceptionHandler (Correct Answer)**
- [ ] B. @ResponseBody
- [ ] C. @Autowired
- [ ] D. @Repository

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Hard`

**Explanation:** For Q78, the correct answer is "@ControllerAdvice with @ExceptionHandler". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q79. In JPQL, what does the GROUP BY clause primarily facilitate?

- [ ] A. Filtering query results based on specified conditions.
- [ ] B. Joining multiple entities in the query.
- **[x] C. Aggregating query results based on common property values. (Correct Answer)**
- [ ] D. Sorting query results based on specified criteria.

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Easy`

**Explanation:** For Q79, the correct answer is "Aggregating query results based on common property values.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q80. What is the purpose of using the fetch attribute in a @OneToOne association in Spring Boot JPA? It specifies the type of join to be used when fetching associated entities.

- **[x] A. It indicates whether the association should be eagerly or lazily fetched. (Correct Answer)**
- [ ] B. It defines the fetch plan to be used when loading entities from the database.
- [ ] C. It controls the direction of fetching between the owning and inverse sides of
- [ ] D. the association.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q80, the correct answer is "It indicates whether the association should be eagerly or lazily fetched.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q81. Consider the following Spring Boot controller method, What is the purpose of the @Valid annotation applied to the User parameter? It indicates that the User object should be validated against predefined constraints specified in the domain model before being processed. It triggers automatic conversion and mapping of the request body to the User object using Spring Boot's built-in data binding and validation mechanisms. It specifies the HTTP method to be used for the request mapping, ensuring that only POST requests are accepted for creating new users. @PostMapping("/users")

```java
It enables Cross-Origin Resource Sharing (CORS) for the /users endpoint,
allowing cross-origin requests from specified origins.
```

- [ ] A. public ResponseEntity<User> createUser(@Valid @RequestBody User newUser) {
- [ ] B. // Logic to create a new user
- [ ] C. return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
- **[x] D. } (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q81, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q82. What is the purpose of the UserDetails interface in Spring Security? To define the structure of JWT tokens.

- **[x] A. To represent the details of a user, including username, password, and (Correct Answer)**
- [ ] B. authorities.
- [ ] C. To manage user sessions and cookies.
- [ ] D. To specify access rules for different endpoints.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q82, the correct answer is "To represent the details of a user, including username, password, and". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q83. When creating a Spring Boot REST API, what is the primary function of the repository layer? Handling HTTP request/response cycles and managing API endpoint routing. Executing business logic and enforcing application-specific rules.

- **[x] A. Interacting with the database to perform CRUD operations and managing (Correct Answer)**
- [ ] B. data persistence.
- [ ] C. Validating incoming requests and serializing responses into JSON or XML
- [ ] D. format.

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q83, the correct answer is "Interacting with the database to perform CRUD operations and managing". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q84. What is the role of the "Session" object in ORM frameworks like Hibernate?

- **[x] A. It represents a connection to the database and manages transactions. (Correct Answer)**
- [ ] B. It's responsible for generating entity classes from database tables.
- [ ] C. It provides utilities for executing raw SQL queries directly.
- [ ] D. It handles object serialization and deserialization.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q84, the correct answer is "It represents a connection to the database and manages transactions.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q85. In Spring Boot JPA, what does the @Repository annotation indicate?

- [ ] A. It marks a class as a Spring MVC controller.
- **[x] B. It specifies a bean for database repository operations. (Correct Answer)**
- [ ] C. It configures database connection pooling.
- [ ] D. It enables asynchronous method execution.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q85, the correct answer is "It specifies a bean for database repository operations.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q86. What is the primary purpose of WSDL (Web Services Description Language) in SOAP-based web services? To define the interface, operations, and communication details of a web

- **[x] A. service (Correct Answer)**
- [ ] B. To encrypt messages exchanged between web service clients and servers
- [ ] C. To store web service authentication credentials securely
- [ ] D. To define database schemas used by the web service

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Medium`

**Explanation:** For Q86, the correct answer is "service". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q87. Which annotation enables the automatic scanning of JPA repositories in Spring Boot?

- **[x] A. @EnableJpaRepositories (Correct Answer)**
- [ ] B. @SpringBootJpa
- [ ] C. @AutoScanRepositories
- [ ] D. @EnableRepositories

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q87, the correct answer is "@EnableJpaRepositories". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q88. In Spring Boot JPA, how can you specify a native SQL query with named parameters?

- [ ] A. By using numbered parameters (e.g., ?1, ?2)
- [ ] B. By using the @NamedNativeQuery annotation
- [ ] C. By using the @NamedNativeQuery annotation along with named parameters
- **[x] D. By using named parameters (e.g., :param1, :param2) (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q88, the correct answer is "By using named parameters (e.g., :param1, :param2)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q89. In a bidirectional one-to-many relationship, which side is typically the owning side and why? The parent entity is the owning side because it holds the collection of child entities.

- **[x] A. The child entity is the owning side because it contains the foreign key. (Correct Answer)**
- [ ] B. Both sides are owning sides to ensure data consistency.
- [ ] C. Neither side is the owning side; the relationship is managed through a join
- [ ] D. table.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q89, the correct answer is "The child entity is the owning side because it contains the foreign key.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q90. In a Spring Boot application, how are referential integrity constraints typically enforced at the database level? Through the use of Spring Data JPA's built-in validation mechanisms.

- **[x] A. By defining foreign key relationships between database tables. (Correct Answer)**
- [ ] B. By implementing custom validation logic in Spring Boot service classes.
- [ ] C. Through the application of Spring Boot's declarative transaction
- [ ] D. management.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q90, the correct answer is "By defining foreign key relationships between database tables.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q91. Which of the following is NOT a stereotype annotation in Spring?

- [ ] A. @Service
- [ ] B. @Repository
- [ ] C. @Component
- **[x] D. @Entity (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q91, the correct answer is "@Entity". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q92. What is the benefit of using Spring Actuator in a Spring Boot application?

- [ ] A. To simplify database access and management.
- **[x] B. To provide health checks and monitoring endpoints. (Correct Answer)**
- [ ] C. To enable automatic deployment pipelines.
- [ ] D. To configure logging and exception handling.

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q92, the correct answer is "To provide health checks and monitoring endpoints.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q93. When debugging a Spring Boot application, which logging level is typically used to log critical errors that require immediate attention?

- [ ] A. DEBUG
- [ ] B. WARN
- **[x] C. ERROR (Correct Answer)**
- [ ] D. INFO

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q93, the correct answer is "ERROR". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q94. What is the primary responsibility of the Spring IoC Container?

- **[x] A. Managing the lifecycle, configuration, and dependencies of Spring beans (Correct Answer)**
- [ ] B. Executing SQL queries
- [ ] C. Managing HTTP requests
- [ ] D. Compiling Java classes

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q94, the correct answer is "Managing the lifecycle, configuration, and dependencies of Spring beans". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q95. Which of the following accurately describes the role of a web service in client-server communication? Web services allow clients to directly access databases on the server. Web services are only accessible through web browsers and not other client applications.

- [ ] A. Web services are primarily used for rendering graphical user interfaces
- [ ] B. (GUIs) on the client side.
- **[x] C. Web services facilitate communication between different applications over (Correct Answer)**
- [ ] D. a network using standardized protocols.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q95, the correct answer is "Web services facilitate communication between different applications over". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q96. In a Spring Boot REST API, which component is responsible for converting Java objects to JSON responses and JSON requests to Java objects?

- [ ] A. Service Layer
- **[x] B. Spring MVC HTTP Message Converters (Correct Answer)**
- [ ] C. Repository Layer
- [ ] D. Security Layer

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Hard`

**Explanation:** For Q96, the correct answer is "Spring MVC HTTP Message Converters". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q97. How does runtime polymorphism support Dependency Injection (DI) in Spring? It allows different implementations of an interface to be injected and used

- **[x] A. through a common interface at runtime (Correct Answer)**
- [ ] B. It enables Spring to create bean definitions during compilation
- [ ] C. It allows Spring to inject dependencies only based on bean names
- [ ] D. It prevents multiple implementations of an interface from being injected

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q97, the correct answer is "through a common interface at runtime". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q98. When dealing with exceptions in a Spring Boot REST API, how can you return a custom error response for a specific exception? By using try-catch blocks in every controller method.

- **[x] A. By annotating a method in a @ControllerAdvice class with (Correct Answer)**
- [ ] B. @ExceptionHandler for the specific exception type.
- [ ] C. By throwing the exception from the service layer directly.
- [ ] D. By returning an error code from the repository layer.

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Medium`

**Explanation:** For Q98, the correct answer is "By annotating a method in a @ControllerAdvice class with". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q99. What is the purpose of Spring Boot in the context of Spring Framework?

- [ ] A. To optimize the performance of Spring applications.
- [ ] B. To provide additional features not available in the core Spring Framework.
- [ ] C. To replace the traditional Spring MVC framework.
- **[x] D. To simplify the configuration and deployment of Spring applications. (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q99, the correct answer is "To simplify the configuration and deployment of Spring applications.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q100. Consider the following JPA entity using Java 17+. Which modern Java type should be used instead of java.util.Date for storing a person's date of birth?

- [ ] A. java.sql.Timestamp
- **[x] B. java.time.LocalDate (Correct Answer)**
- [ ] C. java.util.Calendar
- [ ] D. java.lang.String

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q100, the correct answer is "java.time.LocalDate". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q101. Hannah is developing a Spring Boot application where he needs to design an API endpoint that validates and handles nested JSON objects with complex structures. She needs to ensure that validation is thorough and properly managed. How would you design an API endpoint that needs to validate and handle nested JSON objects with complex structures? Implement manual validation logic in the controller method. Use nested @Valid annotations in the request body and define appropriate validation constraints. @Entity public class Person { @Id private Long id; private String name;

```java
Configure nested validation in application.properties.
Use different endpoints for each level of the nested structure.
```

- [ ] A. // Which modern type should replace this field's type?
- [ ] B. private Date dob;
- [ ] C. // Getters and setters
- **[x] D. } (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q101, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q102. What will be the outcome if a method annotated with @PostConstruct throws an exception during bean initialization?

- [ ] A. The method will be retried until it succeeds
- [ ] B. The exception will be ignored, and the method will continue
- [ ] C. The exception will be logged, and the bean initialization will proceed
- **[x] D. The Spring context will fail to start, and the bean will not be initialized (Correct Answer)**

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Hard`

**Explanation:** For Q102, the correct answer is "The Spring context will fail to start, and the bean will not be initialized". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q103. If you need to activate a Spring component only when a specific system property is set to true, which annotation is most appropriate?

- [ ] A. @ConditionalOnClass
- [ ] B. @ConditionalOnBean
- **[x] C. @ConditionalOnProperty (Correct Answer)**
- [ ] D. @ConditionalOnMissingBean

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q103, the correct answer is "@ConditionalOnProperty". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q104. Which listener is activated when a new attribute is added to the ServletContext?

- **[x] A. ServletContextAttributeListener (Correct Answer)**
- [ ] B. ServletContextListener
- [ ] C. HttpSessionListener
- [ ] D. ServletContextEventListener

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q104, the correct answer is "ServletContextAttributeListener". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q105. In a Spring Boot application, what will be the result of a GET request if a method is annotated with @GetMapping("/users/{id}") and the method parameter is annotated with @PathVariable?

- [ ] A. The value of {id} is mapped to a request header
- [ ] B. The URL parameter is converted to a query parameter
- [ ] C. The method will ignore the URL parameter
- **[x] D. The value of {id} in the URL is injected into the method parameter (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q105, the correct answer is "The value of {id} in the URL is injected into the method parameter". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q106. When caching is enabled, which response header controls how long the client can cache the response?

- [ ] A. Content-Length
- [ ] B. ETag
- [ ] C. Transfer-Encoding
- **[x] D. Cache-Control (Correct Answer)**

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q106, the correct answer is "Cache-Control". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q107. In a scenario where you need to configure different database sources for read and write operations, which annotations would you use to mark methods that interact with read and write databases respectively?

- [ ] A. @ReadOnly and @WriteOnly
- **[x] B. @Transactional(readOnly = true) and @Transactional(readOnly = false) (Correct Answer)**
- [ ] C. @ReadTransaction and @WriteTransaction
- [ ] D. @DataSourceRead and @DataSourceWrite

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q107, the correct answer is "@Transactional(readOnly = true) and @Transactional(readOnly = false)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q108. Which of the following SQL statements is used to perform an inner join?

- [ ] A. SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;
- [ ] B. SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id;
- **[x] C. SELECT * FROM table1 JOIN table2 ON table1.id = table2.id; (Correct Answer)**
- [ ] D. SELECT * FROM table1 FULL JOIN table2 ON table1.id = table2.id;

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q108, the correct answer is "SELECT * FROM table1 JOIN table2 ON table1.id = table2.id;". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q109. What is the best approach to maintain backward compatibility when versioning REST API endpoints in Spring Boot? Use URL path versioning (e.g., /api/v1/resource) and maintain separate controllers for each version.

- **[x] A. Configure versioning in application.properties and handle it in the controller. (Correct Answer)**
- [ ] B. Implement a versioning strategy in the service layer.
- [ ] C. Implement separate endpoints for different combinations of search
- [ ] D. parameters.

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Easy`

**Explanation:** For Q109, the correct answer is "Configure versioning in application.properties and handle it in the controller.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q110. Steve wants to implement a REST endpoint for real-time updates like stock prices. What is the best approach to achieve real-time communication with clients?

- **[x] A. Use WebSockets or Server-Sent Events (SSE) to push updates to clients. (Correct Answer)**
- [ ] B. Implement polling in the client to periodically check for updates.
- [ ] C. Use long polling techniques in the REST endpoint.
- [ ] D. Configure a background task to push updates to clients.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q110, the correct answer is "Use WebSockets or Server-Sent Events (SSE) to push updates to clients.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q111. To enable handling of POST requests with JSON payloads in Spring Boot, what configuration is necessary?

- **[x] A. By configuring HttpMessageConverter beans (Correct Answer)**
- [ ] B. By setting Content-Type headers manually
- [ ] C. By using @RequestParam for JSON fields
- [ ] D. By defining custom request handlers

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Hard`

**Explanation:** For Q111, the correct answer is "By configuring HttpMessageConverter beans". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q112. What is the default role prefix in Spring Security?

- [ ] A. USER_
- [ ] B. AUTH_
- [ ] C. SEC_
- **[x] D. ROLE_ (Correct Answer)**

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q112, the correct answer is "ROLE_". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q113. Given the annotation @ComponentScan(basePackages = "com.example"), what does the basePackages attribute achieve?

- **[x] A. To specify the base packages for scanning Spring beans (Correct Answer)**
- [ ] B. To set the base package for component scanning in tests
- [ ] C. To define the packages where Spring configuration classes are located
- [ ] D. To restrict component scanning to specific sub-packages

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q113, the correct answer is "To specify the base packages for scanning Spring beans". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q114. How does Spring Boot handle request data binding for a POST request with a complex object as the request body?

- [ ] A. It requires manual parsing of request data
- **[x] B. It uses @RequestBody to bind JSON or XML data to the complex object (Correct Answer)**
- [ ] C. It binds form parameters to the complex object fields
- [ ] D. It uses @PathVariable for binding complex objects

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q114, the correct answer is "It uses @RequestBody to bind JSON or XML data to the complex object". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q115. Which algorithm is commonly used to sign a JWT token?

- [ ] A. MD5
- **[x] B. HS256 (Correct Answer)**
- [ ] C. SHA-256
- [ ] D. RSA

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q115, the correct answer is "HS256". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q116. Which class is commonly used to configure security settings in a Spring Boot application?

- [ ] A. WebSecurityConfig
- [ ] B. SecurityAdapter
- [ ] C. SecurityConfiguration
- **[x] D. WebSecurityConfigurerAdapter (Correct Answer)**

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q116, the correct answer is "WebSecurityConfigurerAdapter". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q117. How would you manage conditional requests where the response should vary based on a client's preferred language? Implement separate endpoints for different languages.

- [ ] A. Use a custom exception handler for language-specific responses.
- **[x] B. Use @RequestHeader to read the Accept-Language header and adjust the (Correct Answer)**
- [ ] C. response.
- [ ] D. Configure language preferences in application.properties.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q117, the correct answer is "Use @RequestHeader to read the Accept-Language header and adjust the". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q118. What is the purpose of the @Produces annotation in JAX-RS?

- [ ] A. Configures the endpoint URL
- [ ] B. Sets the content type of incoming requests
- [ ] C. Indicates the HTTP verb to use
- **[x] D. Specifies the MIME type that a method returns (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q118, the correct answer is "Specifies the MIME type that a method returns". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q119. In a web application scenario where a developer needs to request that the connection be switched to a different protocol (e.g., WebSocket or HTTP/2), which header field should they use?

- [ ] A. X-HTTP-Version
- [ ] B. Protocol-Version
- [ ] C. Protocol
- **[x] D. Upgrade (Correct Answer)**

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q119, the correct answer is "Upgrade". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q120. Consider the following SQL query: What type of result does this query produce?

- **[x] A. Students and their courses, including those with no enrollments or courses. (Correct Answer)**
- [ ] B. Only students with enrollments and their courses.
- [ ] C. Only courses with enrolled students.
- [ ] D. A cross join of all students and courses.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q120, the correct answer is "Students and their courses, including those with no enrollments or courses.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q121. How do clients and servers communicate in a Webservice environment?

- [ ] A. Through direct connections using TCP/IP.
- **[x] B. By exchanging messages in a predefined format over HTTP. (Correct Answer)**
- [ ] C. Using proprietary protocols specific to each application.
- [ ] D. Using proprietary protocols general to all application.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q121, the correct answer is "By exchanging messages in a predefined format over HTTP.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q122. What is a servlet in the context of Webservices? A small program that runs on a client and interacts with a server.

```java
A Java program that extends the functionality of a web server by handling
client requests.
A database that stores information about users and their permissions.
A protocol used for secure communication between clients and servers.
```

- **[x] A. SELECT Students.name, Courses.course (Correct Answer)**
- [ ] B. FROM Students
- [ ] C. FULL JOIN Enrollments ON Students.id = Enrollments.student_id
- [ ] D. FULL JOIN Courses ON Enrollments.course_id = Courses.id;

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q122, the correct answer is "SELECT Students.name, Courses.course". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q123. What is the role of a Tomcat server in a Webservice environment?

- [ ] A. To provide a graphical user interface for web applications.
- [ ] B. To store and manage large amounts of data.
- **[x] C. To host and execute Java servlets and JSPs. (Correct Answer)**
- [ ] D. To manage user authentication and authorization.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q123, the correct answer is "To host and execute Java servlets and JSPs.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q124. What is the main advantage of using JSON over XML for data exchange in Webservices?

- [ ] A. JSON is more secure than XML.
- **[x] B. JSON is more efficient and lightweight than XML. (Correct Answer)**
- [ ] C. JSON is a more widely used standard than XML.
- [ ] D. JSON is easier to understand and implement than XML.

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Medium`

**Explanation:** For Q124, the correct answer is "JSON is more efficient and lightweight than XML.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q125. What is the primary difference between XML and JSON? XML is a markup language while JSON is a scripting language.

- [ ] A. XML is used for data exchange while JSON is used for web page design.
- **[x] B. XML is a markup language while JSON is a lightweight data-interchange (Correct Answer)**
- [ ] C. format.
- [ ] D. XML is more efficient than JSON for data exchange.

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Easy`

**Explanation:** For Q125, the correct answer is "XML is a markup language while JSON is a lightweight data-interchange". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q126. Which of the following is a valid JSON data structure?

- [ ] A. { "name": "John", "age": 30 }
- [ ] B. John30
- [ ] C. [ "John", 30 ]
- **[x] D. "name": "John", "age": 30 (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q126, the correct answer is ""name": "John", "age": 30". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q127. Which of the following is NOT a benefit of using Webservices?

- [ ] A. Increased interoperability between different applications.
- [ ] B. Reduced development time and cost.
- [ ] C. Improved security and reliability.
- **[x] D. Increased dependence on proprietary protocols. (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q127, the correct answer is "Increased dependence on proprietary protocols.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q128. How does Hibernate implement persistence? By using a separate database connection for each object. By storing objects in memory and synchronizing them with the database

- [ ] A. periodically.
- [ ] B. By using a single database connection for all objects.
- **[x] C. By converting objects into SQL statements and executing them against the (Correct Answer)**
- [ ] D. database.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q128, the correct answer is "By converting objects into SQL statements and executing them against the". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q129. What is the difference between JPA and Hibernate? JPA is a specific ORM implementation, while Hibernate is a standard specification.

- **[x] A. Hibernate is a specific ORM implementation, while JPA is a standard (Correct Answer)**
- [ ] B. specification.
- [ ] C. JPA is a database management system, while Hibernate is an ORM tool.
- [ ] D. Hibernate is a programming language, while JPA is a framework.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q129, the correct answer is "Hibernate is a specific ORM implementation, while JPA is a standard". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q130. What is the purpose of the @GeneratedValue annotation in JPA?

- **[x] A. To automatically generate values for the primary key. (Correct Answer)**
- [ ] B. To specify the database connection details.
- [ ] C. To map an object property to a database column.
- [ ] D. To create a new database table automatically.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q130, the correct answer is "To automatically generate values for the primary key.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q131. How does an ORM tool handle data relationships between objects?

- [ ] A. By using separate database tables for each object.
- **[x] B. By using foreign keys to link related objects in the database. (Correct Answer)**
- [ ] C. By storing all related objects in a single table.
- [ ] D. By using a separate database connection for each relationship.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q131, the correct answer is "By using foreign keys to link related objects in the database.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q132. What is the purpose of the @Entity annotation in JPA?

- [ ] A. To define the primary key of an entity.
- **[x] B. To map an object class to a database table. (Correct Answer)**
- [ ] C. To specify the database connection details.
- [ ] D. To create a new database table automatically.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q132, the correct answer is "To map an object class to a database table.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q133. Which of the following is a valid JPA query language?

- [ ] A. SQL
- **[x] B. JPQL (Correct Answer)**
- [ ] C. MYSQL
- [ ] D. MSSQL

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q133, the correct answer is "JPQL". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q134. Which of the following is a common method for deleting data from a database using JPA?

- [ ] A. Using a SQL delete statement.
- [ ] B. Using the EntityManager.persist(
- **[x] C. Using the EntityManager.remove( (Correct Answer)**
- [ ] D. Using the EntityManager.merge(

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q134, the correct answer is "Using the EntityManager.remove(". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q135. What is the purpose of the @Id annotation in JPA?

- **[x] A. To define the primary key of an entity. (Correct Answer)**
- [ ] B. To map an object property to a database column.
- [ ] C. To specify the database connection details.
- [ ] D. To create a new database table automatically.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q135, the correct answer is "To define the primary key of an entity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q136. Which of the following is a common method for retrieving data from a database using JPA?

- [ ] A. Using a SQL query.
- [ ] B. Using a JPQL query.
- [ ] C. Using a Hibernate query language (HQL
- **[x] D. All of the above. (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q136, the correct answer is "All of the above.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q137. Which of the following is a common method for updating data in a database using JPA?

- [ ] A. Using a SQL update statement.
- **[x] B. Using the EntityManager.merge( (Correct Answer)**
- [ ] C. Using the EntityManager.persist(
- [ ] D. Using the EntityManager.remove(

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q137, the correct answer is "Using the EntityManager.merge(". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q138. What is the purpose of the @ManyToOne annotation in JPA?

- [ ] A. To define a one-to-many relationship between entities.
- [ ] B. To define a many-to-many relationship between entities.
- [ ] C. To define a one-to-one relationship between entities.
- **[x] D. To define a many-to-one relationship between entities. (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q138, the correct answer is "To define a many-to-one relationship between entities.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q139. What is the primary goal of normalization in relational database design?

- **[x] A. To reduce data redundancy and improve data integrity. (Correct Answer)**
- [ ] B. To increase the speed of data retrieval.
- [ ] C. To simplify the database schema for easier maintenance.
- [ ] D. To ensure data consistency across multiple databases.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q139, the correct answer is "To reduce data redundancy and improve data integrity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q140. Which of the following is NOT a benefit of using a relational database management system (RDBMS)?

- [ ] A. Improved data consistency.
- [ ] B. Increased data security.
- [ ] C. Reduced data redundancy.
- **[x] D. Simplified data access for users. (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q140, the correct answer is "Simplified data access for users.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q141. Which of the following is a disadvantage of normalization?

- [ ] A. Increased data redundancy.
- **[x] B. Increased complexity of database design. (Correct Answer)**
- [ ] C. Reduced data retrieval speed.
- [ ] D. Increased risk of data inconsistency.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q141, the correct answer is "Increased complexity of database design.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q142. Which normal form eliminates repeating groups of data within a table?

- **[x] A. First Normal Form (1NF) (Correct Answer)**
- [ ] B. Second Normal Form (2NF)
- [ ] C. Third Normal Form (3NF)
- [ ] D. Boyce-Codd Normal Form (BCNF)

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q142, the correct answer is "First Normal Form (1NF)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q143. Which of the following is a common technique used to denormalize a database?

- **[x] A. Adding redundant data to improve performance. (Correct Answer)**
- [ ] B. Removing unnecessary columns from tables.
- [ ] C. Creating new tables to store related data.
- [ ] D. Enforcing referential integrity constraints.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q143, the correct answer is "Adding redundant data to improve performance.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q144. Which of the following is NOT a characteristic of a relational database management system (RDBMS)?

- [ ] A. Data is stored in tables with rows and columns.
- [ ] B. Data is accessed through a structured query language (SQL).
- **[x] C. Data is organized hierarchically in a tree-like structure. (Correct Answer)**
- [ ] D. Relationships between tables are defined through foreign keys.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q144, the correct answer is "Data is organized hierarchically in a tree-like structure.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q145. Which of the following is an example of a referential integrity constraint?

- **[x] A. A foreign key in one table must match a primary key in another table. (Correct Answer)**
- [ ] B. A column must contain only unique values.
- [ ] C. A column must be a specific data type.
- [ ] D. A column must not be empty.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q145, the correct answer is "A foreign key in one table must match a primary key in another table.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q146. A table is in 2NF if it is in 1NF and:

- **[x] A. All non-key attributes are dependent on the primary key. (Correct Answer)**
- [ ] B. All non-key attributes are dependent on a candidate key.
- [ ] C. No non-key attribute is dependent on another non-key attribute.
- [ ] D. The table has only one primary key.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q146, the correct answer is "All non-key attributes are dependent on the primary key.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q147. What does referential integrity ensure in a relational database?

- [ ] A. That all data in the database is accurate and consistent.
- **[x] B. That relationships between tables are correctly enforced. (Correct Answer)**
- [ ] C. That all data is stored in a normalized form.
- [ ] D. That the database is secure from unauthorized access.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q147, the correct answer is "That relationships between tables are correctly enforced.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q148. Which of the following is a characteristic of a table in 3NF?

- [ ] A. It has no partial dependencies.
- [ ] B. It has no transitive dependencies.
- [ ] C. It has no multi-valued dependencies.
- **[x] D. All of the above. (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q148, the correct answer is "All of the above.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q149. What is the primary function of Git in the context of software development?

- [ ] A. Hosting and managing code repositories.
- [ ] B. Providing a graphical user interface for interacting with code repositories.
- **[x] C. Tracking changes to files and allowing for collaboration on projects. (Correct Answer)**
- [ ] D. Automating the deployment of code to production servers.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q149, the correct answer is "Tracking changes to files and allowing for collaboration on projects.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q150. Which of the following is NOT a benefit of using a version control system? Tracking changes made to files over time.

- [ ] A. Collaborating on projects with multiple people simultaneously.
- [ ] B. Restoring previous versions of files in case of accidental deletion or
- [ ] C. corruption.
- **[x] D. Preventing accidental changes to files by locking them for editing. (Correct Answer)**

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q150, the correct answer is "Preventing accidental changes to files by locking them for editing.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q151. What is the purpose of a "commit" in Git?

- [ ] A. To create a new branch of the project.
- [ ] B. To merge changes from one branch into another.
- **[x] C. To save a snapshot of the current state of the project's files. (Correct Answer)**
- [ ] D. To revert changes made to the project back to a previous version.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q151, the correct answer is "To save a snapshot of the current state of the project's files.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q152. Which of the following is a key difference between Git and GitHub? Git is a distributed version control system, while GitHub is a centralized one. Git is a command-line tool, while GitHub is a web-based platform.

- **[x] A. Git is used for tracking changes to files, while GitHub is used for managing (Correct Answer)**
- [ ] B. project issues.
- [ ] C. Git is used for collaborating on projects, while GitHub is used for hosting
- [ ] D. code repositories.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q152, the correct answer is "Git is used for tracking changes to files, while GitHub is used for managing". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q153. Which Hibernate strategy determines how collections are fetched?

- **[x] A. Fetch mode (Correct Answer)**
- [ ] B. Fetch type
- [ ] C. Fetch plan
- [ ] D. Fetch group

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q153, the correct answer is "Fetch mode". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q154. Why might you use a named query instead of a dynamic query in JPQL?

- [ ] A. Named queries can only be used with native SQL
- [ ] B. Dynamic queries cannot use joins
- [ ] C. Named queries support parameter substitution
- **[x] D. Named queries are faster as they are precompiled (Correct Answer)**

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Medium`

**Explanation:** For Q154, the correct answer is "Named queries are faster as they are precompiled". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q155. John is implementing a service that renders different responses based on the request content type. What method should he override in his Servlet to achieve this?

- [ ] A. doGet() and doPost() together.
- [ ] B. The init() method to define behavior for various content types.
- **[x] C. The service() method for handling all types of requests. (Correct Answer)**
- [ ] D. The destroy() method to clean up after requests.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q155, the correct answer is "The service() method for handling all types of requests.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q156. A web application needs to serve different content types based on the user's device and preferences. How can the application determine the preferred format for response content?

- **[x] A. By using the Accept header in the HTTP request. (Correct Answer)**
- [ ] B. By implementing URL routing for each device type.
- [ ] C. By defining a default content type in the server configuration.
- [ ] D. By analyzing the User-Agent string in the request.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q156, the correct answer is "By using the Accept header in the HTTP request.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q157. What happens if you omit the cascade attribute in a @OneToMany association?

- [ ] A. All changes to the parent are automatically propagated to the child
- [ ] B. Changes to the child entities are ignored by JPA
- **[x] C. Child entities are not affected by parent operations (Correct Answer)**
- [ ] D. JPA will throw an error

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q157, the correct answer is "Child entities are not affected by parent operations". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q158. Kiran is designing a new service that requires two different types of notifications: email and SMS. He wishes to implement dependency injection for better code management. Which type of dependency injection is best suited for this scenario when both notifications are required components?

- [ ] A. Setter injection for both notifications
- [ ] B. Interface injection for the email notification only
- **[x] C. Constructor injection for both notifications (Correct Answer)**
- [ ] D. No injection is needed; instantiate directly

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q158, the correct answer is "Constructor injection for both notifications". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q159. You need to calculate the total salary of employees grouped by department using JPQL. Which query would achieve this? SELECT d.name, SUM(e.salary) FROM Department d JOIN d.employees e GROUP BY d.name

- **[x] A. SELECT e.salary, COUNT(e) FROM Employee e WHERE e.department IS NOT (Correct Answer)**
- [ ] B. NULL
- [ ] C. SELECT SUM(e.salary), d.name FROM Employee e GROUP BY e.department
- [ ] D. SELECT e.salary, e.department FROM Employee e GROUP BY e.department

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Hard`

**Explanation:** For Q159, the correct answer is "SELECT e.salary, COUNT(e) FROM Employee e WHERE e.department IS NOT". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q160. What is a functional dependency in database normalization?

- [ ] A. A dependency between rows in the same table
- [ ] B. A mapping of keys to foreign keys
- [ ] C. A dependency between tables in a relationship
- **[x] D. A condition where one attribute uniquely determines another (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q160, the correct answer is "A condition where one attribute uniquely determines another". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q161. You have a Spring Boot application with a CommandLineRunner bean. What happens if you define multiple CommandLineRunner beans? Only the first one gets executed

- [ ] A. Spring throws an exception
- [ ] B. All CommandLineRunner beans are executed in no specific order
- **[x] C. All CommandLineRunner beans are executed sequentially based on their (Correct Answer)**
- [ ] D. @Order annotation

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q161, the correct answer is "All CommandLineRunner beans are executed sequentially based on their". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q162. What will be the output of the following REST Controller method when called with a valid item ID?

- **[x] A. 200 OK with the item details (Correct Answer)**
- [ ] B. 404 Not Found
- [ ] C. 500 Internal Server Error
- [ ] D. Throws ItemNotFoundException

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q162, the correct answer is "200 OK with the item details". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q163. A team is implementing a user management system and requires a method in their repository to find a user by their email address. Which repository method naming convention should they use for this purpose? getEmailUser(String email) @RestController @RequestMapping("/api/items") public class ItemController { @Autowired private ItemService itemService; @GetMapping("/{id}") public ResponseEntity<Item> getItem(@PathVariable Long id) {

```java
findUserByEmail(String email)
loadUserByEmail(String email)
queryUserByEmail(String email)
```

- [ ] A. Item item = itemService.findById(id);
- [ ] B. return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
- **[x] C. } (Correct Answer)**
- [ ] D. }

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q163, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q164. A developer is working on an e-commerce platform and needs to establish a relationship where a `Customer` can place multiple `Orders`, but each `Order` is associated with only one `Customer`. Which Spring Data JPA annotation should the developer use to appropriately model this relationship?

- [ ] A. @OneToOne
- [ ] B. @ManyToMany
- **[x] C. @OneToMany (Correct Answer)**
- [ ] D. @ManyToOne

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q164, the correct answer is "@OneToMany". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q165. You configure Spring Security with basic authentication. How can you ensure that all users must log in before accessing any endpoint? Use http.authorizeRequests().anyRequest().authenticated() in the security

- **[x] A. configuration (Correct Answer)**
- [ ] B. Set spring.security.enable-all=true in application properties
- [ ] C. Enable the @PreAuthorize annotation globally
- [ ] D. Add security.require-login=true in the security filter

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q165, the correct answer is "configuration". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q166. A developer wants to create dynamic queries based on various filter criteria that may change at runtime. What is the best way to achieve this using Spring Data JPA's Specifications?

- [ ] A. Use native SQL queries for flexibility.
- [ ] B. Implement CriteriaBuilder directly for the queries.
- [ ] C. Create a repository method without using Specifications.
- **[x] D. Implement the Specification interface for building queries. (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q166, the correct answer is "Implement the Specification interface for building queries.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q167. What do merge conflicts typically indicate during a Git merge? Merge conflicts occur when changes in different branches affect the same line of code, requiring manual resolution.

- **[x] A. Merge conflicts indicate that the repository is corrupted and cannot be (Correct Answer)**
- [ ] B. used.
- [ ] C. Merge conflicts arise from pushing changes to the remote repository.
- [ ] D. Merge conflicts happen when branches are merged too frequently.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q167, the correct answer is "Merge conflicts indicate that the repository is corrupted and cannot be". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q168. A team of developers is implementing an authentication mechanism using JWT in their Spring Boot application. After logging in, the application issues a token with a short expiration time to enhance security. However, a requirement arises where the user session must remain seamless, even when the token expires. What should the development team implement to satisfy this requirement? Automatically refresh the token upon each request without user intervention.

- [ ] A. Prompt the user to log in again every time the token expires.
- **[x] B. Implement a refresh token mechanism to obtain a new access token (Correct Answer)**
- [ ] C. without re-authentication.
- [ ] D. Use a long-lived token that never expires.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q168, the correct answer is "Implement a refresh token mechanism to obtain a new access token". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q169. A development team is designing a RESTful API using Spring Boot that will leverage JWT for authentication. They decide to include user roles as claims in the JWT tokens. However, they are unsure about how to handle authorization checks efficiently. What is the recommended approach for checking user roles when processing requests? Decode the JWT token on every request and compare roles in memory.

- [ ] A. Store roles in a database and query it every time to authorize access.
- **[x] B. Implement a role-based access control mechanism by validating roles (Correct Answer)**
- [ ] C. decoded from the JWT at request time.
- [ ] D. Rely solely on client-side checks for user roles based on token data.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q169, the correct answer is "Implement a role-based access control mechanism by validating roles". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q170. During a code review, Tom discovers that the JWT implementation includes claims such as `iss`, `sub`, and a custom claim `userRole`. He wants to determine how these claims should be securely handled within the system. What would be Tom's best approach to ensure the JWT claims are appropriately validated? Check the integrity of claims against trusted server-side data before processing requests. Validate claims only during the creation of the token, ignoring them during

- **[x] A. validation. (Correct Answer)**
- [ ] B. Avoid using claims as they may expose sensitive information.
- [ ] C. Hardcode the expected values of claims in the client-side code for
- [ ] D. verification.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q170, the correct answer is "validation.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q171. Which of these can prevent CSRF attacks in a Spring Boot application?

- [ ] A. Rely on basic authentication instead of tokens
- [ ] B. Use only GET methods for endpoints
- [ ] C. Disable csrf() in HttpSecurity
- **[x] D. Use a CSRF token and include it in all state-changing requests (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q171, the correct answer is "Use a CSRF token and include it in all state-changing requests". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q172. A company is developing a system with a complex hierarchy of employee roles using Hibernate. They want to ensure that the database architecture efficiently supports querying and ensures minimal redundancy. What inheritance mapping strategy should they implement in their Spring Boot application for optimal performance? Joined inheritance mapping to separate attributes into relevant tables while sharing common attributes. Single table inheritance to consolidate all employee role attributes into one table for easier queries.

- **[x] A. Table per class strategy to create separate tables for every employee role, (Correct Answer)**
- [ ] B. allowing full customization.
- [ ] C. A non-mapped strategy, relying on an application layer to manage the role
- [ ] D. hierarchy.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q172, the correct answer is "Table per class strategy to create separate tables for every employee role,". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q173. Which annotation is used to define a class as a Spring-managed bean?

- [ ] A. @Bean
- [ ] B. @Primary
- **[x] C. @Component (Correct Answer)**
- [ ] D. @Configuration

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q173, the correct answer is "@Component". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q174. A company is developing a REST API to serve data to a front-end application. They want to ensure that their API is well-structured and adheres to REST principles. What should they use in Spring to define their API endpoints effectively?

- **[x] A. Use the @RestController along with @RequestMapping for each endpoint. (Correct Answer)**
- [ ] B. Map all requests to a single controller that handles different endpoints.
- [ ] C. Use @Controller without REST-specific annotations.
- [ ] D. Define API endpoints directly in the service layer.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q174, the correct answer is "Use the @RestController along with @RequestMapping for each endpoint.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q175. What does the `@Entity` annotation indicate in a Spring Data JPA application? The @Entity annotation specifies the data format for JSON responses. The @Entity annotation is used for securing data against unauthorized

- [ ] A. access.
- [ ] B. The @Entity annotation allows classes to inherit from other classes.
- **[x] C. The @Entity annotation marks a class as a persistent entity for database (Correct Answer)**
- [ ] D. mapping.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q175, the correct answer is "The @Entity annotation marks a class as a persistent entity for database". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q176. A company is creating a data warehouse that aggregates data from multiple independent sources for complex bi-annual reporting. The diverse types of data and the necessity for rapid access pose significant challenges. The data engineering team is considering various normalization strategies to balance speed and data redundancy. What should the team prioritize in their approach to ensure fast reporting at the cost of some data integrity? Normalization to Third Normal Form (3NF) to ensure no transitive dependencies Denormalization, including redundant data, to improve read performance for

- **[x] A. analytical queries (Correct Answer)**
- [ ] B. Strict adherence to Boyce-Codd Normal Form (BCNF) for all data structures
- [ ] C. Using separate, fully normalized databases to maintain data integrity across
- [ ] D. the system

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q176, the correct answer is "analytical queries". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q177. What does the @Repository annotation in Spring indicate?

- [ ] A. It is a controller for database operations
- [ ] B. It is a component for handling REST requests
- **[x] C. It is a DAO that interacts with the database (Correct Answer)**
- [ ] D. It is used to create a database

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q177, the correct answer is "It is a DAO that interacts with the database". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q178. John wants to save a new category entity to his database using Spring Data JPA. Which code snippet should he use?

- [ ] A. repository.persist(category)
- [ ] B. repository.insert(category)
- **[x] C. repository.save(category) (Correct Answer)**
- [ ] D. repository.add(category)

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q178, the correct answer is "repository.save(category)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q179. Question 179

```java
An exception will be thrown
```

- [ ] A. Consider the following code snippet for a Spring JPA Entity. What will be the output of calling `repository.count()` if five entities
- [ ] B. are stored in the database?
- [ ] C. 0
- **[x] D. 5 (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q179, the correct answer is "5". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q180. Which annotation is used to define a named query in JPA?

- [ ] A. @Query
- **[x] B. @NamedQuery (Correct Answer)**
- [ ] C. @CustomQuery
- [ ] D. @JPQL

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q180, the correct answer is "@NamedQuery". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q181. Emma is tasked with retrieving users by their last names in her application using Spring Data JPA. Which method naming convention would she use to create this query in her UserRepository?

- **[x] A. findByLastName (Correct Answer)**
- [ ] B. searchByLastName
- [ ] C. getLastName
- [ ] D. retrieveLastName

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q181, the correct answer is "findByLastName". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q182. Question 182

```java
updates. What is the most appropriate action Alex should take to effectively manage this situation?
Merge the feature branch with the main branch before completing the
feature.
Create a branch named "feature-update" and switch to it for making all
changes.
Pull requests should be submitted without creating a separate branch.
Commit all changes directly to the main branch to keep the history clean.
```

- **[x] A. Alex is working on a collaborative project involving multiple developers. They are implementing a new feature that requires a (Correct Answer)**
- [ ] B. significant code update. To ensure that their work does not disrupt the main project, Alex decides to create a new branch for their
- [ ] C. @Query("SELECT COUNT(u) FROM User u")
- [ ] D. long count();

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q182, the correct answer is "Alex is working on a collaborative project involving multiple developers. They are implementing a new feature that requires a". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q183. What is the primary benefit of using a Spring Data JPA repository? It simplifies data visualization in applications.

- **[x] A. It allows for easy implementation of CRUD operations without boilerplate (Correct Answer)**
- [ ] B. code.
- [ ] C. It restricts all database operations to read-only permissions.
- [ ] D. It manages application-level caching efficiently.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q183, the correct answer is "It allows for easy implementation of CRUD operations without boilerplate". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q184. Tom and his team are developing a web application on GitHub. Each team member needs to work on a different feature concurrently. What GitHub feature should they utilize to manage their work without conflicts?

- [ ] A. Forks
- [ ] B. Releases
- **[x] C. Branches (Correct Answer)**
- [ ] D. Commits

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q184, the correct answer is "Branches". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q185. Lisa wants to secure her methods within a Spring application based on user roles. Which annotation should she use to enforce this requirement?

- [ ] A. @EnableWebSecurity
- [ ] B. @Component
- **[x] C. @PreAuthorize (Correct Answer)**
- [ ] D. @Transactional

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q185, the correct answer is "@PreAuthorize". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q186. What is the primary role of the @Component annotation in Spring? A. To create a configuration class for Spring beans B. To mark a class as a Spring-managed bean for dependency injection C. To define a specific type of Spring bean, like a service or controller D. To enable transaction management for a Spring bean

- **[x] A. B only (Correct Answer)**
- [ ] B. A and B
- [ ] C. B and C
- [ ] D. D only

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q186, the correct answer is "B only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q187. What is the most commonly used data format for exchanging data in Webservices?

- **[x] A. XML and JSON (Correct Answer)**
- [ ] B. HTML and XML
- [ ] C. TXT and CSS
- [ ] D. SQL and CSV

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q187, the correct answer is "XML and JSON". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q188. A development team is working on a Spring Boot application that needs to manage configuration properties for different environments (e.g., development, testing, production). They want to avoid hard-coding these properties and prefer a more dynamic way to handle them. What would be the best practice for managing these configurations in Spring Boot? Define properties in individual Java classes for each environment.

- [ ] A. Store properties directly in the main application class.
- **[x] B. Use the application.properties or application.yml file with profile-specific (Correct Answer)**
- [ ] C. configurations.
- [ ] D. Rely solely on environment variable settings for all configurations.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q188, the correct answer is "Use the application.properties or application.yml file with profile-specific". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q189. Emily is working on a software project using GitHub. She wants to keep a history of all changes made to the project files. What is the primary benefit of using a version control system like GitHub in this scenario?

- [ ] A. It allows unlimited storage for all project files.
- **[x] B. It enables tracking changes to files over time. (Correct Answer)**
- [ ] C. It automatically backs up all system files.
- [ ] D. It restricts file access to specific users.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q189, the correct answer is "It enables tracking changes to files over time.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q190. John is tasked with improving a customer orders database that currently has duplicate customer information repeated across order rows. Which action should he take first to address the redundancy? Create a backup of the database

- [ ] A. Add more fields to the existing table
- [ ] B. Remove duplicate records from the table
- **[x] C. Normalize the database by moving repeating customer data into its own (Correct Answer)**
- [ ] D. table

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q190, the correct answer is "Normalize the database by moving repeating customer data into its own". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q191. What is the default fetch type for @OneToMany relationships?

- **[x] A. LAZY (Correct Answer)**
- [ ] B. EAGER
- [ ] C. AUTO
- [ ] D. NONE

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q191, the correct answer is "LAZY". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q192. In an e-commerce platform, you need to optimize the loading of product data for a category page that frequently changes and has a large number of associated products. What fetch strategy would be most advantageous in balancing performance and data loading efficiency? Use EAGER fetching for product categories while using LAZY fetching for associated products to reduce the initial fetch time. Use LAZY fetching for both categories and their associated products, minimizing upfront data load but causing multiple queries later.

- **[x] A. Use EAGER fetching for both categories and products to ensure all data is (Correct Answer)**
- [ ] B. loaded in a single query at the outset.
- [ ] C. Use a custom fetch join query only for frequently accessed product
- [ ] D. categories and ignore performance considerations for products.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q192, the correct answer is "Use EAGER fetching for both categories and products to ensure all data is". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q193. In a university management system: each student can enroll in multiple courses and each course can have multiple students; each course is taught by a single instructor. Which JPA mapping strategy best fits these requirements? Use @ManyToMany between students and courses, and @ManyToOne from Course to Instructor Use @OneToMany for students to courses and @ManyToOne for courses to

- **[x] A. instructors (Correct Answer)**
- [ ] B. Use @ManyToMany for students to courses, and @OneToMany for courses
- [ ] C. to instructors
- [ ] D. Use @ManyToOne for both students to courses and courses to instructors

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q193, the correct answer is "instructors". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q194. Sarah is tasked with implementing user authentication in a Spring application. She needs to restrict access to certain endpoints based on user roles. What would be the most effective way for her to set up security within her application? Implement login logic directly in the controller methods for each endpoint.

- **[x] A. Create a configuration class and use @EnableWebSecurity along with (Correct Answer)**
- [ ] B. configure() methods.
- [ ] C. Add security annotations on all service methods for role-checking.
- [ ] D. Use JavaScript to control access to backend APIs.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q194, the correct answer is "Create a configuration class and use @EnableWebSecurity along with". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q195. In Spring Data JPA, what is the purpose of the mappedBy attribute in a bidirectional relationship? It specifies the column name in the database

- **[x] A. It is placed on the inverse (non-owning) side to tell JPA that the foreign key (Correct Answer)**
- [ ] B. is managed by the field named on the other entity
- [ ] C. It is used only to create a one-to-one relationship between entities
- [ ] D. It triggers eager loading of the related entity

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q195, the correct answer is "It is placed on the inverse (non-owning) side to tell JPA that the foreign key". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q196. Emma has been working on a coding project and wants to save her latest changes with a descriptive message. Which git command should she use to record these changes in her local repository?

- [ ] A. git clone
- **[x] B. git commit (Correct Answer)**
- [ ] C. git push
- [ ] D. git pull

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q196, the correct answer is "git commit". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q197. Emily is tasked with creating a configuration class in her Spring Boot application. Which annotation should she use to indicate that her class provides Spring configuration?

- [ ] A. @SpringBootConfiguration
- [ ] B. @Component
- **[x] C. @Configuration (Correct Answer)**
- [ ] D. @EnableAutoConfiguration

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q197, the correct answer is "@Configuration". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q198. Ryan is organizing a library database and wants to make sure that each book entry does not duplicate author information. What process should he consider applying to the database?

- [ ] A. Data aggregation
- **[x] B. Data normalization (Correct Answer)**
- [ ] C. Data migration
- [ ] D. Data denormalization

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q198, the correct answer is "Data normalization". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q199. Alex is working in a team to develop a new application and needs to add a new feature without disrupting the main project. What is the best approach for him to follow using GitHub?

- [ ] A. Directly edit the main branch to make the changes.
- **[x] B. Create a new branch for the feature and work on it independently. (Correct Answer)**
- [ ] C. Delete the main branch and start a new repository.
- [ ] D. Share his changes in a chat before making any updates on GitHub.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q199, the correct answer is "Create a new branch for the feature and work on it independently.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q200. What is the main role of entity classes in Spring Boot JPA Mapping?

- [ ] A. To define service logic separately from database operations.
- **[x] B. To represent tables in a relational database. (Correct Answer)**
- [ ] C. To authenticate users in the application.
- [ ] D. To handle HTTP requests and responses.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q200, the correct answer is "To represent tables in a relational database.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q201. A development team is working on a collaborative project using Git. They have a feature branch for a new functionality, but another team member has made critical updates to the main branch that should be incorporated into the feature branch before merging it back. What should the developer do to synchronize their feature branch with the latest changes from the main branch effectively? Directly merge the main branch changes into the feature branch without reviewing the changes. Create a new branch from the feature branch and cherry-pick the necessary commits from the main branch. Pull the main branch into the feature branch and resolve any merge conflicts

- **[x] A. that arise, ensuring integration is complete before merging into the main (Correct Answer)**
- [ ] B. branch.
- [ ] C. Delete the feature branch and create a new one based off the updated main
- [ ] D. branch to avoid any issues during merging.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q201, the correct answer is "that arise, ensuring integration is complete before merging into the main". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q202. A development team is working on a new feature branch and wants to ensure that their changes are reviewed by the team before merging into the main branch. How should they proceed using GitHub to facilitate this process effectively? Directly push changes to the main branch without a review. Open a pull request against the main branch to initiate the code review process.

- **[x] A. Create a new branch with the same name as the main branch and push (Correct Answer)**
- [ ] B. changes there.
- [ ] C. Merge the feature branch into the main branch and notify the team via email
- [ ] D. for review.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q202, the correct answer is "Create a new branch with the same name as the main branch and push". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q203. In Spring Data JPA, which annotation is used to define a custom query method in a repository interface?

- **[x] A. @Query (Correct Answer)**
- [ ] B. @CustomQuery
- [ ] C. @NativeQuery
- [ ] D. @RepositoryQuery

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q203, the correct answer is "@Query". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q204. A healthcare application is implementing a feature to search for patients based on various dynamic criteria, such as age, condition, and visit date. The application needs to build sophisticated filtering options that can be combined based on user input. Which approach using Spring Data JPA would be most effective in this context? Use method naming conventions in the repository interface to create specific query methods for each filter. Create a Specification that combines different criteria using predicates for a flexible query construction.

- **[x] A. Implement a series of static query methods in the service layer that checks (Correct Answer)**
- [ ] B. each filter separately.
- [ ] C. Rely on a single SQL query that does not leverage the capabilities of JPA for
- [ ] D. dynamic filtering.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q204, the correct answer is "Implement a series of static query methods in the service layer that checks". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q205. When normalizing a relation `Library(BookID, Title, AuthorID, PublisherID, PublisherName)` with `PublisherID` leading to `PublisherName`, what will be the output of the following code snippet intended to extract necessary data while adhering to normalization rules?

- [ ] A. A complete set of books with their respective publisher names.
- **[x] B. A list of books, including their author IDs but excluding publisher details. (Correct Answer)**
- [ ] C. A combination of books and publishers resulting in unwanted duplication.
- [ ] D. An error due to the selection of non-grouped columns.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q205, the correct answer is "A list of books, including their author IDs but excluding publisher details.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q206. What distinguishes JPQL (Java Persistence Query Language) from standard SQL? JPQL cannot be used with joins.

- **[x] A. JPQL is specifically designed to work with Java objects instead of database (Correct Answer)**
- [ ] B. tables.
- [ ] C. JPQL only supports SELECT queries.
- [ ] D. JPQL is a programming language on its own.

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Medium`

**Explanation:** For Q206, the correct answer is "JPQL is specifically designed to work with Java objects instead of database". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q207. Which JPA annotation is used to mark a field as embeddable, allowing its properties to be inlined into the owning entity's table?

- [ ] A. @Entity
- **[x] B. @Embeddable (Correct Answer)**
- [ ] C. @Table
- [ ] D. @MappedSuperclass

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q207, the correct answer is "@Embeddable". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q208. Sophia wants to experiment with a new feature for her application without affecting the main codebase. Which git practice is best suited for this purpose? Deleting the repository Creating a branch

```java
Cloning the repository
```

- **[x] A. Committing changes directly to main (Correct Answer)**
- [ ] B. SELECT BookID, Title, AuthorID
- [ ] C. FROM Library
- [ ] D. WHERE PublisherID IS NOT NULL;

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q208, the correct answer is "Committing changes directly to main". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q209. Which of the following is true about the @GetMapping and @PostMapping annotations in Spring? A. @GetMapping is used for handling HTTP GET requests, while @PostMapping is used for handling HTTP POST requests. B. @GetMapping is used for sending data to the server, while @PostMapping is used for retrieving data from the server. C. Both @GetMapping and @PostMapping are used for updating data on the server. D. @GetMapping is used for handling HTTP POST requests, while @PostMapping is used for handling HTTP GET requests.

- **[x] A. A only (Correct Answer)**
- [ ] B. B only
- [ ] C. C only
- [ ] D. D only

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Easy`

**Explanation:** For Q209, the correct answer is "A only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q210. A developer is using a Spring Data JPA repository to fetch a list of products from a database. The products need to be sorted by their price in ascending order and filtered to include only those that are currently available. Which JPQL query is most appropriate to implement this requirement in a repository method? @Query("SELECT p FROM Product p WHERE p.available = true ORDER BY p.price ASC") List<Product> findAvailableProductsSortedByPrice(); @Query("SELECT p FROM Product p ORDER BY p.price ASC WHERE p.available = true") List<Product> findAvailableProductsSortedByPrice(); @Query("FROM Product p WHERE p.available = true SORT BY p.price")

- **[x] A. List<Product> findAvailableProductsSortedByPrice(); (Correct Answer)**
- [ ] B. @Query("SELECT p FROM Product WHERE p.price > 0 AND available = true
- [ ] C. ORDER BY p.price ASC")
- [ ] D. List<Product> findAvailableProductsSortedByPrice();

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q210, the correct answer is "List<Product> findAvailableProductsSortedByPrice();". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q211. Tom has a requirement to restrict access to certain features of his application based on user roles. What does Spring Security utilize to manage these access levels?

- **[x] A. Roles define access levels for users. (Correct Answer)**
- [ ] B. Roles define the password complexity required.
- [ ] C. Roles are irrelevant in SQL Injection scenarios.
- [ ] D. Roles define how data is stored in the database.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q211, the correct answer is "Roles define access levels for users.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q212. A team of developers is working on a large-scale application that requires coordination to prevent conflicts and maintain stability while new features are developed. They have decided to use Git for version control. What branching strategy should they implement to best handle multiple feature branches while ensuring a stable production environment and minimizing merge conflicts? Use a single branch for all development, committing directly to the master branch. Create a new branch for every commit made, leading to excessive branching.

- **[x] A. Implement Git Flow strategy, creating dedicated branches for feature, (Correct Answer)**
- [ ] B. develop, and master.
- [ ] C. Only merge feature branches when releasing, disregarding integration during
- [ ] D. development.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q212, the correct answer is "Implement Git Flow strategy, creating dedicated branches for feature,". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q213. Emma is tasked with retrieving all products that are out of stock from the database. Which method signature should she implement in her repository interface to accomplish this?

- [ ] A. findOutOfStock()
- [ ] B. fetchByStockIsZero()
- **[x] C. findByStockEquals(0) (Correct Answer)**
- [ ] D. findByStockLessThan(1)

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q213, the correct answer is "findByStockEquals(0)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q214. Alex discovers a bug while using the application his team developed on GitHub. He wants to track this bug along with other tasks and enhancements. Which GitHub feature should he use to report this issue effectively?

- [ ] A. Wiki
- [ ] B. Commit
- [ ] C. Pull request
- **[x] D. Issue (Correct Answer)**

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q214, the correct answer is "Issue". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q215. John is developing a Spring Boot application and needs to manage dependencies effectively. Which component should he use to simplify the dependency management process?

- [ ] A. @EnableAutoConfiguration
- **[x] B. Spring Boot Starter (Correct Answer)**
- [ ] C. @RestController
- [ ] D. @Configuration

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q215, the correct answer is "Spring Boot Starter". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q216. What is the primary role of a repository interface in Spring Data JPA? A repository interface manages application configurations.

- **[x] A. A repository interface simplifies data access by providing CRUD operations (Correct Answer)**
- [ ] B. automatically.
- [ ] C. A repository interface handles only read operations for data.
- [ ] D. A repository interface is used for validating user input in web applications.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q216, the correct answer is "A repository interface simplifies data access by providing CRUD operations". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q217. What is the main purpose of the @Autowired annotation in Spring? A. To configure the Spring bean lifecycle B. To inject dependencies automatically into Spring beans C. To enable transaction management in Spring D. To define a Spring bean

- [ ] A. A and C
- **[x] B. B only (Correct Answer)**
- [ ] C. D only
- [ ] D. A and B

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q217, the correct answer is "B only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q218. Given the JPQL query SELECT e FROM Employee e WHERE e.salary > :minSalary, how is the parameter minSalary passed in a Spring Data JPA repository?

- [ ] A. By defining it in the method name
- **[x] B. Using the @Param annotation with a method parameter. (Correct Answer)**
- [ ] C. Through a separate configuration file
- [ ] D. By directly binding it to the EntityManager.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q218, the correct answer is "Using the @Param annotation with a method parameter.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q219. What is JPQL?

- **[x] A. Java Persistence Query Language (Correct Answer)**
- [ ] B. Java Programming Query Language
- [ ] C. Java Protocol Query Language
- [ ] D. Java Process Query Language

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Hard`

**Explanation:** For Q219, the correct answer is "Java Persistence Query Language". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q220. Michael is using Spring Data JPA in his project to simplify data access operations. He is particularly interested in finding a way to easily create and interact with repositories. What is the primary advantage of using Spring Data JPA?

- **[x] A. It provides an easy way to implement data access layers using repositories. (Correct Answer)**
- [ ] B. It requires manual SQL query writing.
- [ ] C. It is only compatible with NoSQL databases.
- [ ] D. It does not support transactions.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q220, the correct answer is "It provides an easy way to implement data access layers using repositories.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q221. Ava is optimizing her application and is considering how data is fetched from the database. What is a key distinction about eager fetching in Spring Data JPA?

- [ ] A. Eager fetching retrieves data on demand
- [ ] B. Lazy fetching retrieves all data immediately
- **[x] C. Eager fetching retrieves data immediately. (Correct Answer)**
- [ ] D. No difference between fetch strategies.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q221, the correct answer is "Eager fetching retrieves data immediately.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q222. Which of the following statements best describes the concept of Dependency Injection (DI) in Spring? A. DI is a design pattern that allows an object to receive its dependencies from an external source rather than creating them itself. B. DI is used to manage the lifecycle of beans in the Spring container. C. DI is used to map the data between the database and Java objects. D. DI is a Spring feature used for transaction management

- **[x] A. A only (Correct Answer)**
- [ ] B. A and B
- [ ] C. B only
- [ ] D. A and C

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Hard`

**Explanation:** For Q222, the correct answer is "A only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q223. Which of the following is a key feature of RESTful web services? A. Uses SOAP protocol B. Stateless architecture C. Requires a specific programming language D. Always returns data in XML format

- [ ] A. A and B
- **[x] B. B only (Correct Answer)**
- [ ] C. B and D
- [ ] D. C only

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Easy`

**Explanation:** For Q223, the correct answer is "B only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q224. Rachel is working on a product inventory database and wants to ensure that her design minimizes data duplication and maintains consistency. What would be the primary advantage of normalizing her database?

- [ ] A. It speeds up data retrieval
- **[x] B. It reduces data redundancy and improves data integrity (Correct Answer)**
- [ ] C. It prevents all user errors
- [ ] D. It combines multiple datasets into one

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q224, the correct answer is "It reduces data redundancy and improves data integrity". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q225. Lisa is writing a SQL query to retrieve the names of all products in a store's inventory. Which command will she use to access this information from the database?

- [ ] A. GET
- **[x] B. SELECT (Correct Answer)**
- [ ] C. FETCH
- [ ] D. DISPLAY

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q225, the correct answer is "SELECT". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q226. Mark needs to query the database to find all employees whose salary exceeds a specified value. Which JPQL query format should he use?

- [ ] A. SELECT * FROM Employee WHERE salary > :salary
- **[x] B. SELECT e FROM Employee e WHERE e.salary > :salary (Correct Answer)**
- [ ] C. GET e WHERE e.salary > :salary
- [ ] D. FIND e BY salary > :salary

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Medium`

**Explanation:** For Q226, the correct answer is "SELECT e FROM Employee e WHERE e.salary > :salary". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q227. Which Spring Boot annotation is used to define a RESTful controller that handles HTTP requests?

- [ ] A. @Service
- [ ] B. @Repository
- **[x] C. @RestController (Correct Answer)**
- [ ] D. Controller

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Easy`

**Explanation:** For Q227, the correct answer is "@RestController". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q228. Which statement best describes the difference between SOAP and RESTful web services? RESTful services use XML exclusively, while SOAP can use JSON. SOAP is stateless, whereas REST is a protocol requiring stateful sessions.

- **[x] A. REST uses standard HTTP methods, while SOAP relies on XML messaging (Correct Answer)**
- [ ] B. and is protocol-based.
- [ ] C. SOAP services are only for internal use, while REST is used for external
- [ ] D. services.

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Hard`

**Explanation:** For Q228, the correct answer is "REST uses standard HTTP methods, while SOAP relies on XML messaging". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q229. In a Spring application, a developer wants to optimize the data access layer to minimize boilerplate code. Which strategy should they follow to efficiently implement this layer?

- [ ] A. Manually code all SQL statements in the service classes.
- **[x] B. Extend JpaRepository and create repository interfaces for data access. (Correct Answer)**
- [ ] C. Use JDBC templates to handle all database operations.
- [ ] D. Avoid an ORM framework and rely on raw JDBC for queries.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q229, the correct answer is "Extend JpaRepository and create repository interfaces for data access.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q230. Which of the following annotations is used to mark a field as a foreign key?

- [ ] A. @ForeignKey
- [ ] B. @PrimaryKeyJoinColumn
- **[x] C. @JoinColumn (Correct Answer)**
- [ ] D. @ForeignColumn

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q230, the correct answer is "@JoinColumn". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q231. John is developing a new feature for an application and wants to isolate his changes until they are ready for review. What should he do?

- **[x] A. Create a new branch (Correct Answer)**
- [ ] B. Push changes directly to the main branch
- [ ] C. Delete the current branch
- [ ] D. Revert the last commit

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q231, the correct answer is "Create a new branch". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q232. What is the purpose of the @Table annotation in JPA?

- [ ] A. To specify the primary key of the entity.
- **[x] B. To define the name of the database table that the entity maps to. (Correct Answer)**
- [ ] C. To create a one-to-many relationship between entities.
- [ ] D. To indicate a JSON mapping for REST APIs.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q232, the correct answer is "To define the name of the database table that the entity maps to.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q233. Which of the following annotations are used to define an auto-generated primary key in JPA? A. @Entity B. @TableGenerator C. @GeneratedValue(strategy = GenerationType.AUTO) D. @SequenceGenerator

- **[x] A. C (Correct Answer)**
- [ ] B. A
- [ ] C. C and D
- [ ] D. B and D

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q233, the correct answer is "C". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q234. Laura is developing a Java application to manage a library system. She wants to create an entity to represent a book in the database. Which annotation should she use to map her Book class to a database table?

- [ ] A. @Table
- [ ] B. @Data
- **[x] C. @Entity (Correct Answer)**
- [ ] D. @Column

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q234, the correct answer is "@Entity". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q235. David is developing an application that needs to maintain a list of orders associated with a single customer. Which Spring Boot JPA annotation should he use to establish where a single entity (customer) is associated with multiple entities (orders)?

- [ ] A. @ManyToMany
- **[x] B. @OneToMany (Correct Answer)**
- [ ] C. @ManyToone
- [ ] D. @OneToOne

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q235, the correct answer is "@OneToMany". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q236. Alex is confused about the differences between local and remote branches in git. He realizes he needs to push his changes to the shared repository. What action does he need to take?

- [ ] A. Branch out from the current branch
- [ ] B. Create a new local branch
- **[x] C. Save changes locally and push to remote (Correct Answer)**
- [ ] D. Merge local branch with remote branch

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q236, the correct answer is "Save changes locally and push to remote". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q237. A software team is implementing Git Flow for managing their development process. After implementing several features and resolving conflicts, they plan to release their product. They need to merge multiple feature branches into a release branch. What is the most effective strategy for proceeding with the merge? Merging all feature branches into the develop branch without further review. Testing each feature branch independently, then merging them into the release branch while ensuring everything integrates smoothly.

- [ ] A. Merging the release branch directly back into the main branch without
- **[x] B. testing. (Correct Answer)**
- [ ] C. Deleting all feature branches and creating a new branch for release to avoid
- [ ] D. complication.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q237, the correct answer is "testing.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q238. Angela is setting up a simple application and wants to store user details without using a database. What feature of Spring Security should she use?

- [ ] A. Using JWT for token management
- [ ] B. Using LDAP for directory access
- **[x] C. Using InMemoryUserDetailsManager for user storage (Correct Answer)**
- [ ] D. Using JDBC for database users

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q238, the correct answer is "Using InMemoryUserDetailsManager for user storage". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q239. What is the error in this JPA entity class that aims to use the @GeneratedValue annotation for generating primary key values? The @Id annotation is missing on the id field, so it cannot be recognized as

- **[x] A. the primary key (Correct Answer)**
- [ ] B. The @GeneratedValue annotation must specify a generation strategy.
- [ ] C. The primary key field must be of type Integer
- [ ] D. There should not be any field of type Long in an entity

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q239, the correct answer is "the primary key". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q240. What are the main components of the Webservices architecture in java?

- **[x] A. Service Provider, Service Requester, and Service Registry (Correct Answer)**
- [ ] B. Only Client and Service layers
- [ ] C. Database and Server layers only
- [ ] D. User Interface and Database layers

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Hard`

**Explanation:** For Q240, the correct answer is "Service Provider, Service Requester, and Service Registry". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q241. Linda is designing a database for a library. She needs to ensure that each book is uniquely identified and that there are no repeating groups of data in her tables. Which Normalization form should she primarily focus on?

- [ ] A. Third Normal Form (3NF)
- **[x] B. First Normal Form (1NF) (Correct Answer)**
- [ ] C. Second Normal Form (2NF)
- [ ] D. Boyce-Codd Normal Form (BCNF)

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q241, the correct answer is "First Normal Form (1NF)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q242. In Spring, which of the following annotations is used to define a one-to-many relationship between two entities? A. @ManyToOne B. @OneToMany C. @OneToOne D. @ManyToMany @Entity public class Product {

```java
A and B
B only
C only
D only
```

- [ ] A. @GeneratedValue
- [ ] B. private Long id;
- [ ] C. private String productName;
- **[x] D. } (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q242, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q243. Noah needs to create a relationship between Author and Book entities, where one author can have many books. Which annotation should Noah use on the author field in the Book entity?

- **[x] A. @ManyToOne (Correct Answer)**
- [ ] B. @MappedSuperclass
- [ ] C. @OneToMany
- [ ] D. @JoinTable

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q243, the correct answer is "@ManyToOne". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q244. Emily is setting up a new Spring Boot application. She comes across an annotation that simplifies the configuration process by enabling auto-configuration and component scanning. What is the name of this annotation?

- [ ] A. @Configuration
- [ ] B. @ComponentScan
- **[x] C. @SpringBootApplication (Correct Answer)**
- [ ] D. @EnableAutoConfiguration

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q244, the correct answer is "@SpringBootApplication". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q245. Lisa is designing a feature that requires ensuring multiple related database operations either all succeed or all fail. Which annotation should she use on her service method to handle these transactions properly?

- **[x] A. @Transactional (Correct Answer)**
- [ ] B. @Service
- [ ] C. @Autowired
- [ ] D. @Cacheable

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q245, the correct answer is "@Transactional". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q246. Emma is designing a database for a school system. She needs to ensure that each student has a unique identifier. Which feature should she implement to achieve this?

- [ ] A. A foreign key
- **[x] B. A primary key (Correct Answer)**
- [ ] C. A default key
- [ ] D. An index

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q246, the correct answer is "A primary key". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q247. Alex wants to externalize his application's configuration settings in a Spring Boot project. Which file should he use to achieve this?

- [ ] A. config.json
- [ ] B. settings.xml
- **[x] C. application.properties (Correct Answer)**
- [ ] D. environment.yml

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q247, the correct answer is "application.properties". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q248. What does the following JPQL query in Spring Boot return? All orders with the given status The total number of orders matching the given status

- **[x] A. The sum of order amounts for the given status (Correct Answer)**
- [ ] B. All unique statuses in the Order table
- [ ] C. @Query("SELECT COUNT(o) FROM Order o WHERE o.status = :status")
- [ ] D. Long countByStatus(@Param("status") String status);

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Medium`

**Explanation:** For Q248, the correct answer is "The sum of order amounts for the given status". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q249. What is the purpose of the @JsonIgnore annotation in Spring? A. To serialize a field as a JSON object B. To prevent a field from being serialized or deserialized in JSON C. To specify the custom format for serializing a field D. To convert a JSON field to a Java object

- **[x] A. B only (Correct Answer)**
- [ ] B. A and B
- [ ] C. C only
- [ ] D. D only

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Hard`

**Explanation:** For Q249, the correct answer is "B only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q250. David wants to set up his Spring Boot application to automatically configure itself based on the included libraries. Which annotation should he use to achieve this?

- **[x] A. @EnableAutoConfiguration (Correct Answer)**
- [ ] B. @SpringApplication
- [ ] C. @ComponentScan
- [ ] D. @ConfigurationProperties

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q250, the correct answer is "@EnableAutoConfiguration". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q251. During the implementation of a web application, Mark learns about CSRF attacks. What does Spring Security's CSRF protection aim to do? CSRF protection prevents unauthorized commands from being executed by

- **[x] A. users. (Correct Answer)**
- [ ] B. CSRF protection creates a backup of user sessions.
- [ ] C. CSRF protection encrypts user database connections.
- [ ] D. CSRF protection requires validation only on login attempts.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q251, the correct answer is "users.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q252. Tom is setting up relationships in his database for an e-commerce application. He wants to link the order table to the customer table. What term describes the key he will use in the order table?

- [ ] A. Primary key
- [ ] B. Composite key
- **[x] C. Foreign key (Correct Answer)**
- [ ] D. Candidate key

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q252, the correct answer is "Foreign key". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q253. In the process of handling security in her application, Emma learns about the Spring Security filter chain. What is the primary function of the security filters?

- **[x] A. Filters process security concerns based on request and response. (Correct Answer)**
- [ ] B. Filters manage user data storage options.
- [ ] C. Filters guarantee database connections.
- [ ] D. Filters make web servers unnecessary.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q253, the correct answer is "Filters process security concerns based on request and response.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q254. You are normalizing the relation `Student(StudentID, Name, CourseID, InstructorID)` where `InstructorID` is determined by `CourseID`. What would be the output of executing this SQL statement aimed at reducing redundancy?

- [ ] A. A unique list of StudentID and Name associated with InstructorID.
- **[x] B. A unique mapping of courses to their instructors, minimizing redundancy. (Correct Answer)**
- [ ] C. A complete list of all students in every course.
- [ ] D. An error because of missing attributes besides CourseID and InstructorID.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q254, the correct answer is "A unique mapping of courses to their instructors, minimizing redundancy.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q255. Mark is building a RESTful web service using Spring Boot. Which annotation is essential for returning JSON responses from his controller methods?

- [ ] A. @GetMapping
- [ ] B. @Controller
- **[x] C. @RestController (Correct Answer)**
- [ ] D. @RequestMapping

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Hard`

**Explanation:** For Q255, the correct answer is "@RestController". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q256. Question 256

```java
SELECT S.Name, E.Course
FROM Students S
LEFT JOIN Enrollments E ON S.StudentID = E.StudentID
WHERE E.Course IS NOT NULL;
1
2
3
All students and their enrolled courses, including those without enrollments
Only students who are enrolled in courses
All students, even those with NULL course values
An error due to a mismatch in selected columns
```

- **[x] A. What will be the output of the following SQL snippet when executed on a database with tables `Students` and `Enrollments`? (Correct Answer)**
- [ ] B. CREATE TABLE CourseInstructor AS
- [ ] C. SELECT DISTINCT CourseID, InstructorID
- [ ] D. FROM Student;

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q256, the correct answer is "What will be the output of the following SQL snippet when executed on a database with tables `Students` and `Enrollments`?". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q257. Which HTTP method is used to retrieve data from a server? A. POST B. PUT C. GET D. DELETE

- [ ] A. A and B
- **[x] B. C only (Correct Answer)**
- [ ] C. B and D
- [ ] D. D only

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q257, the correct answer is "C only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q258. Which of the following standards is NOT typically associated with Webservices in java?

- [ ] A. WSDL (Web Services Description Language)
- [ ] B. JSON (JavaScript Object Notation)
- [ ] C. SOAP (Simple Object Access Protocol)
- **[x] D. SQL (Structured Query Language) (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q258, the correct answer is "SQL (Structured Query Language)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q259. What is the purpose of the @JsonBackReference annotation in Spring? A. To mark a field as the primary reference during serialization B. To prevent infinite recursion in bidirectional relationships by ignoring the back reference during serialization C. To serialize a field in reverse order D. To deserialize a field in a specific format

- **[x] A. B only (Correct Answer)**
- [ ] B. A and B
- [ ] C. C only
- [ ] D. D only

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q259, the correct answer is "B only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q260. What is the purpose of the @Column annotation in JPA? A. To define a column in the database table that corresponds to a field in the entity class B. To specify the foreign key relationship between two tables C. To define the primary key column in the database D. To map a database view to an entity class

- **[x] A. A only (Correct Answer)**
- [ ] B. B only
- [ ] C. C only
- [ ] D. D only

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q260, the correct answer is "A only". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q261. Liam is starting a new project with Spring Boot and wants to take advantage of Spring Data JPA's features. What benefits does the Spring Boot Starter Data JPA provide?

- [ ] A. It is only for web applications
- [ ] B. The starter provides only repository interfaces
- [ ] C. Spring Boot Starter Data requires manual configuration
- **[x] D. The Spring Boot Starter Data JPA simplifies dependency management. (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q261, the correct answer is "The Spring Boot Starter Data JPA simplifies dependency management.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q262. Which attribute of the @Column annotation is used to specify the column name in the database?

- **[x] A. name (Correct Answer)**
- [ ] B. columnName
- [ ] C. value
- [ ] D. key

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q262, the correct answer is "name". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q263. While working on a team project, Lisa wants to update her local repository with the latest changes made by her coworkers that were pushed to the remote repository. Which command will she use?

- [ ] A. git clone
- **[x] B. git pull (Correct Answer)**
- [ ] C. git push
- [ ] D. git fetch

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q263, the correct answer is "git pull". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q264. A development team is collaborating on a project with multiple feature branches. Developer A has created a feature branch for a new user interface, while Developer B is working on a bug fix in a different branch. After merging their branches into the main branch, they encounter merge conflicts. What is the best approach for handling these conflicts? By immediately deleting one of the branches to eliminate the conflict. By reviewing the conflicting files, discussing the changes with the team, and selecting which changes to keep.

- **[x] A. By merging the main branch back into their feature branches before merging (Correct Answer)**
- [ ] B. again.
- [ ] C. By reverting to the most recent commit of the main branch without
- [ ] D. addressing the changes from the feature branches.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q264, the correct answer is "By merging the main branch back into their feature branches before merging". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q265. Analyze the following code. What will happen if the code attempts to retrieve a user with `findById` method when no user with the specified ID exists?

- **[x] A. Prints "User not found" (Correct Answer)**
- [ ] B. Prints "null"
- [ ] C. Throws a NoSuchElementException
- [ ] D. Prints an empty string

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q265, the correct answer is "Prints "User not found"". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q266. By default, what isolation level does Spring's @Transactional use if none is explicitly specified?

- [ ] A. READ_UNCOMMITTED
- **[x] B. DEFAULT (Correct Answer)**
- [ ] C. SERIALIZABLE
- [ ] D. REPEATABLE_READ

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q266, the correct answer is "DEFAULT". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q267. Question 267

```java
Leave the data as it is
Create separate tables for orders and products
Combine orders and products into one large table
Add an additional field to the existing table
```

- **[x] A. Tom has a simple database table that lists orders and their corresponding products. He realizes that each order can have (Correct Answer)**
- [ ] B. multiple products and should be broken into separate tables. What is the best approach to normalize his database?
- [ ] C. Optional<User> user = userRepository.findById(100L);
- [ ] D. System.out.println(user.isPresent() ? user.get().getName() : "User not found");

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q267, the correct answer is "Tom has a simple database table that lists orders and their corresponding products. He realizes that each order can have". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q268. What will be the output of the following SQL statement if the 'Sales' table contains 5 records, and all records have a column `amount` set to 100?

- [ ] A. 0
- **[x] B. 500 (Correct Answer)**
- [ ] C. 100
- [ ] D. An error because the condition cannot be met.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q268, the correct answer is "500". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q269. In Spring Boot JPA, which type of relationship allows one entity to be associated with multiple instances of another entity? One-to-One Many-to-Many One-to-Many

- **[x] A. Self-Referencing (Correct Answer)**
- [ ] B. SELECT SUM(amount) AS total_amount
- [ ] C. FROM Sales
- [ ] D. WHERE amount > 50;

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q269, the correct answer is "Self-Referencing". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q270. John is developing an application that needs to manage customer data such as names, addresses, and phone numbers. He wants to ensure that the data maintains its structure and relationships. What type of system should John use?

- [ ] A. A flat file system
- [ ] B. An in-memory data structure
- **[x] C. A relational database management system (RDBMS) (Correct Answer)**
- [ ] D. A NoSQL database

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q270, the correct answer is "A relational database management system (RDBMS)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q271. Jack is working on a project that involves many different entities and wants to perform CRUD operations easily. What is a key feature of Spring Data JPA repositories that Jack should consider?

- [ ] A. Repositories only for read operations
- [ ] B. Repositories require manual implementation
- **[x] C. Spring Data JPA repositories simplify data access. (Correct Answer)**
- [ ] D. Repositories are only for Hibernate

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q271, the correct answer is "Spring Data JPA repositories simplify data access.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q272. John is developing a Spring application that requires the injection of a service into a controller to handle user requests. Which method of dependency injection should he consider using for better manageability and testing?

- **[x] A. Using constructor-based injection. (Correct Answer)**
- [ ] B. Using direct instantiation.
- [ ] C. Using method overloading.
- [ ] D. Using static methods.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q272, the correct answer is "Using constructor-based injection.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q273. What is the purpose of the @Query annotation in Spring Boot JPA?

- **[x] A. It is used to define custom SQL queries. (Correct Answer)**
- [ ] B. It is used to define the structure of the database schema.
- [ ] C. It is used to specify the mapping between entities and database tables.
- [ ] D. It is used to define transactional boundaries.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q273, the correct answer is "It is used to define custom SQL queries.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q274. You want to send a GET request to your Spring Boot application. Which code snippet correctly implements this? @GetMapping("/api/products") public List<Product> getAllProducts() { return productService findAll(); @PostMapping("/api/products") public List<Product> getAllProducts() { ... }

- [ ] A. @RequestMapping("/api/products") public List<Product> getAllProducts() {
- [ ] B. ... }
- **[x] C. @GetMapping("/api/products") public List<Product> getAllProducts() { ... } (Correct Answer)**
- [ ] D. @PutMapping("/api/products") public List<Product> getAllProducts() { ... }

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Medium`

**Explanation:** For Q274, the correct answer is "@GetMapping("/api/products") public List<Product> getAllProducts() { ... }". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q275. Which component of the Spring framework is responsible for managing the lifecycle of Spring-managed beans?

- [ ] A. Spring AOP
- [ ] B. Spring MVC
- **[x] C. Spring IoC (Correct Answer)**
- [ ] D. Spring Security

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q275, the correct answer is "Spring IoC". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q276. A development team is working on a new feature that requires parallel development efforts from multiple team members. During a merge of these branches into `main`, conflicts arise due to overlapping changes in the same file. What is the best strategy for resolving these merge conflicts effectively in Git?

- [ ] A. Simply overwrite one branch with the other
- [ ] B. Discard changes from both branches
- **[x] C. Use a three-way merge to identify changes made in both branches (Correct Answer)**
- [ ] D. Commit changes without resolving conflicts

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q276, the correct answer is "Use a three-way merge to identify changes made in both branches". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q277. What is the purpose of the @Entity annotation in JPA? It marks a class as a persistent entity. It specifies the table name for a persistent entity. It defines the primary key for a persistent entity. return productService.findAll();

- **[x] A. } (Correct Answer)**
- [ ] B. 3
- [ ] C. 4
- [ ] D. It establishes a relationship between entities.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q277, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q278. During team collaboration, Richard needs to integrate the "feature" branch into his current branch. What command should he use?

- **[x] A. git merge feature (Correct Answer)**
- [ ] B. git checkout feature
- [ ] C. git push feature
- [ ] D. git branch feature

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q278, the correct answer is "git merge feature". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q279. Oliver is using Spring Data JPA and needs to create a new user. Which interface should he extend to access CRUD operations easily?

- **[x] A. JpaRepository (Correct Answer)**
- [ ] B. CrudRepository
- [ ] C. UserRepository
- [ ] D. UserService

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q279, the correct answer is "JpaRepository". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q280. Which configuration file is used for Spring XML configuration?

- [ ] A. web.xml
- [ ] B. application.xml
- **[x] C. spring-context.xml (Correct Answer)**
- [ ] D. config.xml

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Medium`

**Explanation:** For Q280, the correct answer is "spring-context.xml". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q281. Which is the recommended approach for configuring beans in modern Spring applications? XML-based configuration Java-based configuration

- **[x] A. Annotation-based configuration (Correct Answer)**
- [ ] B. Property-based configuration
- [ ] C. <dependency>
- [ ] D. <groupId>org.springframework.boot</groupId>

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Easy`

**Explanation:** For Q281, the correct answer is "Annotation-based configuration". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q282. Which Spring Boot starter would you add to your pom.xml to include support for JSON processing with Jackson?

- **[x] A. Correct (Correct Answer)**
- [ ] B. Incorrect, should use spring-boot-starter-web
- [ ] C. Incorrect, should use spring-boot-starter-data-jpa
- [ ] D. Incorrect, should use spring-boot-starter

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Hard`

**Explanation:** For Q282, the correct answer is "Correct". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q283. Which of the following code snippets demonstrates handling an HTTP POST request for creating a new record in a database using Spring Boot's JPA repository? @PostMapping("/users") public User createUser(@Valid @RequestBody User user) { return userRepository.save(user); } @PostMapping("/users") public User createUser(User user) { return userRepository.save(user); } @PostMapping("/users") public void createUser(@Valid @RequestBody User user) { userRepository(user); }

- [ ] A. @PostMapping("/users")
- [ ] B. public void createUser(User user) {
- **[x] C. userRepository.save(user); (Correct Answer)**
- [ ] D. }

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q283, the correct answer is "userRepository.save(user);". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q284. Which component of the Spring framework is responsible for integrating Spring applications with relational databases?

- [ ] A. Spring AOP
- [ ] B. Spring MVC
- [ ] C. Spring Data
- **[x] D. Spring ORM (Correct Answer)**

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q284, the correct answer is "Spring ORM". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q285. How do you specify the primary bean among multiple beans of the same type? groupId org.springframework.boot /groupId <artifactId>spring-boot-starter-json</artifactId> <version>2.5.4</version> </dependency> 2 3 4 5 6

- [ ] A. @Autowired
- **[x] B. @Primary (Correct Answer)**
- [ ] C. @Qualifier
- [ ] D. @Bean

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q285, the correct answer is "@Primary". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q286. Tom is tasked with maintaining the input validation process for user registration. Which annotation can he use to ensure that a username is between 3 and 20 characters?

- **[x] A. @Size(min=3, max=20) (Correct Answer)**
- [ ] B. @Length
- [ ] C. @NotNull
- [ ] D. @Range

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q286, the correct answer is "@Size(min=3, max=20)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q287. David is working on a project and wants to see the changes he has made compared to the last commit. What command should he execute?

- **[x] A. git diff (Correct Answer)**
- [ ] B. git status
- [ ] C. git log
- [ ] D. git commit

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q287, the correct answer is "git diff". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q288. Lisa wants to track the changes in her code effectively by storing different versions of her project files. What functionality of Git should she use?

- [ ] A. Git can only store the final version of files.
- **[x] B. Git allows version control of all project files, including code. (Correct Answer)**
- [ ] C. Git is not suitable for binary files, only text files.
- [ ] D. Git provides no functionality for version control.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q288, the correct answer is "Git allows version control of all project files, including code.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q289. Which of the following is NOT a core concept of Spring Framework?

- [ ] A. Dependency Injection
- [ ] B. Aspect-Oriented Programming
- [ ] C. Inversion of Control
- **[x] D. Object-Relational Mapping (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q289, the correct answer is "Object-Relational Mapping". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q290. Which HTTP method is used to update an existing book resource in the BookController class?

- [ ] A. GET
- [ ] B. POST
- **[x] C. PUT (Correct Answer)**
- [ ] D. DELETE

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Medium`

**Explanation:** For Q290, the correct answer is "PUT". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q291. A web application is being developed to manage customer orders. The team needs to ensure that when a new order is created, its information is accurately stored without duplication of records. What HTTP method should the team use to create the order when making requests to the REST API?

- **[x] A. POST is used to create new resources. (Correct Answer)**
- [ ] B. GET is used to create new resources.
- [ ] C. DELETE is used to remove existing resources.
- [ ] D. PUT is used to update an existing resource.

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Hard`

**Explanation:** For Q291, the correct answer is "POST is used to create new resources.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q292. Which Spring component is used for building web applications and RESTful APIs? Spring AOP @RestController @RequestMapping("/books") public class BookController { @GetMapping("/{id}") public ResponseEntity<Book> getBookById(@PathVariable Long id) { } @PostMapping public ResponseEntity<Book> createBook(@RequestBody Book book) { } @PutMapping("/{id}") public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book book) { } @DeleteMapping("/{id}") public ResponseEntity<Void> deleteBook(@PathVariable Long id) { }

- [ ] A. }
- **[x] B. Spring MVC (Correct Answer)**
- [ ] C. Spring IoC
- [ ] D. Spring Security

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q292, the correct answer is "Spring MVC". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q293. Which of the following annotations is used in JPA to specify a primary key column in an entity?

- [ ] A. @PrimaryKey
- **[x] B. @Id (Correct Answer)**
- [ ] C. @Column
- [ ] D. @GeneratedValue

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q293, the correct answer is "@Id". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q294. When using @Autowired annotation for dependency injection, which of the following options is used to resolve ambiguity when multiple beans of the same type are available?

- **[x] A. @Qualifier (Correct Answer)**
- [ ] B. @Primary
- [ ] C. @Value
- [ ] D. @Resource

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Hard`

**Explanation:** For Q294, the correct answer is "@Qualifier". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q295. In Spring Boot, which annotation is commonly used to mark a class as a JPA entity?

- **[x] A. @Entity (Correct Answer)**
- [ ] B. @Table
- [ ] C. @Persistent
- [ ] D. @Data

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q295, the correct answer is "@Entity". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q296. What is the base URL for accessing the book-related endpoints in this Spring Boot REST API? @RestController @RequestMapping("/api/books") public class BookController { @Autowired private BookService bookService; @GetMapping("/{id}")

```java
/api/books
/books
/api
/api/book
```

- **[x] A. public ResponseEntity<Book> getBookById(@PathVariable("id") Long id) { (Correct Answer)**
- [ ] B. Book book = bookService.getBookById(id);
- [ ] C. if (book != null) {
- [ ] D. return ResponseEntity.ok(book);

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q296, the correct answer is "public ResponseEntity<Book> getBookById(@PathVariable("id") Long id) {". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q297. You are working on a Java project and need to manage dependencies automatically. Which tool can help you manage your project’s build process and dependencies?

- [ ] A. Gradle
- [ ] B. Ant
- **[x] C. Maven (Correct Answer)**
- [ ] D. JUnit

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q297, the correct answer is "Maven". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q298. Jessica has just finished working on a feature and wants to check which changes are staged for the next commit. Which command should she use?

- [ ] A. git diff
- **[x] B. git status (Correct Answer)**
- [ ] C. git log
- [ ] D. git fetch

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q298, the correct answer is "git status". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q299. In a customer feedback system, you need to expose a REST API endpoint to accept feedback. Which annotation in Spring Boot is used to handle HTTP POST requests? @GetMapping @PostMapping } else { return ResponseEntity.notFound().build(); } } @PostMapping public ResponseEntity<Book> createBook(@RequestBody Book book) { Book createdBook = bookService.createBook(book); return ResponseEntity.status(HttpStatus.CREATED).body(createdBook); } } 13 14 15 16 17 18 19 20 21

- **[x] A. 22 (Correct Answer)**
- [ ] B. 23
- [ ] C. @PutMapping
- [ ] D. @RequestBody

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q299, the correct answer is "22". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q300. Which of the following methods is commonly used in Spring Boot JPA repositories to retrieve all entities of a specific type?

- **[x] A. findAll() (Correct Answer)**
- [ ] B. findById()
- [ ] C. save()
- [ ] D. delete()

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q300, the correct answer is "findAll()". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q301. In a hotel booking system, which HTTP method is used when a user submits a form to book a room?

- [ ] A. GET
- **[x] B. POST (Correct Answer)**
- [ ] C. PUT
- [ ] D. DELETE

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q301, the correct answer is "POST". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q302. To test a new feature, Daniel creates a branch called `feature-x`. What command does he use to switch to this newly created branch?

- [ ] A. git move feature-x
- **[x] B. git checkout feature-x (Correct Answer)**
- [ ] C. git create feature-x
- [ ] D. git go feature-x

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q302, the correct answer is "git checkout feature-x". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q303. Emma is implementing a service for retrieving user settings stored as key-value pairs. Which structure in Spring would best fit her use case?

- [ ] A. List
- [ ] B. Set
- [ ] C. Queue
- **[x] D. Map (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q303, the correct answer is "Map". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q304. You want to implement a method in a Spring Boot application to handle a POST request that creates a new product. What is the correct code snippet? @PutMapping("/api/products") public ResponseEntity<Product> createProduct(@RequestBody Product product) { ... } @PostMapping("/api/products") public void createProduct(@RequestBody Product product) { ... } @PostMapping("/api/products") public ResponseEntity<Product>

- [ ] A. createProduct(@RequestBody Product product) { ... }
- [ ] B. @RequestMapping(value="/api/products", method=RequestMethod.POST)
- **[x] C. public ResponseEntity<Product> createProduct(@RequestBody Product (Correct Answer)**
- [ ] D. product) { ... }

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q304, the correct answer is "public ResponseEntity<Product> createProduct(@RequestBody Product". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q305. Which annotation is used to mark a class as a Spring bean in annotation-based configuration?

- [ ] A. @Service
- [ ] B. @Bean
- **[x] C. @Component (Correct Answer)**
- [ ] D. @Autowired

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q305, the correct answer is "@Component". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q306. How is the user ID passed to the updateUser method? @PostMapping("/api/products") public ResponseEntity<Product> createProduct(@RequestBody Product product) { Product createdProduct = productService.save(product); return new ResponseEntity<>(createdProduct, HttpStatus.CREATED); } @GetMapping("/{id}") public ResponseEntity<User> getUserById(@PathVariable Long id) { } @PostMapping("/") public ResponseEntity<User> createUser(@RequestBody User user) { } @PutMapping("/{id}") public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) { } @DeleteMapping("/{id}") public ResponseEntity<Void> deleteUser(@PathVariable Long id) { } } 1 2 3 4 5

```java
@RestController
@RequestMapping("/users")
public class UserController {
```

- [ ] A. As a query parameter
- [ ] B. As a request body
- **[x] C. As a path variable (Correct Answer)**
- [ ] D. As a request header

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q306, the correct answer is "As a path variable". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q307. What is a servlet in Java?

- [ ] A. A client-side scripting language
- **[x] B. A server-side program that extends the functionality of a web server (Correct Answer)**
- [ ] C. A markup language used for web page structuring
- [ ] D. A database management system

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q307, the correct answer is "A server-side program that extends the functionality of a web server". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q308. In Spring Boot, how do you customize the JSON serialization behaviour globally?

- **[x] A. By configuring Jackson2ObjectMapperBuilder bean (Correct Answer)**
- [ ] B. By setting properties in application.properties
- [ ] C. By using @JsonSerialize on classes
- [ ] D. By creating a custom JSON serializer class

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Medium`

**Explanation:** For Q308, the correct answer is "By configuring Jackson2ObjectMapperBuilder bean". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q309. Which of the following statements is true about constructor injection in Spring? Constructor injection is not supported in Spring.

- [ ] A. Constructor injection can only be used for primitive types.
- **[x] B. Constructor injection is preferred over setter injection for mandatory (Correct Answer)**
- [ ] C. dependencies.
- [ ] D. Constructor injection can only be used with XML-based configuration.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q309, the correct answer is "Constructor injection is preferred over setter injection for mandatory". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q310. What is the output of the following code snippet that uses Spring Boot's @Autowired annotation to inject a bean into another bean?

```java
The code does not compile because MyOtherBean is not annotated with
@Component.
The code does not compile because the constructor of MyBean is not
public.
The code runs without errors and successfully injects the MyOtherBean
bean into the MyBean bean.
Complier error.
```

- **[x] A. @Component (Correct Answer)**
- [ ] B. public class MyBean {
- [ ] C. private MyOtherBean otherBean;
- [ ] D. @Autowired

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q310, the correct answer is "@Component". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q311. Which HTTP response code indicates that the requested resource is temporarily unavailable, but may be available in the future?

- [ ] A. 200
- [ ] B. 301
- **[x] C. 503 (Correct Answer)**
- [ ] D. 403

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q311, the correct answer is "503". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q312. Maven is built on which programming language?

- **[x] A. Java (Correct Answer)**
- [ ] B. Python
- [ ] C. C++
- [ ] D. Ruby

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q312, the correct answer is "Java". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q313. In a multi-module Maven project for an e-commerce system, you want to ensure all modules are built in the correct order. Which section of the pom.xml helps define the dependencies between modules? <dependencies> <build> @Autowired public MyBean(MyOtherBean otherBean) { this.otherBean = otherBean; } // bean logic } @Component public class MyOtherBean { // other bean logic } 5 6 7 8 9 10 11 12 13

- [ ] A. 14
- [ ] B. 15
- **[x] C. <modules> (Correct Answer)**
- [ ] D. <properties>

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Easy`

**Explanation:** For Q313, the correct answer is "<modules>". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q314. When merging his branch into the main branch, Omar sees a message indicating a conflict. What does this mean?

- [ ] A. His branch will be deleted automatically.
- **[x] B. There is conflicting code between the two branches that needs resolution. (Correct Answer)**
- [ ] C. The merge will occur without any issues.
- [ ] D. Git will send a notification to the team about the conflict.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q314, the correct answer is "There is conflicting code between the two branches that needs resolution.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q315. Jacob's application needs to validate that a user must have at least one role. Which annotation should he use to enforce this rule in his Spring Boot application?

- **[x] A. @Size(min=1) (Correct Answer)**
- [ ] B. @Max
- [ ] C. @NotEmpty
- [ ] D. @Required

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q315, the correct answer is "@Size(min=1)". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q316. In a cake shop application, you want to inject a service class into your controller. What is the recommended annotation to define a Spring service class?

- **[x] A. @Service (Correct Answer)**
- [ ] B. @Component
- [ ] C. @Autowired
- [ ] D. @Bean

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Medium`

**Explanation:** For Q316, the correct answer is "@Service". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q317. A user requests a specific page from your travel website. Which method in a servlet handles this GET request?

- [ ] A. doPost()
- **[x] B. doGet() (Correct Answer)**
- [ ] C. doService()
- [ ] D. doDispatch()

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q317, the correct answer is "doGet()". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q318. What will be the URL endpoint to create a new book using the below controller?

- **[x] A. POST /api/books (Correct Answer)**
- [ ] B. GET /api/books
- [ ] C. PUT /api/books
- [ ] D. DELETE /api/books

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Hard`

**Explanation:** For Q318, the correct answer is "POST /api/books". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q319. Charlie is setting up Git for his development environment. What is the purpose of using SHA1 (Secure Hash Function) in Git?

- [ ] A. To encrypt files
- [ ] B. To track changes in files
- **[x] C. To name and identify objects (Correct Answer)**
- [ ] D. To manage branching and merging

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q319, the correct answer is "To name and identify objects". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q320. In JPA, what is the purpose of the EntityManager interface? To define persistence operations and manage entity lifecycle. To execute SQL queries and interact with the database. To provide an interface for configuring the JPA implementation. To manage transactions and ensure data integrity. @RestController @RequestMapping("/api/books") public class BookController { @GetMapping public List<Book> getAllBooks() { } @PostMapping public ResponseEntity<Book> createBook(@RequestBody Book book) { } @GetMapping("/{id}") public ResponseEntity<Book> getBookById(@PathVariable("id") Long id) { } @PutMapping("/{id}") public ResponseEntity<Book> updateBook(@PathVariable("id") Long id, @RequestBody Book book) { }

- [ ] A. @DeleteMapping("/{id}")
- [ ] B. public ResponseEntity<Void> deleteBook(@PathVariable("id") Long id) {
- **[x] C. } (Correct Answer)**
- [ ] D. }

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q320, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q321. What is the purpose of the JpaRepository interface in Spring Boot JPA?

- **[x] A. To define basic CRUD (Create, Read, Update, Delete) operations for an entity. (Correct Answer)**
- [ ] B. To execute native SQL queries and interact with the database.
- [ ] C. To define custom queries using JPQL (Java Persistence Query Language).
- [ ] D. To manage transactions and ensure data integrity.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q321, the correct answer is "To define basic CRUD (Create, Read, Update, Delete) operations for an entity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q322. Sarah’s application throws an `IllegalArgumentException` when she passes a null value to a method expecting a user ID. Which annotation can she use to help prevent this in future requests?

- [ ] A. @NotBlank
- [ ] B. @Valid
- [ ] C. @ValidRequest
- **[x] D. @NotNull (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q322, the correct answer is "@NotNull". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q323. What is the purpose of the @Autowired annotation in Spring?

- **[x] A. To indicate a dependency that should be automatically injected (Correct Answer)**
- [ ] B. To define a new bean in the Spring application context
- [ ] C. To enable Spring MVC support
- [ ] D. To handle exceptions thrown by Spring beans

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q323, the correct answer is "To indicate a dependency that should be automatically injected". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q324. You want to customize the build lifecycle of your project to run tests before packaging the application. In which section of the pom.xml would you configure the order of plugin executions?

- [ ] A. <dependencies>
- [ ] B. <properties>
- **[x] C. <build> (Correct Answer)**
- [ ] D. <profiles>

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Hard`

**Explanation:** For Q324, the correct answer is "<build>". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q325. Question 325

```java
/api/users
/api/users/{id}
/api/users/123
/api/users?id=123
```

- **[x] A. What will be the URL pattern to access the getUserById endpoint for a user with ID 123? (Correct Answer)**
- [ ] B. @RestController
- [ ] C. @RequestMapping("/api")
- [ ] D. public class UserController {

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q325, the correct answer is "What will be the URL pattern to access the getUserById endpoint for a user with ID 123?". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q326. You need to handle an HTTP request and return a JSON response from your Spring Boot application. Which code snippet correctly implements this? @GetMapping("/api/user/{id}") public ResponseEntity<User> getUserById(@PathVariable Long id) { ... } @PostMapping("/api/user/{id}") public ResponseEntity<User> getUserById(@PathVariable Long id) { ... }

- [ ] A. @RequestMapping("/api/user/{id}") public ResponseEntity<User>
- **[x] B. getUserById(@PathVariable Long id) { ... } (Correct Answer)**
- [ ] C. @PutMapping("/api/user/{id}") public ResponseEntity<User>
- [ ] D. getUserById(@PathVariable Long id) { ... }

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q326, the correct answer is "getUserById(@PathVariable Long id) { ... }". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q327. Which HTTP method should be used to retrieve a specific book by its ID in this REST API? @GetMapping("/users") public List<User> getUsers() { } @GetMapping("/users/{id}") public ResponseEntity<User> getUserById(@PathVariable Long id) { } } 5 6 7 8 9 10 11 12 13 14 @GetMapping("/api/user/{id}") public ResponseEntity<User> getUserById(@PathVariable Long id) { User user = userService.findById(id); return ResponseEntity.ok(user); } @GetMapping("/{id}") public ResponseEntity<Book> getBookById(@PathVariable("id") Long id) { Book book = bookService.getBookById(id); if (book != null) { return ResponseEntity.ok(book); } else { return ResponseEntity.notFound().build(); } } @PostMapping 1

```java
@RestController
@RequestMapping("/api/books")
public class BookController {
@Autowired
private BookService bookService;
GET
POST
DELETE
PUT
```

- **[x] A. 2 (Correct Answer)**
- [ ] B. 3
- [ ] C. 4
- [ ] D. 5

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q327, the correct answer is "2". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q328. John is developing a Spring application where he needs to manage the lifecycle of his beans. He is currently using the default scope for most of his beans. However, he realizes he doesn't fully understand what the default scope entails. What is the default scope of a Spring bean in John's application?

- [ ] A. Prototype
- **[x] B. Singleton (Correct Answer)**
- [ ] C. Request
- [ ] D. Session

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q328, the correct answer is "Singleton". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q329. You need to automatically inject dependencies in your Spring application. Which annotation should you use in your controller?

- [ ] A. @Inject
- **[x] B. @Autowired (Correct Answer)**
- [ ] C. @Resource
- [ ] D. @Qualifier

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Easy`

**Explanation:** For Q329, the correct answer is "@Autowired". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q330. Mark receives an `EntityNotFoundException` while trying to fetch user data. What does this exception indicate in his Spring application? The database is currently down. The requested entity does not exist in the database. There are connectivity issues with the database. The query syntax is incorrect. @ ost app g public ResponseEntity<Book> createBook(@RequestBody Book book) { Book createdBook = bookService.createBook(book); return ResponseEntity.status(HttpStatus.CREATED).body(createdBook); } } 8 19

- **[x] A. 20 (Correct Answer)**
- [ ] B. 21
- [ ] C. 22
- [ ] D. 23

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q330, the correct answer is "20". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q331. You are working on a restaurant website and want to include a form where users can make reservations. How would you ensure the form data is sent to the server using POST method?

- [ ] A. <form method="get">
- [ ] B. <form action="post">
- **[x] C. <form method="post"> (Correct Answer)**
- [ ] D. <form type="post">

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q331, the correct answer is "<form method="post">". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q332. Which HTTP status code indicates a successful request?

- **[x] A. 200 (Correct Answer)**
- [ ] B. 404
- [ ] C. 500
- [ ] D. 302

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q332, the correct answer is "200". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q333. Which HTTP method is typically used to retrieve data from a server using a servlet?

- **[x] A. GET (Correct Answer)**
- [ ] B. POST
- [ ] C. PUT
- [ ] D. DELETE

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Hard`

**Explanation:** For Q333, the correct answer is "GET". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q334. What is the purpose of the @Qualifier annotation in Spring?

- [ ] A. To identify primary beans
- [ ] B. To specify a bean name
- [ ] C. To define bean scopes
- **[x] D. To resolve bean ambiguities (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q334, the correct answer is "To resolve bean ambiguities". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q335. What is the role of the DispatcherServlet in a Spring MVC application?

- **[x] A. It handles all HTTP requests and responses. (Correct Answer)**
- [ ] B. It manages database connections.
- [ ] C. It defines mappings between URL paths and controllers.
- [ ] D. It processes asynchronous tasks.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q335, the correct answer is "It handles all HTTP requests and responses.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q336. What will happen if the findById method of the UserRepository in the getUserById method returns an empty Optional?

- [ ] A. It will return null as the result.
- **[x] B. It will throw an exception of type UserNotFoundException. (Correct Answer)**
- [ ] C. It will return an empty User object.
- [ ] D. It will return a default User object.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q336, the correct answer is "It will throw an exception of type UserNotFoundException.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q337. What is the expected HTTP method and URI to retrieve a list of users from this API? GET /api/users POST /api/users GET /users POST /users @Service public class UserService { @Autowired private UserRepository userRepository; public User getUserById(String userId) { return userRepository.findById(userId) .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId)); } public User createUser(User user) { // Validation and save logic return userRepository.save(user); } } @GetMapping("/users") public List<User> getUsers() { List<User> users = new ArrayList<>(); return users; } @PostMapping("/users") public User createUser(@RequestBody User user) { return user; } } 1 2 3 4 5 6 7 8 9 10 11

```java
@RestController
@RequestMapping("/api")
public class UserController {
```

- **[x] A. 12 (Correct Answer)**
- [ ] B. 13
- [ ] C. 14
- [ ] D. 15

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q337, the correct answer is "12". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q338. What is the purpose of the EntityManager interface in Spring Boot JPA?

- **[x] A. To define persistence operations and manage entity lifecycle. (Correct Answer)**
- [ ] B. To execute SQL queries and interact with the database.
- [ ] C. To manage transactions and ensure data integrity.
- [ ] D. To provide an interface for configuring the JPA implementation.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q338, the correct answer is "To define persistence operations and manage entity lifecycle.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q339. Which of the following is NOT a scope in Spring?

- [ ] A. Singleton
- [ ] B. Prototype
- [ ] C. Request
- **[x] D. Static (Correct Answer)**

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q339, the correct answer is "Static". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q340. John wants to extract a list of user names from a database and maintain their order. What collection would be most appropriate for this task in Spring Boot?

- [ ] A. Set
- **[x] B. List (Correct Answer)**
- [ ] C. Queue
- [ ] D. Map

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q340, the correct answer is "List". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q341. What is the output of the following code snippet that uses Spring Boot's @Transactional annotation to wrap a method call in a transaction? @Service public class MyService { @Transactional public void updateSomething() { // update something in the database } } @SpringBootApplication public class MyApp { public static void main(String[] args) { ConfigurableApplicationContext context = SpringApplication.run(MyApp.class, args);

```java
The code does not compile because the @Transactional annotation is not
used correctly.
The code runs without errors but does not wrap the updateSomething()
method in a transaction.
The code runs without errors and wraps the updateSomething() method in a
transaction.
Compiler error.
```

- [ ] A. MyService myService = context.getBean(MyService.class);
- [ ] B. myService.updateSomething();
- **[x] C. } (Correct Answer)**
- [ ] D. }

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q341, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q342. Which annotation is commonly used in the Spring Framework to mark a class as a Spring bean?

- [ ] A. @Component
- [ ] B. @Service
- [ ] C. @Repository
- **[x] D. All of the above (Correct Answer)**

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Hard`

**Explanation:** For Q342, the correct answer is "All of the above". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q343. A developer is creating a RESTful service in Spring Boot that requires the use of JPA repositories for CRUD operations. The service needs to simplify database interactions without writing repetitive code for each operation. What is the key advantage of using Spring Data JPA repositories in this context? They eliminate the need for writing boilerplate code for common data access operations.

- [ ] A. They require developers to write complex SQL queries for each CRUD
- **[x] B. operation. (Correct Answer)**
- [ ] C. They are only useful for interactions with NoSQL databases.
- [ ] D. They mandate the use of specific data sources for persistence.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q343, the correct answer is "operation.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q344. What is the primary benefit of using JPA over Hibernate directly?

- [ ] A. JPA provides better performance and efficiency in database operations.
- **[x] B. JPA provides a standard API, allowing for vendor-independent code. (Correct Answer)**
- [ ] C. JPA offers more advanced features and functionalities than Hibernate.
- [ ] D. JPA simplifies the mapping process and reduces boilerplate code.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q344, the correct answer is "JPA provides a standard API, allowing for vendor-independent code.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q345. Which of the following statements is true about Hibernate and JPA?

- **[x] A. Hibernate is a specific implementation of JPA. (Correct Answer)**
- [ ] B. JPA is a specific implementation of Hibernate.
- [ ] C. Hibernate and JPA are unrelated and serve different purposes.
- [ ] D. Hibernate and JPA can be used interchangeably without any differences.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q345, the correct answer is "Hibernate is a specific implementation of JPA.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q346. While debugging an application, Sophia discovers a `DataIntegrityViolationException`. What is the common reason for this error in a Spring Boot application?

- [ ] A. The database connection string is incorrect.
- **[x] B. Data being inserted violates constraints set in the database schema. (Correct Answer)**
- [ ] C. There is a syntax error in the query.
- [ ] D. The method is called without the required inputs.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q346, the correct answer is "Data being inserted violates constraints set in the database schema.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q347. What will be the HTTP method and endpoint for creating a new user in the UserController?

- [ ] A. GET /users/{id}
- **[x] B. POST /users (Correct Answer)**
- [ ] C. PUT /users/{id}
- [ ] D. DELETE /users/{id}

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Easy`

**Explanation:** For Q347, the correct answer is "POST /users". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q348. You want to create a new Spring Boot application with JPA support. Which of the following snippets correctly configures the DataSource? @RestController public class UserController { @Autowired private UserService userService; @GetMapping("/users/{id}") public ResponseEntity<User> getUserById(@PathVariable("id") String userId) { User user = userService.getUserById(userId); return ResponseEntity.ok(user); } @PostMapping("/users") public ResponseEntity<User> createUser(@RequestBody User user) {

```java
@Bean
public DataSource dataSource() {
return DataSourceBuilder.create()
.driverClassName("com.mysql.cj.jdbc.Driver")
.url("jdbc:mysql://localhost:3306/mydb")
.username("user")
.password("password")
()
1
2
3
4
5
6
7
@Configuration public DataSource dataSource() { ... }
@Bean public DataSource dataSource() { ... }
@Autowired public DataSource dataSource() { ... }
@Service public DataSource dataSource() { ... }
```

- [ ] A. User createdUser = userService.createUser(user);
- [ ] B. return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
- **[x] C. } (Correct Answer)**
- [ ] D. }

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q348, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q349. Which Spring component provides authentication and authorization capabilities for securing Spring-based applications?

- [ ] A. Spring AOP
- [ ] B. Spring MVC
- [ ] C. Spring IoC
- **[x] D. Spring Security (Correct Answer)**

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q349, the correct answer is "Spring Security". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q350. Which of the following statements about Spring's IoC container is true? The IoC container creates and manages singleton beans only. The IoC container can create and manage beans with different scopes,

- **[x] A. including singleton and prototype (Correct Answer)**
- [ ] B. The IoC container reuses prototype bean instances after the first creation
- [ ] C. The IoC container is responsible for injecting dependencies into beans using
- [ ] D. the @Inject annotation

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q350, the correct answer is "including singleton and prototype". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q351. What will be the HTTP method used to access the createUser endpoint? GET POST .build(); } 8 9 @RestController @RequestMapping("/api") public class UserController { @GetMapping("/users") public List<User> getUsers() { }

```java
PUT
DELETE
```

- **[x] A. @PostMapping("/users") (Correct Answer)**
- [ ] B. public ResponseEntity<String> createUser(@RequestBody User user) {
- [ ] C. }
- [ ] D. }

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Hard`

**Explanation:** For Q351, the correct answer is "@PostMapping("/users")". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q352. Which of the following modules of the Spring Framework is responsible for dependency injection and inversion of control (IoC)?

- [ ] A. Spring MVC
- **[x] B. Spring Core (Correct Answer)**
- [ ] C. Spring Data
- [ ] D. Spring Boot

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q352, the correct answer is "Spring Core". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q353. What is the purpose of the Spring Data module?

- [ ] A. To handle transactions
- [ ] B. To provide support for JDBC
- **[x] C. To simplify database access (Correct Answer)**
- [ ] D. To handle messaging

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q353, the correct answer is "To simplify database access". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q354. In Spring Boot JPA, which annotation is used to define a primary key field in an entity class?

- [ ] A. @PrimaryKey
- **[x] B. @Id (Correct Answer)**
- [ ] C. @Column
- [ ] D. @GeneratedValue

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q354, the correct answer is "@Id". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q355. Alice wanted to use IoC containers to assemble the dependencies between the objects. Which of the following are correct IoC containers that she can use in Spring?

- [ ] A. BeanFactory, ApplicationContext, IocContextFactory
- [ ] B. BeanFactory, BeanContext, IocContextFactory
- **[x] C. BeanFactory, ApplicationContext (Correct Answer)**
- [ ] D. BeanFactory, ApplicationContext, BeanContext

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q355, the correct answer is "BeanFactory, ApplicationContext". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q356. What does the HTTP response code 404 indicate?

- [ ] A. Unauthorized access
- [ ] B. Successful request with no content
- **[x] C. Resource not found (Correct Answer)**
- [ ] D. Internal server error

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q356, the correct answer is "Resource not found". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q357. You are using Spring Data JPA and want to create a custom query to find users by their email. What is the correct repository method? List<User> findByEmail(String email); @Query("SELECT u FROM User u WHERE u.email = ") List<User> findByEmail(@Param("email") String email);

- [ ] A. @Query("SELECT * FROM User WHERE email = ?1") List<User>
- **[x] B. findByEmail(String email); (Correct Answer)**
- [ ] C. @Query("SELECT u FROM User u WHERE u.email = ?1") User
- [ ] D. findByEmail(String email);

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q357, the correct answer is "findByEmail(String email);". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q358. A Spring Data JPA repository is designed to fetch a paginated list of `Product` objects from the database. The developer has identified the need to sort these products by price in descending order while paginating the results. How should the developer implement this? By using the Pageable interface with Sort.Order(price, Sort.Direction.DESC) in the repository method.

- **[x] A. By manually implementing pagination and sorting in the service layer (Correct Answer)**
- [ ] B. without leveraging JPA features.
- [ ] C. By adding sorting parameters directly in the SQL query string.
- [ ] D. By creating a custom pagination service that handles sorting independently.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q358, the correct answer is "By manually implementing pagination and sorting in the service layer". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q359. What will be the HTTP response status code after successfully creating a new product?

- [ ] A. 200
- **[x] B. 201 (Correct Answer)**
- [ ] C. 204
- [ ] D. 400

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q359, the correct answer is "201". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q360. In a Spring Boot application, a developer is trying to establish a one-to-many relationship between a `Customer` entity and an associated `Order` entity. Which of the following configurations correctly implements this relationship? Use @ManyToOne annotation on the Order entity and @OneToMany on the Customer entity.

- [ ] A. Apply @OneToOne annotation on both entities.
- [ ] B. Use @OneToMany annotation on the Order entity and @ManyToOne on the
- **[x] C. Customer entity. (Correct Answer)**
- [ ] D. Apply @ManyToOne on Customer and @OneToOne on Order entity.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q360, the correct answer is "Customer entity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q361. You are building a microservice that fetches data from a database. How do you inject the service that interacts with the database into a Spring Boot controller?

- [ ] A. @Service
- [ ] B. @Repository
- **[x] C. @Autowired (Correct Answer)**
- [ ] D. @Component

> **Category**: `Spring MVC & REST API` | **Difficulty**: `Easy`

**Explanation:** For Q361, the correct answer is "@Autowired". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q362. What is the purpose of the @RequestBody annotation in a Spring Boot controller method? It represents the request parameters passed in the URL. @RestController @RequestMapping("/api") public class ProductController { @PostMapping("/products") public ResponseEntity<Void> createProduct(@RequestBody Product product) {

```java
It defines the URL mapping for the controller method.
It specifies the HTTP method to be used for the request.
It indicates that the method handles a request with a JSON payload.
```

- [ ] A. // Save product to the database
- [ ] B. return ResponseEntity.created(URI.create("/api/products/" + product.getId())).build();
- **[x] C. } (Correct Answer)**
- [ ] D. }

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q362, the correct answer is "}". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q363. Which protocol is commonly used for communication between a web client and a web server?

- **[x] A. HTTP (Correct Answer)**
- [ ] B. FTP
- [ ] C. SMTP
- [ ] D. DHCP

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q363, the correct answer is "HTTP". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q364. What is the purpose of the ApplicationContext interface in Spring's IoC container? It represents the configuration metadata that the container uses to create and manage beans. It serves as the main interface for accessing and interacting with the Spring

- **[x] A. IoC container. (Correct Answer)**
- [ ] B. It provides a mechanism for performing aspect-oriented programming
- [ ] C. (AOP) in Spring applications.
- [ ] D. It defines a set of standard annotations for dependency injection in Spring.

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q364, the correct answer is "IoC container.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q365. Grace's API returns a list of products each time a user accesses the products endpoint. What Spring annotation should she use to map the HTTP GET request to this method?

- [ ] A. @PutMapping
- [ ] B. @PostMapping
- **[x] C. @GetMapping (Correct Answer)**
- [ ] D. @RequestMapping

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Easy`

**Explanation:** For Q365, the correct answer is "@GetMapping". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q366. Michelle wants to ensure a specific method in her service class runs within a transaction, regardless of how many times it is called. What annotation should she apply?

- [ ] A. @Service
- **[x] B. @Transactional (Correct Answer)**
- [ ] C. @Configuration
- [ ] D. @Autowired

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q366, the correct answer is "@Transactional". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q367. In client-server communications, what action does the client perform to initiate a request?

- [ ] A. The client waits for a response from the server.
- **[x] B. The client sends a request to the server. (Correct Answer)**
- [ ] C. The client updates the server data automatically.
- [ ] D. The client listens for data from other clients.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q367, the correct answer is "The client sends a request to the server.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q368. What are Webservices primarily designed for in the context of networked applications?

- [ ] A. To store large amounts of data efficiently
- **[x] B. To enable interoperable machine-to-machine communication (Correct Answer)**
- [ ] C. To create graphical user interfaces
- [ ] D. To enhance the performance of operating systems

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q368, the correct answer is "To enable interoperable machine-to-machine communication". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q369. Alex is working with XML configuration in a Spring project and needs to add a bean for a `UserService`. Which element must he use in his XML configuration file to define this bean properly?

- [ ] A. element
- **[x] B. <bean> (Correct Answer)**
- [ ] C. class
- [ ] D. component

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Hard`

**Explanation:** For Q369, the correct answer is "<bean>". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q370. Lila wants to set up her Spring application such that it automatically resolves the dependencies for her `PaymentService` based on the types of the injected components rather than the names. Which autowiring mode should she use to achieve this?

- [ ] A. Autowiring by Constructor
- [ ] B. Autowiring by Name
- **[x] C. Autowiring by Type (Correct Answer)**
- [ ] D. No Autowiring

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q370, the correct answer is "Autowiring by Type". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q371. Emily is developing a Spring application where she needs to ensure that her service class requires a repository at construction time. She wants to enforce immutability for the repository reference within the service. Which type of dependency injection should she use?

- [ ] A. Setter Injection
- [ ] B. Field Injection
- [ ] C. Interface Injection
- **[x] D. Constructor Injection (Correct Answer)**

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q371, the correct answer is "Constructor Injection". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q372. A developer is tasked with implementing a service that requires a mandatory database connection at the time of object creation. The developer is considering using Dependency Injection in Spring. Which method of Dependency Injection would be the most appropriate choice to ensure that the database connection is always provided when the service is instantiated? Setter Injection, allowing the database connection to be set post- instantiation. Constructor Injection, ensuring the database connection is passed at the time of object creation.

- **[x] A. Field Injection, where the database connection is automatically set during (Correct Answer)**
- [ ] B. the bean initialization.
- [ ] C. Method Injection, invoking a method to supply the database connection
- [ ] D. after the object is created.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q372, the correct answer is "Field Injection, where the database connection is automatically set during". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q373. Alex is developing a web application and wants to ensure that different components can work together without being tightly coupled. Which feature of the Spring framework should he use to effectively manage dependencies between these components?

- [ ] A. Annotations
- [ ] B. Configuration files
- **[x] C. Dependency Injection (Correct Answer)**
- [ ] D. Direct object instantiation

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q373, the correct answer is "Dependency Injection". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q374. Emma is building a Spring Boot application and wants to minimize the amount of configuration she has to write. Which feature of Spring Boot will help her automatically configure components without needing extensive manual configurations?

- [ ] A. Manual bean definition
- [ ] B. Spring Initializr
- **[x] C. Auto-configuration (Correct Answer)**
- [ ] D. XML configuration

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Medium`

**Explanation:** For Q374, the correct answer is "Auto-configuration". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q375. Linda is trying to send a new book entry to her Spring Boot application using Postman. What steps must she follow to correctly perform a POST request? Choose the "GET" method, set the URL, and include the book's details in the URL parameters. Select the "POST" method, ensure the URL points to the correct endpoint, and include the book's JSON representation in the body.

- **[x] A. Use the "PUT" method, provide the URL, and add the book's details in the (Correct Answer)**
- [ ] B. headers.
- [ ] C. Select "DELETE" method, provide the URL, and send the book's details as a
- [ ] D. query string.

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Hard`

**Explanation:** For Q375, the correct answer is "Use the "PUT" method, provide the URL, and add the book's details in the". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q376. John is developing a RESTful API for a bookstore. He wants to allow users to retrieve the list of all available books. Which HTTP method should he use in his Spring Boot application to implement this functionality?

- [ ] A. POST
- [ ] B. DELETE
- [ ] C. PUT
- **[x] D. GET (Correct Answer)**

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q376, the correct answer is "GET". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q377. Moving forward with her API development, Mia wants to return JSON data after processing a GET request in Spring Boot. Which annotation should she use to ensure that her response is sent as JSON?

- **[x] A. @ResponseBody (Correct Answer)**
- [ ] B. @RequestMapping
- [ ] C. @Primary
- [ ] D. @GetMapping

> **Category**: `Web Services & Data Formats` | **Difficulty**: `Easy`

**Explanation:** For Q377, the correct answer is "@ResponseBody". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q378. Tom is developing a Spring Boot REST API that processes user login requests. When a user successfully logs in, which HTTP response code should Tom return to indicate that the login request was successful?

- [ ] A. 404 Not Found
- **[x] B. 200 OK (Correct Answer)**
- [ ] C. 400 Bad Request
- [ ] D. 500 Internal Server Error

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q378, the correct answer is "200 OK". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q379. During testing, David encounters a scenario where his Spring Boot REST API throws an exception due to a failure in the database connection. Which HTTP response code would be most appropriate for David to return in this situation to indicate an internal server error?

- [ ] A. 401 Unauthorized
- [ ] B. 200 OK
- [ ] C. 404 Not Found
- **[x] D. 500 Internal Server Error (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q379, the correct answer is "500 Internal Server Error". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q380. Lisa is building an e-commerce application. One of the endpoints is for retrieving product details. If a request is made for a product that does not exist in the database, which HTTP response code should she return to inform the user that the requested product was not found?

- [ ] A. 200 OK
- [ ] B. 403 Forbidden
- [ ] C. 500 Internal Server Error
- **[x] D. 404 Not Found (Correct Answer)**

> **Category**: `Servlets & Web Containers` | **Difficulty**: `Medium`

**Explanation:** For Q380, the correct answer is "404 Not Found". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q381. A developer is working on a Spring Boot application and needs to ensure that the service layer effectively interacts with the repository layer while maintaining the business logic. If they introduce a feature that retrieves users by their unique ID but find that they sometimes receive a 404 response, what does this indicate in the context of their REST API? The server is experiencing internal issues preventing it from fulfilling the request.

- **[x] A. The requested user ID does not exist in the database. (Correct Answer)**
- [ ] B. The API call was made without sufficient authentication.
- [ ] C. The server successfully processed the request, but the user data is not
- [ ] D. returned due to an API filter.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q381, the correct answer is "The requested user ID does not exist in the database.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q382. Imagine a scenario where a team is testing a Spring Boot REST API for an e-commerce application. They encounter a situation where the API returns a 500 response after attempting to access a specific product by ID. What could be the most likely reason for this response? The product ID submitted was invalid or out of range.

- **[x] A. The resource was found, but there was an issue with the database (Correct Answer)**
- [ ] B. operation.
- [ ] C. The server has been deployed with incorrect environment variables.
- [ ] D. The request format was incorrect, leading to failure in processing.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q382, the correct answer is "The resource was found, but there was an issue with the database". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q383. David is tasked with creating a custom exception in his Spring Boot service to indicate when a requested resource is not found. Which statement describes how he should define this custom exception? A custom exception must implement the Serializable interface.

- **[x] A. A custom exception class extends the Exception class to define specific (Correct Answer)**
- [ ] B. error conditions.
- [ ] C. A custom exception class is created using an interface.
- [ ] D. A custom exception class must be annotated with @RestController.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q383, the correct answer is "A custom exception class extends the Exception class to define specific". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q384. Emma is developing a Spring Boot application that frequently encounters errors, such as data not being found. She wants to ensure that her application handles exceptions gracefully. What will happen if an exception is thrown and no specific handling is implemented?

- [ ] A. The application crashes without any response.
- [ ] B. The application automatically retries the request.
- **[x] C. Spring Boot provides a default error response to the client. (Correct Answer)**
- [ ] D. The exception is logged but not propagated to the client.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q384, the correct answer is "Spring Boot provides a default error response to the client.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q385. James is working on a banking application where he needs to implement exception handling to deal with cases when users attempt to withdraw more money than they have in their account. He considers creating a custom exception named `InsufficientFundsException`. What should he ideally include in this custom exception class to provide meaningful feedback when the exception is thrown? A constructor that only takes a String message to indicate the reason for the exception. A method that logs the exception details to the database whenever it is thrown.

- **[x] A. Additional fields to store account details and the required amount to make (Correct Answer)**
- [ ] B. the exception context richer.
- [ ] C. An empty constructor so that the exception can be instantiated without any
- [ ] D. data.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q385, the correct answer is "Additional fields to store account details and the required amount to make". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q386. Emma is building a user management system in her Springboot application. She needs to ensure that each user can only be registered once, based on their usernames. What is the most suitable Collection type for storing the usernames?

- [ ] A. ArrayList
- [ ] B. HashMap
- **[x] C. Set (Correct Answer)**
- [ ] D. LinkedList

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q386, the correct answer is "Set". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q387. A developer is working on a library management system where each book has a unique ISBN number and several attributes like title, author, and genre. They need a solution to store and manage these books efficiently, allowing for quick lookup by ISBN. Which Springboot application for CRUD operations using Collections should the developer use to best suit these requirements?

- [ ] A. List of Books
- **[x] B. HashMap with ISBN as the key (Correct Answer)**
- [ ] C. Array of Books
- [ ] D. TreeSet of Books

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q387, the correct answer is "HashMap with ISBN as the key". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q388. John is developing a new application that requires him to manage the relationship between users and the products they purchase. He wants to avoid writing complex SQL joins and code to manually handle these relationships. Which advantage of using ORM over JDBC would best suit John's needs in this scenario? ORM provides automatic mapping of objects to database tables, reducing

- **[x] A. manual coding effort. (Correct Answer)**
- [ ] B. JDBC requires complex SQL queries to map objects manually.
- [ ] C. ORM does not support relationships between objects.
- [ ] D. JDBC automatically maps objects to tables without extra work.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q388, the correct answer is "manual coding effort.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q389. Lisa is maintaining an application that requires her to track and manage transactions with minimal coding overhead. She notices that her team has been writing repetitive code to handle transactions using JDBC. Which feature of ORM would help simplify transaction management for Lisa's team? ORM requires more code to handle transactions than JDBC. Transactions in ORM can only be managed manually without framework

- [ ] A. support.
- **[x] B. ORM simplifies transaction management through built-in methods, reducing (Correct Answer)**
- [ ] C. boilerplate code.
- [ ] D. JDBC automatically handles rollback for all operations without user input.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q389, the correct answer is "ORM simplifies transaction management through built-in methods, reducing". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q390. Michael is tasked with migrating a legacy system that uses JDBC to a modern application stack. One of his key requirements is to reduce the amount of boilerplate code needed for database operations. He considers adopting ORM for this migration. What is the main advantage Michael should highlight when discussing this shift to his team? ORM can require extensive manual configuration compared to JDBC.

- **[x] A. ORM abstracts away SQL complexities, allowing developers to focus on (Correct Answer)**
- [ ] B. business logic.
- [ ] C. ORM lacks support for batch operations, which JDBC handles efficiently.
- [ ] D. ORM's performance is inherently slower due to data abstraction.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q390, the correct answer is "ORM abstracts away SQL complexities, allowing developers to focus on". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q391. Tom is developing a new Java application that requires him to create a class that represents a user in a database. To ensure this class is recognized as an entity by Hibernate, which annotation should he use?

- [ ] A. @Table
- **[x] B. @Entity (Correct Answer)**
- [ ] C. @Column
- [ ] D. @Id

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q391, the correct answer is "@Entity". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q392. Lisa is tasked with creating a new application that requires tracking multiple orders associated with a single customer. Which annotation should she use in her Customer entity class to demonstrate this one-to-many relationship?

- [ ] A. @ManyToOne
- **[x] B. @OneToMany (Correct Answer)**
- [ ] C. @JoinColumn
- [ ] D. @Column

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q392, the correct answer is "@OneToMany". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q393. James is implementing a database schema in his application and needs to specify which attribute serves as the unique identifier for his Product entity. Which annotation will he need to apply to the attribute representing the product ID?

- [ ] A. @GeneratedValue
- **[x] B. @Id (Correct Answer)**
- [ ] C. @Version
- [ ] D. @Transient

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q393, the correct answer is "@Id". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q394. A developer is working on a library management system and needs to create a class to represent a book entity in the database. The class should allow Hibernate to know that this is a persistent entity, and it should be mapped to a table named "books" with an auto-generated ID for each book. What annotations should the developer use to achieve this?

- [ ] A. @Transient and @Entity
- [ ] B. @Table(name="books") and @Id
- [ ] C. @Entity and @GeneratedValue
- **[x] D. @Entity, @Table(name="books"), and @Id and @GeneratedValue (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q394, the correct answer is "@Entity, @Table(name="books"), and @Id and @GeneratedValue". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q395. John is developing a Spring Boot application and needs to define a class that corresponds to a database table for storing customer data. Which JPA annotation should he use at the top of his class to indicate that it is a JPA entity?

- [ ] A. @Table
- [ ] B. @Column
- **[x] C. @Entity (Correct Answer)**
- [ ] D. @Id

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q395, the correct answer is "@Entity". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q396. Chris needs to configure an auto-incrementing field for the order ID in his entity class. Which JPA annotation is appropriate for this purpose?

- [ ] A. @Id
- [ ] B. @Table
- [ ] C. @Column
- **[x] D. @GeneratedValue (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q396, the correct answer is "@GeneratedValue". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q397. Rachel wants to map a Java class field to a specific column in the database and requires that the field name does not match the column name. Which JPA annotation should she use on her field to manage this mapping?

- [ ] A. @Entity
- [ ] B. @Table
- [ ] C. @Id
- **[x] D. @Column (Correct Answer)**

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q397, the correct answer is "@Column". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q398. Emily is working on a project where she needs to specify a unique identifier for a product in her database. Which annotation should she apply to the field in her entity class to designate it as the primary key?

- [ ] A. @GeneratedValue
- [ ] B. @Entity
- **[x] C. @Id (Correct Answer)**
- [ ] D. @Column

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q398, the correct answer is "@Id". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q399. Sarah is tasked with creating a repository for an application that manages books. She needs to retrieve a list of books by a specific author's last name. Which method naming convention should she follow to ensure that Spring Data JPA can automatically implement this function?

- [ ] A. listByAuthorLastName
- **[x] B. getBooksByAuthorLastName (Correct Answer)**
- [ ] C. findBooksByLastName
- [ ] D. retrieveBooksByAuthor

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q399, the correct answer is "getBooksByAuthorLastName". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q400. A team is developing an e-commerce application where you need to model the relationship between customers and orders. Each customer can place multiple orders, but each order belongs to a single customer. Which Spring JPA annotation should be used in the Customer entity to represent this one-to-many relationship correctly?

- [ ] A. @OneToOne
- **[x] B. @OneToMany (Correct Answer)**
- [ ] C. @ManyToMany
- [ ] D. @Embedded

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q400, the correct answer is "@OneToMany". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q401. Maria is configuring JPA relationships in her application and needs to define how entities should fetch related data. She prefers to load the related entity only when it is explicitly accessed to optimize performance. Which fetch type should she use for this purpose?

- [ ] A. EAGER
- **[x] B. LAZY (Correct Answer)**
- [ ] C. JOIN FETCH
- [ ] D. FETCH

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q401, the correct answer is "LAZY". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q402. Mark is implementing a transaction management system in a banking application using Spring Boot JPA. He needs to ensure that a series of operations related to transferring money from one account to another either all succeed or fail together. Which annotation will he need to apply to the service method to achieve this?

- [ ] A. @Rollback
- **[x] B. @Transactional (Correct Answer)**
- [ ] C. @Async
- [ ] D. @Scheduled

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q402, the correct answer is "@Transactional". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q403. Jessica is developing a Springboot application that needs to select all the products available in the database. Which JPQL query should she use to achieve this?

- [ ] A. SELECT * FROM Product
- **[x] B. SELECT p FROM Product p (Correct Answer)**
- [ ] C. SELECT p.name FROM Product
- [ ] D. SELECT count(p) FROM Product p

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Easy`

**Explanation:** For Q403, the correct answer is "SELECT p FROM Product p". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q404. Tom wants to calculate the average price of all books in a library database using JPQL in a Springboot application. Which query would be most appropriate for him to use?

- **[x] A. SELECT AVG(b.price) FROM Book b (Correct Answer)**
- [ ] B. SELECT SUM(b.price) FROM Book b
- [ ] C. SELECT b.price FROM Book b
- [ ] D. SELECT COUNT(b) FROM Book b

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Medium`

**Explanation:** For Q404, the correct answer is "SELECT AVG(b.price) FROM Book b". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q405. Emily has a requirement to retrieve users from the database who are older than 30 years using a JPQL query. Which JPQL clause should she incorporate to filter her results appropriately?

- **[x] A. SELECT u FROM User u WHERE u.age > 30 (Correct Answer)**
- [ ] B. SELECT u FROM User u ORDER BY u.age
- [ ] C. SELECT u FROM User u GROUP BY u.age
- [ ] D. SELECT u FROM User u HAVING u.age > 30

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Hard`

**Explanation:** For Q405, the correct answer is "SELECT u FROM User u WHERE u.age > 30". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q406. Alex is working on a Springboot application that requires him to join the `Order` and `Customer` entities to fetch order details along with customer information. Which query structure should Alex use to accomplish this?

- [ ] A. SELECT o FROM Order o JOIN Customer c ON o.customerId = c.id
- **[x] B. SELECT o, c FROM Order o JOIN o.customer c (Correct Answer)**
- [ ] C. SELECT o, c FROM Order o, Customer c
- [ ] D. SELECT o FROM Order o INNER JOIN Customer c

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Medium`

**Explanation:** For Q406, the correct answer is "SELECT o, c FROM Order o JOIN o.customer c". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q407. A developer needs to implement a feature that retrieves the total sales amount from a `Sales` entity grouped by product category in a Spring Boot application using JPQL. Which of the following queries would achieve this? SELECT s.category, SUM(s.amount) FROM Sales s GROUP BY s.category

- [ ] A. SELECT SUM(s.amount) FROM Sales s ORDER BY s.category
- [ ] B. SELECT s.category, AVERAGE(s.amount) FROM Sales s GROUP BY
- **[x] C. s.category (Correct Answer)**
- [ ] D. SELECT DISTINCT s.category, SUM(s.totalAmount) FROM Sales s

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q407, the correct answer is "s.category". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q408. In a Spring Boot application, a developer is required to retrieve a count of all orders placed by a specific customer using JPQL. The entity model includes `Customer` and `Order`, where a customer can have multiple orders. What would be the correct JPQL query for this requirement?

- [ ] A. SELECT o FROM Order o WHERE o.customer.id = :customerId
- [ ] B. COUNT(SELECT o FROM Order o WHERE o.customerId = :customerId)
- **[x] C. SELECT COUNT(o) FROM Order o WHERE o.customer.id = :customerId (Correct Answer)**
- [ ] D. COUNT(o) FROM Orders o WHERE o.customerId = :customerId

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q408, the correct answer is "SELECT COUNT(o) FROM Order o WHERE o.customer.id = :customerId". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q409. A junior developer is trying to grasp the concept of joins in JPQL while fetching user data along with their associated orders. Which of the following JPQL queries correctly implements an inner join between `User` and `Order` entities based on a foreign key relationship where the `Order` entity has a field `user` that refers to the `User` entity?

- **[x] A. SELECT u FROM User u INNER JOIN u.orders o (Correct Answer)**
- [ ] B. SELECT u, o FROM User u, Order o WHERE u.id = o.userId
- [ ] C. SELECT u FROM User u JOIN Order o ON u.id = o.userId
- [ ] D. JOIN User u WITH Order o

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q409, the correct answer is "SELECT u FROM User u INNER JOIN u.orders o". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q410. A developer is tasked with implementing a feature where users can update their profile information. The user entity has attributes like name, email, and age. The developer needs to write a JPQL update query to modify the user's email based on their ID. Which of the following JPQL queries correctly accomplishes this task?

- **[x] A. UPDATE User u SET u.email = :email WHERE u.id = :id (Correct Answer)**
- [ ] B. MODIFY User SET email = :email WHERE id = :id
- [ ] C. CHANGE User u SET u.email TO :email FOR u.id = :id
- [ ] D. UPDATE Users SET email = :email WHERE id = :id

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q410, the correct answer is "UPDATE User u SET u.email = :email WHERE u.id = :id". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q411. Emily is designing a new database for her online bookstore. She realizes that she needs to ensure that the same book cannot be listed multiple times in her database. What is the importance of normalization in her database design? Normalization makes the database slower by increasing redundancy.

- [ ] A. Normalization is only a step during the backup process.
- **[x] B. Normalization helps eliminate duplicate data, ensuring efficient storage and (Correct Answer)**
- [ ] C. maintenance.
- [ ] D. Normalization is irrelevant for small datasets.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Hard`

**Explanation:** For Q411, the correct answer is "Normalization helps eliminate duplicate data, ensuring efficient storage and". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q412. John is working on a database for his company's customer management system. He knows he needs to format the customer

```java
Denormalized
```

- **[x] A. data to avoid having multiple phone numbers in the same column. Which level of normalization should he achieve to ensure that (Correct Answer)**
- [ ] B. all entries in a column are atomic and unique?
- [ ] C. 2NF
- [ ] D. 3NF

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q412, the correct answer is "data to avoid having multiple phone numbers in the same column. Which level of normalization should he achieve to ensure that". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q413. Lucy's team is analyzing the sales data from their e-commerce platform. She notices that the same product details are listed multiple times across different entries. This data arrangement might slow down their reporting process. Which scenario best describes this issue?

- **[x] A. Lucy's data is denormalized, leading to multiple entries of the same product. (Correct Answer)**
- [ ] B. Lucy has ensured that all product information is stored in separate tables.
- [ ] C. Lucy's database is in 1NF with no repeating groups or ungrouped attributes.
- [ ] D. Lucy's data is organized in a normalized fashion preventing redundancy.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q413, the correct answer is "Lucy's data is denormalized, leading to multiple entries of the same product.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q414. John is developing an application where each user has one unique profile. How should he define the relationship between the User entity and the Profile entity in Spring Boot JPA?

- [ ] A. Use the @ManyToOne annotation for the User and Profile relationship.
- **[x] B. Use the @OneToOne annotation between the User and Profile entities. (Correct Answer)**
- [ ] C. Implement a @OneToMany relationship for this scenario.
- [ ] D. Abandon the relationship as it cannot be established in JPA.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q414, the correct answer is "Use the @OneToOne annotation between the User and Profile entities.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q415. Emily's task is to manage the personal information of customers, where each customer has exactly one address. What operation should she implement to retrieve a customer's address based on their ID in Spring Boot JPA?

- [ ] A. Use the DELETE operation to remove the address.
- **[x] B. Execute a JOIN query to fetch the address using the customer's ID. (Correct Answer)**
- [ ] C. Use the UPDATE operation to find the address.
- [ ] D. Create a new customer entry with the same ID.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q415, the correct answer is "Execute a JOIN query to fetch the address using the customer's ID.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q416. Alex wants to update the details of a specific user's account, which is linked to a unique profile in a Spring Boot application. What approach should he take to update the user's profile? Ignore the profile since updates are not allowed for One to One

- [ ] A. relationships.
- **[x] B. Load the user entity, modify the profile attributes, and save the user entity. (Correct Answer)**
- [ ] C. Delete the existing user profile and create a new one.
- [ ] D. Use a batch operation to update all user profiles at once.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q416, the correct answer is "Load the user entity, modify the profile attributes, and save the user entity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q417. A software developer is implementing a feature in a Spring Boot application that requires a One-to-One association between the `Employee` and `Address` entities. To ensure that each Employee has exactly one Address, which configuration should the developer choose for the `Address` entity? Annotate the Address entity with @OneToOne and use @JoinColumn(name = "employee_id") to create the foreign key. Use @OneToMany on the Employee entity with @OneToOne on the Address

- **[x] A. entity. (Correct Answer)**
- [ ] B. Annotate Employee with @Embedded to include Address attributes directly.
- [ ] C. Implement the Address as a separate entity without any annotations, only
- [ ] D. using a reference in the Employee entity.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q417, the correct answer is "entity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q418. A developer is working on an application that requires a bidirectional One-to-One relationship between a `Customer` and a `Wallet` entity. The `Wallet` entity should reference back to the `Customer`, while ensuring that both sides of the relationship are correctly maintained. How should the developer configure the `Customer` entity? Use @OneToOne(mappedBy = "customer") on the Customer entity to define the ownership in the Wallet. Confirm both Customer and Wallet have @OneToOne annotations without

- **[x] A. defining mapped ownership. (Correct Answer)**
- [ ] B. Implement the relationship using @ManyToOne in the Wallet entity, pointing
- [ ] C. back to Customer.
- [ ] D. Use @OneToOne on both entities without using any additional attributes.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q418, the correct answer is "defining mapped ownership.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q419. You are tasked with creating a RESTful API service with Spring Boot that handles user accounts. When a new User is registered, a Profile needs to be created simultaneously. What would be the best approach to ensure both entities are saved correctly while maintaining their relationship? Use @Transactional on the service method to save the User and Profile within the same transaction. Save the Profile first, then save the User without ensuring their relationship.

- **[x] A. Only save the User entity and rely on a separate service to handle Profile (Correct Answer)**
- [ ] B. creation later.
- [ ] C. Call the save method for both User and Profile independently, without
- [ ] D. managing transaction boundaries.

> **Category**: `Spring Boot & Core Framework` | **Difficulty**: `Easy`

**Explanation:** For Q419, the correct answer is "Only save the User entity and rely on a separate service to handle Profile". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q420. Jessica is designing a library management system where each author can write multiple books. How should she establish a One to Many relationship in her Spring Boot JPA application? The Author entity should have a @OneToOne annotation, while the Book entity should have a @ManyToOne annotation. The Author entity should have a @OneToMany annotation, while the Book entity should be marked with @ManyToOne.

- **[x] A. Both the Author and Book entities should reference each other with (Correct Answer)**
- [ ] B. @ManyToMany annotations.
- [ ] C. The Book entity should exclusively define the One to Many relationship
- [ ] D. using @OneToMany annotation.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q420, the correct answer is "Both the Author and Book entities should reference each other with". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q421. Alice is working on a project that involves creating a web application for managing school classes. She needs to implement CRUD operations to manage classes and students, where each class can have multiple students. What is the correct sequence of actions to add a new student to an existing class? Create the student object, save it independently, and then associate it with the class. Update the class object with the new student in the list and then save the

- **[x] A. class entity. (Correct Answer)**
- [ ] B. Add the student to a separate database and link it to the class later.
- [ ] C. Only save the student entity; the class will automatically link to it in the
- [ ] D. database.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Easy`

**Explanation:** For Q421, the correct answer is "class entity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q422. Tom is implementing a database to store customer information and their respective orders. He knows that each customer can have multiple orders. Which attribute in the Order entity should Tom use to establish which customer each order belongs to?

- [ ] A. A field indicating the total price of the order.
- **[x] B. A field annotated with @ManyToOne referencing the Customer entity. (Correct Answer)**
- [ ] C. A field containing the order date.
- [ ] D. A list containing all the orders in the Customer entity.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q422, the correct answer is "A field annotated with @ManyToOne referencing the Customer entity.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q423. Maria is tasked with designing a bookstore application using Spring Boot JPA. She needs to establish a relationship where a single author can have multiple books. How should she define this One to Many association in her entity classes? Use @ManyToOne in the Author entity to reference a list of books.

- **[x] A. Implement @OneToMany in the Author entity with a List while ensuring (Correct Answer)**
- [ ] B. @ManyToOne in the Book entity.
- [ ] C. Define both entities with @OneToMany annotations.
- [ ] D. Create a separate entity for the relationship without any annotations.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q423, the correct answer is "Implement @OneToMany in the Author entity with a List while ensuring". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q424. Sarah is implementing a task management system where a project can have multiple tasks. She extends the JpaRepository to manage CRUD operations for both `Project` and `Task` entities. Which statement is true regarding how she should implement the repository layer? She does not need to implement a repository for the Task entity since it is related to Project. Both ProjectRepository and TaskRepository should be extended from JpaRepository and JpaRepository respectively.

- **[x] A. CRUD operations should be implemented using manual SQL queries without (Correct Answer)**
- [ ] B. extending JpaRepository.
- [ ] C. She only needs one repository for both entities to handle the CRUD
- [ ] D. operations.

> **Category**: `JPA & ORM` | **Difficulty**: `Medium`

**Explanation:** For Q424, the correct answer is "CRUD operations should be implemented using manual SQL queries without". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q425. Alex is integrating a feature in his application's user management system that maintains each user's posts. The posts must be retrieved based on the associated user information. After defining a `User` entity with a list of `Post` entities, he used `@OneToMany(mappedBy = "user")` in the `User` class. What does this imply about the relationship? The User entity is responsible for managing the relationship.

- **[x] A. The Post entity will manage the relationship and control database (Correct Answer)**
- [ ] B. operations.
- [ ] C. The relationship cannot be cascaded to the Post entity.
- [ ] D. A join table must be used for this relationship.

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q425, the correct answer is "The Post entity will manage the relationship and control database". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q426. Tim is working on an e-commerce application where each order can have multiple order items. He decides to use cascading to manage the lifecycle of child entities related to the parent. Which annotation configuration will effectively propagate persistence operations from the `Order` entity to the `OrderItem` entities? Use @OneToMany(mappedBy = "order", cascade = CascadeType.ALL) in the Order class. Only the OrderItem should have the cascade configuration.

- **[x] A. Parent entities cannot have cascade settings with One to Many (Correct Answer)**
- [ ] B. relationships.
- [ ] C. Only persistence operations should be cascaded; retrieving data does not
- [ ] D. require cascades.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q426, the correct answer is "Parent entities cannot have cascade settings with One to Many". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q427. Jane is developing a blog application where multiple blog posts can be attributed to a single author. Which situation exemplifies a Many to One relationship in this context?

- [ ] A. Multiple authors can contribute to a single blog post.
- [ ] B. Each blog post can have multiple tags connected to it.
- **[x] C. Several blog posts belong to one specific author. (Correct Answer)**
- [ ] D. A single author can write multiple comments on different posts.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q427, the correct answer is "Several blog posts belong to one specific author.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q428. Tom is designing a database for a school system where multiple students can enroll in a single class. Which description best fits this scenario regarding Many to One association?

- [ ] A. Each student can enroll in multiple classes.
- [ ] B. Each class can have multiple teachers.
- **[x] C. Many students can be associated with one class. (Correct Answer)**
- [ ] D. Each teacher can teach multiple classes.

> **Category**: `Java & Spring Architecture` | **Difficulty**: `Medium`

**Explanation:** For Q428, the correct answer is "Many students can be associated with one class.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q429. Alex is developing a web application that requires different users to have different levels of access. Which role-based access control (RBAC) statement is correct?

- **[x] A. Users with admin roles can access all resources. (Correct Answer)**
- [ ] B. Users with user roles can access admin functionalities.
- [ ] C. All users can view sensitive data without restrictions.
- [ ] D. Users with guest roles can access restricted areas.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q429, the correct answer is "Users with admin roles can access all resources.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q430. John wants to secure his Spring application by defining security rules efficiently. He discovers a specific annotation that helps in setting up Spring Security configurations within his Java classes. Which annotation should he use?

- [ ] A. @EnableConfiguration
- [ ] B. @EnableSecurity
- **[x] C. @EnableWebSecurity (Correct Answer)**
- [ ] D. @SecurityConfig

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q430, the correct answer is "@EnableWebSecurity". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q431. A developer explains to a team that proving a user's identity occurs before determining what resources they can access. Which two concepts are they describing?

- **[x] A. Authentication and authorization (Correct Answer)**
- [ ] B. Authorization and encryption
- [ ] C. Authentication and encryption
- [ ] D. User roles and permissions

> **Category**: `JPA & ORM` | **Difficulty**: `Easy`

**Explanation:** For Q431, the correct answer is "Authentication and authorization". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q432. Emma is tasked with implementing user authentication for her Spring application. She learns that one common method encodes credentials to avoid sending them in plain text. Which authentication mechanism is she most likely learning about?

- [ ] A. Token-based Authentication
- [ ] B. OAuth
- **[x] C. Basic Authentication (Correct Answer)**
- [ ] D. Digest Authentication

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q432, the correct answer is "Basic Authentication". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q433. A healthcare application is being developed where only authorized medical personnel should access patient records. The team decides to implement Role-Based Access Control (RBAC) and assigns roles accordingly. What would be the best approach to implement RBAC for this scenario? Assign all users the same permissions to simplify management.

- **[x] A. Implement roles such as 'Doctor' who can access full medical records and (Correct Answer)**
- [ ] B. 'Nurse' who can only view basic information.
- [ ] C. Revoking all permissions for users until they request access.
- [ ] D. Allow users to self-assign roles based on their job titles.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q433, the correct answer is "Implement roles such as 'Doctor' who can access full medical records and". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q434. An online marketplace is concerned about fraudulent transactions. They are looking into securing user sessions to ensure that unauthorized access is minimized. What is the most effective method for managing user sessions? Allowing sessions to last indefinitely to avoid user inconvenience.

- **[x] A. Implementing periodic re-validation of sessions, requiring users to log in (Correct Answer)**
- [ ] B. again after a set timeout.
- [ ] C. Storing session state entirely on the client-side for faster access.
- [ ] D. Having users re-authenticate only after a month of inactivity.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q434, the correct answer is "Implementing periodic re-validation of sessions, requiring users to log in". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q435. A web application allows different user roles to access various resources. Developers are tasked with ensuring that unauthorized users cannot access sensitive sections. What would be the best way to enforce this through URL-based authorization? Allow unrestricted access for all users to simplify development. Define strict URL-based access rules in the security configuration to limit

- **[x] A. access based on user roles. (Correct Answer)**
- [ ] B. Use a generic homepage redirection for unauthorized users as the only
- [ ] C. security measure.
- [ ] D. Disable all security checks to enhance application performance.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q435, the correct answer is "access based on user roles.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q436. Alex is developing a Spring Boot application that requires user authentication through tokens. He needs to ensure that once a user logs in, they do not have to authenticate again for a specific period. Which of the following best describes the role of a refresh token in this scenario? Refresh tokens are used to log the user out of the application. Refresh tokens allow the user to maintain their session without re-entering

- **[x] A. their credentials. (Correct Answer)**
- [ ] B. Refresh tokens are temporary tokens that can only be used once.
- [ ] C. Refresh tokens are used to directly authenticate users without an initial
- [ ] D. login.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q436, the correct answer is "their credentials.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q437. A developer is working on an e-commerce application that utilizes token-based authentication. After a user successfully logs in, the application generates an access token and a refresh token. What is the primary purpose of the refresh token in this scenario? To allow users to authenticate without re-entering their credentials once the

- **[x] A. access token expires. (Correct Answer)**
- [ ] B. To store sensitive user data such as passwords for quick access.
- [ ] C. To verify the authenticity of the access token without additional processing.
- [ ] D. To provide a backup if the access token is lost or compromised.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q437, the correct answer is "access token expires.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q438. Sarah has implemented JWT (JSON Web Tokens) for user authentication in her Spring Boot application. She notices that there are multiple benefits to using JWT, especially for stateless authentication. Which of the following describes a major advantage of this approach in her application? JWT tokens are stored on the client-side, making server storage unnecessary. JWT tokens are easy to revoke at any time without affecting active

- **[x] A. sessions. (Correct Answer)**
- [ ] B. All data within a JWT token is automatically encrypted for security.
- [ ] C. The application has to maintain a session store for user authentication and
- [ ] D. authorization.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Hard`

**Explanation:** For Q438, the correct answer is "sessions.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q439. Alice is developing a web application that requires user authentication. She decides to implement JWTs for handling user sessions. During the JWT generation process, she specifically includes the user's role information in the Payload. A week later, she encounters a scenario where a user claims their access has changed but the JWT they are using still includes the previous role. What could be the issue with her current implementation? The JWT should not include role information in the Payload. The JWT does not refresh automatically, which means changes in user roles

- **[x] A. won't be reflected until a new token is issued. (Correct Answer)**
- [ ] B. The Header must specify the user role to update it successfully.
- [ ] C. The server can invalidate the JWT whenever there's a role change, making it
- [ ] D. stateful.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Easy`

**Explanation:** For Q439, the correct answer is "won't be reflected until a new token is issued.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q440. A team is deploying a critical update on their project, but one of the developers realizes they made a mistake that affected the code. They executed the command `git push origin main` after committing their changes. What should they do to rectify the mistake while minimizing disruptions? Use git revert to create a new commit that undoes the changes made by the

- **[x] A. mistaken commit. (Correct Answer)**
- [ ] B. Force push the previous commit using git push --force.
- [ ] C. Delete the mistaken commit from the main branch and re-push the master.
- [ ] D. Contact the project manager to redo the entire deployment process.

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Medium`

**Explanation:** For Q440, the correct answer is "mistaken commit.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q441. Alex is working on a new feature in a project that requires extensive changes. He decides to use a branch so that he can make changes without affecting the main codebase. After some time, he completes the feature but realizes that two other developers have made changes to the main branch that could lead to merge conflicts. What should Alex consider before merging his branch back into the main branch? Ensure his branch is up to date with the main branch and resolve any conflicts locally.

- **[x] A. Only merge if the changes in the main branch are minor and do not affect (Correct Answer)**
- [ ] B. his code.
- [ ] C. Ignore the changes in the main branch as they are not related to his feature.
- [ ] D. Ask the other developers to revert their changes before merging.

> **Category**: `JPA & ORM` | **Difficulty**: `Hard`

**Explanation:** For Q441, the correct answer is "Only merge if the changes in the main branch are minor and do not affect". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q442. Maria is teaching her new intern how to use Git. She explains that snapshots are taken at different points in time during development. The intern asks her about the role of commits. What is Maria's best explanation? Commits create snapshots of the entire project and store them in a designated folder. Commits represent individual changes and allow for the tracking of

- **[x] A. modifications over time. (Correct Answer)**
- [ ] B. Commits only record the changes made in a single file at once.
- [ ] C. Commits are used solely for backing up the project before significant
- [ ] D. updates.

> **Category**: `Spring Security & JWT` | **Difficulty**: `Medium`

**Explanation:** For Q442, the correct answer is "modifications over time.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q443. John has made some changes to the files in his local Git repository and is ready to save those changes. Which command should he use to preserve his changes along with a descriptive message?

- [ ] A. git push
- [ ] B. git stage
- **[x] C. git commit (Correct Answer)**
- [ ] D. git pull

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q443, the correct answer is "git commit". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q444. Lisa has made a number of commits in her local repository and wants to share her work with her team by uploading the changes to the remote repository. What command will she use to achieve this?

- [ ] A. git merge
- [ ] B. git stage
- **[x] C. git push (Correct Answer)**
- [ ] D. git clone

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Hard`

**Explanation:** For Q444, the correct answer is "git push". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q445. Emma has just received a link to a remote Git repository containing a project she needs to work on. What command should she use to create a local copy of that repository on her machine?

- [ ] A. git pull
- **[x] B. git clone (Correct Answer)**
- [ ] C. git fetch
- [ ] D. git init

> **Category**: `DevOps & Git Version Control` | **Difficulty**: `Easy`

**Explanation:** For Q445, the correct answer is "git clone". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

### Q446. Jessica is working on a new feature for her web application and wants to create a separate branch to manage her changes. What is the correct way for her to create a new branch in GitHub using the web interface? Click on the "Code" tab, then type the new branch name in the "Branch: main" dropdown and click "Create branch". Navigate to the settings, select "Branches", and create a new branch from there.

- **[x] A. Open a terminal, use git branch new-feature and push the branch. (Correct Answer)**
- [ ] B. Send an email to the repository owner requesting a new branch creation.
- [ ] C. Answer Key & Solution
- [ ] D. Section 1 -

> **Category**: `JPQL & Database Queries` | **Difficulty**: `Medium`

**Explanation:** For Q446, the correct answer is "Open a terminal, use git branch new-feature and push the branch.". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.

---

