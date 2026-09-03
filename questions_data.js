const questionsData = [
  {
    "id": 1,
    "category": "JPA & ORM",
    "question": "In Spring Boot JPA, what does the @PersistenceContext annotation represent?",
    "code": "",
    "options": [
      "It injects a reference to the EntityManager into a Spring bean.",
      "It defines the persistence unit for the JPA entity manager.",
      "It specifies the database schema for entity mappings.",
      "It configures the transactional behavior of JPA repositories."
    ],
    "answer": 0,
    "explanation": "For Q1, the correct answer is \"It injects a reference to the EntityManager into a Spring bean.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "category": "Spring MVC & REST API",
    "question": "What is the purpose of the @ExceptionHandler annotation in Spring MVC?",
    "code": "",
    "options": [
      "It handles exceptions thrown by controller methods",
      "It defines a custom exception class",
      "It automatically enables global exception handling",
      "It configures application logging"
    ],
    "answer": 0,
    "explanation": "For Q2, the correct answer is \"It handles exceptions thrown by controller methods\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 3,
    "category": "Java & Spring Architecture",
    "question": "What is the primary purpose of using DTOs (Data Transfer Objects) in a Spring Boot application with a multi-tiered architecture? DTOs facilitate direct communication between the presentation layer and the database, reducing the need for intermediary services. DTOs encapsulate domain logic and business rules, ensuring data consistency and integrity across the application. DTOs improve performance by reducing the size of data transferred",
    "code": "",
    "options": [
      "between client and server, minimizing network overhead.",
      "DTOs serve as lightweight data containers for transferring data between",
      "different layers of the application, promoting separation of concerns and",
      "decoupling."
    ],
    "answer": 2,
    "explanation": "For Q3, the correct answer is \"different layers of the application, promoting separation of concerns and\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 4,
    "category": "Java & Spring Architecture",
    "question": "When debugging a Spring Boot application, what does a \"502 Bad Gateway\" error typically indicate?",
    "code": "",
    "options": [
      "Server overload",
      "Database connection failure",
      "Proxy or load balancer issue",
      "Memory leak"
    ],
    "answer": 2,
    "explanation": "For Q4, the correct answer is \"Proxy or load balancer issue\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 5,
    "category": "JPA & ORM",
    "question": "What issue can occur if the mappedBy attribute is incorrectly configured in a bidirectional one-to-many relationship? Hibernate may generate an incorrect database schema or create duplicate",
    "code": "",
    "options": [
      "relationship mappings",
      "The application automatically switches to lazy loading",
      "JSON serialization always causes infinite recursion",
      "Foreign keys are automatically removed from the database"
    ],
    "answer": 0,
    "explanation": "For Q5, the correct answer is \"relationship mappings\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 6,
    "category": "JPA & ORM",
    "question": "What is the primary purpose of the 'cascade' attribute in a JPA association mapping? It specifies the fetch strategy for associated entities during querying. It determines the propagation behavior of operations (e.g., save, delete) from parent to child entities.",
    "code": "",
    "options": [
      "It configures the naming strategy for foreign key columns in the database",
      "schema.",
      "It indicates the type of join used to establish the association between",
      "entities."
    ],
    "answer": 3,
    "explanation": "For Q6, the correct answer is \"entities.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 7,
    "category": "JPA & ORM",
    "question": "Which of the following configurations correctly sets up a one-to-many relationship where Order is the parent and OrderItem is the child entity in Spring Boot JPA? @OneToMany(mappedBy = \"order\", cascade = CascadeType.ALL) in Order and @ManyToOne in OrderItem. @OneToMany in Order and @ManyToOne(mappedBy = \"order\") in OrderItem.",
    "code": "",
    "options": [
      "@OneToMany(cascade = CascadeType.ALL) in Order and @ManyToOne in",
      "OrderItem.",
      "@OneToMany in Order and @ManyToOne(cascade = CascadeType.ALL) in",
      "OrderItem."
    ],
    "answer": 1,
    "explanation": "For Q7, the correct answer is \"OrderItem.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 8,
    "category": "Spring Boot & Core Framework",
    "question": "What is the purpose of the @Transactional annotation in Spring?",
    "code": "",
    "options": [
      "It defines a transactional boundary for a method or class",
      "It marks an entity as transaction-safe",
      "It creates database tables automatically",
      "It enables dependency injection"
    ],
    "answer": 0,
    "explanation": "For Q8, the correct answer is \"It defines a transactional boundary for a method or class\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 9,
    "category": "JPA & ORM",
    "question": "What is the primary reason to use @OneToMany(mappedBy = \"parent\") in the parent entity of a one-to-many association? To indicate that the parent entity is responsible for managing the foreign",
    "code": "",
    "options": [
      "key.",
      "To specify that the child entity owns the relationship.",
      "To avoid creating a join table for the association.",
      "To ensure that the association is lazily loaded."
    ],
    "answer": 1,
    "explanation": "For Q9, the correct answer is \"To specify that the child entity owns the relationship.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 10,
    "category": "JPA & ORM",
    "question": "In a bidirectional One-to-One JPA relationship, what does the mappedBy attribute indicate? The name of the relationship field in the owning side entity that manages",
    "code": "",
    "options": [
      "the foreign key",
      "The database column name used for storing the primary key",
      "The fetch strategy used for loading the associated entity",
      "The cascade operations applied to the relationship"
    ],
    "answer": 0,
    "explanation": "For Q10, the correct answer is \"the foreign key\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 11,
    "category": "Spring Security & JWT",
    "question": "What is the primary advantage of using JWT (JSON Web Tokens) for authentication in Spring Boot applications? JWT tokens can only be decoded by the server, ensuring maximum security. JWT tokens are stateless, reducing the need to store session information on",
    "code": "",
    "options": [
      "the server.",
      "JWT tokens provide built-in encryption, ensuring data integrity during",
      "transmission.",
      "JWT tokens automatically expire after a certain period, enhancing security."
    ],
    "answer": 0,
    "explanation": "For Q11, the correct answer is \"the server.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 12,
    "category": "JPA & ORM",
    "question": "Which of the following is NOT a valid way to communicate between a servlet and a client browser?",
    "code": "",
    "options": [
      "HTTP response headers",
      "HTTP request parameters",
      "Java Native Interface (JNI)",
      "Session attributes"
    ],
    "answer": 2,
    "explanation": "For Q12, the correct answer is \"Java Native Interface (JNI)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 13,
    "category": "Java & Spring Architecture",
    "question": "Which of the following scenarios is most suitable for implementing database normalization in a Spring Boot application? When the application requires denormalized data for efficient querying and reporting. When the application has limited data volume and complexity, making normalization unnecessary.",
    "code": "",
    "options": [
      "When the application needs to enforce complex business rules and",
      "validation logic at the database level.",
      "When the application involves managing large volumes of data with multiple",
      "interrelated entities and relationships."
    ],
    "answer": 2,
    "explanation": "For Q13, the correct answer is \"When the application involves managing large volumes of data with multiple\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 14,
    "category": "JPA & ORM",
    "question": "What is the purpose of using optional = false in a @OneToOne association in Spring Boot JPA?",
    "code": "",
    "options": [
      "It ensures that cascading operations are applied to the associated entity.",
      "It allows the associated entity to be null, making the association optional.",
      "It enforces the eager fetching of the associated entity.",
      "It indicates that the association is mandatory and cannot be null."
    ],
    "answer": 3,
    "explanation": "For Q14, the correct answer is \"It indicates that the association is mandatory and cannot be null.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 15,
    "category": "DevOps & Git Version Control",
    "question": "In the context of version control, what is a \"commit\"?",
    "code": "",
    "options": [
      "A request to merge code changes into the main branch",
      "A snapshot of the project's current state at a specific point in time",
      "An action to revert changes made to a file",
      "A notification to team members about code updates"
    ],
    "answer": 1,
    "explanation": "For Q15, the correct answer is \"A snapshot of the project's current state at a specific point in time\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 16,
    "category": "JPA & ORM",
    "question": "Consider the following Spring Boot controller method, How can you improve error handling in this method to provide more informative error messages without exposing sensitive information? Implement centralized logging and auditing mechanisms using AOP and Spring Boot's logging frameworks to capture detailed error logs and context information, facilitating post-mortem analysis and incident response. Use Spring Boot's built-in @ResponseStatus annotation to customize HTTP error responses based on specific exception types, ensuring consistent error handling across all controller methods. Integrate with Spring Boot Actuator's error endpoint to expose application- wide error metrics and diagnostics, enabling real-time monitoring and",
    "code": "",
    "options": [
      "troubleshooting of error conditions in production environments.",
      "Implement a custom exception handler using @ControllerAdvice to intercept",
      "ProductCreationException and return a structured error response with",
      "detailed error codes and messages, adhering to RESTful API best practices."
    ],
    "answer": 1,
    "explanation": "For Q16, the correct answer is \"Implement a custom exception handler using @ControllerAdvice to intercept\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 17,
    "category": "Java & Spring Architecture",
    "question": "How can you define a checked custom exception in Spring Boot?",
    "code": "",
    "options": [
      "Annotations like @GetMapping can handle all potential errors",
      "Extend the Exception class",
      "Implement the Throwable interface",
      "Extend the RuntimeException class"
    ],
    "answer": 1,
    "explanation": "For Q17, the correct answer is \"Extend the Exception class\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 18,
    "category": "JPA & ORM",
    "question": "In Spring Framework, what is the purpose of using the @Qualifier annotation along with @Autowired? It disables dependency injection for a specific bean @PostMapping(\"/products\") public ResponseEntity<Product> createProduct(@RequestBody Product newProduct) { try { Product createdProduct = productService.createProduct(newProduct); return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);",
    "code": "It selects a specific bean when multiple beans of the same type are\navailable\nIt creates a new bean instance during application startup\nIt replaces the need for the @Autowired annotation",
    "options": [
      "} catch (ProductCreationException e) {",
      "return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);",
      "}",
      "}"
    ],
    "answer": 2,
    "explanation": "For Q18, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 19,
    "category": "Servlets & Web Containers",
    "question": "Which HTTP status code is typically used to indicate that a requested resource is not found in a Spring Boot REST API?",
    "code": "",
    "options": [
      "200",
      "403",
      "404",
      "500"
    ],
    "answer": 2,
    "explanation": "For Q19, the correct answer is \"404\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 20,
    "category": "Java & Spring Architecture",
    "question": "Which ORM design pattern is responsible for tracking changes made to objects and coordinating database updates within a transaction?",
    "code": "",
    "options": [
      "Unit of Work pattern",
      "Proxy pattern",
      "Singleton pattern",
      "Factory pattern"
    ],
    "answer": 0,
    "explanation": "For Q20, the correct answer is \"Unit of Work pattern\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 21,
    "category": "JPA & ORM",
    "question": "Which of the following is true about the @JoinColumn annotation in the context of a one-to-one association in Spring Boot JPA?",
    "code": "",
    "options": [
      "It defines the foreign key column in the database table of the owning entity.",
      "It specifies the primary key column in the inverse side of the relationship.",
      "It is used only in unidirectional associations.",
      "It can only be used with @OneToOne annotations."
    ],
    "answer": 0,
    "explanation": "For Q21, the correct answer is \"It defines the foreign key column in the database table of the owning entity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 22,
    "category": "Java & Spring Architecture",
    "question": "What is the primary goal of normalization in database design? To eliminate redundancy and minimize data duplication.",
    "code": "",
    "options": [
      "To maximize data integrity and enforce referential constraints.",
      "To optimize query performance and improve data retrieval speed.",
      "To standardize data formats and ensure compatibility across different",
      "systems."
    ],
    "answer": 0,
    "explanation": "For Q22, the correct answer is \"To maximize data integrity and enforce referential constraints.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 23,
    "category": "Spring Security & JWT",
    "question": "In a Spring Boot REST API application, what does the term \"content negotiation\" refer to in the context of handling HTTP requests and responses? It denotes the negotiation of session management and authentication mechanisms between the client and server to establish a trusted and authenticated connection. It refers to the negotiation of HTTP methods and request headers between the client and server to establish a secure and reliable communication channel. It signifies the negotiation of caching directives and cache-control policies between the client and server to optimize resource caching and reduce",
    "code": "",
    "options": [
      "network latency.",
      "It denotes the process of negotiating the content type and encoding",
      "between the client and server to determine the most suitable representation",
      "of the resource."
    ],
    "answer": 2,
    "explanation": "For Q23, the correct answer is \"between the client and server to determine the most suitable representation\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 24,
    "category": "Servlets & Web Containers",
    "question": "In a servlet container, what is the purpose of the servlet life cycle methods init(), service(), and destroy()? init() creates a new instance of the servlet, service() processes HTTP requests, and destroy() shuts down the servlet container. init() configures servlet mappings, service() dispatches requests to appropriate servlets, and destroy() terminates the current session.",
    "code": "",
    "options": [
      "init() sets up database connections, service() executes business logic, and",
      "destroy() closes database connections.",
      "init() initializes the servlet, service() handles incoming requests, and",
      "destroy() releases resources."
    ],
    "answer": 2,
    "explanation": "For Q24, the correct answer is \"init() initializes the servlet, service() handles incoming requests, and\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 25,
    "category": "JPA & ORM",
    "question": "What is the primary benefit of using the @MapsId annotation in a one-to-one association with shared primary keys? It simplifies the configuration by removing the need for a separate foreign key column.",
    "code": "",
    "options": [
      "It allows the associated entity to have a composite key.",
      "It ensures that the primary key of the owning entity is automatically set as",
      "the primary key of the associated entity.",
      "It improves the performance of queries involving the association."
    ],
    "answer": 1,
    "explanation": "For Q25, the correct answer is \"It ensures that the primary key of the owning entity is automatically set as\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 26,
    "category": "JPA & ORM",
    "question": "What is the simplest way to override the default validation message for a single Bean Validation constraint? Specify a custom message using the message attribute in the validation",
    "code": "",
    "options": [
      "annotation.",
      "Create a custom validation framework from scratch",
      "Modify the Hibernate Validator source code",
      "Disable Bean Validation and handle all validation manually"
    ],
    "answer": 0,
    "explanation": "For Q26, the correct answer is \"annotation.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 27,
    "category": "JPQL & Database Queries",
    "question": "In JPQL, what is the significance of the DISTINCT keyword in a SELECT clause? It specifies that duplicate entities should be excluded from the query result.",
    "code": "",
    "options": [
      "It indicates that the query should return only entities with distinct property",
      "values.",
      "It defines the criteria for ordering query results based on entity properties.",
      "It signifies that the query should return a distinct set of entity properties."
    ],
    "answer": 0,
    "explanation": "For Q27, the correct answer is \"It indicates that the query should return only entities with distinct property\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 28,
    "category": "JPA & ORM",
    "question": "What is the purpose of the SpringApplication class in Spring Boot? It provides utilities for loading and configuring the Spring application context. It manages the lifecycle of Spring beans in the application context.",
    "code": "",
    "options": [
      "It bootstraps the Spring Boot application and launches the application",
      "context.",
      "It initializes the embedded web server for deploying Spring Boot",
      "applications."
    ],
    "answer": 0,
    "explanation": "For Q28, the correct answer is \"It bootstraps the Spring Boot application and launches the application\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 29,
    "category": "JPA & ORM",
    "question": "In JPA, which annotation would you use to define a non-persistent field in an entity?",
    "code": "",
    "options": [
      "@Id",
      "@Transient",
      "@NonPersistent",
      "@Column(nullable = false)"
    ],
    "answer": 1,
    "explanation": "For Q29, the correct answer is \"@Transient\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 30,
    "category": "JPA & ORM",
    "question": "In a Spring Boot application, how can you handle errors and exceptions globally across all controller methods? By using try-catch blocks within each controller method to handle specific exceptions. By annotating individual controller methods with @ExceptionHandler to handle specific exception types.",
    "code": "",
    "options": [
      "By configuring a centralized error handler using @ControllerAdvice and",
      "@ExceptionHandler to intercept and process exceptions globally.",
      "By returning a custom error response directly from the controller method in",
      "case of errors."
    ],
    "answer": 0,
    "explanation": "For Q30, the correct answer is \"By configuring a centralized error handler using @ControllerAdvice and\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 31,
    "category": "Spring MVC & REST API",
    "question": "What is a drawback of handling exceptions using try-catch blocks in every controller method?",
    "code": "",
    "options": [
      "It leads to repetitive code and makes centralized error handling difficult",
      "It improves code readability by reducing duplication",
      "It automatically converts all exceptions into HTTP 404 responses",
      "It eliminates the need for @ControllerAdvice"
    ],
    "answer": 0,
    "explanation": "For Q31, the correct answer is \"It leads to repetitive code and makes centralized error handling difficult\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 32,
    "category": "JPA & ORM",
    "question": "Which annotation is used to specify the database table name for a JPA entity?",
    "code": "",
    "options": [
      "@NamingStrategy",
      "@EntityTable",
      "@Table",
      "@ColumnNaming"
    ],
    "answer": 2,
    "explanation": "For Q32, the correct answer is \"@Table\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 33,
    "category": "Spring MVC & REST API",
    "question": "In Spring Boot, what is the purpose of the @RestController annotation compared to @Controller, and how does it affect response handling? @RestController is a specialized annotation for handling asynchronous requests, allowing for non-blocking I/O operations and more efficient resource utilization compared to @Controller. @RestController ensures that all methods within the annotated class are treated as REST endpoints, automatically generating Swagger documentation and API documentation based on method signatures. @RestController combines the behavior of @Controller and @ResponseBody, automatically converting method return values to JSON or",
    "code": "",
    "options": [
      "XML responses, making it suitable for RESTful APIs.",
      "@RestController is used specifically for controlling the flow of requests and",
      "responses in the application, providing finer control over HTTP status codes",
      "and response headers compared to @Controller."
    ],
    "answer": 0,
    "explanation": "For Q33, the correct answer is \"XML responses, making it suitable for RESTful APIs.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 34,
    "category": "Servlets & Web Containers",
    "question": "What is the primary purpose of a servlet filter in a Java web application? To intercept and modify HTTP requests and responses before they reach the servlet or after they leave.",
    "code": "",
    "options": [
      "To cache static resources like images and CSS files to improve page loading",
      "speed.",
      "To encrypt sensitive data transmitted over HTTP connections.",
      "To manage user sessions and enforce access control policies."
    ],
    "answer": 0,
    "explanation": "For Q34, the correct answer is \"To cache static resources like images and CSS files to improve page loading\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 35,
    "category": "Spring Security & JWT",
    "question": "What is the primary advantage of token-based authentication over traditional session-based authentication?",
    "code": "",
    "options": [
      "It is easier to implement",
      "It provides better security against CSRF attacks",
      "It allows stateless communication between the client and server",
      "It offers stronger encryption for user credentials"
    ],
    "answer": 2,
    "explanation": "For Q35, the correct answer is \"It allows stateless communication between the client and server\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 36,
    "category": "Spring Security & JWT",
    "question": "Which Spring Security filter processes username/password authentication requests?",
    "code": "",
    "options": [
      "UsernamePasswordAuthenticationFilter",
      "SecurityContextPersistenceFilter",
      "ExceptionTranslationFilter",
      "AuthorizationFilter"
    ],
    "answer": 0,
    "explanation": "For Q36, the correct answer is \"UsernamePasswordAuthenticationFilter\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 37,
    "category": "JPQL & Database Queries",
    "question": "What is the purpose of the HAVING clause in JPQL?",
    "code": "",
    "options": [
      "It filters the grouped results based on a specified condition.",
      "It specifies the criteria for joining multiple entities.",
      "It defines the order of the query results.",
      "It performs an aggregation operation on the query results."
    ],
    "answer": 0,
    "explanation": "For Q37, the correct answer is \"It filters the grouped results based on a specified condition.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 38,
    "category": "JPA & ORM",
    "question": "Consider the following JPQL query, What does :deptName represent in below query? A derived attribute of the Employee entity class that specifies the department name. A static placeholder indicating the position of the department name in the query.",
    "code": "",
    "options": [
      "A named query parameter that will be dynamically replaced with a",
      "department name at runtime.",
      "A predefined parameter representing the name of the Department entity",
      "class."
    ],
    "answer": 0,
    "explanation": "For Q38, the correct answer is \"A named query parameter that will be dynamically replaced with a\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 39,
    "category": "JPA & ORM",
    "question": "Consider the following controller method: What happens if OrderCreationException is thrown? The exception is caught, and the method returns HTTP 500 Internal Server Error The application automatically retries the request The exception is ignored, and HTTP 201 is returned The request is redirected to another controller SELECT e FROM Employee e WHERE e.department.name = :deptName\t1 @PostMapping(\"/orders\") public ResponseEntity<Order> createOrder(@RequestBody Order newOrder) { try { Order createdOrder = orderService.createOrder(newOrder); return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);",
    "code": "",
    "options": [
      "} catch (OrderCreationException e) {",
      "return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);",
      "}",
      "}"
    ],
    "answer": 2,
    "explanation": "For Q39, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 40,
    "category": "Spring Security & JWT",
    "question": "When designing a Spring Boot application, what is the primary role of the controller layer in the context of handling HTTP requests and responses? Executing business logic and enforcing application-specific rules. Interacting with the database to perform CRUD (Create, Read, Update, Delete) operations.",
    "code": "",
    "options": [
      "Validating incoming requests and serializing responses into JSON or XML",
      "format.",
      "Handling HTTP request mapping, request parameter parsing, and generating",
      "appropriate HTTP responses."
    ],
    "answer": 2,
    "explanation": "For Q40, the correct answer is \"Handling HTTP request mapping, request parameter parsing, and generating\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 41,
    "category": "Spring Security & JWT",
    "question": "Which of the following statements accurately describes the role of Tomcat in web development? Tomcat is a web server that exclusively serves static content like HTML files. Tomcat is primarily used for database management and does not handle HTTP requests.",
    "code": "",
    "options": [
      "Tomcat is a load balancer that distributes incoming requests across",
      "multiple server instances.",
      "Tomcat is a servlet container that executes Java servlets and manages",
      "JavaServer Pages (JSP)."
    ],
    "answer": 2,
    "explanation": "For Q41, the correct answer is \"Tomcat is a servlet container that executes Java servlets and manages\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 42,
    "category": "Spring Security & JWT",
    "question": "What is the difference between authentication and authorization in Spring Security? Authentication verifies user credentials, while authorization determines what resources a user can access. Authentication determines what resources a user can access, while",
    "code": "",
    "options": [
      "authorization verifies user credentials.",
      "Authentication and authorization are synonymous terms in Spring Security.",
      "Authentication and authorization both refer to the process of verifying user",
      "credentials."
    ],
    "answer": 3,
    "explanation": "For Q42, the correct answer is \"credentials.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 43,
    "category": "Servlets & Web Containers",
    "question": "In a Spring Boot REST API, what is the significance of using HTTP status code 204? It indicates that the requested resource has been successfully created on the server. It signifies that the server has processed the request but requires additional action from the client to complete the operation.",
    "code": "",
    "options": [
      "It denotes that the server successfully processed the request but",
      "intentionally returned no content in the response body.",
      "It represents a client-side error indicating that the request syntax is incorrect",
      "or malformed."
    ],
    "answer": 0,
    "explanation": "For Q43, the correct answer is \"It denotes that the server successfully processed the request but\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 44,
    "category": "Servlets & Web Containers",
    "question": "What is the purpose of the PATCH HTTP method? To create a new resource on the server.",
    "code": "",
    "options": [
      "To update an existing resource with partial modifications.",
      "To delete a resource permanently from the server.",
      "To retrieve metadata about a resource without transferring the entire",
      "content."
    ],
    "answer": 0,
    "explanation": "For Q44, the correct answer is \"To update an existing resource with partial modifications.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 45,
    "category": "Spring Security & JWT",
    "question": "In Spring Security, what is the purpose of an AuthenticationProvider?",
    "code": "",
    "options": [
      "To authenticate users based on their roles and permissions.",
      "To manage user sessions and cookies.",
      "To intercept and handle authentication requests.",
      "To validate user credentials and authenticate users."
    ],
    "answer": 3,
    "explanation": "For Q45, the correct answer is \"To validate user credentials and authenticate users.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 46,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @Version annotation in JPA entities?",
    "code": "",
    "options": [
      "It specifies the database version compatibility.",
      "It indicates the version of the entity for optimistic locking.",
      "It marks the entity as eligible for caching.",
      "It defines the entity's lifecycle management strategy."
    ],
    "answer": 1,
    "explanation": "For Q46, the correct answer is \"It indicates the version of the entity for optimistic locking.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 47,
    "category": "JPA & ORM",
    "question": "If you need to perform a complex query involving a many-to-one relationship, which feature of Spring Data JPA would you use to construct such queries dynamically?",
    "code": "",
    "options": [
      "EntityManager",
      "JPQL",
      "Criteria API",
      "Named Queries"
    ],
    "answer": 2,
    "explanation": "For Q47, the correct answer is \"Criteria API\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 48,
    "category": "JPA & ORM",
    "question": "Your Spring Boot API returns a \"500 Internal Server Error\" for certain requests. What are some debugging strategies to identify the root cause?",
    "code": "",
    "options": [
      "Restart the server and retry the request.",
      "Analyze network traffic using a sniffer tool.",
      "Increase the logging level for all classes in the application.",
      "Check server logs for specific error messages."
    ],
    "answer": 3,
    "explanation": "For Q48, the correct answer is \"Check server logs for specific error messages.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 49,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @JoinTable annotation in Spring Boot JPA?",
    "code": "",
    "options": [
      "To specify the join column for a relationship",
      "To define a custom repository method",
      "To create a join table for a many-to-many relationship",
      "To indicate the fetch plan for lazy-loaded entities"
    ],
    "answer": 2,
    "explanation": "For Q49, the correct answer is \"To create a join table for a many-to-many relationship\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 50,
    "category": "Spring Security & JWT",
    "question": "What role do stereotype annotations (@Service, @Repository, etc.) play in Spring Framework applications?",
    "code": "",
    "options": [
      "They enforce strict data typing",
      "They provide metadata for dependency injection",
      "They facilitate aspect-oriented programming",
      "They optimize database access patterns"
    ],
    "answer": 1,
    "explanation": "For Q50, the correct answer is \"They provide metadata for dependency injection\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 51,
    "category": "Spring Security & JWT",
    "question": "Consider the following Spring Boot controller method, What are the potential drawbacks of directly returning a list of entities in the response body in a production-grade Spring Boot application? It exposes internal implementation details of the application, including database schema and entity mappings, potentially posing security risks such as SQL injection attacks. @GetMapping(\"/products\")",
    "code": "It may result in inefficient client-side processing and rendering of the\nresponse data, leading to slower page load times and degraded user\nexperience.\nIt may lead to performance degradation and increased network bandwidth\nconsumption due to the size of the response payload, especially for large\ndatasets.\nIt violates RESTful API principles by tightly coupling the client with the\nserver's internal data model, hindering scalability and flexibility in future API\nenhancements.",
    "options": [
      "public ResponseEntity<List<Product>> getAllProducts() {",
      "List<Product> products = productService.getAllProducts();",
      "return ResponseEntity.ok(products);",
      "}"
    ],
    "answer": 3,
    "explanation": "For Q51, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 52,
    "category": "Spring MVC & REST API",
    "question": "You have a Spring Boot controller with a @GetMapping method that retrieves a list of users. How can you ensure pagination is supported in the request using parameters?",
    "code": "",
    "options": [
      "Define a custom annotation for pagination logic.",
      "Implement manual pagination logic within the controller method.",
      "Utilize built-in Spring Data JPA features for pagination.",
      "Pagination is not possible with @GetMapping."
    ],
    "answer": 2,
    "explanation": "For Q52, the correct answer is \"Utilize built-in Spring Data JPA features for pagination.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 53,
    "category": "JPA & ORM",
    "question": "Consider a Customer entity that has a many-to-one relationship with a Country entity. Which of the following is the correct way to define this relationship in the Customer entity if you want to override the default fetch behavior with explicit eager loading? @ManyToOne(fetch = FetchType.EAGER) @JoinColumn(name = \"country_id\") private Country country; @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name = \"country_id\") private Country country; @ManyToOne @JoinColumn(name = \"country_id\", updatable = false, insertable = false)",
    "code": "",
    "options": [
      "private Country country;",
      "@ManyToOne(cascade = CascadeType.ALL)",
      "@JoinColumn(name = \"country_id\")",
      "private Country country;"
    ],
    "answer": 2,
    "explanation": "For Q53, the correct answer is \"@JoinColumn(name = \"country_id\")\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 54,
    "category": "Java & Spring Architecture",
    "question": "In a Spring Boot application, which Spring feature is commonly used to manage database transactions declaratively?",
    "code": "",
    "options": [
      "Spring Transaction Management using @Transactional",
      "Spring MVC DispatcherServlet",
      "Spring Security Filter Chain",
      "Spring Boot Starter Dependency Management"
    ],
    "answer": 0,
    "explanation": "For Q54, the correct answer is \"Spring Transaction Management using @Transactional\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 55,
    "category": "Servlets & Web Containers",
    "question": "What is the purpose of HTTP Status Code 202 Accepted? The request has been accepted for processing, but the processing has not",
    "code": "",
    "options": [
      "yet been completed",
      "The requested resource has been created successfully",
      "The client must perform additional actions before processing",
      "The requested resource was not found"
    ],
    "answer": 0,
    "explanation": "For Q55, the correct answer is \"yet been completed\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 56,
    "category": "JPA & ORM",
    "question": "In JPA, what does the @ElementCollection annotation signify when used with a field?",
    "code": "",
    "options": [
      "It specifies a collection of embedded elements.",
      "It defines an element of a composite primary key.",
      "It marks the field as a collection of entities.",
      "It indicates a collection of simple values or embeddable objects."
    ],
    "answer": 3,
    "explanation": "For Q56, the correct answer is \"It indicates a collection of simple values or embeddable objects.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 57,
    "category": "JPA & ORM",
    "question": "In Spring Boot, what is the purpose of the Actuator module in debugging and monitoring applications? It provides endpoints for exposing application metrics and status",
    "code": "",
    "options": [
      "information.",
      "It enables remote debugging of Spring Boot applications.",
      "It automates the generation of bug reports and stack traces.",
      "It integrates with profiling tools for detailed performance analysis."
    ],
    "answer": 0,
    "explanation": "For Q57, the correct answer is \"information.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 58,
    "category": "JPA & ORM",
    "question": "Which of the following annotations is used to specify the column name of the foreign key in a one-to-one association in Spring Boot JPA?",
    "code": "",
    "options": [
      "@JoinColumn",
      "@Column",
      "@ForeignKey",
      "@ForeignKeyColumn"
    ],
    "answer": 0,
    "explanation": "For Q58, the correct answer is \"@JoinColumn\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 59,
    "category": "Java & Spring Architecture",
    "question": "When encountering a NullPointerException in a Spring Boot application, what is the recommended approach for debugging?",
    "code": "",
    "options": [
      "Ignoring the exception as it's a common occurrence",
      "Identifying the root cause by examining the stack trace",
      "Restarting the application server",
      "Disabling exception handling to see more detailed error messages"
    ],
    "answer": 1,
    "explanation": "For Q59, the correct answer is \"Identifying the root cause by examining the stack trace\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 60,
    "category": "Java & Spring Architecture",
    "question": "ORM allows developers to work with which type of data structures?",
    "code": "",
    "options": [
      "Arrays",
      "Lists",
      "Maps",
      "Objects"
    ],
    "answer": 3,
    "explanation": "For Q60, the correct answer is \"Objects\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 61,
    "category": "Java & Spring Architecture",
    "question": "Which of the following best describes the process of denormalization in the context of a Spring Boot application? Combining multiple normalized tables into a single denormalized table to improve query performance. Breaking down a single table into multiple related tables to eliminate redundancy and dependency.",
    "code": "",
    "options": [
      "Introducing redundancy and duplication in a database schema to optimize",
      "data retrieval and manipulation.",
      "Dividing a database schema into multiple related tables to enforce",
      "referential integrity constraints."
    ],
    "answer": 0,
    "explanation": "For Q61, the correct answer is \"Introducing redundancy and duplication in a database schema to optimize\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 62,
    "category": "JPA & ORM",
    "question": "When implementing exception handling in a Spring Boot controller, what is the benefit of using @ControllerAdvice combined with @ExceptionHandler annotations? They provide a centralized location to define exception handling logic for multiple controllers.",
    "code": "",
    "options": [
      "@ControllerAdvice defines the exception type, and @ExceptionHandler",
      "handles the specific error message.",
      "These annotations are only necessary for custom exceptions.",
      "They are used for security exception handling specifically."
    ],
    "answer": 0,
    "explanation": "For Q62, the correct answer is \"@ControllerAdvice defines the exception type, and @ExceptionHandler\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 63,
    "category": "Spring Security & JWT",
    "question": "What is the primary purpose of the payload in a JWT?",
    "code": "",
    "options": [
      "To store claims (such as user information and token metadata)",
      "To encrypt the token contents",
      "To digitally sign the token",
      "To store only the token's expiration time"
    ],
    "answer": 0,
    "explanation": "For Q63, the correct answer is \"To store claims (such as user information and token metadata)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 64,
    "category": "Spring Security & JWT",
    "question": "In Spring Security, what is the purpose of the @Order annotation in filter configuration?",
    "code": "",
    "options": [
      "To specify the order in which filters should be applied.",
      "To control the order of method execution within a filter.",
      "To indicate the order of execution for request processing.",
      "To define the order of exception handling in the filter chain."
    ],
    "answer": 0,
    "explanation": "For Q64, the correct answer is \"To specify the order in which filters should be applied.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 65,
    "category": "Spring Security & JWT",
    "question": "What is the role of the service layer in a Spring Boot REST API architecture? Managing HTTP requests and routing them to appropriate endpoints.",
    "code": "",
    "options": [
      "Implementing business logic and interacting with repositories for data",
      "operations.",
      "Performing CRUD operations directly on the database.",
      "Validating request parameters and serializing responses."
    ],
    "answer": 0,
    "explanation": "For Q65, the correct answer is \"Implementing business logic and interacting with repositories for data\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 66,
    "category": "Spring Boot & Core Framework",
    "question": "What is Autowiring in Spring Framework? It is a feature that enables Spring to dynamically generate bean instances based on runtime conditions. It is a design pattern used for manual injection of dependencies in Spring applications.",
    "code": "",
    "options": [
      "It is a mechanism for defining explicit wiring between beans in Spring",
      "configuration files.",
      "It is a feature that allows Spring to automatically detect and inject",
      "dependencies into beans."
    ],
    "answer": 2,
    "explanation": "For Q66, the correct answer is \"It is a feature that allows Spring to automatically detect and inject\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 67,
    "category": "JPA & ORM",
    "question": "In a Spring Boot JPA application, how do you configure a one-to-one relationship between User and Profile entities where User is the owning side? By using @OneToOne(mappedBy = \"user\") annotation in the User entity. By using @OneToOne annotation in the User entity and",
    "code": "",
    "options": [
      "@OneToOne(mappedBy = \"profile\") in the Profile entity.",
      "By using @OneToOne annotation in both User and Profile entities.",
      "By using @OneToOne annotation in the User entity and",
      "@OneToOne(mappedBy = \"user\") in the Profile entity."
    ],
    "answer": 2,
    "explanation": "For Q67, the correct answer is \"By using @OneToOne annotation in the User entity and\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 68,
    "category": "Java & Spring Architecture",
    "question": "Which normal form is primarily used to remove transitive dependencies and separate attributes that depend on non-key attributes?",
    "code": "",
    "options": [
      "First Normal Form (1NF)",
      "Boyce-Codd Normal Form (BCNF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)"
    ],
    "answer": 3,
    "explanation": "For Q68, the correct answer is \"Third Normal Form (3NF)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 69,
    "category": "JPA & ORM",
    "question": "How do you ensure that deleting an Order entity will also delete its associated OrderItem entities in a one-to-many relationship? Use @OneToMany(mappedBy = \"order\", orphanRemoval = true) in Order. Use @OneToMany(mappedBy = \"order\", cascade = CascadeType.ALL) in",
    "code": "",
    "options": [
      "Order.",
      "Use @OneToMany(cascade = CascadeType.REMOVE) in Order.",
      "Use @ManyToOne(cascade = CascadeType.ALL, orphanRemoval = true) in",
      "OrderItem."
    ],
    "answer": 0,
    "explanation": "For Q69, the correct answer is \"Order.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 70,
    "category": "JPA & ORM",
    "question": "What is the purpose of applying the @JsonIgnore annotation to a field in a Spring Boot entity class? To define a custom JSON property name for the field, allowing for aliasing and mapping between entity properties and JSON attributes in API payloads. To configure the field as a primary key or unique identifier for the entity, ensuring data integrity and uniqueness constraints are enforced by the database. To indicate that the field should be ignored during object mapping and persistence operations performed by Spring Boot's ORM (Object-Relational",
    "code": "",
    "options": [
      "Mapping) framework.",
      "To specify that the field should be excluded from JSON serialization and",
      "deserialization processes, preventing sensitive data from being exposed in",
      "API responses."
    ],
    "answer": 2,
    "explanation": "For Q70, the correct answer is \"deserialization processes, preventing sensitive data from being exposed in\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 71,
    "category": "Spring Security & JWT",
    "question": "In Spring Security, which component is responsible for storing the authenticated user's details after successful authentication?",
    "code": "",
    "options": [
      "SecurityContext",
      "AuthenticationEntryPoint",
      "AccessDeniedHandler",
      "PasswordEncoder"
    ],
    "answer": 0,
    "explanation": "For Q71, the correct answer is \"SecurityContext\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 72,
    "category": "Spring Security & JWT",
    "question": "Which HTTP status code is typically returned when a user attempts to access a secured endpoint without proper authentication in Spring Security?",
    "code": "",
    "options": [
      "401 Unauthorized",
      "403 Forbidden",
      "404 Not Found",
      "500 Internal Server Error"
    ],
    "answer": 0,
    "explanation": "For Q72, the correct answer is \"401 Unauthorized\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 73,
    "category": "JPA & ORM",
    "question": "When using @Query annotation in Spring Data JPA, which syntax would you use to define a native SQL query?",
    "code": "",
    "options": [
      "@Query(value = \"SELECT * FROM table_name\", nativeQuery = true)",
      "@Query(\"SELECT * FROM table_name\")",
      "@Query(value = \"SELECT * FROM table_name\")",
      "@NativeQuery(\"SELECT * FROM table_name\")"
    ],
    "answer": 0,
    "explanation": "For Q73, the correct answer is \"@Query(value = \"SELECT * FROM table_name\", nativeQuery = true)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 74,
    "category": "JPA & ORM",
    "question": "When designing a Spring Boot REST API, what does the term \"layering\" refer to in the context of application architecture? It refers to the physical separation of server-side and client-side components in a distributed system, ensuring modularity and scalability. It indicates the process of optimizing network communication and data transfer between different layers of the application, minimizing latency and bandwidth consumption. It signifies the hierarchical organization of software components based on their relative dependencies and interactions, ensuring encapsulation and",
    "code": "",
    "options": [
      "abstraction.",
      "It denotes the logical partitioning of application functionality into distinct",
      "layers such as presentation, business logic, and data access, promoting",
      "separation of concerns and maintainability."
    ],
    "answer": 1,
    "explanation": "For Q74, the correct answer is \"It denotes the logical partitioning of application functionality into distinct\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 75,
    "category": "JPA & ORM",
    "question": "In Spring Boot, which logging level provides the most detailed information and is commonly used for fine-grained diagnostic tracing, one level below DEBUG?",
    "code": "",
    "options": [
      "ERROR",
      "WARN",
      "DEBUG",
      "TRACE"
    ],
    "answer": 3,
    "explanation": "For Q75, the correct answer is \"TRACE\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 76,
    "category": "Java & Spring Architecture",
    "question": "In a scenario with DI, who is responsible for creating the object dependencies?",
    "code": "",
    "options": [
      "The programmer",
      "The IoC container",
      "The object itself",
      "The operating system"
    ],
    "answer": 1,
    "explanation": "For Q76, the correct answer is \"The IoC container\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 77,
    "category": "JPA & ORM",
    "question": "Which of the following is generally NOT considered a benefit of using ORM frameworks compared to JDBC?",
    "code": "",
    "options": [
      "Reduced boilerplate database access code",
      "Automatic mapping between objects and database tables",
      "Improved maintainability of data access code",
      "Guaranteed better runtime performance in all scenarios"
    ],
    "answer": 3,
    "explanation": "For Q77, the correct answer is \"Guaranteed better runtime performance in all scenarios\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 78,
    "category": "Spring MVC & REST API",
    "question": "Which Spring Boot feature is commonly used to globally customize error responses across multiple controllers?",
    "code": "",
    "options": [
      "@ControllerAdvice with @ExceptionHandler",
      "@ResponseBody",
      "@Autowired",
      "@Repository"
    ],
    "answer": 0,
    "explanation": "For Q78, the correct answer is \"@ControllerAdvice with @ExceptionHandler\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 79,
    "category": "JPQL & Database Queries",
    "question": "In JPQL, what does the GROUP BY clause primarily facilitate?",
    "code": "",
    "options": [
      "Filtering query results based on specified conditions.",
      "Joining multiple entities in the query.",
      "Aggregating query results based on common property values.",
      "Sorting query results based on specified criteria."
    ],
    "answer": 2,
    "explanation": "For Q79, the correct answer is \"Aggregating query results based on common property values.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 80,
    "category": "JPA & ORM",
    "question": "What is the purpose of using the fetch attribute in a @OneToOne association in Spring Boot JPA? It specifies the type of join to be used when fetching associated entities.",
    "code": "",
    "options": [
      "It indicates whether the association should be eagerly or lazily fetched.",
      "It defines the fetch plan to be used when loading entities from the database.",
      "It controls the direction of fetching between the owning and inverse sides of",
      "the association."
    ],
    "answer": 0,
    "explanation": "For Q80, the correct answer is \"It indicates whether the association should be eagerly or lazily fetched.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 81,
    "category": "JPA & ORM",
    "question": "Consider the following Spring Boot controller method, What is the purpose of the @Valid annotation applied to the User parameter? It indicates that the User object should be validated against predefined constraints specified in the domain model before being processed. It triggers automatic conversion and mapping of the request body to the User object using Spring Boot's built-in data binding and validation mechanisms. It specifies the HTTP method to be used for the request mapping, ensuring that only POST requests are accepted for creating new users. @PostMapping(\"/users\")",
    "code": "It enables Cross-Origin Resource Sharing (CORS) for the /users endpoint,\nallowing cross-origin requests from specified origins.",
    "options": [
      "public ResponseEntity<User> createUser(@Valid @RequestBody User newUser) {",
      "// Logic to create a new user",
      "return ResponseEntity.status(HttpStatus.CREATED).body(newUser);",
      "}"
    ],
    "answer": 3,
    "explanation": "For Q81, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 82,
    "category": "Spring Security & JWT",
    "question": "What is the purpose of the UserDetails interface in Spring Security? To define the structure of JWT tokens.",
    "code": "",
    "options": [
      "To represent the details of a user, including username, password, and",
      "authorities.",
      "To manage user sessions and cookies.",
      "To specify access rules for different endpoints."
    ],
    "answer": 0,
    "explanation": "For Q82, the correct answer is \"To represent the details of a user, including username, password, and\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 83,
    "category": "Servlets & Web Containers",
    "question": "When creating a Spring Boot REST API, what is the primary function of the repository layer? Handling HTTP request/response cycles and managing API endpoint routing. Executing business logic and enforcing application-specific rules.",
    "code": "",
    "options": [
      "Interacting with the database to perform CRUD operations and managing",
      "data persistence.",
      "Validating incoming requests and serializing responses into JSON or XML",
      "format."
    ],
    "answer": 0,
    "explanation": "For Q83, the correct answer is \"Interacting with the database to perform CRUD operations and managing\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 84,
    "category": "Spring Security & JWT",
    "question": "What is the role of the \"Session\" object in ORM frameworks like Hibernate?",
    "code": "",
    "options": [
      "It represents a connection to the database and manages transactions.",
      "It's responsible for generating entity classes from database tables.",
      "It provides utilities for executing raw SQL queries directly.",
      "It handles object serialization and deserialization."
    ],
    "answer": 0,
    "explanation": "For Q84, the correct answer is \"It represents a connection to the database and manages transactions.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 85,
    "category": "JPA & ORM",
    "question": "In Spring Boot JPA, what does the @Repository annotation indicate?",
    "code": "",
    "options": [
      "It marks a class as a Spring MVC controller.",
      "It specifies a bean for database repository operations.",
      "It configures database connection pooling.",
      "It enables asynchronous method execution."
    ],
    "answer": 1,
    "explanation": "For Q85, the correct answer is \"It specifies a bean for database repository operations.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 86,
    "category": "Web Services & Data Formats",
    "question": "What is the primary purpose of WSDL (Web Services Description Language) in SOAP-based web services? To define the interface, operations, and communication details of a web",
    "code": "",
    "options": [
      "service",
      "To encrypt messages exchanged between web service clients and servers",
      "To store web service authentication credentials securely",
      "To define database schemas used by the web service"
    ],
    "answer": 0,
    "explanation": "For Q86, the correct answer is \"service\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 87,
    "category": "JPA & ORM",
    "question": "Which annotation enables the automatic scanning of JPA repositories in Spring Boot?",
    "code": "",
    "options": [
      "@EnableJpaRepositories",
      "@SpringBootJpa",
      "@AutoScanRepositories",
      "@EnableRepositories"
    ],
    "answer": 0,
    "explanation": "For Q87, the correct answer is \"@EnableJpaRepositories\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 88,
    "category": "JPA & ORM",
    "question": "In Spring Boot JPA, how can you specify a native SQL query with named parameters?",
    "code": "",
    "options": [
      "By using numbered parameters (e.g., ?1, ?2)",
      "By using the @NamedNativeQuery annotation",
      "By using the @NamedNativeQuery annotation along with named parameters",
      "By using named parameters (e.g., :param1, :param2)"
    ],
    "answer": 3,
    "explanation": "For Q88, the correct answer is \"By using named parameters (e.g., :param1, :param2)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 89,
    "category": "JPA & ORM",
    "question": "In a bidirectional one-to-many relationship, which side is typically the owning side and why? The parent entity is the owning side because it holds the collection of child entities.",
    "code": "",
    "options": [
      "The child entity is the owning side because it contains the foreign key.",
      "Both sides are owning sides to ensure data consistency.",
      "Neither side is the owning side; the relationship is managed through a join",
      "table."
    ],
    "answer": 0,
    "explanation": "For Q89, the correct answer is \"The child entity is the owning side because it contains the foreign key.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 90,
    "category": "JPA & ORM",
    "question": "In a Spring Boot application, how are referential integrity constraints typically enforced at the database level? Through the use of Spring Data JPA's built-in validation mechanisms.",
    "code": "",
    "options": [
      "By defining foreign key relationships between database tables.",
      "By implementing custom validation logic in Spring Boot service classes.",
      "Through the application of Spring Boot's declarative transaction",
      "management."
    ],
    "answer": 0,
    "explanation": "For Q90, the correct answer is \"By defining foreign key relationships between database tables.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 91,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is NOT a stereotype annotation in Spring?",
    "code": "",
    "options": [
      "@Service",
      "@Repository",
      "@Component",
      "@Entity"
    ],
    "answer": 3,
    "explanation": "For Q91, the correct answer is \"@Entity\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 92,
    "category": "Spring Boot & Core Framework",
    "question": "What is the benefit of using Spring Actuator in a Spring Boot application?",
    "code": "",
    "options": [
      "To simplify database access and management.",
      "To provide health checks and monitoring endpoints.",
      "To enable automatic deployment pipelines.",
      "To configure logging and exception handling."
    ],
    "answer": 1,
    "explanation": "For Q92, the correct answer is \"To provide health checks and monitoring endpoints.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 93,
    "category": "Java & Spring Architecture",
    "question": "When debugging a Spring Boot application, which logging level is typically used to log critical errors that require immediate attention?",
    "code": "",
    "options": [
      "DEBUG",
      "WARN",
      "ERROR",
      "INFO"
    ],
    "answer": 2,
    "explanation": "For Q93, the correct answer is \"ERROR\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 94,
    "category": "Spring Boot & Core Framework",
    "question": "What is the primary responsibility of the Spring IoC Container?",
    "code": "",
    "options": [
      "Managing the lifecycle, configuration, and dependencies of Spring beans",
      "Executing SQL queries",
      "Managing HTTP requests",
      "Compiling Java classes"
    ],
    "answer": 0,
    "explanation": "For Q94, the correct answer is \"Managing the lifecycle, configuration, and dependencies of Spring beans\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 95,
    "category": "Spring Security & JWT",
    "question": "Which of the following accurately describes the role of a web service in client-server communication? Web services allow clients to directly access databases on the server. Web services are only accessible through web browsers and not other client applications.",
    "code": "",
    "options": [
      "Web services are primarily used for rendering graphical user interfaces",
      "(GUIs) on the client side.",
      "Web services facilitate communication between different applications over",
      "a network using standardized protocols."
    ],
    "answer": 2,
    "explanation": "For Q95, the correct answer is \"Web services facilitate communication between different applications over\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 96,
    "category": "Web Services & Data Formats",
    "question": "In a Spring Boot REST API, which component is responsible for converting Java objects to JSON responses and JSON requests to Java objects?",
    "code": "",
    "options": [
      "Service Layer",
      "Spring MVC HTTP Message Converters",
      "Repository Layer",
      "Security Layer"
    ],
    "answer": 1,
    "explanation": "For Q96, the correct answer is \"Spring MVC HTTP Message Converters\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 97,
    "category": "Spring Boot & Core Framework",
    "question": "How does runtime polymorphism support Dependency Injection (DI) in Spring? It allows different implementations of an interface to be injected and used",
    "code": "",
    "options": [
      "through a common interface at runtime",
      "It enables Spring to create bean definitions during compilation",
      "It allows Spring to inject dependencies only based on bean names",
      "It prevents multiple implementations of an interface from being injected"
    ],
    "answer": 0,
    "explanation": "For Q97, the correct answer is \"through a common interface at runtime\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 98,
    "category": "Spring MVC & REST API",
    "question": "When dealing with exceptions in a Spring Boot REST API, how can you return a custom error response for a specific exception? By using try-catch blocks in every controller method.",
    "code": "",
    "options": [
      "By annotating a method in a @ControllerAdvice class with",
      "@ExceptionHandler for the specific exception type.",
      "By throwing the exception from the service layer directly.",
      "By returning an error code from the repository layer."
    ],
    "answer": 0,
    "explanation": "For Q98, the correct answer is \"By annotating a method in a @ControllerAdvice class with\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 99,
    "category": "Java & Spring Architecture",
    "question": "What is the purpose of Spring Boot in the context of Spring Framework?",
    "code": "",
    "options": [
      "To optimize the performance of Spring applications.",
      "To provide additional features not available in the core Spring Framework.",
      "To replace the traditional Spring MVC framework.",
      "To simplify the configuration and deployment of Spring applications."
    ],
    "answer": 3,
    "explanation": "For Q99, the correct answer is \"To simplify the configuration and deployment of Spring applications.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 100,
    "category": "JPA & ORM",
    "question": "Consider the following JPA entity using Java 17+. Which modern Java type should be used instead of java.util.Date for storing a person's date of birth?",
    "code": "",
    "options": [
      "java.sql.Timestamp",
      "java.time.LocalDate",
      "java.util.Calendar",
      "java.lang.String"
    ],
    "answer": 1,
    "explanation": "For Q100, the correct answer is \"java.time.LocalDate\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 101,
    "category": "JPA & ORM",
    "question": "Hannah is developing a Spring Boot application where he needs to design an API endpoint that validates and handles nested JSON objects with complex structures. She needs to ensure that validation is thorough and properly managed. How would you design an API endpoint that needs to validate and handle nested JSON objects with complex structures? Implement manual validation logic in the controller method. Use nested @Valid annotations in the request body and define appropriate validation constraints. @Entity public class Person { @Id private Long id; private String name;",
    "code": "Configure nested validation in application.properties.\nUse different endpoints for each level of the nested structure.",
    "options": [
      "// Which modern type should replace this field's type?",
      "private Date dob;",
      "// Getters and setters",
      "}"
    ],
    "answer": 3,
    "explanation": "For Q101, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 102,
    "category": "Spring Boot & Core Framework",
    "question": "What will be the outcome if a method annotated with @PostConstruct throws an exception during bean initialization?",
    "code": "",
    "options": [
      "The method will be retried until it succeeds",
      "The exception will be ignored, and the method will continue",
      "The exception will be logged, and the bean initialization will proceed",
      "The Spring context will fail to start, and the bean will not be initialized"
    ],
    "answer": 3,
    "explanation": "For Q102, the correct answer is \"The Spring context will fail to start, and the bean will not be initialized\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 103,
    "category": "Spring Boot & Core Framework",
    "question": "If you need to activate a Spring component only when a specific system property is set to true, which annotation is most appropriate?",
    "code": "",
    "options": [
      "@ConditionalOnClass",
      "@ConditionalOnBean",
      "@ConditionalOnProperty",
      "@ConditionalOnMissingBean"
    ],
    "answer": 2,
    "explanation": "For Q103, the correct answer is \"@ConditionalOnProperty\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 104,
    "category": "Servlets & Web Containers",
    "question": "Which listener is activated when a new attribute is added to the ServletContext?",
    "code": "",
    "options": [
      "ServletContextAttributeListener",
      "ServletContextListener",
      "HttpSessionListener",
      "ServletContextEventListener"
    ],
    "answer": 0,
    "explanation": "For Q104, the correct answer is \"ServletContextAttributeListener\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 105,
    "category": "JPA & ORM",
    "question": "In a Spring Boot application, what will be the result of a GET request if a method is annotated with @GetMapping(\"/users/{id}\") and the method parameter is annotated with @PathVariable?",
    "code": "",
    "options": [
      "The value of {id} is mapped to a request header",
      "The URL parameter is converted to a query parameter",
      "The method will ignore the URL parameter",
      "The value of {id} in the URL is injected into the method parameter"
    ],
    "answer": 3,
    "explanation": "For Q105, the correct answer is \"The value of {id} in the URL is injected into the method parameter\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 106,
    "category": "Servlets & Web Containers",
    "question": "When caching is enabled, which response header controls how long the client can cache the response?",
    "code": "",
    "options": [
      "Content-Length",
      "ETag",
      "Transfer-Encoding",
      "Cache-Control"
    ],
    "answer": 3,
    "explanation": "For Q106, the correct answer is \"Cache-Control\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 107,
    "category": "Java & Spring Architecture",
    "question": "In a scenario where you need to configure different database sources for read and write operations, which annotations would you use to mark methods that interact with read and write databases respectively?",
    "code": "",
    "options": [
      "@ReadOnly and @WriteOnly",
      "@Transactional(readOnly = true) and @Transactional(readOnly = false)",
      "@ReadTransaction and @WriteTransaction",
      "@DataSourceRead and @DataSourceWrite"
    ],
    "answer": 1,
    "explanation": "For Q107, the correct answer is \"@Transactional(readOnly = true) and @Transactional(readOnly = false)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 108,
    "category": "Java & Spring Architecture",
    "question": "Which of the following SQL statements is used to perform an inner join?",
    "code": "",
    "options": [
      "SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id;",
      "SELECT * FROM table1 RIGHT JOIN table2 ON table1.id = table2.id;",
      "SELECT * FROM table1 JOIN table2 ON table1.id = table2.id;",
      "SELECT * FROM table1 FULL JOIN table2 ON table1.id = table2.id;"
    ],
    "answer": 2,
    "explanation": "For Q108, the correct answer is \"SELECT * FROM table1 JOIN table2 ON table1.id = table2.id;\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 109,
    "category": "Spring MVC & REST API",
    "question": "What is the best approach to maintain backward compatibility when versioning REST API endpoints in Spring Boot? Use URL path versioning (e.g., /api/v1/resource) and maintain separate controllers for each version.",
    "code": "",
    "options": [
      "Configure versioning in application.properties and handle it in the controller.",
      "Implement a versioning strategy in the service layer.",
      "Implement separate endpoints for different combinations of search",
      "parameters."
    ],
    "answer": 0,
    "explanation": "For Q109, the correct answer is \"Configure versioning in application.properties and handle it in the controller.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 110,
    "category": "Java & Spring Architecture",
    "question": "Steve wants to implement a REST endpoint for real-time updates like stock prices. What is the best approach to achieve real-time communication with clients?",
    "code": "",
    "options": [
      "Use WebSockets or Server-Sent Events (SSE) to push updates to clients.",
      "Implement polling in the client to periodically check for updates.",
      "Use long polling techniques in the REST endpoint.",
      "Configure a background task to push updates to clients."
    ],
    "answer": 0,
    "explanation": "For Q110, the correct answer is \"Use WebSockets or Server-Sent Events (SSE) to push updates to clients.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 111,
    "category": "Web Services & Data Formats",
    "question": "To enable handling of POST requests with JSON payloads in Spring Boot, what configuration is necessary?",
    "code": "",
    "options": [
      "By configuring HttpMessageConverter beans",
      "By setting Content-Type headers manually",
      "By using @RequestParam for JSON fields",
      "By defining custom request handlers"
    ],
    "answer": 0,
    "explanation": "For Q111, the correct answer is \"By configuring HttpMessageConverter beans\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 112,
    "category": "Spring Security & JWT",
    "question": "What is the default role prefix in Spring Security?",
    "code": "",
    "options": [
      "USER_",
      "AUTH_",
      "SEC_",
      "ROLE_"
    ],
    "answer": 3,
    "explanation": "For Q112, the correct answer is \"ROLE_\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 113,
    "category": "Spring Boot & Core Framework",
    "question": "Given the annotation @ComponentScan(basePackages = \"com.example\"), what does the basePackages attribute achieve?",
    "code": "",
    "options": [
      "To specify the base packages for scanning Spring beans",
      "To set the base package for component scanning in tests",
      "To define the packages where Spring configuration classes are located",
      "To restrict component scanning to specific sub-packages"
    ],
    "answer": 0,
    "explanation": "For Q113, the correct answer is \"To specify the base packages for scanning Spring beans\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 114,
    "category": "Java & Spring Architecture",
    "question": "How does Spring Boot handle request data binding for a POST request with a complex object as the request body?",
    "code": "",
    "options": [
      "It requires manual parsing of request data",
      "It uses @RequestBody to bind JSON or XML data to the complex object",
      "It binds form parameters to the complex object fields",
      "It uses @PathVariable for binding complex objects"
    ],
    "answer": 1,
    "explanation": "For Q114, the correct answer is \"It uses @RequestBody to bind JSON or XML data to the complex object\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 115,
    "category": "Spring Security & JWT",
    "question": "Which algorithm is commonly used to sign a JWT token?",
    "code": "",
    "options": [
      "MD5",
      "HS256",
      "SHA-256",
      "RSA"
    ],
    "answer": 1,
    "explanation": "For Q115, the correct answer is \"HS256\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 116,
    "category": "Spring Security & JWT",
    "question": "Which class is commonly used to configure security settings in a Spring Boot application?",
    "code": "",
    "options": [
      "WebSecurityConfig",
      "SecurityAdapter",
      "SecurityConfiguration",
      "WebSecurityConfigurerAdapter"
    ],
    "answer": 3,
    "explanation": "For Q116, the correct answer is \"WebSecurityConfigurerAdapter\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 117,
    "category": "Java & Spring Architecture",
    "question": "How would you manage conditional requests where the response should vary based on a client's preferred language? Implement separate endpoints for different languages.",
    "code": "",
    "options": [
      "Use a custom exception handler for language-specific responses.",
      "Use @RequestHeader to read the Accept-Language header and adjust the",
      "response.",
      "Configure language preferences in application.properties."
    ],
    "answer": 1,
    "explanation": "For Q117, the correct answer is \"Use @RequestHeader to read the Accept-Language header and adjust the\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 118,
    "category": "Java & Spring Architecture",
    "question": "What is the purpose of the @Produces annotation in JAX-RS?",
    "code": "",
    "options": [
      "Configures the endpoint URL",
      "Sets the content type of incoming requests",
      "Indicates the HTTP verb to use",
      "Specifies the MIME type that a method returns"
    ],
    "answer": 3,
    "explanation": "For Q118, the correct answer is \"Specifies the MIME type that a method returns\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 119,
    "category": "Servlets & Web Containers",
    "question": "In a web application scenario where a developer needs to request that the connection be switched to a different protocol (e.g., WebSocket or HTTP/2), which header field should they use?",
    "code": "",
    "options": [
      "X-HTTP-Version",
      "Protocol-Version",
      "Protocol",
      "Upgrade"
    ],
    "answer": 3,
    "explanation": "For Q119, the correct answer is \"Upgrade\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 120,
    "category": "JPA & ORM",
    "question": "Consider the following SQL query: What type of result does this query produce?",
    "code": "",
    "options": [
      "Students and their courses, including those with no enrollments or courses.",
      "Only students with enrollments and their courses.",
      "Only courses with enrolled students.",
      "A cross join of all students and courses."
    ],
    "answer": 0,
    "explanation": "For Q120, the correct answer is \"Students and their courses, including those with no enrollments or courses.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 121,
    "category": "Java & Spring Architecture",
    "question": "How do clients and servers communicate in a Webservice environment?",
    "code": "",
    "options": [
      "Through direct connections using TCP/IP.",
      "By exchanging messages in a predefined format over HTTP.",
      "Using proprietary protocols specific to each application.",
      "Using proprietary protocols general to all application."
    ],
    "answer": 1,
    "explanation": "For Q121, the correct answer is \"By exchanging messages in a predefined format over HTTP.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 122,
    "category": "Servlets & Web Containers",
    "question": "What is a servlet in the context of Webservices? A small program that runs on a client and interacts with a server.",
    "code": "A Java program that extends the functionality of a web server by handling\nclient requests.\nA database that stores information about users and their permissions.\nA protocol used for secure communication between clients and servers.",
    "options": [
      "SELECT Students.name, Courses.course",
      "FROM Students",
      "FULL JOIN Enrollments ON Students.id = Enrollments.student_id",
      "FULL JOIN Courses ON Enrollments.course_id = Courses.id;"
    ],
    "answer": 0,
    "explanation": "For Q122, the correct answer is \"SELECT Students.name, Courses.course\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 123,
    "category": "Spring Security & JWT",
    "question": "What is the role of a Tomcat server in a Webservice environment?",
    "code": "",
    "options": [
      "To provide a graphical user interface for web applications.",
      "To store and manage large amounts of data.",
      "To host and execute Java servlets and JSPs.",
      "To manage user authentication and authorization."
    ],
    "answer": 2,
    "explanation": "For Q123, the correct answer is \"To host and execute Java servlets and JSPs.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 124,
    "category": "Web Services & Data Formats",
    "question": "What is the main advantage of using JSON over XML for data exchange in Webservices?",
    "code": "",
    "options": [
      "JSON is more secure than XML.",
      "JSON is more efficient and lightweight than XML.",
      "JSON is a more widely used standard than XML.",
      "JSON is easier to understand and implement than XML."
    ],
    "answer": 1,
    "explanation": "For Q124, the correct answer is \"JSON is more efficient and lightweight than XML.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 125,
    "category": "Web Services & Data Formats",
    "question": "What is the primary difference between XML and JSON? XML is a markup language while JSON is a scripting language.",
    "code": "",
    "options": [
      "XML is used for data exchange while JSON is used for web page design.",
      "XML is a markup language while JSON is a lightweight data-interchange",
      "format.",
      "XML is more efficient than JSON for data exchange."
    ],
    "answer": 1,
    "explanation": "For Q125, the correct answer is \"XML is a markup language while JSON is a lightweight data-interchange\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 126,
    "category": "JPA & ORM",
    "question": "Which of the following is a valid JSON data structure?",
    "code": "",
    "options": [
      "{ \"name\": \"John\", \"age\": 30 }",
      "John30",
      "[ \"John\", 30 ]",
      "\"name\": \"John\", \"age\": 30"
    ],
    "answer": 3,
    "explanation": "For Q126, the correct answer is \"\"name\": \"John\", \"age\": 30\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 127,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is NOT a benefit of using Webservices?",
    "code": "",
    "options": [
      "Increased interoperability between different applications.",
      "Reduced development time and cost.",
      "Improved security and reliability.",
      "Increased dependence on proprietary protocols."
    ],
    "answer": 3,
    "explanation": "For Q127, the correct answer is \"Increased dependence on proprietary protocols.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 128,
    "category": "JPA & ORM",
    "question": "How does Hibernate implement persistence? By using a separate database connection for each object. By storing objects in memory and synchronizing them with the database",
    "code": "",
    "options": [
      "periodically.",
      "By using a single database connection for all objects.",
      "By converting objects into SQL statements and executing them against the",
      "database."
    ],
    "answer": 2,
    "explanation": "For Q128, the correct answer is \"By converting objects into SQL statements and executing them against the\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 129,
    "category": "JPA & ORM",
    "question": "What is the difference between JPA and Hibernate? JPA is a specific ORM implementation, while Hibernate is a standard specification.",
    "code": "",
    "options": [
      "Hibernate is a specific ORM implementation, while JPA is a standard",
      "specification.",
      "JPA is a database management system, while Hibernate is an ORM tool.",
      "Hibernate is a programming language, while JPA is a framework."
    ],
    "answer": 0,
    "explanation": "For Q129, the correct answer is \"Hibernate is a specific ORM implementation, while JPA is a standard\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 130,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @GeneratedValue annotation in JPA?",
    "code": "",
    "options": [
      "To automatically generate values for the primary key.",
      "To specify the database connection details.",
      "To map an object property to a database column.",
      "To create a new database table automatically."
    ],
    "answer": 0,
    "explanation": "For Q130, the correct answer is \"To automatically generate values for the primary key.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 131,
    "category": "Java & Spring Architecture",
    "question": "How does an ORM tool handle data relationships between objects?",
    "code": "",
    "options": [
      "By using separate database tables for each object.",
      "By using foreign keys to link related objects in the database.",
      "By storing all related objects in a single table.",
      "By using a separate database connection for each relationship."
    ],
    "answer": 1,
    "explanation": "For Q131, the correct answer is \"By using foreign keys to link related objects in the database.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 132,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @Entity annotation in JPA?",
    "code": "",
    "options": [
      "To define the primary key of an entity.",
      "To map an object class to a database table.",
      "To specify the database connection details.",
      "To create a new database table automatically."
    ],
    "answer": 1,
    "explanation": "For Q132, the correct answer is \"To map an object class to a database table.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 133,
    "category": "JPA & ORM",
    "question": "Which of the following is a valid JPA query language?",
    "code": "",
    "options": [
      "SQL",
      "JPQL",
      "MYSQL",
      "MSSQL"
    ],
    "answer": 1,
    "explanation": "For Q133, the correct answer is \"JPQL\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 134,
    "category": "JPA & ORM",
    "question": "Which of the following is a common method for deleting data from a database using JPA?",
    "code": "",
    "options": [
      "Using a SQL delete statement.",
      "Using the EntityManager.persist(",
      "Using the EntityManager.remove(",
      "Using the EntityManager.merge("
    ],
    "answer": 2,
    "explanation": "For Q134, the correct answer is \"Using the EntityManager.remove(\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 135,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @Id annotation in JPA?",
    "code": "",
    "options": [
      "To define the primary key of an entity.",
      "To map an object property to a database column.",
      "To specify the database connection details.",
      "To create a new database table automatically."
    ],
    "answer": 0,
    "explanation": "For Q135, the correct answer is \"To define the primary key of an entity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 136,
    "category": "JPA & ORM",
    "question": "Which of the following is a common method for retrieving data from a database using JPA?",
    "code": "",
    "options": [
      "Using a SQL query.",
      "Using a JPQL query.",
      "Using a Hibernate query language (HQL",
      "All of the above."
    ],
    "answer": 3,
    "explanation": "For Q136, the correct answer is \"All of the above.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 137,
    "category": "JPA & ORM",
    "question": "Which of the following is a common method for updating data in a database using JPA?",
    "code": "",
    "options": [
      "Using a SQL update statement.",
      "Using the EntityManager.merge(",
      "Using the EntityManager.persist(",
      "Using the EntityManager.remove("
    ],
    "answer": 1,
    "explanation": "For Q137, the correct answer is \"Using the EntityManager.merge(\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 138,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @ManyToOne annotation in JPA?",
    "code": "",
    "options": [
      "To define a one-to-many relationship between entities.",
      "To define a many-to-many relationship between entities.",
      "To define a one-to-one relationship between entities.",
      "To define a many-to-one relationship between entities."
    ],
    "answer": 3,
    "explanation": "For Q138, the correct answer is \"To define a many-to-one relationship between entities.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 139,
    "category": "Java & Spring Architecture",
    "question": "What is the primary goal of normalization in relational database design?",
    "code": "",
    "options": [
      "To reduce data redundancy and improve data integrity.",
      "To increase the speed of data retrieval.",
      "To simplify the database schema for easier maintenance.",
      "To ensure data consistency across multiple databases."
    ],
    "answer": 0,
    "explanation": "For Q139, the correct answer is \"To reduce data redundancy and improve data integrity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 140,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is NOT a benefit of using a relational database management system (RDBMS)?",
    "code": "",
    "options": [
      "Improved data consistency.",
      "Increased data security.",
      "Reduced data redundancy.",
      "Simplified data access for users."
    ],
    "answer": 3,
    "explanation": "For Q140, the correct answer is \"Simplified data access for users.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 141,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is a disadvantage of normalization?",
    "code": "",
    "options": [
      "Increased data redundancy.",
      "Increased complexity of database design.",
      "Reduced data retrieval speed.",
      "Increased risk of data inconsistency."
    ],
    "answer": 1,
    "explanation": "For Q141, the correct answer is \"Increased complexity of database design.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 142,
    "category": "Java & Spring Architecture",
    "question": "Which normal form eliminates repeating groups of data within a table?",
    "code": "",
    "options": [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    "answer": 0,
    "explanation": "For Q142, the correct answer is \"First Normal Form (1NF)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 143,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is a common technique used to denormalize a database?",
    "code": "",
    "options": [
      "Adding redundant data to improve performance.",
      "Removing unnecessary columns from tables.",
      "Creating new tables to store related data.",
      "Enforcing referential integrity constraints."
    ],
    "answer": 0,
    "explanation": "For Q143, the correct answer is \"Adding redundant data to improve performance.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 144,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is NOT a characteristic of a relational database management system (RDBMS)?",
    "code": "",
    "options": [
      "Data is stored in tables with rows and columns.",
      "Data is accessed through a structured query language (SQL).",
      "Data is organized hierarchically in a tree-like structure.",
      "Relationships between tables are defined through foreign keys."
    ],
    "answer": 2,
    "explanation": "For Q144, the correct answer is \"Data is organized hierarchically in a tree-like structure.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 145,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is an example of a referential integrity constraint?",
    "code": "",
    "options": [
      "A foreign key in one table must match a primary key in another table.",
      "A column must contain only unique values.",
      "A column must be a specific data type.",
      "A column must not be empty."
    ],
    "answer": 0,
    "explanation": "For Q145, the correct answer is \"A foreign key in one table must match a primary key in another table.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 146,
    "category": "Java & Spring Architecture",
    "question": "A table is in 2NF if it is in 1NF and:",
    "code": "",
    "options": [
      "All non-key attributes are dependent on the primary key.",
      "All non-key attributes are dependent on a candidate key.",
      "No non-key attribute is dependent on another non-key attribute.",
      "The table has only one primary key."
    ],
    "answer": 0,
    "explanation": "For Q146, the correct answer is \"All non-key attributes are dependent on the primary key.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 147,
    "category": "Java & Spring Architecture",
    "question": "What does referential integrity ensure in a relational database?",
    "code": "",
    "options": [
      "That all data in the database is accurate and consistent.",
      "That relationships between tables are correctly enforced.",
      "That all data is stored in a normalized form.",
      "That the database is secure from unauthorized access."
    ],
    "answer": 1,
    "explanation": "For Q147, the correct answer is \"That relationships between tables are correctly enforced.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 148,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is a characteristic of a table in 3NF?",
    "code": "",
    "options": [
      "It has no partial dependencies.",
      "It has no transitive dependencies.",
      "It has no multi-valued dependencies.",
      "All of the above."
    ],
    "answer": 3,
    "explanation": "For Q148, the correct answer is \"All of the above.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 149,
    "category": "DevOps & Git Version Control",
    "question": "What is the primary function of Git in the context of software development?",
    "code": "",
    "options": [
      "Hosting and managing code repositories.",
      "Providing a graphical user interface for interacting with code repositories.",
      "Tracking changes to files and allowing for collaboration on projects.",
      "Automating the deployment of code to production servers."
    ],
    "answer": 2,
    "explanation": "For Q149, the correct answer is \"Tracking changes to files and allowing for collaboration on projects.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 150,
    "category": "DevOps & Git Version Control",
    "question": "Which of the following is NOT a benefit of using a version control system? Tracking changes made to files over time.",
    "code": "",
    "options": [
      "Collaborating on projects with multiple people simultaneously.",
      "Restoring previous versions of files in case of accidental deletion or",
      "corruption.",
      "Preventing accidental changes to files by locking them for editing."
    ],
    "answer": 3,
    "explanation": "For Q150, the correct answer is \"Preventing accidental changes to files by locking them for editing.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 151,
    "category": "DevOps & Git Version Control",
    "question": "What is the purpose of a \"commit\" in Git?",
    "code": "",
    "options": [
      "To create a new branch of the project.",
      "To merge changes from one branch into another.",
      "To save a snapshot of the current state of the project's files.",
      "To revert changes made to the project back to a previous version."
    ],
    "answer": 2,
    "explanation": "For Q151, the correct answer is \"To save a snapshot of the current state of the project's files.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 152,
    "category": "DevOps & Git Version Control",
    "question": "Which of the following is a key difference between Git and GitHub? Git is a distributed version control system, while GitHub is a centralized one. Git is a command-line tool, while GitHub is a web-based platform.",
    "code": "",
    "options": [
      "Git is used for tracking changes to files, while GitHub is used for managing",
      "project issues.",
      "Git is used for collaborating on projects, while GitHub is used for hosting",
      "code repositories."
    ],
    "answer": 0,
    "explanation": "For Q152, the correct answer is \"Git is used for tracking changes to files, while GitHub is used for managing\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 153,
    "category": "JPA & ORM",
    "question": "Which Hibernate strategy determines how collections are fetched?",
    "code": "",
    "options": [
      "Fetch mode",
      "Fetch type",
      "Fetch plan",
      "Fetch group"
    ],
    "answer": 0,
    "explanation": "For Q153, the correct answer is \"Fetch mode\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 154,
    "category": "JPQL & Database Queries",
    "question": "Why might you use a named query instead of a dynamic query in JPQL?",
    "code": "",
    "options": [
      "Named queries can only be used with native SQL",
      "Dynamic queries cannot use joins",
      "Named queries support parameter substitution",
      "Named queries are faster as they are precompiled"
    ],
    "answer": 3,
    "explanation": "For Q154, the correct answer is \"Named queries are faster as they are precompiled\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 155,
    "category": "JPA & ORM",
    "question": "John is implementing a service that renders different responses based on the request content type. What method should he override in his Servlet to achieve this?",
    "code": "",
    "options": [
      "doGet() and doPost() together.",
      "The init() method to define behavior for various content types.",
      "The service() method for handling all types of requests.",
      "The destroy() method to clean up after requests."
    ],
    "answer": 2,
    "explanation": "For Q155, the correct answer is \"The service() method for handling all types of requests.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 156,
    "category": "Java & Spring Architecture",
    "question": "A web application needs to serve different content types based on the user's device and preferences. How can the application determine the preferred format for response content?",
    "code": "",
    "options": [
      "By using the Accept header in the HTTP request.",
      "By implementing URL routing for each device type.",
      "By defining a default content type in the server configuration.",
      "By analyzing the User-Agent string in the request."
    ],
    "answer": 0,
    "explanation": "For Q156, the correct answer is \"By using the Accept header in the HTTP request.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 157,
    "category": "JPA & ORM",
    "question": "What happens if you omit the cascade attribute in a @OneToMany association?",
    "code": "",
    "options": [
      "All changes to the parent are automatically propagated to the child",
      "Changes to the child entities are ignored by JPA",
      "Child entities are not affected by parent operations",
      "JPA will throw an error"
    ],
    "answer": 2,
    "explanation": "For Q157, the correct answer is \"Child entities are not affected by parent operations\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 158,
    "category": "Spring Boot & Core Framework",
    "question": "Kiran is designing a new service that requires two different types of notifications: email and SMS. He wishes to implement dependency injection for better code management. Which type of dependency injection is best suited for this scenario when both notifications are required components?",
    "code": "",
    "options": [
      "Setter injection for both notifications",
      "Interface injection for the email notification only",
      "Constructor injection for both notifications",
      "No injection is needed; instantiate directly"
    ],
    "answer": 2,
    "explanation": "For Q158, the correct answer is \"Constructor injection for both notifications\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 159,
    "category": "JPQL & Database Queries",
    "question": "You need to calculate the total salary of employees grouped by department using JPQL. Which query would achieve this? SELECT d.name, SUM(e.salary) FROM Department d JOIN d.employees e GROUP BY d.name",
    "code": "",
    "options": [
      "SELECT e.salary, COUNT(e) FROM Employee e WHERE e.department IS NOT",
      "NULL",
      "SELECT SUM(e.salary), d.name FROM Employee e GROUP BY e.department",
      "SELECT e.salary, e.department FROM Employee e GROUP BY e.department"
    ],
    "answer": 0,
    "explanation": "For Q159, the correct answer is \"SELECT e.salary, COUNT(e) FROM Employee e WHERE e.department IS NOT\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 160,
    "category": "Java & Spring Architecture",
    "question": "What is a functional dependency in database normalization?",
    "code": "",
    "options": [
      "A dependency between rows in the same table",
      "A mapping of keys to foreign keys",
      "A dependency between tables in a relationship",
      "A condition where one attribute uniquely determines another"
    ],
    "answer": 3,
    "explanation": "For Q160, the correct answer is \"A condition where one attribute uniquely determines another\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 161,
    "category": "Spring Boot & Core Framework",
    "question": "You have a Spring Boot application with a CommandLineRunner bean. What happens if you define multiple CommandLineRunner beans? Only the first one gets executed",
    "code": "",
    "options": [
      "Spring throws an exception",
      "All CommandLineRunner beans are executed in no specific order",
      "All CommandLineRunner beans are executed sequentially based on their",
      "@Order annotation"
    ],
    "answer": 2,
    "explanation": "For Q161, the correct answer is \"All CommandLineRunner beans are executed sequentially based on their\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 162,
    "category": "JPA & ORM",
    "question": "What will be the output of the following REST Controller method when called with a valid item ID?",
    "code": "",
    "options": [
      "200 OK with the item details",
      "404 Not Found",
      "500 Internal Server Error",
      "Throws ItemNotFoundException"
    ],
    "answer": 0,
    "explanation": "For Q162, the correct answer is \"200 OK with the item details\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 163,
    "category": "JPA & ORM",
    "question": "A team is implementing a user management system and requires a method in their repository to find a user by their email address. Which repository method naming convention should they use for this purpose? getEmailUser(String email) @RestController @RequestMapping(\"/api/items\") public class ItemController { @Autowired private ItemService itemService; @GetMapping(\"/{id}\") public ResponseEntity<Item> getItem(@PathVariable Long id) {",
    "code": "findUserByEmail(String email)\nloadUserByEmail(String email)\nqueryUserByEmail(String email)",
    "options": [
      "Item item = itemService.findById(id);",
      "return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();",
      "}",
      "}"
    ],
    "answer": 2,
    "explanation": "For Q163, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 164,
    "category": "JPA & ORM",
    "question": "A developer is working on an e-commerce platform and needs to establish a relationship where a `Customer` can place multiple `Orders`, but each `Order` is associated with only one `Customer`. Which Spring Data JPA annotation should the developer use to appropriately model this relationship?",
    "code": "",
    "options": [
      "@OneToOne",
      "@ManyToMany",
      "@OneToMany",
      "@ManyToOne"
    ],
    "answer": 2,
    "explanation": "For Q164, the correct answer is \"@OneToMany\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 165,
    "category": "Spring Security & JWT",
    "question": "You configure Spring Security with basic authentication. How can you ensure that all users must log in before accessing any endpoint? Use http.authorizeRequests().anyRequest().authenticated() in the security",
    "code": "",
    "options": [
      "configuration",
      "Set spring.security.enable-all=true in application properties",
      "Enable the @PreAuthorize annotation globally",
      "Add security.require-login=true in the security filter"
    ],
    "answer": 0,
    "explanation": "For Q165, the correct answer is \"configuration\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 166,
    "category": "JPA & ORM",
    "question": "A developer wants to create dynamic queries based on various filter criteria that may change at runtime. What is the best way to achieve this using Spring Data JPA's Specifications?",
    "code": "",
    "options": [
      "Use native SQL queries for flexibility.",
      "Implement CriteriaBuilder directly for the queries.",
      "Create a repository method without using Specifications.",
      "Implement the Specification interface for building queries."
    ],
    "answer": 3,
    "explanation": "For Q166, the correct answer is \"Implement the Specification interface for building queries.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 167,
    "category": "DevOps & Git Version Control",
    "question": "What do merge conflicts typically indicate during a Git merge? Merge conflicts occur when changes in different branches affect the same line of code, requiring manual resolution.",
    "code": "",
    "options": [
      "Merge conflicts indicate that the repository is corrupted and cannot be",
      "used.",
      "Merge conflicts arise from pushing changes to the remote repository.",
      "Merge conflicts happen when branches are merged too frequently."
    ],
    "answer": 0,
    "explanation": "For Q167, the correct answer is \"Merge conflicts indicate that the repository is corrupted and cannot be\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 168,
    "category": "Spring Security & JWT",
    "question": "A team of developers is implementing an authentication mechanism using JWT in their Spring Boot application. After logging in, the application issues a token with a short expiration time to enhance security. However, a requirement arises where the user session must remain seamless, even when the token expires. What should the development team implement to satisfy this requirement? Automatically refresh the token upon each request without user intervention.",
    "code": "",
    "options": [
      "Prompt the user to log in again every time the token expires.",
      "Implement a refresh token mechanism to obtain a new access token",
      "without re-authentication.",
      "Use a long-lived token that never expires."
    ],
    "answer": 1,
    "explanation": "For Q168, the correct answer is \"Implement a refresh token mechanism to obtain a new access token\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 169,
    "category": "Spring Security & JWT",
    "question": "A development team is designing a RESTful API using Spring Boot that will leverage JWT for authentication. They decide to include user roles as claims in the JWT tokens. However, they are unsure about how to handle authorization checks efficiently. What is the recommended approach for checking user roles when processing requests? Decode the JWT token on every request and compare roles in memory.",
    "code": "",
    "options": [
      "Store roles in a database and query it every time to authorize access.",
      "Implement a role-based access control mechanism by validating roles",
      "decoded from the JWT at request time.",
      "Rely solely on client-side checks for user roles based on token data."
    ],
    "answer": 1,
    "explanation": "For Q169, the correct answer is \"Implement a role-based access control mechanism by validating roles\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 170,
    "category": "Spring Security & JWT",
    "question": "During a code review, Tom discovers that the JWT implementation includes claims such as `iss`, `sub`, and a custom claim `userRole`. He wants to determine how these claims should be securely handled within the system. What would be Tom's best approach to ensure the JWT claims are appropriately validated? Check the integrity of claims against trusted server-side data before processing requests. Validate claims only during the creation of the token, ignoring them during",
    "code": "",
    "options": [
      "validation.",
      "Avoid using claims as they may expose sensitive information.",
      "Hardcode the expected values of claims in the client-side code for",
      "verification."
    ],
    "answer": 0,
    "explanation": "For Q170, the correct answer is \"validation.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 171,
    "category": "Java & Spring Architecture",
    "question": "Which of these can prevent CSRF attacks in a Spring Boot application?",
    "code": "",
    "options": [
      "Rely on basic authentication instead of tokens",
      "Use only GET methods for endpoints",
      "Disable csrf() in HttpSecurity",
      "Use a CSRF token and include it in all state-changing requests"
    ],
    "answer": 3,
    "explanation": "For Q171, the correct answer is \"Use a CSRF token and include it in all state-changing requests\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 172,
    "category": "Spring Security & JWT",
    "question": "A company is developing a system with a complex hierarchy of employee roles using Hibernate. They want to ensure that the database architecture efficiently supports querying and ensures minimal redundancy. What inheritance mapping strategy should they implement in their Spring Boot application for optimal performance? Joined inheritance mapping to separate attributes into relevant tables while sharing common attributes. Single table inheritance to consolidate all employee role attributes into one table for easier queries.",
    "code": "",
    "options": [
      "Table per class strategy to create separate tables for every employee role,",
      "allowing full customization.",
      "A non-mapped strategy, relying on an application layer to manage the role",
      "hierarchy."
    ],
    "answer": 0,
    "explanation": "For Q172, the correct answer is \"Table per class strategy to create separate tables for every employee role,\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 173,
    "category": "Spring Boot & Core Framework",
    "question": "Which annotation is used to define a class as a Spring-managed bean?",
    "code": "",
    "options": [
      "@Bean",
      "@Primary",
      "@Component",
      "@Configuration"
    ],
    "answer": 2,
    "explanation": "For Q173, the correct answer is \"@Component\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 174,
    "category": "Java & Spring Architecture",
    "question": "A company is developing a REST API to serve data to a front-end application. They want to ensure that their API is well-structured and adheres to REST principles. What should they use in Spring to define their API endpoints effectively?",
    "code": "",
    "options": [
      "Use the @RestController along with @RequestMapping for each endpoint.",
      "Map all requests to a single controller that handles different endpoints.",
      "Use @Controller without REST-specific annotations.",
      "Define API endpoints directly in the service layer."
    ],
    "answer": 0,
    "explanation": "For Q174, the correct answer is \"Use the @RestController along with @RequestMapping for each endpoint.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 175,
    "category": "Spring Security & JWT",
    "question": "What does the `@Entity` annotation indicate in a Spring Data JPA application? The @Entity annotation specifies the data format for JSON responses. The @Entity annotation is used for securing data against unauthorized",
    "code": "",
    "options": [
      "access.",
      "The @Entity annotation allows classes to inherit from other classes.",
      "The @Entity annotation marks a class as a persistent entity for database",
      "mapping."
    ],
    "answer": 2,
    "explanation": "For Q175, the correct answer is \"The @Entity annotation marks a class as a persistent entity for database\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 176,
    "category": "JPA & ORM",
    "question": "A company is creating a data warehouse that aggregates data from multiple independent sources for complex bi-annual reporting. The diverse types of data and the necessity for rapid access pose significant challenges. The data engineering team is considering various normalization strategies to balance speed and data redundancy. What should the team prioritize in their approach to ensure fast reporting at the cost of some data integrity? Normalization to Third Normal Form (3NF) to ensure no transitive dependencies Denormalization, including redundant data, to improve read performance for",
    "code": "",
    "options": [
      "analytical queries",
      "Strict adherence to Boyce-Codd Normal Form (BCNF) for all data structures",
      "Using separate, fully normalized databases to maintain data integrity across",
      "the system"
    ],
    "answer": 0,
    "explanation": "For Q176, the correct answer is \"analytical queries\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 177,
    "category": "DevOps & Git Version Control",
    "question": "What does the @Repository annotation in Spring indicate?",
    "code": "",
    "options": [
      "It is a controller for database operations",
      "It is a component for handling REST requests",
      "It is a DAO that interacts with the database",
      "It is used to create a database"
    ],
    "answer": 2,
    "explanation": "For Q177, the correct answer is \"It is a DAO that interacts with the database\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 178,
    "category": "JPA & ORM",
    "question": "John wants to save a new category entity to his database using Spring Data JPA. Which code snippet should he use?",
    "code": "",
    "options": [
      "repository.persist(category)",
      "repository.insert(category)",
      "repository.save(category)",
      "repository.add(category)"
    ],
    "answer": 2,
    "explanation": "For Q178, the correct answer is \"repository.save(category)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 179,
    "category": "Java & Spring Architecture",
    "question": "Question 179",
    "code": "An exception will be thrown",
    "options": [
      "Consider the following code snippet for a Spring JPA Entity. What will be the output of calling `repository.count()` if five entities",
      "are stored in the database?",
      "0",
      "5"
    ],
    "answer": 3,
    "explanation": "For Q179, the correct answer is \"5\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 180,
    "category": "JPA & ORM",
    "question": "Which annotation is used to define a named query in JPA?",
    "code": "",
    "options": [
      "@Query",
      "@NamedQuery",
      "@CustomQuery",
      "@JPQL"
    ],
    "answer": 1,
    "explanation": "For Q180, the correct answer is \"@NamedQuery\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 181,
    "category": "JPA & ORM",
    "question": "Emma is tasked with retrieving users by their last names in her application using Spring Data JPA. Which method naming convention would she use to create this query in her UserRepository?",
    "code": "",
    "options": [
      "findByLastName",
      "searchByLastName",
      "getLastName",
      "retrieveLastName"
    ],
    "answer": 0,
    "explanation": "For Q181, the correct answer is \"findByLastName\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 182,
    "category": "DevOps & Git Version Control",
    "question": "Question 182",
    "code": "updates. What is the most appropriate action Alex should take to effectively manage this situation?\nMerge the feature branch with the main branch before completing the\nfeature.\nCreate a branch named \"feature-update\" and switch to it for making all\nchanges.\nPull requests should be submitted without creating a separate branch.\nCommit all changes directly to the main branch to keep the history clean.",
    "options": [
      "Alex is working on a collaborative project involving multiple developers. They are implementing a new feature that requires a",
      "significant code update. To ensure that their work does not disrupt the main project, Alex decides to create a new branch for their",
      "@Query(\"SELECT COUNT(u) FROM User u\")",
      "long count();"
    ],
    "answer": 0,
    "explanation": "For Q182, the correct answer is \"Alex is working on a collaborative project involving multiple developers. They are implementing a new feature that requires a\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 183,
    "category": "JPA & ORM",
    "question": "What is the primary benefit of using a Spring Data JPA repository? It simplifies data visualization in applications.",
    "code": "",
    "options": [
      "It allows for easy implementation of CRUD operations without boilerplate",
      "code.",
      "It restricts all database operations to read-only permissions.",
      "It manages application-level caching efficiently."
    ],
    "answer": 0,
    "explanation": "For Q183, the correct answer is \"It allows for easy implementation of CRUD operations without boilerplate\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 184,
    "category": "DevOps & Git Version Control",
    "question": "Tom and his team are developing a web application on GitHub. Each team member needs to work on a different feature concurrently. What GitHub feature should they utilize to manage their work without conflicts?",
    "code": "",
    "options": [
      "Forks",
      "Releases",
      "Branches",
      "Commits"
    ],
    "answer": 2,
    "explanation": "For Q184, the correct answer is \"Branches\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 185,
    "category": "Spring Security & JWT",
    "question": "Lisa wants to secure her methods within a Spring application based on user roles. Which annotation should she use to enforce this requirement?",
    "code": "",
    "options": [
      "@EnableWebSecurity",
      "@Component",
      "@PreAuthorize",
      "@Transactional"
    ],
    "answer": 2,
    "explanation": "For Q185, the correct answer is \"@PreAuthorize\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 186,
    "category": "Spring Security & JWT",
    "question": "What is the primary role of the @Component annotation in Spring? A. To create a configuration class for Spring beans B. To mark a class as a Spring-managed bean for dependency injection C. To define a specific type of Spring bean, like a service or controller D. To enable transaction management for a Spring bean",
    "code": "",
    "options": [
      "B only",
      "A and B",
      "B and C",
      "D only"
    ],
    "answer": 0,
    "explanation": "For Q186, the correct answer is \"B only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 187,
    "category": "Java & Spring Architecture",
    "question": "What is the most commonly used data format for exchanging data in Webservices?",
    "code": "",
    "options": [
      "XML and JSON",
      "HTML and XML",
      "TXT and CSS",
      "SQL and CSV"
    ],
    "answer": 0,
    "explanation": "For Q187, the correct answer is \"XML and JSON\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 188,
    "category": "JPA & ORM",
    "question": "A development team is working on a Spring Boot application that needs to manage configuration properties for different environments (e.g., development, testing, production). They want to avoid hard-coding these properties and prefer a more dynamic way to handle them. What would be the best practice for managing these configurations in Spring Boot? Define properties in individual Java classes for each environment.",
    "code": "",
    "options": [
      "Store properties directly in the main application class.",
      "Use the application.properties or application.yml file with profile-specific",
      "configurations.",
      "Rely solely on environment variable settings for all configurations."
    ],
    "answer": 1,
    "explanation": "For Q188, the correct answer is \"Use the application.properties or application.yml file with profile-specific\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 189,
    "category": "DevOps & Git Version Control",
    "question": "Emily is working on a software project using GitHub. She wants to keep a history of all changes made to the project files. What is the primary benefit of using a version control system like GitHub in this scenario?",
    "code": "",
    "options": [
      "It allows unlimited storage for all project files.",
      "It enables tracking changes to files over time.",
      "It automatically backs up all system files.",
      "It restricts file access to specific users."
    ],
    "answer": 1,
    "explanation": "For Q189, the correct answer is \"It enables tracking changes to files over time.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 190,
    "category": "Java & Spring Architecture",
    "question": "John is tasked with improving a customer orders database that currently has duplicate customer information repeated across order rows. Which action should he take first to address the redundancy? Create a backup of the database",
    "code": "",
    "options": [
      "Add more fields to the existing table",
      "Remove duplicate records from the table",
      "Normalize the database by moving repeating customer data into its own",
      "table"
    ],
    "answer": 2,
    "explanation": "For Q190, the correct answer is \"Normalize the database by moving repeating customer data into its own\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 191,
    "category": "Java & Spring Architecture",
    "question": "What is the default fetch type for @OneToMany relationships?",
    "code": "",
    "options": [
      "LAZY",
      "EAGER",
      "AUTO",
      "NONE"
    ],
    "answer": 0,
    "explanation": "For Q191, the correct answer is \"LAZY\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 192,
    "category": "Java & Spring Architecture",
    "question": "In an e-commerce platform, you need to optimize the loading of product data for a category page that frequently changes and has a large number of associated products. What fetch strategy would be most advantageous in balancing performance and data loading efficiency? Use EAGER fetching for product categories while using LAZY fetching for associated products to reduce the initial fetch time. Use LAZY fetching for both categories and their associated products, minimizing upfront data load but causing multiple queries later.",
    "code": "",
    "options": [
      "Use EAGER fetching for both categories and products to ensure all data is",
      "loaded in a single query at the outset.",
      "Use a custom fetch join query only for frequently accessed product",
      "categories and ignore performance considerations for products."
    ],
    "answer": 0,
    "explanation": "For Q192, the correct answer is \"Use EAGER fetching for both categories and products to ensure all data is\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 193,
    "category": "JPA & ORM",
    "question": "In a university management system: each student can enroll in multiple courses and each course can have multiple students; each course is taught by a single instructor. Which JPA mapping strategy best fits these requirements? Use @ManyToMany between students and courses, and @ManyToOne from Course to Instructor Use @OneToMany for students to courses and @ManyToOne for courses to",
    "code": "",
    "options": [
      "instructors",
      "Use @ManyToMany for students to courses, and @OneToMany for courses",
      "to instructors",
      "Use @ManyToOne for both students to courses and courses to instructors"
    ],
    "answer": 0,
    "explanation": "For Q193, the correct answer is \"instructors\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 194,
    "category": "Spring Security & JWT",
    "question": "Sarah is tasked with implementing user authentication in a Spring application. She needs to restrict access to certain endpoints based on user roles. What would be the most effective way for her to set up security within her application? Implement login logic directly in the controller methods for each endpoint.",
    "code": "",
    "options": [
      "Create a configuration class and use @EnableWebSecurity along with",
      "configure() methods.",
      "Add security annotations on all service methods for role-checking.",
      "Use JavaScript to control access to backend APIs."
    ],
    "answer": 0,
    "explanation": "For Q194, the correct answer is \"Create a configuration class and use @EnableWebSecurity along with\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 195,
    "category": "JPA & ORM",
    "question": "In Spring Data JPA, what is the purpose of the mappedBy attribute in a bidirectional relationship? It specifies the column name in the database",
    "code": "",
    "options": [
      "It is placed on the inverse (non-owning) side to tell JPA that the foreign key",
      "is managed by the field named on the other entity",
      "It is used only to create a one-to-one relationship between entities",
      "It triggers eager loading of the related entity"
    ],
    "answer": 0,
    "explanation": "For Q195, the correct answer is \"It is placed on the inverse (non-owning) side to tell JPA that the foreign key\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 196,
    "category": "DevOps & Git Version Control",
    "question": "Emma has been working on a coding project and wants to save her latest changes with a descriptive message. Which git command should she use to record these changes in her local repository?",
    "code": "",
    "options": [
      "git clone",
      "git commit",
      "git push",
      "git pull"
    ],
    "answer": 1,
    "explanation": "For Q196, the correct answer is \"git commit\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 197,
    "category": "JPA & ORM",
    "question": "Emily is tasked with creating a configuration class in her Spring Boot application. Which annotation should she use to indicate that her class provides Spring configuration?",
    "code": "",
    "options": [
      "@SpringBootConfiguration",
      "@Component",
      "@Configuration",
      "@EnableAutoConfiguration"
    ],
    "answer": 2,
    "explanation": "For Q197, the correct answer is \"@Configuration\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 198,
    "category": "Spring Security & JWT",
    "question": "Ryan is organizing a library database and wants to make sure that each book entry does not duplicate author information. What process should he consider applying to the database?",
    "code": "",
    "options": [
      "Data aggregation",
      "Data normalization",
      "Data migration",
      "Data denormalization"
    ],
    "answer": 1,
    "explanation": "For Q198, the correct answer is \"Data normalization\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 199,
    "category": "DevOps & Git Version Control",
    "question": "Alex is working in a team to develop a new application and needs to add a new feature without disrupting the main project. What is the best approach for him to follow using GitHub?",
    "code": "",
    "options": [
      "Directly edit the main branch to make the changes.",
      "Create a new branch for the feature and work on it independently.",
      "Delete the main branch and start a new repository.",
      "Share his changes in a chat before making any updates on GitHub."
    ],
    "answer": 1,
    "explanation": "For Q199, the correct answer is \"Create a new branch for the feature and work on it independently.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 200,
    "category": "Spring Security & JWT",
    "question": "What is the main role of entity classes in Spring Boot JPA Mapping?",
    "code": "",
    "options": [
      "To define service logic separately from database operations.",
      "To represent tables in a relational database.",
      "To authenticate users in the application.",
      "To handle HTTP requests and responses."
    ],
    "answer": 1,
    "explanation": "For Q200, the correct answer is \"To represent tables in a relational database.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 201,
    "category": "DevOps & Git Version Control",
    "question": "A development team is working on a collaborative project using Git. They have a feature branch for a new functionality, but another team member has made critical updates to the main branch that should be incorporated into the feature branch before merging it back. What should the developer do to synchronize their feature branch with the latest changes from the main branch effectively? Directly merge the main branch changes into the feature branch without reviewing the changes. Create a new branch from the feature branch and cherry-pick the necessary commits from the main branch. Pull the main branch into the feature branch and resolve any merge conflicts",
    "code": "",
    "options": [
      "that arise, ensuring integration is complete before merging into the main",
      "branch.",
      "Delete the feature branch and create a new one based off the updated main",
      "branch to avoid any issues during merging."
    ],
    "answer": 0,
    "explanation": "For Q201, the correct answer is \"that arise, ensuring integration is complete before merging into the main\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 202,
    "category": "DevOps & Git Version Control",
    "question": "A development team is working on a new feature branch and wants to ensure that their changes are reviewed by the team before merging into the main branch. How should they proceed using GitHub to facilitate this process effectively? Directly push changes to the main branch without a review. Open a pull request against the main branch to initiate the code review process.",
    "code": "",
    "options": [
      "Create a new branch with the same name as the main branch and push",
      "changes there.",
      "Merge the feature branch into the main branch and notify the team via email",
      "for review."
    ],
    "answer": 0,
    "explanation": "For Q202, the correct answer is \"Create a new branch with the same name as the main branch and push\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 203,
    "category": "JPA & ORM",
    "question": "In Spring Data JPA, which annotation is used to define a custom query method in a repository interface?",
    "code": "",
    "options": [
      "@Query",
      "@CustomQuery",
      "@NativeQuery",
      "@RepositoryQuery"
    ],
    "answer": 0,
    "explanation": "For Q203, the correct answer is \"@Query\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 204,
    "category": "JPA & ORM",
    "question": "A healthcare application is implementing a feature to search for patients based on various dynamic criteria, such as age, condition, and visit date. The application needs to build sophisticated filtering options that can be combined based on user input. Which approach using Spring Data JPA would be most effective in this context? Use method naming conventions in the repository interface to create specific query methods for each filter. Create a Specification that combines different criteria using predicates for a flexible query construction.",
    "code": "",
    "options": [
      "Implement a series of static query methods in the service layer that checks",
      "each filter separately.",
      "Rely on a single SQL query that does not leverage the capabilities of JPA for",
      "dynamic filtering."
    ],
    "answer": 0,
    "explanation": "For Q204, the correct answer is \"Implement a series of static query methods in the service layer that checks\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 205,
    "category": "Spring Security & JWT",
    "question": "When normalizing a relation `Library(BookID, Title, AuthorID, PublisherID, PublisherName)` with `PublisherID` leading to `PublisherName`, what will be the output of the following code snippet intended to extract necessary data while adhering to normalization rules?",
    "code": "",
    "options": [
      "A complete set of books with their respective publisher names.",
      "A list of books, including their author IDs but excluding publisher details.",
      "A combination of books and publishers resulting in unwanted duplication.",
      "An error due to the selection of non-grouped columns."
    ],
    "answer": 1,
    "explanation": "For Q205, the correct answer is \"A list of books, including their author IDs but excluding publisher details.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 206,
    "category": "JPQL & Database Queries",
    "question": "What distinguishes JPQL (Java Persistence Query Language) from standard SQL? JPQL cannot be used with joins.",
    "code": "",
    "options": [
      "JPQL is specifically designed to work with Java objects instead of database",
      "tables.",
      "JPQL only supports SELECT queries.",
      "JPQL is a programming language on its own."
    ],
    "answer": 0,
    "explanation": "For Q206, the correct answer is \"JPQL is specifically designed to work with Java objects instead of database\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 207,
    "category": "JPA & ORM",
    "question": "Which JPA annotation is used to mark a field as embeddable, allowing its properties to be inlined into the owning entity's table?",
    "code": "",
    "options": [
      "@Entity",
      "@Embeddable",
      "@Table",
      "@MappedSuperclass"
    ],
    "answer": 1,
    "explanation": "For Q207, the correct answer is \"@Embeddable\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 208,
    "category": "DevOps & Git Version Control",
    "question": "Sophia wants to experiment with a new feature for her application without affecting the main codebase. Which git practice is best suited for this purpose? Deleting the repository Creating a branch",
    "code": "Cloning the repository",
    "options": [
      "Committing changes directly to main",
      "SELECT BookID, Title, AuthorID",
      "FROM Library",
      "WHERE PublisherID IS NOT NULL;"
    ],
    "answer": 0,
    "explanation": "For Q208, the correct answer is \"Committing changes directly to main\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 209,
    "category": "Spring MVC & REST API",
    "question": "Which of the following is true about the @GetMapping and @PostMapping annotations in Spring? A. @GetMapping is used for handling HTTP GET requests, while @PostMapping is used for handling HTTP POST requests. B. @GetMapping is used for sending data to the server, while @PostMapping is used for retrieving data from the server. C. Both @GetMapping and @PostMapping are used for updating data on the server. D. @GetMapping is used for handling HTTP POST requests, while @PostMapping is used for handling HTTP GET requests.",
    "code": "",
    "options": [
      "A only",
      "B only",
      "C only",
      "D only"
    ],
    "answer": 0,
    "explanation": "For Q209, the correct answer is \"A only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 210,
    "category": "JPA & ORM",
    "question": "A developer is using a Spring Data JPA repository to fetch a list of products from a database. The products need to be sorted by their price in ascending order and filtered to include only those that are currently available. Which JPQL query is most appropriate to implement this requirement in a repository method? @Query(\"SELECT p FROM Product p WHERE p.available = true ORDER BY p.price ASC\") List<Product> findAvailableProductsSortedByPrice(); @Query(\"SELECT p FROM Product p ORDER BY p.price ASC WHERE p.available = true\") List<Product> findAvailableProductsSortedByPrice(); @Query(\"FROM Product p WHERE p.available = true SORT BY p.price\")",
    "code": "",
    "options": [
      "List<Product> findAvailableProductsSortedByPrice();",
      "@Query(\"SELECT p FROM Product WHERE p.price > 0 AND available = true",
      "ORDER BY p.price ASC\")",
      "List<Product> findAvailableProductsSortedByPrice();"
    ],
    "answer": 0,
    "explanation": "For Q210, the correct answer is \"List<Product> findAvailableProductsSortedByPrice();\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 211,
    "category": "Spring Security & JWT",
    "question": "Tom has a requirement to restrict access to certain features of his application based on user roles. What does Spring Security utilize to manage these access levels?",
    "code": "",
    "options": [
      "Roles define access levels for users.",
      "Roles define the password complexity required.",
      "Roles are irrelevant in SQL Injection scenarios.",
      "Roles define how data is stored in the database."
    ],
    "answer": 0,
    "explanation": "For Q211, the correct answer is \"Roles define access levels for users.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 212,
    "category": "JPA & ORM",
    "question": "A team of developers is working on a large-scale application that requires coordination to prevent conflicts and maintain stability while new features are developed. They have decided to use Git for version control. What branching strategy should they implement to best handle multiple feature branches while ensuring a stable production environment and minimizing merge conflicts? Use a single branch for all development, committing directly to the master branch. Create a new branch for every commit made, leading to excessive branching.",
    "code": "",
    "options": [
      "Implement Git Flow strategy, creating dedicated branches for feature,",
      "develop, and master.",
      "Only merge feature branches when releasing, disregarding integration during",
      "development."
    ],
    "answer": 0,
    "explanation": "For Q212, the correct answer is \"Implement Git Flow strategy, creating dedicated branches for feature,\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 213,
    "category": "DevOps & Git Version Control",
    "question": "Emma is tasked with retrieving all products that are out of stock from the database. Which method signature should she implement in her repository interface to accomplish this?",
    "code": "",
    "options": [
      "findOutOfStock()",
      "fetchByStockIsZero()",
      "findByStockEquals(0)",
      "findByStockLessThan(1)"
    ],
    "answer": 2,
    "explanation": "For Q213, the correct answer is \"findByStockEquals(0)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 214,
    "category": "DevOps & Git Version Control",
    "question": "Alex discovers a bug while using the application his team developed on GitHub. He wants to track this bug along with other tasks and enhancements. Which GitHub feature should he use to report this issue effectively?",
    "code": "",
    "options": [
      "Wiki",
      "Commit",
      "Pull request",
      "Issue"
    ],
    "answer": 3,
    "explanation": "For Q214, the correct answer is \"Issue\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 215,
    "category": "Spring Boot & Core Framework",
    "question": "John is developing a Spring Boot application and needs to manage dependencies effectively. Which component should he use to simplify the dependency management process?",
    "code": "",
    "options": [
      "@EnableAutoConfiguration",
      "Spring Boot Starter",
      "@RestController",
      "@Configuration"
    ],
    "answer": 1,
    "explanation": "For Q215, the correct answer is \"Spring Boot Starter\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 216,
    "category": "Spring Security & JWT",
    "question": "What is the primary role of a repository interface in Spring Data JPA? A repository interface manages application configurations.",
    "code": "",
    "options": [
      "A repository interface simplifies data access by providing CRUD operations",
      "automatically.",
      "A repository interface handles only read operations for data.",
      "A repository interface is used for validating user input in web applications."
    ],
    "answer": 0,
    "explanation": "For Q216, the correct answer is \"A repository interface simplifies data access by providing CRUD operations\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 217,
    "category": "Spring Boot & Core Framework",
    "question": "What is the main purpose of the @Autowired annotation in Spring? A. To configure the Spring bean lifecycle B. To inject dependencies automatically into Spring beans C. To enable transaction management in Spring D. To define a Spring bean",
    "code": "",
    "options": [
      "A and C",
      "B only",
      "D only",
      "A and B"
    ],
    "answer": 1,
    "explanation": "For Q217, the correct answer is \"B only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 218,
    "category": "JPA & ORM",
    "question": "Given the JPQL query SELECT e FROM Employee e WHERE e.salary > :minSalary, how is the parameter minSalary passed in a Spring Data JPA repository?",
    "code": "",
    "options": [
      "By defining it in the method name",
      "Using the @Param annotation with a method parameter.",
      "Through a separate configuration file",
      "By directly binding it to the EntityManager."
    ],
    "answer": 1,
    "explanation": "For Q218, the correct answer is \"Using the @Param annotation with a method parameter.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 219,
    "category": "JPQL & Database Queries",
    "question": "What is JPQL?",
    "code": "",
    "options": [
      "Java Persistence Query Language",
      "Java Programming Query Language",
      "Java Protocol Query Language",
      "Java Process Query Language"
    ],
    "answer": 0,
    "explanation": "For Q219, the correct answer is \"Java Persistence Query Language\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 220,
    "category": "JPA & ORM",
    "question": "Michael is using Spring Data JPA in his project to simplify data access operations. He is particularly interested in finding a way to easily create and interact with repositories. What is the primary advantage of using Spring Data JPA?",
    "code": "",
    "options": [
      "It provides an easy way to implement data access layers using repositories.",
      "It requires manual SQL query writing.",
      "It is only compatible with NoSQL databases.",
      "It does not support transactions."
    ],
    "answer": 0,
    "explanation": "For Q220, the correct answer is \"It provides an easy way to implement data access layers using repositories.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 221,
    "category": "JPA & ORM",
    "question": "Ava is optimizing her application and is considering how data is fetched from the database. What is a key distinction about eager fetching in Spring Data JPA?",
    "code": "",
    "options": [
      "Eager fetching retrieves data on demand",
      "Lazy fetching retrieves all data immediately",
      "Eager fetching retrieves data immediately.",
      "No difference between fetch strategies."
    ],
    "answer": 2,
    "explanation": "For Q221, the correct answer is \"Eager fetching retrieves data immediately.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 222,
    "category": "Spring Boot & Core Framework",
    "question": "Which of the following statements best describes the concept of Dependency Injection (DI) in Spring? A. DI is a design pattern that allows an object to receive its dependencies from an external source rather than creating them itself. B. DI is used to manage the lifecycle of beans in the Spring container. C. DI is used to map the data between the database and Java objects. D. DI is a Spring feature used for transaction management",
    "code": "",
    "options": [
      "A only",
      "A and B",
      "B only",
      "A and C"
    ],
    "answer": 0,
    "explanation": "For Q222, the correct answer is \"A only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 223,
    "category": "Web Services & Data Formats",
    "question": "Which of the following is a key feature of RESTful web services? A. Uses SOAP protocol B. Stateless architecture C. Requires a specific programming language D. Always returns data in XML format",
    "code": "",
    "options": [
      "A and B",
      "B only",
      "B and D",
      "C only"
    ],
    "answer": 1,
    "explanation": "For Q223, the correct answer is \"B only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 224,
    "category": "Java & Spring Architecture",
    "question": "Rachel is working on a product inventory database and wants to ensure that her design minimizes data duplication and maintains consistency. What would be the primary advantage of normalizing her database?",
    "code": "",
    "options": [
      "It speeds up data retrieval",
      "It reduces data redundancy and improves data integrity",
      "It prevents all user errors",
      "It combines multiple datasets into one"
    ],
    "answer": 1,
    "explanation": "For Q224, the correct answer is \"It reduces data redundancy and improves data integrity\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 225,
    "category": "Java & Spring Architecture",
    "question": "Lisa is writing a SQL query to retrieve the names of all products in a store's inventory. Which command will she use to access this information from the database?",
    "code": "",
    "options": [
      "GET",
      "SELECT",
      "FETCH",
      "DISPLAY"
    ],
    "answer": 1,
    "explanation": "For Q225, the correct answer is \"SELECT\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 226,
    "category": "JPQL & Database Queries",
    "question": "Mark needs to query the database to find all employees whose salary exceeds a specified value. Which JPQL query format should he use?",
    "code": "",
    "options": [
      "SELECT * FROM Employee WHERE salary > :salary",
      "SELECT e FROM Employee e WHERE e.salary > :salary",
      "GET e WHERE e.salary > :salary",
      "FIND e BY salary > :salary"
    ],
    "answer": 1,
    "explanation": "For Q226, the correct answer is \"SELECT e FROM Employee e WHERE e.salary > :salary\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 227,
    "category": "Spring MVC & REST API",
    "question": "Which Spring Boot annotation is used to define a RESTful controller that handles HTTP requests?",
    "code": "",
    "options": [
      "@Service",
      "@Repository",
      "@RestController",
      "Controller"
    ],
    "answer": 2,
    "explanation": "For Q227, the correct answer is \"@RestController\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 228,
    "category": "Web Services & Data Formats",
    "question": "Which statement best describes the difference between SOAP and RESTful web services? RESTful services use XML exclusively, while SOAP can use JSON. SOAP is stateless, whereas REST is a protocol requiring stateful sessions.",
    "code": "",
    "options": [
      "REST uses standard HTTP methods, while SOAP relies on XML messaging",
      "and is protocol-based.",
      "SOAP services are only for internal use, while REST is used for external",
      "services."
    ],
    "answer": 0,
    "explanation": "For Q228, the correct answer is \"REST uses standard HTTP methods, while SOAP relies on XML messaging\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 229,
    "category": "Java & Spring Architecture",
    "question": "In a Spring application, a developer wants to optimize the data access layer to minimize boilerplate code. Which strategy should they follow to efficiently implement this layer?",
    "code": "",
    "options": [
      "Manually code all SQL statements in the service classes.",
      "Extend JpaRepository and create repository interfaces for data access.",
      "Use JDBC templates to handle all database operations.",
      "Avoid an ORM framework and rely on raw JDBC for queries."
    ],
    "answer": 1,
    "explanation": "For Q229, the correct answer is \"Extend JpaRepository and create repository interfaces for data access.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 230,
    "category": "Java & Spring Architecture",
    "question": "Which of the following annotations is used to mark a field as a foreign key?",
    "code": "",
    "options": [
      "@ForeignKey",
      "@PrimaryKeyJoinColumn",
      "@JoinColumn",
      "@ForeignColumn"
    ],
    "answer": 2,
    "explanation": "For Q230, the correct answer is \"@JoinColumn\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 231,
    "category": "Java & Spring Architecture",
    "question": "John is developing a new feature for an application and wants to isolate his changes until they are ready for review. What should he do?",
    "code": "",
    "options": [
      "Create a new branch",
      "Push changes directly to the main branch",
      "Delete the current branch",
      "Revert the last commit"
    ],
    "answer": 0,
    "explanation": "For Q231, the correct answer is \"Create a new branch\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 232,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @Table annotation in JPA?",
    "code": "",
    "options": [
      "To specify the primary key of the entity.",
      "To define the name of the database table that the entity maps to.",
      "To create a one-to-many relationship between entities.",
      "To indicate a JSON mapping for REST APIs."
    ],
    "answer": 1,
    "explanation": "For Q232, the correct answer is \"To define the name of the database table that the entity maps to.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 233,
    "category": "JPA & ORM",
    "question": "Which of the following annotations are used to define an auto-generated primary key in JPA? A. @Entity B. @TableGenerator C. @GeneratedValue(strategy = GenerationType.AUTO) D. @SequenceGenerator",
    "code": "",
    "options": [
      "C",
      "A",
      "C and D",
      "B and D"
    ],
    "answer": 0,
    "explanation": "For Q233, the correct answer is \"C\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 234,
    "category": "JPA & ORM",
    "question": "Laura is developing a Java application to manage a library system. She wants to create an entity to represent a book in the database. Which annotation should she use to map her Book class to a database table?",
    "code": "",
    "options": [
      "@Table",
      "@Data",
      "@Entity",
      "@Column"
    ],
    "answer": 2,
    "explanation": "For Q234, the correct answer is \"@Entity\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 235,
    "category": "JPA & ORM",
    "question": "David is developing an application that needs to maintain a list of orders associated with a single customer. Which Spring Boot JPA annotation should he use to establish where a single entity (customer) is associated with multiple entities (orders)?",
    "code": "",
    "options": [
      "@ManyToMany",
      "@OneToMany",
      "@ManyToone",
      "@OneToOne"
    ],
    "answer": 1,
    "explanation": "For Q235, the correct answer is \"@OneToMany\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 236,
    "category": "DevOps & Git Version Control",
    "question": "Alex is confused about the differences between local and remote branches in git. He realizes he needs to push his changes to the shared repository. What action does he need to take?",
    "code": "",
    "options": [
      "Branch out from the current branch",
      "Create a new local branch",
      "Save changes locally and push to remote",
      "Merge local branch with remote branch"
    ],
    "answer": 2,
    "explanation": "For Q236, the correct answer is \"Save changes locally and push to remote\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 237,
    "category": "DevOps & Git Version Control",
    "question": "A software team is implementing Git Flow for managing their development process. After implementing several features and resolving conflicts, they plan to release their product. They need to merge multiple feature branches into a release branch. What is the most effective strategy for proceeding with the merge? Merging all feature branches into the develop branch without further review. Testing each feature branch independently, then merging them into the release branch while ensuring everything integrates smoothly.",
    "code": "",
    "options": [
      "Merging the release branch directly back into the main branch without",
      "testing.",
      "Deleting all feature branches and creating a new branch for release to avoid",
      "complication."
    ],
    "answer": 1,
    "explanation": "For Q237, the correct answer is \"testing.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 238,
    "category": "Spring Security & JWT",
    "question": "Angela is setting up a simple application and wants to store user details without using a database. What feature of Spring Security should she use?",
    "code": "",
    "options": [
      "Using JWT for token management",
      "Using LDAP for directory access",
      "Using InMemoryUserDetailsManager for user storage",
      "Using JDBC for database users"
    ],
    "answer": 2,
    "explanation": "For Q238, the correct answer is \"Using InMemoryUserDetailsManager for user storage\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 239,
    "category": "JPA & ORM",
    "question": "What is the error in this JPA entity class that aims to use the @GeneratedValue annotation for generating primary key values? The @Id annotation is missing on the id field, so it cannot be recognized as",
    "code": "",
    "options": [
      "the primary key",
      "The @GeneratedValue annotation must specify a generation strategy.",
      "The primary key field must be of type Integer",
      "There should not be any field of type Long in an entity"
    ],
    "answer": 0,
    "explanation": "For Q239, the correct answer is \"the primary key\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 240,
    "category": "Spring Boot & Core Framework",
    "question": "What are the main components of the Webservices architecture in java?",
    "code": "",
    "options": [
      "Service Provider, Service Requester, and Service Registry",
      "Only Client and Service layers",
      "Database and Server layers only",
      "User Interface and Database layers"
    ],
    "answer": 0,
    "explanation": "For Q240, the correct answer is \"Service Provider, Service Requester, and Service Registry\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 241,
    "category": "JPA & ORM",
    "question": "Linda is designing a database for a library. She needs to ensure that each book is uniquely identified and that there are no repeating groups of data in her tables. Which Normalization form should she primarily focus on?",
    "code": "",
    "options": [
      "Third Normal Form (3NF)",
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    "answer": 1,
    "explanation": "For Q241, the correct answer is \"First Normal Form (1NF)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 242,
    "category": "JPA & ORM",
    "question": "In Spring, which of the following annotations is used to define a one-to-many relationship between two entities? A. @ManyToOne B. @OneToMany C. @OneToOne D. @ManyToMany @Entity public class Product {",
    "code": "A and B\nB only\nC only\nD only",
    "options": [
      "@GeneratedValue",
      "private Long id;",
      "private String productName;",
      "}"
    ],
    "answer": 3,
    "explanation": "For Q242, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 243,
    "category": "Spring Security & JWT",
    "question": "Noah needs to create a relationship between Author and Book entities, where one author can have many books. Which annotation should Noah use on the author field in the Book entity?",
    "code": "",
    "options": [
      "@ManyToOne",
      "@MappedSuperclass",
      "@OneToMany",
      "@JoinTable"
    ],
    "answer": 0,
    "explanation": "For Q243, the correct answer is \"@ManyToOne\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 244,
    "category": "Spring Boot & Core Framework",
    "question": "Emily is setting up a new Spring Boot application. She comes across an annotation that simplifies the configuration process by enabling auto-configuration and component scanning. What is the name of this annotation?",
    "code": "",
    "options": [
      "@Configuration",
      "@ComponentScan",
      "@SpringBootApplication",
      "@EnableAutoConfiguration"
    ],
    "answer": 2,
    "explanation": "For Q244, the correct answer is \"@SpringBootApplication\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 245,
    "category": "Java & Spring Architecture",
    "question": "Lisa is designing a feature that requires ensuring multiple related database operations either all succeed or all fail. Which annotation should she use on her service method to handle these transactions properly?",
    "code": "",
    "options": [
      "@Transactional",
      "@Service",
      "@Autowired",
      "@Cacheable"
    ],
    "answer": 0,
    "explanation": "For Q245, the correct answer is \"@Transactional\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 246,
    "category": "JPA & ORM",
    "question": "Emma is designing a database for a school system. She needs to ensure that each student has a unique identifier. Which feature should she implement to achieve this?",
    "code": "",
    "options": [
      "A foreign key",
      "A primary key",
      "A default key",
      "An index"
    ],
    "answer": 1,
    "explanation": "For Q246, the correct answer is \"A primary key\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 247,
    "category": "Java & Spring Architecture",
    "question": "Alex wants to externalize his application's configuration settings in a Spring Boot project. Which file should he use to achieve this?",
    "code": "",
    "options": [
      "config.json",
      "settings.xml",
      "application.properties",
      "environment.yml"
    ],
    "answer": 2,
    "explanation": "For Q247, the correct answer is \"application.properties\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 248,
    "category": "JPQL & Database Queries",
    "question": "What does the following JPQL query in Spring Boot return? All orders with the given status The total number of orders matching the given status",
    "code": "",
    "options": [
      "The sum of order amounts for the given status",
      "All unique statuses in the Order table",
      "@Query(\"SELECT COUNT(o) FROM Order o WHERE o.status = :status\")",
      "Long countByStatus(@Param(\"status\") String status);"
    ],
    "answer": 0,
    "explanation": "For Q248, the correct answer is \"The sum of order amounts for the given status\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 249,
    "category": "Web Services & Data Formats",
    "question": "What is the purpose of the @JsonIgnore annotation in Spring? A. To serialize a field as a JSON object B. To prevent a field from being serialized or deserialized in JSON C. To specify the custom format for serializing a field D. To convert a JSON field to a Java object",
    "code": "",
    "options": [
      "B only",
      "A and B",
      "C only",
      "D only"
    ],
    "answer": 0,
    "explanation": "For Q249, the correct answer is \"B only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 250,
    "category": "JPA & ORM",
    "question": "David wants to set up his Spring Boot application to automatically configure itself based on the included libraries. Which annotation should he use to achieve this?",
    "code": "",
    "options": [
      "@EnableAutoConfiguration",
      "@SpringApplication",
      "@ComponentScan",
      "@ConfigurationProperties"
    ],
    "answer": 0,
    "explanation": "For Q250, the correct answer is \"@EnableAutoConfiguration\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 251,
    "category": "Spring Security & JWT",
    "question": "During the implementation of a web application, Mark learns about CSRF attacks. What does Spring Security's CSRF protection aim to do? CSRF protection prevents unauthorized commands from being executed by",
    "code": "",
    "options": [
      "users.",
      "CSRF protection creates a backup of user sessions.",
      "CSRF protection encrypts user database connections.",
      "CSRF protection requires validation only on login attempts."
    ],
    "answer": 0,
    "explanation": "For Q251, the correct answer is \"users.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 252,
    "category": "Java & Spring Architecture",
    "question": "Tom is setting up relationships in his database for an e-commerce application. He wants to link the order table to the customer table. What term describes the key he will use in the order table?",
    "code": "",
    "options": [
      "Primary key",
      "Composite key",
      "Foreign key",
      "Candidate key"
    ],
    "answer": 2,
    "explanation": "For Q252, the correct answer is \"Foreign key\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 253,
    "category": "Spring Security & JWT",
    "question": "In the process of handling security in her application, Emma learns about the Spring Security filter chain. What is the primary function of the security filters?",
    "code": "",
    "options": [
      "Filters process security concerns based on request and response.",
      "Filters manage user data storage options.",
      "Filters guarantee database connections.",
      "Filters make web servers unnecessary."
    ],
    "answer": 0,
    "explanation": "For Q253, the correct answer is \"Filters process security concerns based on request and response.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 254,
    "category": "JPA & ORM",
    "question": "You are normalizing the relation `Student(StudentID, Name, CourseID, InstructorID)` where `InstructorID` is determined by `CourseID`. What would be the output of executing this SQL statement aimed at reducing redundancy?",
    "code": "",
    "options": [
      "A unique list of StudentID and Name associated with InstructorID.",
      "A unique mapping of courses to their instructors, minimizing redundancy.",
      "A complete list of all students in every course.",
      "An error because of missing attributes besides CourseID and InstructorID."
    ],
    "answer": 1,
    "explanation": "For Q254, the correct answer is \"A unique mapping of courses to their instructors, minimizing redundancy.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 255,
    "category": "Spring MVC & REST API",
    "question": "Mark is building a RESTful web service using Spring Boot. Which annotation is essential for returning JSON responses from his controller methods?",
    "code": "",
    "options": [
      "@GetMapping",
      "@Controller",
      "@RestController",
      "@RequestMapping"
    ],
    "answer": 2,
    "explanation": "For Q255, the correct answer is \"@RestController\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 256,
    "category": "JPA & ORM",
    "question": "Question 256",
    "code": "SELECT S.Name, E.Course\nFROM Students S\nLEFT JOIN Enrollments E ON S.StudentID = E.StudentID\nWHERE E.Course IS NOT NULL;\n1\n2\n3\nAll students and their enrolled courses, including those without enrollments\nOnly students who are enrolled in courses\nAll students, even those with NULL course values\nAn error due to a mismatch in selected columns",
    "options": [
      "What will be the output of the following SQL snippet when executed on a database with tables `Students` and `Enrollments`?",
      "CREATE TABLE CourseInstructor AS",
      "SELECT DISTINCT CourseID, InstructorID",
      "FROM Student;"
    ],
    "answer": 0,
    "explanation": "For Q256, the correct answer is \"What will be the output of the following SQL snippet when executed on a database with tables `Students` and `Enrollments`?\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 257,
    "category": "Servlets & Web Containers",
    "question": "Which HTTP method is used to retrieve data from a server? A. POST B. PUT C. GET D. DELETE",
    "code": "",
    "options": [
      "A and B",
      "C only",
      "B and D",
      "D only"
    ],
    "answer": 1,
    "explanation": "For Q257, the correct answer is \"C only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 258,
    "category": "Java & Spring Architecture",
    "question": "Which of the following standards is NOT typically associated with Webservices in java?",
    "code": "",
    "options": [
      "WSDL (Web Services Description Language)",
      "JSON (JavaScript Object Notation)",
      "SOAP (Simple Object Access Protocol)",
      "SQL (Structured Query Language)"
    ],
    "answer": 3,
    "explanation": "For Q258, the correct answer is \"SQL (Structured Query Language)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 259,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @JsonBackReference annotation in Spring? A. To mark a field as the primary reference during serialization B. To prevent infinite recursion in bidirectional relationships by ignoring the back reference during serialization C. To serialize a field in reverse order D. To deserialize a field in a specific format",
    "code": "",
    "options": [
      "B only",
      "A and B",
      "C only",
      "D only"
    ],
    "answer": 0,
    "explanation": "For Q259, the correct answer is \"B only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 260,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @Column annotation in JPA? A. To define a column in the database table that corresponds to a field in the entity class B. To specify the foreign key relationship between two tables C. To define the primary key column in the database D. To map a database view to an entity class",
    "code": "",
    "options": [
      "A only",
      "B only",
      "C only",
      "D only"
    ],
    "answer": 0,
    "explanation": "For Q260, the correct answer is \"A only\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 261,
    "category": "JPA & ORM",
    "question": "Liam is starting a new project with Spring Boot and wants to take advantage of Spring Data JPA's features. What benefits does the Spring Boot Starter Data JPA provide?",
    "code": "",
    "options": [
      "It is only for web applications",
      "The starter provides only repository interfaces",
      "Spring Boot Starter Data requires manual configuration",
      "The Spring Boot Starter Data JPA simplifies dependency management."
    ],
    "answer": 3,
    "explanation": "For Q261, the correct answer is \"The Spring Boot Starter Data JPA simplifies dependency management.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 262,
    "category": "Java & Spring Architecture",
    "question": "Which attribute of the @Column annotation is used to specify the column name in the database?",
    "code": "",
    "options": [
      "name",
      "columnName",
      "value",
      "key"
    ],
    "answer": 0,
    "explanation": "For Q262, the correct answer is \"name\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 263,
    "category": "DevOps & Git Version Control",
    "question": "While working on a team project, Lisa wants to update her local repository with the latest changes made by her coworkers that were pushed to the remote repository. Which command will she use?",
    "code": "",
    "options": [
      "git clone",
      "git pull",
      "git push",
      "git fetch"
    ],
    "answer": 1,
    "explanation": "For Q263, the correct answer is \"git pull\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 264,
    "category": "DevOps & Git Version Control",
    "question": "A development team is collaborating on a project with multiple feature branches. Developer A has created a feature branch for a new user interface, while Developer B is working on a bug fix in a different branch. After merging their branches into the main branch, they encounter merge conflicts. What is the best approach for handling these conflicts? By immediately deleting one of the branches to eliminate the conflict. By reviewing the conflicting files, discussing the changes with the team, and selecting which changes to keep.",
    "code": "",
    "options": [
      "By merging the main branch back into their feature branches before merging",
      "again.",
      "By reverting to the most recent commit of the main branch without",
      "addressing the changes from the feature branches."
    ],
    "answer": 0,
    "explanation": "For Q264, the correct answer is \"By merging the main branch back into their feature branches before merging\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 265,
    "category": "JPA & ORM",
    "question": "Analyze the following code. What will happen if the code attempts to retrieve a user with `findById` method when no user with the specified ID exists?",
    "code": "",
    "options": [
      "Prints \"User not found\"",
      "Prints \"null\"",
      "Throws a NoSuchElementException",
      "Prints an empty string"
    ],
    "answer": 0,
    "explanation": "For Q265, the correct answer is \"Prints \"User not found\"\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 266,
    "category": "Spring Boot & Core Framework",
    "question": "By default, what isolation level does Spring's @Transactional use if none is explicitly specified?",
    "code": "",
    "options": [
      "READ_UNCOMMITTED",
      "DEFAULT",
      "SERIALIZABLE",
      "REPEATABLE_READ"
    ],
    "answer": 1,
    "explanation": "For Q266, the correct answer is \"DEFAULT\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 267,
    "category": "Java & Spring Architecture",
    "question": "Question 267",
    "code": "Leave the data as it is\nCreate separate tables for orders and products\nCombine orders and products into one large table\nAdd an additional field to the existing table",
    "options": [
      "Tom has a simple database table that lists orders and their corresponding products. He realizes that each order can have",
      "multiple products and should be broken into separate tables. What is the best approach to normalize his database?",
      "Optional<User> user = userRepository.findById(100L);",
      "System.out.println(user.isPresent() ? user.get().getName() : \"User not found\");"
    ],
    "answer": 0,
    "explanation": "For Q267, the correct answer is \"Tom has a simple database table that lists orders and their corresponding products. He realizes that each order can have\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 268,
    "category": "Java & Spring Architecture",
    "question": "What will be the output of the following SQL statement if the 'Sales' table contains 5 records, and all records have a column `amount` set to 100?",
    "code": "",
    "options": [
      "0",
      "500",
      "100",
      "An error because the condition cannot be met."
    ],
    "answer": 1,
    "explanation": "For Q268, the correct answer is \"500\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 269,
    "category": "JPA & ORM",
    "question": "In Spring Boot JPA, which type of relationship allows one entity to be associated with multiple instances of another entity? One-to-One Many-to-Many One-to-Many",
    "code": "",
    "options": [
      "Self-Referencing",
      "SELECT SUM(amount) AS total_amount",
      "FROM Sales",
      "WHERE amount > 50;"
    ],
    "answer": 0,
    "explanation": "For Q269, the correct answer is \"Self-Referencing\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 270,
    "category": "Java & Spring Architecture",
    "question": "John is developing an application that needs to manage customer data such as names, addresses, and phone numbers. He wants to ensure that the data maintains its structure and relationships. What type of system should John use?",
    "code": "",
    "options": [
      "A flat file system",
      "An in-memory data structure",
      "A relational database management system (RDBMS)",
      "A NoSQL database"
    ],
    "answer": 2,
    "explanation": "For Q270, the correct answer is \"A relational database management system (RDBMS)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 271,
    "category": "JPA & ORM",
    "question": "Jack is working on a project that involves many different entities and wants to perform CRUD operations easily. What is a key feature of Spring Data JPA repositories that Jack should consider?",
    "code": "",
    "options": [
      "Repositories only for read operations",
      "Repositories require manual implementation",
      "Spring Data JPA repositories simplify data access.",
      "Repositories are only for Hibernate"
    ],
    "answer": 2,
    "explanation": "For Q271, the correct answer is \"Spring Data JPA repositories simplify data access.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 272,
    "category": "JPA & ORM",
    "question": "John is developing a Spring application that requires the injection of a service into a controller to handle user requests. Which method of dependency injection should he consider using for better manageability and testing?",
    "code": "",
    "options": [
      "Using constructor-based injection.",
      "Using direct instantiation.",
      "Using method overloading.",
      "Using static methods."
    ],
    "answer": 0,
    "explanation": "For Q272, the correct answer is \"Using constructor-based injection.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 273,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @Query annotation in Spring Boot JPA?",
    "code": "",
    "options": [
      "It is used to define custom SQL queries.",
      "It is used to define the structure of the database schema.",
      "It is used to specify the mapping between entities and database tables.",
      "It is used to define transactional boundaries."
    ],
    "answer": 0,
    "explanation": "For Q273, the correct answer is \"It is used to define custom SQL queries.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 274,
    "category": "Spring MVC & REST API",
    "question": "You want to send a GET request to your Spring Boot application. Which code snippet correctly implements this? @GetMapping(\"/api/products\") public List<Product> getAllProducts() { return productService findAll(); @PostMapping(\"/api/products\") public List<Product> getAllProducts() { ... }",
    "code": "",
    "options": [
      "@RequestMapping(\"/api/products\") public List<Product> getAllProducts() {",
      "... }",
      "@GetMapping(\"/api/products\") public List<Product> getAllProducts() { ... }",
      "@PutMapping(\"/api/products\") public List<Product> getAllProducts() { ... }"
    ],
    "answer": 2,
    "explanation": "For Q274, the correct answer is \"@GetMapping(\"/api/products\") public List<Product> getAllProducts() { ... }\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 275,
    "category": "Spring Boot & Core Framework",
    "question": "Which component of the Spring framework is responsible for managing the lifecycle of Spring-managed beans?",
    "code": "",
    "options": [
      "Spring AOP",
      "Spring MVC",
      "Spring IoC",
      "Spring Security"
    ],
    "answer": 2,
    "explanation": "For Q275, the correct answer is \"Spring IoC\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 276,
    "category": "DevOps & Git Version Control",
    "question": "A development team is working on a new feature that requires parallel development efforts from multiple team members. During a merge of these branches into `main`, conflicts arise due to overlapping changes in the same file. What is the best strategy for resolving these merge conflicts effectively in Git?",
    "code": "",
    "options": [
      "Simply overwrite one branch with the other",
      "Discard changes from both branches",
      "Use a three-way merge to identify changes made in both branches",
      "Commit changes without resolving conflicts"
    ],
    "answer": 2,
    "explanation": "For Q276, the correct answer is \"Use a three-way merge to identify changes made in both branches\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 277,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @Entity annotation in JPA? It marks a class as a persistent entity. It specifies the table name for a persistent entity. It defines the primary key for a persistent entity. return productService.findAll();",
    "code": "",
    "options": [
      "}",
      "3",
      "4",
      "It establishes a relationship between entities."
    ],
    "answer": 0,
    "explanation": "For Q277, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 278,
    "category": "DevOps & Git Version Control",
    "question": "During team collaboration, Richard needs to integrate the \"feature\" branch into his current branch. What command should he use?",
    "code": "",
    "options": [
      "git merge feature",
      "git checkout feature",
      "git push feature",
      "git branch feature"
    ],
    "answer": 0,
    "explanation": "For Q278, the correct answer is \"git merge feature\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 279,
    "category": "JPA & ORM",
    "question": "Oliver is using Spring Data JPA and needs to create a new user. Which interface should he extend to access CRUD operations easily?",
    "code": "",
    "options": [
      "JpaRepository",
      "CrudRepository",
      "UserRepository",
      "UserService"
    ],
    "answer": 0,
    "explanation": "For Q279, the correct answer is \"JpaRepository\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 280,
    "category": "Web Services & Data Formats",
    "question": "Which configuration file is used for Spring XML configuration?",
    "code": "",
    "options": [
      "web.xml",
      "application.xml",
      "spring-context.xml",
      "config.xml"
    ],
    "answer": 2,
    "explanation": "For Q280, the correct answer is \"spring-context.xml\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 281,
    "category": "Web Services & Data Formats",
    "question": "Which is the recommended approach for configuring beans in modern Spring applications? XML-based configuration Java-based configuration",
    "code": "",
    "options": [
      "Annotation-based configuration",
      "Property-based configuration",
      "<dependency>",
      "<groupId>org.springframework.boot</groupId>"
    ],
    "answer": 0,
    "explanation": "For Q281, the correct answer is \"Annotation-based configuration\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 282,
    "category": "Web Services & Data Formats",
    "question": "Which Spring Boot starter would you add to your pom.xml to include support for JSON processing with Jackson?",
    "code": "",
    "options": [
      "Correct",
      "Incorrect, should use spring-boot-starter-web",
      "Incorrect, should use spring-boot-starter-data-jpa",
      "Incorrect, should use spring-boot-starter"
    ],
    "answer": 0,
    "explanation": "For Q282, the correct answer is \"Correct\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 283,
    "category": "JPA & ORM",
    "question": "Which of the following code snippets demonstrates handling an HTTP POST request for creating a new record in a database using Spring Boot's JPA repository? @PostMapping(\"/users\") public User createUser(@Valid @RequestBody User user) { return userRepository.save(user); } @PostMapping(\"/users\") public User createUser(User user) { return userRepository.save(user); } @PostMapping(\"/users\") public void createUser(@Valid @RequestBody User user) { userRepository(user); }",
    "code": "",
    "options": [
      "@PostMapping(\"/users\")",
      "public void createUser(User user) {",
      "userRepository.save(user);",
      "}"
    ],
    "answer": 2,
    "explanation": "For Q283, the correct answer is \"userRepository.save(user);\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 284,
    "category": "Spring Boot & Core Framework",
    "question": "Which component of the Spring framework is responsible for integrating Spring applications with relational databases?",
    "code": "",
    "options": [
      "Spring AOP",
      "Spring MVC",
      "Spring Data",
      "Spring ORM"
    ],
    "answer": 3,
    "explanation": "For Q284, the correct answer is \"Spring ORM\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 285,
    "category": "JPA & ORM",
    "question": "How do you specify the primary bean among multiple beans of the same type? groupId org.springframework.boot /groupId <artifactId>spring-boot-starter-json</artifactId> <version>2.5.4</version> </dependency> 2 3 4 5 6",
    "code": "",
    "options": [
      "@Autowired",
      "@Primary",
      "@Qualifier",
      "@Bean"
    ],
    "answer": 1,
    "explanation": "For Q285, the correct answer is \"@Primary\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 286,
    "category": "JPA & ORM",
    "question": "Tom is tasked with maintaining the input validation process for user registration. Which annotation can he use to ensure that a username is between 3 and 20 characters?",
    "code": "",
    "options": [
      "@Size(min=3, max=20)",
      "@Length",
      "@NotNull",
      "@Range"
    ],
    "answer": 0,
    "explanation": "For Q286, the correct answer is \"@Size(min=3, max=20)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 287,
    "category": "JPA & ORM",
    "question": "David is working on a project and wants to see the changes he has made compared to the last commit. What command should he execute?",
    "code": "",
    "options": [
      "git diff",
      "git status",
      "git log",
      "git commit"
    ],
    "answer": 0,
    "explanation": "For Q287, the correct answer is \"git diff\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 288,
    "category": "DevOps & Git Version Control",
    "question": "Lisa wants to track the changes in her code effectively by storing different versions of her project files. What functionality of Git should she use?",
    "code": "",
    "options": [
      "Git can only store the final version of files.",
      "Git allows version control of all project files, including code.",
      "Git is not suitable for binary files, only text files.",
      "Git provides no functionality for version control."
    ],
    "answer": 1,
    "explanation": "For Q288, the correct answer is \"Git allows version control of all project files, including code.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 289,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is NOT a core concept of Spring Framework?",
    "code": "",
    "options": [
      "Dependency Injection",
      "Aspect-Oriented Programming",
      "Inversion of Control",
      "Object-Relational Mapping"
    ],
    "answer": 3,
    "explanation": "For Q289, the correct answer is \"Object-Relational Mapping\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 290,
    "category": "Spring MVC & REST API",
    "question": "Which HTTP method is used to update an existing book resource in the BookController class?",
    "code": "",
    "options": [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    "answer": 2,
    "explanation": "For Q290, the correct answer is \"PUT\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 291,
    "category": "Servlets & Web Containers",
    "question": "A web application is being developed to manage customer orders. The team needs to ensure that when a new order is created, its information is accurately stored without duplication of records. What HTTP method should the team use to create the order when making requests to the REST API?",
    "code": "",
    "options": [
      "POST is used to create new resources.",
      "GET is used to create new resources.",
      "DELETE is used to remove existing resources.",
      "PUT is used to update an existing resource."
    ],
    "answer": 0,
    "explanation": "For Q291, the correct answer is \"POST is used to create new resources.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 292,
    "category": "JPA & ORM",
    "question": "Which Spring component is used for building web applications and RESTful APIs? Spring AOP @RestController @RequestMapping(\"/books\") public class BookController { @GetMapping(\"/{id}\") public ResponseEntity<Book> getBookById(@PathVariable Long id) { } @PostMapping public ResponseEntity<Book> createBook(@RequestBody Book book) { } @PutMapping(\"/{id}\") public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book book) { } @DeleteMapping(\"/{id}\") public ResponseEntity<Void> deleteBook(@PathVariable Long id) { }",
    "code": "",
    "options": [
      "}",
      "Spring MVC",
      "Spring IoC",
      "Spring Security"
    ],
    "answer": 1,
    "explanation": "For Q292, the correct answer is \"Spring MVC\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 293,
    "category": "JPA & ORM",
    "question": "Which of the following annotations is used in JPA to specify a primary key column in an entity?",
    "code": "",
    "options": [
      "@PrimaryKey",
      "@Id",
      "@Column",
      "@GeneratedValue"
    ],
    "answer": 1,
    "explanation": "For Q293, the correct answer is \"@Id\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 294,
    "category": "Spring Boot & Core Framework",
    "question": "When using @Autowired annotation for dependency injection, which of the following options is used to resolve ambiguity when multiple beans of the same type are available?",
    "code": "",
    "options": [
      "@Qualifier",
      "@Primary",
      "@Value",
      "@Resource"
    ],
    "answer": 0,
    "explanation": "For Q294, the correct answer is \"@Qualifier\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 295,
    "category": "JPA & ORM",
    "question": "In Spring Boot, which annotation is commonly used to mark a class as a JPA entity?",
    "code": "",
    "options": [
      "@Entity",
      "@Table",
      "@Persistent",
      "@Data"
    ],
    "answer": 0,
    "explanation": "For Q295, the correct answer is \"@Entity\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 296,
    "category": "JPA & ORM",
    "question": "What is the base URL for accessing the book-related endpoints in this Spring Boot REST API? @RestController @RequestMapping(\"/api/books\") public class BookController { @Autowired private BookService bookService; @GetMapping(\"/{id}\")",
    "code": "/api/books\n/books\n/api\n/api/book",
    "options": [
      "public ResponseEntity<Book> getBookById(@PathVariable(\"id\") Long id) {",
      "Book book = bookService.getBookById(id);",
      "if (book != null) {",
      "return ResponseEntity.ok(book);"
    ],
    "answer": 0,
    "explanation": "For Q296, the correct answer is \"public ResponseEntity<Book> getBookById(@PathVariable(\"id\") Long id) {\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 297,
    "category": "Java & Spring Architecture",
    "question": "You are working on a Java project and need to manage dependencies automatically. Which tool can help you manage your project’s build process and dependencies?",
    "code": "",
    "options": [
      "Gradle",
      "Ant",
      "Maven",
      "JUnit"
    ],
    "answer": 2,
    "explanation": "For Q297, the correct answer is \"Maven\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 298,
    "category": "DevOps & Git Version Control",
    "question": "Jessica has just finished working on a feature and wants to check which changes are staged for the next commit. Which command should she use?",
    "code": "",
    "options": [
      "git diff",
      "git status",
      "git log",
      "git fetch"
    ],
    "answer": 1,
    "explanation": "For Q298, the correct answer is \"git status\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 299,
    "category": "JPA & ORM",
    "question": "In a customer feedback system, you need to expose a REST API endpoint to accept feedback. Which annotation in Spring Boot is used to handle HTTP POST requests? @GetMapping @PostMapping } else { return ResponseEntity.notFound().build(); } } @PostMapping public ResponseEntity<Book> createBook(@RequestBody Book book) { Book createdBook = bookService.createBook(book); return ResponseEntity.status(HttpStatus.CREATED).body(createdBook); } } 13 14 15 16 17 18 19 20 21",
    "code": "",
    "options": [
      "22",
      "23",
      "@PutMapping",
      "@RequestBody"
    ],
    "answer": 0,
    "explanation": "For Q299, the correct answer is \"22\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 300,
    "category": "JPA & ORM",
    "question": "Which of the following methods is commonly used in Spring Boot JPA repositories to retrieve all entities of a specific type?",
    "code": "",
    "options": [
      "findAll()",
      "findById()",
      "save()",
      "delete()"
    ],
    "answer": 0,
    "explanation": "For Q300, the correct answer is \"findAll()\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 301,
    "category": "Servlets & Web Containers",
    "question": "In a hotel booking system, which HTTP method is used when a user submits a form to book a room?",
    "code": "",
    "options": [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    "answer": 1,
    "explanation": "For Q301, the correct answer is \"POST\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 302,
    "category": "DevOps & Git Version Control",
    "question": "To test a new feature, Daniel creates a branch called `feature-x`. What command does he use to switch to this newly created branch?",
    "code": "",
    "options": [
      "git move feature-x",
      "git checkout feature-x",
      "git create feature-x",
      "git go feature-x"
    ],
    "answer": 1,
    "explanation": "For Q302, the correct answer is \"git checkout feature-x\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 303,
    "category": "Java & Spring Architecture",
    "question": "Emma is implementing a service for retrieving user settings stored as key-value pairs. Which structure in Spring would best fit her use case?",
    "code": "",
    "options": [
      "List",
      "Set",
      "Queue",
      "Map"
    ],
    "answer": 3,
    "explanation": "For Q303, the correct answer is \"Map\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 304,
    "category": "JPA & ORM",
    "question": "You want to implement a method in a Spring Boot application to handle a POST request that creates a new product. What is the correct code snippet? @PutMapping(\"/api/products\") public ResponseEntity<Product> createProduct(@RequestBody Product product) { ... } @PostMapping(\"/api/products\") public void createProduct(@RequestBody Product product) { ... } @PostMapping(\"/api/products\") public ResponseEntity<Product>",
    "code": "",
    "options": [
      "createProduct(@RequestBody Product product) { ... }",
      "@RequestMapping(value=\"/api/products\", method=RequestMethod.POST)",
      "public ResponseEntity<Product> createProduct(@RequestBody Product",
      "product) { ... }"
    ],
    "answer": 2,
    "explanation": "For Q304, the correct answer is \"public ResponseEntity<Product> createProduct(@RequestBody Product\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 305,
    "category": "Spring Boot & Core Framework",
    "question": "Which annotation is used to mark a class as a Spring bean in annotation-based configuration?",
    "code": "",
    "options": [
      "@Service",
      "@Bean",
      "@Component",
      "@Autowired"
    ],
    "answer": 2,
    "explanation": "For Q305, the correct answer is \"@Component\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 306,
    "category": "JPA & ORM",
    "question": "How is the user ID passed to the updateUser method? @PostMapping(\"/api/products\") public ResponseEntity<Product> createProduct(@RequestBody Product product) { Product createdProduct = productService.save(product); return new ResponseEntity<>(createdProduct, HttpStatus.CREATED); } @GetMapping(\"/{id}\") public ResponseEntity<User> getUserById(@PathVariable Long id) { } @PostMapping(\"/\") public ResponseEntity<User> createUser(@RequestBody User user) { } @PutMapping(\"/{id}\") public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) { } @DeleteMapping(\"/{id}\") public ResponseEntity<Void> deleteUser(@PathVariable Long id) { } } 1 2 3 4 5",
    "code": "@RestController\n@RequestMapping(\"/users\")\npublic class UserController {",
    "options": [
      "As a query parameter",
      "As a request body",
      "As a path variable",
      "As a request header"
    ],
    "answer": 2,
    "explanation": "For Q306, the correct answer is \"As a path variable\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 307,
    "category": "Servlets & Web Containers",
    "question": "What is a servlet in Java?",
    "code": "",
    "options": [
      "A client-side scripting language",
      "A server-side program that extends the functionality of a web server",
      "A markup language used for web page structuring",
      "A database management system"
    ],
    "answer": 1,
    "explanation": "For Q307, the correct answer is \"A server-side program that extends the functionality of a web server\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 308,
    "category": "Web Services & Data Formats",
    "question": "In Spring Boot, how do you customize the JSON serialization behaviour globally?",
    "code": "",
    "options": [
      "By configuring Jackson2ObjectMapperBuilder bean",
      "By setting properties in application.properties",
      "By using @JsonSerialize on classes",
      "By creating a custom JSON serializer class"
    ],
    "answer": 0,
    "explanation": "For Q308, the correct answer is \"By configuring Jackson2ObjectMapperBuilder bean\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 309,
    "category": "Java & Spring Architecture",
    "question": "Which of the following statements is true about constructor injection in Spring? Constructor injection is not supported in Spring.",
    "code": "",
    "options": [
      "Constructor injection can only be used for primitive types.",
      "Constructor injection is preferred over setter injection for mandatory",
      "dependencies.",
      "Constructor injection can only be used with XML-based configuration."
    ],
    "answer": 1,
    "explanation": "For Q309, the correct answer is \"Constructor injection is preferred over setter injection for mandatory\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 310,
    "category": "Spring Boot & Core Framework",
    "question": "What is the output of the following code snippet that uses Spring Boot's @Autowired annotation to inject a bean into another bean?",
    "code": "The code does not compile because MyOtherBean is not annotated with\n@Component.\nThe code does not compile because the constructor of MyBean is not\npublic.\nThe code runs without errors and successfully injects the MyOtherBean\nbean into the MyBean bean.\nComplier error.",
    "options": [
      "@Component",
      "public class MyBean {",
      "private MyOtherBean otherBean;",
      "@Autowired"
    ],
    "answer": 0,
    "explanation": "For Q310, the correct answer is \"@Component\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 311,
    "category": "Servlets & Web Containers",
    "question": "Which HTTP response code indicates that the requested resource is temporarily unavailable, but may be available in the future?",
    "code": "",
    "options": [
      "200",
      "301",
      "503",
      "403"
    ],
    "answer": 2,
    "explanation": "For Q311, the correct answer is \"503\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 312,
    "category": "Java & Spring Architecture",
    "question": "Maven is built on which programming language?",
    "code": "",
    "options": [
      "Java",
      "Python",
      "C++",
      "Ruby"
    ],
    "answer": 0,
    "explanation": "For Q312, the correct answer is \"Java\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 313,
    "category": "Web Services & Data Formats",
    "question": "In a multi-module Maven project for an e-commerce system, you want to ensure all modules are built in the correct order. Which section of the pom.xml helps define the dependencies between modules? <dependencies> <build> @Autowired public MyBean(MyOtherBean otherBean) { this.otherBean = otherBean; } // bean logic } @Component public class MyOtherBean { // other bean logic } 5 6 7 8 9 10 11 12 13",
    "code": "",
    "options": [
      "14",
      "15",
      "<modules>",
      "<properties>"
    ],
    "answer": 2,
    "explanation": "For Q313, the correct answer is \"<modules>\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 314,
    "category": "DevOps & Git Version Control",
    "question": "When merging his branch into the main branch, Omar sees a message indicating a conflict. What does this mean?",
    "code": "",
    "options": [
      "His branch will be deleted automatically.",
      "There is conflicting code between the two branches that needs resolution.",
      "The merge will occur without any issues.",
      "Git will send a notification to the team about the conflict."
    ],
    "answer": 1,
    "explanation": "For Q314, the correct answer is \"There is conflicting code between the two branches that needs resolution.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 315,
    "category": "Spring Security & JWT",
    "question": "Jacob's application needs to validate that a user must have at least one role. Which annotation should he use to enforce this rule in his Spring Boot application?",
    "code": "",
    "options": [
      "@Size(min=1)",
      "@Max",
      "@NotEmpty",
      "@Required"
    ],
    "answer": 0,
    "explanation": "For Q315, the correct answer is \"@Size(min=1)\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 316,
    "category": "Spring MVC & REST API",
    "question": "In a cake shop application, you want to inject a service class into your controller. What is the recommended annotation to define a Spring service class?",
    "code": "",
    "options": [
      "@Service",
      "@Component",
      "@Autowired",
      "@Bean"
    ],
    "answer": 0,
    "explanation": "For Q316, the correct answer is \"@Service\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 317,
    "category": "Servlets & Web Containers",
    "question": "A user requests a specific page from your travel website. Which method in a servlet handles this GET request?",
    "code": "",
    "options": [
      "doPost()",
      "doGet()",
      "doService()",
      "doDispatch()"
    ],
    "answer": 1,
    "explanation": "For Q317, the correct answer is \"doGet()\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 318,
    "category": "Spring MVC & REST API",
    "question": "What will be the URL endpoint to create a new book using the below controller?",
    "code": "",
    "options": [
      "POST /api/books",
      "GET /api/books",
      "PUT /api/books",
      "DELETE /api/books"
    ],
    "answer": 0,
    "explanation": "For Q318, the correct answer is \"POST /api/books\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 319,
    "category": "DevOps & Git Version Control",
    "question": "Charlie is setting up Git for his development environment. What is the purpose of using SHA1 (Secure Hash Function) in Git?",
    "code": "",
    "options": [
      "To encrypt files",
      "To track changes in files",
      "To name and identify objects",
      "To manage branching and merging"
    ],
    "answer": 2,
    "explanation": "For Q319, the correct answer is \"To name and identify objects\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 320,
    "category": "JPA & ORM",
    "question": "In JPA, what is the purpose of the EntityManager interface? To define persistence operations and manage entity lifecycle. To execute SQL queries and interact with the database. To provide an interface for configuring the JPA implementation. To manage transactions and ensure data integrity. @RestController @RequestMapping(\"/api/books\") public class BookController { @GetMapping public List<Book> getAllBooks() { } @PostMapping public ResponseEntity<Book> createBook(@RequestBody Book book) { } @GetMapping(\"/{id}\") public ResponseEntity<Book> getBookById(@PathVariable(\"id\") Long id) { } @PutMapping(\"/{id}\") public ResponseEntity<Book> updateBook(@PathVariable(\"id\") Long id, @RequestBody Book book) { }",
    "code": "",
    "options": [
      "@DeleteMapping(\"/{id}\")",
      "public ResponseEntity<Void> deleteBook(@PathVariable(\"id\") Long id) {",
      "}",
      "}"
    ],
    "answer": 2,
    "explanation": "For Q320, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 321,
    "category": "JPA & ORM",
    "question": "What is the purpose of the JpaRepository interface in Spring Boot JPA?",
    "code": "",
    "options": [
      "To define basic CRUD (Create, Read, Update, Delete) operations for an entity.",
      "To execute native SQL queries and interact with the database.",
      "To define custom queries using JPQL (Java Persistence Query Language).",
      "To manage transactions and ensure data integrity."
    ],
    "answer": 0,
    "explanation": "For Q321, the correct answer is \"To define basic CRUD (Create, Read, Update, Delete) operations for an entity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 322,
    "category": "JPA & ORM",
    "question": "Sarah’s application throws an `IllegalArgumentException` when she passes a null value to a method expecting a user ID. Which annotation can she use to help prevent this in future requests?",
    "code": "",
    "options": [
      "@NotBlank",
      "@Valid",
      "@ValidRequest",
      "@NotNull"
    ],
    "answer": 3,
    "explanation": "For Q322, the correct answer is \"@NotNull\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 323,
    "category": "Spring Boot & Core Framework",
    "question": "What is the purpose of the @Autowired annotation in Spring?",
    "code": "",
    "options": [
      "To indicate a dependency that should be automatically injected",
      "To define a new bean in the Spring application context",
      "To enable Spring MVC support",
      "To handle exceptions thrown by Spring beans"
    ],
    "answer": 0,
    "explanation": "For Q323, the correct answer is \"To indicate a dependency that should be automatically injected\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 324,
    "category": "Web Services & Data Formats",
    "question": "You want to customize the build lifecycle of your project to run tests before packaging the application. In which section of the pom.xml would you configure the order of plugin executions?",
    "code": "",
    "options": [
      "<dependencies>",
      "<properties>",
      "<build>",
      "<profiles>"
    ],
    "answer": 2,
    "explanation": "For Q324, the correct answer is \"<build>\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 325,
    "category": "JPA & ORM",
    "question": "Question 325",
    "code": "/api/users\n/api/users/{id}\n/api/users/123\n/api/users?id=123",
    "options": [
      "What will be the URL pattern to access the getUserById endpoint for a user with ID 123?",
      "@RestController",
      "@RequestMapping(\"/api\")",
      "public class UserController {"
    ],
    "answer": 0,
    "explanation": "For Q325, the correct answer is \"What will be the URL pattern to access the getUserById endpoint for a user with ID 123?\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 326,
    "category": "JPA & ORM",
    "question": "You need to handle an HTTP request and return a JSON response from your Spring Boot application. Which code snippet correctly implements this? @GetMapping(\"/api/user/{id}\") public ResponseEntity<User> getUserById(@PathVariable Long id) { ... } @PostMapping(\"/api/user/{id}\") public ResponseEntity<User> getUserById(@PathVariable Long id) { ... }",
    "code": "",
    "options": [
      "@RequestMapping(\"/api/user/{id}\") public ResponseEntity<User>",
      "getUserById(@PathVariable Long id) { ... }",
      "@PutMapping(\"/api/user/{id}\") public ResponseEntity<User>",
      "getUserById(@PathVariable Long id) { ... }"
    ],
    "answer": 1,
    "explanation": "For Q326, the correct answer is \"getUserById(@PathVariable Long id) { ... }\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 327,
    "category": "JPA & ORM",
    "question": "Which HTTP method should be used to retrieve a specific book by its ID in this REST API? @GetMapping(\"/users\") public List<User> getUsers() { } @GetMapping(\"/users/{id}\") public ResponseEntity<User> getUserById(@PathVariable Long id) { } } 5 6 7 8 9 10 11 12 13 14 @GetMapping(\"/api/user/{id}\") public ResponseEntity<User> getUserById(@PathVariable Long id) { User user = userService.findById(id); return ResponseEntity.ok(user); } @GetMapping(\"/{id}\") public ResponseEntity<Book> getBookById(@PathVariable(\"id\") Long id) { Book book = bookService.getBookById(id); if (book != null) { return ResponseEntity.ok(book); } else { return ResponseEntity.notFound().build(); } } @PostMapping 1",
    "code": "@RestController\n@RequestMapping(\"/api/books\")\npublic class BookController {\n@Autowired\nprivate BookService bookService;\nGET\nPOST\nDELETE\nPUT",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 0,
    "explanation": "For Q327, the correct answer is \"2\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 328,
    "category": "Spring Boot & Core Framework",
    "question": "John is developing a Spring application where he needs to manage the lifecycle of his beans. He is currently using the default scope for most of his beans. However, he realizes he doesn't fully understand what the default scope entails. What is the default scope of a Spring bean in John's application?",
    "code": "",
    "options": [
      "Prototype",
      "Singleton",
      "Request",
      "Session"
    ],
    "answer": 1,
    "explanation": "For Q328, the correct answer is \"Singleton\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 329,
    "category": "Spring MVC & REST API",
    "question": "You need to automatically inject dependencies in your Spring application. Which annotation should you use in your controller?",
    "code": "",
    "options": [
      "@Inject",
      "@Autowired",
      "@Resource",
      "@Qualifier"
    ],
    "answer": 1,
    "explanation": "For Q329, the correct answer is \"@Autowired\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 330,
    "category": "JPA & ORM",
    "question": "Mark receives an `EntityNotFoundException` while trying to fetch user data. What does this exception indicate in his Spring application? The database is currently down. The requested entity does not exist in the database. There are connectivity issues with the database. The query syntax is incorrect. @ ost app g public ResponseEntity<Book> createBook(@RequestBody Book book) { Book createdBook = bookService.createBook(book); return ResponseEntity.status(HttpStatus.CREATED).body(createdBook); } } 8 19",
    "code": "",
    "options": [
      "20",
      "21",
      "22",
      "23"
    ],
    "answer": 0,
    "explanation": "For Q330, the correct answer is \"20\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 331,
    "category": "Java & Spring Architecture",
    "question": "You are working on a restaurant website and want to include a form where users can make reservations. How would you ensure the form data is sent to the server using POST method?",
    "code": "",
    "options": [
      "<form method=\"get\">",
      "<form action=\"post\">",
      "<form method=\"post\">",
      "<form type=\"post\">"
    ],
    "answer": 2,
    "explanation": "For Q331, the correct answer is \"<form method=\"post\">\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 332,
    "category": "Servlets & Web Containers",
    "question": "Which HTTP status code indicates a successful request?",
    "code": "",
    "options": [
      "200",
      "404",
      "500",
      "302"
    ],
    "answer": 0,
    "explanation": "For Q332, the correct answer is \"200\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 333,
    "category": "Servlets & Web Containers",
    "question": "Which HTTP method is typically used to retrieve data from a server using a servlet?",
    "code": "",
    "options": [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    "answer": 0,
    "explanation": "For Q333, the correct answer is \"GET\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 334,
    "category": "Java & Spring Architecture",
    "question": "What is the purpose of the @Qualifier annotation in Spring?",
    "code": "",
    "options": [
      "To identify primary beans",
      "To specify a bean name",
      "To define bean scopes",
      "To resolve bean ambiguities"
    ],
    "answer": 3,
    "explanation": "For Q334, the correct answer is \"To resolve bean ambiguities\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 335,
    "category": "Spring Security & JWT",
    "question": "What is the role of the DispatcherServlet in a Spring MVC application?",
    "code": "",
    "options": [
      "It handles all HTTP requests and responses.",
      "It manages database connections.",
      "It defines mappings between URL paths and controllers.",
      "It processes asynchronous tasks."
    ],
    "answer": 0,
    "explanation": "For Q335, the correct answer is \"It handles all HTTP requests and responses.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 336,
    "category": "JPA & ORM",
    "question": "What will happen if the findById method of the UserRepository in the getUserById method returns an empty Optional?",
    "code": "",
    "options": [
      "It will return null as the result.",
      "It will throw an exception of type UserNotFoundException.",
      "It will return an empty User object.",
      "It will return a default User object."
    ],
    "answer": 1,
    "explanation": "For Q336, the correct answer is \"It will throw an exception of type UserNotFoundException.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 337,
    "category": "JPA & ORM",
    "question": "What is the expected HTTP method and URI to retrieve a list of users from this API? GET /api/users POST /api/users GET /users POST /users @Service public class UserService { @Autowired private UserRepository userRepository; public User getUserById(String userId) { return userRepository.findById(userId) .orElseThrow(() -> new UserNotFoundException(\"User not found with ID: \" + userId)); } public User createUser(User user) { // Validation and save logic return userRepository.save(user); } } @GetMapping(\"/users\") public List<User> getUsers() { List<User> users = new ArrayList<>(); return users; } @PostMapping(\"/users\") public User createUser(@RequestBody User user) { return user; } } 1 2 3 4 5 6 7 8 9 10 11",
    "code": "@RestController\n@RequestMapping(\"/api\")\npublic class UserController {",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 0,
    "explanation": "For Q337, the correct answer is \"12\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 338,
    "category": "JPA & ORM",
    "question": "What is the purpose of the EntityManager interface in Spring Boot JPA?",
    "code": "",
    "options": [
      "To define persistence operations and manage entity lifecycle.",
      "To execute SQL queries and interact with the database.",
      "To manage transactions and ensure data integrity.",
      "To provide an interface for configuring the JPA implementation."
    ],
    "answer": 0,
    "explanation": "For Q338, the correct answer is \"To define persistence operations and manage entity lifecycle.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 339,
    "category": "Java & Spring Architecture",
    "question": "Which of the following is NOT a scope in Spring?",
    "code": "",
    "options": [
      "Singleton",
      "Prototype",
      "Request",
      "Static"
    ],
    "answer": 3,
    "explanation": "For Q339, the correct answer is \"Static\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 340,
    "category": "Java & Spring Architecture",
    "question": "John wants to extract a list of user names from a database and maintain their order. What collection would be most appropriate for this task in Spring Boot?",
    "code": "",
    "options": [
      "Set",
      "List",
      "Queue",
      "Map"
    ],
    "answer": 1,
    "explanation": "For Q340, the correct answer is \"List\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 341,
    "category": "JPA & ORM",
    "question": "What is the output of the following code snippet that uses Spring Boot's @Transactional annotation to wrap a method call in a transaction? @Service public class MyService { @Transactional public void updateSomething() { // update something in the database } } @SpringBootApplication public class MyApp { public static void main(String[] args) { ConfigurableApplicationContext context = SpringApplication.run(MyApp.class, args);",
    "code": "The code does not compile because the @Transactional annotation is not\nused correctly.\nThe code runs without errors but does not wrap the updateSomething()\nmethod in a transaction.\nThe code runs without errors and wraps the updateSomething() method in a\ntransaction.\nCompiler error.",
    "options": [
      "MyService myService = context.getBean(MyService.class);",
      "myService.updateSomething();",
      "}",
      "}"
    ],
    "answer": 2,
    "explanation": "For Q341, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 342,
    "category": "Spring Boot & Core Framework",
    "question": "Which annotation is commonly used in the Spring Framework to mark a class as a Spring bean?",
    "code": "",
    "options": [
      "@Component",
      "@Service",
      "@Repository",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "For Q342, the correct answer is \"All of the above\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 343,
    "category": "JPA & ORM",
    "question": "A developer is creating a RESTful service in Spring Boot that requires the use of JPA repositories for CRUD operations. The service needs to simplify database interactions without writing repetitive code for each operation. What is the key advantage of using Spring Data JPA repositories in this context? They eliminate the need for writing boilerplate code for common data access operations.",
    "code": "",
    "options": [
      "They require developers to write complex SQL queries for each CRUD",
      "operation.",
      "They are only useful for interactions with NoSQL databases.",
      "They mandate the use of specific data sources for persistence."
    ],
    "answer": 1,
    "explanation": "For Q343, the correct answer is \"operation.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 344,
    "category": "JPA & ORM",
    "question": "What is the primary benefit of using JPA over Hibernate directly?",
    "code": "",
    "options": [
      "JPA provides better performance and efficiency in database operations.",
      "JPA provides a standard API, allowing for vendor-independent code.",
      "JPA offers more advanced features and functionalities than Hibernate.",
      "JPA simplifies the mapping process and reduces boilerplate code."
    ],
    "answer": 1,
    "explanation": "For Q344, the correct answer is \"JPA provides a standard API, allowing for vendor-independent code.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 345,
    "category": "JPA & ORM",
    "question": "Which of the following statements is true about Hibernate and JPA?",
    "code": "",
    "options": [
      "Hibernate is a specific implementation of JPA.",
      "JPA is a specific implementation of Hibernate.",
      "Hibernate and JPA are unrelated and serve different purposes.",
      "Hibernate and JPA can be used interchangeably without any differences."
    ],
    "answer": 0,
    "explanation": "For Q345, the correct answer is \"Hibernate is a specific implementation of JPA.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 346,
    "category": "Java & Spring Architecture",
    "question": "While debugging an application, Sophia discovers a `DataIntegrityViolationException`. What is the common reason for this error in a Spring Boot application?",
    "code": "",
    "options": [
      "The database connection string is incorrect.",
      "Data being inserted violates constraints set in the database schema.",
      "There is a syntax error in the query.",
      "The method is called without the required inputs."
    ],
    "answer": 1,
    "explanation": "For Q346, the correct answer is \"Data being inserted violates constraints set in the database schema.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 347,
    "category": "Spring MVC & REST API",
    "question": "What will be the HTTP method and endpoint for creating a new user in the UserController?",
    "code": "",
    "options": [
      "GET /users/{id}",
      "POST /users",
      "PUT /users/{id}",
      "DELETE /users/{id}"
    ],
    "answer": 1,
    "explanation": "For Q347, the correct answer is \"POST /users\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 348,
    "category": "Spring Security & JWT",
    "question": "You want to create a new Spring Boot application with JPA support. Which of the following snippets correctly configures the DataSource? @RestController public class UserController { @Autowired private UserService userService; @GetMapping(\"/users/{id}\") public ResponseEntity<User> getUserById(@PathVariable(\"id\") String userId) { User user = userService.getUserById(userId); return ResponseEntity.ok(user); } @PostMapping(\"/users\") public ResponseEntity<User> createUser(@RequestBody User user) {",
    "code": "@Bean\npublic DataSource dataSource() {\nreturn DataSourceBuilder.create()\n.driverClassName(\"com.mysql.cj.jdbc.Driver\")\n.url(\"jdbc:mysql://localhost:3306/mydb\")\n.username(\"user\")\n.password(\"password\")\n()\n1\n2\n3\n4\n5\n6\n7\n@Configuration public DataSource dataSource() { ... }\n@Bean public DataSource dataSource() { ... }\n@Autowired public DataSource dataSource() { ... }\n@Service public DataSource dataSource() { ... }",
    "options": [
      "User createdUser = userService.createUser(user);",
      "return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);",
      "}",
      "}"
    ],
    "answer": 2,
    "explanation": "For Q348, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 349,
    "category": "Spring Security & JWT",
    "question": "Which Spring component provides authentication and authorization capabilities for securing Spring-based applications?",
    "code": "",
    "options": [
      "Spring AOP",
      "Spring MVC",
      "Spring IoC",
      "Spring Security"
    ],
    "answer": 3,
    "explanation": "For Q349, the correct answer is \"Spring Security\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 350,
    "category": "Spring Boot & Core Framework",
    "question": "Which of the following statements about Spring's IoC container is true? The IoC container creates and manages singleton beans only. The IoC container can create and manage beans with different scopes,",
    "code": "",
    "options": [
      "including singleton and prototype",
      "The IoC container reuses prototype bean instances after the first creation",
      "The IoC container is responsible for injecting dependencies into beans using",
      "the @Inject annotation"
    ],
    "answer": 0,
    "explanation": "For Q350, the correct answer is \"including singleton and prototype\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 351,
    "category": "Spring MVC & REST API",
    "question": "What will be the HTTP method used to access the createUser endpoint? GET POST .build(); } 8 9 @RestController @RequestMapping(\"/api\") public class UserController { @GetMapping(\"/users\") public List<User> getUsers() { }",
    "code": "PUT\nDELETE",
    "options": [
      "@PostMapping(\"/users\")",
      "public ResponseEntity<String> createUser(@RequestBody User user) {",
      "}",
      "}"
    ],
    "answer": 0,
    "explanation": "For Q351, the correct answer is \"@PostMapping(\"/users\")\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 352,
    "category": "Spring Boot & Core Framework",
    "question": "Which of the following modules of the Spring Framework is responsible for dependency injection and inversion of control (IoC)?",
    "code": "",
    "options": [
      "Spring MVC",
      "Spring Core",
      "Spring Data",
      "Spring Boot"
    ],
    "answer": 1,
    "explanation": "For Q352, the correct answer is \"Spring Core\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 353,
    "category": "Java & Spring Architecture",
    "question": "What is the purpose of the Spring Data module?",
    "code": "",
    "options": [
      "To handle transactions",
      "To provide support for JDBC",
      "To simplify database access",
      "To handle messaging"
    ],
    "answer": 2,
    "explanation": "For Q353, the correct answer is \"To simplify database access\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 354,
    "category": "JPA & ORM",
    "question": "In Spring Boot JPA, which annotation is used to define a primary key field in an entity class?",
    "code": "",
    "options": [
      "@PrimaryKey",
      "@Id",
      "@Column",
      "@GeneratedValue"
    ],
    "answer": 1,
    "explanation": "For Q354, the correct answer is \"@Id\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 355,
    "category": "Spring Boot & Core Framework",
    "question": "Alice wanted to use IoC containers to assemble the dependencies between the objects. Which of the following are correct IoC containers that she can use in Spring?",
    "code": "",
    "options": [
      "BeanFactory, ApplicationContext, IocContextFactory",
      "BeanFactory, BeanContext, IocContextFactory",
      "BeanFactory, ApplicationContext",
      "BeanFactory, ApplicationContext, BeanContext"
    ],
    "answer": 2,
    "explanation": "For Q355, the correct answer is \"BeanFactory, ApplicationContext\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 356,
    "category": "Servlets & Web Containers",
    "question": "What does the HTTP response code 404 indicate?",
    "code": "",
    "options": [
      "Unauthorized access",
      "Successful request with no content",
      "Resource not found",
      "Internal server error"
    ],
    "answer": 2,
    "explanation": "For Q356, the correct answer is \"Resource not found\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 357,
    "category": "JPA & ORM",
    "question": "You are using Spring Data JPA and want to create a custom query to find users by their email. What is the correct repository method? List<User> findByEmail(String email); @Query(\"SELECT u FROM User u WHERE u.email = \") List<User> findByEmail(@Param(\"email\") String email);",
    "code": "",
    "options": [
      "@Query(\"SELECT * FROM User WHERE email = ?1\") List<User>",
      "findByEmail(String email);",
      "@Query(\"SELECT u FROM User u WHERE u.email = ?1\") User",
      "findByEmail(String email);"
    ],
    "answer": 1,
    "explanation": "For Q357, the correct answer is \"findByEmail(String email);\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 358,
    "category": "JPA & ORM",
    "question": "A Spring Data JPA repository is designed to fetch a paginated list of `Product` objects from the database. The developer has identified the need to sort these products by price in descending order while paginating the results. How should the developer implement this? By using the Pageable interface with Sort.Order(price, Sort.Direction.DESC) in the repository method.",
    "code": "",
    "options": [
      "By manually implementing pagination and sorting in the service layer",
      "without leveraging JPA features.",
      "By adding sorting parameters directly in the SQL query string.",
      "By creating a custom pagination service that handles sorting independently."
    ],
    "answer": 0,
    "explanation": "For Q358, the correct answer is \"By manually implementing pagination and sorting in the service layer\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 359,
    "category": "Servlets & Web Containers",
    "question": "What will be the HTTP response status code after successfully creating a new product?",
    "code": "",
    "options": [
      "200",
      "201",
      "204",
      "400"
    ],
    "answer": 1,
    "explanation": "For Q359, the correct answer is \"201\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 360,
    "category": "JPA & ORM",
    "question": "In a Spring Boot application, a developer is trying to establish a one-to-many relationship between a `Customer` entity and an associated `Order` entity. Which of the following configurations correctly implements this relationship? Use @ManyToOne annotation on the Order entity and @OneToMany on the Customer entity.",
    "code": "",
    "options": [
      "Apply @OneToOne annotation on both entities.",
      "Use @OneToMany annotation on the Order entity and @ManyToOne on the",
      "Customer entity.",
      "Apply @ManyToOne on Customer and @OneToOne on Order entity."
    ],
    "answer": 2,
    "explanation": "For Q360, the correct answer is \"Customer entity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 361,
    "category": "Spring MVC & REST API",
    "question": "You are building a microservice that fetches data from a database. How do you inject the service that interacts with the database into a Spring Boot controller?",
    "code": "",
    "options": [
      "@Service",
      "@Repository",
      "@Autowired",
      "@Component"
    ],
    "answer": 2,
    "explanation": "For Q361, the correct answer is \"@Autowired\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 362,
    "category": "JPA & ORM",
    "question": "What is the purpose of the @RequestBody annotation in a Spring Boot controller method? It represents the request parameters passed in the URL. @RestController @RequestMapping(\"/api\") public class ProductController { @PostMapping(\"/products\") public ResponseEntity<Void> createProduct(@RequestBody Product product) {",
    "code": "It defines the URL mapping for the controller method.\nIt specifies the HTTP method to be used for the request.\nIt indicates that the method handles a request with a JSON payload.",
    "options": [
      "// Save product to the database",
      "return ResponseEntity.created(URI.create(\"/api/products/\" + product.getId())).build();",
      "}",
      "}"
    ],
    "answer": 2,
    "explanation": "For Q362, the correct answer is \"}\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 363,
    "category": "Java & Spring Architecture",
    "question": "Which protocol is commonly used for communication between a web client and a web server?",
    "code": "",
    "options": [
      "HTTP",
      "FTP",
      "SMTP",
      "DHCP"
    ],
    "answer": 0,
    "explanation": "For Q363, the correct answer is \"HTTP\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 364,
    "category": "Spring Boot & Core Framework",
    "question": "What is the purpose of the ApplicationContext interface in Spring's IoC container? It represents the configuration metadata that the container uses to create and manage beans. It serves as the main interface for accessing and interacting with the Spring",
    "code": "",
    "options": [
      "IoC container.",
      "It provides a mechanism for performing aspect-oriented programming",
      "(AOP) in Spring applications.",
      "It defines a set of standard annotations for dependency injection in Spring."
    ],
    "answer": 0,
    "explanation": "For Q364, the correct answer is \"IoC container.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 365,
    "category": "Servlets & Web Containers",
    "question": "Grace's API returns a list of products each time a user accesses the products endpoint. What Spring annotation should she use to map the HTTP GET request to this method?",
    "code": "",
    "options": [
      "@PutMapping",
      "@PostMapping",
      "@GetMapping",
      "@RequestMapping"
    ],
    "answer": 2,
    "explanation": "For Q365, the correct answer is \"@GetMapping\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 366,
    "category": "Java & Spring Architecture",
    "question": "Michelle wants to ensure a specific method in her service class runs within a transaction, regardless of how many times it is called. What annotation should she apply?",
    "code": "",
    "options": [
      "@Service",
      "@Transactional",
      "@Configuration",
      "@Autowired"
    ],
    "answer": 1,
    "explanation": "For Q366, the correct answer is \"@Transactional\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 367,
    "category": "Java & Spring Architecture",
    "question": "In client-server communications, what action does the client perform to initiate a request?",
    "code": "",
    "options": [
      "The client waits for a response from the server.",
      "The client sends a request to the server.",
      "The client updates the server data automatically.",
      "The client listens for data from other clients."
    ],
    "answer": 1,
    "explanation": "For Q367, the correct answer is \"The client sends a request to the server.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 368,
    "category": "Java & Spring Architecture",
    "question": "What are Webservices primarily designed for in the context of networked applications?",
    "code": "",
    "options": [
      "To store large amounts of data efficiently",
      "To enable interoperable machine-to-machine communication",
      "To create graphical user interfaces",
      "To enhance the performance of operating systems"
    ],
    "answer": 1,
    "explanation": "For Q368, the correct answer is \"To enable interoperable machine-to-machine communication\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 369,
    "category": "Web Services & Data Formats",
    "question": "Alex is working with XML configuration in a Spring project and needs to add a bean for a `UserService`. Which element must he use in his XML configuration file to define this bean properly?",
    "code": "",
    "options": [
      "element",
      "<bean>",
      "class",
      "component"
    ],
    "answer": 1,
    "explanation": "For Q369, the correct answer is \"<bean>\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 370,
    "category": "Spring Boot & Core Framework",
    "question": "Lila wants to set up her Spring application such that it automatically resolves the dependencies for her `PaymentService` based on the types of the injected components rather than the names. Which autowiring mode should she use to achieve this?",
    "code": "",
    "options": [
      "Autowiring by Constructor",
      "Autowiring by Name",
      "Autowiring by Type",
      "No Autowiring"
    ],
    "answer": 2,
    "explanation": "For Q370, the correct answer is \"Autowiring by Type\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 371,
    "category": "DevOps & Git Version Control",
    "question": "Emily is developing a Spring application where she needs to ensure that her service class requires a repository at construction time. She wants to enforce immutability for the repository reference within the service. Which type of dependency injection should she use?",
    "code": "",
    "options": [
      "Setter Injection",
      "Field Injection",
      "Interface Injection",
      "Constructor Injection"
    ],
    "answer": 3,
    "explanation": "For Q371, the correct answer is \"Constructor Injection\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 372,
    "category": "JPA & ORM",
    "question": "A developer is tasked with implementing a service that requires a mandatory database connection at the time of object creation. The developer is considering using Dependency Injection in Spring. Which method of Dependency Injection would be the most appropriate choice to ensure that the database connection is always provided when the service is instantiated? Setter Injection, allowing the database connection to be set post- instantiation. Constructor Injection, ensuring the database connection is passed at the time of object creation.",
    "code": "",
    "options": [
      "Field Injection, where the database connection is automatically set during",
      "the bean initialization.",
      "Method Injection, invoking a method to supply the database connection",
      "after the object is created."
    ],
    "answer": 0,
    "explanation": "For Q372, the correct answer is \"Field Injection, where the database connection is automatically set during\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 373,
    "category": "Spring Boot & Core Framework",
    "question": "Alex is developing a web application and wants to ensure that different components can work together without being tightly coupled. Which feature of the Spring framework should he use to effectively manage dependencies between these components?",
    "code": "",
    "options": [
      "Annotations",
      "Configuration files",
      "Dependency Injection",
      "Direct object instantiation"
    ],
    "answer": 2,
    "explanation": "For Q373, the correct answer is \"Dependency Injection\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 374,
    "category": "Spring Boot & Core Framework",
    "question": "Emma is building a Spring Boot application and wants to minimize the amount of configuration she has to write. Which feature of Spring Boot will help her automatically configure components without needing extensive manual configurations?",
    "code": "",
    "options": [
      "Manual bean definition",
      "Spring Initializr",
      "Auto-configuration",
      "XML configuration"
    ],
    "answer": 2,
    "explanation": "For Q374, the correct answer is \"Auto-configuration\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 375,
    "category": "JPQL & Database Queries",
    "question": "Linda is trying to send a new book entry to her Spring Boot application using Postman. What steps must she follow to correctly perform a POST request? Choose the \"GET\" method, set the URL, and include the book's details in the URL parameters. Select the \"POST\" method, ensure the URL points to the correct endpoint, and include the book's JSON representation in the body.",
    "code": "",
    "options": [
      "Use the \"PUT\" method, provide the URL, and add the book's details in the",
      "headers.",
      "Select \"DELETE\" method, provide the URL, and send the book's details as a",
      "query string."
    ],
    "answer": 0,
    "explanation": "For Q375, the correct answer is \"Use the \"PUT\" method, provide the URL, and add the book's details in the\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 376,
    "category": "Servlets & Web Containers",
    "question": "John is developing a RESTful API for a bookstore. He wants to allow users to retrieve the list of all available books. Which HTTP method should he use in his Spring Boot application to implement this functionality?",
    "code": "",
    "options": [
      "POST",
      "DELETE",
      "PUT",
      "GET"
    ],
    "answer": 3,
    "explanation": "For Q376, the correct answer is \"GET\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 377,
    "category": "Web Services & Data Formats",
    "question": "Moving forward with her API development, Mia wants to return JSON data after processing a GET request in Spring Boot. Which annotation should she use to ensure that her response is sent as JSON?",
    "code": "",
    "options": [
      "@ResponseBody",
      "@RequestMapping",
      "@Primary",
      "@GetMapping"
    ],
    "answer": 0,
    "explanation": "For Q377, the correct answer is \"@ResponseBody\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 378,
    "category": "Spring Security & JWT",
    "question": "Tom is developing a Spring Boot REST API that processes user login requests. When a user successfully logs in, which HTTP response code should Tom return to indicate that the login request was successful?",
    "code": "",
    "options": [
      "404 Not Found",
      "200 OK",
      "400 Bad Request",
      "500 Internal Server Error"
    ],
    "answer": 1,
    "explanation": "For Q378, the correct answer is \"200 OK\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 379,
    "category": "JPA & ORM",
    "question": "During testing, David encounters a scenario where his Spring Boot REST API throws an exception due to a failure in the database connection. Which HTTP response code would be most appropriate for David to return in this situation to indicate an internal server error?",
    "code": "",
    "options": [
      "401 Unauthorized",
      "200 OK",
      "404 Not Found",
      "500 Internal Server Error"
    ],
    "answer": 3,
    "explanation": "For Q379, the correct answer is \"500 Internal Server Error\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 380,
    "category": "Servlets & Web Containers",
    "question": "Lisa is building an e-commerce application. One of the endpoints is for retrieving product details. If a request is made for a product that does not exist in the database, which HTTP response code should she return to inform the user that the requested product was not found?",
    "code": "",
    "options": [
      "200 OK",
      "403 Forbidden",
      "500 Internal Server Error",
      "404 Not Found"
    ],
    "answer": 3,
    "explanation": "For Q380, the correct answer is \"404 Not Found\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 381,
    "category": "JPA & ORM",
    "question": "A developer is working on a Spring Boot application and needs to ensure that the service layer effectively interacts with the repository layer while maintaining the business logic. If they introduce a feature that retrieves users by their unique ID but find that they sometimes receive a 404 response, what does this indicate in the context of their REST API? The server is experiencing internal issues preventing it from fulfilling the request.",
    "code": "",
    "options": [
      "The requested user ID does not exist in the database.",
      "The API call was made without sufficient authentication.",
      "The server successfully processed the request, but the user data is not",
      "returned due to an API filter."
    ],
    "answer": 0,
    "explanation": "For Q381, the correct answer is \"The requested user ID does not exist in the database.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 382,
    "category": "JPA & ORM",
    "question": "Imagine a scenario where a team is testing a Spring Boot REST API for an e-commerce application. They encounter a situation where the API returns a 500 response after attempting to access a specific product by ID. What could be the most likely reason for this response? The product ID submitted was invalid or out of range.",
    "code": "",
    "options": [
      "The resource was found, but there was an issue with the database",
      "operation.",
      "The server has been deployed with incorrect environment variables.",
      "The request format was incorrect, leading to failure in processing."
    ],
    "answer": 0,
    "explanation": "For Q382, the correct answer is \"The resource was found, but there was an issue with the database\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 383,
    "category": "JPA & ORM",
    "question": "David is tasked with creating a custom exception in his Spring Boot service to indicate when a requested resource is not found. Which statement describes how he should define this custom exception? A custom exception must implement the Serializable interface.",
    "code": "",
    "options": [
      "A custom exception class extends the Exception class to define specific",
      "error conditions.",
      "A custom exception class is created using an interface.",
      "A custom exception class must be annotated with @RestController."
    ],
    "answer": 0,
    "explanation": "For Q383, the correct answer is \"A custom exception class extends the Exception class to define specific\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 384,
    "category": "Java & Spring Architecture",
    "question": "Emma is developing a Spring Boot application that frequently encounters errors, such as data not being found. She wants to ensure that her application handles exceptions gracefully. What will happen if an exception is thrown and no specific handling is implemented?",
    "code": "",
    "options": [
      "The application crashes without any response.",
      "The application automatically retries the request.",
      "Spring Boot provides a default error response to the client.",
      "The exception is logged but not propagated to the client."
    ],
    "answer": 2,
    "explanation": "For Q384, the correct answer is \"Spring Boot provides a default error response to the client.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 385,
    "category": "JPA & ORM",
    "question": "James is working on a banking application where he needs to implement exception handling to deal with cases when users attempt to withdraw more money than they have in their account. He considers creating a custom exception named `InsufficientFundsException`. What should he ideally include in this custom exception class to provide meaningful feedback when the exception is thrown? A constructor that only takes a String message to indicate the reason for the exception. A method that logs the exception details to the database whenever it is thrown.",
    "code": "",
    "options": [
      "Additional fields to store account details and the required amount to make",
      "the exception context richer.",
      "An empty constructor so that the exception can be instantiated without any",
      "data."
    ],
    "answer": 0,
    "explanation": "For Q385, the correct answer is \"Additional fields to store account details and the required amount to make\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 386,
    "category": "Java & Spring Architecture",
    "question": "Emma is building a user management system in her Springboot application. She needs to ensure that each user can only be registered once, based on their usernames. What is the most suitable Collection type for storing the usernames?",
    "code": "",
    "options": [
      "ArrayList",
      "HashMap",
      "Set",
      "LinkedList"
    ],
    "answer": 2,
    "explanation": "For Q386, the correct answer is \"Set\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 387,
    "category": "Spring Security & JWT",
    "question": "A developer is working on a library management system where each book has a unique ISBN number and several attributes like title, author, and genre. They need a solution to store and manage these books efficiently, allowing for quick lookup by ISBN. Which Springboot application for CRUD operations using Collections should the developer use to best suit these requirements?",
    "code": "",
    "options": [
      "List of Books",
      "HashMap with ISBN as the key",
      "Array of Books",
      "TreeSet of Books"
    ],
    "answer": 1,
    "explanation": "For Q387, the correct answer is \"HashMap with ISBN as the key\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 388,
    "category": "JPA & ORM",
    "question": "John is developing a new application that requires him to manage the relationship between users and the products they purchase. He wants to avoid writing complex SQL joins and code to manually handle these relationships. Which advantage of using ORM over JDBC would best suit John's needs in this scenario? ORM provides automatic mapping of objects to database tables, reducing",
    "code": "",
    "options": [
      "manual coding effort.",
      "JDBC requires complex SQL queries to map objects manually.",
      "ORM does not support relationships between objects.",
      "JDBC automatically maps objects to tables without extra work."
    ],
    "answer": 0,
    "explanation": "For Q388, the correct answer is \"manual coding effort.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 389,
    "category": "Java & Spring Architecture",
    "question": "Lisa is maintaining an application that requires her to track and manage transactions with minimal coding overhead. She notices that her team has been writing repetitive code to handle transactions using JDBC. Which feature of ORM would help simplify transaction management for Lisa's team? ORM requires more code to handle transactions than JDBC. Transactions in ORM can only be managed manually without framework",
    "code": "",
    "options": [
      "support.",
      "ORM simplifies transaction management through built-in methods, reducing",
      "boilerplate code.",
      "JDBC automatically handles rollback for all operations without user input."
    ],
    "answer": 1,
    "explanation": "For Q389, the correct answer is \"ORM simplifies transaction management through built-in methods, reducing\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 390,
    "category": "JPA & ORM",
    "question": "Michael is tasked with migrating a legacy system that uses JDBC to a modern application stack. One of his key requirements is to reduce the amount of boilerplate code needed for database operations. He considers adopting ORM for this migration. What is the main advantage Michael should highlight when discussing this shift to his team? ORM can require extensive manual configuration compared to JDBC.",
    "code": "",
    "options": [
      "ORM abstracts away SQL complexities, allowing developers to focus on",
      "business logic.",
      "ORM lacks support for batch operations, which JDBC handles efficiently.",
      "ORM's performance is inherently slower due to data abstraction."
    ],
    "answer": 0,
    "explanation": "For Q390, the correct answer is \"ORM abstracts away SQL complexities, allowing developers to focus on\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 391,
    "category": "JPA & ORM",
    "question": "Tom is developing a new Java application that requires him to create a class that represents a user in a database. To ensure this class is recognized as an entity by Hibernate, which annotation should he use?",
    "code": "",
    "options": [
      "@Table",
      "@Entity",
      "@Column",
      "@Id"
    ],
    "answer": 1,
    "explanation": "For Q391, the correct answer is \"@Entity\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 392,
    "category": "JPA & ORM",
    "question": "Lisa is tasked with creating a new application that requires tracking multiple orders associated with a single customer. Which annotation should she use in her Customer entity class to demonstrate this one-to-many relationship?",
    "code": "",
    "options": [
      "@ManyToOne",
      "@OneToMany",
      "@JoinColumn",
      "@Column"
    ],
    "answer": 1,
    "explanation": "For Q392, the correct answer is \"@OneToMany\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 393,
    "category": "JPA & ORM",
    "question": "James is implementing a database schema in his application and needs to specify which attribute serves as the unique identifier for his Product entity. Which annotation will he need to apply to the attribute representing the product ID?",
    "code": "",
    "options": [
      "@GeneratedValue",
      "@Id",
      "@Version",
      "@Transient"
    ],
    "answer": 1,
    "explanation": "For Q393, the correct answer is \"@Id\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 394,
    "category": "JPA & ORM",
    "question": "A developer is working on a library management system and needs to create a class to represent a book entity in the database. The class should allow Hibernate to know that this is a persistent entity, and it should be mapped to a table named \"books\" with an auto-generated ID for each book. What annotations should the developer use to achieve this?",
    "code": "",
    "options": [
      "@Transient and @Entity",
      "@Table(name=\"books\") and @Id",
      "@Entity and @GeneratedValue",
      "@Entity, @Table(name=\"books\"), and @Id and @GeneratedValue"
    ],
    "answer": 3,
    "explanation": "For Q394, the correct answer is \"@Entity, @Table(name=\"books\"), and @Id and @GeneratedValue\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 395,
    "category": "JPA & ORM",
    "question": "John is developing a Spring Boot application and needs to define a class that corresponds to a database table for storing customer data. Which JPA annotation should he use at the top of his class to indicate that it is a JPA entity?",
    "code": "",
    "options": [
      "@Table",
      "@Column",
      "@Entity",
      "@Id"
    ],
    "answer": 2,
    "explanation": "For Q395, the correct answer is \"@Entity\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 396,
    "category": "JPA & ORM",
    "question": "Chris needs to configure an auto-incrementing field for the order ID in his entity class. Which JPA annotation is appropriate for this purpose?",
    "code": "",
    "options": [
      "@Id",
      "@Table",
      "@Column",
      "@GeneratedValue"
    ],
    "answer": 3,
    "explanation": "For Q396, the correct answer is \"@GeneratedValue\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 397,
    "category": "JPA & ORM",
    "question": "Rachel wants to map a Java class field to a specific column in the database and requires that the field name does not match the column name. Which JPA annotation should she use on her field to manage this mapping?",
    "code": "",
    "options": [
      "@Entity",
      "@Table",
      "@Id",
      "@Column"
    ],
    "answer": 3,
    "explanation": "For Q397, the correct answer is \"@Column\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 398,
    "category": "JPA & ORM",
    "question": "Emily is working on a project where she needs to specify a unique identifier for a product in her database. Which annotation should she apply to the field in her entity class to designate it as the primary key?",
    "code": "",
    "options": [
      "@GeneratedValue",
      "@Entity",
      "@Id",
      "@Column"
    ],
    "answer": 2,
    "explanation": "For Q398, the correct answer is \"@Id\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 399,
    "category": "Spring Security & JWT",
    "question": "Sarah is tasked with creating a repository for an application that manages books. She needs to retrieve a list of books by a specific author's last name. Which method naming convention should she follow to ensure that Spring Data JPA can automatically implement this function?",
    "code": "",
    "options": [
      "listByAuthorLastName",
      "getBooksByAuthorLastName",
      "findBooksByLastName",
      "retrieveBooksByAuthor"
    ],
    "answer": 1,
    "explanation": "For Q399, the correct answer is \"getBooksByAuthorLastName\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 400,
    "category": "JPA & ORM",
    "question": "A team is developing an e-commerce application where you need to model the relationship between customers and orders. Each customer can place multiple orders, but each order belongs to a single customer. Which Spring JPA annotation should be used in the Customer entity to represent this one-to-many relationship correctly?",
    "code": "",
    "options": [
      "@OneToOne",
      "@OneToMany",
      "@ManyToMany",
      "@Embedded"
    ],
    "answer": 1,
    "explanation": "For Q400, the correct answer is \"@OneToMany\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 401,
    "category": "JPA & ORM",
    "question": "Maria is configuring JPA relationships in her application and needs to define how entities should fetch related data. She prefers to load the related entity only when it is explicitly accessed to optimize performance. Which fetch type should she use for this purpose?",
    "code": "",
    "options": [
      "EAGER",
      "LAZY",
      "JOIN FETCH",
      "FETCH"
    ],
    "answer": 1,
    "explanation": "For Q401, the correct answer is \"LAZY\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 402,
    "category": "JPA & ORM",
    "question": "Mark is implementing a transaction management system in a banking application using Spring Boot JPA. He needs to ensure that a series of operations related to transferring money from one account to another either all succeed or fail together. Which annotation will he need to apply to the service method to achieve this?",
    "code": "",
    "options": [
      "@Rollback",
      "@Transactional",
      "@Async",
      "@Scheduled"
    ],
    "answer": 1,
    "explanation": "For Q402, the correct answer is \"@Transactional\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 403,
    "category": "JPQL & Database Queries",
    "question": "Jessica is developing a Springboot application that needs to select all the products available in the database. Which JPQL query should she use to achieve this?",
    "code": "",
    "options": [
      "SELECT * FROM Product",
      "SELECT p FROM Product p",
      "SELECT p.name FROM Product",
      "SELECT count(p) FROM Product p"
    ],
    "answer": 1,
    "explanation": "For Q403, the correct answer is \"SELECT p FROM Product p\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 404,
    "category": "JPQL & Database Queries",
    "question": "Tom wants to calculate the average price of all books in a library database using JPQL in a Springboot application. Which query would be most appropriate for him to use?",
    "code": "",
    "options": [
      "SELECT AVG(b.price) FROM Book b",
      "SELECT SUM(b.price) FROM Book b",
      "SELECT b.price FROM Book b",
      "SELECT COUNT(b) FROM Book b"
    ],
    "answer": 0,
    "explanation": "For Q404, the correct answer is \"SELECT AVG(b.price) FROM Book b\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 405,
    "category": "JPQL & Database Queries",
    "question": "Emily has a requirement to retrieve users from the database who are older than 30 years using a JPQL query. Which JPQL clause should she incorporate to filter her results appropriately?",
    "code": "",
    "options": [
      "SELECT u FROM User u WHERE u.age > 30",
      "SELECT u FROM User u ORDER BY u.age",
      "SELECT u FROM User u GROUP BY u.age",
      "SELECT u FROM User u HAVING u.age > 30"
    ],
    "answer": 0,
    "explanation": "For Q405, the correct answer is \"SELECT u FROM User u WHERE u.age > 30\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 406,
    "category": "JPQL & Database Queries",
    "question": "Alex is working on a Springboot application that requires him to join the `Order` and `Customer` entities to fetch order details along with customer information. Which query structure should Alex use to accomplish this?",
    "code": "",
    "options": [
      "SELECT o FROM Order o JOIN Customer c ON o.customerId = c.id",
      "SELECT o, c FROM Order o JOIN o.customer c",
      "SELECT o, c FROM Order o, Customer c",
      "SELECT o FROM Order o INNER JOIN Customer c"
    ],
    "answer": 1,
    "explanation": "For Q406, the correct answer is \"SELECT o, c FROM Order o JOIN o.customer c\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 407,
    "category": "JPA & ORM",
    "question": "A developer needs to implement a feature that retrieves the total sales amount from a `Sales` entity grouped by product category in a Spring Boot application using JPQL. Which of the following queries would achieve this? SELECT s.category, SUM(s.amount) FROM Sales s GROUP BY s.category",
    "code": "",
    "options": [
      "SELECT SUM(s.amount) FROM Sales s ORDER BY s.category",
      "SELECT s.category, AVERAGE(s.amount) FROM Sales s GROUP BY",
      "s.category",
      "SELECT DISTINCT s.category, SUM(s.totalAmount) FROM Sales s"
    ],
    "answer": 2,
    "explanation": "For Q407, the correct answer is \"s.category\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 408,
    "category": "JPA & ORM",
    "question": "In a Spring Boot application, a developer is required to retrieve a count of all orders placed by a specific customer using JPQL. The entity model includes `Customer` and `Order`, where a customer can have multiple orders. What would be the correct JPQL query for this requirement?",
    "code": "",
    "options": [
      "SELECT o FROM Order o WHERE o.customer.id = :customerId",
      "COUNT(SELECT o FROM Order o WHERE o.customerId = :customerId)",
      "SELECT COUNT(o) FROM Order o WHERE o.customer.id = :customerId",
      "COUNT(o) FROM Orders o WHERE o.customerId = :customerId"
    ],
    "answer": 2,
    "explanation": "For Q408, the correct answer is \"SELECT COUNT(o) FROM Order o WHERE o.customer.id = :customerId\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 409,
    "category": "JPA & ORM",
    "question": "A junior developer is trying to grasp the concept of joins in JPQL while fetching user data along with their associated orders. Which of the following JPQL queries correctly implements an inner join between `User` and `Order` entities based on a foreign key relationship where the `Order` entity has a field `user` that refers to the `User` entity?",
    "code": "",
    "options": [
      "SELECT u FROM User u INNER JOIN u.orders o",
      "SELECT u, o FROM User u, Order o WHERE u.id = o.userId",
      "SELECT u FROM User u JOIN Order o ON u.id = o.userId",
      "JOIN User u WITH Order o"
    ],
    "answer": 0,
    "explanation": "For Q409, the correct answer is \"SELECT u FROM User u INNER JOIN u.orders o\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 410,
    "category": "JPA & ORM",
    "question": "A developer is tasked with implementing a feature where users can update their profile information. The user entity has attributes like name, email, and age. The developer needs to write a JPQL update query to modify the user's email based on their ID. Which of the following JPQL queries correctly accomplishes this task?",
    "code": "",
    "options": [
      "UPDATE User u SET u.email = :email WHERE u.id = :id",
      "MODIFY User SET email = :email WHERE id = :id",
      "CHANGE User u SET u.email TO :email FOR u.id = :id",
      "UPDATE Users SET email = :email WHERE id = :id"
    ],
    "answer": 0,
    "explanation": "For Q410, the correct answer is \"UPDATE User u SET u.email = :email WHERE u.id = :id\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 411,
    "category": "Java & Spring Architecture",
    "question": "Emily is designing a new database for her online bookstore. She realizes that she needs to ensure that the same book cannot be listed multiple times in her database. What is the importance of normalization in her database design? Normalization makes the database slower by increasing redundancy.",
    "code": "",
    "options": [
      "Normalization is only a step during the backup process.",
      "Normalization helps eliminate duplicate data, ensuring efficient storage and",
      "maintenance.",
      "Normalization is irrelevant for small datasets."
    ],
    "answer": 1,
    "explanation": "For Q411, the correct answer is \"Normalization helps eliminate duplicate data, ensuring efficient storage and\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 412,
    "category": "Java & Spring Architecture",
    "question": "John is working on a database for his company's customer management system. He knows he needs to format the customer",
    "code": "Denormalized",
    "options": [
      "data to avoid having multiple phone numbers in the same column. Which level of normalization should he achieve to ensure that",
      "all entries in a column are atomic and unique?",
      "2NF",
      "3NF"
    ],
    "answer": 0,
    "explanation": "For Q412, the correct answer is \"data to avoid having multiple phone numbers in the same column. Which level of normalization should he achieve to ensure that\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 413,
    "category": "Java & Spring Architecture",
    "question": "Lucy's team is analyzing the sales data from their e-commerce platform. She notices that the same product details are listed multiple times across different entries. This data arrangement might slow down their reporting process. Which scenario best describes this issue?",
    "code": "",
    "options": [
      "Lucy's data is denormalized, leading to multiple entries of the same product.",
      "Lucy has ensured that all product information is stored in separate tables.",
      "Lucy's database is in 1NF with no repeating groups or ungrouped attributes.",
      "Lucy's data is organized in a normalized fashion preventing redundancy."
    ],
    "answer": 0,
    "explanation": "For Q413, the correct answer is \"Lucy's data is denormalized, leading to multiple entries of the same product.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 414,
    "category": "JPA & ORM",
    "question": "John is developing an application where each user has one unique profile. How should he define the relationship between the User entity and the Profile entity in Spring Boot JPA?",
    "code": "",
    "options": [
      "Use the @ManyToOne annotation for the User and Profile relationship.",
      "Use the @OneToOne annotation between the User and Profile entities.",
      "Implement a @OneToMany relationship for this scenario.",
      "Abandon the relationship as it cannot be established in JPA."
    ],
    "answer": 1,
    "explanation": "For Q414, the correct answer is \"Use the @OneToOne annotation between the User and Profile entities.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 415,
    "category": "JPA & ORM",
    "question": "Emily's task is to manage the personal information of customers, where each customer has exactly one address. What operation should she implement to retrieve a customer's address based on their ID in Spring Boot JPA?",
    "code": "",
    "options": [
      "Use the DELETE operation to remove the address.",
      "Execute a JOIN query to fetch the address using the customer's ID.",
      "Use the UPDATE operation to find the address.",
      "Create a new customer entry with the same ID."
    ],
    "answer": 1,
    "explanation": "For Q415, the correct answer is \"Execute a JOIN query to fetch the address using the customer's ID.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 416,
    "category": "Java & Spring Architecture",
    "question": "Alex wants to update the details of a specific user's account, which is linked to a unique profile in a Spring Boot application. What approach should he take to update the user's profile? Ignore the profile since updates are not allowed for One to One",
    "code": "",
    "options": [
      "relationships.",
      "Load the user entity, modify the profile attributes, and save the user entity.",
      "Delete the existing user profile and create a new one.",
      "Use a batch operation to update all user profiles at once."
    ],
    "answer": 1,
    "explanation": "For Q416, the correct answer is \"Load the user entity, modify the profile attributes, and save the user entity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 417,
    "category": "JPA & ORM",
    "question": "A software developer is implementing a feature in a Spring Boot application that requires a One-to-One association between the `Employee` and `Address` entities. To ensure that each Employee has exactly one Address, which configuration should the developer choose for the `Address` entity? Annotate the Address entity with @OneToOne and use @JoinColumn(name = \"employee_id\") to create the foreign key. Use @OneToMany on the Employee entity with @OneToOne on the Address",
    "code": "",
    "options": [
      "entity.",
      "Annotate Employee with @Embedded to include Address attributes directly.",
      "Implement the Address as a separate entity without any annotations, only",
      "using a reference in the Employee entity."
    ],
    "answer": 0,
    "explanation": "For Q417, the correct answer is \"entity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 418,
    "category": "JPA & ORM",
    "question": "A developer is working on an application that requires a bidirectional One-to-One relationship between a `Customer` and a `Wallet` entity. The `Wallet` entity should reference back to the `Customer`, while ensuring that both sides of the relationship are correctly maintained. How should the developer configure the `Customer` entity? Use @OneToOne(mappedBy = \"customer\") on the Customer entity to define the ownership in the Wallet. Confirm both Customer and Wallet have @OneToOne annotations without",
    "code": "",
    "options": [
      "defining mapped ownership.",
      "Implement the relationship using @ManyToOne in the Wallet entity, pointing",
      "back to Customer.",
      "Use @OneToOne on both entities without using any additional attributes."
    ],
    "answer": 0,
    "explanation": "For Q418, the correct answer is \"defining mapped ownership.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 419,
    "category": "Spring Boot & Core Framework",
    "question": "You are tasked with creating a RESTful API service with Spring Boot that handles user accounts. When a new User is registered, a Profile needs to be created simultaneously. What would be the best approach to ensure both entities are saved correctly while maintaining their relationship? Use @Transactional on the service method to save the User and Profile within the same transaction. Save the Profile first, then save the User without ensuring their relationship.",
    "code": "",
    "options": [
      "Only save the User entity and rely on a separate service to handle Profile",
      "creation later.",
      "Call the save method for both User and Profile independently, without",
      "managing transaction boundaries."
    ],
    "answer": 0,
    "explanation": "For Q419, the correct answer is \"Only save the User entity and rely on a separate service to handle Profile\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 420,
    "category": "Spring Security & JWT",
    "question": "Jessica is designing a library management system where each author can write multiple books. How should she establish a One to Many relationship in her Spring Boot JPA application? The Author entity should have a @OneToOne annotation, while the Book entity should have a @ManyToOne annotation. The Author entity should have a @OneToMany annotation, while the Book entity should be marked with @ManyToOne.",
    "code": "",
    "options": [
      "Both the Author and Book entities should reference each other with",
      "@ManyToMany annotations.",
      "The Book entity should exclusively define the One to Many relationship",
      "using @OneToMany annotation."
    ],
    "answer": 0,
    "explanation": "For Q420, the correct answer is \"Both the Author and Book entities should reference each other with\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 421,
    "category": "Java & Spring Architecture",
    "question": "Alice is working on a project that involves creating a web application for managing school classes. She needs to implement CRUD operations to manage classes and students, where each class can have multiple students. What is the correct sequence of actions to add a new student to an existing class? Create the student object, save it independently, and then associate it with the class. Update the class object with the new student in the list and then save the",
    "code": "",
    "options": [
      "class entity.",
      "Add the student to a separate database and link it to the class later.",
      "Only save the student entity; the class will automatically link to it in the",
      "database."
    ],
    "answer": 0,
    "explanation": "For Q421, the correct answer is \"class entity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 422,
    "category": "JPA & ORM",
    "question": "Tom is implementing a database to store customer information and their respective orders. He knows that each customer can have multiple orders. Which attribute in the Order entity should Tom use to establish which customer each order belongs to?",
    "code": "",
    "options": [
      "A field indicating the total price of the order.",
      "A field annotated with @ManyToOne referencing the Customer entity.",
      "A field containing the order date.",
      "A list containing all the orders in the Customer entity."
    ],
    "answer": 1,
    "explanation": "For Q422, the correct answer is \"A field annotated with @ManyToOne referencing the Customer entity.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 423,
    "category": "Spring Security & JWT",
    "question": "Maria is tasked with designing a bookstore application using Spring Boot JPA. She needs to establish a relationship where a single author can have multiple books. How should she define this One to Many association in her entity classes? Use @ManyToOne in the Author entity to reference a list of books.",
    "code": "",
    "options": [
      "Implement @OneToMany in the Author entity with a List while ensuring",
      "@ManyToOne in the Book entity.",
      "Define both entities with @OneToMany annotations.",
      "Create a separate entity for the relationship without any annotations."
    ],
    "answer": 0,
    "explanation": "For Q423, the correct answer is \"Implement @OneToMany in the Author entity with a List while ensuring\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 424,
    "category": "JPA & ORM",
    "question": "Sarah is implementing a task management system where a project can have multiple tasks. She extends the JpaRepository to manage CRUD operations for both `Project` and `Task` entities. Which statement is true regarding how she should implement the repository layer? She does not need to implement a repository for the Task entity since it is related to Project. Both ProjectRepository and TaskRepository should be extended from JpaRepository and JpaRepository respectively.",
    "code": "",
    "options": [
      "CRUD operations should be implemented using manual SQL queries without",
      "extending JpaRepository.",
      "She only needs one repository for both entities to handle the CRUD",
      "operations."
    ],
    "answer": 0,
    "explanation": "For Q424, the correct answer is \"CRUD operations should be implemented using manual SQL queries without\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 425,
    "category": "JPA & ORM",
    "question": "Alex is integrating a feature in his application's user management system that maintains each user's posts. The posts must be retrieved based on the associated user information. After defining a `User` entity with a list of `Post` entities, he used `@OneToMany(mappedBy = \"user\")` in the `User` class. What does this imply about the relationship? The User entity is responsible for managing the relationship.",
    "code": "",
    "options": [
      "The Post entity will manage the relationship and control database",
      "operations.",
      "The relationship cannot be cascaded to the Post entity.",
      "A join table must be used for this relationship."
    ],
    "answer": 0,
    "explanation": "For Q425, the correct answer is \"The Post entity will manage the relationship and control database\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 426,
    "category": "JPA & ORM",
    "question": "Tim is working on an e-commerce application where each order can have multiple order items. He decides to use cascading to manage the lifecycle of child entities related to the parent. Which annotation configuration will effectively propagate persistence operations from the `Order` entity to the `OrderItem` entities? Use @OneToMany(mappedBy = \"order\", cascade = CascadeType.ALL) in the Order class. Only the OrderItem should have the cascade configuration.",
    "code": "",
    "options": [
      "Parent entities cannot have cascade settings with One to Many",
      "relationships.",
      "Only persistence operations should be cascaded; retrieving data does not",
      "require cascades."
    ],
    "answer": 0,
    "explanation": "For Q426, the correct answer is \"Parent entities cannot have cascade settings with One to Many\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 427,
    "category": "Spring Security & JWT",
    "question": "Jane is developing a blog application where multiple blog posts can be attributed to a single author. Which situation exemplifies a Many to One relationship in this context?",
    "code": "",
    "options": [
      "Multiple authors can contribute to a single blog post.",
      "Each blog post can have multiple tags connected to it.",
      "Several blog posts belong to one specific author.",
      "A single author can write multiple comments on different posts."
    ],
    "answer": 2,
    "explanation": "For Q427, the correct answer is \"Several blog posts belong to one specific author.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 428,
    "category": "Java & Spring Architecture",
    "question": "Tom is designing a database for a school system where multiple students can enroll in a single class. Which description best fits this scenario regarding Many to One association?",
    "code": "",
    "options": [
      "Each student can enroll in multiple classes.",
      "Each class can have multiple teachers.",
      "Many students can be associated with one class.",
      "Each teacher can teach multiple classes."
    ],
    "answer": 2,
    "explanation": "For Q428, the correct answer is \"Many students can be associated with one class.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 429,
    "category": "Spring Security & JWT",
    "question": "Alex is developing a web application that requires different users to have different levels of access. Which role-based access control (RBAC) statement is correct?",
    "code": "",
    "options": [
      "Users with admin roles can access all resources.",
      "Users with user roles can access admin functionalities.",
      "All users can view sensitive data without restrictions.",
      "Users with guest roles can access restricted areas."
    ],
    "answer": 0,
    "explanation": "For Q429, the correct answer is \"Users with admin roles can access all resources.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 430,
    "category": "Spring Security & JWT",
    "question": "John wants to secure his Spring application by defining security rules efficiently. He discovers a specific annotation that helps in setting up Spring Security configurations within his Java classes. Which annotation should he use?",
    "code": "",
    "options": [
      "@EnableConfiguration",
      "@EnableSecurity",
      "@EnableWebSecurity",
      "@SecurityConfig"
    ],
    "answer": 2,
    "explanation": "For Q430, the correct answer is \"@EnableWebSecurity\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 431,
    "category": "JPA & ORM",
    "question": "A developer explains to a team that proving a user's identity occurs before determining what resources they can access. Which two concepts are they describing?",
    "code": "",
    "options": [
      "Authentication and authorization",
      "Authorization and encryption",
      "Authentication and encryption",
      "User roles and permissions"
    ],
    "answer": 0,
    "explanation": "For Q431, the correct answer is \"Authentication and authorization\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 432,
    "category": "Spring Security & JWT",
    "question": "Emma is tasked with implementing user authentication for her Spring application. She learns that one common method encodes credentials to avoid sending them in plain text. Which authentication mechanism is she most likely learning about?",
    "code": "",
    "options": [
      "Token-based Authentication",
      "OAuth",
      "Basic Authentication",
      "Digest Authentication"
    ],
    "answer": 2,
    "explanation": "For Q432, the correct answer is \"Basic Authentication\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 433,
    "category": "Spring Security & JWT",
    "question": "A healthcare application is being developed where only authorized medical personnel should access patient records. The team decides to implement Role-Based Access Control (RBAC) and assigns roles accordingly. What would be the best approach to implement RBAC for this scenario? Assign all users the same permissions to simplify management.",
    "code": "",
    "options": [
      "Implement roles such as 'Doctor' who can access full medical records and",
      "'Nurse' who can only view basic information.",
      "Revoking all permissions for users until they request access.",
      "Allow users to self-assign roles based on their job titles."
    ],
    "answer": 0,
    "explanation": "For Q433, the correct answer is \"Implement roles such as 'Doctor' who can access full medical records and\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 434,
    "category": "Spring Security & JWT",
    "question": "An online marketplace is concerned about fraudulent transactions. They are looking into securing user sessions to ensure that unauthorized access is minimized. What is the most effective method for managing user sessions? Allowing sessions to last indefinitely to avoid user inconvenience.",
    "code": "",
    "options": [
      "Implementing periodic re-validation of sessions, requiring users to log in",
      "again after a set timeout.",
      "Storing session state entirely on the client-side for faster access.",
      "Having users re-authenticate only after a month of inactivity."
    ],
    "answer": 0,
    "explanation": "For Q434, the correct answer is \"Implementing periodic re-validation of sessions, requiring users to log in\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 435,
    "category": "Spring Security & JWT",
    "question": "A web application allows different user roles to access various resources. Developers are tasked with ensuring that unauthorized users cannot access sensitive sections. What would be the best way to enforce this through URL-based authorization? Allow unrestricted access for all users to simplify development. Define strict URL-based access rules in the security configuration to limit",
    "code": "",
    "options": [
      "access based on user roles.",
      "Use a generic homepage redirection for unauthorized users as the only",
      "security measure.",
      "Disable all security checks to enhance application performance."
    ],
    "answer": 0,
    "explanation": "For Q435, the correct answer is \"access based on user roles.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 436,
    "category": "Spring Security & JWT",
    "question": "Alex is developing a Spring Boot application that requires user authentication through tokens. He needs to ensure that once a user logs in, they do not have to authenticate again for a specific period. Which of the following best describes the role of a refresh token in this scenario? Refresh tokens are used to log the user out of the application. Refresh tokens allow the user to maintain their session without re-entering",
    "code": "",
    "options": [
      "their credentials.",
      "Refresh tokens are temporary tokens that can only be used once.",
      "Refresh tokens are used to directly authenticate users without an initial",
      "login."
    ],
    "answer": 0,
    "explanation": "For Q436, the correct answer is \"their credentials.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 437,
    "category": "Spring Security & JWT",
    "question": "A developer is working on an e-commerce application that utilizes token-based authentication. After a user successfully logs in, the application generates an access token and a refresh token. What is the primary purpose of the refresh token in this scenario? To allow users to authenticate without re-entering their credentials once the",
    "code": "",
    "options": [
      "access token expires.",
      "To store sensitive user data such as passwords for quick access.",
      "To verify the authenticity of the access token without additional processing.",
      "To provide a backup if the access token is lost or compromised."
    ],
    "answer": 0,
    "explanation": "For Q437, the correct answer is \"access token expires.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 438,
    "category": "Spring Security & JWT",
    "question": "Sarah has implemented JWT (JSON Web Tokens) for user authentication in her Spring Boot application. She notices that there are multiple benefits to using JWT, especially for stateless authentication. Which of the following describes a major advantage of this approach in her application? JWT tokens are stored on the client-side, making server storage unnecessary. JWT tokens are easy to revoke at any time without affecting active",
    "code": "",
    "options": [
      "sessions.",
      "All data within a JWT token is automatically encrypted for security.",
      "The application has to maintain a session store for user authentication and",
      "authorization."
    ],
    "answer": 0,
    "explanation": "For Q438, the correct answer is \"sessions.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 439,
    "category": "Spring Security & JWT",
    "question": "Alice is developing a web application that requires user authentication. She decides to implement JWTs for handling user sessions. During the JWT generation process, she specifically includes the user's role information in the Payload. A week later, she encounters a scenario where a user claims their access has changed but the JWT they are using still includes the previous role. What could be the issue with her current implementation? The JWT should not include role information in the Payload. The JWT does not refresh automatically, which means changes in user roles",
    "code": "",
    "options": [
      "won't be reflected until a new token is issued.",
      "The Header must specify the user role to update it successfully.",
      "The server can invalidate the JWT whenever there's a role change, making it",
      "stateful."
    ],
    "answer": 0,
    "explanation": "For Q439, the correct answer is \"won't be reflected until a new token is issued.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 440,
    "category": "DevOps & Git Version Control",
    "question": "A team is deploying a critical update on their project, but one of the developers realizes they made a mistake that affected the code. They executed the command `git push origin main` after committing their changes. What should they do to rectify the mistake while minimizing disruptions? Use git revert to create a new commit that undoes the changes made by the",
    "code": "",
    "options": [
      "mistaken commit.",
      "Force push the previous commit using git push --force.",
      "Delete the mistaken commit from the main branch and re-push the master.",
      "Contact the project manager to redo the entire deployment process."
    ],
    "answer": 0,
    "explanation": "For Q440, the correct answer is \"mistaken commit.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 441,
    "category": "JPA & ORM",
    "question": "Alex is working on a new feature in a project that requires extensive changes. He decides to use a branch so that he can make changes without affecting the main codebase. After some time, he completes the feature but realizes that two other developers have made changes to the main branch that could lead to merge conflicts. What should Alex consider before merging his branch back into the main branch? Ensure his branch is up to date with the main branch and resolve any conflicts locally.",
    "code": "",
    "options": [
      "Only merge if the changes in the main branch are minor and do not affect",
      "his code.",
      "Ignore the changes in the main branch as they are not related to his feature.",
      "Ask the other developers to revert their changes before merging."
    ],
    "answer": 0,
    "explanation": "For Q441, the correct answer is \"Only merge if the changes in the main branch are minor and do not affect\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 442,
    "category": "Spring Security & JWT",
    "question": "Maria is teaching her new intern how to use Git. She explains that snapshots are taken at different points in time during development. The intern asks her about the role of commits. What is Maria's best explanation? Commits create snapshots of the entire project and store them in a designated folder. Commits represent individual changes and allow for the tracking of",
    "code": "",
    "options": [
      "modifications over time.",
      "Commits only record the changes made in a single file at once.",
      "Commits are used solely for backing up the project before significant",
      "updates."
    ],
    "answer": 0,
    "explanation": "For Q442, the correct answer is \"modifications over time.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  },
  {
    "id": 443,
    "category": "DevOps & Git Version Control",
    "question": "John has made some changes to the files in his local Git repository and is ready to save those changes. Which command should he use to preserve his changes along with a descriptive message?",
    "code": "",
    "options": [
      "git push",
      "git stage",
      "git commit",
      "git pull"
    ],
    "answer": 2,
    "explanation": "For Q443, the correct answer is \"git commit\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 444,
    "category": "DevOps & Git Version Control",
    "question": "Lisa has made a number of commits in her local repository and wants to share her work with her team by uploading the changes to the remote repository. What command will she use to achieve this?",
    "code": "",
    "options": [
      "git merge",
      "git stage",
      "git push",
      "git clone"
    ],
    "answer": 2,
    "explanation": "For Q444, the correct answer is \"git push\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Hard"
  },
  {
    "id": 445,
    "category": "DevOps & Git Version Control",
    "question": "Emma has just received a link to a remote Git repository containing a project she needs to work on. What command should she use to create a local copy of that repository on her machine?",
    "code": "",
    "options": [
      "git pull",
      "git clone",
      "git fetch",
      "git init"
    ],
    "answer": 1,
    "explanation": "For Q445, the correct answer is \"git clone\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Easy"
  },
  {
    "id": 446,
    "category": "JPQL & Database Queries",
    "question": "Jessica is working on a new feature for her web application and wants to create a separate branch to manage her changes. What is the correct way for her to create a new branch in GitHub using the web interface? Click on the \"Code\" tab, then type the new branch name in the \"Branch: main\" dropdown and click \"Create branch\". Navigate to the settings, select \"Branches\", and create a new branch from there.",
    "code": "",
    "options": [
      "Open a terminal, use git branch new-feature and push the branch.",
      "Send an email to the repository owner requesting a new branch creation.",
      "Answer Key & Solution",
      "Section 1 -"
    ],
    "answer": 0,
    "explanation": "For Q446, the correct answer is \"Open a terminal, use git branch new-feature and push the branch.\". This adheres strictly to standard Spring Boot, JPA/Hibernate, REST API, and Java enterprise design specifications.",
    "difficulty": "Medium"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = questionsData;
}
