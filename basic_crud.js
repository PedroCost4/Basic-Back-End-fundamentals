const bd = []

const insert = (id ,name, email, cpf, admin) => {
    const user = {}
    user.id = id
    user.name = name
    user.email = email
    user.cpf = cpf
    user.isadmin = admin
    return bd.push(user)
}

const update = (id, element, newelement) => {
    bd
    .forEach(user => {
            if (Object.values(user).includes(id)){
                if (user.cpf == element){
                    user.cpf = newelement
                }
                else if (user.name == element){
                    user.name = newelement
                }
                else if (user.email == element){
                    user.email = newelement
            }
        }
    })
}

const deleteSingleData = (idLogin,targetId,data) => {
    if (bd.some(user => user.id == idLogin)){
    bd
    .forEach(user => {
        if (Object.values(user).includes(targetId)){
            delete user[data]
            
        }
    })
    }
}

const deleteUser = (idLogin,targetId) => {
    if (bd.some(user => user.id == idLogin)){
    bd
    .forEach(user => {
        if (Object.values(user).includes(targetId)){
            bd.splice(bd.indexOf(user),1)      
        }
    })
}
}

insert(0, "Pedro", "pedro@gmail.com", "423.456.789-12", true)
insert(1,"Lucas", "lucas@gmail.com", "345.645.786-21", false)
insert(2,"João", "joao@gmail.com", "987.654.321-43", false)
console.log(bd)

update(0, "Pedro", "Pedrito")
update(1, "lucas@gmail.com", "lucas_js@gmail.com")
console.log(bd)

deleteSingleData(0, 1, "cpf")
console.log(bd)

deleteUser(0,2)
console.log(bd)
