const app = require('./app');
const PORT =4000;
app.listen(PORT, ()=>{
    console.log('this is from server' + process.env.RUNNING_PORT);
});
