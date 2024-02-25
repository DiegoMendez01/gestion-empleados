export class Empleado {
    constructor(_id = "", name = "", position = "", office = "", salary = 0){
        this._id = _id,
        this.name = name,
        this.position = position,
        this.office = office,
        this.salary = salary
    }

    // Sub guion id porque los datos van a venir de MongoDB
    _id: String;
    name: String;
    position: String;
    office: String;
    salary: number;
}
