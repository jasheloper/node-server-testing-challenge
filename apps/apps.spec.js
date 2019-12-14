// require statements

// require db
const db = require("../data/dbConfig");

// require apps
const Apps = require("./appsModel");

// clean up
beforeEach(async () => {
  await db("apps").truncute();
});


// ** T E S T S **

////////////////////////   first describe /////////////////////////////////////////

describe("Apps.create works", () => {
    /////////// TEST 1 //////////////
  it(" is able to add apps to the db   ", async () => {
    // sanity check : checking that truncate works
    let apps = await apps.getAll();
    expect(apps).toHaveLength(0);

    // set up
    await Apps.create({ name: "Spotify" });
    await Apps.create({ name: "Loom" });
    apps = await Apps.getAll();

    // assertion
    expect(apps).toHaveLength(2);
  });

    /////////// TEST 2 //////////////
  it("is able to create the correct apps", async () => {
    // sanity: check that truncate works
    let apps = await Apps.getAll();
    expect(apps).toHaveLength(0);

    // set up
    await Apps.create({ name: "Spotify" });
    await Apps.create({ name: "Loom" });
    Apps = await Apps.getAll();

    expect(apps[0].name).toBe("Spotify");
    expect(apps[1].name).toBe("Loom");
  });
});


////////////////////////   second describe /////////////////////////////////////////


describe("Apps.delete works", () => {
 /////////// TEST 1 //////////////
  it("able to delete apps", async () => {
    let apps = await apps.getAll();
    expect(apps).toHaveLength(0);

    // set up
    await Apps.delete({ name: "Spotify" });
    await Apps.delete({ name: "Loom" });
    apps = await Apps.getAll();

    // assertion
    expect(apps).toHaveLength(2);
  });

   /////////// TEST 2 //////////////
  it("able to delete correct apps", async () => {
    let apps = await Apps.getAll();
    expect(apps).toHaveLength(0);

    // set up
    await Apps.delete({ name: "Spotify" });
    await Apps.delete({ name: "Loom" });
    Apps = await Apps.getAll();

    //
    expect(apps[0].name).toBe(null);
    expect(apps[1].name).toBe(null);
  });
});
