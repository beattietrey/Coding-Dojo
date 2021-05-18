1. Dealing with Databases
    1. dbs
        1. Show all databases
            ```
            show dbs
            ```
        1. Show current selected database
            ```
            db
            ```
        1. Change to another database, will create that database if it does not exist
            ```
            use DB_NAME
            ```
    1. Collections
        1. Show all collections in a database
            ```
            show collections
            ```
        1. Create a collection
            ```
            db.createCollection("COLLECTION_NAME")
            ```
        1. Destroy a collection
            ```
            db.COLLECTION_NAME.drop()
            ```

1. CRUD COMMANDS
    1. Add new item to database, will create new database if one does not exist
        ```js
        db.COLLECTION_NAME.insert({YOUR_JSON_DOCUMENT})
        ```
    1. Find, it returns the most it can, if you don't give it a parameter, it returns everything
        ```js
        db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT})
        ```
        1. Add .pretty to make the output more readable
            ```js
            db.COLLECTION_NAME.find({YOUR_QUERY_DOCUMENT}).pretty()
            ```
        1. if you are searching by ID, you need to pass in an ObjectId()
            ```js
            db.COLLECTION_NAME.find({_id: ObjectId("5462a78e514e258182f4c69a")})
            ```
    1. Destroy, takes an optional secondary parameter, that defaults to false. If it is present and true, it tells the Database to only delete the first found instance that matches, otherwise it deletes all
        ```js
        db.COLLECTION_NAME.remove({YOUR_QUERY_DOCUMENT}, BOOLEAN)
        ```
    1. Update, requires a search parameter object, followed by the updated key/value pair set object, if you don't add the $set, the document will overwrite everything except the id, with the new information
        ```js
        db.COLLECTION_NAME.update({YOUR_QUERY_DOCUMENT}, {NEW_KEY_VALUE_PAIR}).pretty()
        db.COLLECTION_NAME.update({YOUR_QUERY_DOCUMENT}, {$set:{NEW_KEY_VALUE_PAIR}}).pretty()
        ```
1. Operators
    1. Pass these as the key in a keyvalue pair as an value object to return more specific output (https://docs.mongodb.com/manual/reference/operator/)
        ```js
        $gt: // greater than numerical value
        $gte: // greater than or equal
        $lt: // less than
        $lte: // less than or equal to

        $in: // particular value in array
        $push: // adds to an array in object
        $pop: {array_key: (1 or -1)} //removes first or last value in array
        $addToSet: //functions like push, but only if the value doesn't already exist
        $pull: {array_key: value}// remove all instances of value from the arrray specified by the array_key that match QUERY
        ```


