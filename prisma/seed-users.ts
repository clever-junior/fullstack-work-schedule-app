import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const maira = await prisma.user.upsert({
    where: { email: 'maira@prisma.io' },
    update: {},
    create: {
      email: 'maira@prisma.io',
      name: 'Maira',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const bruna = await prisma.user.upsert({
    where: { email: 'bruna@prisma.io' },
    update: {},
    create: {
      email: 'bruna@prisma.io',
      name: 'bruna',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const mariaCosta = await prisma.user.upsert({
    where: { email: 'maria_costa@prisma.io' },
    update: {},
    create: {
      email: 'maria_costa@prisma.io',
      name: 'Maria Costa',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const lorrana = await prisma.user.upsert({
    where: { email: 'lorrana@prisma.io' },
    update: {},
    create: {
      email: 'lorrana@prisma.io',
      name: 'lorrana',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const kymberlhy = await prisma.user.upsert({
    where: { email: 'kymberlhy@prisma.io' },
    update: {},
    create: {
      email: 'kymberlhy@prisma.io',
      name: 'kymberlhy',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const lafaethy = await prisma.user.upsert({
    where: { email: 'lafaethy@prisma.io' },
    update: {},
    create: {
      email: 'lafaethy@prisma.io',
      name: 'lafaethy',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const hallefy = await prisma.user.upsert({
    where: { email: 'hallefy@prisma.io' },
    update: {},
    create: {
      email: 'hallefy@prisma.io',
      name: 'hallefy',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const renata = await prisma.user.upsert({
    where: { email: 'renata@prisma.io' },
    update: {},
    create: {
      email: 'renata@prisma.io',
      name: 'renata',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
      role: 'leader',
    },
  });
  const jeise = await prisma.user.upsert({
    where: { email: 'jeise@prisma.io' },
    update: {},
    create: {
      email: 'jeise@prisma.io',
      name: 'jeise',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const debora = await prisma.user.upsert({
    where: { email: 'debora@prisma.io' },
    update: {},
    create: {
      email: 'debora@prisma.io',
      name: 'Débora',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const paulo = await prisma.user.upsert({
    where: { email: 'paulo@prisma.io' },
    update: {},
    create: {
      email: 'paulo@prisma.io',
      name: 'paulo',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
      role: 'leader',
    },
  });
  const kevison = await prisma.user.upsert({
    where: { email: 'kevison@prisma.io' },
    update: {},
    create: {
      email: 'kevison@prisma.io',
      name: 'kevison',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
      role: 'leader',
    },
  });
  const perla = await prisma.user.upsert({
    where: { email: 'perla@prisma.io' },
    update: {},
    create: {
      email: 'perla@prisma.io',
      name: 'perla',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const jamily = await prisma.user.upsert({
    where: { email: 'jamily@prisma.io' },
    update: {},
    create: {
      email: 'jamily@prisma.io',
      name: 'jamily',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const henile = await prisma.user.upsert({
    where: { email: 'henile@prisma.io' },
    update: {},
    create: {
      email: 'henile@prisma.io',
      name: 'henile',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const jairla = await prisma.user.upsert({
    where: { email: 'jairla@prisma.io' },
    update: {},
    create: {
      email: 'jairla@prisma.io',
      name: 'jairla',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const anaCarolina = await prisma.user.upsert({
    where: { email: 'ana_carolina@prisma.io' },
    update: {},
    create: {
      email: 'ana_carolina@prisma.io',
      name: 'Ana Carolina',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const geovana = await prisma.user.upsert({
    where: { email: 'geovana@prisma.io' },
    update: {},
    create: {
      email: 'geovana@prisma.io',
      name: 'geovana',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  const wendell = await prisma.user.upsert({
    where: { email: 'wendell@prisma.io' },
    update: {},
    create: {
      email: 'wendell@prisma.io',
      name: 'wendell',
      password:
        '$argon2id$v=19$m=65536,t=3,p=4$/LLaVHubT0xdw6jP0wbB9g$bBBiX5abh9jIePWuF769FmQlYsiTuG6rJ8XdF93Gavk',
    },
  });
  console.log(
    maira,
    bruna,
    mariaCosta,
    lorrana,
    kymberlhy,
    lafaethy,
    hallefy,
    renata,
    jeise,
    debora,
    paulo,
    kevison,
    perla,
    jamily,
    henile,
    jairla,
    anaCarolina,
    geovana,
    wendell
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
