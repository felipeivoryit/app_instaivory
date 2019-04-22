class Usuario{
    constructor(
        public nome: string,
        public senha: string,
        public senhaConfirmacao: string,
        public sexo: string,
        public email: string,
        public foto?: UsuarioFoto,
        public id?: string
    ){}
}

class UsuarioFoto{
    constructor(public filename: string, public filetype: string, public value: string){}
}

export {Usuario, UsuarioFoto}