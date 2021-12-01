const { Movie, Music, Tv } = require('./models');

// // Movie Create
// Movie.create({
//     name: 'Casino',
//     director: 'Martin Scorsese',
//     price: '8',
//     description: 'Friends fight over a gambeling empire.',
//     language: 'English',
//     content_type: 'HD',
//     year: 1995,
//     duration: '3',
//     rating: '18',
//     genre: 'Drama'

// })
//     .then(function (createdMovie) {
//         console.log('new movie', createdMovie.toJSON());
//     })
//     .catch(function (err) {
//         console.log('ERROR with adding new movie', err);
//     });

// // Music Create
// Music.create({
//     name: 'Purple Rain',
//     by: 'Prince',
//     price: '15',
//     description: 'Soundtrack to the famous movie!',
//     language: 'English',
//     content_type: 'CD',
//     year: 1984,
//     duration: '60',
//     rating: '18',
//     genre: 'Pop'

// })
//     .then(function (createdMusic) {
//         console.log('new music', createdMusic.toJSON());
//     })
//     .catch(function (err) {
//         console.log('ERROR with adding new music', err);
//     });

// // Tv Create
// Tv.create({
//     name: 'Martin',
//     starring: 'Martin Lawrence',
//     price: '30',
//     description: 'Comic superstar Martin Lawrence plays a small-time talk-radio host--as well as a number of outrageous characters who make his life difficult, creating uproarious laughs in this hilarious comedy series.',
//     language: 'English',
//     content_type: 'HD',
//     year: 1993,
//     duration: '30',
//     rating: '18',
//     genre: 'Comedy'

// })
//     .then(function (createdTv) {
//         console.log('new Tv', createdTv.toJSON());
//     })
//     .catch(function (err) {
//         console.log('ERROR with adding new Tv', err);
//     });

// 2 examples of findAll Movie
Movie.findAll({
    where: {
        year: 1995
    }
});

Movie.findAll({
    where: {
        duration: '3',
        rating: '18'
    }
});

