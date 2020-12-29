//A.Problem Solving (30’)
//1
// let a1 =prompt(`Nhap array A1 (cach nhau bang dau ",") `)
// let a2= prompt(`Nhap array A2 (cach nhau bang dau ",") `)

// arr1=a1.split(",")
// arr2=a2.split(",")
// let arrres=[]
// let same=[]
// for(let i =0;i<arr1.length;i++){
//         let index = arr2.indexOf(arr1[i])
//         if(index>-1){
//             same.push(arr1[i])
//             arr1.splice(i,1)
//             i--
//         }        
    
// }

// for (let ii=0; ii<arr2.length;ii++){
//     let index = same.indexOf(arr2[ii])
//         if(index>-1){
//             arr2.splice(ii,1)
//             ii--
//         }  
// }
// let res =[...arr1,...arr2]
// console.log(res)
//--------------------------
//2.
// let res=[
//     {
//         name:"Arsenal",
//         points:99,
//         GD:45
//     },
//     {
//         name:"Chelsea",
//         points:75,
//         GD:39
//     },
//     {
//         name:"Manchester United",
//         points:60,
//         GD:29
//     },
//     {
//         name:"Liverpool",
//         points:88,
//         GD:39
//     },
// ]
// let pointscom=res.map(x=>{return x.points})
// pointscom.sort()
// let pointsco=[]
// for(let i=pointscom.length-1;i>-1;i--){
//     pointsco.push(pointscom[i])
// }
// console.log(pointsco)
// for(let i=0; i<res.length;i++){
//     res[i].position=pointsco.indexOf(res[i].points)+1
// }
// console.log(res)


