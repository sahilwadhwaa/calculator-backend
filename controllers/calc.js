import History from "../model/calculation.js"

//POST
export const saveCalculation= async (req, res) => {
    try{
        const {name, calculation, result}= req.body;
        const details= new History({
            name, calculation, result
        })

        await details.save();
        const history= await History.find();
        res.status(201).json(history);
    }catch (err) {
        res.status(409).json({ message: err.message });
    }
}

/* GET */
export const getCalculation = async (req, res) => {
    try {
      const history = await History.find().limit(10);
      res.status(200).json(history);
    } catch (err) {
      res.status(404).json({ message: err.message });
  }
};

//PATCH

export const addRemoveCalc= async (req, res) => {
  try{
    const calculation= await History.findByIdAndDelete(req.params.id)
    if (!calculation) response.status(404).send("No calculation found");
    const history = await History.find().limit(10);
    res.status(200).json(history);
  } catch (error) {
    res.status(500).send(error);
  }
}