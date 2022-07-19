const DataBase = [];

const insert = (id ,name,idade, email, cpf, admin) => {
    const user = {};
    user.id = id;
    user.name = name;
    user.idade = idade;
    user.email = email;
    user.cpf = cpf;
    user.isAdmin = admin;
    return DataBase.push(user);
}

const searchUser = (userData) => {
    let filteredDataBase = DataBase.filter((user => user.id === userData || user.cpf === userData),[])
    return filteredDataBase;
}

const searchUserwithTargetData = (userData,wantedData) => {
    let filteredDataBase = DataBase.filter((user => user.id === userData || user.cpf === userData),[])
    return filteredDataBase[0][wantedData];
}

const update = (id, element, newelement) => {
    DataBase
    .forEach(user => {
            if (Object.values(user).includes(id)){
                if (user.cpf == element){
                    user.cpf = newelement;
                }
                else if (user.idade == element){
                    user.idade = newelement;
                }
                else if (user.name == element){
                    user.name = newelement;
                }
                else if (user.email == element){
                    user.email = newelement;
            }
        }
    })
}

const deleteSingleData = (idLogin,targetId,data) => {
    if (DataBase.some(user => user.id == idLogin)){
    DataBase
    .forEach(user => {
        if (Object.values(user).includes(targetId)){
            delete user[data];
        }
    })
    }
}

const deleteUser = (idLogin,targetId) => {
    DataBase
    .forEach(user => {
        if (user.id == idLogin && user.isAdmin == true){
            DataBase.forEach(user => {
                if (Object.values(user).includes(targetId)){
                    DataBase.splice(DataBase.indexOf(user),1);      
                }
            })
        }
    })
}

const FilterNoAndAdminUsers = (AdminCond) => {
    let filteredDataBase = DataBase.filter((user => user.isAdmin === AdminCond),[]);
    return filteredDataBase;
}

insert(0, "Pedro", 65 , "pedro@gmail.com", "423.456.789-12", true);
insert(1,"Lucas",54, "lucas@gmail.com", "345.645.786-21", false);
insert(2,"João",32, "joao@gmail.com", "987.654.321-43", false);
insert(3, "Bruno",78,"bruno@gmail.com", "567.345.789-21", true);
console.log(DataBase);

update(0, "Pedro", "Pedrito");
update(1, "lucas@gmail.com", "lucas_js@gmail.com");
console.log(DataBase);

deleteSingleData(0, 1, "cpf");
console.log(DataBase);

deleteUser(0,1);
console.log(DataBase);

const filtered = FilterNoAndAdminUsers(true);
console.log(filtered);

const filtered2 = searchUser(2);
console.log(filtered2);

const filteredwithTarget = searchUserwithTargetData("567.345.789-21", "name");
console.log(filteredwithTarget);


