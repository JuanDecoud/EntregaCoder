export default class UserRepository {
    constructor (dao){
        this.dao = dao
    }
    getAll = async ()=> await this.dao.getAll()
    getById = async (id)=> await this.dao.getById(id)
    create = async (data)=> await this.dao.create(data)
    update = async (id,data) => await this.dao.update(id,data)
    delete = async (id) => await this.dao.delete(id)
    findbyuserName = async (value )=>await this.dao.findbyuserName(value)
    paginate = async (filter , filterOptions)=>await this.dao.paginate(filter ,filterOptions)
    deleteforInactivity = async () => await this.dao.deleteforInactivity()
    fyndInactiveUsers = async () => await this.dao.fyndInactiveUsers()

}

