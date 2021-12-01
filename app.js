const { Movie, Music, Tv } = require('./models');

// Movie Create
Movie.create({
    name: 'Casino',
    director: 'Martin Scorsese',
    price: '8',
    description: 'Friends fight over a gambeling empire.',
    language: 'English',
    content_type: 'HD',
    year: 1995,
    duration: '3',
    rating: '18',
    genre: 'Drama'

})
    .then(function (createdMovie) {
        console.log('new movie', createdMovie.toJSON());
    })
    .catch(function (err) {
        console.log('ERROR with adding new movie', err);
    });

// Music Create
Music.create({
    name: 'Purple Rain',
    by: 'Prince',
    price: '15',
    description: 'Soundtrack to the famous movie!',
    language: 'English',
    content_type: 'CD',
    year: 1984,
    duration: '60',
    rating: '18',
    genre: 'Pop'

})
    .then(function (createdMusic) {
        console.log('new music', createdMusic.toJSON());
    })
    .catch(function (err) {
        console.log('ERROR with adding new music', err);
    });

// Tv Create
Tv.create({
    name: 'Martin',
    starring: 'Martin Lawrence',
    price: '30',
    description: 'Comic superstar Martin Lawrence plays a small-time talk-radio host--as well as a number of outrageous characters who make his life difficult, creating uproarious laughs in this hilarious comedy series.',
    language: 'English',
    content_type: 'HD',
    year: 1993,
    duration: '30',
    rating: '18',
    genre: 'Comedy'

})
    .then(function (createdTv) {
        console.log('new Tv', createdTv.toJSON());
    })
    .catch(function (err) {
        console.log('ERROR with adding new Tv', err);
    });

// // 2 examples of findAll Movie

// Movie.findAll({
//     where: {
//         year: 1995
//     }
// });

// Movie.findAll({
//     where: {
//         duration: '3',
//         rating: '18'
//     }
// });

// // 2 examples of findAll Music

// Music.findAll({
//     where: {
//         language: 'English'
//     }
// });

// Music.findAll({
//     where: {
//         duration: '60',
//         rating: '80'
//     }
// });

// // 2 examples of findAll Tv

// Tv.findAll({
//     where: {
//         duration: 30
//     }
// });

// Tv.findAll({
//     where: {
//         duration: '30',
//         rating: '18'
//     }
// });

// // 3 examples of findOne Movie

// Movie.findOne({ where: { duration: '3' } })
//     .then(function (movie) {
//         // console.log(movie.toJSON());
//     })
//     .catch(function (err) { });

// // 3 examples of findOne Music

// Music.findOne({ where: { duration: '60' } })
//     .then(function (music) {
//         // console.log(player.toJSON());
//     })
//     .catch(function (err) { });

// // 3 examples of findOne Tv

// Tv.findOne({ where: { starring: 'Martin Lawrence' } })
//     .then(function (tv) {
//         // console.log(player.toJSON());
//     })
//     .catch(function (err) { });

// // 1 example of findByPk Movie

// Movie.findByPk(7)
//     .then(function (movie) {
//         console.log(movie.toJSON());
//     })
//     .catch(function (err) { });

// // 1 example of findByPk Music

// Music.findByPk(7)
//     .then(function (music) {
//         console.log(music.toJSON());
//     })
//     .catch(function (err) { });

// // 1 example of findByPk Tv

// Tv.findByPk(7)
//     .then(function (tv) {
//         console.log(tv.toJSON());
//     })
//     .catch(function (err) { });

// // 2 examples of update Movie

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

// // // 2 examples of update Music

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

// // // 2 examples of update Tv

// // Tv.update({
// //     name: ''
// // }, {
// //     where: {
// //         name: ''
// //     }
// // }).then(numRowsChanged => {
// //     console.log(numRowsChanged)
// // })

// // // Remove 1 item from each model

// // Movie.destroy({
// //     where: {
// //         name: 'Brooklyn Nets'
// //     }
// // }).then(numRowsChanged => {
// //     console.log(numRowsChanged)
// // });

// // Music.destroy({
// //     where: {
// //         name: 'Brooklyn Nets'
// //     }
// // }).then(numRowsChanged => {
// //     console.log(numRowsChanged)
// // });

// // Tv.destroy({
// //     where: {
// //         name: 'Brooklyn Nets'
// //     }
// // }).then(numRowsChanged => {
// //     console.log(numRowsChanged)
// // });

// // // implement bulkCreate on a model

// // // implement findOrCreate on a model


