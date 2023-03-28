import mongoose from "mongoose";
import { Annonce } from "../model/annonce.model";
import { User } from "../model/user.model";
import bcrypt from "bcrypt";

export const seedDB = async () => {
  await mongoose.connection.dropDatabase();
  const user1 = new User({
    nom: "Benakcha",
    prenom: "Raid",
    email: "raid@test.com",
    password: await bcrypt.hash("raid", 10),
  });
  const user2 = new User({
    nom: "Ear",
    prenom: "Sandrine",
    email: "sandrine@test.com",
    password: await bcrypt.hash("sandrine", 10),
  });

  const annonce1 = new Annonce({
    titre: "Annonce 1",
    telephone: "0999999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat.`,
    prix: 100,
    user: user1._id,
  });

  const annonce2 = new Annonce({
    titre: "Annonce 2",
    telephone: "0019999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 10,
    user: user1._id,
  });

  const annonce3 = new Annonce({
    titre: "Annonce 3",
    telephone: "0976999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 600,
    user: user1._id,
  });

  const annonce4 = new Annonce({
    titre: "Annonce 4",
    telephone: "0994599999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 1000,
    user: user2._id,
  });

  const annonce5 = new Annonce({
    titre: "Annonce 5",
    telephone: "0999999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 600,
    user: user2._id,
  });
  const annonce6 = new Annonce({
    titre: "Annonce 6",
    telephone: "0999999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 600,
    user: user2._id,
  });
  const annonce7 = new Annonce({
    titre: "Annonce 7",
    telephone: "0999999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 600,
    user: user2._id,
  });
  const annonce8 = new Annonce({
    titre: "Annonce 8",
    telephone: "0999999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 600,
    user: user2._id,
  });
  const annonce9 = new Annonce({
    titre: "Annonce 9",
    telephone: "0999999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 600,
    user: user2._id,
  });
  const annonce10 = new Annonce({
    titre: "Annonce 10",
    telephone: "0999999999",
    adresse: "5 Boulevard Arc de triomphe",
    codePostal: "75008",
    ville: "Paris",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
    amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.`,
    prix: 600,
    user: user2._id,
  });

  user1.annonces?.push(annonce1.id);
  user1.annonces?.push(annonce2.id);
  user1.annonces?.push(annonce3.id);
  user2.annonces?.push(annonce4.id);
  user2.annonces?.push(annonce5.id);
  user2.annonces?.push(annonce6.id);
  user2.annonces?.push(annonce7.id);
  user2.annonces?.push(annonce8.id);
  user2.annonces?.push(annonce9.id);
  user2.annonces?.push(annonce10.id);

  await User.insertMany([user1, user2]);
  console.log("Users created successfully");
  await Annonce.insertMany([annonce1, annonce2, annonce3, annonce4, annonce5, annonce6, annonce7, annonce8, annonce9, annonce10]);
  console.log("Announces created successfully");
};
