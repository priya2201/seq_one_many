const db=require('./app/models');
const controller=require('./app/controllers/tutorial.controller');
const run=async()=>{
const tut1=await controller.createTutorial({
    title:"tut#1",
    description:"tut 1 description"
});
const tut2=await controller.createTutorial({
    title:"tut#2",
    description:"tut 2 description"
});
const comment1=await controller.createComment(tut1.id,{
    name:'bezodker',
    text:'good job'
});
await controller.createComment(tut1.id,{
    name:'siya',
    text:'best job'
});
await controller.createComment(tut1.id,{
    name:'nitya',
    text:'appreciable'
});
const comment2=await controller.createComment(tut2.id,{
    name:'ram',
    text:'inspiration'
});
await controller.createComment(tut2.id,{
    name:'vini',
    text:'nice one'
});

const tut1Data=await controller.findTutorialById(tut1.id);
console.log(">> Tutorial id=" + tut1Data.id,
JSON.stringify(tut1Data, null, 2)
);
const tut2Data = await controller.findTutorialById(tut2.id);
console.log(
  ">> Tutorial id=" + tut2Data.id,
  JSON.stringify(tut2Data, null, 2)
);
const comment1Data = await controller.findCommentById(comment1.id);
console.log(
  ">> Comment id=" + comment1.id,
  JSON.stringify(comment1Data, null, 2)
);
const comment2Data = await controller.findCommentById(comment2.id);
console.log(
  ">> Comment id=" + comment2.id,
  JSON.stringify(comment2Data, null, 2)
);
// const tutorials = await controller.findAll();
// console.log(">> All tutorials", JSON.stringify(tutorials, null, 2));
};
db.sequelize.sync({force:true}).then(()=>{
console.log("Drop and re-sync db.");
run();
})