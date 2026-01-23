// const users = [
// { "id": 1, "name": "Alice", "role": "Admin" },
// { "id": 2, "name": "Bob", "role": "User" },
// { "id": 3, "name": "Charlie", "role": "User" }
// ];
// use filter and find to pick the role admin and print the username and id map the above array to display the name and print it 
// use spread operator and modify 2 id to admin role and print it
// create a interface with typescript for student having props: id, name, marks 
// and create a const variable for 2-3 users console the names of all the student with type

const users= [
  {"id":1, "name": "Alice", "role": "Admin"},
  {"id":2, "name": "Bob", "role": "User"},
  {"id":3, "name": "Charlie", "role": "User"}
];

//01)
const admins = users.filter(user=>user.role==="Admin");
admins.forEach(admin=>{console.log(admin.id, admin.name)});

const firstAdmin = users.find(user => user.role === "Admin");
if (firstAdmin) console.log(firstAdmin.id, firstAdmin.name);

//02)
const names=users.map(user=>user.name);
console.log(names);

//03)
const updatedUsers=users.map(user=>user.id===2?{...user, role:"Admin"}:user);
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
