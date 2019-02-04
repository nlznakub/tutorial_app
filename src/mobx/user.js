
import { observable, computed, action } from 'mobx';
class user {
    @observable name = 'Anis'
    @observable lastname = 'Chentanomwong'
    constructor() {

    }
}
export default new user()