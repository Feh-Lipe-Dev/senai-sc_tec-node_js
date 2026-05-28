class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome,
            this.salarioBase = salarioBase
    }
    calcularSalario() {
        throw Error("O cálculo do salário deve ser realizado pela subclasse.");
    }
    dadosFuncionario() {
        return `Funcionário: ${ this.nome }`;
    }
}

class FuncionarioCLT extends Funcionario {
    constructor(nome, salarioBase) {
        super(nome, salarioBase);
        this.valeRefeicao = 700;
        this.inss = salarioBase < 2000? 0.075 : 0.11;
        this.irrf = salarioBase < 2500 ? 0.09 : 0.15;
    }
    calcularSalario() {
        const inss = this.salarioBase * this.inss
        const irrf = this.salarioBase * this.irrf
        return this.salarioBase - inss - irrf + this.valeRefeicao;
    }
    dadosFuncionario() {
        const liquido = this.calcularSalario().toLocaleString('pt-BR', {
            style: 'currency', currency: 'BRL'
        })
        return `CLT   |   ${ this.nome }   | ${ liquido }`;
    }
    impostosCLT() {
        const inssValor = (this.inss * this.salarioBase).toLocaleString('pt-BR', {
            style: 'currency', currency: 'BRL'
        });
        const irrfValor = (this.irrf * this.salarioBase).toLocaleString('pt-BR', {
            style: 'currency', currency: 'BRL'
        });
        this.inss *= 100;
        this.irrf *= 100;
        return `INSS: alíquota: ${this.inss.toString().replace('.', ',')}%; valor: ${inssValor}\nIRRF: alíquota: ${this.irrf.toString().replace('.', ',') }%; valor: ${ irrfValor }`;
    }
}

const funcionario01 = new FuncionarioCLT("Feh", 1500);
console.log(funcionario01.dadosFuncionario());
console.log(funcionario01.impostosCLT());
console.log(' ');
const funcionario02 = new FuncionarioCLT("Lipe", 2500);
console.log(funcionario02.dadosFuncionario());
console.log(funcionario02.impostosCLT());