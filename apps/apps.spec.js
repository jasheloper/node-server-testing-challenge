// require statements

// require db
const db = require("../data/dbConfig");

// require apps
const Apps = require("./appsModel.js");

// describe 1
describe("Apps.insert", () => {
  it("is able to add apps to the db", async () => {
    await db("apps").truncate();

    const newApp = await Apps.insert({
      name: "Photoshop",
      description: "photo app"
    });

    const newApp2 = await Apps.insert({
      name: "Notes",
      description: "quick note taking"
    });

    const apps = await db("apps");
    

    expect(apps).toHaveLength(2);
    expect(newApp.name).toBe('Photoshop')
    expect(newApp2.name).toBe('Notes')
  });
});
