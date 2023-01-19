const express = require('express');
const PORT = 5000;
const cors = require('cors');
const HomeRouter = require('./routes/Home');
const BollyRouter = require('./routes/Bollywood')
const HealthRouter = require('./routes/Health')
const HollyRouter = require('./routes/Hollywood')
const SportsRouter = require('./routes/Sports')
const TechRouter = require('./routes/Technology')

const app = express();

app.use(cors());
app.use(HomeRouter);
app.use(BollyRouter);
app.use(HealthRouter);
app.use(HollyRouter);
app.use(SportsRouter);
app.use(TechRouter);

app.listen(PORT, function(){
    console.log(`server is listening at http://localhost:${PORT}`)
})