export interface Usuario {
    uid: string | any; // uid = id para auth de firebase
    nombre: string;
    email: string;
    rol: string;
    password: string;
}
