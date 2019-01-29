const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.use((err, req, res) => {
    console.error(err);
    res.status(500)
        .render('error', { error: err });
});

let port = +(process.env.PORT || 4000);

app.listen(port, () => console.log(`Express server working now on http://localhost:${port}`));
