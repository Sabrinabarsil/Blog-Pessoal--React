import Tema from './Tema' /*,odel de tema*/

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null
}

export default Postagem;