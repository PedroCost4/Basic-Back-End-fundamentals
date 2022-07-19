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