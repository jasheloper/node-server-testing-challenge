
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('apps').del()
    .then(function () {
      // Inserts seed entries
      return knex('apps').insert([
        {name: 'Slack', description: "app to communicate with colleagues & students."},
        {name: 'Zoom', description: "app for video conferences"},
        {name: 'Spotify', description: "music app"},
        {name: 'Youtube', description: "watch & upload videos"},
        {name: 'Chrome', description: "browser"}


      ]);
    });
};
