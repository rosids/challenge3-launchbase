const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

const courses = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("courses", { items: courses})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id

    const course = courses.find(function(course){
        return course.id == id
    })

    // if (!course) {
    //     res.status(404).render("not-found")
    // }

    return res.render("courses-description", { item: course})
})

server.get("/about", function(req, res) {
    const about = {
        avatar_url: "https://pbs.twimg.com/profile_images/1271517147349626881/Mf1UjRa0_400x400.jpg",
        name: "Rockeatseat",
        description: "No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
        title: "As principais tecnologias utilizadas:",
        technologies: [
            {name: "NodeJS", url: "https://rocketseat.com.br/static/images/update/curso-nodejs.svg"},
            {name: "ReactJS", url: "https://rocketseat.com.br/static/images/update/curso-reactjs.svg"},
            {name: "React Native", url: "https://rocketseat.com.br/static/images/update/curso-react-native.svg"}
        ],
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"}
        ]
    }

    return res.render("about", { about })
})

server.use(function(req, res) {
    res.status(404).render("not-found")
})

server.listen(7000, function(){
    console.log("server is running")
})
