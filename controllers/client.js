import Client from "../Model/ClientModel.js";

export async function createClient(req, res) {
  try {
    const { name, surname, email, registeredDate } = req.body;

    const newClient = new Client({
      name,
      surname,
      email,
      registeredDate,
    });

    const createdClient = await newClient.save();

    res.status(201).json(createdClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllClients(req, res) {
  try {
    const client = await Client.find();
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateClient(req, res) {
  try {
    const { id } = req.params;
    const { name, surname, email, registeredDate } = req.body;

    const updatedClient = await Client.findByIdAndUpdate(
      id,
      { name, surname, email, registeredDate },
      { new: true }
    );

    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteClient(req, res) {
  try {
    const { id } = req.params;

    const deletedClient = await Client.findByIdAndDelete({ _id: id });

    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
