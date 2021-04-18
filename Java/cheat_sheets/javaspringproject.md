# Java Spring Projects

**Checklist**

1. Start a new Spring Starter Project:
    - Name: ProjectName (PascalCase)
    - Type: Maven
    - Java Version: 8
    - Packaging: War
    - Group: com.{yourname}.{projectname}  (all lowercase)
    - Description: Whatever you need
    - Package: same as group
    - Dependencies
        - MySQL Driver
        - Spring Boot DevTools
        - Spring Data JPA
        - Spring Web

1. Open your pom xml file and add in new dependencies
    - tomcat-embed-jasper
    - jstl (javax.servlet)
    - spring-boot-starter-validation
        - You can also add directly into your pom.xml file
        ``` xml
        <dependency>
                <groupId>org.apache.tomcat.embed</groupId>
                <artifactId>tomcat-embed-jasper</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
    	</dependency>
        <dependency>
                <groupId>javax.servlet</groupId>
                <artifactId>jstl</artifactId>
        </dependency>
        ```

1. In src/main/resources, edit application.properties, add these lines and update your schema name
    ``` properties
    spring.datasource.url=jdbc:mysql://localhost:3306/{{schema-name}}
    spring.datasource.username=root
    spring.datasource.password=root
    spring.jpa.hibernate.ddl-auto=update
    spring.mvc.view.prefix=/WEB-INF/
    spring.mvc.hiddenmethod.filter.enabled=true
    ```

1. Create new folders if they are not there already
    - src -> main -> webapp -> WEB-INF -> 
        - this is where you will put your jsp files
        - start with index.jsp
        - any further folders will be for your Database structures

1. In src/main/java, create new packages
    - com.{yourname}.{projectname}.controllers
        - will be used for your routing methods and API to check database
    - com.{yourname}.{projectname}.models
        - will hold your models
    - com.{yourname}.{projectname}.repositories
        - accesses CrudRepo to give you built in methods
    - com.{yourname}.{projectname}.services

1. Start your MAMP Servers

1. Create new Schemas in your MySQL Workbench to base your models on

1. Model
    - Create your models, based on the Schemas in your Workbench
    ``` java
    @Entity
    @Table(name="models")
    public class Model {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        // This will not allow the createdAt column to be updated after creation
        
        @Column(updatable=false)
        @DateTimeFormat(pattern="yyyy-MM-dd")
        private Date createdAt;
        @DateTimeFormat(pattern="yyyy-MM-dd")
        private Date updatedAt;
        
        @PrePersist
        protected void onCreate(){
            this.createdAt = new Date();
        }
        @PreUpdate
        protected void onUpdate(){
            this.updatedAt = new Date();

        // Possible choices below for attributes

        @NotNull
        @Size(min = 5, max = 200)
        private String title;
        @NotNull
        @Size(min = 5, max = 200)
        private String description;
        @NotNull
        @Size(min = 3, max = 40)
        private String language;
        @NotNull
        @Min(100)
        private Integer numberOfPages;
    ```
    - Make a baseline Model constructor
    
    - Make Getters and Setters
    ```java
        public Model() {

        }
    ```


1. Repository
    - This is how you will add your crud repository methods
    ``` java
    @Repository
    public interface ModelRepository extends CrudRepository<Model, Long>{
        List<Model> findAll();
    }
    ```

1. Services

    ```java
    @Service
    public class ModelService {
        private final ModelRepositoryName modelRepositoryName;

        public ModelService(ModelRepoName modelRepoName) {
            this.modelRepoName = modelRepoName;
        }

    // You can add your methods in here.

    }
    ```

1. API
    - the API can be used, with Postman, to check to see if your database is working, by using RestControllers to route

1. Controllers
    - will be used for your routing methods and API to check database
    ``` java
    @Controller
    public class ModelController {
        private final BookService bookService;
    
        public BookController(BookService bookService) {
            this.bookService = bookService;
        }

        @RequestMapping("/")
        public String index() {
            return "index.jsp";
    }
    ```

1. Jsp Files
    ```jsp
    <!-- Top of page -->
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>   
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    

    <!-- if needing validation -->
    <%@ page isErrorPage="true" %>    

    
    <!-- In header -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/app.js"></script>
    ```

