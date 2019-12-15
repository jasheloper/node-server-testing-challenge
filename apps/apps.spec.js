// require statements

// require db
const db = require("../data/dbConfig");

// require apps
const Apps = require("./appsModel.js");

// describe 1
describe("Apps -insert ", () => {
  it("is able to add apps to the db", async () => {
    await db("apps").truncate();

    // declare a new app
    const newApp = await Apps.insert({
      name: "Photoshop",
      description: "photo app"
    });

        // declare another new app
    const newApp2 = await Apps.insert({
      name: "Notes",
      description: "quick note taking"
    });

    // calling apps db
    const apps = await db("apps");

    // tests length of new stuff above 
    expect(apps).toHaveLength(2);

    // test that new app name is correct
    expect(newApp.name).toBe("Photoshop");
    expect(newApp2.name).toBe("Notes");
  });
});


// Test for the readAll
 describe("readAll", () => {

 })


 // Test for the readAllById
 describe("readAllById", () => {

})


 // Test for the destroy (delete)
describe("destroy", () => {

})
