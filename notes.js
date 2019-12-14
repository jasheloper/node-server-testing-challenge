// *** NOTES , PLANNING , THOUGHTS  ***

//////////////////////////////////////////////////////////

/*  What will be the resource?  
   A list of my favorite apps.

   {
      "Name:" ______ ,
      "Description:" ________ 
   }
       
*/


   
/*    MVP: 
      * 2 tests per route, written before production code

      * Route Handlers - GET  | CREATE  | DELETE

      * Storage? Token. 

      * Database? Nah. maybe later.  */

//////////////////////////////////////////////////////////


/* Documentation of my Process for this

1. Write the tests.

   *  Lecture Review:    https://youtu.be/zgrceUO_2z8?t=1186
   *  Create apps folder > then,  touch apps.spec.js

      * Describe Block 1: Apps.create work ?
         * Test 1:  is able to add apps to the db
         * Test 2:  is able to create the correct apps
   
      * Describe Block 1: Apps.delete work ?
         * Test 1:  is able to delete apps to the db
         * Test 2:  is able to delete the correct apps

2. Add DB Config :
   * touch dbConfig.js

3. Knex:
   > npm install knex

4. SQL:
   > npm install sqlite3 --save

5. Create a model for Apps 
   > apps folder
    * touch appsModel.js

6. Touch:
   * index.js
   Then, 
   mkdir api > touch server.js

7. install: yarn 

8. package.json scripts ~
    "server": "nodemon index.js",
    "test": "cross-env DB_ENV=testing jest --watch --verbose",
    "start": "node index.js"

9. Dependencies
  * npm install --save-dev cross-env
  * npm install dotenv

10. ///// HURRAY SERVER IS UP AND RUNNING //// 

11. npm install supertest --save-dev

12. Create Database 
   * Knex migrations
   * Table now appears in database

*/

