const users = [
    {
        name: "Ilgar",
        surname: "Guliyev",
        address: "Gunesli",
        age: 20,
        gender: "male",
    },
    {
        name: "Umud",
        surname: "Elizade",
        address: "Xalqar",
        age: 22,
        gender: "male"
    },
    {
        name: "Mireli",
        surname: "Elizade",
        address: "Xalqar",
        age: 20,
        gender: "male"
    }

]
localStorage.setItem("users", JSON.stringify(users))