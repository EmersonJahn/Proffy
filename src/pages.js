const {subjects, weekdays, getSubject} = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query
    const isEmpty = Object.keys(data).length == 0 
    if (!isEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}