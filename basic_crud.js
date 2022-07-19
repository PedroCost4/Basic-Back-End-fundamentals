const DataBase = [];

const InsertUser = (name,age, email, cpf,passwd, admin) => {
    const user = {
    id : DataBase.length,
    name: name,
    age:age,
    email:email,
    cpf: cpf,
    password: passwd,
    isAdmin: admin
    };
    return DataBase.push(user);
};

const searchUser = (userData) => {
    let filteredDataBase = DataBase.filter((user => user.id === userData || user.cpf === userData),[])
    return filteredDataBase;
};

const searchUserwithTargetData = (userData,wantedData) => {
    let filteredDataBase = DataBase.filter((user => user.id === userData || user.cpf === userData), "User Not Found")
    return filteredDataBase[0][wantedData];
};

const update = (id,data) => {
    const idx = DataBase.findIndex((user) => user.id === id);
  if (idx === -1) throw new Error('User not found');
  DataBase[idx] = { ...DataBase[idx], ...data };
};

const deleteSingleData = (idLogin,targetId,data) => {
    if (DataBase.some(user => user.id == idLogin)){
    DataBase
    .forEach(user => {
        if (user.id == targetId){
            delete user[data];
        }
    })
    }
}

const deleteUser = (idLogin,targetId) => {
    DataBase
    .forEach(user => {
        if (user.id == idLogin && user.isAdmin == true){
                delete[targetId]
        }
    })
 };

const FilterNoAndAdminDataBase = (AdminCond) => {
    let filteredDataBase = DataBase.filter((user => user.isAdmin === AdminCond),[]);
    return filteredDataBase;
};

InsertUser( "Pedro", 65 , "pedro@gmail.com", "423.456.789-12", "-", true);
InsertUser("Lucas",54, "lucas@gmail.com", "345.645.786-21","edrfgji09435", false);
InsertUser("João",32, "joao@gmail.com", "987.654.321-43","ergfnjk8543" ,false);
InsertUser( "Bruno",78,"bruno@gmail.com", "567.345.789-21","drfjiko76", true);
console.table(DataBase);

update(0,{name:"Pedrito",cpf:"123.321.765-98",password:"sdrfgnjou567"});
update(1, {email:"lucas_js@gmail.com"});
console.table(DataBase);

deleteSingleData(0, 1, "cpf");
console.log(DataBase);

deleteUser(0,1);
console.log(DataBase);

const filtered = FilterNoAndAdminDataBase(true);
console.log(filtered);

const filtered2 = searchUser(2);
console.log(filtered2);

const filteredwithTarget = searchUserwithTargetData(3, "name");
console.log(filteredwithTarget);