// 2 examples of findAll Music
Music.findAll({
    where: {
        language: 'English'
    }

Music.findAll({
    where: {
        duration: '60',
        rating: '80'
    }
});

// 2 examples of findAll Tv
Tv.findAll({
    where: {
        duration: 30
    }
});

Tv.findAll({
    where: {
        duration: '30',
        rating: '18'
    } 
});

// 3 examples of findOne Movie
Movie.findOne({ where: { duration: '3' } })
    .then(function (movie) {
        console.log(movie.toJSON());
    })
    .catch(function (err) { });

Movie.findOne({ where: { director: 'Wes Anderson' } })
    .then(function (movie) {
        console.log(movie.toJSON());
    })
    .catch(function (err) { });

Movie.findOne({ where: { rating: '18' } })
    .then(function (movie) {
        console.log(movie.toJSON());
    })
    .catch(function (err) { });

// 3 examples of findOne Music

Music.findOne({ where: { duration: '60' } })
    .then(function (music) {
        console.log(music.toJSON());
    })
    .catch(function (err) { });

Music.findOne({ where: { by: 'Jay Z' } })
    .then(function (music) {
        console.log(music.toJSON());
    })
    .catch(function (err) { });

Music.findOne({ where: { language: 'English' } })
    .then(function (music) {
        console.log(music.toJSON());
    })
    .catch(function (err) { });

// 3 examples of findOne Tv

Tv.findOne({ where: { starring: 'Martin Lawrence' } })
    .then(function (tv) {
        console.log(tv.toJSON());
    })
    .catch(function (err) { });

Tv.findOne({ where: { genre: 'Comedy' } })
    .then(function (tv) {
        console.log(tv.toJSON());
    })
    .catch(function (err) { });

Tv.findOne({ where: { starring: 'Bee Arthur' } })
    .then(function (tv) {
        console.log(tv.toJSON());
    })
    .catch(function (err) { });

// 1 example of findByPk Movie

Movie.findByPk(7)
    .then(function (movie) {
        console.log(movie.toJSON());
    })
    .catch(function (err) { });

// 1 example of findByPk Music

Music.findByPk(7)
    .then(function (music) {
        console.log(music.toJSON());
    })
    .catch(function (err) { });

// 1 example of findByPk Tv

Tv.findByPk(7)
    .then(function (tv) {
        console.log(tv.toJSON());
    })
    .catch(function (err) { });

// 2 examples of update Movie

// Movie.update({
//     price: '15'
// }, {
//     where: {
//         price: '30'
//     }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged)
// })

// Movie.update({
//     director: 'Wes Anderson'
// }, {
//     where: {
//         director: 'Martin Scorsese'
//     }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged)
// })

// 2 examples of update Music

// Music.update({
//     by: 'Prince Rodgers'
// }, {
//     where: {
//         by: 'Prince'
//     }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged)
// })

// Music.update({
//     language: 'English'
// }, {
//     where: {
//         language: 'Spanish'
//     }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged)
// })

// 2 examples of update Tv

// // Tv.update({
// //     name: ''
// // }, {
// //     where: {
// //         name: ''
// //     }
// // }).then(numRowsChanged => {
// //     console.log(numRowsChanged)
// // })

// Remove 1 item from each model

// Movie.destroy({
//     where: {
//         name: 'The Irishman'
//     }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged)
// });

// Music.destroy({
//     where: {
//         name: 'Graduation'
//     }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged)
// });

// Tv.destroy({
//     where: {
//         starring: 'Delta Burke'
//     }
// }).then(numRowsChanged => {
//     console.log(numRowsChanged)
// });

// // // implement bulkCreate on a model

// Movie.bulkCreate([
//     { name: 'Good Fellas', director: 'Martin Scorsese', price: '8', description: 'Martin Scorsese, one of the worlds most skillful director, reunited with 2 time Oscar-winner Robert De Niro in GoodFellas, the result was one of the most powerful films of the year', language: 'English', content_type: 'HD', year: 1995, duration: '3', rating: '18', genre: 'Drama' },
//     { name: 'Mean Streets ', director: 'Martin Scorsese', price: '12', description: 'Robert De Niro stars in Martin Scorseses drama of young men coming to manhood by the code of New Yorks Little Italy. A harrowing, intense and grueling dramatic experience.', language: 'English', content_type: 'HD', year: 1995, duration: '3', rating: '18', genre: 'Drama' },
//     { name: 'The Irishman', director: 'Martin Scorsese', price: '8', description: 'Martin Scorsese, one of the worlds most skillful director, reunited with 2 time Oscar-winner Robert De Niro in GoodFellas, the result was one of the most powerful films of the year', language: 'English', content_type: 'HD', year: 1995, duration: '3', rating: '18', genre: 'Drama' },
//     { name: 'Rumblefish', director: 'Francis Ford Coppola', price: '18', description: 'The one and only!', language: 'Spanish', content_type: 'SD', year: 1995, duration: '2', rating: '18', genre: 'Drama' },
//     { name: 'The Godfather', director: 'Francis Ford Coppola', price: '21', description: 'Numba 1!', language: 'English', content_type: 'HD', year: 1970, duration: '3', rating: '18', genre: 'Drama' },
//     { name: 'The Godfather II', director: 'Francis Ford Coppola', price: '23', description: 'Numba 2!', language: 'English', content_type: 'SD', year: 1995, duration: '3', rating: '18', genre: 'Drama' },
//     { name: 'The Godfather III', director: 'Francis Ford Coppola', price: '3', description: 'The epic conclusion!', language: 'English', content_type: 'HD', year: 1996, duration: '3', rating: '18', genre: 'Drama' },
//     { name: 'Boyz In The Hood', director: 'John Singleton', price: '9', description: 'John Singletons steet masterpiece!', language: 'English', content_type: 'HD', year: 1992, duration: '1', rating: '18', genre: 'Drama' },
//     { name: 'Bout it', director: 'Master P', price: '9', description: 'Master Ps New Orleans epic!', language: 'English', content_type: 'SD', year: 1998, duration: '1', rating: '18', genre: 'Drama' },
// ]);

// Music.bulkCreate([
//     {name: 'Late Registration', by: 'Kanye West', price: '15', description: 'The epic second album!', language: 'French', content_type: 'CD', year: 2004, duration: '80', rating: '18', genre: 'Rap'},
//     {name: 'Graduation', by: 'Kanye West', price: '10', description: 'The epic third album!', language: 'Spanglish', content_type: 'LP', year: 2006, duration: '80', rating: '18', genre: 'Rap'},
//     {name: 'It Was Written', by: 'Nas', price: '15', description: 'The epic second album!', language: 'English', content_type: 'CD', year: 1997, duration: '80', rating: '18', genre: 'Rap'},
//     {name: 'Stillmatic', by: 'Nas', price: '13', description: 'Nas is back!', language: 'English', content_type: 'CD', year: 2004, duration: '80', rating: '18', genre: 'Rap'},
//     {name: 'BlackStar', by: 'BlackStar', price: '15', description: 'Mos Def and Talib Kweli are BlackStar!', language: 'French', content_type: 'CD', year: 2000, duration: '45', rating: '18', genre: 'Rap'},
//     {name: 'The Blueprint', by: 'Jay Z', price: '15', description: 'Jay is back!', language: 'English', content_type: 'CD', year: 2004, duration: '80', rating: '18', genre: 'Rap'},
//     {name: 'In My Lifetime Vol 1', by: 'Jay Z', price: '15', description: 'The epic second album!', language: 'English', content_type: 'CD', year: 1999, duration: '80', rating: '18', genre: 'Rap'},
//     {name: 'In My Lifetime Vol 2', by: 'Jay Z', price: '15', description: 'The epic second album!', language: 'English', content_type: 'CD', year: 2000, duration: '80', rating: '18', genre: 'Rap'},
//     {name: 'In My Lifetime Vol 3', by: 'Jay Z', price: '15', description: 'The epic second album!', language: 'English', content_type: 'CD', year: 2004, duration: '80', rating: '18', genre: 'Rap'},
//     {name: 'Black Album', by: 'Jay Z', price: '15', description: 'The epic last album!', language: 'Russian', content_type: 'CD', year: 2002, duration: '80', rating: '18', genre: 'Rap'}

// ]);

// Tv.bulkCreate([
//     {name: 'Fresh Prince of BelAir', starring: 'Will Smith', price: '40', description: 'Will Smith stars in this epi comedy!', language: 'English', content_type: 'HD', year: 1991, duration: '30', rating: '18', genre: 'Comedy'},
//     {name: 'Golden Girls', starring: 'Bee Arthur', price: '20', description: 'The ladies are back!', language: 'English', content_type: 'HD', year: 1980, duration: '30', rating: '18', genre: 'Comedy'},
//     {name: 'Designing Women', starring: 'Delta Burke', price: '40', description: 'You will design, you will love!', language: 'English', content_type: 'HD', year: 1989, duration: '30', rating: '18', genre: 'Comedy'},
//     {name: 'In The House', starring: 'LL Cool J', price: '40', description: 'LL Cool J charms!', language: 'English', content_type: 'HD', year: 1991, duration: '30', rating: '18', genre: 'Comedy'},
//     {name: 'The Nanny', starring: 'Jo Mama', price: '40', description: 'The Nanny is back!', language: 'English', content_type: 'HD', year: 1991, duration: '30', rating: '18', genre: 'Comedy'},
//     {name: 'Mr bean', starring: 'Dat Boi', price: '40', description: 'Watch him go', language: 'English', content_type: 'HD', year: 1991, duration: '30', rating: '18', genre: 'Comedy'},
//     {name: 'Gossip Girl', starring: 'Blake Lively', price: '10', description: 'The girls are fighting!', language: 'English', content_type: 'HD', year: 2012, duration: '30', rating: '18', genre: 'Comedy'},
//     {name: 'Girlfriends', starring: 'Tracy Ross', price: '40', description: 'The girls are living!', language: 'English', content_type: 'HD', year: 1991, duration: '30', rating: '18', genre: 'Comedy'},
//     {name: 'Homeboys In OuterSpace', starring: 'Flex Alexander', price: '40', description: 'oh no!', language: 'English', content_type: 'HD', year: 1991, duration: '30', rating: '18', genre: 'Comedy'}

// ]);

// // // implement findOrCreate on a model


