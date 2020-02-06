const db = require('../../../Data/db-config');


module.exports = {
    find,
    findBy,
    findById,
    findByUser,
    add,
    remove,
    update,
};

function find(){
    return db('traveler')
}

function findBy(filter){
    return db('travelers').where(filter).first();
}

function findById(id){
    return db('traveler').where({ id }).first();
}

function findByUser(filter){
    return db('traveler'.where('travler.email', filter))
}

async function add(user){
    const [id] = await db('traveler').insert(user, 'id')
    return findById(id)
}

function update(changes, id){
    return db('traveler').where({id}).update(changes)
}

function remove(id){
    return db('traveler').where({id}).del();
}

