const {db, Vegetable, Plot, Gardener} = require('./models')


db.sync({force: true}).then(() => {

    Vegetable.create({
        name: "carrot",
        color: "orange",

    }).then((vegetable) => {
        return Gardener.create({
            name: "farmer",
            age: 42,
            favoriteVegetableID: vegetable.id
        });


    });


    Vegetable.create({
        name: "tomato",
        color: "red"
    }).then((vegetable) => {
        return Plot.create({
            size: 60,
            shaded: true,

        });
    })

    console.log("successful connection to db")
}).catch((err) => {
    console.log("db connection error", err)
}).finally(() => {

});

