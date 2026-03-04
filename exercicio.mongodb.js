/*CRIAÇÃO DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB";

/*CRIAÇÃO DO NOME COLLECTION*/
const collection = "bd3-at1";

/*USAR O BANCO DE DADOS*/
use(database);

/*CRIAR A COLLECTION*/
db.createCollection(collection);

/*INSERIR DADOS NA COLLECTION, VARIOS DE UMA VEZ*/

db[collection].insertMany([
  {
    cod_aluno: 1,
    cod_turma: 101,
    nome: "Lucas Ferreira",
    cpf: "123.456.789-00",
    rg: "12.345.678-9",
    telefone_aluno: "(11) 91234-5678",
    telefone_responsavel: "(11) 99876-5432",
    email: "lucas.ferreira@email.com",
    data_nascimento: "15/03/2005",
  },
  {
    cod_aluno: 2,
    cod_turma: 101,
    nome: "Mariana Oliveira",
    cpf: "234.567.890-11",
    rg: "23.456.789-0",
    telefone_aluno: "(11) 92345-6789",
    telefone_responsavel: "(11) 98765-4321",
    email: "mariana.oliveira@email.com",
    data_nascimento: "22/07/2006",
  },
  {
    cod_aluno: 3,
    cod_turma: 102,
    nome: "Rafael Costa",
    cpf: "345.678.901-22",
    rg: "34.567.890-1",
    telefone_aluno: "(21) 93456-7890",
    telefone_responsavel: "(21) 97654-3210",
    email: "rafael.costa@email.com",
    data_nascimento: "02/11/2005",
  },
  {
    cod_aluno: 4,
    cod_turma: 102,
    nome: "Juliana Martins",
    cpf: "456.789.012-33",
    rg: "45.678.901-2",
    telefone_aluno: "(21) 94567-8901",
    telefone_responsavel: "(21) 96543-2109",
    email: "juliana.martins@email.com",
    data_nascimento: "30/01/2004",
  },
  {
    cod_aluno: 5,
    cod_turma: 103,
    nome: "Thiago Almeida",
    cpf: "567.890.123-44",
    rg: "56.789.012-3",
    telefone_aluno: "(31) 95678-9012",
    telefone_responsavel: "(31) 95432-1098",
    email: "thiago.almeida@email.com",
    data_nascimento: "18/05/2006",
  },
  {
    cod_aluno: 6,
    cod_turma: 103,
    nome: "Beatriz Fernandes",
    cpf: "678.901.234-55",
    rg: "67.890.123-4",
    telefone_aluno: "(31) 96789-0123",
    telefone_responsavel: "(31) 94321-0987",
    email: "beatriz.fernandes@email.com",
    data_nascimento: "09/09/2005",
  },
  {
    cod_aluno: 7,
    cod_turma: 104,
    nome: "Gustavo Ribeiro",
    cpf: "789.012.345-66",
    rg: "78.901.234-5",
    telefone_aluno: "(41) 97890-1234",
    telefone_responsavel: "(41) 93210-9876",
    email: "gustavo.ribeiro@email.com",
    data_nascimento: "12/12/2004",
  },
  {
    cod_aluno: 8,
    cod_turma: 104,
    nome: "Larissa Barbosa",
    cpf: "890.123.456-77",
    rg: "89.012.345-6",
    telefone_aluno: "(41) 98901-2345",
    telefone_responsavel: "(41) 92109-8765",
    email: "larissa.barbosa@email.com",
    data_nascimento: "25/02/2006",
  },
  {
    cod_aluno: 9,
    cod_turma: 105,
    nome: "Pedro Henrique Silva",
    cpf: "901.234.567-88",
    rg: "90.123.456-7",
    telefone_aluno: "(51) 99012-3456",
    telefone_responsavel: "(51) 91098-7654",
    email: "pedro.silva@email.com",
    data_nascimento: "14/06/2005",
  },
  {
    cod_aluno: 10,
    cod_turma: 105,
    nome: "Camila Rocha",
    cpf: "012.345.678-99",
    rg: "01.234.567-8",
    telefone_aluno: "(51) 90123-4567",
    telefone_responsavel: "(51) 90987-6543",
    email: "camila.rocha@email.com",
    data_nascimento: "03/08/2004",
  },
]);
