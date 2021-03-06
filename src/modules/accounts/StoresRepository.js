import { Stores } from "../../database/Stores";

async function ListAllStores(req, res, next) {
  try {
    const list = await Stores.find();
    res.status(200).json(list);
  } catch ({ error }) {
    res.status(500).json({ error: error });
  }
}

async function CreateStore(req, res) {
  const { idLoja, nomeLoja, descricaoLoja, imgLoja, favoritedBy } = req.body;
  const store = { idLoja, nomeLoja, descricaoLoja, imgLoja, favoritedBy };

  try {
    await Stores.create(store);

    res.status(201).json({ message: "Loja criada com sucesso!" });
  } catch (error) {
    const errorMessage = error.toString();
    res.status(400).json(errorMessage);
  }
}

async function FavoriteStore(req, res) {
  const { idLoja, cpf } = req.body;
  try {
    let StoreExists = await findStoreByID(idLoja);

    if (!StoreExists) {
      throw new Error("Operação cancelada, loja inesistente!");
    }

    let IndexOfFavorited = await CheckFavorited(StoreExists, cpf);

    if (IndexOfFavorited >= 0) {
      //se achou o CPF do user, remove o CPF do array de quem favortou essa loja (unfavorita)
      StoreExists.favoritedBy.splice(IndexOfFavorited, 1);
      await StoreExists.save();
      res
        .status(201)
        .json({ message: "Essa loja deixou de ser sua favorita!" });
    } else
      //se não achou o CPF, da um .push no cpf em StoreExists.favoritedBy
      StoreExists.favoritedBy.push(cpf);
    await StoreExists.save();
    res.status(201).json({ message: "Essa loja se tornou sua favorita!" });
  } catch (error) {
    const errorMessage = error.toString();
    res.status(400).json(errorMessage);
  }
}

async function findStoreByID(idLoja) {
  const store = await Stores.findOne({ idLoja: idLoja });

  return store;
}

async function CheckFavorited(StoreExists, Cpf) {
  const index = await StoreExists.favoritedBy.indexOf(Cpf);

  return index;
}

export { ListAllStores, FavoriteStore, CreateStore };
