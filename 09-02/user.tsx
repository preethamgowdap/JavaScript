import { useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export default function Users() {
  useEffect(() => {
    const url = "https://mockly.me/users?count=5";

    async function fetchUsers() {
      try {
        const response = await fetch(url);
        const data: User[] = await response.json();

        //  Print only id, name, and email
        data.forEach(user => {
          console.log("ID:", user.id);
          console.log("Name:", user.name);
          console.log("Email:", user.email);
        });

      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchUsers();
  }, []);

  return null;
}
