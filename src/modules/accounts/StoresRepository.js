import { Stores } from '../../database/Stores'

async function ListAllStores(res) {

    try {
        const list = await Stores.find();
        res.status(200).json(list)
    } catch ({ error }) {
        res.status(500).json({ error: error })
    }
}

export { ListAllStores }