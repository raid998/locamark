import mongoose from "mongoose";
import { Annonce } from "../model/annonce.model";
import { User } from "../model/user.model";
import bcrypt from "bcrypt";
import fs from 'fs'
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
    telephone: "0699999999",
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
    telephone: "0619999999",
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
    telephone: "0676999999",
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
    telephone: "0694599999",
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
    telephone: "0699999999",
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
    telephone: "0699999999",
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

  await User.insertMany([user1, user2]);
  console.log("Users created successfully");
  await fs.promises.mkdir('uploads/'+user1.id)
  await fs.promises.mkdir('uploads/'+user2.id)
  await fs.promises.copyFile('pictures/aron-jager-mOaS_uAW4lk-unsplash.jpg', 'uploads/'+user1.id+'/aron-jager-mOaS_uAW4lk-unsplash.jpg')
  await fs.promises.copyFile('pictures/denny-muller-ruwID4HIZUg-unsplash.jpg', 'uploads/'+user1.id+'/denny-muller-ruwID4HIZUg-unsplash.jpg')
  await fs.promises.copyFile('pictures/matt-artz-vT684iB7Ejg-unsplash.jpg', 'uploads/'+user1.id+'/matt-artz-vT684iB7Ejg-unsplash.jpg')
  await fs.promises.copyFile('pictures/aron-jager-mOaS_uAW4lk-unsplash.jpg', 'uploads/'+user2.id+'/aron-jager-mOaS_uAW4lk-unsplash.jpg')
  await fs.promises.copyFile('pictures/denny-muller-ruwID4HIZUg-unsplash.jpg', 'uploads/'+user2.id+'/denny-muller-ruwID4HIZUg-unsplash.jpg')
  await fs.promises.copyFile('pictures/matt-artz-vT684iB7Ejg-unsplash.jpg', 'uploads/'+user2.id+'/matt-artz-vT684iB7Ejg-unsplash.jpg')
  
  annonce1.photos.push('uploads/'+user1.id+'/aron-jager-mOaS_uAW4lk-unsplash.jpg')
  annonce2.photos.push('uploads/'+user1.id+'/denny-muller-ruwID4HIZUg-unsplash.jpg')
  annonce3.photos.push('uploads/'+user1.id+'/matt-artz-vT684iB7Ejg-unsplash.jpg')
  annonce4.photos.push('uploads/'+user2.id+'/aron-jager-mOaS_uAW4lk-unsplash.jpg')
  annonce5.photos.push('uploads/'+user2.id+'/denny-muller-ruwID4HIZUg-unsplash.jpg')
  annonce6.photos.push('uploads/'+user2.id+'/matt-artz-vT684iB7Ejg-unsplash.jpg')

  await Annonce.insertMany([
    annonce1,
    annonce2,
    annonce3,
    annonce4,
    annonce5,
    annonce6,
  ]);
  console.log("Announces created successfully");
};
