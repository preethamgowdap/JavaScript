const users= [
  {"id":1, "name": "Alice", "role": "Admin"},
  {"id":2, "name": "Bob", "role": "User"},
  {"id":3, "name": "Charlie", "role": "User"}
];

//01)
const admins = users.filter(user=>user.role==="Admin");
admins.forEach(admin=>{console.log(admin.id, admin.name)});

//02)
const names=users.Map(user=>user.name);
console.log(names);

//03)
const updatedUsers=users.Map(user=>user.id===2?{...user, role:"Admin"}:user);
console.log(updatedUsers);

//4)
interface Student{
  id:number;
  name:string;
  marks:number;
}

const students:Student[]=[
  {id:1,name:"preetham",marks:85},
  {id:2,name:"prajwal",marks:90},
  {id:3,name:"gagan",marks:70},
];

students.forEach(student=>{
  console.log(student.name);
})
