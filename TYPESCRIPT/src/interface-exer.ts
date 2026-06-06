//Modelar a interface de um sistema de blog
//Autor
interface Autor {
    readonly id: number;
    nome: string;
    email: string;
    bio?: string;
    avatar?: string;
}

//Post
interface Post {
    readonly id: number;
    titulo: string;
    conteudo: string;
    autor: Autor;
    tags?: string[];
    dataCriacao?: Date;
}

const autor: Autor = {
    id: 1,
    nome: "João",
    email: "joao@email.com",
    bio: "Desenvolvedor Full Stack",
};

const post: Post = {
    id: 1,
    titulo: "Primeiro Post",
    conteudo: "Conteúdo do primeiro post",
    autor: autor,
    tags: ["typescript", "javascript"],
};

console.log(" ");
function resumirPost(post: Post): string {
    const n = post.tags?.length || 0;
    return `Título: ${post.titulo}, por ${post.autor.nome} - ${n} tags`;
}
console.log(resumirPost(post)); // Saída: Título: Primeiro Post, por João - 2 tags
console.log(
    "TAGS:",
    post.tags?.map((tag) => tag.toUpperCase()),
); // Saída: TAGS: [ 'TYPESCRIPT', 'JAVASCRIPT' ]
console.log(" ");

//Modelar hierarquia de interface, para um sistema de cadastro de clientes e funcionários
//interface base
interface EntidadeDB {
    readonly id: number;
    criadoEm: Date;
    atualizadoEm: Date;
}

//PessoaFisica extends EntidadeDB
interface PessoaFisica extends EntidadeDB {
    nome: string;
    cpf: string;
    dataNascimento: Date;
}

//Cliente extends PessoaFisica
interface Cliente extends PessoaFisica {
    email: string;
    telefone?: string;
    enderecos?: string[];
}

//Funcionario extends PessoaFisica
interface Funcionario extends PessoaFisica {
    cargo: string;
    salario: number;
    readonly matricula: string;
}

const cliente: Cliente = {
    id: 1,
    criadoEm: new Date(),
    atualizadoEm: new Date(),
    nome: "João",
    cpf: "123.456.789-00",
    dataNascimento: new Date("1990-01-01"),
    email: "joao@email.com",
    telefone: "(11) 99999-9999",
    enderecos: ["Rua A, 123", "Rua B, 456"],
};
console.log(cliente);

const funcionario: Funcionario = {
    id: 2,
    criadoEm: new Date(),
    atualizadoEm: new Date(),
    nome: "Maria",
    cpf: "987.654.321-00",
    dataNascimento: new Date("1985-05-15"),
    cargo: "Desenvolvedora",
    salario: 5000,
    matricula: "MAT123",
};
console.log(funcionario);
console.log(" ");
