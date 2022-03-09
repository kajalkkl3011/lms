exports.homeRouter = (req, res) => {
    res.write('hello from simple server :)')
    res.end()
}

exports.TestRouter = (req, res) => {
    res.write('test route')
    res.end()
}
exports.registerRouter = (req, res) => {
    if (req.body.value) {
        message = req.body.value
    }

    const user = req.body;
    // console.log(user);
    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(JSON.stringify(user));
    res.end()
}