# Relational
    * SQL, Postgres
        stores data in tables - Excel
            Users Table - user.id = todo.fk
            Todo Table
        cells are strict - no empty cells
        Primary Key = id
        Foriegn Key = fk

    * Relationship Types
        one to one - you => ssn
        one to many - user => todos
        many to many - users => products (Amazon Store)

# Non - relational
    * Mongo DB
        stores data collections as arrays []
        stores documents as objects {}

            user {
                name: ''
                age: num
                _id: randomString
            }
            Todo {
                title: ''
                _id: randomString
                user: objectId => user._id 
            }
            
    * Mongoose - enforces data rigidity