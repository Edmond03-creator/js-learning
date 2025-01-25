// const tasks = [
//     { taskName: "Առաջադրանք 1", duration: 1000 },
//     { taskName: "Առաջադրանք 2", duration: 2000 },
//     { taskName: "Առաջադրանք 3", duration: 1500 },
//   ];


  
//    runTasksWithTotalTime(tasks).then(totalTime => {
//     console.log(`Ընդհանուր տևողությունը՝ ${totalTime} միլիվայրկյան։`);
//   }).catch(error => {
//     console.error("Սխալ տեղի ունեցավ:", error);
//   });


const tasks = [
{ taskName: "Առաջադրանք 1", duration: 1000 },
{ taskName: "Առաջադրանք 2", duration: 2000 },
{ taskName: "Առաջադրանք 3", duration: 1500 },
];

function runTasksWithTotalTime(tasks) {
    let totalTime = 0;
  
    return tasks.reduce((promiseChain, task) => {
      return promiseChain.then(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            console.log(task.taskName); // anunn em tpe
            totalTime += task.duration; // yndanurin em avelacnum
            resolve();
          }, task.duration);
        });
      });
    }, Promise.resolve())
      .then(() => totalTime); // verjum avelacnum em jamanaky
  }
  
  
  runTasksWithTotalTime(tasks)
    .then(totalTime => {
      console.log(`Ընդհանուր տևողությունը՝ ${totalTime} միլիվայրկյան։`);
    })
    .catch(error => {
      console.error("Սխալ տեղի ունեցավ:", error);
    });
//inch piti tpi
